const RENDER_DATA = (data) => {
  const CURRENT_DATA = document.getElementById('display_container');
  if (CURRENT_DATA !== null) {
    CURRENT_DATA.remove();
  }

  const NAME = data.name;
  // const WEATHER_DESCRIPTION = data.weather[0].description;
  // const KELVIN_TEMP = data.main.temp;
  // const HUMIDITY = data.main.humidity;

  const DISPLAY_CONTAINER = document.createElement('div');
  const HEADING = document.createElement('h2');

  DISPLAY_CONTAINER.id = 'display_container';
  HEADING.id = NAME;
  HEADING.innerText = NAME;

  document.getElementsByTagName('main')[0].append(DISPLAY_CONTAINER);
  DISPLAY_CONTAINER.append(NAME);
};

export { RENDER_DATA };
