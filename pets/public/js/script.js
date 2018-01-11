const changeName = (petID, newName) => fetch(`/pets/${petID}/update_name`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ newName }),
})

const inputArray = document.querySelectorAll('.pet-name')

inputArray.forEach((input) => {
  input.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      const petID = event.target.getAttribute('data-petid')
      const newName = event.target.value

      changeName(petID, newName)
        .then(res => res.json())
        .then((message) => {
          document.getElementById('message').innerHTML = message.message
        })
        .catch(console.error)
    }
  })
})
