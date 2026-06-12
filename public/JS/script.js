const trashCan = document.querySelector(".delete")

trashCan.addEventListener("click", (e) =>{

    e.preventDefault()

    const endPoint = `/blogs/${trashCan.dataset.doc}`

    fetch(endPoint, { method: "DELETE" })
       .then(response => response.json())
       .then(data =>{

          if(data) window.location.href = data.redirect

       })
       .catch(err => console.log(err))

})