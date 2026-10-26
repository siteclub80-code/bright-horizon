/** Client projects shown in the portfolio. Real client names, addresses and data are never shown. */
export interface PortfolioProject {
  readonly slug: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  /** Plan suggested by the "Quero um projeto parecido" button. */
  readonly plan: 'landing' | 'company' | 'system';
  /** When true, the client's real name and address are hidden in the portfolio. */
  readonly anonymous: boolean;
}

export const portfolioProjects: readonly PortfolioProject[] = [
  { slug: 'corretora', name: 'Corretora de imóveis', category: 'Site', description: 'Site para corretora de imóveis, com apresentação dos imóveis e contato direto.', plan: 'company', anonymous: true },
  { slug: 'drmarcia', name: 'Consultório de psicologia', category: 'Site', description: 'Site acolhedor para consultório de psicologia, com serviços e agendamento.', plan: 'company', anonymous: true },
  { slug: 'novalog', name: 'Sistema de logística', category: 'Sistema', description: 'Solução para logística, com operação e informações organizadas em um só lugar.', plan: 'system', anonymous: true },
  { slug: 'lf-clinica-estetica', name: 'Clínica de estética', category: 'Site', description: 'Site para clínica de estética, com tratamentos e contato por WhatsApp.', plan: 'company', anonymous: true },
];
