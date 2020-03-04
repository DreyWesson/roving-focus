// Copyright 2018 Google LLC.
// SPDX-License-Identifier: Apache-2.0

// It can be really helpful to have constants for keycodes
// That way when you look at your source in a 3 months you won't
// have to remember what keycode 37 means :)
const KEYCODE = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40
};

const toolbar = document.querySelector('.toolbar');
toolbar.addEventListener('keydown', onKeyDown);
toolbar.addEventListener('click', onClick);

function onKeyDown(event) {
  switch (event.keyCode) {
    case KEYCODE.RIGHT:
    case KEYCODE.DOWN:
      event.preventDefault();
      focusNextItem();
      break;
    case KEYCODE.LEFT:
    case KEYCODE.UP:
      event.preventDefault();
      focusPreviousItem();
      break;
  }
}

function onClick(event) {
  // Make sure the clicked item is one of the buttons and
  // not something random :)
  const buttons = Array.from(toolbar.querySelectorAll('button'));
  if (buttons.indexOf(event.target) == -1) {
    return;
  }
  activate(event.target);
}

// Figure out if the current element has a next sibling.
// If so, moving focus to it.
function focusNextItem() {
  const item = document.activeElement;
  if (item.nextElementSibling) {
    activate(item.nextElementSibling);
  }
}

// Figure out if the current element has a previous sibling.
// If so, moving focus to it.
function focusPreviousItem() {
  const item = document.activeElement;
  if (item.previousElementSibling) {
    activate(item.previousElementSibling);
  }
}

// This is where the roving tabindex magic happens!
function activate(item) {
  // Set all of the buttons to tabindex -1
  toolbar.querySelectorAll('button').forEach((btn) => btn.tabIndex = -1);
  
  // Make the current button "active"
  item.tabIndex = 0;
  item.focus();
}