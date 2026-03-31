import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix for Leaflet default icon issues in Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Helper component to change map view
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

const Centers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const centers = [
      { name: 'Eco-Green Recyclers', city: 'Mumbai', contact: '+91 98765 43210', address: 'Plot 42, MIDC, Andheri East', coords: [19.0760, 72.8777] },
      { name: 'Renew Tech Solutions', city: 'Delhi', contact: '+91 91234 56789', address: 'B-12, Okhla Phase III, New Delhi', coords: [28.6139, 77.2090] },
      { name: 'Green Connect India', city: 'Bangalore', contact: '+91 80234 56701', address: '7th Main, Whitefield, Bengaluru', coords: [12.9716, 77.5946] },
      { name: 'E-Waste Relief Hub', city: 'Hyderabad', contact: '+91 40567 89012', address: 'Tech Park Rd, Gachibowli', coords: [17.3850, 78.4867] },
      { name: 'Sustainable Circuits', city: 'Chennai', contact: '+91 44123 45678', address: 'Guindy Industrial Estate', coords: [13.0827, 80.2707] },
      { name: 'Pure Planet E-Recycling', city: 'Pune', contact: '+91 20987 65432', address: 'Hinjewadi Phase 2', coords: [18.5204, 73.8567] },
  ];

  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Center of India
  const [mapZoom, setMapZoom] = useState(5);

  const filteredCenters = centers.filter(c => 
    c.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="centers-page" style={{paddingTop: '100px'}}>
      <div className="container">
        <h1 className="section-title">Find a <span className="highlight">Recycling Center</span></h1>
        
        <div className="search-box glass-card">
          <input 
            type="text" 
            placeholder="Search by city or center name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="centers-list">
          {filteredCenters.length > 0 ? (
            filteredCenters.map((center, idx) => (
              <div key={idx} className="center-card glass-card">
                <div className="city-tag">{center.city}</div>
                <h3>{center.name}</h3>
                <p><strong>📍 Address:</strong> {center.address}</p>
                <p><strong>📞 Contact:</strong> {center.contact}</p>
                <button 
                  className="map-btn"
                  onClick={() => {
                    setMapCenter(center.coords);
                    setMapZoom(12);
                    document.getElementById('map-view').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View on Map
                </button>
              </div>
            ))
          ) : (
            <div className="no-results glass-card">
              <p>No centers found for "{searchTerm}". Please try another city.</p>
            </div>
          )}
        </div>

        <div id="map-view" className="map-container glass-card">
          <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '400px', width: '100%', borderRadius: '16px' }}>
            <ChangeView center={mapCenter} zoom={mapZoom} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredCenters.map((center, idx) => (
              <Marker key={idx} position={center.coords}>
                <Popup>
                  <strong>{center.name}</strong><br />
                  {center.address}<br />
                  {center.contact}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <style jsx>{`
        .section-title { font-size: 2.5rem; margin-bottom: 40px; text-align: center; color: var(--primary-dark); transition: var(--transition); }
        body.dark .section-title { color: var(--primary-light); }
        .highlight { color: var(--primary); }

        .search-box { 
          max-width: 600px; margin: 0 auto 50px; display: flex; gap: 10px; 
          padding: 10px; border-radius: 50px; border: 1px solid var(--glass-border); background: var(--glass);
        }
        body.dark .search-box { border-color: var(--glass-border-dark); background: var(--glass-dark); }
        .search-box input { 
          flex: 1; padding: 15px 25px; border-radius: 50px; border: none; 
          background: transparent; font-size: 1.1rem; color: var(--text-light); 
        }
        body.dark .search-box input { color: var(--text-dark); }
        .search-btn { font-size: 1.5rem; padding: 0 20px; }

        .centers-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 80px;
        }
        .center-card { padding: 30px; position: relative; border-bottom: 4px solid var(--primary-light); border: 1px solid var(--glass-border); }
        body.dark .center-card { border-color: var(--glass-border-dark); }
        .city-tag { 
          position: absolute; top: 20px; right: 20px; 
          background: var(--primary); color: white; padding: 5px 15px; 
          border-radius: 20px; font-size: 0.8rem; font-weight: 600; 
        }
        .center-card h3 { margin-bottom: 15px; color: var(--primary-dark); transition: var(--transition); }
        body.dark .center-card h3 { color: var(--primary-light); }
        .center-card p { margin-bottom: 10px; font-size: 0.95rem; }
        .map-btn { 
          margin-top: 15px; width: 100%; padding: 10px; 
          border: 1px solid var(--primary); color: var(--primary); 
          border-radius: 8px; font-weight: 600; transition: var(--transition); 
        }
        body.dark .map-btn { color: var(--primary-light); border-color: var(--primary-light); }
        .map-btn:hover { background: var(--primary); color: white; }

        .map-container { margin-bottom: 100px; padding: 0; overflow: hidden; z-index: 1; }
        .no-results { padding: 40px; text-align: center; }
      `}</style>
    </div>
  );
};

export default Centers;
