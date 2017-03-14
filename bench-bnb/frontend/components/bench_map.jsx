import React from 'react';
import MarkerManager from '../util/marker_manager'
import { withRouter } from 'react-router';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(id) {
    this.props.router.push(`/benches/${id}`);
  }
  componentDidMount() {
    if (this.props.fixed) {
      let bench = this.props.benches[0];
      const mapOptions = {
        center: {lat: bench.lat, lng: bench.lng},
        zoom: 13,
        draggable: false,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
      };
      let mapDOMNode = document.getElementById('map-container');
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map, this.showDetails);
      this.MarkerManager.updateMarkers(this.props.benches);
    } else {
      this.props.fetchBenches();
      const mapOptions = {
        center: { lat: 37.7758, lng: -122.435 }, // this is SF
        zoom: 13
      };
      // wrap the mapDOMNode in a Google Map
      let mapDOMNode = document.getElementById('map-container');
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map, this.showDetails);
      this.MarkerManager.updateMarkers(this.props.benches);

      this.map.addListener('idle', () => {
        let latLngBounds = this.map.getBounds();
        let northEast = latLngBounds.getNorthEast();
        let southWest = latLngBounds.getSouthWest();
        let bounds = {
          northEast: {
            lat: northEast.lat(),
            lng: northEast.lng()
          },
          southWest: {
            lat: southWest.lat(),
            lng: southWest.lng()
          }
        };
        this.props.changeFilter({ bounds: bounds });
      });

      this.map.addListener('click', (e) => {
        let latLng = e.latLng;
        let coords = {
          lat: latLng.lat(),
          lng: latLng.lng()
        };

        this.props.router.push({
          pathname: "benches/new",
          query: coords
        });
      });
    }
  }

  componentDidUpdate(newProps) {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return <div id='map-container' ref={ map => this.mapNode = map }></div>;
  }
}

export default withRouter(BenchMap);
