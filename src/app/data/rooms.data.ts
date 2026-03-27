import { RoomData } from '../interfaces/room-data.interface';

export const ROOMS: RoomData[] = [
    {
        id: 'mananitas-suite',
        title: 'Las Mañanitas Suites',
        image: '/images/suite.jpg',
        description: 'Nuestra gran suite Las Mañanitas es única en su clase; ofrece amplio espacio en interiores, su sala con chimenea cuenta con una hermosa vista hacia el jardín principal del restaurante.Esta suite dispone de dos habitaciones, cada una con 1 cama King size, baño con tina y closet.',
        descriptionExtra: '',
        size: '27 - 42 m²',
        amenities: [
            '1 Cama King Size',
            'Ocupación: 4',
            'Aire acondicionado',
            'Servicio Telefónico',
            'Cafetera Nespresso',
            'Caja de seguridad',
            'Internet'
        ],
        moreInfoUrl: 'https://lasmananitas.com.mx/es/mananitas'
    },
    {
        id: 'garden-suite',
        title: 'Garden Suite',
        image: '/images/garden.jpg',
        description: 'Los interiores y exteriores de una de las mejores suites garantizan una estancia perfecta. Cuenta con una amplia sala con chimenea y terraza con espectacular vista hacia la piscina y jardín privado el cual le proporcionará el entorno adecuado para cenas y desayunos íntimos. Dispone de hermoso baño con tina, adornado con talavera mexicana, amplio vestidor y closet. Puede elegir entre una cama King size o dos matrimoniales.',
        size: '27 - 42 m²',
        amenities: [
            'Tipo de cama: 1 king size o 2 matrimoniales',
            'Ocupación: 2',
            'Máximo cama extra: 1 (costo adicional)',
            'Servicio Telefónico',
            'Cafetera Nespresso',
            'Caja de seguridad',
            'Internet'
        ],
        moreInfoUrl: 'https://lasmananitas.com.mx/es/garden'
    }
];