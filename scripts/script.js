/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
'use strict';

function userValidator(formFields, warningIcon, tooltipText) {
  formFields[0].addEventListener('focusout', function() {
    if ( formFields[0].value.length > 0) {
      warningIcon[0].classList.add('warning-not-visible');
      tooltipText[0].innerHTML = '';
    } else {
      warningIcon[0].classList.remove('warning-not-visible');
      tooltipText[0].innerHTML = 'Username cant be empty';
    }
    if (formFields[0].value.length > 101) {
      warningIcon[0].classList.remove('warning-not-visible');
      tooltipText[0].innerHTML = 'Username cant be longer than 100 signs' + ' Current username length: ' + formFields[0].value.length;
    }
  });
}
function emailValidator(formFields, warningIcon, tooltipText) {
  const reMail = /\S+@\S+\.\S+/;

  formFields[1].addEventListener('focusout', function() {
    if ( formFields[1].value.length > 0 && reMail.test(formFields[1].value)) {
      warningIcon[1].classList.add('warning-not-visible');
      tooltipText[1].innerHTML = '';
    } else {
      warningIcon[1].classList.remove('warning-not-visible');
      tooltipText[1].innerHTML = 'Invalid email';
    }
    if (formFields[1].value.length === 0) {
      warningIcon[1].classList.remove('warning-not-visible');
      tooltipText[1].innerHTML = 'Email can\'t be empty';
    }
  });
}
function passwordValidator(formFields, warningIcon, tooltipText) {
  formFields[2].addEventListener('focusout', function() {
    if (7 <= formFields[2].value.length && formFields[2].value.length <= 25) {
      warningIcon[2].classList.add('warning-not-visible');
      tooltipText[2].innerHTML = '';
    }
    if (formFields[2].value.length < 7) {
      warningIcon[2].classList.remove('warning-not-visible');
      tooltipText[2].innerHTML = 'Password too short.' + ' Current password length: ' + formFields[2].value.length;
    }
    if (formFields[2].value.length > 25) {
      warningIcon[2].classList.remove('warning-not-visible');
      tooltipText[2].innerHTML = 'Password too long' + ' Current password length: ' + formFields[2].value.length;
    }
  });
}
function buttonDisabler(actionButton) {
  actionButton[0].disabled = true;
  actionButton[0].classList.add('button-disabled');
  actionButton[0].classList.remove('button-enabled');
}
function buttonEnabler(actionButton) {
  actionButton[0].disabled = false;
  actionButton[0].classList.remove('button-disabled');
  actionButton[0].classList.add('button-enabled');
}
function submitButtonToggler(formFields) {
  const actionButton = document.getElementsByClassName('idee-test-action-button');
  const warningCounter = document.getElementsByClassName('warning-not-visible');

  for (let i = 0; i < 3; ++i) {
    formFields[i].addEventListener('focusout', function() {
      if (warningCounter.length < 3) {
        buttonDisabler(actionButton);
      }
      if (warningCounter.length === 3) {
        buttonEnabler(actionButton);
      }
    });
  }
  document.addEventListener('load', buttonDisabler(actionButton));
}
function formValidator() {
  const warningIcon = document.getElementsByClassName('warning-icon-wrapper');
  const formFields = document.getElementsByClassName('form-field');
  const tooltipText = document.getElementsByClassName('tooltiptext');

  userValidator(formFields, warningIcon, tooltipText);
  passwordValidator(formFields, warningIcon, tooltipText);
  emailValidator(formFields, warningIcon, tooltipText);
  submitButtonToggler(formFields);
}
function passwordForgotToggler() {
  const forgotPasswordButton = document.getElementsByClassName('idee-test-button-left');
  const forgotPasswordWrapper = document.getElementsByClassName('idee-test-forgot-password-wrapper');
  const forgotPasswordBox = document.getElementsByClassName('idee-test-forgot-password-box ');
  const forgotPasswordBoxCloseButton = document.getElementsByClassName('fa-times');

  // Open prompt
  forgotPasswordButton[0].addEventListener('click', function() {
    forgotPasswordWrapper[0].classList.add('greyer');
    forgotPasswordBox[0].classList.remove('password-forgot-not-visible');
  });

  // Close prompt
  forgotPasswordBoxCloseButton[0].addEventListener('click', function() {
    forgotPasswordWrapper[0].classList.remove('greyer');
    forgotPasswordBox[0].classList.add('password-forgot-not-visible');
  });
}

formValidator();
passwordForgotToggler();
