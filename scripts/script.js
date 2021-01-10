'use strict';

function user_validator(form_fields, warning_icon, tooltip_text){
    form_fields[0].addEventListener("focusout", function(){
        if ( form_fields[0].value.length > 0){
            warning_icon[0].classList.add("warning-not-visible");
            tooltip_text[0].innerHTML = "";
        }else{
            warning_icon[0].classList.remove("warning-not-visible");
            tooltip_text[0].innerHTML = "Username can't be empty";
        }
        if (form_fields[0].value.length > 101){
            warning_icon[0].classList.remove("warning-not-visible");
            tooltip_text[0].innerHTML = "Username can't be longer than 100 signs" + " Current username length: " + form_fields[0].value.length;
        }
    });
    
}
function email_validator(form_fields, warning_icon, tooltip_text){
    const re_mail = /\S+@\S+\.\S+/;
    
    form_fields[1].addEventListener("focusout", function(){
        if ( form_fields[1].value.length > 0 && re_mail.test(form_fields[1].value)){
            warning_icon[1].classList.add("warning-not-visible");
            tooltip_text[1].innerHTML = "";
        }else{
            warning_icon[1].classList.remove("warning-not-visible");
            tooltip_text[1].innerHTML = "Invalid email";
        }
        if (form_fields[1].value.length === 0){
            warning_icon[1].classList.remove("warning-not-visible");
            tooltip_text[1].innerHTML = "Email can't be empty";
        }

    });
}
function password_validator(form_fields, warning_icon, tooltip_text){
    form_fields[2].addEventListener("focusout", function(){
        if (7 <= form_fields[2].value.length && form_fields[2].value.length <= 25){
            warning_icon[2].classList.add("warning-not-visible");
            tooltip_text[2].innerHTML = "";
        }
        if (form_fields[2].value.length < 7){
            warning_icon[2].classList.remove("warning-not-visible");
            tooltip_text[2].innerHTML = "Password too short." + " Current password length: " + form_fields[2].value.length;
        }
        if (form_fields[2].value.length > 25){
            warning_icon[2].classList.remove("warning-not-visible");
            tooltip_text[2].innerHTML = "Password too long" + " Current password length: " + form_fields[2].value.length;
        }

    });
}
function button_disabler(action_button){
    action_button[0].disabled = true;
    action_button[0].classList.add('button-disabled');
    action_button[0].classList.remove('button-enabled');
}
function button_enabler(action_button){
    action_button[0].disabled = false;
    action_button[0].classList.remove('button-disabled');
    action_button[0].classList.add('button-enabled');
}
function submit_button_toggler(form_fields){
    const action_button = document.getElementsByClassName('idee-test-action-button');
    const warning_icon_counter = document.getElementsByClassName('warning-not-visible');
    
    for (let i = 0; i < 3; ++i) {
        form_fields[i].addEventListener("focusout", function(){
            if (warning_icon_counter.length < 3){
                button_disabler(action_button);
            }
            if (warning_icon_counter.length === 3){
                button_enabler(action_button);
            }
        })
    }
    document.addEventListener('load', button_disabler(action_button));
}
function form_validator(){
    const warning_icon = document.getElementsByClassName('warning-icon-wrapper');
    const form_fields = document.getElementsByClassName('form-field');
    const tooltip_text = document.getElementsByClassName('tooltiptext');

    user_validator(form_fields, warning_icon, tooltip_text);
    password_validator(form_fields, warning_icon, tooltip_text);
    email_validator(form_fields, warning_icon, tooltip_text);
    submit_button_toggler(form_fields);

}
function password_forgot_toggler(){
    const forgot_password_button = document.getElementsByClassName('idee-test-button-left');
    const forgot_password_wrapper = document.getElementsByClassName('idee-test-forgot-password-wrapper');
    const forgot_password_box = document.getElementsByClassName('idee-test-forgot-password-box ');
    const forgot_password_box_close_button = document.getElementsByClassName('fa-times');

    //Open prompt
    forgot_password_button[0].addEventListener("click", function(){
        forgot_password_wrapper[0].classList.add('greyer');
        forgot_password_box[0].classList.remove('password-forgot-not-visible');
    })

    //Close prompt
    forgot_password_box_close_button[0].addEventListener("click", function(){
        forgot_password_wrapper[0].classList.remove('greyer');
        forgot_password_box[0].classList.add('password-forgot-not-visible');
    })
}

form_validator();
password_forgot_toggler();