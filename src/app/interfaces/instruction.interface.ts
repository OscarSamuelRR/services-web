export interface Instruction {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    steps: string[];
    note?: string;
}

export interface PoolRule {
    text: string;
}

export interface SpaRule {
    number?: number;
    text: string;
    bold?: boolean;
}

export interface ServiceItem {
    name: string;
    nameEn?: string;
    price: number;
}

export interface ServiceCategory {
    title: string;
    titleEn?: string;
    services: ServiceItem[];
}