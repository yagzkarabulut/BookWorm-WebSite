import axios from "axios";
import { useEffect, useState } from "react";

const Story = () => {
  const [storys, setStorys] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3090/books")
      .then((res) => {
        setStorys(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const lastData = storys.slice(16, 30);
  return (
    <div className="row my-5 p-5  ">
      <h1 className="f-1 align-items-center justify-content-center">Story</h1>{" "}
      <div className=" d-flex  align-items-center gap-3">
        {lastData.map((book) => (
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

export default Story;
