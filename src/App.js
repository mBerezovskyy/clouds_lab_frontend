import { Fragment } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import SingleDriver from "./Pages/SingleDriver/Driver";
import SingleCar from "./Pages/SingleCar/SingleCar";
import DriverAdd from "./Pages/DriverAdd/DriverAdd";
import CarAdd from "./Pages/CarAdd/CarAdd";
import CarsPage from "./Pages/CarsPage/CarsPage";
// import ActorUpdate from "./Pages/ActorUpdate/ActorUpdate";
// import Trailers from "./Pages/TrailersPage/TrailersPage";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>Actor
          <Route exect path="/" element={<Home />} />
          <Route path="/drivers/:id" element={<SingleDriver />}></Route>
          <Route path="/drivers/add" element={<DriverAdd />}></Route>
          <Route path="/cars/add" element={<CarAdd />}></Route>
          <Route path="/cars" element={<CarsPage />}></Route>
          <Route path="/cars/:id" element={<SingleCar />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;