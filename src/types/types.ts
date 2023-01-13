export type Aeroport = {
    PlaceId: string;
    PlaceName: string;
    IataCode: string;
    CountryName: string;
}

export type Flight = {
    id : string;
    price: {
        amount: number;
    };
    legs : [
        {
            id : number;
            origin: string;
            destination: string;
            departure: string;
            arrival: string;
            duration: number;
        }
    ];
}

export type Details = {
        
    id : string;
    origin: {
        city: string;
    };
    destination: {
        city: string;
    };
    duration: number;
    stopCount: number;
    departure: string;
    arrival: string;
    segments: [
        {
            marketingCarrier: {
                name: string;
            };
        }
    ];
    
}