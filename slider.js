const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')
const panels = document.querySelectorAll('.panel')
const filledCircles = document.querySelectorAll('.filled-circle')
const filledProgress = document.getElementById('filled-progress')



let currentActive = 3

panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    currentActive = index + 1
    updateProgress()
    updateFilledProgress()
    panel.classList.add('active')
  })
})

function slideImages(toImage) {
  panels.forEach((panel, index) => {
    if ((toImage - 1) === index) {
      removeActiveClasses()
      panel.classList.add('active')
    }
  })
}

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}


next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  slideImages(currentActive)
  updateProgress()
  updateFilledProgress()
})

prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  slideImages(currentActive)
  updateProgress()
  updateFilledProgress()
})

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false
  } else if (currentActive === circles.length) {
    prev.disabled = false
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  console.log(((currentActive - 1) / (circles.length - 1)) * 100 + '%')
  progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + '%'
}

function updateFilledProgress() {
  filledCircles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false
  } else if (currentActive === circles.length) {
    prev.disabled = false
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  filledProgress.style.width = ((currentActive - 1) / (filledCircles.length - 1)) * 100 + '%'

}