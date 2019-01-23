import { EstablismentModel} from './establisment.model';
import { Administrator } from '../../module/users/model/administrator';

export class AdministratorModel implements Administrator{
    email?: string;
    establishment?: EstablismentModel;
    establishmentActive?: number;
    id?: number;
    password?: string;

    constructor(){
        this.email = undefined;
        this.establishment = undefined;
        this.establishmentActive = undefined;
        this.id = undefined;
        this.password = undefined;
    }
}