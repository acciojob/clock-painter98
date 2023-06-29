 let timer = document.getElementById('timer');

let time;
setInterval(()=>{
    time = new Date();
let date = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
let hour = time.getHours()>=12?time.getHours()-12:time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

timer.innerText = `${date}, ${hour}:${minute>10?minute:'0'+minute}:${second>10?second:'0'+second} ${time.getHours()>12?'PM':'AM'}`
},[1000])
