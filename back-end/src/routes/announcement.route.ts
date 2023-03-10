import { Router } from "express";
import {
  announcementDeleteController,
  announcementListSpecificController,
  announcementPostController,
  announcementsListControllers,
  announcementsUpdateController,
  announcementsUserListController,
} from "../controllers/announcement.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { announcementSchema, announcementUpdateSchema } from "../schemas/announcement.schema";

const announcementRoute = Router();
const routeName = "/announcement";

announcementRoute.get(routeName, announcementsListControllers);

announcementRoute.get(routeName + "/user/:id",AuthTokenCheck,announcementsUserListController)

announcementRoute.post(
  routeName,
  AuthTokenCheck,
  schemaValidationMiddleware(announcementSchema),
  announcementPostController
);

announcementRoute.delete(routeName + "/:id",AuthTokenCheck ,announcementDeleteController)

announcementRoute.get(routeName + "/:id",AuthTokenCheck,announcementListSpecificController)

announcementRoute.patch(routeName + "/:id",AuthTokenCheck,schemaValidationMiddleware(announcementUpdateSchema),announcementsUpdateController)

export default announcementRoute;
