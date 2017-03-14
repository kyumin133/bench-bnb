export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = [];
    this.handleClick = handleClick;
    this.map.addListener('idle', () => {
      this.bounds = this.map.getBounds();
    });
  }

  updateMarkers(benches) {
    let addArr = this._benchesToAdd(benches);

    for (let i = 0; i < addArr.length; i++) {
      this._createMarkerFromBench(addArr[i]);
    }

    let removeArr = this._markersToRemove(benches);

    for (let i = 0; i < removeArr.length; i++) {
      this._removeMarker(removeArr[i]);
    }
  }

  _markersToRemove(benches) {
    let removeArr = [];

    for (let i = 0; i < this.markers.length; i++) {
      let marker = this.markers[i];
      let foundMatch = false;
      for (let j = 0; j < benches.length; j++) {
        let bench = benches[j];
        if ((this._coordsEqual(bench.lat, marker.position.lat())) && (this._coordsEqual(bench.lng, marker.position.lng()))) {
          foundMatch = true;
          break;
        }
      }
      if (!foundMatch) {
        removeArr.push(marker);
      }
    }
    return removeArr;
  }

  _removeMarker(marker) {
    let index = -1;
    for (let i = 0; i < this.markers.length; i++) {
      let otherMarker = this.markers[i];
      if ( marker === otherMarker ) {
        index = i;
        break;
      }
    }

    marker.setMap(null);
    this.markers.splice(index, 1);
  }

  _benchesToAdd(benches) {
    let addArr = [];
    for (let i = 0; i < benches.length; i++) {
      let bench = benches[i];
      let foundMatch = false;
      for (let j = 0; j < this.markers.length; j++) {
        let marker = this.markers[j];
        if ((this._coordsEqual(bench.lat, marker.position.lat())) && (this._coordsEqual(bench.lng, marker.position.lng()))) {
          foundMatch = true;
          break;
        }
      }
      if (!foundMatch) {
        addArr.push(bench);
      }
    }
    return addArr;
  }

  _coordsEqual(coord1, coord2) {
    return Math.round(coord1 * 100000) === Math.round(coord2 * 100000)
  }

  _createMarkerFromBench(bench) {
    let position = {
      lat: bench.lat,
      lng: bench.lng
    };
    let marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: bench.description
    });

    marker.addListener('click', () => {
      this.handleClick(bench.id);
    })

    this.markers.push(marker);
  }
}
