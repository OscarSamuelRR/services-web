export interface QuickInfo {
    travelTime: string;
    duration: string;
    idealFor: string;
    activityLevel: string;
    recommendedTime: string;
    experienceType: string;
}

export interface DiscoverMorelosCont {
    id: string;
    section: string;
    title: string;
    description: string;
    itinerary: string;
    whatsappUrl?:string;
    image: string;
    images?: string[];
    imagePosition?: string;
    route?: string;
    mapsUrl?: string;
    quickInfo?: QuickInfo;
}

