// Initialize a Leaflet map
var map = L.map('map');

// Set the initial view 
var bounds = [
  [-10, -200], 
  [10, 200]  
];
map.fitBounds(bounds);

// Add base layers
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var otherBasemapLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create an object for base layers
var baseLayers = {
  'Open Street Map': osmLayer,
  'Topography Basemap': otherBasemapLayer
};

// Add the OpenStreetMap layer as the default layer
osmLayer.addTo(map);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function to set marker style based on earthquake properties
function style(feature) {
    return {
        radius: feature.properties.mag * 4, 
        fillColor: getColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
}

function getColor(depth) {
    return depth >= 100 ? '#001F3F' : // Dark Blue for depths 100 and greater
        depth > 90 ? '#004080' : // Medium Blue
        depth > 80 ? '#1E3799' : // Dark Purple
        depth > 70 ? '#3498db' : // Medium Blue
        depth > 60 ? '#9b59b6' : // Purple
        depth > 50 ? '#d2b4de' : // Light Purple
        depth > 40 ? '#c0392b' : // Dark Red
        depth > 30 ? '#e74c3c' : // Medium Red
        depth > 20 ? '#f39c12' : // Orange
        depth > 10 ? '#ffb347' : // Peach
        '#f1c40f'; // Yellow
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// URL of the earthquake GeoJSON data
var earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Get the data with D3
d3.json(earthquakeURL).then(function (earthquakeData) {
        
    // Function to create popup content
    function onEachFeature(feature, layer) {
        var popupContent = `            
            <b>Location:</b> ${feature.properties.place}<br>
            <b>Time:</b> ${new Date(feature.properties.time).toLocaleString()}<br>
            <b>Magnitude:</b> ${feature.properties.mag}<br>
            <b>Depth:</b> ${feature.geometry.coordinates[2]}
        `;
        layer.bindPopup(popupContent);
    }

    // Create a new layer group for the earthquake data
    var earthquakes = L.layerGroup();

    // Create markers and add to the earthquakes layer
    L.geoJSON(earthquakeData, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, style(feature));
        },
        onEachFeature: onEachFeature
    }).addTo(earthquakes);

    // Create an overlay object for the earthquake data
    var overlayMaps = {
        "Earthquakes": earthquakes
    };

     // Add layer control to the map
     L.control.layers(baseLayers, overlayMaps, {
        collapsed: false
    }).addTo(map);

    earthquakes.addTo(map);

    // Add legend to map
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            labels = [],
            from, to;

        div.innerHTML += '<h5>Magnitude Legend</h5>';

        for (var i = 0; i < grades.length; i++) {
            from = grades[i];
            to = grades[i + 1];

            div.innerHTML +=
                '<i style="background:' + getColor(from + 1) + '"></i> ' +
                from + (to ? '&ndash;' + to + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(map);
});




    
