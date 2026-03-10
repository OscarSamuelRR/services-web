import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { Rooms } from './pages/rooms/rooms';
import { Details } from './pages/details/details';

export const routes: Routes = [
    { path: '', component:  Index},
    { path: 'rooms', component: Rooms },
    { path: 'details', component: Details },
    {
        path: '**',
        redirectTo: ''
    }
];
