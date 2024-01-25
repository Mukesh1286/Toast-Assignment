import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger p-3 ">
  <div className="container">
    <a className="navbar-brand text-white" href="#">Header</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
          <Link to={"/"} className="nav-link active text-white" aria-current="page" href="#">First Component</Link>
        </li>
        <li className="nav-item">
          <Link to="/secondComponent" className="nav-link text-white" href="#">Second Component</Link>
        </li>
        <li className="nav-item">
          <Link to="/thirdComponent" className="nav-link text-white" href="#">Third Component</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>  

    </>
  )
}

export default Navbar