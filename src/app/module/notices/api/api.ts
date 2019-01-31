export * from './noticeController.service';
import { NoticeControllerService } from './noticeController.service';
export * from './noticePriorityController.service';
import { NoticePriorityControllerService } from './noticePriorityController.service';
export const APIS = [NoticeControllerService, NoticePriorityControllerService];
