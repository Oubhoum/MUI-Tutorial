
import Home from "pages/Home/Home";
import Create from "pages/Create/Create";
import Root from "./pages/Root";

// Routing Structure
// The start
import {
        createBrowserRouter,
        createRoutesFromElements,
        Route,
        RouterProvider
      } from "react-router-dom";
import PageNotFound from "pages/pageNotFound/pageNotFound";

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path="create" element={<Create/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Route>
  )
);
// The End

function App() {

  return (

    <div>
      <RouterProvider router={router}/>
    </div>

  );
};

export default App;
