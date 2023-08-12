import Pristine from 'pristinejs';
import {getLimitationsRegEx} from './form-validate/regular-expression';

const formNode = document.querySelector('.questions__form');

const formValidate = () => {
  const pristine = new Pristine(formNode, {
    classTo: 'questions__label',
    errorClass: 'is-invalid',
    errorTextParent: 'questions__label',
    errorTextTag: 'span',
    errorTextClass: 'questions__error',
  });

  const inputName = formNode.querySelector('#name');

  pristine.addValidator(inputName, function (value) {
    if (!getLimitationsRegEx('name').test(value)) {
      return true;
    }
    return false;
  }, 'В имени не может быть цифр', 2, false);

  formNode.addEventListener('submit', function (e) {
    e.preventDefault();
    const valid = pristine.validate();
    formNode.reset();
  });
};

export {formValidate};
