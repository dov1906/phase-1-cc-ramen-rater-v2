
// index.js

// Callbacks
const handleClick = (element) => {
  // Add code
  const displayplace = document.querySelector(".detail-image")
  displayplace.src = element.image
  const displayname = document.querySelector('.name')
  displayname.textContent = element.name
  const displayrest = document.querySelector('.restaurant')
  displayrest.textContent = element.restaurant
  const displayrating = document.getElementById('rating-display')
  displayrating.textContent = element.rating
  const displaycomment = document.getElementById("comment-display")
  displaycomment.textContent = element.comment


};

const addSubmitListener = () => {
  // Add code
  const submitform = document.getElementById("new-ramen")
  submitform.addEventListener('submit', handleSubmit)

}
function handleSubmit(e){
  e.preventDefault()
  const newname = document.getElementById("new-name").value
  const newrestaurant = document.getElementById("new-restaurant").value
  const newimage = document.getElementById("new-image").value
  const newrating = document.getElementById("new-rating").value
  const newcomment = document.getElementById("new-comment").value
  
  const newfood = {
    name: newname,
    restaurant: newrestaurant,
    image: newimage,
    rating: newrating,
    comment: newcomment

  }

  const ramenDisplay = document.getElementById("ramen-menu")
  const ramenImage = document.createElement('img')
  ramenImage.src = newfood.image
  ramenDisplay.appendChild(ramenImage)
  ramenImage.addEventListener('click', () => handleClick(newfood))
  e.target.reset()
}

const displayRamens = (ramens = []) => {
  // Add code
  const ramenDisplay = document.getElementById("ramen-menu")
  ramens.forEach(ramen => {
    const ramenImage = document.createElement('img')
    ramenImage.src = ramen.image
    ramenDisplay.appendChild(ramenImage)
    ramenImage.addEventListener('click', () => handleClick(ramen))
  });



};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  fetch('http://localhost:3000/ramens')
  .then(ser => ser.json())
  .then(ramen => {
  
  displayRamens(ramen)
  addSubmitListener()

  })

  
}

main()


// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
