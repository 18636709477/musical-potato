import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Router} from 'react-router-dom';
import Index from './pages/index/index'

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Index></Index>
            </BrowserRouter>
        )
    }
}

export default App;
