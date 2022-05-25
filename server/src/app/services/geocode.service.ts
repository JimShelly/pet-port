import { IAddress } from '../interfaces/schemas';
import { Injectable } from '@nestjs/common';
import NodeGeocoder from 'node-geocoder';

@Injectable()
export class GeocodeService {
  GetAddressInfo(address: IAddress) {
    const options: NodeGeocoder.Options = {
      provider: 'openstreetmap',
    };

    const geoCoder = NodeGeocoder(options);

    geoCoder
      .geocode(address.toString())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
