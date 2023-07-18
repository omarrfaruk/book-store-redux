import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Login from "../page/Login";
import Signup from "../page/Signup";
import Home from "../page/Home";
import Books from "../page/Books";
import EditBook from "../page/EditBook";
import AddBook from "../page/AddBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/books',
        element:<Books/>
      },
      {
        path:'/editbook/:id',
        element:<EditBook/>
      },
      {
        path:'/bookdetails/:id',
        element:<EditBook/>
      },{
        path:'/addbook',
        element:<AddBook/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
]);

export default router;
 