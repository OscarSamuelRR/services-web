export interface Schedule {
    label: string;
    hours: string;
}

export interface HotelDescription {
    id: string;
    title: string;
    name: string;
    description: string;
    image: string;
    whatsappUrl?: string;
    phone?: string;
    imagePosition?: string;
    schedules?: Schedule[];
    achievements?: string[];
    scheduleDescription?: string;
    urlMenu?: string;
}