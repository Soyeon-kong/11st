//이미지 파일 import
var requireContext = require.context("../img", true, /^\.\/.*\.jpg$/);
requireContext.keys().map(requireContext);

let selectNum = 0

function handlePhoto(){
    const photoListDiv = document.querySelector(".photoList")
    document.querySelector(".newBtn").style.visibility="hidden"
    document.querySelector(".homeBtn").style.visibility="visible"
    for (let index = 1; index <= 10; index++) {
        //상단 작은 이미지
        const img = document.createElement('img')
        img.className="smallImg"
        img.id = index
        img.src= "img"+index+".jpg"
        photoListDiv.append(img)

        //이미지 클릭 시 큰 이미지 보여줌
        img.addEventListener("click",function(e){
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