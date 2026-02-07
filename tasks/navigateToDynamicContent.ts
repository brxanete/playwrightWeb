import { HomePage } from '../screens/homePage';
import { SECTIONS } from '../constants/sections';
import { NavigateToSection } from './navigateToSection';

export class NavigateToDynamicContent {
  static async perform(homePage: HomePage): Promise<void> {
    await NavigateToSection.perform(homePage, SECTIONS.DYNAMIC_CONTENT);
  }
}
