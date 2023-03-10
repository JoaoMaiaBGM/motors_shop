import { Express } from "express";
import announcementRoute from "./announcement.route";
import commentsRoute from "./comments.route";
import passwordRoute from "./password.route";
import userRoute from "./user.route";

export function mainRoutes(app: Express) {
  app.use(announcementRoute);
  app.use(userRoute);
  app.use(commentsRoute);
  app.use(passwordRoute);
}
