let selectNum = 0

function handlePhoto(){
    const photoListDiv = document.querySelector(".photoList")
    for (let index = 1; index <= 10; index++) {
        const img = document.createElement('img')
        img.className="smallImg"
        img.id = index
        img.src= "img"+index+".jpg"
        photoListDiv.append(img)
        img.addEventListener("click",function(e){
            //img.classList.add("selected")
            const showPhotoDiv = document.querySelector(".showPhoto")

            if(selectNum != 0){
                document.getElementById(selectNum).classList.remove("selected")
            }
            selectNum = e.target.id
            document.getElementById(selectNum).classList.add("selected")
            showPhotoDiv.innerHTML = "<img src='"+e.target.src+"'>"
        })
    }
    
  
}

module.exports ={
    handlePhoto,
}