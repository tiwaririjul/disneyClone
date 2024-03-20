import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import axios from "axios";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genereId, index_ }) => {
  const elementRef = useRef();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenre();
  }, []);

  const getMovieByGenre = async () => {
    // const res = await GlobalApi.getMovieByGenreId(genereId);

    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=44d3731aea94b2e4d85d12d43fa3a407&with_genres=${genereId}`
    );
    console.log("res ", res);
    setMovieList(res.data.results);
    console.log("movie list ", movieList);
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft += 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
        p-2 z-10 cursor-pointer 
         hidden md:block absolute
         ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />
      <div
        className="flex overflow-x-auto gap-8  scrollbar-hide scroll-smooth pt-5 px-3 pb-10"
        ref={elementRef}
      >
        {movieList &&
          movieList.map((item, index) => (
            <>
              {index_ % 3 == 0 ? (
                <HrMovieCard key={index} movie={item} />
              ) : (
                <MovieCard key={index} movie={item} />
              )}
            </>
          ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
};

export default MovieList;
