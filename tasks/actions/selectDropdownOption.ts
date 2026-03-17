import { expect } from '@playwright/test';
import { DropdownPage } from '../../screens/dropdownPage';

/**
 * Selecciona una opción del dropdown y verifica que quedó seleccionada.
 */
export class SelectDropdownOption {
  static async perform(dropdownPage: DropdownPage, option: 'Option 1' | 'Option 2'): Promise<void> {
    await dropdownPage.dropdown.selectOption({ label: option });
    await expect(dropdownPage.dropdown).toHaveValue(option === 'Option 1' ? '1' : '2');
  }
}
