import React from 'react';
import '../assets/styles/components/BigButton.sass';

class BigButton extends React.Component {

  handleClick(e){
    console.log('click en boton ',e);
  }
  
  render() {
    return (
      <button onClick={this.handleClick} type='button' className='buttonBig'>{this.props.text}</button>
    );
  }
};

export default BigButton;
