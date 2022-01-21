/* eslint-disable no-useless-escape */
interface validationResult {
  result: boolean;
  error: string;
}

export const validateEmail = (email: string): validationResult => {
  const regularExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regularExpression.test(String(email).toLowerCase())) {
    return {
      result: true,
      error: '',
    };
  }
  return {
    result: false,
    error: 'Incorrect email;\n',
  };
};

export const validatePassword = (password: string): validationResult => {
  if (password.length < 8) {
    return {
      result: false,
      error: 'Your password too short;\n',
    };
  }
  if (password.length > 64) {
    return {
      result: false,
      error: 'Your password too long;\n',
    };
  }
  if (password.toLowerCase() !== password || password.toUpperCase() !== password) {
    return {
      result: false,
      error: 'Your password must contain letter of different cases;\n',
    };
  }
  if (/\d/.test(password) && /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password)) {
    return {
      result: true,
      error: '',
    };
  } else {
    return {
      result: false,
      error: 'Your password must contain number and special character;\n',
    };
  }
};

export const validatePasswordMatch = (password: string, repeatPassword: string): validationResult => {
  if (password === repeatPassword) {
    return {
      result: true,
      error: '',
    };
  } else {
    return {
      result: false,
      error: 'Passwords does not match;\n',
    };
  }
};

export const validateUsername = (username: string): validationResult => {
  if (username.length < 5) {
    return {
      result: false,
      error: 'Username must be length of 5 character;\n',
    };
  }
  return {
    result: true,
    error: '',
  };
};
