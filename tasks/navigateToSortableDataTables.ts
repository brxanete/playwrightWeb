import { HomePage } from '../screens/homePage';
import { SECTIONS } from '../constants/sections';
import { NavigateToSection } from './navigateToSection';

export class NavigateToSortableDataTables {
  static async perform(homePage: HomePage): Promise<void> {
    await NavigateToSection.perform(homePage, SECTIONS.SORTABLE_DATA_TABLES);
  }
}
