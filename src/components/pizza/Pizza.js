import React, { Component } from 'react'
import './pizza.scss';

export default class Pizza extends Component {
  render() {
    console.log(this.props);
    const { id, img, ingredients, pizza, pronunciation } = this.props.pizza;
    const { removePizza } = this.props;


    return (
      <article className='pizza'>
        <div className="image-container">
          <img src={img} alt="pizza" />
        </div>

        <div className="pizza-info">
          <h2>{pizza}</h2>
          <h4>{pronunciation}</h4>
          <h4>Ingredients <span><i className="fas fa-chevron-down fa-sm"></i></span></h4>
          <p>{ingredients}</p>
          <span className="close-btn"><i className="far fa-times-circle"></i></span>
        </div>
      </article>
    )
  }
}
