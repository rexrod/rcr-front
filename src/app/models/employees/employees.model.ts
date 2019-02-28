
export interface Employees {
    id?: string;
    status?: string;
    name?: string;
    registration?: string;
    address?: string;
    company?: string;
    coordinates?: string;
    route?: {
        _id?: string,
        type?: string,
        vehiclePlate?: string,
        capacity?: string,
        thirdCompany?: string,
        segment?: string,
        description?: string,
        __v?: number,
        status?: boolean,
        tracker?: string,
        trackerSerial?: string
    };
}

