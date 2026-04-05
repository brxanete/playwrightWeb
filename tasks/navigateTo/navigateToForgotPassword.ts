import { HomePage } from '../../screens/homePage';
import { SECTIONS } from '../../constants/sections';
import { NavigateToSection } from './navigateToSection';

export class NavigateToForgotPassword {
  static async perform(homePage: HomePage): Promise<void> {
    await NavigateToSection.perform(homePage, SECTIONS.FORGOT_PASSWORD);
  }
}
