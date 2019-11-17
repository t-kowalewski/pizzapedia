import React, { Component } from 'react';
import Pizza from '../pizza';
import './pizzalist.scss';
import pizzaData from '../../pizzaData';

export default class PizzaList extends Component {
  // Our state - pizza data
  state = {
    pizzas: pizzaData
  }

  // Function will return new list of pizzas. If both ids are the same - pizza will not be in the new list
  removePizza = (id) => {
    const {pizzas} = this.state;
    const sortedPizzas = pizzas.filter((pizza) => pizza.id !== id);
    this.setState({
      pizzas: sortedPizzas
    });
  }

  render() {
    const { pizzas } = this.state

    return (
      <section className='pizzalist'>
        {
          pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} removePizza={this.removePizza}></Pizza>
          ))
        }
      </section>
    )
  }
}
