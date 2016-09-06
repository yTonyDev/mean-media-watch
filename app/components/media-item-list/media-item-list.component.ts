import {Component} from '@angular/core';
import {MediaItemComponent} from '../media-item/media-item.component';
import {CategoryListPipe} from '../../category-list.pipe';
import {MediaItemService} from '../../media-item.service';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'media-item-list',
    directives: [MediaItemComponent, ROUTER_DIRECTIVES],
    pipes: [CategoryListPipe], 
    templateUrl: 'app/components/media-item-list/media-item-list.component.html',
    styleUrls: ['app/components/media-item-list/media-item-list.component.css']
})
export class MediaItemListComponent {
    medium = '';
    mediaItems = [];
    private sub: Subscription;
    constructor(private mediaItemService: MediaItemService,
                private route: ActivatedRoute,
                private router: Router){}
                
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.medium = params['medium'];
            this.getMediaItems(this.medium);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onMediaItemDeleted(mediaItem) {
        this.sub.unsubscribe();
        this.mediaItemService.delete(mediaItem._id).subscribe(() => {this.getMediaItems(this.medium)});
    }

    getMediaItems(medium) {
        this.medium = medium;
        this.mediaItemService.get(medium)
            .map(res => res.json())
            .subscribe(mediaItems => {
                if(this.medium != undefined){
                    this.mediaItems = mediaItems.filter(this.filterMedium, medium);
                } else {
                    this.mediaItems = mediaItems;
                }
            }, (err) => this.router.navigate(['']));
    }

    filterMedium(obj){
        if(obj.medium === this){
            return true;
        } else {
            return false;
        }
    }
}