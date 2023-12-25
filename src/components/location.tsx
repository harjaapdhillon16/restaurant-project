import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '90%',
  margin: 'auto',
  height: '400px'
};

const center = {
  lat: 37.75902847626571,
  lng: -122.42198245803972
};

export const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCW7A2LY_XIQtmNym9t0hs17nPYO7O7A0A'
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center as any);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <>
      <div
        style={{ fontFamily: "'Roboto', sans-serif" }}
        className='bg-[#291200] pb-20 pt-10 text-center'
      >
        <p className='text-[#805100]'>VISIT</p>
        <p className='text-2xl text-[#ffed8c]'>
          1234 Divi St. #1000 San Franscisco, CA 94220.
        </p>
        <p className='mt-3 text-[#805100]'>CONTACT</p>
        <p className='text-2xl text-[#ffed8c]'>(234) 213-7574</p>
        <p className='text-2xl text-[#ffed8c]'>info@divicocktailbar.com</p>
        <p className='mt-5 text-[#ffed8c]'>OPEN EVERY DAY</p>
        <p className='text-[#805100]'>Mon - Thu , 11:30am - 12am</p>
        <p className='text-[#805100]'>Fri 7:30am - 2am</p>
        {isLoaded && (
          <div className='mt-10'>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={9}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <>
                <Marker
                  position={{
                    lat: 37.75902847626571,
                    lng: -122.42198245803972
                  }}
                />
              </>
            </GoogleMap>
          </div>
        )}
      </div>
    </>
  );
};
