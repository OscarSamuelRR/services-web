import { LoyaltyLevel } from '../interfaces/loyalty-level.interface';

export const LOYALTY_LEVELS: LoyaltyLevel[] = [
    {
        id: 1,
        name: 'VIP',
        nights: 10,
        color: 'border-blue-700',
        headerColor: 'bg-blue-700',
        image: '/images/vip.jpg',
        benefits: [
            'Early Check In',
            'Late Check Out',
            'Up Grade',
            'Tarifa Preferencial',
            'SPA Orlane: 5% descuento',
        ]
    },
    {
        id: 2,
        name: 'PREMIUM',
        nights: 15,
        color: 'border-gray-400',
        headerColor: 'bg-gray-400',
        image: '/images/premium.jpg',
        benefits: [
            'Early Check In',
            'Late Check Out',
            'Up Grade',
            'Tarifa Preferencial',
            'SPA Orlane: 10% descuento',
            'Restaurante: 10% descuento',
            'Eventos: 10% descuento',
            'Amenidades: Botella de vino mañanitas por estancia',
        ]
    },
    {
        id: 3,
        name: 'ELITE',
        nights: 20,
        color: 'border-yellow-600',
        headerColor: 'bg-yellow-600',
        image: '/images/elite.jpg',
        benefits: [
            'Early Check In',
            'Late Check Out',
            'Up Grade',
            'Tarifa Preferencial',
            'SPA Orlane: 15% descuento',
            'Restaurante: 10% descuento',
            'Eventos: 10% descuento',
            'Amenidades: Botella de vino mañanitas por estancia',
            'Otros: Certificado dos noches, Acceso a preventas exclusivas',
        ]
    }
];