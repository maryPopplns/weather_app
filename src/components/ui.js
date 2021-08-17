const UI = () => {
  const MAIN = document.createElement('main');
  const FORM = document.createElement('form');
  const INPUT = document.createElement('input');
<<<<<<< HEAD
  const SUBMIT = document.createElement('input');

  INPUT.setAttribute('type', 'text');
  SUBMIT.setAttribute('type', 'submit');
  SUBMIT.id = 'submit_input';
=======
>>>>>>> main

  document.body.append(MAIN);
  MAIN.append(FORM);
  FORM.append(INPUT);
  FORM.append(SUBMIT);
};

export { UI };
