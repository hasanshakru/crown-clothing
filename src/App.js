import Home from "./route/home/Home";
import Navigation from "./route/navigation/Navigation";
import Shop from "./route/shop/Shop";
import { Routes, Route } from "react-router-dom";
import Authentication from "./route/authentication/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
