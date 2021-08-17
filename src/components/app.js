const APP = () => {
  const FORM = document.getElementById('input_form');

  const FORM_SUBMIT_HANDLER = (event) => {
    event.preventDefault();
    const USER_INPUT = document.getElementById('text_input').value;
    console.log(USER_INPUT);
  };

  FORM.addEventListener('submit', FORM_SUBMIT_HANDLER);
};

export { APP };
