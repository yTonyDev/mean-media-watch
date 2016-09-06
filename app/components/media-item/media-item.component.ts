import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FavoriteDirective} from '../../favorite.directive';

@Component({
  selector: 'media-item',
  directives: [FavoriteDirective],
  templateUrl: 'app/components/media-item/media-item.component.html',
  styleUrls: ['app/components/media-item/media-item.component.css']
})
export class MediaItemComponent {
  @Input('mediaItemToWatch') mediaItem;
  @Output('deleted') delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
