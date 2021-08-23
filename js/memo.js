let memos = localStorage.getItem("memoList")
let memoList = JSON.parse(memos) || []
let openDiv = 0

//localstorage에 추가
function saveMemo(text){
    const memoObj = {
        text,
        id:memoList.length+1
    }
    memoList.push(memoObj)
    localStorage.setItem("memoList",JSON.stringify(memoList))
    appendMemo(memoObj)
}

//div에 append
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

//memo list 가져옴
function loadMemo(){
    if(memoList != null){
        memoList.forEach(element => {
            appendMemo(element) 
        });
    }
}

function handleMemo(){
    
    const newBtn  = document.querySelector(".newBtn")
    newBtn.style.visibility="visible"
    document.querySelector(".homeBtn").style.visibility="visible"

    //new 버튼 클릭 시 input 가능
    newBtn.addEventListener("click",(e)=>{
        document.querySelector(".addMemo").style.display="block"
    })
    if(document.querySelector(".addMemo")!=null){
        memoText.addEventListener("keyup",(e)=>{
            //enter 누르면 local storage에 메모 저장
            if(e.keyCode===13){
                e.preventDefault();
                saveMemo(memoText.value)
                document.querySelector(".addMemo").style.display="none"
                memoText.value =""
            }
        })
    }
    loadMemo()
}

module.exports ={
    handleMemo,
}