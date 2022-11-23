import Home from "./route/home/Home";
import Navigation from "./route/navigation/Navigation";
import Shop from "./route/shop/Shop";
import { Routes, Route } from "react-router-dom";
import Signin from "./route/sign-in/Signin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
