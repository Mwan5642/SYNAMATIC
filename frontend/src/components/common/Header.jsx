import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ImgLogo from '../../assets/img/Logo.png';
import ImgSearch from '../../assets/img/Search.png';
import ImgArrowDown from '../../assets/img/arrowdown.png';
import ImgHeart from '../../assets/img/Heart.png';
import MenuIcon from './MenuIcon';
import Search from './Search';




const Header = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const inputSearch = event => {
        setSearch(event.target.value);
    };
    const submitAction = () => {
        dispatch(push('/search/?search=' + search));
    };
    return (
        <>
        <header>
            <div class ="navbar">
                <MenuIcon />
                <img src={ImgLogo} class="sp-logo" onClick={() => dispatch(push('/'))} alt=""/>
                <Search />
                <div class="logo">
                        <img src={ImgLogo} alt="" class="logoimg" onClick={() => dispatch(push('/'))} />
                    </div>
                <nav>
                    <div class="row menus">
                        <form onSubmit={submitAction} class="searchbox">
                            <div class="search-box">
                                <input type="text" onChange={inputSearch} name="search" />  
                                <img src={ImgSearch} alt="magnify" class="magnify"/>
                            </div>
                        </form>
                            <div>
                            <div class="category m-15 row" onClick={() => dispatch(push('/category'))}>
                                <a href="#" class="cat" onClick={() => dispatch(push('/category'))}>
                                    Category
                                    <img src={ImgArrowDown} alt="dropdown" class="dropdown"/>
                                </a>
                            </div>
                            </div>
                            <div>
                            <div class="favorites m-15 row" onClick={() => dispatch(push('/favorites'))}>
                                <a href="#" class="fav">  
                                    Favorites
                                    <img src={ImgHeart} alt="favorites" class="heart"/>
                                </a>
                            </div>
                            </div>   
                    </div>
                </nav>

            </div>
            
        </header>  
        </>
    )
}

export default Header
