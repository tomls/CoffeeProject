import React, { Component } from "react";
import CoffeeItem from './CoffeItem';
import CoffeeItemsContainer from './CoffeeItemsContainer';
import '../styles/App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Fun Coffee Component!</h1>
                <CoffeeItemsContainer />
            </div>

        );
    }
}

export default App;