import React from "react";
import MovieCard from "./component/moviecard";


function MovieList (props){
 
   
        const {movies,onIncStars,onDecStars,onClickFav,onClickAddtocart} = props;
        // console.log(this.props);
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {index}
                           onIncStars = {onIncStars}
                            onDecStars = {onDecStars}
                            onClickFav = {onClickFav}
                            onClickAddtocart = {onClickAddtocart}/>

            ))}              
            </div>
        )
    }


export default MovieList;