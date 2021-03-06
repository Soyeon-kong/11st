let alarms = localStorage.getItem("alarmList")
let alarmList = JSON.parse(alarms) || []

//localstorage에 추가
function saveAlarm(time){
    const alarmObj = {
        time,
        id:alarmList.length+1
    }
    alarmList.push(alarmObj)
    localStorage.setItem("alarmList",JSON.stringify(alarmList))
    appendAlarm(alarmObj)
}

//alarm 삭제
function deleteAlarm(id){
    document.getElementById("alarm"+id).remove()
    const index = alarmList.findIndex(item => item.id === id)
    alarmList.splice(index, 1)
    localStorage.setItem("alarmList",JSON.stringify(alarmList))
}

//div에 append
function appendAlarm(element){
    const alarmListDiv = document.querySelector(".alarmList")
    const div = document.createElement('div')
    div.className = "alarmOne"
    div.id = "alarm"+element.id
    // 시간 형식 변경
    const timesplit = element.time.split(":")
    let text = ""
    if(parseInt(timesplit[0])<=12){
        text = "오전 "+timesplit[0]+"시 "+timesplit[1]+"분"
    }else{
        text = "오후 "+(timesplit[0]-12)+"시 "+timesplit[1]+"분"
    }
    const innerDiv = document.createElement("div")
    innerDiv.innerHTML = text
    const btn = document.createElement("button")
    btn.className = "btn deleteBtn"
    btn.innerHTML = "삭제"
    btn.addEventListener("click",function(e){
        deleteAlarm(e.target.parentNode.id.replace("alarm",""))
    })
    div.append(innerDiv,btn)
    alarmListDiv.append(div)
    
}

//alarm list 가져옴
function loadAlarm(){
    if(alarmList != null){
        alarmList.forEach(element => {
            appendAlarm(element) 
        });
    }
}

function handleAlarm(){
    const amSelect = document.querySelector("#am")
    const hourSelect = document.querySelector("#hour")
    const minSelect = document.querySelector("#minute")
    const saveBtn  = document.querySelector(".saveBtn")
    const newBtn  = document.querySelector(".newBtn")
    newBtn.style.visibility="visible"
    document.querySelector(".homeBtn").style.visibility="visible"
    
    //select option 생성
    for(var i = 1; i<=12; i++){
        var opt = document.createElement("option")
        opt.value = i
        opt.text = i
        hourSelect.add(opt,null)    
    }
    for(var i = 0; i<=50; i+=10){
        var opt = document.createElement("option")
        opt.value = i
        opt.text = i
        minSelect.add(opt,null)    
    }
    //알람 저장
    saveBtn.addEventListener("click",(e)=>{
        const hour  =12* parseInt(amSelect.options[amSelect.selectedIndex].value) + parseInt(hourSelect.options[hourSelect.selectedIndex].value)
        const minute = minSelect.options[minSelect.selectedIndex].value
        const time = hour + ":" + minute
        saveAlarm(time)
        document.querySelector(".addAlarm").style.display="none"
    })
    newBtn.addEventListener("click",(e)=>{
        document.querySelector(".addAlarm").style.display="flex"
    })
    loadAlarm()
}

module.exports ={
    handleAlarm,
    deleteAlarm
}