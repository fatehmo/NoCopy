
/*
Fatehmo
*/

var message="copy of this site is not available";  
  
  // (A) PREVENT CONTEXT MENU FROM OPENING
  document.addEventListener("contextmenu", (evt) => {
    evt.preventDefault();
}, false);

// (B) PREVENT CLIPBOARD COPYING
document.addEventListener("copy", (evt) => {
    // (B2) PREVENT THE DEFAULT COPY ACTION
    evt.preventDefault();

    // (B1) CHANGE THE COPIED TEXT IF YOU WANT
    evt.clipboardData.setData("text/plain", message);

}, false);

