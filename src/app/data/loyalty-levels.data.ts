import { LoyaltyLevel } from '../interfaces/loyalty-level.interface';

export const LOYALTY_LEVELS: LoyaltyLevel[] = [
    {
        id: 1,
        name: 'Invitado Clásico',
        nights: 2,
        color: '#002368',
        headerColor: '#002368',
        image: '/images/vip.webp',
        benefits: [
            'Early check-in y late check-out sujetos a disponibilidad.',
        ],
        requirements: [
            'Posibilidad de ascender de nivel conforme a su frecuencia de hospedaje.',
        ]
    },
    {
        id: 2,
        name: 'Invitado VIP',
        nights: 10,
        color: '#808080',// gray-400
        headerColor: '#808080',
        image: '/images/premium.webp',
        benefits: [
            'Early check-in y late check-out sujetos a disponibilidad',
            'Upgrade de habitación sujeto a disponibilidad.',
            'Tarifa preferencial (menor a la tarifa contratada).',
            'Tarifa Preferencial',
            '5% de descuento en Spa Orlane',
        ],
        requirements: [
            'Posibilidad de ascender de nivel.',
        ]
    },
    {
        id: 3,
        name: 'Invitado Selecto ',
        nights: 15,
        color: '#b29d5f',
        headerColor: '#b29d5f',
        image: '/images/elite.webp',
        benefits: [
            'Botella de vino Las Mañanitas por cada estancia.',
            'Early check-in y late check-out sujetos a disponibilidad.',
            'Upgrade de habitación sujeto a disponibilidad.',
            'Tarifa Preferencial',
            '10% de descuento en Spa Orlane',
            '10% de descuento en Restaurante Las Mañanitas (consumo general).',
            '10% de descuento en eventos sociales.',
        ],
        requirements: [
            'Posibilidad de ascender de nivel.',
        ]
    },
    {
        id: 4,
        name: 'Invitado Mañanitas',
        nights: 20,
        color: '#00633a',
        headerColor: '#00633a',
        image: '/images/invitado_mananitas.webp',
        benefits: [
            'Botella de vino Las Mañanitas por cada estancia.',
            'Early check-in y late check-out sujetos a disponibilidad.',
            'Upgrade de habitación sujeto a disponibilidad.',
            'Tarifa preferencial.',
            'Certificado anual para 2 noches gratis (sujeto a disponibilidad, no aplica en puentes ni días festivos).',
            '15% de descuento en Spa Orlane',
            '10% de descuento en Restaurante Las Mañanitas (consumo general).',
            '10% de descuento en eventos sociales y tarifa preferencial en renta de jardín.',
        ],
        requirements: [
            'Posibilidad de ascender de nivel conforme a su frecuencia de hospedaje',
        ]
    }
];

// export const LOYALTY_LEVELS_SPA: LoyaltyLevel[] = [
//     {
//         id: 1,
//         name: 'Beneficios del programa',
//         nights: 4,
//         color: 'border-blue-700',
//         headerColor: 'bg-blue-700',
//         image: '/images/spaorlane.svg',
//         benefits: [
//             '1ª visita.',
//             '2ª visita.',
//             '3ª visita: Recepción con amenidad especial de bienvenida.',
//             '4ª visita: Disfrute de un tratamiento de 50 minutos en cortesía, a elegir entre nuestra selección de servicios disponibles.',
//         ],
//         requirements: [
//             '',
//         ]
//     },
// ];