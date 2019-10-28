import React from 'react';
import '../assets/styles/components/SeekerInput.sass';

class SeekerInput extends React.Component {

  /** Este metodo se debe encargar de manejar la data que se encuentra al interior del imput */
  handleChange(e) {
    console.log(`Entroa a leer el estado ${e.target.value}`);    
  }

  /** Este metodo escuacha la tecla intro para saber que acciones realizar */
  handleKeyIntro(e) {
    if(e.keyCode === 13){
      console.log('Tecla intro');
    }
  }

  render() {
    return (
      <input onKeyUp={this.handleKeyIntro} onChange={this.handleChange} className='seeker' type={this.props.type} name='seeker' placeholder={this.props.placeholder} />
    );
  }

}
export default SeekerInput;
