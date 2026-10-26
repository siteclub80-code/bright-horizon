import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Brand } from '@/components/siteclub/shell';
import { portfolioProjects } from '@/lib/portfolio';

export const Route = createFileRoute('/projeto/$projeto')({
  loader: ({ params }) => {
    const project = portfolioProjects.find((p) => p.slug === params.projeto);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.project.name ?? 'Projeto';
    return { meta: [
      { title: `${name} — Portfólio Siteclub` },
      { name: 'description', content: `Veja o projeto ${name} criado pela Siteclub.` },
      { property: 'og:title', content: `${name} — Portfólio Siteclub` },
      { property: 'og:description', content: `Projeto ${name} criado pela Siteclub.` },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ] };
  },
  notFoundComponent: () => <main className="site-width section-space"><h1>Projeto não encontrado</h1><Button asChild variant="outline"><Link to="/portfolio">Voltar ao portfólio</Link></Button></main>,
  component: ProjectViewer,
});

/** Shows a portfolio project inside Siteclub so the visitor never sees the project's address. */
function ProjectViewer() {
  const { project } = Route.useLoaderData();
  return (
    <div className="flex h-screen flex-col bg-background">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-2">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm"><Link to="/portfolio"><ArrowLeft />Portfólio</Link></Button>
          <Brand />
        </div>
        <span className="hidden text-sm text-muted-foreground md:inline">{project.name}</span>
        <div className="flex items-center gap-2">
          
          <Button asChild size="sm"><Link to="/contato" search={{ plano: project.plan }}>Quero um projeto parecido<ArrowRight /></Link></Button>
        </div>
      </header>
      <iframe src={project.url} title={project.name} className="w-full flex-1 border-0" />
    </div>
  );
}
