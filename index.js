const dogs = [
    {id:1,img:'dafdsdad',text:'adddadasda',names:"Bobby"},
    {id:2,img:'dafdsdad',text:'adddadasda',names:"Bruno"},
    {id:3,img:'dafdsdad',text:'adddadasda',names:"Ekuke"},
    {id:4,img:'dafdsdad',text:'adddadasda',names:"batman"}
]
const doglist = document.querySelector('.info-box')
const doginfo = document.querySelector('.dog-box')
// doglist.appendChild()
function doge(dog){
const dogStuff = document.createElement("div")
dogStuff.className = "dogs"
const dogimage = document.createElement("div")
dogimage.id = "dog-image"
const dogContent = document.createElement("div")
dogContent.id = "dog-content"
const dogName = document.createElement("div")
dogName.id = "dog-name"
const dogDetails = document.createElement("div")
dogDetails.id = "dog-details"
dogName.innerText = dog.names
dogDetails.innerText = dog.text
doglist.appendChild(dogStuff)
dogStuff.appendChild(dogContent)
dogStuff.appendChild(dogimage)
dogContent.appendChild(dogName)
dogContent.appendChild(dogDetails)
dogbox(dog,dogStuff)
console.log(dogStuff)
}
function dogbox(dog,dogbtn){
   dogbtn.addEventListener('click' ,  function(e){
    const dogimage = document.createElement('div')
    dogimage.id= "dogsimage"
    const dogText = document.createElement('div')
    dogText.id = "dogsText"
    dogs.map((doge) => {
        if(doge.id === dog.id){
            dogimage.innerText = doge.img
            dogText.innerText = doge.names
            doginfo.appendChild(dogimage)
            doginfo.appendChild(dogText)
        }
        else if(doge.id != dog.id){
            // dogimage.remove()
        }
    })
    console.log(doginfo)}
  )
}
dogs.map((dog) => {
doge(dog)
// dogbox(dog)
})
