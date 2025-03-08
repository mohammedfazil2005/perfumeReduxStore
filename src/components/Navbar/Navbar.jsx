import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid m-2">
                   <Link className='navbar-brand' to={'/'}> <img src="https://cdn-design-e.dora.run/Ch/vu/Ds/ChvuDsNOC1FKtKKL7rfZb0_520739.svg#svgView(preserveAspectRatio(none))" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex gap-4" role="search">
                        <i className="fa-regular fa-user"></i>
                       <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
                        <i className="fa-solid fa-bars"></i>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
  )
}

export default Navbar
