import React from 'react'
import ImgClose from '../assets/img/close.png'
const PopUp = ({trigger,popup,movie}) => {
    return trigger?(
        <section class="popupbox">
        <div class="popup">
            <img class="close" src={ImgClose} onClick={()=>{popup(false)}} alt="" />
            <div class="box">
                <img class="coverimage" src={movie.image} alt="" />
                <div class="popup-content">
                    <div class="row sp-coverdetails">
                        <div class="trailer m-10 row">
                            <img class="playtrailor" src="images/button1.png" alt="" />
                            <div class="p-10">Watch Trailer</div>
                        </div>
                        <div class="m-10">
                            <p class="date">October 1st</p>
                            In cinemas
                        </div>
                    </div>
                    <div class="cover-description m-10">
                        <p>
                           {movie.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>):null;
    
}

export default PopUp
