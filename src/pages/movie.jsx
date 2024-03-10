import React from 'react'
import "../App.css"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movie() {
    const [data, setData] = useState([]);
  let [reck, setreck] = useState([]);

  useEffect(() => {
    const apiKey = "SY1XKDH-Y56MGJ7-NHGRH1T-HBEQ75D";

    fetch("https://api.kinopoisk.dev/v1.4/movie?type=movie", {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.docs))
      .catch((error) => console.error("Error:", error));

    fetch("https://api.kinopoisk.dev/v1.4/list?page=4&limit=20", {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setreck(data.docs))
      .catch((error) => console.error("Error:", error));
  }, []);


  console.log(reck);
  return (
    <div className='home__wrapper'>
      <div className="slide__bar">
      <div className="nav__bar">
              <Link to="/">
                <img className='home' src="Path.svg"/>
              </Link>
              <Link to="/">
                <img src="Shape.svg"/>
              </Link>
              <Link to="/movie">
                <img src="Shape-1.svg"/>
              </Link>
              <Link to="/series">  
                <img src="tv.svg"/>
              </Link>
                <img src="Bookmark.svg"/>
            </div>
            <div className="avatar">
                <img src="Oval.svg" alt="" />
            </div>
      </div>
      <div className="colum">
        <div className="header">
          <label>
            <img src="./search.svg"/>
            <input type="text" name="" id="" placeholder='Search for movies'/>
          </label>
        </div>
        <div className="main">
        <div className="content-header">
        <h2 className='p-2 '>Movie</h2>
        <div className="carousel carousel-center w-full p-2  to-transparent rounded-box">
          {data.map((el) => {
            return (
              <div class="carousel-item flex flex-col lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={el.poster.previewUrl}
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-100 text-xs tracking-widest title-font mb-1">
                    {el.alternativeName}
                  </h3>
                  <h2 class="text-gray-100 title-font text-lg font-medium">
                    {el.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="content-main">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-14 mx-auto">
              <div class="flex flex-wrap -m-4">
                {reck.map((el) => {
                  return (
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                      <a class="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          class="object-cover object-center w-full h-full block"
                          src={el.cover.url}
                        />
                      </a>
                      <div class="mt-4">
                        <h3 class="text-gray-100 text-xs tracking-widest title-font mb-1">
                          CATEGORY
                        </h3>
                        <h2 class="text-gray-100 truncate title-font text-lg font-medium">
                          {el.name}
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
