import React from 'react'

const Valid = (email,password) => {
    const checkEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const checkPassword= /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/.test(password);

    const error={}
  if (!checkEmail){
    error.email=" email is not valid"

  }
  if(!checkPassword){
    error.password="password is not valild"
  }
  return error;
}

export default Valid
