const emailMinLength = 6;
const passwordMinLength = 5;

const users = new Map();
users.set('user@gmail.com', 'UserPass');
users.set('admin@gmail.com', 'AdminPass');

// Enter and validate email
let email = null;
let inputEmail = prompt('Enter your Email: ');

if (!inputEmail) {
  alert('Canceled');
} else if (inputEmail.length < emailMinLength) {
  alert('I don’t know any emails having name length less than 6 symbols');
} else if (users.has(inputEmail)) {
  email = inputEmail;
} else {
  alert('I don’t know you');
}

// Enter and validate password, if previous step was successful
let password = null;
if (email) {
  let inputPassword = prompt('Enter your Password: ');

  if (!inputPassword) {
    alert('Canceled');
  } else if (inputPassword === users.get(email)) {
    password = inputPassword;
  } else {
    alert('Wrong password');
  }
}

// Ask for change password, if previous step was successful
let confirmToChangePassword = false;
if (password) {
  confirmToChangePassword = confirm('Do you want to change your password?');

  if (!confirmToChangePassword) {
    alert('You have failed the change.');
  }
}

// Enter and validate old password, if previous step was successful
let oldPassword = null;
if (confirmToChangePassword) {
  let inputOldPassword = prompt('Enter your Old Password: ');

  if (!inputOldPassword) {
    alert('Canceled');
  } else if (inputOldPassword === users.get(email)) {
    oldPassword = inputOldPassword;
  } else {
    alert('Wrong password');
  }
}

// Enter and validate new password, if previous step was successful
let newPassword = null;
if (oldPassword) {
  let inputNewPassword = prompt('Enter your New Password: ');

  if (inputNewPassword && inputNewPassword.length >= passwordMinLength) {
    newPassword = inputNewPassword;
  } else {
    alert('It’s too short password. Sorry.');
  }
}

// Enter and validate new password confirmation, if previous step was successful
if (newPassword) {
  let inputSecondPassword = prompt('Enter your New Password again: ');

  if (inputSecondPassword === newPassword) {
    alert('You have successfully changed your password.');
  } else {
    alert('You wrote the wrong password.');
  }
}