import { z } from 'zod';
export const supportUrl = 'https://wa.me/5511937588251';
/** WhatsApp number shown by the portfolio's contact button. */
export const portfolioWhatsAppNumber = '11 99999-9999';
export const portfolioWhatsAppUrl = `https://wa.me/55${portfolioWhatsAppNumber.replace(/\D/g, '')}`;
export const websiteDeliveryDays = 3;
export const plans = [
 { id: 'landing', name: 'Landing Page', price: 39.99, label: 'Para transformar visitas em oportunidades.', description: 'Uma página dedicada a apresentar seu serviço e levar o visitante até o contato com sua empresa.', audience: 'Ideal para divulgar um serviço ou uma oferta.', features: ['Seu serviço em uma página: apresentação, benefícios e contato', 'Identidade visual alinhada à sua logo e à sua marca', 'Layout adaptado para celular e computador', 'Botão de WhatsApp para conversar com seus visitantes', 'Textos de apresentação escritos para vender o seu serviço', 'Hospedagem, segurança e certificado SSL incluídos', 'Ajustes mensais de textos e imagens sem custo extra', 'Entrega do site pronto em até 3 dias'] },
 { id: 'company', name: 'Site Institucional', price: 59.99, label: 'Sua empresa com a presença que merece.', description: 'Um site para reunir sua história, apresentar seus serviços e mostrar os trabalhos que sua empresa já realizou.', audience: 'Ideal para empresas que querem apresentar seu negócio por completo.', features: ['Apresentação da empresa e das informações do seu negócio', 'Páginas dedicadas aos serviços e aos canais de contato', 'Galeria com as fotos dos trabalhos que você enviar', 'Design personalizado com a identidade da sua empresa', 'Até 5 páginas: início, sobre, serviços, galeria e contato', 'Formulário de contato e integração com WhatsApp e redes sociais', 'Otimização para aparecer no Google', 'Hospedagem, SSL e atualizações mensais incluídos', 'Entrega do site pronto em até 3 dias'] },
 { id: 'system', name: 'Sistema Personalizado', price: 89.99, label: 'Tecnologia para simplificar seu dia a dia.', description: 'Uma solução planejada a partir da sua rotina. As funcionalidades e o escopo são definidos conforme a necessidade da operação.', audience: 'Ideal para negócios que precisam de uma solução própria.', features: ['Planejamento da solução conforme a sua operação', 'Funcionalidades definidas de acordo com sua necessidade', 'Interface profissional para facilitar o uso no dia a dia', 'Orçamento personalizado conforme o escopo e a complexidade', 'Painel administrativo com acesso para sua equipe', 'Cadastros, relatórios e controles sob medida', 'Acesso seguro pelo computador ou celular', 'Suporte e melhorias contínuas durante a assinatura'] },
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
