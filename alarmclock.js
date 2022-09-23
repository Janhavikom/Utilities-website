

setInterval(()=>{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var period = "AM";

    if (hours >= 12) {
        period = "PM";
      }
    
      if (hours > 12) {
        hours = hours - 12;
      }
    
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      second = second < 10 ? "0" + second : second;
    
     var time = hours + " : " + minutes + " : " + second + " " + period;
      document.getElementById("clock-time").innerHTML = time;
  
},1000);


  var audio = new Audio("");
  audio.loop = true;
  let alarmTime = null;
  let alarmTimeout = null;
  
  function setAlarmTime(value) {
    alarmTime = value;
  }
  
  function setAlarm() {
    if (alarmTime) {
      const current = new Date();
      const timeToAlarm = new Date(alarmTime);
  
      if (timeToAlarm > current) {
        const timeout = timeToAlarm.getTime() - current.getTime();
        alarmTimeout = setTimeout(
          () => alert("Alarm Notification, Plz stop alarm 😊"),timeout
        );
      }
    }
  }
  

  const form = document.querySelector("#new-alarm-form");
  const list = document.querySelector("#list");
  const input = document.querySelector("#item-input");

  console.log(input.value)


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value!= ""){
    const li = document.createElement("li");
    li.innerHTML = input.value + '<button id="btn" onsubmit="deleteli()" >Remove</button>';
    li.classList.add("list-group-item");
    //2. Add that item to that list
    list.appendChild(li);
    input.value = "";
    
    //3.clear iNput
    
}
  });
 
  function deleteli(){
    btn = document.getElementById("btn")
    //4. setup event listener to delete item when clicked
    btn.addEventListener("submit", () => {
      li.remove();
      if (alarmTimeout) {
        clearTimeout(alarmTimeout);
      }
    
    });
  }
