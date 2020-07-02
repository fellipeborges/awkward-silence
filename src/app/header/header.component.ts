import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../localization/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public localizationService: LocalizationService
  ) { }

  ngOnInit(): void {
  }

}
