import { RouterProvider } from "react-router-dom";
import { AnnouncementProvider } from "./contexts/announcement.context";
import { ProfileProvider } from "./contexts/profile.context";
import { Route } from "./routes";

function App() {
  return (
    <AnnouncementProvider>
      <ProfileProvider>
        <RouterProvider router={Route}></RouterProvider>
      </ProfileProvider>
    </AnnouncementProvider>
  )
}

export default App
