import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocalizationService } from '../localization/localization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(
    private titleService: Title,
    public localizationService: LocalizationService
  ) {}

  ngOnInit(): void {}

  setLocalization(locale: string): void {
    this.localizationService.setLocalization(locale);
    this.titleService.setTitle(this.localizationService.Instance.appName);
  }
}
