
export interface Transport {
    _id?: string;
    type?: string;
    capacity?: string;
    vehiclePlate?: string;
    thirdCompany?: string;
    __v?: number;
    trackerSerial?:  string;
    coordinates?: [{
      coords?: {
        long?: string,
        lat?: string,
      },
    date?: string;
    tracker?: string;
    }]
}

