import { Component } from '@angular/core';
import { routerTransicion } from './animations/common-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransicion],
  host: {'[@routerTransition]': ''}
})
export class AppComponent {
  title = 'app';
}
