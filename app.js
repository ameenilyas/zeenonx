// to hide loader

var loader = document.querySelector("#loader");
function remove() {
  var hide_loader = setTimeout(() => {
    loader.classList.add("remove");
  }, 5000);
}

remove();


// to set navbar

var navbar = document.querySelector('nav')
var burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
  navbar.classList.toggle('show')
})

const li = document.querySelectorAll('nav ul li')
li.forEach((list) => (
  list.addEventListener('click', ()=> {
      navbar.classList.remove('show')
  })
))

// to add navbar animation
const body = document.querySelector('body')

const header = document.querySelector('header')
const message_me = document.querySelector('.meet_us')
window.addEventListener('scroll', ()=> {
      header.classList.toggle('sticky', window.scrollY > 100)
      // to add message me option 
      message_me.classList.toggle('message', window.scrollY > 100)
})
