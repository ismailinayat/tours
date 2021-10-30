/*eslint-disable*/

export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiaXNtYWlsaW5heWF0IiwiYSI6ImNrMzk0NnE1czBmNWMzYnBpcWdkMG10NXcifQ.cM1o80a8_2ma_qQ6gD_VgA';

  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ismailinayat/ck39514ph0jf31cpdh8d5eu3z',
  scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map)

    bounds.extend(loc.coordinates)
  })

  map.fitBounds(bounds, {
    padding: {
      top: 150,
      bottom: 150,
      right: 100,
      left: 100
    }
  });
}


/*const mapBox = document.getElementById('map')
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations)
  displayMap(locations)
}*/
