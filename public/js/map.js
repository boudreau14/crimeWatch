var map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {
      lat: 41.881832,
      lng: -87.623177
    },
    mapTypeId: 'satellite'
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  //   for (var i = 0; i < markers.length; i++) {
  //     var markers = markers
  //   }

  return [{
      location: new google.maps.LatLng(41.7, -87.61),
      weight: 365
    },
    {
      location: new google.maps.LatLng(41.94, -87.73),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.88, -87.75),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.69, -87.61),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.73, -87.65),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.89, -87.69),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.68, -87.65),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.85, -87.71),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.89, -87.62),
      weight: 23
    },
    {
      location: new google.maps.LatLng(41.65, -87.6),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.73, -87.7),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.94, -87.82),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.72, -87.59),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.75, -87.56),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.78, -87.6),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.65, -87.59),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.79, -87.62),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.88, -87.7),
      weight: 41
    },
    {
      location: new google.maps.LatLng(41.91, -87.65),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.67, -87.62),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.86, -87.72),
      weight: 42
    },
    {
      location: new google.maps.LatLng(41.88, -87.72),
      weight: 26
    },
    {
      location: new google.maps.LatLng(41.77, -87.66),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.98, -87.77),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.75, -87.64),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.81, -87.6),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.88, -87.63),
      weight: 130
    },
    {
      location: new google.maps.LatLng(41.92, -87.76),
      weight: 41
    },
    {
      location: new google.maps.LatLng(41.85, -87.63),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.74, -87.7),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.89, -87.75),
      weight: 42
    },
    {
      location: new google.maps.LatLng(42.01, -87.68),
      weight: 47
    },
    {
      location: new google.maps.LatLng(41.9, -87.72),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.74, -87.61),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.74, -87.6),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.73, -87.66),
      weight: 61
    },
    {
      location: new google.maps.LatLng(41.78, -87.77),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.8, -87.61),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.79, -87.72),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.87, -87.69),
      weight: 42
    },
    {
      location: new google.maps.LatLng(41.82, -87.62),
      weight: 125
    },
    {
      location: new google.maps.LatLng(41.8, -87.65),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.79, -87.6),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.69, -87.66),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.8, -87.58),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.73, -87.55),
      weight: 50
    },
    {
      location: new google.maps.LatLng(41.75, -87.62),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.9, -87.63),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.9, -87.71),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.78, -87.65),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.79, -87.77),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.87, -87.68),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.65, -87.61),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.99, -87.74),
      weight: 25
    },
    {
      location: new google.maps.LatLng(42.01, -87.67),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.76, -87.63),
      weight: 60
    },
    {
      location: new google.maps.LatLng(41.85, -87.66),
      weight: 113
    },
    {
      location: new google.maps.LatLng(41.77, -87.61),
      weight: 71
    },
    {
      location: new google.maps.LatLng(41.99, -87.78),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.96, -87.67),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.96, -87.74),
      weight: 29
    },
    {
      location: new google.maps.LatLng(41.83, -87.61),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.87, -87.72),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.79, -87.63),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.95, -87.66),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.76, -87.61),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.75, -87.55),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.67, -87.63),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.89, -87.76),
      weight: 241
    },
    {
      location: new google.maps.LatLng(42.01, -87.7),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.72, -87.64),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.89, -87.64),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.76, -87.59),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.94, -87.75),
      weight: 28
    },
    {
      location: new google.maps.LatLng(41.84, -87.69),
      weight: 40
    },
    {
      location: new google.maps.LatLng(41.91, -87.63),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.78, -87.61),
      weight: 5
    },
    {
      location: new google.maps.LatLng(42, -87.66),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.84, -87.71),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.86, -87.64),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.91, -87.71),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.88, -87.64),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.76, -87.68),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.88, -87.62),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.95, -87.81),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.93, -87.64),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.74, -87.54),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.94, -87.81),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.94, -87.64),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.85, -87.67),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.74, -87.65),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.78, -87.64),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.79, -87.58),
      weight: 39
    },
    {
      location: new google.maps.LatLng(41.98, -87.91),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.82, -87.61),
      weight: 82
    },
    {
      location: new google.maps.LatLng(41.77, -87.68),
      weight: 40
    },
    {
      location: new google.maps.LatLng(41.75, -87.72),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.82, -87.69),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.81, -87.7),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.78, -87.63),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.75, -87.6),
      weight: 536
    },
    {
      location: new google.maps.LatLng(41.77, -87.69),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.87, -87.71),
      weight: 30
    },
    {
      location: new google.maps.LatLng(41.89, -87.66),
      weight: 29
    },
    {
      location: new google.maps.LatLng(41.91, -87.67),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.77, -87.67),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.67, -87.64),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.86, -87.62),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.8, -87.62),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.71, -87.61),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.88, -87.71),
      weight: 27
    },
    {
      location: new google.maps.LatLng(41.77, -87.59),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.84, -87.7),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.89, -87.71),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.7, -87.65),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.88, -87.74),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.88, -87.69),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.74, -87.66),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.93, -87.63),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.76, -87.64),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.96, -87.68),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.7, -87.62),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.69, -87.62),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.75, -87.63),
      weight: 7
    },
    {
      location: new google.maps.LatLng(42, -87.69),
      weight: 23
    },
    {
      location: new google.maps.LatLng(41.89, -87.74),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.96, -87.69),
      weight: 98
    },
    {
      location: new google.maps.LatLng(41.74, -87.56),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.95, -87.65),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.87, -87.73),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.9, -87.66),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.88, -87.66),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.81, -87.62),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.93, -87.78),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.79, -87.73),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.9, -87.67),
      weight: 34
    },
    {
      location: new google.maps.LatLng(41.69, -87.63),
      weight: 34
    },
    {
      location: new google.maps.LatLng(41.89, -87.63),
      weight: 39
    },
    {
      location: new google.maps.LatLng(41.84, -87.72),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.76, -87.65),
      weight: 28
    },
    {
      location: new google.maps.LatLng(41.97, -87.9),
      weight: 29
    },
    {
      location: new google.maps.LatLng(41.75, -87.74),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.93, -87.71),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.91, -87.64),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.88, -87.76),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.89, -87.67),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.77, -87.6),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.74, -87.63),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.92, -87.66),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.76, -87.58),
      weight: 29
    },
    {
      location: new google.maps.LatLng(41.99, -87.69),
      weight: 21
    },
    {
      location: new google.maps.LatLng(41.95, -87.79),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.92, -87.64),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.69, -87.67),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.91, -87.8),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.85, -87.72),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.81, -87.59),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.72, -87.66),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.79, -87.8),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.72, -87.6),
      weight: 30
    },
    {
      location: new google.maps.LatLng(41.91, -87.66),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.84, -87.73),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.8, -87.72),
      weight: 73
    },
    {
      location: new google.maps.LatLng(41.94, -87.65),
      weight: 44
    },
    {
      location: new google.maps.LatLng(41.73, -87.59),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.71, -87.6),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.69, -87.64),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.76, -87.56),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.94, -87.77),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.79, -87.75),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.86, -87.71),
      weight: 46
    },
    {
      location: new google.maps.LatLng(41.91, -87.68),
      weight: 60
    },
    {
      location: new google.maps.LatLng(41.76, -87.69),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.87, -87.74),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.86, -87.63),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.83, -87.73),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.74, -87.58),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.99, -87.76),
      weight: 31
    },
    {
      location: new google.maps.LatLng(41.73, -87.61),
      weight: 30
    },
    {
      location: new google.maps.LatLng(41.81, -87.68),
      weight: 31
    },
    {
      location: new google.maps.LatLng(42.01, -87.66),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.87, -87.62),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.73, -87.63),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.7, -87.66),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.8, -87.74),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.76, -87.57),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.79, -87.76),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.92, -87.77),
      weight: 90
    },
    {
      location: new google.maps.LatLng(41.74, -87.64),
      weight: 58
    },
    {
      location: new google.maps.LatLng(41.91, -87.73),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.92, -87.71),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.99, -87.68),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.9, -87.75),
      weight: 3
    },
    {
      location: new google.maps.LatLng(42, -87.77),
      weight: 349
    },
    {
      location: new google.maps.LatLng(41.89, -87.61),
      weight: 34
    },
    {
      location: new google.maps.LatLng(41.76, -87.62),
      weight: 287
    },
    {
      location: new google.maps.LatLng(41.84, -87.63),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.8, -87.68),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.93, -87.66),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.87, -87.67),
      weight: 39
    },
    {
      location: new google.maps.LatLng(41.82, -87.71),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.68, -87.66),
      weight: 72
    },
    {
      location: new google.maps.LatLng(41.89, -87.73),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.75, -87.65),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.92, -87.72),
      weight: 186
    },
    {
      location: new google.maps.LatLng(41.75, -87.57),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.92, -87.78),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.93, -87.74),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.79, -87.79),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.68, -87.64),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.77, -87.7),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.97, -87.66),
      weight: 7
    },
    {
      location: new google.maps.LatLng(42, -87.81),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.88, -87.73),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.91, -87.72),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.92, -87.74),
      weight: 49
    },
    {
      location: new google.maps.LatLng(41.72, -87.57),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.71, -87.56),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.75, -87.58),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.97, -87.72),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.91, -87.7),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.95, -87.64),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.87, -87.66),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.7, -87.63),
      weight: 29
    },
    {
      location: new google.maps.LatLng(41.86, -87.69),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.79, -87.61),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.72, -87.61),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.74, -87.55),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.76, -87.67),
      weight: 63
    },
    {
      location: new google.maps.LatLng(41.95, -87.77),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.86, -87.7),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.99, -87.7),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.67, -87.61),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.78, -87.59),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.89, -87.77),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.76, -87.6),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.68, -87.61),
      weight: 56
    },
    {
      location: new google.maps.LatLng(41.95, -87.74),
      weight: 37
    },
    {
      location: new google.maps.LatLng(41.8, -87.75),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.79, -87.64),
      weight: 49
    },
    {
      location: new google.maps.LatLng(41.95, -87.9),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.75, -87.59),
      weight: 82
    },
    {
      location: new google.maps.LatLng(41.69, -87.65),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.96, -87.65),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.97, -87.68),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.9, -87.73),
      weight: 74
    },
    {
      location: new google.maps.LatLng(41.99, -87.71),
      weight: 23
    },
    {
      location: new google.maps.LatLng(41.98, -87.66),
      weight: 28
    },
    {
      location: new google.maps.LatLng(41.77, -87.65),
      weight: 54
    },
    {
      location: new google.maps.LatLng(41.85, -87.62),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.95, -87.7),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.79, -87.78),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.73, -87.62),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.67, -87.68),
      weight: 58
    },
    {
      location: new google.maps.LatLng(41.9, -87.65),
      weight: 31
    },
    {
      location: new google.maps.LatLng(41.79, -87.68),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.76, -87.66),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.97, -87.65),
      weight: 77
    },
    {
      location: new google.maps.LatLng(41.78, -87.68),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.87, -87.75),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.92, -87.69),
      weight: 466
    },
    {
      location: new google.maps.LatLng(41.77, -87.71),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.84, -87.65),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.99, -87.75),
      weight: 108
    },
    {
      location: new google.maps.LatLng(41.73, -87.71),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.85, -87.69),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.75, -87.7),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.98, -87.69),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.96, -87.66),
      weight: 39
    },
    {
      location: new google.maps.LatLng(41.83, -87.64),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.69, -87.59),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.9, -87.69),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.85, -87.65),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.8, -87.6),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.84, -87.68),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.95, -87.72),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.93, -87.69),
      weight: 21
    },
    {
      location: new google.maps.LatLng(41.82, -87.64),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.77, -87.62),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.81, -87.66),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.72, -87.63),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.91, -87.75),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.88, -87.65),
      weight: 63
    },
    {
      location: new google.maps.LatLng(41.88, -87.77),
      weight: 52
    },
    {
      location: new google.maps.LatLng(41.89, -87.72),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.83, -87.62),
      weight: 64
    },
    {
      location: new google.maps.LatLng(41.77, -87.78),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.71, -87.65),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.92, -87.7),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.99, -87.67),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.7, -87.64),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.86, -87.61),
      weight: 23
    },
    {
      location: new google.maps.LatLng(41.95, -87.83),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.71, -87.63),
      weight: 29
    },
    {
      location: new google.maps.LatLng(41.79, -87.59),
      weight: 43
    },
    {
      location: new google.maps.LatLng(41.75, -87.61),
      weight: 9
    },
    {
      location: new google.maps.LatLng(42, -87.7),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.66, -87.63),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.81, -87.61),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.77, -87.58),
      weight: 45
    },
    {
      location: new google.maps.LatLng(41.92, -87.73),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.9, -87.7),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.94, -87.83),
      weight: 41
    },
    {
      location: new google.maps.LatLng(41.77, -87.76),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.78, -87.69),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.91, -87.74),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.98, -87.74),
      weight: 138
    },
    {
      location: new google.maps.LatLng(41.92, -87.79),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.76, -87.55),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.88, -87.68),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.92, -87.65),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.86, -87.65),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.78, -87.78),
      weight: 63
    },
    {
      location: new google.maps.LatLng(41.68, -87.63),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.78, -87.66),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.74, -87.73),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.95, -87.69),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.73, -87.54),
      weight: 41
    },
    {
      location: new google.maps.LatLng(41.86, -87.68),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.78, -87.79),
      weight: 26
    },
    {
      location: new google.maps.LatLng(41.98, -87.71),
      weight: 19
    },
    {
      location: new google.maps.LatLng(42.01, -87.77),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.97, -87.76),
      weight: 94
    },
    {
      location: new google.maps.LatLng(41.98, -87.79),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.79, -87.65),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.97, -87.69),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.72, -87.55),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.77, -87.63),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.7, -87.53),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.89, -87.65),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.92, -87.8),
      weight: 34
    },
    {
      location: new google.maps.LatLng(41.8, -87.59),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.72, -87.65),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.94, -87.71),
      weight: 61
    },
    {
      location: new google.maps.LatLng(41.93, -87.73),
      weight: 21
    },
    {
      location: new google.maps.LatLng(41.68, -87.67),
      weight: 42
    },
    {
      location: new google.maps.LatLng(41.96, -87.72),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.77, -87.75),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.82, -87.6),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.72, -87.68),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.79, -87.66),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.86, -87.73),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.78, -87.7),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.92, -87.68),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.76, -87.7),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.94, -87.72),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.8, -87.66),
      weight: 26
    },
    {
      location: new google.maps.LatLng(41.93, -87.65),
      weight: 18
    },
    {
      location: new google.maps.LatLng(42.02, -87.66),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.77, -87.64),
      weight: 23
    },
    {
      location: new google.maps.LatLng(41.72, -87.62),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.85, -87.68),
      weight: 31
    },
    {
      location: new google.maps.LatLng(41.77, -87.72),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.97, -87.78),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.79, -87.67),
      weight: 56
    },
    {
      location: new google.maps.LatLng(41.9, -87.76),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.9, -87.64),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.76, -87.71),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.86, -87.77),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.91, -87.78),
      weight: 98
    },
    {
      location: new google.maps.LatLng(41.71, -87.67),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.83, -87.66),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.85, -87.7),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.72, -87.58),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.87, -87.64),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.99, -87.72),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.78, -87.67),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.89, -87.68),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.95, -87.73),
      weight: 21
    },
    {
      location: new google.maps.LatLng(41.78, -87.62),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.66, -87.62),
      weight: 113
    },
    {
      location: new google.maps.LatLng(41.78, -87.72),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.75, -87.66),
      weight: 27
    },
    {
      location: new google.maps.LatLng(41.68, -87.62),
      weight: 31
    },
    {
      location: new google.maps.LatLng(41.93, -87.72),
      weight: 117
    },
    {
      location: new google.maps.LatLng(42, -87.67),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.93, -87.67),
      weight: 53
    },
    {
      location: new google.maps.LatLng(41.84, -87.62),
      weight: 337
    },
    {
      location: new google.maps.LatLng(41.88, -87.67),
      weight: 53
    },
    {
      location: new google.maps.LatLng(41.96, -87.75),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.8, -87.67),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.83, -87.72),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.98, -87.7),
      weight: 34
    },
    {
      location: new google.maps.LatLng(41.91, -87.69),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.91, -87.79),
      weight: 111
    },
    {
      location: new google.maps.LatLng(41.87, -87.7),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.78, -87.71),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.9, -87.68),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.8, -87.69),
      weight: 45
    },
    {
      location: new google.maps.LatLng(41.77, -87.57),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.74, -87.59),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.96, -87.77),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.93, -87.77),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.89, -87.7),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.91, -87.62),
      weight: 21
    },
    {
      location: new google.maps.LatLng(41.99, -87.66),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.96, -87.78),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.93, -87.68),
      weight: 16
    },
    {
      location: new google.maps.LatLng(42, -87.68),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.8, -87.63),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.96, -87.71),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.87, -87.63),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.81, -87.69),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.94, -87.76),
      weight: 51
    },
    {
      location: new google.maps.LatLng(41.87, -87.65),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.92, -87.75),
      weight: 80
    },
    {
      location: new google.maps.LatLng(42.01, -87.8),
      weight: 41
    },
    {
      location: new google.maps.LatLng(41.93, -87.7),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.84, -87.6),
      weight: 36
    },
    {
      location: new google.maps.LatLng(41.75, -87.67),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.7, -87.56),
      weight: 26
    },
    {
      location: new google.maps.LatLng(41.8, -87.64),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.81, -87.63),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.94, -87.69),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.97, -87.89),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.74, -87.74),
      weight: 81
    },
    {
      location: new google.maps.LatLng(41.73, -87.73),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.93, -87.8),
      weight: 196
    },
    {
      location: new google.maps.LatLng(41.68, -87.68),
      weight: 37
    },
    {
      location: new google.maps.LatLng(41.95, -87.88),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.78, -87.73),
      weight: 128
    },
    {
      location: new google.maps.LatLng(41.96, -87.7),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.7, -87.6),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.79, -87.7),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.74, -87.57),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.95, -87.76),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.81, -87.67),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.93, -87.75),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.93, -87.76),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.7, -87.7),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.83, -87.68),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.95, -87.75),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.81, -87.72),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.98, -87.84),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.77, -87.79),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.82, -87.68),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.99, -87.65),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.87, -87.76),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.83, -87.63),
      weight: 8
    },
    {
      location: new google.maps.LatLng(42.02, -87.67),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.7, -87.69),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.71, -87.64),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.73, -87.58),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.67, -87.6),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.98, -87.65),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.78, -87.76),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.99, -87.8),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.71, -87.68),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.74, -87.68),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.72, -87.56),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.97, -87.73),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.98, -87.73),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.79, -87.69),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.96, -87.73),
      weight: 16
    },
    {
      location: new google.maps.LatLng(42.02, -87.68),
      weight: 28
    },
    {
      location: new google.maps.LatLng(41.99, -87.88),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.91, -87.76),
      weight: 70
    },
    {
      location: new google.maps.LatLng(41.9, -87.62),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.69, -87.6),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.86, -87.76),
      weight: 5
    },
    {
      location: new google.maps.LatLng(42.01, -87.69),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.78, -87.74),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.8, -87.73),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.73, -87.6),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.97, -87.77),
      weight: 108
    },
    {
      location: new google.maps.LatLng(41.86, -87.66),
      weight: 146
    },
    {
      location: new google.maps.LatLng(41.94, -87.68),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.94, -87.66),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.74, -87.69),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.84, -87.66),
      weight: 54
    },
    {
      location: new google.maps.LatLng(41.68, -87.53),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.8, -87.7),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.74, -87.71),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.69, -87.69),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.9, -87.74),
      weight: 77
    },
    {
      location: new google.maps.LatLng(41.73, -87.56),
      weight: 37
    },
    {
      location: new google.maps.LatLng(41.72, -87.53),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.94, -87.67),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.82, -87.67),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.82, -87.7),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.82, -87.66),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.69, -87.53),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.82, -87.63),
      weight: 43
    },
    {
      location: new google.maps.LatLng(41.73, -87.69),
      weight: 64
    },
    {
      location: new google.maps.LatLng(41.73, -87.74),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.76, -87.72),
      weight: 30
    },
    {
      location: new google.maps.LatLng(41.71, -87.66),
      weight: 27
    },
    {
      location: new google.maps.LatLng(41.92, -87.67),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.71, -87.53),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.95, -87.71),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.83, -87.65),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.67, -87.65),
      weight: 27
    },
    {
      location: new google.maps.LatLng(41.78, -87.58),
      weight: 67
    },
    {
      location: new google.maps.LatLng(41.83, -87.6),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.95, -87.68),
      weight: 249
    },
    {
      location: new google.maps.LatLng(41.96, -87.64),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.65, -87.64),
      weight: 26
    },
    {
      location: new google.maps.LatLng(41.69, -87.71),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.86, -87.6),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.64, -87.54),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.71, -87.62),
      weight: 31
    },
    {
      location: new google.maps.LatLng(41.72, -87.67),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.85, -87.73),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.71, -87.59),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.84, -87.64),
      weight: 7
    },
    {
      location: new google.maps.LatLng(42.01, -87.81),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.7, -87.72),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.98, -87.88),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.91, -87.77),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.66, -87.64),
      weight: 28
    },
    {
      location: new google.maps.LatLng(41.84, -87.61),
      weight: 46
    },
    {
      location: new google.maps.LatLng(41.71, -87.57),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.78, -87.57),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.74, -87.62),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.94, -87.74),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.73, -87.57),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.83, -87.7),
      weight: 44
    },
    {
      location: new google.maps.LatLng(41.97, -87.67),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.68, -87.7),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.97, -87.75),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.98, -87.81),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.97, -87.81),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.9, -87.77),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.97, -87.79),
      weight: 52
    },
    {
      location: new google.maps.LatLng(41.7, -87.55),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.97, -87.7),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.87, -87.77),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.75, -87.71),
      weight: 35
    },
    {
      location: new google.maps.LatLng(41.81, -87.74),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.95, -87.78),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.97, -87.8),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.88, -87.61),
      weight: 26
    },
    {
      location: new google.maps.LatLng(41.99, -87.79),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.93, -87.79),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.68, -87.71),
      weight: 54
    },
    {
      location: new google.maps.LatLng(41.65, -87.54),
      weight: 62
    },
    {
      location: new google.maps.LatLng(41.74, -87.67),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.65, -87.55),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.92, -87.63),
      weight: 78
    },
    {
      location: new google.maps.LatLng(41.68, -87.54),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.95, -87.8),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.97, -87.71),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.73, -87.64),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.7, -87.71),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.77, -87.73),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.97, -87.83),
      weight: 211
    },
    {
      location: new google.maps.LatLng(41.99, -87.81),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.94, -87.79),
      weight: 126
    },
    {
      location: new google.maps.LatLng(41.94, -87.78),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.8, -87.71),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.65, -87.52),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.96, -87.76),
      weight: 41
    },
    {
      location: new google.maps.LatLng(41.73, -87.67),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.75, -87.68),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.79, -87.74),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.75, -87.73),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.94, -87.7),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.77, -87.74),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.83, -87.71),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.77, -87.77),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.97, -87.84),
      weight: 33
    },
    {
      location: new google.maps.LatLng(41.69, -87.68),
      weight: 57
    },
    {
      location: new google.maps.LatLng(41.73, -87.72),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.83, -87.67),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.76, -87.73),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.96, -87.83),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.79, -87.71),
      weight: 1
    },
    {
      location: new google.maps.LatLng(42, -87.65),
      weight: 35
    },
    {
      location: new google.maps.LatLng(42.01, -87.78),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.7, -87.67),
      weight: 44
    },
    {
      location: new google.maps.LatLng(41.86, -87.67),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.69, -87.54),
      weight: 67
    },
    {
      location: new google.maps.LatLng(41.79, -87.57),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.97, -87.88),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.98, -87.83),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.84, -87.67),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.68, -87.72),
      weight: 10
    },
    {
      location: new google.maps.LatLng(41.64, -87.61),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.7, -87.58),
      weight: 45
    },
    {
      location: new google.maps.LatLng(41.66, -87.54),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.86, -87.74),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.74, -87.72),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.75, -87.54),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.85, -87.64),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.67, -87.66),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.7, -87.52),
      weight: 55
    },
    {
      location: new google.maps.LatLng(41.98, -87.67),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.71, -87.69),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.85, -87.61),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.98, -87.8),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.65, -87.63),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.94, -87.8),
      weight: 12
    },
    {
      location: new google.maps.LatLng(42, -87.8),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.95, -87.67),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.98, -87.75),
      weight: 16
    },
    {
      location: new google.maps.LatLng(41.93, -87.81),
      weight: 80
    },
    {
      location: new google.maps.LatLng(41.96, -87.88),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.68, -87.6),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.77, -87.56),
      weight: 36
    },
    {
      location: new google.maps.LatLng(41.81, -87.64),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.97, -87.74),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.72, -87.54),
      weight: 33
    },
    {
      location: new google.maps.LatLng(41.7, -87.68),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.69, -87.56),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.99, -87.77),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.98, -87.78),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.81, -87.75),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.93, -87.82),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.7, -87.59),
      weight: 27
    },
    {
      location: new google.maps.LatLng(41.82, -87.73),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.98, -87.76),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.82, -87.65),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.69, -87.52),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.76, -87.74),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.97, -87.91),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.99, -87.82),
      weight: 22
    },
    {
      location: new google.maps.LatLng(41.98, -87.82),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.83, -87.69),
      weight: 87
    },
    {
      location: new google.maps.LatLng(41.67, -87.67),
      weight: 20
    },
    {
      location: new google.maps.LatLng(41.81, -87.71),
      weight: 43
    },
    {
      location: new google.maps.LatLng(41.7, -87.54),
      weight: 46
    },
    {
      location: new google.maps.LatLng(42.02, -87.69),
      weight: 11
    },
    {
      location: new google.maps.LatLng(41.98, -87.72),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.87, -87.61),
      weight: 176
    },
    {
      location: new google.maps.LatLng(41.69, -87.7),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.66, -87.55),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.66, -87.53),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.99, -87.73),
      weight: 37
    },
    {
      location: new google.maps.LatLng(41.98, -87.68),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.93, -87.83),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.9, -87.79),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.65, -87.53),
      weight: 18
    },
    {
      location: new google.maps.LatLng(41.75, -87.69),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.71, -87.55),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.96, -87.91),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.68, -87.69),
      weight: 26
    },
    {
      location: new google.maps.LatLng(41.66, -87.59),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.8, -87.77),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.78, -87.8),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.9, -87.78),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.96, -87.79),
      weight: 12
    },
    {
      location: new google.maps.LatLng(42, -87.76),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.69, -87.72),
      weight: 1
    },
    {
      location: new google.maps.LatLng(41.97, -87.64),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.81, -87.73),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.86, -87.75),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.94, -87.63),
      weight: 31
    },
    {
      location: new google.maps.LatLng(42, -87.79),
      weight: 136
    },
    {
      location: new google.maps.LatLng(41.96, -87.63),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.67, -87.54),
      weight: 18
    },
    {
      location: new google.maps.LatLng(36.61, -91.68),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.96, -87.8),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.9, -87.61),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.71, -87.52),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.71, -87.58),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.66, -87.61),
      weight: 34
    },
    {
      location: new google.maps.LatLng(41.68, -87.57),
      weight: 19
    },
    {
      location: new google.maps.LatLng(41.64, -87.6),
      weight: 13
    },
    {
      location: new google.maps.LatLng(41.98, -87.9),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.81, -87.65),
      weight: 8
    },
    {
      location: new google.maps.LatLng(42, -87.78),
      weight: 293
    },
    {
      location: new google.maps.LatLng(41.81, -87.58),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.71, -87.54),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.89, -87.6),
      weight: 4
    },
    {
      location: new google.maps.LatLng(42, -87.9),
      weight: 15
    },
    {
      location: new google.maps.LatLng(42, -87.82),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.7, -87.57),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.97, -87.82),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.9, -87.8),
      weight: 24
    },
    {
      location: new google.maps.LatLng(41.65, -87.58),
      weight: 30
    },
    {
      location: new google.maps.LatLng(41.8, -87.76),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.97, -87.86),
      weight: 32
    },
    {
      location: new google.maps.LatLng(41.73, -87.68),
      weight: 7
    },
    {
      location: new google.maps.LatLng(41.68, -87.55),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.96, -87.84),
      weight: 30
    },
    {
      location: new google.maps.LatLng(41.82, -87.72),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.64, -87.53),
      weight: 6
    },
    {
      location: new google.maps.LatLng(41.95, -87.82),
      weight: 33
    },
    {
      location: new google.maps.LatLng(41.99, -87.91),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.98, -87.89),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.96, -87.9),
      weight: 4
    },
    {
      location: new google.maps.LatLng(41.67, -87.57),
      weight: 3
    },
    {
      location: new google.maps.LatLng(41.82, -87.59),
      weight: 65
    },
    {
      location: new google.maps.LatLng(41.67, -87.53),
      weight: 42
    },
    {
      location: new google.maps.LatLng(41.78, -87.75),
      weight: 2
    },
    {
      location: new google.maps.LatLng(41.99, -87.94),
      weight: 27
    },
    {
      location: new google.maps.LatLng(41.95, -87.91),
      weight: 9
    },
    {
      location: new google.maps.LatLng(41.71, -87.71),
      weight: 7
    },
    {
      location: new google.maps.LatLng(42.01, -87.82),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.77, -87.8),
      weight: 5
    },
    {
      location: new google.maps.LatLng(41.99, -87.92),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.99, -87.93),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.95, -87.89),
      weight: 145
    },
    {
      location: new google.maps.LatLng(41.64, -87.55),
      weight: 23
    },
    {
      location: new google.maps.LatLng(42, -87.93),
      weight: 23
    },
    {
      location: new google.maps.LatLng(41.66, -87.58),
      weight: 17
    },
    {
      location: new google.maps.LatLng(41.66, -87.57),
      weight: 48
    },
    {
      location: new google.maps.LatLng(41.64, -87.56),
      weight: 25
    },
    {
      location: new google.maps.LatLng(41.99, -87.89),
      weight: 12
    },
    {
      location: new google.maps.LatLng(41.67, -87.55),
      weight: 66
    },
    {
      location: new google.maps.LatLng(41.98, -87.85),
      weight: 76
    },
    {
      location: new google.maps.LatLng(41.96, -87.89),
      weight: 28
    },
    {
      location: new google.maps.LatLng(41.68, -87.74),
      weight: 31
    },
    {
      location: new google.maps.LatLng(41.98, -87.87),
      weight: 36
    },
    {
      location: new google.maps.LatLng(41.69, -87.73),
      weight: 8
    },
    {
      location: new google.maps.LatLng(41.65, -87.62),
      weight: 14
    },
    {
      location: new google.maps.LatLng(41.82, -87.74),
      weight: 15
    },
    {
      location: new google.maps.LatLng(41.65, -87.56),
      weight: 2
    },
    {
      location: new google.maps.LatLng(42, -87.92),
      weight: 13
    },

  ]
}