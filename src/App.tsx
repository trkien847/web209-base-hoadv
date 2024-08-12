import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Register } from "./page/Register";
import { Login } from "./page/Login";
import 'react-toastify/dist/ReactToastify.css';
import { LayoutAdmin } from "./LayoutAdmin";
import { Add } from "./page/Add";
import { Edit } from "./page/Edit";
import { List } from "./page/List";
function App() {
  const routes = useRoutes([
    {path: "register",element: <Register/>},
    {path: "login",element: <Login/>},
    {
      path: "/admin",
      element: <LayoutAdmin />,
      children: [
        {
          path: "product/add",
          element: <Add />,
        },
        {
          path: "product/edit/:id",
          element: <Edit />,
        },
        {
          path: "product/list",
          element: <List />,
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <h1 className="text-center">Hello Admin</h1>
      {routes}
    </>
  );
}
export default App;
