import React, { Component } from 'react';
import Pizza from '../pizza';
import './pizzalist.scss';
import pizzaData from '../../pizzaData';

export default class PizzaList extends Component {
  state = {
    pizzas: pizzaData
  }

  removePizza = (id) => {
    console.log(id);
  }

  render() {
    // console.log(this.state.pizzas)  
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
