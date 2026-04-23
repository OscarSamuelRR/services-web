export interface EventArea {    
    id: string;
    title: string;
    name: string;
    description: string;
    image: string;
    whatsappUrl?: string;
    phone?: string;
    imagePosition?: string;
    typeIf: 'empresariales' | 'sociales';
    type: string;
}
