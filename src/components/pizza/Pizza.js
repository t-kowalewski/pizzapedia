import React, { Component } from 'react'
import './pizza.scss';

export default class Pizza extends Component {
  // Our state - show <p> or not
  state = {
    showIngredients: false,
    arrowDown: true,
    arrowUp: false
  }

  // Toggle function
  handleIngredients = () => {
    this.setState({
      showIngredients: !this.state.showIngredients,
      arrowDown: !this.state.arrowDown,
      arrowUp: !this.state.arrowUp
    })
  }

  render() {
    // console.log(this.props);
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

          {/* JSX condition for arrow icon inside <span> */}
          <h4>Ingredients <span onClick={this.handleIngredients}>{this.state.arrowDown && <i className="fas fa-chevron-down fa-sm"></i>}{this.state.arrowUp && <i className="fas fa-chevron-up fa-sm"></i>}</span></h4>

          {/* JSX condition for <p> */}
          {this.state.showIngredients && <p>{ingredients}</p>}

          <span className="close-btn" onClick={() => removePizza(id)}><i className="far fa-times-circle"></i></span>
        </div>
      </article>
    )
  }
}
