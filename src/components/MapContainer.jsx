/**Este componente es experimental*/
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  

  constructor(props) {
    super(props);

    /**No se le pueden dar estilos al mapa mediante clases, por lo tanto es necesario utilizar la propiedad style*/
    this.style = {
      width: '100%',
      height: '100%',
    };
    /**La localizacion se cambiara posteriormente mediante propiedades*/
    this.location = {
      lat: 4.6560716,
      lng: -74.0595918,
    };
    /**Este array contiene las caracteristicas de estilos para un mapa nocturno se pueden tener varios estilos*/
    this.stylesNight = [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ];
    /**Estilos aplicados al Marjer de Google */
    this.stylesMarker = {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, /**Forma del puntero*/
      scale: 8, /**tamaño del Marker*/
      strokeColor: '#FDD036', /**color del borde*/
      strokeWeight: 3, /**grosor del borde*/
      fillColor: '#FDD036', /**color de relleno*/
      fillOpacity: 1, /**opacidad del relleno*/
    };

  }

  render() {
    
    return (
      <Map
        style={this.style}
        google={this.props.google}
        zoom={12}
        /**Esta propiedad informa al mapa donde se debe centrar la vista*/
        initialCenter={this.location}
        /**Esta propiedad se encarga de dar atributos de estilos al mapa*/
        styles = {this.stylesNight}
        /**Este propiedad desactiva los botones por defecto del mapa*/
        disableDefaultUI={true}

      >
        <Marker
          position={this.location}
          icon={this.stylesMarker}
        />
      </Map>
    );
  }
}

/**Es neceario verificar el sporte dado por Google a "GoogleApiWrapper" dado que en futuras versiones puede que no tenga soporte*/
export default GoogleApiWrapper({
  /**Es necesario agregar esta llave a las  variables de entorno de producción*/
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
