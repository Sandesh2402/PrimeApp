import MovieList from "./movielist";
import Navbar from "./component/navbar";
import React from 'react';
import {movies} from './component/moviedata'

class App extends React.Component{ 
  constructor(){
    super();
    //Creating the state object 
    this.state = {
        movies : movies,
        countCard:0
    } 
}

  handleAddStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars <5){
      movies[movieId].stars += 0.5
  }

  this.setState({
      movies
  });
  }

  handleDecStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars > 0){
      movies[movieId].stars -= 0.5;
  }

  this.setState({
      movies
  })

}

  handleToggleFav = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].fav = !movies[movieId].fav;

  this.setState({
      movies
  })
  }

  handleAddtocart = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].isInCart = !movies[movieId].isInCart;
  // console.log(movies[movieId].isInCart);
  if(movies[movieId].isInCart){
    this.state.countCard+=1;
  }
  else{
    this.state.countCard-=1;
  }

  this.setState({
      movies
  })
  }
  render (){
  return(
    <>
    <Navbar cardCount={this.state.countCard}/>
    <MovieList 
      movies={this.state.movies}
      onIncStars = {this.handleAddStars}
      onDecStars = {this.handleDecStars}
      onClickFav = {this.handleToggleFav}
      onClickAddtocart = {this.handleAddtocart}
    />
    </>

  )
  }
}
 export default App;