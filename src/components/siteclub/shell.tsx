import { Link } from '@tanstack/react-router';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import iconUrl from '@/assets/siteclub-icon.webp';
import { supportUrl } from '@/lib/siteclub';
import type { ReactNode } from 'react';
export function Brand() { return <Link to="/" className="brand" aria-label="Siteclub início"><img src={iconUrl} width="40" height="40" alt=""/><span>site<span className="text-primary">club</span></span></Link>; }
export function SiteShell({ children }: { children: ReactNode }) { return <><header className="site-header"><div className="site-width header-inner"><Brand/><nav aria-label="Menu principal"><Link to="/" activeProps={{ className: 'nav-active' }}>Início</Link><Link to="/planos" activeProps={{ className: 'nav-active' }}>Planos</Link><Link to="/portfolio" activeProps={{ className: 'nav-active' }}>Portfólio</Link><Link to="/contato" activeProps={{ className: 'nav-active' }}>Começar projeto</Link></nav><Button asChild className="button-3d header-cta"><Link to="/contato" search={{ plano: 'landing' }}>Começar projeto<ArrowUpRight/></Link></Button></div></header>{children}<footer className="site-width site-footer"><Brand/><p>Sites e sistemas por assinatura.</p><span>© {new Date().getFullYear()} Siteclub</span></footer><Button asChild className="floating-help" aria-label="Ajuda pelo WhatsApp"><a href={supportUrl} target="_blank" rel="noreferrer"><MessageCircle/><span>Precisa de ajuda?</span></a></Button></>; }
