import React, { useEffect, useState } from "react";
// import Cards from "./Cards";



function Tiket(movie12) {
    
    
    const [taks, setTaks] = useState ([])
    const [more, setMore] = useState ([])

    const { title, id, poster_path, vote_average, overview, triler, original_lenguaje } = movie12

    
    const peticionGet = async (id) => {
        const resp = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2')
        const data = resp.json();
        console.log(data);
        const date1 = data.results;
        console.log(date1)
        const date2 = date1[0]
        console.log(date2)
        setMore(date2.key)
    }

    useEffect(() => {
        let Local = JSON.parse(localStorage.getItem('data'));
        setTaks(Local[0])
        let dateId = Local[0]
        const { id } = dateId
        peticionGet(id)
    }, [])

    return (

            <div className="container ms-1 text-center"  >
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <img src={poster_path} className="" alt="..." width="245px" height="300px" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{vote_average} </h6>
                            <h2 className="overview">{overview}</h2>
                        </div>
                        <div className="m-2">
                            <a
                                className="btn btn-danger"
                                href="/"
                            >detalle
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Tiket