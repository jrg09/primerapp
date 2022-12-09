import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer.jsx';
import './styles.css'


const App = ({title,subtitle,name, initial}) => {
    return(
        <>
            <Header title={title} veces={3}/>
            <Content subtitle={subtitle} initial={initial}/>
            <Footer/>
        </>
       /*
        <>
            <h2 data-testid="test-title">{title}</h2>
            <p>{subtitle}</p>
            <p>{name}</p>
            <hr/>
            <span>jorge</span>
            <p>{title}</p>
        </>
        */
    );
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

export default App;
