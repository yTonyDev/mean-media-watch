import { Routes, RouterModule } from '@angular/router';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { MediaItemFormComponent } from './components/media-item-form/media-item-form.component';

const appRoutes: Routes = [
    { path: '', component: MediaItemListComponent },
    { path: 'add', component: MediaItemFormComponent },
    { path: ':medium', component: MediaItemListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
