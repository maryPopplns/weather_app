const APP = () => {
  const FORM = document.getElementById('input_form');

  FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
  });
};

export { APP };
