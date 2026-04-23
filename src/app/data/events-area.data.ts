import { EventArea } from '../interfaces/event-area.interface';

export const EventsAreaData: EventArea[] = [
    {
        id: 'corporate-events',
        title: 'events_area_data.corporate.title',
        name: 'events_area_data.corporate.name',
        description: 'events_area_data.corporate.description',
        image: '/images/empresarial.png',
        whatsappUrl: 'events_area_data.corporate.whatsappUrl',
        phone: '7773620000',
        imagePosition: 'object-center',
        type: 'events_area_data.type_corporate',
        typeIf: 'empresariales'
    },
    {
        id: 'social-events',
        title: 'events_area_data.social.title',
        name: 'events_area_data.social.name',
        description: 'events_area_data.social.description',
        image: '/images/sociales2.jpg',
        imagePosition: 'object-center',
        whatsappUrl: 'events_area_data.social.whatsappUrl',
        phone: '7773620000',
        type: 'events_area_data.type_social',
        typeIf: 'sociales',
    }
];