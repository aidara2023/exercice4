function getElement() {
    const element = document.getElementsByTagName("title");
    element.innerText = "J'ai changé l'élément obtenu par id"
  };
  
  window.onload = getElement;