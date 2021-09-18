import React, { useEffect, useState} from 'react'
// import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Cards'
// import  Navbar from '../Navbar'
// import Search from './Search'


import { AboutS, Movie, H1 } from '../styled/AboutStyled'


const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';



function About() {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2';
    const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';
    const [movie, setMovie] = useState([])
    const [fin, setFin] = useState([])
    const [search, setSearch] = useState('')
    // console.log(setMenosVal,setTod,setMoreVal)



const peticionGet = async (url1) =>  {
    const resp = await fetch(url1);
    const data = await resp.json();
    const data2 = data.results;
    // const data3 = data2[0]
    console.log(url1)
    // console.log(data2)

    setFin(data2)
}

console.log(fin)

useEffect(() => {
    console.log(setSearch)
   window.scroll({top: 0})
//    window.Location.href()
   
    let buscar = localStorage.getItem('search')
   setSearch(buscar)
   
   const urlBusqueda = SEARCH_URL+search;
   if(search && search !== ''){
       peticionGet(urlBusqueda)
       localStorage.setItem('search', '')
   } else{
       peticionGet(url)
   }
    console.log("urlBusqueda")
}, [search])


    


    return (
        <AboutS>
            <H1>Todas las Peliculas</H1>
                {/* <InfiniteScroll
                    
                    dataLength={fin.length}
                    next={()=> setFin(fin +3)}
                    hasMore={true}
                > */}
                <Movie>
                    {
                        fin.map((fin1, index) => {

                            return (
                                <Cards 
                                key={index}
                                movie123={fin1}
                                />
                            )

                        })

                    }
                </Movie>
                {/* </InfiniteScroll> */}
            
        </AboutS>
    )
}



export default About
