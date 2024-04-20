import React from 'react';
import { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setCategory(searchQuery.trim() || "Technology");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className='badge bg-light text-danger fs-4'>Dhasuu News24</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("Technology")}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("Business")}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("Health")}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("Science")}>Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("Sports")}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("Entertainment")}>Entertainment</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input 
              className="form-control ms-5" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light ms-3 search-button" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
