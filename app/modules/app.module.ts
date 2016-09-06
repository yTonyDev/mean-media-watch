import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';


import { AppComponent }  from '../components/app.component';
import {MediaItemService} from '../media-item.service';
import {LOOKUP_LISTS, lookupLists} from '../providers';
import { routing }        from '../app.routing';
import { MediaItemListComponent } from '../components/media-item-list/media-item-list.component';
import { MediaItemFormComponent } from '../components/media-item-form/media-item-form.component';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, routing ],
  declarations: [ AppComponent, MediaItemListComponent, MediaItemFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MediaItemService, 
  { provide: LOOKUP_LISTS, useValue: lookupLists },
  HTTP_PROVIDERS
  ]
})
export class AppModule {}
