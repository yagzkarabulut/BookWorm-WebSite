import { Link, NavLink } from "react-router-dom";

import gif from "../assets/welcome.gif";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5  ">
      <h1>Welcome</h1>
      <img className="img-fluid rounded" src={"/welcome.gif"} />
      <p>
        You can access all newly released books on the{" "}
        <Link to={"/ürünler"}>Products Page...</Link>
      </p>
    </div>
  );
};

export default MainPage;
