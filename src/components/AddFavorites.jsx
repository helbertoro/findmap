import React, { Component } from 'react';
import SeekerInput from '../components/SeekerInput';
import MediumButton from '../components/MediumButton';
import '../assets/styles/components/AddFavorites.sass';

class AddFavorites extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='container-add-favorites'>
                <SeekerInput 
                type='text' 
                placeholder='Nombre'
                />
                <div className='container-add-favorites__button'>
                    <MediumButton 
                    onClick={this.props.onClick} text='Cancelar' />

                    <MediumButton
                    onClick={this.props.onClick} text='Aceptar' />
                </div>
            </div>
        );
    };
};

export default AddFavorites;