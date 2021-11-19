import React from 'react'
import ImgStar from '../../assets/img/star_rating.png';
import ImgUnliked from '../../assets/img/unliked.png';
import ImgPlay from '../../assets/img/play_trailer.png';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../reducks/favorites/operations';
import Favorites from '../../containers/Favorites';

const FavCard = ({favorite}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div class="movie">
                <div class="poster">
                    <img src={favorite.image} alt="newlyreleased" className="posterimg" />
                    <img src={ImgUnliked} alt="newlyreleased" className="unlike" onClick={() => dispatch(deleteFavorite(favorite.id))}
  />
                </div>
                <div class="content">
                    <div class="title">{ favorite.name }</div>
                    <div class="row menus">
                        <img src={ImgStar} alt="rating" class="rating" />
                        <div class="ratingnumber">4.5 / 5</div>
                        <img src={ImgPlay} alt="play_trailer" className="playtrailer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavCard
