import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import Category from './containers/Category';
import Search from './containers/Search';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/favorites'} component={Favorites} />
                <Route path={'/category'} component={Category} />
                <Route exact path={'/search'} component={Search} />
            </Switch>
        </>
    );
};
export default Router;
