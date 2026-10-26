import { createServerFn } from '@tanstack/react-start';
import { requestSchema } from './siteclub';
export const submitCompanyRequest = createServerFn({ method: 'POST' })
 .inputValidator((input: unknown) => requestSchema.parse(input))
 .handler(async ({ data }) => {
  const decoded = data.files.map(file => {
   let bytes: Uint8Array;
   try { bytes = Uint8Array.from(atob(file.content), c => c.charCodeAt(0)); } catch { throw new Error('Arquivo inválido.'); }
   const png = bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71;
   const jpg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
   const webp = String.fromCharCode(...bytes.slice(0,4)) === 'RIFF' && String.fromCharCode(...bytes.slice(8,12)) === 'WEBP';
   if (!bytes.length || bytes.length > 2 * 1024 * 1024 || !(file.type === 'image/png' ? png : file.type === 'image/jpeg' ? jpg : webp)) throw new Error('Use imagens PNG, JPG ou WebP de até 2 MB.');
   return { ...file, bytes };
  });
  // Public intake is intentionally insert-only; visitors never receive private rows or file URLs.
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { count, error: countError } = await supabaseAdmin.from('company_requests').select('id', { count: 'exact', head: true }).eq('email', data.email).gte('created_at', new Date(Date.now()-3600000).toISOString());
  if (countError) throw new Error('Não foi possível enviar agora. Tente novamente.');
  if ((count ?? 0) >= 3) throw new Error('Muitos envios recentes. Tente novamente mais tarde.');
  const id = crypto.randomUUID(); const uploaded: string[] = [];
  try {
   for (const file of decoded) {
    const ext = file.type === 'image/png' ? 'png' : file.type === 'image/jpeg' ? 'jpg' : 'webp';
    const path = `${id}/${file.kind}-${crypto.randomUUID()}.${ext}`;
    const { error } = await supabaseAdmin.storage.from('company-requests').upload(path, file.bytes, { contentType: file.type });
    if (error) throw error; uploaded.push(path);
   }
   const { files: _files, ...fields } = data;
   const { error } = await supabaseAdmin.from('company_requests').insert({ id, ...fields, files: uploaded });
   if (error) throw error;
   return { id };
  } catch {
   if (uploaded.length) await supabaseAdmin.storage.from('company-requests').remove(uploaded);
   throw new Error('Não foi possível enviar sua solicitação. Tente novamente.');
  }
 });
