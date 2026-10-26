import { describe, it, expect } from 'vitest';
import { plans, supportUrl, requestSchema, websiteDeliveryDays, portfolioWhatsAppNumber, portfolioWhatsAppUrl } from '@/lib/siteclub';
describe('Siteclub business rules', () => {
 it('landing page costs R$39.99', () => expect(plans.find(p => p.id === 'landing')?.price).toBe(39.99));
 it('company website costs R$59.99', () => expect(plans.find(p => p.id === 'company')?.price).toBe(59.99));
 it('systems start at R$89.99', () => expect(plans.find(p => p.id === 'system')?.price).toBe(89.99));
 it('websites are ready within 3 days', () => expect(websiteDeliveryDays).toBe(3));
 it('help reaches the requested WhatsApp', () => expect(supportUrl).toBe('https://wa.me/5511937588251'));
 it('accepts company data and rejects invalid email', () => { const data = { company_name:'Empresa',contact_name:'Cliente', email:'cliente@example.com',phone:'11 99999-9999',plan:'landing',description:'Serviços de arquitetura.',files:[] }; expect(requestSchema.safeParse(data).success).toBe(true); expect(requestSchema.safeParse({...data,email:'invalid'}).success).toBe(false); });
 it('portfolio WhatsApp button uses 11 99999-9999', () => { expect(portfolioWhatsAppNumber).toBe('11 99999-9999'); expect(portfolioWhatsAppUrl).toBe('https://wa.me/5511999999999'); });
});

import { formatPhone } from '@/lib/siteclub';
it('formats WhatsApp as 11 99999-9999', () => { expect(formatPhone('11999999999')).toBe('11 99999-9999'); });
it('rejects WhatsApp outside the 11 99999-9999 format', () => { const data = { company_name:'Empresa',contact_name:'Cliente', email:'cliente@example.com',phone:'11 99999-9999',plan:'landing' as const,description:'Serviços de arquitetura.',files:[] }; expect(requestSchema.safeParse({...data,phone:'99999'}).success).toBe(false); expect(requestSchema.safeParse({...data,phone:'(11) 99999-9999'}).success).toBe(false); expect(requestSchema.safeParse({...data,email:'a@b'}).success).toBe(false); });
