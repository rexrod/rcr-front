// import { EstablismentModel} from 'app/models/users/establisment.model';

export class Configuration {
  email?: string;
  // establishment?: EstablismentModel;
  // establishmentActive?: number;
  id?: number;
  password?: string;

  constructor(configuration) {
      this.email = configuration.email;
      // this.establishment = configuration.establishment;
      // this.establishmentActive = configuration.establishmentActive;
      this.id = configuration.id;
      this.password = configuration.password;
  }

}
