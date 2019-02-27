
export interface Transport {
    _id?: string;
    type?: string;
    capacity?: string;
    vehiclePlate?: string;
    thirdCompany?: string;
    segment?: string;
    description?: string;
    __v?: number;
    tracker?: {
      _id?: string,
      serialKey?: string,
      notes?: string,
      trackerModel?: string,
      __v?: string,
      vehicle?: string
    },
    trackerSerial?:  string;
    coordinates?: [{
      coords?: {
        long?: string,
        lat?: string,
      },
    date?: string;
    tracker?: string;
    }],
    routes?: {
      employees?: []
    }
}