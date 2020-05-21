import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class Donde extends Component {

    render() {
        return (
            <Map google={this.props.google} 
                zoom={18} 
                initialCenter={{
                lat: -32.886139,
                lng: -68.838235
                }}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('API_KEY_HERE')
  })(Donde)
