import React, { useEffect,useState } from "react";
import Header from "../Header/Header";
import Row from "../Row/Row";
import axios from "axios";
import "./Home.scss"
import { Link } from "react-router-dom";
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from"react-icons/ai";
const apiKey = "9b20ab92bb98a19c938a6f0287b40782";
const url = "https://api.themoviedb.org/3";
const upcomming = "upcoming";

const imageUrl = "https://image.tmdb.org/t/p/original";
function Home()
{

      const [upcoming, setupcoming] = useState([])
      const [nowPlaying, setNowPlaying] = useState([])
      const [popular, setPopular] = useState([])
      const [topRated, setTopRated] = useState([])
      const [getgenere,setGetGenere] = useState([])


      useEffect(() => {
        const fetchUpcomming = async ()=>{
           const {data:{results}} = await axios.get(`${url}/movie/${upcomming}?api_key=${apiKey}`);
           setupcoming(results)
        };
        fetchUpcomming();
        const fetchPlaying = async ()=>{
            const {data:{results}} = await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`);
            setNowPlaying(results)
         };
         
         const fetchPopular = async ()=>{
            const {data:{results}} = await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
            setPopular(results)
         };
         
         const fetchTopRated = async ()=>{
           const {data:{results}} = await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`);
           setTopRated(results)
        };

        const getAllGenere = async ()=>{
            const {data:{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
            setGetGenere(genres)
            console.log(genres); 
         };

        fetchTopRated();
        fetchPlaying();
        fetchPopular()
        fetchTopRated();
        getAllGenere();
      }, []);
      
      return(
            <section className="home">
                  <div className="banner" style={{
                        backgroundImage:popular[2]?`url(${`${imageUrl}/${popular[2].poster_path}`})`:" "
                  }}>
                        {
                              popular[0] &&
                              (
                                    <h1>{popular[2].original_title}</h1>
                              )
                        }
                        {
                              popular[0] &&
                              (
                                    <p>{popular[2].overview}</p>
                              )
                        }
                        <div>
                              <button>Play <BiPlay /></button>
                              <button>My List <AiOutlinePlus /></button>
                        </div>
                   
                  </div>
                        
                  <Row title="Upcomming" arr={upcoming}/>
                  <Row title="Now Playing" arr={nowPlaying}/>
                  <Row title="Popular" arr={popular}/>
                  <Row title="Top Rated" arr={topRated}/>

                  <div className="genre">
                        {
                              getgenere.map((item)=>(
                                    <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
                              ))
                        }
                  </div>
                  
            </section>
      )
}

export default Home;