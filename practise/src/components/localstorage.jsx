import React from 'react'

const localstorage = () => {
    localStorage.clear();
    sessionStorage.clear();

    localStorage.setItem("name", "Gokhul Kooranchi");
    //even if you close server website and browser the data will be stored until you clear it manually

    localStorage.getItem("name");
    localStorage.removeItem("name");
    localStorage.clear();

    sessionStorage.setItem("name", "Gokhul Kooranchi");
    //now if you close the browser the data will be cleared automatically
    sessionStorage.getItem("name");
    sessionStorage.removeItem("name");
    sessionStorage.clear();

    

  return (
    <div>localstorage</div>
  )
}

export default localstorage