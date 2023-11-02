import Home from "@src/pages/Home";
import { createBrowserRouter, createRoutesFromElements, Routes, Route } from "react-router-dom";

const route = (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(route));
export default rootRouter;
