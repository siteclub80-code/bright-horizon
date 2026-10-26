/** Real client projects shown in the portfolio. Names/descriptions are inferred from the addresses. */
export interface PortfolioProject {
  readonly slug: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  /** Address shown inside the Siteclub viewer (never displayed as text). */
  readonly url: string;
  /** Plan suggested by the "Quero um projeto parecido" button. */
  readonly plan: 'landing' | 'company' | 'system';
  /** When true, the client's real name and address are hidden in the portfolio. */
  readonly anonymous: boolean;
}

export const portfolioProjects: readonly PortfolioProject[] = [
  { slug: 'corretora', name: 'Corretora de seguros', category: 'Site', description: 'Presença digital para corretora, com apresentação dos serviços e contato direto.', url: 'https://previacorretora.lovable.app', plan: 'company', anonymous: true },
  { slug: 'drmarcia', name: 'Consultório médico', category: 'Site', description: 'Site profissional para consultório, com especialidades e agendamento.', url: 'https://drmarcia.lovable.app', plan: 'company', anonymous: true },
  { slug: 'novalog', name: 'NovaLog', category: 'Sistema', description: 'Solução para logística, com operação e informações organizadas em um só lugar.', url: 'https://novalog.lovable.app', plan: 'system', anonymous: false },
  { slug: 'lf-clinica-estetica', name: 'Clínica de estética', category: 'Site', description: 'Site para clínica de estética, com tratamentos e contato por WhatsApp.', url: 'https://lfclnicaesttica.lovable.app', plan: 'company', anonymous: true },
];
