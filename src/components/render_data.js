const RENDER_DATA = (data) => {
  // const NAME = data.name;
  // const WEATHER_DESCRIPTION = data.weather[0].description;
  // const KELVIN_TEMP = data.main.temp;
  // const HUMIDITY = data.main.humidity;

  const DISPLAY_CONTAINER = document.createElement('div');

  DISPLAY_CONTAINER.id = 'display_container';

  document.getElementsByTagName('main')[0].append(DISPLAY_CONTAINER);
};

export { RENDER_DATA };
