import React from 'react';
import { CTA, Brand, Navbar } from './components';
import { Footer, Blog, Possibility, Features, Header, WhatGPT3 } from './containers';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
           <Brand />
           <WhatGPT3 />
           <Features />
           <Possibility />
           <CTA />
           <Blog />
           <Footer />
        </div>
    )
}

export default App