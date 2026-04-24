import { HotelDescription } from '../interfaces/hotel-description.interface';

export const HOTEL_DESCRIPTIONS: HotelDescription[] = [
    {
        id: 'restaurant-mananitas',
        title: 'food.restaurant.title',
        name: 'food.restaurant.name',
        description: 'food.restaurant.description',
        image: '/images/rest3.jpg',
        imagePosition: 'object-center',
        whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20restaurante.',
        phone: '7773620000',
        schedules: [
            { label: 'food.restaurant.schedule.breakfast', hours: '8:00 a.m. - 12:00 p.m.' },
            { label: 'food.restaurant.schedule.lunch_week', hours: '1:00 p.m. - 10:00 p.m.' },
            { label: 'food.restaurant.schedule.lunch_weekend', hours: '1:00 p.m. - 11:00 p.m.' },
        ],
        urlMenu: 'https://lasmananitas.mx/#fh5co-menus'
    },
    {
        id: 'atrio-mananitas',
        title: 'food.atrio.title',
        name: 'food.atrio.name',
        description: 'food.atrio.description',
        image: '/images/atri2.jpg',
        imagePosition: 'object-center',
        whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20restaurante.',
        phone: '7773620000',
        schedules: [
            { label: 'food.atrio.schedule.contact', hours: 'food.labels.availability' },
        ],
    },
    {
        id: 'bar-azalea-mananitas',
        title: 'food.bar.title',
        name: 'food.bar.name',
        description: 'food.bar.description',
        image: '/images/menu_bar.webp',
        imagePosition: 'object-center',
        whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20restaurante.',
        phone: '7773620000',
        schedules: [
            { label: 'food.bar.schedule.weekend', hours: '12:00 p.m. - 10:00 p.m.' },
            { label: 'food.bar.schedule.sunday', hours: '12:00 p.m. - 06:00 p.m.' },
        ],
        urlMenu: 'https://lasmananitas.mx/indexbebidas#fh5co-menus'
    },
    {
        id: 'room-service',
        title: 'food.room.title',
        name: 'food.room.name',
        description: 'food.room.description',
        image: '/images/servicio_habitacion.webp',
        imagePosition: 'object-center',
        whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20room%20service.',
        phone: '7773620000',
        schedules: [
            { label: 'food.room.schedule.breakfast', hours: '08:00 a.m. - 10:00 p.m.' },
            { label: 'food.room.schedule.lunch', hours: '12:00 p.m. - 10:00 p.m.' },
            { label: 'food.room.schedule.service', hours: '08:00 a.m. - 10:00 p.m.' },
        ],
        urlMenu: 'https://lasmananitas.mx/indexdesayunos/#fh5co-menus'
    },
    {
        id: 'pool-menu',
        title: 'food.pool.title',
        name: 'food.pool.name',
        description: 'food.pool.description',
        image: '/images/alberca.webp',
        imagePosition: 'object-center',
        whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20menú%20de%20la%20alberca.',
        phone: '7773620000',
        schedules: [
            { label: 'food.pool.schedule.service', hours: '08:00 a.m. - 06:00 p.m.' },
        ],
        urlMenu: 'https://lasmananitas.mx/indexdesayunos/#fh5co-menus'
    },
    {
        id: 'spa-menu',
        title: 'food.spa.title',
        name: 'food.spa.name',
        description: 'food.spa.description',
        image: '/images/spa_menu.webp',
        imagePosition: 'object-center',
        whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20menú%20del%20Spa%20Orlane.',
        phone: '7773620000',
        schedules: [
            { label: 'food.spa.schedule.service', hours: '08:00 a.m. - 08:00 p.m.' },
        ],
        urlMenu: 'https://lasmananitas.mx/indexdesayunos/#fh5co-menus'
    },
];

// import { HotelDescription } from '../interfaces/hotel-description.interface';

// export const HOTEL_DESCRIPTIONS: HotelDescription[] = [
//     {
//         id: 'restaurant-mananitas',
//         title: 'Nuestro Servicio',
//         name: 'Restaurante Las Mañanitas',
//         description: 'Bienvenidos a nuestro restaurante, donde la exquisitez culinaria se fusiona con una experiencia gastronómica única. Cada momento del día es una oportunidad para explorar una carta que abraza lo mejor de la cocina local, nacional e internacional.\n\nNuestra grandiosa cocina ha sido reconocida a nivel internacional. \n\n',
//         image: '/images/rest3.jpg',
//         imagePosition: 'object-center',
//         whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20restaurante.',
//         phone: '7773620000',
//         schedules: [
//             { label: 'Desayunos', hours: '8:00 a.m. - 12:00 p.m.' },
//             { label: 'Comidas y cenas (Dom-Jue)', hours: '1:00 p.m. - 10:00 p.m.' },
//             { label: 'Comidas y cenas (Vie-Sáb)', hours: '1:00 p.m. - 11:00 p.m.' },
//         ],
//         // achievements: [
//         //     'Colección de los 25 Mejores Restaurantes del Mundo (Demitasse Cup Collection)',
//         //     'DiRoNa (Distinguished Restaurants of North America) desde 1993',
//         //     'The Gold List por Condé Nast Traveler en el año 2004',
//         //     'Galardonados con la distinción 4 diamantes por la "AAA" por más de una década',
//         //     'Distintivo H desde el año 2007',
//         // ],
//         urlMenu: 'https://lasmananitas.mx/#fh5co-menus'
//     },
//     {
//         id: 'atrio-mananitas',
//         title: 'Espacio exclusivo para eventos privados en Las Mañanitas.',
//         name: 'Atrio',
//         description: 'Este lugar íntimo para banquetes de hasta 50 personas mantiene la elegancia y el encanto colonial que distingue a nuestro hotel, ofreciendo un ambiente cálido y sofisticado. Con detalles arquitectónicos que evocan la herencia mexicana y una decoración que combina toques contemporáneos con elementos clásicos, Atrio es ideal para celebraciones especiales, reuniones privadas o cualquier evento de su preferencia. Será un placer compartir este nuevo concepto con ustedes.',
//         image: '/images/atri2.jpg',
//         imagePosition: 'object-center',
//         whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20restaurante.',
//         phone: '7773620000',
//         schedules: [
//             { label: 'Ext. 205/206', hours: 'Sujeto a disponibilidad.' },
//         ],
//     },
//     {
//         id: 'bar-azalea-mananitas',
//         title: 'Bar al aire libre en Las Mañanitas.',
//         name: 'Bar Azalea',
//         description: 'Azalea, nuestro bar al aire libre, toma su nombre de las flores que embellecen nuestros jardines. En este espacio, la tradición se refleja en una selección de bebidas clásicas, servidas en un entorno natural que invita a disfrutar con calma, en perfecta armonía con el ambiente que nos distingue.',
//         image: '/images/menu_bar.webp',
//         imagePosition: 'object-center',
//         whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20restaurante.',
//         phone: '7773620000',
//         schedules: [
//             { label: 'Viernes - Sabados', hours: '12:00 p.m. - 10:00 p.m.' },
//             { label: 'Domingos', hours: '12:00 p.m. - 06:00 p.m.' },
//         ],
//         urlMenu: 'https://lasmananitas.mx/indexbebidas#fh5co-menus'
//     },
//     {
//         id: 'room-service',
//         title: 'Servicio a la habitación de Las Mañanitas.',
//         name: 'Servicio a la habitación',
//         description: 'Disfrute de nuestra variedad de alimentos disponibles para nuestro servicio a la habitación.',
//         image: '/images/servicio_habitacion.webp',
//         imagePosition: 'object-center',
//         whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20room%20service.',
//         phone: '7773620000',
//         schedules: [
//             { label: 'Desayunos', hours: '08:00 a.m. - 10:00 p.m.' },
//             { label: 'Comidas y cenas', hours: '12:00 p.m. - 10:00 p.m.' },
//             { label: 'Servicio a la habitación', hours: '08:00 a.m. - 10:00 p.m.' },
//         ],
//         urlMenu: 'https://lasmananitas.mx/indexdesayunos/#fh5co-menus'
//     },
//     {
//         id: 'pool-menu',
//         title: 'Menú de alberca de Las Mañanitas.',
//         name: 'Menú de alberca',
//         description: 'Disfrute de nuestra variedad de alimentos disponibles en el menú de alberca.',
//         image: '/images/alberca.webp',
//         imagePosition: 'object-center',
//         whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20menú%20de%20la%20alberca.',
//         phone: '7773620000',
//         schedules: [
//             { label: 'Servicio', hours: '08:00 a.m. - 06:00 p.m.' },
//         ],
//         urlMenu: 'https://lasmananitas.mx/indexdesayunos/#fh5co-menus'
//     },
//     {
//         id: 'spa-menu',
//         title: 'Menú del Spa Orlane en Las Mañanitas.',
//         name: 'Menú del Spa Orlane',
//         description: 'Disfrute de nuestra variedad de alimentos disponibles en el menú del Spa Orlane.',
//         image: '/images/spa_menu.webp',
//         imagePosition: 'object-center',
//         whatsappUrl: 'https://api.whatsapp.com/send?phone=527773529395&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20menú%20del%20Spa%20Orlane.',
//         phone: '7773620000',
//         schedules: [
//             { label: 'Servicio', hours: '08:00 a.m. - 08:00 p.m.' },
//         ],
//         urlMenu: 'https://lasmananitas.mx/indexdesayunos/#fh5co-menus'
//     },
// ];