import { SpaRule } from '../interfaces/instruction.interface';

export const SPA_HEADER = {
    title: 'Reglamento Spa Orlane Paris by Las Mañanitas',
    subtitle: 'Horario de funcionamiento: De 08:00 a 20:00 hrs.',
    description: 'Para disfrutar de una experiencia única en nuestro SPA, deberá tener en cuenta las siguientes normas:'
};

export const SPA_RULES: SpaRule[] = [
    {
        number: 1,
        text: 'Todos los tratamientos del SPA son mixtos y están disponibles tanto para los huéspedes del Hotel, así como para los clientes externos.'
    },
    {
        number: 2,
        text: 'Está prohibida la entrada en pareja (hombre y mujer) al circuito hidrotermal, ya que son áreas separadas de hombres y mujeres.',
        bold: true
    },
    {
        number: 3,
        text: 'Es obligatorio efectuar una reservación previa, sujeta a disponibilidad.'
    },
    {
        number: 4,
        text: 'Prohibido el ingreso a menores de edad.'
    },
    {
        number: 5,
        text: 'Los servicios del SPA para mujeres embarazadas están sujetos a condiciones. (Consulte a su médico).'
    },
    {
        number: 6,
        text: 'Es obligatorio complementar una ficha clínica indicando las condiciones en las que se encuentra su salud, la cual deberá de llenar el usuario antes de ingresar a cualquier servicio del SPA.'
    },
    {
        number: 7,
        text: 'Es responsabilidad del cliente informar en la recepción del SPA de cualquier cambio importante.'
    },
    {
        number: 8,
        text: 'En caso de retraso al tratamiento por parte del cliente, el establecimiento podrá limitar el tiempo de duración del mismo en función de otras citas ya existentes.',
        bold: true
    },
    {
        number: 9,
        text: 'El SPA pone a disposición de sus clientes la llave de un casillero, donde encontrarán una canasta para pertenencias, unas sandalias, una toalla, y ganchos para colocar su ropa. La llave deberá ser devuelta en la recepción del SPA al abandonar las instalaciones.'
    },
    {
        number: 10,
        text: 'El material utilizado durante los tratamientos solo es para uso interno y es obligatorio la entrega del mismo en el SPA.'
    },
    {
        number: 11,
        text: 'Se prohíbe la entrada en estado inconveniente.',
        bold: true
    },
    {
        number: 12,
        text: 'Está prohibido su consumo e introducir alimentos y bebidas alcohólicas u otras sustancias que no sean de nuestros centros de consumo.',
        bold: true
    },
    {
        number: 13,
        text: 'El SPA no se responsabiliza, ni civil, ni penalmente, de los daños sufridos por el cliente como consecuencia del uso incorrecto de los espacios/equipamientos o existentes en las instalaciones ni por la pérdida, hurto y/o daño de objetos personales.'
    },
    {
        number: 14,
        text: 'Aconsejamos a nuestros clientes que todos los objetos de adorno sean retirados antes de cualquier tratamiento.'
    },
    {
        number: 15,
        text: 'Una de las características del SPA es su ambiente apacible, tranquilo y sereno; por ello pedimos a nuestros clientes que guarden una actitud mesurada y poder brindarles un ambiente adecuado.'
    },
    {
        number: 16,
        text: 'Prohibido ingresar con comidas y bebidas a la piscina.',
        bold: true
    },
    {
        number: 17,
        text: 'Antes de usar cualquier instalación hay que ducharse.'
    },
    {
        number: 18,
        text: 'El uso de la piscina es bajo exclusivo riesgo del usuario.'
    },
    {
        number: 19,
        text: 'Queda estrictamente prohibido fumar dentro de las instalaciones del SPA.',
        bold: true
    },
    {
        number: 20,
        text: 'Por razones de salud se recomienda no más de 15 minutos en el jacuzzi, vapor y sauna.'
    },
    {
        number: 21,
        text: 'Por razones de salud y seguridad no se puede dar ningún tratamiento bajo la influencia del alcohol o drogas.',
        bold: true
    },
    {
        number: 22,
        text: 'Por su seguridad no se permite caminar descalzo dentro de las instalaciones del SPA.'
    },
    {
        number: 23,
        text: 'Es obligatorio usar el traje de baño en las zonas húmedas.'
    },
    {
        number: 24,
        text: 'Favor de no utilizar productos corporales dentro del jacuzzi, vapor, sauna y alberca.'
    },
    {
        number: 25,
        text: 'Queda prohibido el uso de jacuzzi, sauna o vapor para personas con enfermedades contagiosas o heridas abiertas.',
        bold: true
    },
    {
        number: 26,
        text: 'El gerente del SPA tiene la facultad de negar el uso de las instalaciones a las personas que incumplan con este reglamento o que, a su juicio, puedan resultar perjudiciales para las mismas.'
    },
    {
        number: 27,
        text: 'No se permite el uso de bocinas o de cualquier aparato para poner música.'
    },
    {
        number: 28,
        text: 'Usar audífonos o música muy baja en la zona de la alberca.'
    }
];

export const SPA_FOOTER_SECTIONS = [
    {
        content: 'Favor de dejar sus objetos personales en la caja de seguridad de su habitación y/ o locker, mantenga la llave consigo en todo momento.El SPA y el hotel no se hace responsable por objetos olvidados o perdidos.'
    },
    {
        // title: 'Tratamiento/masaje que usted recibe tiene propósito básico la reducción de estrés, alivio de la tensión muscular, mejoramiento de la circulación y una relajación en general.',
        content: 'Si durante la sesión no se menciona ninguna incomodidad al terapeuta se entenderá que todo fue satisfactorio y el cargo total de su tratamiento será aplicado.'
    },
    {
        content: 'El tratamiento/masaje que usted recibió es de carácter estrictamente profesional, cualquier conducta inapropiada se dará por terminada su sesión y será expulsado de las instalaciones con cargo total a su cuenta.'
    },
    {
        content: 'Favor de dejar sus objetos personales en la caja de seguridad de su habitación y/o locker, mantenga la llave consigo en todo momento. El SPA y el hotel no se hace responsable por objetos olvidados o perdidos.'
    },
    // {
    //     content: 'Al firmar esta ficha, confirmo que estoy en condición médica óptima para recibir los tratamientos de SPA que yo elegí y entiendo las políticas y reglamento del SPA. Por lo tanto, el SPA y el hotel quedan absueltos de cualquier responsabilidad relacionada con los servicios de Spa y uso de las instalaciones.'
    // }
];