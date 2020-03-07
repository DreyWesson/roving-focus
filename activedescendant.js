const listbox = document.querySelector('[role="listbox"]');
const characters = [...listbox.children];


listbox.addEventListener('click', event => {
  const option = event.target.closest('li')
  if (!option) return

  // Sets aria-activedescendant value
  listbox.setAttribute('aria-activedescendant', option.id)

  // Change visual appearance
  characters.forEach(element => {
    element.classList.remove('is-selected');
    element.style.color ="black";
    element.style.boxShadow = "0 0 0px 0px" 
  })


  option.classList.add('is-selected')
  option.style.color ="salmon";
  option.style.boxShadow = "0 0 8px 3px rgb(103, 103, 139) " 
})