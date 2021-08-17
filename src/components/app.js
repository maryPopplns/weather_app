const APP = () => {
  const [INPUT] = document.getElementsByTagName('input');

  INPUT.addEventListener('submit', (event) => {
    console.log(event);
  });
};

export { APP };
