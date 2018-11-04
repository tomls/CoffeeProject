import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CoffeeAPI from '../API/CoffeeAPI'
import * as actions from '../actions/coffeeActions'

class CoffeeItem extends Component {
    render() {
        if(this.props.coffee == null)
            return (<div>Loading...</div>);
        return (
            <div>
                <img src={this.props.coffee.imageURL} className="image"/>
                <div>{ this.props.coffee.name }</div>
                <div>{ this.props.coffee.price }</div>
                <button onClick={ () => {
                    CoffeeAPI.DeleteCoffeeItem(
                        this.props.coffee.id, 
                        this.props.actions.DeleteCoffeeSuccess)
                    } }>
                    Delete</button>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeItem)