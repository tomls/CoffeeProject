import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CoffeeItem from './CoffeItem'
import CoffeeAPI from '../API/CoffeeAPI'
import * as actions from '../actions/coffeeActions'
import CreateCoffeeItem from './CreateCoffeeItem'

class CoffeeItemsContainer extends Component {
    componentWillMount() {
        if (this.props.coffees.length == 0) {
           CoffeeAPI.GetCoffeesList(this.props.actions.loadCoffeesSuccess);
        }
    }
    renderList() {
        return this.props.coffees.map( coffee => {
            return (
                    <div key={coffee.id} className="coffee-list-item"><CoffeeItem coffee={coffee} /></div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="coffee-list">
                    {this.renderList()}
                </div>
                <CreateCoffeeItem />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state) {
    return { coffees: state.coffees }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeItemsContainer)