import { NoticePriority } from '../../module/notices/model/noticePriority';


export interface Notice {
    description?: string;
    id?: number;
    priorityId?: number;
    priorityName?: string;
    priorityColor?: string;
    priority?: NoticePriority;
    validate?: string;
    detailRow?: any;
}
