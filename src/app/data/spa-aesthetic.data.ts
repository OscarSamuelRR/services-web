import { ServiceCategory } from '../interfaces/instruction.interface';

export const SPA_AESTHETIC_SERVICES: ServiceCategory[] = [
    {
        title: 'Alaciados - Hair straightening',
        services: [
            { name: 'Corte caballero', nameEn: 'Man cut', price: 300 },
            { name: 'Corte dama', nameEn: 'Woman cut', price: 350 }
        ]
    },
    {
        title: 'Alaciados - Hair straightening',
        services: [
            { name: 'Cabello corto', nameEn: 'Short hair', price: 800 },
            { name: 'Cabello medio', nameEn: 'Medium hair', price: 900 },
            { name: 'Cabello largo', nameEn: 'Long hair', price: 1000 }
        ]
    },
    {
        title: 'Curly',
        services: [
            { name: 'Cabello corto', nameEn: 'Short hair', price: 850 },
            { name: 'Cabello medio', nameEn: 'Medium hair', price: 950 },
            { name: 'Cabello largo', nameEn: 'Long hair', price: 1050 }
        ]
    },
    {
        title: 'Peinado - Hairstyle',
        services: [
            { name: 'Cabello corto', nameEn: 'Short hair', price: 950 },
            { name: 'Cabello medio', nameEn: 'Medium hair', price: 1100 },
            { name: 'Cabello largo', nameEn: 'Long hair', price: 1300 },
            { name: 'Peinado para novia', nameEn: 'Bride hairstyle', price: 1500 },
            { name: 'Prueba de peinado', nameEn: 'Hairstyle sample', price: 1500 },
            { name: 'Prueba de maquillaje', nameEn: 'Makeup sample', price: 2100 }
        ]
    },
    {
        title: 'Depilaciones - Hair removal',
        services: [
            { name: 'Depilación área bigote', nameEn: 'Upper lip wax', price: 200 },
            { name: 'Depilación área de bikini', nameEn: 'Bikini line wax', price: 500 },
            { name: 'Depilación brasileña', nameEn: 'Brazillian wax', price: 650 },
            { name: 'Depilación de axila', nameEn: 'Under arm wax', price: 450 },
            { name: 'Depilación de ceja', nameEn: 'Eyebrow wax', price: 200 },
            { name: 'Depilación de espalda completa', nameEn: 'Full back wax', price: 900 },
            { name: 'Depilación de piernas completas', nameEn: 'Full legs wax', price: 1000 },
            { name: 'Depilación media pierna', nameEn: 'Half let wax', price: 600 },
            { name: 'Depilación de brazos', nameEn: 'Arm wax', price: 750 },
            { name: 'Depilación de rostro completo', nameEn: 'Full face wax', price: 550 },
            { name: 'Diseño y planchado de ceja', nameEn: 'Eyebrow shaping and straightening wax', price: 250 }
        ]
    },
    {
        title: 'Otros servicios - Other services',
        services: [
            { name: 'Esmaltado de uñas gelish', nameEn: 'Nail gelish color', price: 200 },
            { name: 'Esmaltado de uñas normal', nameEn: 'Nail color', price: 150 },
            { name: 'Manicure', nameEn: 'Manicure', price: 650 },
            { name: 'Manicure gelish', nameEn: 'Gelish manicure', price: 750 },
            { name: 'Pedicure', nameEn: 'Pedicure', price: 750 },
            { name: 'Pedicure gelish', nameEn: 'Gelish pedicure', price: 850 },
            { name: 'Maquillaje', nameEn: 'Makeup', price: 1800 },
            { name: 'Maquillaje de novia', nameEn: 'Wedding makeup', price: 2100 },
            { name: 'Retiro de esmalte normal', nameEn: 'Nail polish removing', price: 100 },
            { name: 'Retiro de gelish', nameEn: 'Gelish removing', price: 150 },
            { name: 'Pestañas (de tira o grupo)', nameEn: 'Eyelashes', price: 750 }
        ]
    }
];

export const SPA_FOOTER_NOTE = {
    text: 'Precios en moneda nacional, Incluyen IVA',
    textEn: 'Prices in national currency, VAT Included'
};