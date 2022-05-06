export const isValidFirstName = (firstName, minLen, maxLen) => {
  let firstNameLength = firstName.value.length;
  if (
    firstNameLength == 0 ||
    firstNameLength > maxLen ||
    firstNameLength < minLen
  ) {
    // || - Or operator
    alert(
      "First Name should not be empty / length must be between " +
        minLen +
        " to " +
        maxLen
    );
    firstName.focus();
    return false;
  } else if (!isAlpha(firstName)) {
    //! - Not operator
    alert("Enter alphabets only");
    firstName.focus();
    return false;
  }
  return true;
};

export const isValidLastName = (lastName, minLen, maxLen) => {
  let lastNameLength = lastName.value.length;
  if (
    lastNameLength == 0 ||
    lastNameLength > maxLen ||
    lastNameLength < minLen
  ) {
    // || - Or operator
    alert(
      "First Name should not be empty / length must be between " +
        minLen +
        " to " +
        maxLen
    );
    lastName.focus();
    return false;
  } else if (!isAlpha(lastName)) {
    //! - Not operator
    alert("Enter alphabets only");
    lastName.focus();
    return false;
  }
  return true;
};

export const isValidEmail = (email) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("Enter valid email address!");
    email.focus();
    return false;
  }
};

export const isValidPassword = (password, minLen) => {
  let passwordLength = password.value.length;
  if (passwordLength == 0 || passwordLength < minLen) {
    // || - Or operator
    alert("Password should not be empty / length must be more than " + minLen);
    password.focus();
    return false;
  } else if (!isPassword(password)) {
    // - must contain at least 1 uppercase letter, 1 lowercase letter
    alert(
      "Password must contain at least 1 uppercase letter, 1 lowercase letter"
    );
    password.focus();
    return false;
  }
  return true;
};

export const isAlpha = (input) => {
  let characters = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/; // Regular Expression [ ] - Options , A-Z - A,B, C ... Z, ^ - Any
  if (input.value.match(characters)) {
    return true;
  }
  return false;
};

export const isAlphaNumeric = (input) => {
  let characters = /^[0-9A-Za-z]+$/;
  if (input.value.match(characters)) {
    return true;
  }
  return false;
};

export const isPassword = (input) => {
  // - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
  let characters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;
  if (input.value.match(characters)) {
    return true;
  }
  return false;
};
