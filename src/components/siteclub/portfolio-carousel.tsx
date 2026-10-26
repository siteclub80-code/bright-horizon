import * as React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { portfolioProjects } from '@/lib/portfolio';
import { portfolioCovers } from '@/components/siteclub/portfolio-grid';

const AUTOPLAY_MS = 5000;

/** Home-page portfolio: the same projects as the Portfólio page, shown one or two at a time. */
export function PortfolioCarousel() {
  const wrapper = React.useRef<HTMLDivElement>(null);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [snaps, setSnaps] = React.useState<number[]>([]);
  const [paused, setPaused] = React.useState(false);
  const [onScreen, setOnScreen] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSnaps(api.scrollSnapList());
      setCurrent(api.selectedScrollSnap());
    };
    sync();
    api.on('select', sync);
    api.on('reInit', sync);
    return () => {
      api.off('select', sync);
      api.off('reInit', sync);
    };
  }, [api]);

  React.useEffect(() => {
    const node = wrapper.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry?.isIntersecting ?? false),
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!api || paused || !onScreen || snaps.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api, paused, onScreen, snaps.length]);

  return (
    <div
      ref={wrapper}
      className="portfolio-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ loop: true, align: 'start' }}>
        <CarouselContent className="-ml-5 md:-ml-7">
          {portfolioProjects.map((project) => (
            <CarouselItem key={project.slug} className="basis-full pl-5 md:basis-1/2 md:pl-7">
              <article className="portfolio-slide">
                <Link
                  to="/projeto/$projeto"
                  params={{ projeto: project.slug }}
                  aria-label={`Ver ${project.name}`}
                  className="portfolio-slide-media"
                >
                  <img
                    src={portfolioCovers[project.slug]}
                    alt={`Capa do projeto ${project.name}`}
                    loading="lazy"
                    width={1280}
                    height={560}
                  />
                </Link>
                <div className="portfolio-slide-body">
                  <small className="portfolio-slide-category">{project.category}</small>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <Button asChild variant="outline">
                    <Link to="/projeto/$projeto" params={{ projeto: project.slug }}>
                      Visitar projeto
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="portfolio-carousel-nav portfolio-carousel-prev" />
        <CarouselNext className="portfolio-carousel-nav portfolio-carousel-next" />
      </Carousel>

      <div className="portfolio-carousel-dots">
        {snaps.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ver o projeto ${portfolioProjects[index]?.name ?? index + 1}`}
            aria-current={index === current ? 'true' : undefined}
            className={index === current ? 'is-active' : ''}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
