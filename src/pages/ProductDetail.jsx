import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [book, setBook] = useState(null);

  //   useNavigate kurulumu
  const navigate = useNavigate();
  // url deki parametreyi alıcaz
  const { id } = useParams();

  // idsine göre kitap bilgilerini APİ den alıcaz
  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`, { timeout: 3000 })
      .then((res) => setBook(res.data))
      .catch((err) =>
        // ürün bilgisi apiden gelmesiyse
        // kullanıcıya 404 sayfasına yönlendir
        // state : yönlendirirken hata kodunun verisinide aktarır
        navigate("/undefined", { state: err.response.status })
      );
  }, []);
  return (
    <div>
      {!book && <p>Yükleniyor...</p>}

      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="rounded img-fluid shadow"
              style={{ maxHeight: "600px" }}
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-5">
            <h1>{book.title}</h1>
            <div className="my-4">
              <BookInfo title={"Writer"} value={book.author} />
              <BookInfo title={"Explanation"} value={book.description} />
              <BookInfo title={"Year"} value={book.year} />
              <BookInfo title={"Page"} value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

// bu dosyadaki 2.component

const BookInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};
