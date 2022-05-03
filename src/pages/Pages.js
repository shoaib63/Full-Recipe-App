import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages 
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';


const Pages = () => {
    const location =useLocation(); 
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname} >
                <Route path="/" element={<Home />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:name" element={<Recipe />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Pages;