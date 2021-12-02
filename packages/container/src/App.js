import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';

export default () => {

    return(
        <BrowserRouter>
            <MarketingApp />
        </BrowserRouter>
    );
};