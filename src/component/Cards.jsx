import { Link } from 'react-router-dom'
import React, { useState } from "react";


// import { ModalInsertar, ModalBody } from 'reactstrap'




function Cards({ movie123 }) {
    // const [modalInsertar, setModalInsertar] = useState(false);
    const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
    const { title, id, poster_path, vote_average, overview, triler, original_lenguaje } = movie123
    let moviedata = []
    const postToque = () => {
        let toque ={
            id,
            poster_path,
            vote_average,
            overview,
            triler,
            original_lenguaje
        }

        moviedata.push(toque);
        localStorage.setItem('Moviedata', JSON.stringify(moviedata));
        this.props.history.push('/tiket');
    }



    // const Insertar = () => {
    //     setModalInsertar(!modalInsertar)
    // }

    return (
        <>

            <div className="detalle" key={id}>
            <Link to="/tk"
                >
             <img width="150px" src={IMG_PATH+poster_path} alt="" onClick={postToque} />
             </Link>

                <span className={(title)}>{title}</span>
            </div>

        </>
    )
    
}

export default Cards