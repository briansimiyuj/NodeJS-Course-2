const trashCan = document.querySelector(".delete")

trashCan.addEventListener("click", (e) =>{

    e.preventDefault()

    const endPoint = `/blogs/${trashCan.dataset.doc}`

    fetch(endPoint, { method: "DELETE" })
       .then
       .catch(err => console.log(err))

})