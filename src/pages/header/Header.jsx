import React from 'react'
import {Navbar, Container, Form, FormControl, Button} from 'react-bootstrap'
import MovieContext from '../../context/MovieContext'
import {Link} from 'react-router-dom'
import './Header.scss'

export default function Header() {   

   let {searchQuery, setSearchQuery, getFilmsByQuery} = React.useContext(MovieContext)

   return (
         <Navbar className='header' bg="warning" expand="lg">
            <Container fluid>
               <Link to="/">
                  <h1 className='header__logo' >movie.</h1>
               </Link>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">

                     <ul className='header__link-items'>
                         <li className='header__link-item'>
                            <Link to='/home'>Home</Link>
                         </li>
                         <li className='header__link-item'>
                            <Link to='/movies'>Movies</Link>
                         </li>
                         <li className='header__link-item'>
                            <Link to='/seriales'>Seriales</Link>
                         </li>
                     </ul>
                     <div style={{flex:'1'}}></div>
                     <Form className="d-flex"
                           onSubmit={getFilmsByQuery}
                           >
                     <FormControl
                              type="search"
                              placeholder="Пошук..."
                              className="me-2"
                              aria-label="Search"
                              className="header__search no-outline"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                           />
                           
                     <Button variant="light"
                             className="header__btn-search no-outline"
                             onClick={getFilmsByQuery}
                             >Знайти</Button>
                     </Form>

               </Navbar.Collapse>
            </Container>
   </Navbar>
   )
}
