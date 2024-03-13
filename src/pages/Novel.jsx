import React, { useState, useEffect } from "react";
import axios from "axios";

const Novel = () => {
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3090/books") // JSON verilerinin olduğu API endpoint'ini belirtin
      .then((res) => {
        setNovels(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const firstData = novels.slice(0, 14);

  return (
    <div className="row my-5 p-5  ">
      <h1 className="f-1 align-items-center justify-content-center">Novels</h1>{" "}
      <div className=" d-flex  align-items-center gap-3">
        {firstData.map((book) => (
          <div className="border border-top-0 border-warning rounded-bottom p-3">
            <img
              className="rounded img-fluid shadow"
              style={{ maxHeight: "600px" }}
              src={book.image}
              alt={book.title}
            />
            <br />
            <div>
              <br />
              <h5 className="card-title">{book.title}</h5>

              <p className="card-text">
                <br />
                <b>Author:</b> {book.author}
              </p>
              <p className="card-text">
                <b>Details: {""}</b>
                {book.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novel;
