import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CoffeeAPI from '../API/CoffeeAPI'
import * as actions from '../actions/coffeeActions'

class CreateCoffeeItem extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.imageURL = React.createRef();
        this.name = React.createRef();
        this.price = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        let data = {
            imageURL: this.imageURL.current.value,
            name: this.name.current.value,
            price: this.price.current.value
          }
        CoffeeAPI.CreateCoffeeItem(data, this.props.actions.CreateCoffeeSuccess);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="create-coffee-item">
                <label>
                    Image URL:
                    <input type="text" ref={this.imageURL} />
                </label>
                <label>
                    Coffee Name:
                    <input type="text" ref={this.name} />
                </label>
                <label>
                    Coffee Price:
                    <input type="text" ref={this.price} />
                </label>
                <input type="submit" value="Create Coffee" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state) {
    return { coffees: state.coffees }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCoffeeItem)
