
export function validateEmail(email) {
    const errors = {};
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      errors.email = 'Email is invalid';
    }
  
    return errors;
  }
  
  export function validatePassword(password) {
    let errors = '';
  
    if (!password) {
      errors = 'Password is required';
    } else if (password.length < 8) {
      errors = 'Password must be at least 8 characters long';
    } else if (!/[a-z]/.test(password)) {
      errors = 'Password must contain at least one lowercase letter';
    } else if (!/[A-Z]/.test(password)) {
      errors = 'Password must contain at least one uppercase letter';
    } else if (!/\d/.test(password)) {
      errors = 'Password must contain at least one digit';
    }
  
    return errors;
  }
  