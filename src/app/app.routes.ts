import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { Rooms } from './pages/rooms/rooms';
import { DetailsRoom } from './pages/details-room/details-room';

export const routes: Routes = [
    { path: '', component: Index },
    { path: 'rooms', component: Rooms },
    { path: 'rooms/:id', component: DetailsRoom },
    { path: '**', redirectTo: '' }
];
