
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

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path="create" element={<Create/>}/>
    </Route>
  )
);
// The End



function App() {
  return (
    <div className="App">
      {/* Routing */}
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
