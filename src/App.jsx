import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className='min-h-screen'>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
