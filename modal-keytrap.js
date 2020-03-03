// Will hold previously focused element
var focusedElementBeforeModal;
var body = document.querySelector('.dim');
console.log(body)

// Find the modal and its overlay
var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal-overlay');

var modalToggle = document.querySelector('.modal-toggle');
modalToggle.addEventListener('click', openModal);

function openModal() {
  // Save current focus
  focusedElementBeforeModal = document.activeElement;

  // Listen for and trap the keyboard
  modal.addEventListener('keydown', trapTabKey);

  // Listen for indicators to close the modal
  modalOverlay.addEventListener('click', closeModal);
  // Sign-up button
  var signUpBtn = modal.querySelector('#signup');
  signUpBtn.addEventListener('click', closeModal);

  // Find all focusable children
  var focusableElementsString = 'a[href], area[href],input:not([disabled]), select:not([disabled]),textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable';
  var focusableElements = modal.querySelectorAll(focusableElementsString);
  //Convert Nodelist to Array
  focusableElements = Array.prototype.slice.call(focusableElements);

  var firstTabStop = focusableElements[0];
  var lastTabStop = focusableElements[focusableElements.length - 1];

  // show the modal and overlay
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
  modalToggle.style.background = "#ffffff";
  modalToggle.style.color = "black";
  body.style.opacity ='0.2';

  // focus first child
  firstTabStop.focus();

  function trapTabKey(e) {
    // Check for TAB key press
    if (e.keyCode ===9) {
      // SHIFT + TAB
      if(e.shiftKey) {
        if(document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }
        //TAB 
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }
    // ESCAPE
    if (e.keyCode === 27) {
      closeModal();
    }
  }
}
function closeModal() {
  // Hide the modal and overlay
  modal.style.display = "none";
  modalOverlay.style.display = "none";
  modalToggle.style.background = "rgb(103, 103, 139)";
  modalToggle.style.color = "#ffffff";
  body.style.opacity ='1.0';


  // Set focus back to element that had it before the modal was opened
  focusedElementBeforeModal.focus();
}
