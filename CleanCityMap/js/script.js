document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Map
  const map = L.map('map', {
    center: [40.7128, -74.0060],
    zoom: 13,
    minZoom: 10,
    maxZoom: 18
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // 2. Custom Icons Config
  const restroomIcon = L.icon({
    iconUrl: 'Assets/restroom-icon.png',
    iconSize: [30, 38],
    iconAnchor: [9, 25],
    popupAnchor: [1, -26]
  });
  const restroomHoverIcon = L.icon({
    iconUrl: 'Assets/restroom-icon.png',
    iconSize: [30, 38],
    iconAnchor: [9, 26],
    popupAnchor: [1, -29]
  });

  const waterFountainIcon = L.icon({
    iconUrl: 'Assets/water-fountain-icon.png',
    iconSize: [30, 38],
    iconAnchor: [10, 24],
    popupAnchor: [1, -26]
  });
  const waterFountainHoverIcon = L.icon({
    iconUrl: 'Assets/water-fountain-icon.png',
    iconSize: [30, 38],
    iconAnchor: [10, 27],
    popupAnchor: [1, -29]
  });

  const trashCanIcon = L.icon({
    iconUrl: 'Assets/trash-can-icon.png',
    iconSize: [30, 38],
    iconAnchor: [9, 25],
    popupAnchor: [1, -26]
  });
  const trashcanHoverIcon = L.icon({
    iconUrl: 'Assets/trash-can-icon.png',
    iconSize: [30, 38],
    iconAnchor: [9, 26],
    popupAnchor: [1, -29]
  });

  // 3. Static Location Datasets
  const restroomLocations = [
    { lat: 40.7536, lng: -73.9832, name: 'Restroom 1', details: 'Location: Bryant Park, Clean and accessible!' },
    { lat: 40.7496, lng: -73.9877, name: 'Restroom 2', details: 'Location: Grand Central Terminal, Clean and accessible!' },
    { lat: 40.7580, lng: -73.9855, name: 'Restroom 3', details: 'Location: Times Square, Clean and accessible!' },
    { lat: 40.7306, lng: -73.9352, name: 'Restroom 4', details: 'Location: Central Park, Clean and accessible!' },
    { lat: 40.7410, lng: -73.9937, name: 'Restroom 5', details: 'Location: The High Line, Clean and accessible!' },
    { lat: 40.7127, lng: -74.0134, name: 'Restroom 6', details: 'Location: Battery Park, Clean and accessible!' },
    { lat: 40.7490, lng: -73.9754, name: 'Restroom 7', details: 'Location: Empire State Building, Clean and accessible!' },
    { lat: 40.7851, lng: -73.9683, name: 'Restroom 8', details: 'Location: Metropolitan Museum of Art, Clean and accessible!' },
    { lat: 40.7233, lng: -73.9976, name: 'Restroom 9', details: 'Location: Near Chelsea Market, Clean and accessible!' },
    { lat: 40.7061, lng: -74.0083, name: 'Restroom 10', details: 'Location: Near One World Trade Center, Clean and accessible!' },
    { lat: 40.7655, lng: -73.9742, name: 'Restroom 11', details: 'Location: Near Lincoln Center, Clean and accessible!' },
    { lat: 40.7404, lng: -73.9883, name: 'Restroom 12', details: 'Location: Near The Vessel, Clean and accessible!' },
    { lat: 40.7316, lng: -73.9865, name: 'Restroom 13', details: 'Location: Near NYU Campus, Clean and accessible!' },
    { lat: 40.7515, lng: -73.9933, name: 'Restroom 14', details: 'Location: Near Madison Square Garden, Clean and accessible!' },
    { lat: 40.7281, lng: -73.9922, name: 'Restroom 15', details: 'Location: Near Washington Square Park, Clean and accessible!' },
    { lat: 40.7587, lng: -73.9796, name: 'Restroom 16', details: 'Location: Near Rockefeller Center, Clean and accessible!' },
    { lat: 40.7602, lng: -73.9813, name: 'Restroom 17', details: 'Location: Near Times Square Subway Station, Clean and accessible!' },
    { lat: 40.7049, lng: -74.0133, name: 'Restroom 18', details: 'Location: Near the Battery Park City, Clean and accessible!' },
    { lat: 40.7499, lng: -73.9781, name: 'Restroom 19', details: 'Location: Near the New Amsterdam Theater, Clean and accessible!' },
    { lat: 40.7233, lng: -73.9865, name: 'Restroom 20', details: 'Location: Near the Bowery, Clean and accessible!' },
    { lat: 40.7055, lng: -74.0091, name: 'Restroom 21', details: 'Location: Near South Street Seaport, Clean and accessible!' },
    { lat: 40.7190, lng: -74.0035, name: 'Restroom 22', details: 'Location: Near the East River Park, Clean and accessible!' },
    { lat: 40.6887, lng: -74.0270, name: 'Restroom 23', details: 'Location: Near the Staten Island Ferry Terminal, Clean and accessible!' },
    { lat: 40.7203, lng: -73.9940, name: 'Restroom 24', details: 'Location: Near the Hudson River Park, Clean and accessible!' },
    { lat: 40.7486, lng: -73.9879, name: 'Restroom 25', details: 'Location: Near Herald Square, Clean and accessible!' },
    { lat: 40.7122, lng: -73.9985, name: 'Restroom 26', details: 'Location: Near City Hall Park, Clean and accessible!' },
    { lat: 40.7450, lng: -73.9945, name: 'Restroom 27', details: 'Location: Near Flatiron Building, Clean and accessible!' },
    { lat: 40.7074, lng: -74.0162, name: 'Restroom 28', details: 'Location: Near Wall Street, Clean and accessible!' },
    { lat: 40.7527, lng: -73.9772, name: 'Restroom 29', details: 'Location: Near New York Public Library, Clean and accessible!' },
    { lat: 40.7336, lng: -73.9907, name: 'Restroom 30', details: 'Location: Near Union Square, Clean and accessible!' },
    { lat: 40.7591, lng: -73.9692, name: 'Restroom 31', details: 'Location: Near Radio City Music Hall, Clean and accessible!' },
    { lat: 40.7075, lng: -74.0104, name: 'Restroom 32', details: 'Location: Near Bowling Green Park, Clean and accessible!' },
    { lat: 40.7328, lng: -73.9995, name: 'Restroom 33', details: 'Location: Near SoHo, Clean and accessible!' },
    { lat: 40.7412, lng: -74.0007, name: 'Restroom 34', details: 'Location: Near Meatpacking District, Clean and accessible!' },
    { lat: 40.7083, lng: -74.0130, name: 'Restroom 35', details: 'Location: Near Brookfield Place, Clean and accessible!' },
    { lat: 40.7555, lng: -73.9802, name: 'Restroom 36', details: 'Location: Near Bryant Park Subway Station, Clean and accessible!' },
    { lat: 40.7505, lng: -73.9934, name: 'Restroom 37', details: 'Location: Near Penn Station, Clean and accessible!' },
    { lat: 40.7608, lng: -73.9731, name: 'Restroom 38', details: 'Location: Near MoMA, Clean and accessible!' },
    { lat: 40.7766, lng: -73.9761, name: 'Restroom 39', details: 'Location: Near American Museum of Natural History, Clean and accessible!' },
    { lat: 40.7366, lng: -73.9943, name: 'Restroom 40', details: 'Location: Near West Village, Clean and accessible!' },
    { lat: 40.7619, lng: -73.9786, name: 'Restroom 41', details: 'Location: Near Carnegie Hall, Clean and accessible!' },
    { lat: 40.7010, lng: -74.0122, name: 'Restroom 42', details: 'Location: Near Battery Maritime Building, Clean and accessible!' },
    { lat: 40.7597, lng: -73.9835, name: 'Restroom 43', details: 'Location: Near Times Square 42nd Street Subway Station, Clean and accessible!' },
    { lat: 40.7150, lng: -74.0122, name: 'Restroom 44', details: 'Location: Near World Financial Center, Clean and accessible!' },
    { lat: 40.7516, lng: -73.9755, name: 'Restroom 45', details: 'Location: Near Chrysler Building, Clean and accessible!' },
    { lat: 40.7069, lng: -74.0135, name: 'Restroom 46', details: 'Location: Near Wall Street Bull, Clean and accessible!' },
    { lat: 40.7465, lng: -73.9857, name: 'Restroom 47', details: 'Location: Near Macy’s Herald Square, Clean and accessible!' },
    { lat: 40.7484, lng: -73.9757, name: 'Restroom 48', details: 'Location: Near Morgan Library & Museum, Clean and accessible!' },
    { lat: 40.7570, lng: -73.9820, name: 'Restroom 49', details: 'Location: Near Times Square 47th-50th St Subway Station, Clean and accessible!' },
    { lat: 40.6782, lng: -73.9442, name: 'Restroom 50', details: 'Location: Prospect Park, Clean and accessible!' },
    { lat: 40.7061, lng: -73.9969, name: 'Restroom 51', details: 'Location: Brooklyn Bridge Park, Clean and accessible!' },
    { lat: 40.7033, lng: -73.9798, name: 'Restroom 52', details: 'Location: Near Brooklyn Museum, Clean and accessible!' },
    { lat: 40.6359, lng: -74.0324, name: 'Restroom 53', details: 'Location: Near Marine Park, Clean and accessible!' },
    { lat: 40.6904, lng: -73.9932, name: 'Restroom 54', details: 'Location: Near Brooklyn Heights Promenade, Clean and accessible!' },
    { lat: 40.6820, lng: -73.9558, name: 'Restroom 55', details: 'Location: Near Prospect Park Zoo, Clean and accessible!' },
    { lat: 40.6293, lng: -74.0313, name: 'Restroom 56', details: 'Location: Near Plumb Beach, Clean and accessible!' },
    { lat: 40.6840, lng: -73.9669, name: 'Restroom 57', details: 'Location: Near Fort Greene Park, Clean and accessible!' },
    { lat: 40.7057, lng: -73.9796, name: 'Restroom 58', details: 'Location: Near Barclay Center, Clean and accessible!' },
    { lat: 40.6724, lng: -73.9587, name: 'Restroom 59', details: 'Location: Near Brooklyn Botanic Garden, Clean and accessible!' },
    { lat: 40.7115, lng: -73.9514, name: 'Restroom 60', details: 'Location: Near Williamsburg Waterfront, Clean and accessible!' },
    { lat: 40.6830, lng: -73.9725, name: 'Restroom 61', details: 'Location: Near Fort Hamilton, Clean and accessible!' },
    { lat: 40.7074, lng: -73.9582, name: 'Restroom 62', details: 'Location: Near DUMBO, Clean and accessible!' },
    { lat: 40.6579, lng: -73.9818, name: 'Restroom 63', details: 'Location: Near Coney Island, Clean and accessible!' },
    { lat: 40.6141, lng: -73.9479, name: 'Restroom 64', details: 'Location: Near Brighton Beach, Clean and accessible!' },
    { lat: 40.6652, lng: -73.9755, name: 'Restroom 65', details: 'Location: Near Flatbush Avenue, Clean and accessible!' },
    { lat: 40.6753, lng: -73.9495, name: 'Restroom 66', details: 'Location: Near Brooklyn Navy Yard, Clean and accessible!' },
    { lat: 40.6892, lng: -73.9116, name: 'Restroom 67', details: 'Location: Near East New York, Clean and accessible!' },
    { lat: 40.6347, lng: -73.9411, name: 'Restroom 68', details: 'Location: Near Canarsie Park, Clean and accessible!' },
    { lat: 40.6770, lng: -73.9354, name: 'Restroom 69', details: 'Location: Near Green-Wood Cemetery, Clean and accessible!' },
    { lat: 40.7272, lng: -73.9486, name: 'Restroom 70', details: 'Location: Near Red Hook, Clean and accessible!' },
    { lat: 40.6745, lng: -73.9788, name: 'Restroom 71', details: 'Location: Near Sunset Park, Clean and accessible!' },
    { lat: 40.6613, lng: -73.9493, name: 'Restroom 72', details: 'Location: Near Marine Park Golf Course, Clean and accessible!' },
    { lat: 40.6997, lng: -73.9241, name: 'Restroom 73', details: 'Location: Near Brownsville, Clean and accessible!' },
    { lat: 40.6268, lng: -73.9642, name: 'Restroom 74', details: 'Location: Near Fort Tilden Park, Clean and accessible!' },
    { lat: 40.6994, lng: -73.9204, name: 'Restroom 75', details: 'Location: Near Starrett City, Clean and accessible!' } 
  ];

  const trashCanLocations = [
    { lat: 40.7536, lng: -73.9842, name: 'Trash Can 1', details: 'Location: Near Bryant Park' },
    { lat: 40.7496, lng: -73.9860, name: 'Trash Can 2', details: 'Location: Grand Central Terminal Entrance' },
    { lat: 40.7585, lng: -73.9850, name: 'Trash Can 3', details: 'Location: Times Square' },
    { lat: 40.7308, lng: -73.9353, name: 'Trash Can 4', details: 'Location: Central Park Entrance' },
    { lat: 40.7411, lng: -73.9940, name: 'Trash Can 5', details: 'Location: The High Line' },
    { lat: 40.7120, lng: -74.0120, name: 'Trash Can 6', details: 'Location: Battery Park' },
    { lat: 40.7494, lng: -73.9758, name: 'Trash Can 7', details: 'Location: Empire State Building' },
    { lat: 40.7854, lng: -73.9685, name: 'Trash Can 8', details: 'Location: Metropolitan Museum of Art' },
    { lat: 40.7585, lng: -73.9865, name: 'Trash Can 9', details: 'Location: Near M&M'},
    { lat: 40.7200, lng: -73.9880, name: 'Trash Can 10', details: 'Location: Washington Square Park' },
    { lat: 40.7420, lng: -73.9840, name: 'Trash Can 11', details: 'Location: Near the New York Public Library' },
    { lat: 40.7652, lng: -73.9795, name: 'Trash Can 12', details: 'Location: Near the UN Headquarters' },
    { lat: 40.7074, lng: -74.0128, name: 'Trash Can 13', details: 'Location: Near One World Trade Center' },
    { lat: 40.7763, lng: -73.9797, name: 'Trash Can 14', details: 'Location: Near Lincoln Center' },
    { lat: 40.7499, lng: -73.9683, name: 'Trash Can 15', details: 'Location: Near the Vessel at Hudson Yards' },
    { lat: 40.7584, lng: -73.9799, name: 'Trash Can 16', details: 'Location: Near Radio City Music Hall' },
    { lat: 40.7510, lng: -73.9945, name: 'Trash Can 17', details: 'Location: Near Madison Square Garden' },
    { lat: 40.7375, lng: -73.9952, name: 'Trash Can 18', details: 'Location: Near Chelsea Market' },
    { lat: 40.7302, lng: -73.9940, name: 'Trash Can 19', details: 'Location: Near the High Line Entrance' },
    { lat: 40.7300, lng: -73.9905, name: 'Trash Can 20', details: 'Location: Near the Whitney Museum' },
    { lat: 40.7427, lng: -73.9998, name: 'Trash Can 21', details: 'Location: Near the Hudson River Park' },
    { lat: 40.7190, lng: -74.0035, name: 'Trash Can 22', details: 'Location: Near the Battery Park City Esplanade' },
    { lat: 40.7576, lng: -73.9810, name: 'Trash Can 23', details: 'Location: Near the New Amsterdam Theater' },
    { lat: 40.7343, lng: -73.9855, name: 'Trash Can 24', details: 'Location: Near the Bowery' },
    { lat: 40.7114, lng: -74.0080, name: 'Trash Can 25', details: 'Location: Near Wall Street' },
    { lat: 40.7030, lng: -74.0174, name: 'Trash Can 26', details: 'Location: Near South Street Seaport' },
    { lat: 40.7307, lng: -73.9358, name: 'Trash Can 27', details: 'Location: Near the East River Park' },
    { lat: 40.7307, lng: -73.9358, name: 'Trash Can 28', details: 'Location: Near the Staten Island Ferry Terminal' },
    { lat: 40.7054, lng: -74.0170, name: 'Trash Can 29', details: 'Location: Near Battery Park' },
    { lat: 40.7054, lng: -74.0170, name: 'Trash Can 30', details: 'Location: Near the World Trade Center' },
    { lat: 40.7516, lng: -73.9933, name: 'Trash Can 31', details: 'Location: Near Times Square Subway Station' },
    { lat: 40.7282, lng: -73.9870, name: 'Trash Can 32', details: 'Location: Near the NYU Campus' },
    { lat: 40.7580, lng: -73.9855, name: 'Trash Can 33', details: 'Location: Near Times Square Subway Entrance' },
    { lat: 40.7851, lng: -73.9683, name: 'Trash Can 34', details: 'Location: Near Central Park South' },
    { lat: 40.7527, lng: -73.9772, name: 'Trash Can 35', details: 'Location: Near New York Public Library' },
    { lat: 40.6902, lng: -73.9249, name: 'Trash Can 36', details: 'Location: Near Brooklyn College' },
    { lat: 40.7060, lng: -73.9930, name: 'Trash Can 37', details: 'Location: Near Brooklyn Bridge' },
    { lat: 40.6417, lng: -73.9442, name: 'Trash Can 38', details: 'Location: Near Brooklyn Prospect Park' },
    { lat: 40.6782, lng: -73.9442, name: 'Trash Can 39', details: 'Location: Near Prospect Park West' },
    { lat: 40.6374, lng: -73.9439, name: 'Trash Can 40', details: 'Location: Near Canarsie Park' },
    { lat: 40.6191, lng: -73.9359, name: 'Trash Can 41', details: 'Location: Near Plumb Beach' },
    { lat: 40.7048, lng: -73.9770, name: 'Trash Can 42', details: 'Location: Near Dumbo' },
    { lat: 40.7015, lng: -73.9323, name: 'Trash Can 43', details: 'Location: Near Brooklyn Bridge Park' },
    { lat: 40.6835, lng: -73.9777, name: 'Trash Can 44', details: 'Location: Near Sunset Park' },
    { lat: 40.6784, lng: -73.9512, name: 'Trash Can 45', details: 'Location: Near Brooklyn Heights' },
    { lat: 40.6857, lng: -73.9682, name: 'Trash Can 46', details: 'Location: Near Fort Greene Park' },
    { lat: 40.7116, lng: -73.9504, name: 'Trash Can 47', details: 'Location: Near Prospect Park Zoo' },
    { lat: 40.6505, lng: -73.9482, name: 'Trash Can 48', details: 'Location: Near Flatbush Avenue' },
    { lat: 40.6851, lng: -73.9145, name: 'Trash Can 49', details: 'Location: Near East New York' },
    { lat: 40.6131, lng: -73.9585, name: 'Trash Can 50', details: 'Location: Near Coney Island' },
    { lat: 40.6694, lng: -73.9478, name: 'Trash Can 51', details: 'Location: Near Sunset Park Recreation Center' },
    { lat: 40.6403, lng: -73.9447, name: 'Trash Can 52', details: 'Location: Near Marine Park Golf Course' },
    { lat: 40.7300, lng: -73.9304, name: 'Trash Can 53', details: 'Location: Near East River State Park' },
    { lat: 40.6469, lng: -73.9256, name: 'Trash Can 54', details: 'Location: Near Bushwick Inlet Park' }
  ];

  // Global marker track arrays for toggling
  const restroomMarkers = [];
  const trashCanMarkers = [];
  const waterFountainMarkers = [];

  // 4. Helper Functions
  function coordinatesMatch(lat1, lon1, lat2, lon2, tolerance = 0.001) {
    return Math.abs(lat1 - lat2) <= tolerance && Math.abs(lon1 - lon2) <= tolerance;
  }

  function createMarker(lat, lon, icon, hoverIcon, popupHtml, storageArray) {
    const marker = L.marker([lat, lon], { icon: icon }).addTo(map).bindPopup(popupHtml);
    
    marker.on('mouseover', function () { this.setIcon(hoverIcon); });
    marker.on('mouseout', function () { this.setIcon(icon); });
    
    storageArray.push(marker);
    return marker;
  }

  function setupToggle(buttonId, markerArray) {
    const button = document.getElementById(buttonId);
    if (!button) return;
    
    button.addEventListener('click', () => {
      markerArray.forEach(marker => {
        if (map.hasLayer(marker)) {
          map.removeLayer(marker);
        } else {
          marker.addTo(map);
        }
      });
    });
  }

  // 5. API Data Fetchers
  async function loadToilets() {
    try {
      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: "data=" + encodeURIComponent(`
          [bbox:40.566528,-74.124389, 40.911032,-73.521317]
          [out:json]
          [timeout:90];
          area[name="New York"]->.nyc;
          (
            node["amenity"="toilets"](area.nyc);
            way["amenity"="toilets"](area.nyc);
            relation["amenity"="toilets"](area.nyc);
          );
          out center;
        `)
      });

      const data = await response.json();
      
      data.elements.forEach(element => {
        const lat = element.lat || (element.center && element.center.lat);
        const lon = element.lon || (element.center && element.center.lon);
        if (!lat || !lon) return;

        const tags = element.tags || {};
        const name = tags.name || "Unnamed Restroom";
        const amenityType = tags.amenity;

        // Verify if it already exists in hardcoded local data
        const isDuplicate = restroomLocations.some(loc => coordinatesMatch(loc.lat, loc.lng, lat, lon));

        if (!isDuplicate) {
          const popupHtml = `
            <div class="popup-content">
              <h3>${name}</h3>
              <p>Amenity: ${amenityType}</p>
            </div>`;
          createMarker(lat, lon, restroomIcon, restroomHoverIcon, popupHtml, restroomMarkers);
        }
      });
    } catch (error) {
      console.error("Error fetching toilet data:", error);
    }
  }

  async function loadWaterFountains() {
    try {
      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: "data=" + encodeURIComponent(`
          [bbox:40.566528,-74.124389, 40.911032,-73.521317]
          [out:json]
          [timeout:90];
          area[name="New York"]->.nyc;
          (
            node["amenity"="drinking_water"](area.nyc);
            way["amenity"="drinking_water"](area.nyc);
            relation["amenity"="drinking_water"](area.nyc);
          );
          out center;
        `)
      });

      const data = await response.json();

      data.elements.forEach(element => {
        const lat = element.lat || (element.center && element.center.lat);
        const lon = element.lon || (element.center && element.center.lon);
        if (!lat || !lon) return;

        const tags = element.tags || {};
        if (tags.access === "no") return; // Optional filter skip non-public ones

        const name = tags.name || "Water Fountain";
        const popupHtml = `
          <div class="popup-content">
            <h3>${name}</h3>
            <p>Amenity: ${tags.amenity}</p>
          </div>`;

        createMarker(lat, lon, waterFountainIcon, waterFountainHoverIcon, popupHtml, waterFountainMarkers);
      });
    } catch (error) {
      console.error("Error fetching water fountain data:", error);
    }
  }

  // 6. Initialize App Logic & Hardcoded Markers
  restroomLocations.forEach(loc => {
    const html = `<div class="popup-content"><h3>${loc.name}</h3><p>${loc.details}</p></div>`;
    createMarker(loc.lat, loc.lng, restroomIcon, restroomHoverIcon, html, restroomMarkers);
  });

  trashCanLocations.forEach(loc => {
    const html = `<div class="popup-content"><h3>${loc.name}</h3><p>${loc.details}</p></div>`;
    createMarker(loc.lat, loc.lng, trashCanIcon, trashcanHoverIcon, html, trashCanMarkers);
  });

  // Load live data from Overpass OpenStreetMap API
  loadToilets();
  loadWaterFountains();

  // Setup UI Toggles
  setupToggle('toggleRestrooms', restroomMarkers);
  setupToggle('toggleTrashCans', trashCanMarkers);
  setupToggle('toggleWaterFountains', waterFountainMarkers);

  // 7. Geolocation Configuration
  function addUserLocation(lat, lng) {
    const userMarker = L.circleMarker([lat, lng], {
      color: 'blue',
      fillColor: '#03a9f4',
      fillOpacity: 0.5,
      radius: 8
    }).addTo(map).bindPopup('Your Location');

    userMarker.on('click', () => {
      map.setView([lat, lng], 18);
    });
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => addUserLocation(position.coords.latitude, position.coords.longitude),
      (error) => console.error("Geolocation error:", error)
    );
  }
});