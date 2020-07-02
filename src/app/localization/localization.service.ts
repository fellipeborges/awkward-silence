import { Injectable } from '@angular/core';
import { Localization } from '../model/localization';
import { LOCALIZATION_EN_US } from './translations/en-us';
import { LOCALIZATION_PT_BR } from './translations/pt-br';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  constructor() {}

  // Get the current localization instance
  public Instance: Localization;

  // Set the current language localization
  setLocalization(locale: string): void {
    switch (locale.toLowerCase()) {
      case 'pt-br':
        this.Instance = LOCALIZATION_PT_BR;
        return;

      case 'en-us':
      default:
        this.Instance = LOCALIZATION_EN_US;
        return;
    }
  }
}
