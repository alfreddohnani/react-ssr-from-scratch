import Homepage from "./pages/homepage";
import UsersListPage from "./pages/users-list-page";
import App from "./App";
import NotFoundPage from "./pages/notfound-page";
import AdminsListPage from "./pages/admins-list-page";

export default [
  {
    ...App,
    routes: [
      {
        ...Homepage,
        path: "/",
        exact: true,
      },
      {
        ...AdminsListPage,
        path: "/admins",
      },
      {
        ...UsersListPage,
        path: "/users",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
