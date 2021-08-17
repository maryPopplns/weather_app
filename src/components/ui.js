const UI = () => {
  const MAIN = document.createElement('main');
  const FORM = document.createElement('form');
  const INPUT = document.createElement('input');

  document.body.append(MAIN);
  MAIN.append(FORM);
  FORM.append(INPUT);
};

export { UI };
