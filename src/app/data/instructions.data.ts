import { Instruction } from '../interfaces/instruction.interface';

export const INSTRUCTIONS_DATA: Instruction[] = [
    {
        id: 'caja',
        title: 'Caja Fuerte / Safe deposit box',
        subtitle: 'Instructivo / Instructions',
        icon: 'lock',
        steps: [
            'Presione el botón "reset" que se encuentra en la parte posterior de la puerta. / Press the “reset” botton located inside of the door.',
            'Enseguida se encenderá una luz amarilla. / Then a yellow light will be activated.',
            'Mientras la luz amarilla esta encendida teclear 4 dígitos seguido de la tecla "#" y / While the yellow light is on press any 4 digit combination plus “#” and',
            'Girar la perilla. / Turn the handle.',
            'Para abrirla, teclee 3-4 números seguido de la tecla "#", al encender la luz verde / To open the safe, press your 3-4 digit combination plus “#”, then a green light will be activated and',
            'Girar la perilla. / Turn the handle'
        ],
        note: 'El hotel no se hace responsable por objetos de valor no depositados en la caja fuerte. No forzar la caja de seguridad al cerrarla, y dejarla abierta a su salida. ¡Gracias! / The hotel takes no responsibility for valuable objects not deposited in the safe during your stay. Do not force the safe box when closing and leave it open at check out. Thank you!'
    },
    {
        id: 'cafetera',
        title: 'Cafetera / Coffeemaker Nespresso',
        subtitle: 'Instructivo / Instructions',
        icon: 'coffee',
        steps: [
            'Para encender la máquina pulse el botón espresso o lungo. Luces intermitentes: la máquina se está calentando(25 segundos) luces fijas: la máquina está lista. Llene el depósito de agua potable. / To turn the machine on, press either the espresso or lungo button. Blinking lights: heating up(25 seconds). Rinse the water tank before filling with drinking water.',
            'Levante la palanca por completo e introduzca la cápsula. Ajustes programados de fábrica: taza espresso: 40 ml, taza lungo: 110 ml. / Lift the lever completely and insert the capsule. Factory settings: espresso cup: 40 ml / 1.35 oz, lungo cup: 110 ml / 3.72 oz.',
            'Cierre la palanca y coloque una taza debajo de la salida de café. / Close the lever and place a cup under the coffee outlet.',
            'La preparación se detendrá automáticamente. Para detener el flujo de café o rellenar su taza, pulse de nuevo. / Preparation will stop automatically. To stop the coffee flow or top up your coffee, press again.',
            'Retire la taza. Levante y cierre la palanca para expulsar la cápsula al recipiente de cápsulas usadas. Nunca levante la palanca durante el funcionamiento. / Remove the cup. Lift and close the lever to eject the capsule into the used capsule container. Never lift the lever during operation.',
            'Para apagar su máquina presione los botones de espresso y lungo simultáneamente. / To turn the machine off press both the espresso and lungo buttons simultaneously.'
        ]
    },
    {
        id: 'aire',
        title: 'Aire Acondicionado / Air conditioning',
        subtitle: 'Instructivo / Instructions',
        icon: 'wind',
        steps: [
            'Luz de pantalla / screen light',
            'Tecla de encendido y apagado / On and Off button',
            'Tecla de tempertura / Temperature button "+"',
            'Tecla de temperatura / Temperature button "-"',
            'Tecla de control de dirección de ventilación / Button to control ventilation direction',
            'Pantalla de temperatura / Temperature display',
            'Encender en / Turn on  24°C'
        ],
        note: 'Nota: Se recomienda encender en 24°C para ahorro de energía y mejor funcionamiento / It is recommended to turn on 24°C for energy saving and better performance.'
    }
];