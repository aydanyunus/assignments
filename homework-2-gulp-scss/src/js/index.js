const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click', function () {
  
    const btn = document.querySelector('.menu-btn')
    btn.classList.toggle('menu-btn--active')
    const dropdown = document.querySelector('.dropdown')
    dropdown.classList.toggle('dropdown--active')
})