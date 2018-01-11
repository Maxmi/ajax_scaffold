const changeName = (petID, name) => fetch(`/pets/${petID}/update_name`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({name})
})

const inputArray = document.querySelectorAll('.pet-name')

inputArray.forEach((input) => {
  input.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      const petID = event.target.getAttribute('data-petid')
      const name = event.target.value
      changeName(petID, name).then(res => res.json()).then((message) => {
        document.getElementById('message').innerHTML = message.message
      })
      .catch(console.error)
    }
  })
})
