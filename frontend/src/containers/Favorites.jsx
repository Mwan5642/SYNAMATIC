import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../reducks/favorites/selectors';
import { fetchFromLocalStorage } from '../reducks/favorites/operations';
import FavCard from '../components/common/FavCard';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const Favorites = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const favorites = getFavorites(selector);
    console.log(favorites);
    useEffect(() => {
        dispatch(fetchFromLocalStorage());
    }, []);
    return (
        <>
            <Header />
            <section class="content">
                <div class="pt">
                    <h1 class="section-heading m-20 p-10">Favorites</h1>
                </div>
                <div class="movies">{favorites && favorites.map(favorite => <FavCard favorite={favorite} />)}</div>
            </section>
            <Footer />
        </>
    );
};

export default Favorites;