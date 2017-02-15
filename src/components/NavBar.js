import React from 'react';

import { Link } from 'react-router'

export default function NavBar(props){
  return (
    <nav className='navbar navbar-inverse'>
      <div className='navbar-header'>
        <Link className='navbar-brand' to="/">{props.title}</Link>
      </div>
      < Link to='/about' >About </Link>
      < Link to='/'>Notes</Link>
    </nav>
  )
}
