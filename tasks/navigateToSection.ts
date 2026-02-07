import { HomePage } from '../screens/homePage';
import type { SectionName } from '../constants/sections';

/**
 * Tarea genérica para navegar a una sección desde la home de the-internet.
 * Las tareas específicas (navigateToAbTesting, etc.) delegan aquí para mantener DRY.
 */
export class NavigateToSection {
  static async perform(homePage: HomePage, sectionName: SectionName): Promise<void> {
    const link = homePage.getSectionLink(sectionName);
    await link.click();
    await homePage.page.waitForLoadState('networkidle');
  }
}
