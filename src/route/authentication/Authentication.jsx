import Signup from "../../component/signup/Signup";
import Signin from "../../component/signin/Signin";
import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Signin />
      <Signup />;
    </div>
  );
};
export default Authentication;
