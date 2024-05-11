import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  // Outlet,
  // Navigate,
} from "react-router-dom";
import ProfileSetup from "./components/ProfileSetup.jsx";
import AddFriends from "./components/AddFriend.jsx";
import Auth from "./components/Auth.jsx";
// import MetaMask from "./components/Transcation.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/setup",
      element: <ProfileSetup />,
    },
    {
      path: "/addFriends",
      element: <AddFriends />,
    },
  ]);
  return (
<<<<<<< HEAD
   <>
    <RouterProvider router={router}/>
   </>

=======
    <>
      <RouterProvider router={router} />
    </>
>>>>>>> 45aed4a (structure)
  );
}

export default App;
