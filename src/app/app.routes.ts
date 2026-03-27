import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { Rooms } from './pages/rooms/rooms';
import { DetailsRoom } from './pages/details-room/details-room';
import { HotelServices } from './pages/hotel-services/hotel-services';
import { Amenities } from './pages/amenities/amenities';
import { ServicesReception } from './pages/services-reception/services-reception';

export const routes: Routes = [
    { path: '', component: Index },
    { path: 'hotel-services', component: HotelServices },
    { path: 'amenities', component: Amenities },
    { path: 'services-reception', component: ServicesReception },
    { path: 'rooms', component: Rooms },
    { path: 'rooms/:id', component: DetailsRoom },
    { path: '**', redirectTo: '' }
];
