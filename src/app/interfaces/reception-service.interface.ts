export interface ReceptionService {
    id: number;
    name: string;
    cost: 'Sin costo' | 'Costo adicional' | 'Solicitar';
}