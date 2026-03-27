export interface RoomData {
    id: string;
    title: string;
    image: string;
    description: string;
    descriptionExtra?: string; // opcional
    size?: string;
    amenities: string[];
    moreInfoUrl?: string;
}
