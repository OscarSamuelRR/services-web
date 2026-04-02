import { TourPlace } from '../interfaces/tour.interface';

export const TOURS: Record<string, TourPlace[]> = {
    cuernavaca: [
        {
            id: 'palacio-cortes',
            category: 'Cuernavaca',
            name: 'Palacio de Cortes',
            description: 'Monumento histórico ordenado construir por Hernán Cortes en los años intermedios a la Conquista de México, edificado sobre los restos del centro ceremonial y de tributo a Tláhuac llamado Tlatlocayacalli. Actualmente es el museo regional Cuauhnáhuac.',
            image: '/images/palacio.jpg',
        },
        {
            id: 'catedral-cuernavaca',
            category: 'Cuernavaca',
            name: 'Catedral de Cuernavaca',
            description: 'Es un edificio del siglo XVI, lo que la convierte en una de las catedrales más antiguas del país, es la quinta fundación Franciscana en México. Se estableció en 1525 por los doce primeros frailes franciscanos que llegaron al país, con la ayuda de un nuevo grupo recién llegado de España.',
            image: '/images/catedral.jpg',
        },
        {
            id: 'jardin-borda',
            category: 'Cuernavaca',
            name: 'Jardín Borda',
            description: 'Museo histórico ubicado en lo que fue la mansión de veraneo del acaudalado minero taxqueño, José de la Borda. Sus maravillosos jardines, sus barrocas fuentes y amplios andadores enmarcados por las extensiones de árboles frondosos de todo tipo, dentro del jardín se encuentra un lago que cuenta con pequeñas embarcaciones, aso como un museo donde se encontraran artesanías.',
            image: '/images/borda.jpg',
        },
        {
            id: 'museo-robert-brady',
            category: 'Cuernavaca',
            name: 'Museo Robert Brady',
            description: 'Antigua residencia de Robert Brady, un coleccionista estadounidense que adorno la casa con una colección que comprende más de 1,300 piezas de arte, desde pintura, escultura, grabado y artesanía de todo el mundo. Entre los pequeños tesoros que se pueden admirar destacan obras de Rufino Tamayo, Frida Kahlo, Diego Rivera, María Izquierdo, Miguel Covarrubias, entre muchos otros.',
            image: '/images/brady.jpg',
        },
    ],
    tepoztlan: [
        {
            id: 'tour-tepoztlan',
            category: 'Tepoztlán',
            name: 'Tour Tepoztlán',
            description: 'Antigua residencia de Robert Brady, un coleccionista estadounidense que adorno la casa con una colección que comprende más de 1,300 piezas de arte, desde pintura, escultura, grabado y artesanía de todo el mundo. Entre los pequeños tesoros que se pueden admirar destacan obras de Rufino Tamayo, Frida Kahlo, Diego Rivera, María Izquierdo, Miguel Covarrubias, entre muchos otros.',
            image: '/images/tepoz1.jpg',
        },
    ],
    xochicalco: [
        {
            id: 'tour-xochicalco',
            category: 'Xochicalco',
            name: 'Tour Xochicalco',
            description: 'Visita y recorrido de 4-6 horas, en el sitio arqueológico. Xochicalco es un sitio arqueológico que se ubica en el municipio de Miacatlán en el estado de Morelos, México. Fue declarado patrimonio de la humanidad por la UNESCO en 1999.\n\nLa zona Arqueológica está conformada por la plaza central, que alberga un adoratorio y la gran pirámide; la Malinche, donde se localiza 20 altares redondos, el palacio y el juego de pelota sur. La plaza principal es el espacio más importante de esta ciudad sagrada, por alojar la pirámide de la serpiente emplumada, además cuenta con el museo donde hay una colección formada por objetos arqueológicos provenientes de las excavaciones en la zona, tales como, la cerámica y la escultura.',
            image: '/images/xochicalco.jpg',
        },
    ],
    taxco: [
        {
            id: 'tour-taxco',
            category: 'Ciudad de Taxco',
            name: 'Tour Ciudad de Taxco',
            description: 'Visita y recorrido de 4-6 horas. Iniciamos el recorrido con la visita a un taller de plata, en el que se recibirá una pequeña explicación de los diferentes procesos para trabajar la plata, dentro de una mina simulada.\n\nPosteriormente nos dirigimos hacia la hermosa parroquia de Santa Prisca, construida en el siglo XVI, es una muestra del arte barroco novohispano. Se dará un tiempo para recorrer y disfrutar de esta ciudad colonial, empezando por el zócalo, continuando por el área de artesanías y museos de plata.\n\nPara la comida podrá tomar el tiempo necesario para ingresar a algún restaurante típico de Taxco.',
            image: '/images/taxco2.jpg',
        },
    ],
    grutas: [
        {
            id: 'tour-grutas',
            category: 'Grutas de Cacahuamilpa',
            name: 'Tour Grutas de Cacahuamilpa',
            description: 'Visita y recorrido de 4-6 horas en las grutas. Estas majestuosas grutas se ubican en la sierra madre del sur, abarcan parte de los estados de Guerrero y Morelos.\n\nEn su interior, las grutas de Cacahuamilpa resguardan una serie vastísima de figuras extrañas que evocan la imaginación de los visitantes, el lugar también cuenta con varios ríos subterráneos que se podrán recorrer si así lo desea. Más de 90 salones están abiertos al público; se recorren en aproximadamente 2 horas. La caminata, de unos 2 kilómetros, es sumamente gratificante; el guía comparte con el público detalles y anécdotas que enriquecen aún más la visita.',
            image: '/images/tours4.jpg',
        },
    ],
    casaresiu: [
        {
            id: 'tour-casaresiu',
            category: 'Casa Resiú Nayaá',
            name: 'Tour Casa Resiú Nayaá',
            description: 'La destilería de mezcal más grande de México. Vive la experiencia de un tour diseñado para conocer el origen y proceso de la elaboración del mejor mezcal artesanal.\n\nLas piñas de agave son molidas en tahona de piedra y el néctar obtenido es fermentado en tina de madera, doblemente destilado en alambique de cobre, todo esto bajo el cuidado de los maestros mezcaleros.\n\n• Recorrido guiado de 2 hrs. por los campos de agave.\n• Visita guiada por la destilería.\n• Antojitos mexicanos.\n• Cata especial de hasta 4 mezcladores: Aromas de Guerrero, Weber, Cupreata y Criollo.\n• Degustación de chocolate de 100% cacao.\n• Botella de mezcal Criollo (50 mil).',
            image: '/images/nayaa2.jpg',
        },
    ],
};