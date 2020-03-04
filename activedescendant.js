const listbox = document.querySelector('[role="listbox"]')
const characters = [...listbox.children]
console.log(...listbox.children)

listbox.addEventListener('click', event => {
  const option = event.target.closest('li')
  if (!option) return

  // Sets aria-activedescendant value
  listbox.setAttribute('aria-activedescendant', option.id)

  // Change visual appearance
  characters.forEach(element => element.classList.remove('is-selected'))
  option.classList.add('is-selected')
})