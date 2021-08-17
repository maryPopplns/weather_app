const UI = () => {
  const MAIN = document.createElement('main');
  const FORM = document.createElement('form');
  const INPUT = document.createElement('input');
  const SUBMIT = document.createElement('input');

  INPUT.setAttribute('type', 'text');
  SUBMIT.setAttribute('type', 'submit');
  FORM.id = 'input_form';
  INPUT.id = 'text_input';
  SUBMIT.id = 'submit_input';

  document.body.append(MAIN);
  MAIN.append(FORM);
  FORM.append(INPUT);
  FORM.append(SUBMIT);
};

export { UI };
