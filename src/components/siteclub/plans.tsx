import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Check, Layers, LayoutTemplate, Code2, Clock3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { plans, websiteDeliveryDays } from '@/lib/siteclub';
import { cn } from '@/lib/utils';
export function DeliveryPromise() {
 return <div className="delivery-promise"><Clock3 aria-hidden="true"/><span>Seu site pronto em até <strong>{websiteDeliveryDays} dias</strong></span></div>;
}

export function PlanGrid() {
 const icons = { landing: LayoutTemplate, company: Layers, system: Code2 };
 return <div className="plans-grid">{plans.map(plan => {
  const Icon = icons[plan.id];
  return <article key={plan.id} className={cn('plan-card', plan.id === 'company' && 'plan-featured')}>
   <div className="plan-top"><Icon className="plan-icon"/>{plan.id === 'company' && <span className="plan-tag">PRESENÇA COMPLETA</span>}</div>
   <h3>{plan.name}</h3><p>{plan.label}</p>
   <p className="plan-description">{plan.description}</p>
   <div className="price">{plan.id === 'system' && <small>A partir de</small>}<span>R$ <strong>{plan.price.toFixed(2).replace('.', ',')}</strong><em>/mês</em></span></div>
   <Button asChild variant={plan.id === 'company' ? 'default' : 'outline'} className={cn('plan-button button-3d', plan.id !== 'company' && 'button-3d-outline')}><Link to="/contato" search={{ plano: plan.id }}>Quero este plano<ArrowUpRight/></Link></Button>
   <ul>{plan.features.map(feature => <li key={feature}><Check aria-hidden="true"/>{feature}</li>)}</ul>
   <p className="plan-audience">{plan.audience}</p>
   {plan.id === 'system' ? <p className="plan-note">Valor final e prazo definidos conforme a complexidade do sistema.</p> : <DeliveryPromise/>}
  </article>;
 })}</div>;
}
