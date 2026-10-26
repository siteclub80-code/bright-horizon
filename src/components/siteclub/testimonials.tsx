import { Quote, Star } from 'lucide-react';

const testimonials = [
 { name: 'Mariana Alves', business: 'Studio de arquitetura', quote: 'O site ficou elegante e mostra nossos projetos do jeito que sempre quisemos. Recebemos contatos novos já na primeira semana.' },
 { name: 'Rafael Costa', business: 'Oficina mecânica', quote: 'Ficou pronto em 3 dias, como prometido. Agora os clientes chamam direto no WhatsApp pelo site.' },
 { name: 'Juliana Martins', business: 'Clínica de estética', quote: 'Atendimento atencioso do início ao fim. O visual combina perfeitamente com a nossa marca.' },
 { name: 'Carlos Henrique', business: 'Escritório de contabilidade', quote: 'Precisávamos passar mais confiança online e conseguimos. O site institucional ficou muito profissional.' },
 { name: 'Fernanda Souza', business: 'Confeitaria artesanal', quote: 'Mandei as fotos dos bolos e eles transformaram em uma página linda. Minhas encomendas aumentaram.' },
 { name: 'Lucas Ribeiro', business: 'Personal trainer', quote: 'A landing page é simples, rápida e funciona muito bem no celular. Valeu cada centavo da assinatura.' },
 { name: 'Patrícia Gomes', business: 'Imobiliária', quote: 'O sistema para organizar os imóveis facilitou demais a nossa rotina. Equipe muito parceira.' },
 { name: 'André Lima', business: 'Barbearia', quote: 'Rápido, bonito e sem complicação. Meus clientes elogiam o site toda semana.' },
 { name: 'Camila Rocha', business: 'Loja de roupas', quote: 'Eu não entendia nada de site e eles cuidaram de tudo. Recomendo de olhos fechados.' },
 { name: 'Bruno Ferreira', business: 'Empresa de climatização', quote: 'O site apresenta nossos serviços com clareza e já trouxe orçamentos de bairros novos.' },
 { name: 'Aline Pereira', business: 'Psicóloga', quote: 'Um espaço acolhedor e profissional para apresentar meu trabalho. Exatamente o que eu imaginava.' },
 { name: 'Thiago Mendes', business: 'Restaurante', quote: 'Cardápio, fotos e contato em um só lugar. O preço da assinatura é muito justo.' },
 { name: 'Renata Carvalho', business: 'Escola de idiomas', quote: 'As matrículas pelo site cresceram bastante. O suporte responde rápido sempre que preciso.' },
 { name: 'Gustavo Nunes', business: 'Advocacia', quote: 'Site sóbrio, moderno e bem organizado. Transmite a seriedade do nosso escritório.' },
 { name: 'Beatriz Oliveira', business: 'Pet shop', quote: 'Ficou alegre e cheio de personalidade. Os clientes encontram tudo fácil, até pelo celular.' },
];

const initials = (name: string) => name.split(' ').map(p => p[0]).slice(0, 2).join('');

function Card({ t }: { t: typeof testimonials[number] }) {
 return <figure className="testimonial-card">
  <div className="testimonial-card-top"><Quote className="text-primary" size={22}/><span className="testimonial-stars" aria-label="5 estrelas">{Array.from({ length: 5 }).map((_, i) => <Star key={i}/>)}</span></div>
  <blockquote>“{t.quote}”</blockquote>
  <figcaption className="testimonial-person"><span>{initials(t.name)}</span><div><strong>{t.name}</strong><p>{t.business}</p></div></figcaption>
 </figure>;
}

export function Testimonials() {
 return <section className="testimonials-marquee-section" aria-label="Depoimentos de clientes">
  <div className="site-width section-heading"><div><span className="eyebrow">QUEM CONFIA NO SITECLUB</span><h2>Depoimentos dos<br/>nossos clientes.</h2></div><p>Empresas de todos os tamanhos com uma presença digital à altura do seu trabalho.</p></div>
  <div className="testimonials-marquee">
   <div className="testimonials-track">
    {[...testimonials, ...testimonials].map((t, i) => <div key={i} aria-hidden={i >= testimonials.length}><Card t={t}/></div>)}
   </div>
  </div>
 </section>;
}
