//Create map
const map = L.map('mapid').setView([-27.2280416,-49.6748861], 16);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon ({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],

})

let marker;

//Create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  //remove icon
  marker && map.removeLayer(marker)


  //add icon Layer
  marker = L.marker([lat,lng], {icon})
  .addTo(map)
})

//add photos
function addPhotoField() {
  //Take the photos's container #images
  const container = document.querySelector('#images')
  //Take container to duplicate .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //Create a clone of the last image added
  const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

  //Verify if the field is clean or not, if so, don't add to the images container
  const input = newFieldContainer.children[0]

  if (input.value == "") {
    return
  }

  //Clean the field before add to the images container
  input.value = ""
  //Add the clone to #images container
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length < 2) {
    //Clean the first field value
    span.parentNode.children[0].value = ""
    return
  }
  //Delete the new fields cloned
  span.parentNode.remove()
  
}

// Select yes or not
function toggleSelect(event) {
  //Take the .active out the buttons
  document.querySelectorAll('.button-select button').forEach((button) => {
    button.classList.remove('active')
  })
   //Put the active class
  const button = event.currentTarget
  button.classList.add('active')

  //Update the hidden input with the selected value
  const input = document.querySelector('[name="open-on-weekends"]')

  //Verify if it is yes or not
  input.value = button.dataset.value

}

    