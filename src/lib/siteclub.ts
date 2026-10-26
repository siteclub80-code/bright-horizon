import { z } from 'zod';
export const supportUrl = 'https://wa.me/5511937588251';
export const websiteDeliveryDays = 3;
export const plans = [
 { id: 'landing', name: 'Landing Page', price: 39.99, label: 'Para transformar visitas em oportunidades.', description: 'Uma página que apresenta seu serviço e leva o visitante ao contato.', audience: 'Ideal para divulgar um serviço ou oferta.', features: ['Página única com seu serviço e contato', 'Visual com a identidade da sua marca', 'Botão de WhatsApp', 'Hospedagem e SSL incluídos', 'Ajustes mensais sem custo extra'] },
 { id: 'company', name: 'Site Institucional', price: 59.99, label: 'Sua empresa com a presença que merece.', description: 'Um site completo com sua história, serviços e trabalhos realizados.', audience: 'Ideal para apresentar seu negócio por completo.', features: ['Até 5 páginas personalizadas', 'Galeria com fotos dos seus trabalhos', 'Formulário, WhatsApp e redes sociais', 'Otimização para o Google', 'Hospedagem, SSL e atualizações mensais'] },
 { id: 'system', name: 'Sistema Personalizado', price: 89.99, label: 'Tecnologia para simplificar seu dia a dia.', description: 'Uma solução sob medida, planejada conforme a sua operação.', audience: 'Ideal para negócios que precisam de uma solução própria.', features: ['Funcionalidades sob medida', 'Painel administrativo para sua equipe', 'Cadastros, relatórios e controles', 'Acesso pelo computador ou celular', 'Suporte e melhorias contínuas'] },
] as const;
export const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
export const phonePattern = /^[1-9]\d 9?\d{4}-\d{4}$/;
export function formatPhone(value: string) {
 const d = value.replace(/\D/g, '').slice(0, 11);
 if (d.length <= 2) return d;
 const rest = d.slice(2); const split = rest.length > 8 ? 5 : 4;
 return rest.length > split ? `${d.slice(0,2)} ${rest.slice(0,split)}-${rest.slice(split)}` : `${d.slice(0,2)} ${rest}`;
}
export const requestSchema = z.object({
 company_name: z.string().trim().min(2).max(100), contact_name: z.string().trim().min(2).max(100),
 email: z.string().trim().max(255).regex(emailPattern), phone: z.string().trim().regex(phonePattern),
 plan: z.enum(['landing','company','system']), description: z.string().trim().min(10).max(2000),
 files: z.array(z.object({ kind: z.enum(['logo','service']), type: z.enum(['image/png','image/jpeg','image/webp']), content: z.string().max(2800000) })).max(6),
});
export type CompanyRequest = z.infer<typeof requestSchema>;
