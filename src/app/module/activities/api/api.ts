export * from './activityController.service';
import { ActivityControllerService } from './activityController.service';
export * from './teamController.service';
import { TeamControllerService } from './teamController.service';
export const APIS = [ActivityControllerService, TeamControllerService];
