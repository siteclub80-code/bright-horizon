import { createFileRoute } from '@tanstack/react-router';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteShell } from '@/components/siteclub/shell';
import { PortfolioGrid } from '@/components/siteclub/portfolio-grid';
import { Reveal } from '@/components/siteclub/reveal';

export const Route = createFileRoute('/portfolio')({
  head: () => ({ meta: [
    { title: 'Portfólio Siteclub — Sites e sistemas que criamos' },
    { name: 'description', content: 'Conheça sites e sistemas reais criados pela Siteclub para empresas e profissionais.' },
    { property: 'og:title', content: 'Portfólio Siteclub' },
    { property: 'og:description', content: 'Sites e sistemas reais criados pela Siteclub.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

function Portfolio() {
  return <SiteShell><Reveal><main className="site-width section-space"><div className="page-heading"><span className="eyebrow">PORTFÓLIO</span><h1>Projetos que já<br/>estão no ar.</h1><p>Sites e sistemas criados para empresas e profissionais.</p></div><PortfolioGrid/></main></Reveal></SiteShell>;
}
