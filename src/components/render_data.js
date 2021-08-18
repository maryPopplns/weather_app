const RENDER_DATA = (data) => {
  const CURRENT_DATA = document.getElementById('display_container');
  if (CURRENT_DATA !== null) {
    CURRENT_DATA.remove();
  }

  const NAME = data.name;
  const DESCRIPTION = data.weather[0].description;
  const KELVIN_TEMP = data.main.temp;
  // const HUMIDITY = data.main.humidity;

  const DISPLAY_CONTAINER = document.createElement('div');
  const HEADING = document.createElement('h2');
  const TEMPERATURE = document.createElement('div');
  const WEATHER_DESCRIPTION = document.createElement('div');

  DISPLAY_CONTAINER.id = 'display_container';
  HEADING.id = NAME;
  HEADING.innerText = NAME;
  TEMPERATURE.id = KELVIN_TEMP;
  TEMPERATURE.innerText = KELVIN_TEMP;
  WEATHER_DESCRIPTION.id = DESCRIPTION;
  WEATHER_DESCRIPTION.innerText = DESCRIPTION;

  document.getElementsByTagName('main')[0].append(DISPLAY_CONTAINER);
  DISPLAY_CONTAINER.append(NAME);
  DISPLAY_CONTAINER.append(TEMPERATURE);
  DISPLAY_CONTAINER.append(WEATHER_DESCRIPTION);
};

export { RENDER_DATA };
