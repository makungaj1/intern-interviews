const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  lockState.locked = false
  lockState.wheels[index] = lockState.wheels[index] + incrementBy

  for (let i = 0; i < SECRET_COMBO.length; i++) {
    if (SECRET_COMBO[i] !== lockState.wheels[i]) return
  }
  redirect('makunga')
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
