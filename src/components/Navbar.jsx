import React from 'react'

export default function Navbar() {
  return (
    <div>
        <header class="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
         <li><a href="#home" className="nav-link px-2 link-dark">Home</a></li>
          <li><a href="#home" className="nav-link px-2 link-dark">Overview</a></li>
          <li><a href="#home" className="nav-link px-2 link-dark">Inventory</a></li>
          <li><a href="#home" className="nav-link px-2 link-dark">Customers</a></li>
          <li><a href="#home" className="nav-link px-2 link-dark">Products</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
          
        </form>

        <div className="dropdown text-end">
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="#home">New project...</a></li>
            <li><a className="dropdown-item" href="#home">Settings</a></li>
            <li><a className="dropdown-item" href="#home">Profile</a></li>
            <li><a className="dropdown-item" href="#home">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
   </header>
    </div>
  )
}
