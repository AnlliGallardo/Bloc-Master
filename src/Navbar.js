import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import { SearchIcon } from '@material-ui/icons/SearchIcon';



import { Img, H1, NavLeft, SearchB } from './styled/NavbarStyled';


export default class Navbar extends Component {
    
    constructor(){
        super()
        this.state= {        
            Search: ''
        }
    }

    handleChange = (e) => {
        this.setState({ Search: e.target.value })
        console.log(this.state.Search)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('search', this.state.Search)
        // this.window.reload(true)
    }
    
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="Avatar">
                    <Img 
                        src="https://res.cloudinary.com/djlvgbuji/image/upload/v1631983432/Imagen1_lvqibk.png" 
                        id="icon" 
                        alt="User Icon" 
                        width="50px"
                        />
                    </div>
                    <H1
                        className="navbar-brand"
                    >
                        Bloc Master
                    </H1>
                    

                    <NavLeft>
                        

                            <Link

                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/"
                            >
                               Mas Valoradas
                            </Link>

                            <Link
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/"
                            >
                                Menos Valoradas
                            </Link>
                            <Link
                                activeClassName="active"
                                className="nav-item nav-link"
                                to="/login"
                            >
                                Salir
                            </Link>
                            <div className="float-right mt-3">
                                
                                <SearchB>
                                <form onSubmit={this.handleSubmit} className="form-inline text-black">
                                    <div className="md-form my-0">
                                        <div className="control">
                                        <input className="form-control mr-sm-2 text-black" onChange={this.handleChange} type="text" placeholder="Buscar Película" />
                                        </div>
                                    </div>
                                    {/* <button className="btn btn-dark">Buscar</button> */}
                                </form>
                                </SearchB>
                                
                            </div>
                        
                    </NavLeft>
                </nav>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                        <img src="./images/Imagen2.png" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <img src="./images/Imagen3.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src="./images/Imagen4.png" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>


        )
    }
}