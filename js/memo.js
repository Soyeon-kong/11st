let memos = localStorage.getItem("memoList")
let memoList = JSON.parse(memos) || []
let openDiv = 0

function saveMemo(text){
    const memoObj = {
        text,
        id:memoList.length+1
    }
    memoList.push(memoObj)
    localStorage.setItem("memoList",JSON.stringify(memoList))
    appendMemo(memoObj)
}

function appendMemo(element){
    const memoListDiv = document.querySelector(".memoList")
    const div = document.createElement('div')
    div.className = "memoOne"
    div.id = element.id
    div.innerHTML = element.text
    div.addEventListener("click",function(e){
        if(openDiv != 0){
            document.getElementById(openDiv).classList.remove("open")
        }
        openDiv = element.id
        document.getElementById(openDiv).classList.add("open")
    })
    memoListDiv.append(div)
}

function loadMemo(){
    if(memoList != null){
        memoList.forEach(element => {
            appendMemo(element) 
        });
    }
}

function handleMemo(){
    const memoText = document.querySelector("#memoText")
    const newBtn  = document.querySelector(".newBtn")

    memoText.addEventListener("keyup",(e)=>{
        if(e.keyCode===13){
            e.preventDefault();
            saveMemo(memoText.value)
            document.querySelector(".addMemo").style.display="none"
            memoText.value =""
        }

        
    })
    newBtn.addEventListener("click",(e)=>{
        document.querySelector(".addMemo").style.display="block"
    })
    loadMemo()
}

module.exports ={
    handleMemo,
}