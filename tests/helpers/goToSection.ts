import { Page } from '@playwright/test';
import { NavigateToTheInternet } from '../../tasks/navigateToTheInternet';
import { NavigateToSection } from '../../tasks/navigateToSection';
import { SECTIONS } from '../../constants/sections';
import type { SectionName } from '../../constants/sections';

export type SectionKey = keyof typeof SECTIONS;

/**
 * Navega a la home de the-internet y luego a la sección elegida.
 * Facilita elegir destino con autocompletado: goToSection(page, SECTIONS.CHECKBOXES)
 * o por clave: goToSection(page, 'CHECKBOXES')
 */
export async function goToSection(
  page: Page,
  section: SectionName | SectionKey
): Promise<void> {
  const homePage = await NavigateToTheInternet.perform(page);
  const sectionName: SectionName =
    typeof section === 'string' && section in SECTIONS
      ? SECTIONS[section as SectionKey]
      : (section as SectionName);
  await NavigateToSection.perform(homePage, sectionName);
}
