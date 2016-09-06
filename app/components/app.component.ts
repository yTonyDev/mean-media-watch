import { Component } from '@angular/core';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'media-tracker-app',
  templateUrl: 'app/components/app.component.html',
  styleUrls: ['app/components/app.component.css'],
  directives: [MediaItemListComponent, MediaItemFormComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  
}
