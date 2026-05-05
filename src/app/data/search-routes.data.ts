import { SearchRoutes } from '../interfaces/search-routes.interface';
import { ROOMS } from './rooms.data';
import { TOURS } from './tours.data';
import { EventsAreaData } from './events-area.data';
import { OFFERS_EXPERIENCES } from './offers-experiences.data';
import { HOTEL_DESCRIPTIONS } from './hotel-description.data';

export const SEARCH_ROUTES: SearchRoutes[] = [

    // Rutas simples
    // { label: 'Habitaciones', route: '/rooms', keywords: ['habitacion', 'cuarto', 'suite', 'dormir, habitaciones'] },
    // { label: 'Alimentos y Bebidas', route: '/food-drinks', keywords: ['restaurante', 'comida', 'cena', 'desayuno', 'alimentos', 'bebidas', 'menu'] },
    // { label: 'Spa Orlane', route: '/spa-orlane', keywords: ['spa', 'orlane', 'masaje', 'tratamiento', 'relajacion'] },
    // { label: 'Servicios del hotel', route: '/hotel-services', keywords: ['servicios', 'hotel', 'amenidades'] },
    // { label: 'Amenidades', route: '/amenities', keywords: ['amenidades', 'articulos', 'botella', 'cafe'] },
    // { label: 'Servicios de Recepción', route: '/services-reception', keywords: ['recepcion', 'servicios', 'cama', 'toalla'] },
    // { label: 'Asistencia', route: '/assistance', keywords: ['asistencia', 'ayuda', 'wifi', 'cafetera', 'caja fuerte'] },
    // { label: 'Lavandería', route: '/laundry', keywords: ['lavanderia', 'ropa', 'lavado'] },
    // { label: 'Canales de TV', route: '/tv-channels', keywords: ['tv', 'television', 'canales'] },
    // { label: 'Reglamento', route: '/hotel-rules', keywords: ['reglamento', 'reglas', 'normas'] },
    // { label: 'Alberca', route: '/pool', keywords: ['alberca', 'piscina', 'nadar'] },
    // { label: 'Ofertas y Experiencias', route: '/offers-experiences', keywords: ['ofertas', 'experiencias', 'promociones', 'descuento'] },
    // { label: 'Tours y Excursiones', route: '/experiences-tours', keywords: ['tours', 'excursiones', 'visitas', 'cuernavaca'] },
    // { label: 'Programa de Lealtad', route: '/loyalty-program', keywords: ['lealtad', 'programa', 'vip', 'puntos', 'beneficios'] },
    // { label: 'Programa de Lealtad Spa', route: '/loyalty-program-spa', keywords: ['lealtad', 'spa', 'programa', 'orlane'] },
    // { label: 'Reglamento Spa', route: '/spa-rules', keywords: ['reglamento', 'spa', 'reglas'] },
    // { label: 'Estética Spa', route: '/spa-aesthetic', keywords: ['estetica', 'spa', 'belleza', 'corte'] },
    // { label: 'Room Service', route: '/food-drinks', keywords: ['room service', 'servicio a la habitacion', 'menu']},
    // { label: 'Menu spa', route: '/food-drinks', keywords: ['menu spa', 'menu'] },

    { label: 'search_routes.rooms', route: '/rooms', keywords: ['habitacion', 'cuarto', 'suite', 'dormir', 'rooms', 'bedroom', 'accommodation', 'lodging'] },
    { label: 'search_routes.food_drinks', route: '/food-drinks', keywords: ['restaurante', 'comida', 'cena', 'desayuno', 'alimentos', 'bebidas', 'food', 'drinks', 'restaurant', 'breakfast', 'lunch', 'dinner', 'dining'] },
    { label: 'search_routes.spa_orlane', route: '/spa-orlane', keywords: ['spa', 'orlane', 'masaje', 'tratamiento', 'relajacion', 'massage', 'treatment', 'relaxation', 'wellness'] },
    { label: 'search_routes.hotel_services', route: '/hotel-services', keywords: ['servicios', 'hotel', 'amenidades', 'services', 'facilities'] },
    { label: 'search_routes.amenities', route: '/amenities', keywords: ['amenidades', 'articulos', 'botella', 'cafe', 'amenities', 'coffee', 'bottle'] },
    { label: 'search_routes.services_reception', route: '/services-reception', keywords: ['recepcion', 'servicios', 'cama', 'toalla', 'reception', 'bed', 'towel', 'housekeeping'] },
    { label: 'search_routes.assistance', route: '/assistance', keywords: ['asistencia', 'ayuda', 'wifi', 'cafetera', 'caja fuerte', 'assistance', 'help', 'safe', 'coffee maker', 'safe deposit box', 'air conditioning'] },
    { label: 'search_routes.laundry', route: '/laundry', keywords: ['lavanderia', 'ropa', 'lavado', 'laundry', 'clothes', 'washing'] },
    { label: 'search_routes.tv_channels', route: '/tv-channels', keywords: ['tv', 'television', 'canales', 'channels', 'cable'] },
    { label: 'search_routes.hotel_rules', route: '/hotel-rules', keywords: ['reglamento', 'reglas', 'normas', 'rules', 'policies', 'regulations'] },
    { label: 'search_routes.pool', route: '/pool', keywords: ['alberca', 'piscina', 'nadar', 'pool', 'swim', 'swimming'] },
    { label: 'search_routes.offers_experiences', route: '/offers-experiences', keywords: ['ofertas', 'experiencias', 'promociones', 'descuento', 'offers', 'experiences', 'deals', 'promotions', 'discount'] },
    { label: 'search_routes.tours', route: '/experiences-tours', keywords: ['tours', 'excursiones', 'visitas', 'cuernavaca', 'excursions', 'sightseeing', 'trips'] },
    { label: 'search_routes.loyalty_program', route: '/loyalty-program', keywords: ['lealtad', 'programa', 'vip', 'puntos', 'beneficios', 'loyalty', 'points', 'rewards', 'benefits'] },
    { label: 'search_routes.loyalty_program_spa', route: '/loyalty-program-spa', keywords: ['lealtad', 'spa', 'programa', 'orlane', 'loyalty', 'rewards', 'spa program'] },
    { label: 'search_routes.spa_rules', route: '/spa-rules', keywords: ['reglamento', 'spa', 'reglas', 'rules', 'spa policies', 'regulations'] },
    { label: 'search_routes.spa_aesthetic', route: '/spa-aesthetic', keywords: ['estetica', 'spa', 'belleza', 'corte', 'aesthetic', 'beauty', 'hair', 'nails'] },
    { label: 'search_routes.room_service', route: '/room-service', keywords: ['room service', 'servicio a la habitacion', 'menu', 'food delivery', 'in-room dining'] },
    { label: 'search_routes.spa_menu', route: '/spa-menu', keywords: ['menu spa', 'menu', 'spa menu', 'treatments menu', 'spa services'] },

    // Generadas desde archivos DATA
    // ...ROOMS.map(r => ({
    //     label: r.title,
    //     route: `/rooms/${r.id}`,
    //     keywords: ['habitacion', 'suite', 'cuarto', r.title.toLowerCase()]
    // })),

    // ...Object.keys(TOURS).map(key => ({
    //     label: `Tour ${key.charAt(0).toUpperCase() + key.slice(1)}`,
    //     route: `/tour-page/${key}`,
    //     keywords: ['tour', 'excursion', 'visita', key]
    // })),

    // ...EventsAreaData.map(e => ({
    //     label: e.name,
    //     route: `/events/${e.id}`,
    //     keywords: ['evento', e.id.replace(/-/g, ' ')]
    // })),

    // ...OFFERS_EXPERIENCES.map(o => ({
    //     label: o.title,
    //     route: `/offers-experiences-content/${o.id}`,
    //     keywords: ['oferta', 'experiencia', o.title.toLowerCase()]
    // })),

    // ...HOTEL_DESCRIPTIONS.map(o => ({
    //     label: o.name,
    //     route: `food-drinks/description/${o.id}`,
    //     keywords: ['restaurante mananitas', 'bar', 'azalea', 'menu', 'atrio', o.name.toLowerCase()]
    // })),
];