import { ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Location } from '~/types/location';

export const useMap = () => {
  const mapContainer = ref<HTMLElement | null>(null);
  let map: L.Map | null = null;
  const markers: L.Marker[] = [];

  const materialColors: Record<string, string> = {
    plastic: '#3b82f6',
    glass: '#10b981',
    paper: '#f59e0b',
    metal: '#6b7280',
    electronics: '#8b5cf6',
    batteries: '#ef4444',
    allTypes: '#64748b'
  };

  const createMarkerIcon = (materials?: string[]) => {
    let color = materialColors.allTypes;
    
    if (materials && materials.length > 0) {
      const firstMaterial = (materials[0] ?? '').toLowerCase();
      color = materialColors[firstMaterial] || materialColors.allTypes;
    }

    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${color};
          width: 25px;
          height: 25px;
          border-radius: 50% 50% 50% 0;
          border: 3px solid white;
          transform: rotate(-45deg);
          box-shadow: 0 3px 8px rgba(0,0,0,0.3);
        ">
          <div style="
            width: 10px;
            height: 10px;
            margin: 5px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [25, 25],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24]
    });
  };

  const createPopupContent = (location: Location, getMaterialTranslation: (material: string) => string) => {
    return `
      <div style="min-width: 150px;">
        <b style="font-size: 14px;">${location.name}</b><br/>
        <span style="font-size: 12px; color: #666;">${location.address || ''}</span>
        ${location.materials && location.materials.length > 0 ? `
          <div style="margin-top: 8px;">
            ${location.materials.map(m => `
              <span style="
                display: inline-block;
                background-color: ${materialColors[m.toLowerCase()] || materialColors.allTypes};
                color: white;
                padding: 2px 8px;
                border-radius: 4px;
                font-size: 11px;
                margin: 2px;
              ">${getMaterialTranslation(m)}</span>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  };

  const initializeMap = () => {
    if (!mapContainer.value || map) return;

    map = L.map(mapContainer.value).setView([52.2297, 21.0122], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);
  };

  const clearMarkers = () => {
    markers.forEach(marker => marker.remove());
    markers.length = 0;
  };

  const addMarkers = (
    locations: Location[], 
    getMaterialTranslation: (material: string) => string,
    selectedMaterial?: string
  ) => {
    if (!map) return;

    clearMarkers();

    const filteredLocations = locations.filter(loc => {
      if (!selectedMaterial || selectedMaterial === 'allTypes') {
        return true;
      }
      return loc.materials?.some(m => 
        m.toLowerCase() === selectedMaterial?.toLowerCase()
      );
    });

    filteredLocations.forEach((loc) => {
      if (map && loc.latitude && loc.longitude) {
        const marker = L.marker(
          [loc.latitude, loc.longitude],
          { icon: createMarkerIcon(loc.materials) }
        ).addTo(map);
        
        marker.bindPopup(createPopupContent(loc, getMaterialTranslation));
        markers.push(marker);
      }
    });

    if (filteredLocations.length > 0) {
      const bounds = L.latLngBounds(
        filteredLocations.map(loc => [loc.latitude, loc.longitude] as [number, number])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  };

  const flyToLocation = (location: Location) => {
    if (!map || !location.latitude || !location.longitude) return;

    map.closePopup();
    
    map.flyTo([location.latitude, location.longitude], 17, {
      animate: true,
      duration: 1.5
    });
    
    setTimeout(() => {
      markers.forEach(marker => {
        const markerLatLng = marker.getLatLng();
        if (markerLatLng.lat === location.latitude && markerLatLng.lng === location.longitude) {
          marker.openPopup();
        }
      });
    }, 800);
  };

  return {
    mapContainer,
    initializeMap,
    addMarkers,
    flyToLocation
  };
};
