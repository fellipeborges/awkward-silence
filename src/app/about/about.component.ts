import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../localization/localization.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public localizationService: LocalizationService
  ) { }

  ngOnInit(): void {
  }
}
