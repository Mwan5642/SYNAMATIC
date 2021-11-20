import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../reducks/favorites/operations';
import { getFavorites } from '../../reducks/favorites/selectors';
import ImgStar from '../../assets/img/star_rating.png';
import ImgHeart from '../../assets/img/unliked.png';
import ImgPlay from '../../assets/img/play_trailer.png';
import { MoviesReducer } from '../../reducks/movies/reducers';
import PopUp from '../../containers/PopUp';


const Card = ({movie}) => {
    const dispatch = useDispatch();
    const [popup, setPopup] = useState(false);
    const clickFavorite = movie => {
        dispatch(addFavorite(movie));
    };
    const selector = useSelector(state => state);
    const favorites = getFavorites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);
    useEffect(() => {
        let favoriteMovie = favorites.filter(favorite => favorite.id == movie.id);
        if (favoriteMovie.length > 0) {
            setShowLikeButton(false);
        }
    }, [favorites]);
    return (
        <>
        <div className="card">
            {console.log(movie)}
            <div class="movie">
                <div class="poster">
                    <img src={movie.image} onClick={()=>{setPopup(true)}} alt="newlyreleased" class="posterimg" />
                    {showLikeButton && (
                   
                        <img src={ImgHeart} alt="newlyreleased" class="unlike" onClick={() => {clickFavorite(movie)}}/>
                    
                )}
            </div>
                   
                </div>
                <div class="content">
                    <div class="title">{movie.name}</div>
                    <div class="row card-content">
                        <img src={ImgStar} alt="rating" class="rating" />
                        <div class="ratingnumber">4.5 / 5</div>
                        <img src={ImgPlay} alt="play_trailer" class="playtrailer" />
                    </div>
                </div>
            </div>
            <PopUp trigger={popup} popup={setPopup} movie={movie}/>
            </>
    )
}

export default Card
