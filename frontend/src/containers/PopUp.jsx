import React from 'react'
import ImgClose from '../assets/img/close.png'
import ImgButton from '../assets/img/watchtrailer.png';
import ImgStar from '../assets/img/star_rating.png';
const PopUp = ({trigger,popup,movie}) => {
    return trigger?(
        <section class="popupbox">
        <div class="popup">
            <img class="close" src={ImgClose} onClick={()=>{popup(false)}} alt="" />
            <div class="box">
                <img class="coverimage" src={movie.image} alt="" />
                <div class="popup-content gradient">
                    <div class="row popupdetails sp-coverdetails gradient">
                        <div class="trailer m-10 row">
                            <img class="popupwatchtrailer" src={ImgButton} alt="" />
                            <img class="star" src={ImgStar} alt=""/>
                            <div class="ratenumber"> 4.6/5 </div>
                        </div>
                        <div class="m-10">
                            <div class="popupdate">
                                October 1st In Cinemas
                            </div>
                        </div>
                    </div>
                    <div class="popdescription cover-description m-10">
                           {movie.description}
                    </div>
                </div>
            </div>
        </div>
    </section>):null;
    
}

export default PopUp
