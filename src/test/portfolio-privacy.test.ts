import { describe, expect, it } from 'vitest';
import { portfolioProjects } from '@/lib/portfolio';

describe('portfolio privacy', () => {
  it('marks every client project as confidential', () => {
    expect(portfolioProjects.every((p) => p.anonymous)).toBe(true);
  });
  it('never exposes real client names or site addresses', () => {
    const text = JSON.stringify(portfolioProjects).toLowerCase();
    for (const banned of ['lovable.app', 'priscila', 'márcia', 'marcia', 'luana', 'novalog']) expect(text).not.toContain(banned);
  });
});
