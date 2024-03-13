import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();

  return (
    <div className="container py-6 text-center ">
      <img
        className="img-fluid"
        src="https://ilkongayrimenkulfethiye.com/tema/genel/images/resource/error.png"
        alt=""
      />
      <p className="text-center my-5 fs-3">
        Üzgünüz, aradığınız sayfa bulunamadı <span className="fw-bold">!</span>
      </p>
      <div className="d-flex justify-content-center ">
        <Link className="bg-primary text-white px-4 rounded p-2" to={"/"}>
          Home
        </Link>
      </div>
      {state && (
        <p className="f-4 text-center my-3">
          {" "}
          Hata Kodunuz :
          <span className="badge bg-warning mx-4 px-3 p-1 fs-6">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
