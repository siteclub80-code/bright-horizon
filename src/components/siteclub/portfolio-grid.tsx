import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioProjects } from '@/lib/portfolio';
import corretora from '@/assets/portfolio-corretora.jpg';
import drmarcia from '@/assets/portfolio-drmarcia.jpg';
import novalog from '@/assets/portfolio-novalog.jpg';
import estetica from '@/assets/portfolio-lf-clinica-estetica.jpg';

const covers: Record<string, string> = { corretora, drmarcia, novalog, 'lf-clinica-estetica': estetica };

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {portfolioProjects.map((project) => (
        <article key={project.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1">
          <Link to="/projeto/$projeto" params={{ projeto: project.slug }} aria-label={`Ver ${project.name}`} className="block border-b border-border bg-muted">
            <div className="flex items-center gap-1.5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-3 truncate text-xs text-muted-foreground">{project.anonymous ? 'cliente confidencial' : project.name.toLowerCase()}</span>
            </div>
            <div className="aspect-[16/7] overflow-hidden">
              <img src={covers[project.slug]} alt={`Capa do projeto ${project.name}`} loading="lazy" width={1280} height={560} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </Link>
          <div className="flex flex-1 flex-col gap-3 p-6">
            <small className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</small>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              <Button asChild variant="outline"><Link to="/projeto/$projeto" params={{ projeto: project.slug }}>Visitar projeto<ArrowUpRight /></Link></Button>
              <Button asChild variant="link"><Link to="/contato" search={{ plano: project.plan }}>Quero um projeto parecido<ArrowRight /></Link></Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
