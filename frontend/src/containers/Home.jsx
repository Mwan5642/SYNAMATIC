import React, {useState, useEffect} from 'react'
import Header from '../components/common/Header';
import { useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import ImgCover from '../assets/img/007.png';
import ImgButton from '../assets/img/watchtrailer.png';
import Imgcover from '../assets/img/sp-backgroundcover.png';
//*import Imgbutton from '../assets/img/sp-cover.png';
import { getMovies } from '../reducks/movies/selectors';
import queryString from 'query-string';
import API from '../API';
import Card from '../components/common/Card';


const api = new API();
const Home = () => {
    const parsed = queryString.parse(window.location.search);
    const [moviesComingSoon, setMoviesCommingSoon] = useState(null);
    const [moviesNewReleased, setMoviesNewReleased] = useState(null);
    const selector = useSelector(state => state);
    const movies = getMovies(selector);

    useEffect(() => {
        api.getMovies({ release_type: 'Coming Soon' })
            .then(movies => {
                setMoviesCommingSoon(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ release_type: 'Newly Released' })
            .then(movies => {
                setMoviesNewReleased(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, []);
    return (
    <>

            <Header />

            <div class="cover">
                <img src={ImgCover} alt="trailer" class="backgroundcover" />
                <img src={Imgcover} class="sp-backgroundcover"/>
                <div class="coverdetails sp-coverdetails gradient">
                    <div class="row sp-coverdetails">
                        <img src={ImgButton} alt="watchtrailer" class="watchtrailer" />
                        <div class="date">November 27 In Cinemas</div>
                    </div>
                    <div class="description cover-description">
                        James Bond has left active service. His peace is short-lived when Felix Leiter,
                        an old friend from the CIA, turns up asking for help, leading Bond onto
                        the trail of a mysterious villain armed with dangerous new technology.

                    </div>
                </div>
            </div>

            <div class="section1">
                <h1>Newly Released</h1>
                <div class="Newly-Released">
                    <div class="newlyreleased">
                       
                        {moviesNewReleased && moviesNewReleased.results.length > 0 ? (
                    <div class="movies">
                        {moviesNewReleased.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}    

                         
                



                    </div>

                </div>


                <div id="section2">
                    <h1 class="secondheading">Coming Soon</h1>
                    <div class="Coming-Soon">
                    {moviesComingSoon && moviesComingSoon.results.length > 0 ? (
                    <div class="movies">
                        {moviesComingSoon.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
                    </div>

                </div>


            </div>


<Footer/>
</>
    )
}

export default Home
