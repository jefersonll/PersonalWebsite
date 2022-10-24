window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showButton()
  menuColor()
}

function showButton() {
  if (scrollY > 550) {
    backbutton.classList.add('show')
  } else {
    backbutton.classList.remove('show')
  }
  console.log(scrollY)
}

function menuColor() {
  if (scrollY > 550 && scrollY < 1500) {
    document.querySelector('.menu h1').style.color = '#fff'
    document.querySelector('ul').style.color = '#fff'
    document.querySelector('aside').style.backgroundColor = '#14304b'
  } else if (scrollY > 2050 && scrollY < 3150) {
    document.querySelector('.menu h1').style.color = '#fff'
    document.querySelector('ul').style.color = '#fff'
    document.querySelector('aside').style.backgroundColor = '#14304b'
  } else {
    document.querySelector('.menu h1').style.color = '#14304b'
    document.querySelector('ul').style.color = '#14304b'
    document.querySelector('aside').style.backgroundColor = '#fff'
  }
}
