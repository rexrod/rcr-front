
export interface TransportCustom {
    transportId?: string;
    trackerSerial?: string;
    trackerModel?: string;
    type?: string;
    vehiclePlate?: string;
    date?: string;
    status?: string;
    coordinates?: [{
        coords?: {
          long?: string,
          lat?: string,
        },
      date?: string;
      tracker?: string;
      }];
}
