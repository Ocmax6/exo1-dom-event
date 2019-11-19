let ballon = document.querySelector('#ball');
let size = 20;
window.addEventListener("keydown", function(e){
    if(e.key=='+'){
       ballon.style.fontSize = size + "px";
       size += 5;
       if( size>=255){
           ballon.innerHTML="💥"
       }
       else{
        ballon.innerHTML="🎈"
       }
      
    }
    else if(e.key=='-'){
        ballon.style.fontSize = size + "px";
       size -= 5;
       if(size<=255){
        ballon.innerHTML="🎈" 
       }
    }
});

