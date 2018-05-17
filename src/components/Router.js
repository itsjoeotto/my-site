import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './main/Home/Home';
import NotFound from './main/NotFound/NotFound';
import Contact from './main/Contact/Contact';
import Portfolio from'./main/Portfolio/Portfolio';
import Test from './initiative/Test';
import Shape from './wild-shapes/Shape';
import Blog from './main/Blog/Blog';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/portfolio/demo/initiative" component={Test}></Route>
            <Route path="/portfolio/demo/wild-shapes" component={Shape}>Wild Shapes</Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
);

export default Router;