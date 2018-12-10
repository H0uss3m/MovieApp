import React from 'react';
import  MovieCard from './movieCard';

const movieList=({movie=[]})=>{
    return(
        movie.map((el,i)=>{ return <MovieCard item ={el}  key={i} />

        })
    )
}
export default  movieList;