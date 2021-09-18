import React, { Component } from 'react';


const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';


export class Search extends Component {
  state = {
    inputMovie: ''
  }



  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state

    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2${inputMovie}`)
      .then(resp => resp.json())
      .then(results => {
        const { Search = [], totalResults = "0" } = results
        console.log({ Search, totalResults })
        this.props.onResults(Search)
      })
  }
  
  render () {
    
    console.log("Metodo render");

    return (
      <div className="float-right mt-3">
        <form onSubmit={this._handleSubmit} className="form-inline text-white">
          <div className="md-form my-0">
            <div className="control">
              <input className="form-control mr-sm-2 text-black" onChange={this._handleChange} type="text" placeholder="Buscar" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}