import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary rounded-bottom">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 fs-3 px-5">
          <Link to="/">
            <i className="bi bi-book-half fs-1"></i>
            <span className="header-title">BookWorm</span>
          </Link>
        </span>
        <div className="d-flex gap-4 fs-5 px-5">
          <NavLink to="/">
            <i className="bi bi-house"></i>Home
          </NavLink>
          <NavLink to="/ürünler">
            <i className="bi bi-bag"></i>Products
          </NavLink>
          <NavLink to="/kategori">
            <i className="bi bi-bookmarks"></i>Category
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
