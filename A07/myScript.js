/**
 * Created by Michael on 9/20/2015.
 */

function getClasses(elem) {
  return document.getElementsByTagName(elem).className.split(" ");
}

function addClass(elem, className) {
  if(elem.className === "") {
    elem.className = className;
  }
  else {
    elem.className += (" " + className);
  }
}