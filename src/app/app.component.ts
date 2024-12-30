import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteSimpleExample } from './autocomplete/autoComplete.component';
import { BadgeOverviewExample } from './Badge/badge-overview-example.component';
import { BottomSheetOverviewExample } from './bottomSheet/bottom-sheet-overview-example.component';
import { ButtonToggleModeExample } from './button toggle/button-toggle-mode-example.component';
import { CheckboxOverviewExample } from './checkbox/checkbox-overview-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AutocompleteSimpleExample, BadgeOverviewExample, 
    BottomSheetOverviewExample, ButtonToggleModeExample, CheckboxOverviewExample,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-set-up';
}
