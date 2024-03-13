import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  // useParams urldeki parametleri yönetmemizi sağlar
  // geriye dizi içerisinde 2 eleman döndürür
  // 1.cisi urldeki arama parametleri
  //  2- bınları değiştirmeye yaran method
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (e) => {
    // eklenecek parametri belirle
    searchParams.set("sırala", e.target.value);
    // url güncelle
    setSearchParams(searchParams);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // eklenicek parametereyi belirle
    searchParams.set("aramaTerimi", e.target[0].value);
    // url güncelle
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-4 gap-3 d-flex justify-content-between align-item-center">
      <div className="d-flex gap-3 align-item-center">
        <label className="fs-3">Sırala</label>
        <select onChange={handleChange} className="form-select">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          placeholder="Kitap İsmi Giriniz.."
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary">ARA</button>
      </form>
    </div>
  );
};

export default FilterArea;
