import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link  class="navbar-brand" to='/'>Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <Link class="nav-link active" to='/'> ADD POST</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link" to='/search'>SEARCH POST</Link>
        
        </li>
        <li class="nav-item">
         <Link class="nav-link" to='/viewpost'>VIEW POST</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Navbar