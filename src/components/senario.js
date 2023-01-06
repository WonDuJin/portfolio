import React from "react";
import "./senario.css"

const senario1 = () => {

  // let tired = document.getElementById("tired")
  // let hungry = document.getElementById("hungry")
  
  // let hungrywidth = 50
  // let tiredwidth = 50
  const button = () =>{
    // let tired = document.getElementById("tired")
    // let hungry = document.getElementById("hungry")
    let text = document.getElementById("senario")
  
    // if(tiredwidth<100 && tiredwidth>0){
    //   tiredwidth +=5;
    //   hungrywidth -=5
    //   tired.style.width = tiredwidth + "%"
    //   hungry.style.width = hungrywidth + "%"
    // }     
    // console.log(text)
    text.innerHTML = `“띠리리링 띠리리링”<br></br>

    오전 6시 핸드폰의 알람이 시끄럽게 울린다.<br></br>
    
    알람 소리에 옆에서 자던 고양이들도 같이 깬다.<br></br>
    
    “어으.. 피곤해라…”<br></br>
    
    멍한 상태로 고양이들의 식사를 주기 위해 부엌으로 발걸음을 옮긴다.<br></br>
    
    고양이들에게 밥을 주고, 공미남도 아침을 어떻게 할까 고민한다.`
    
      
  }
  
  
  
  return (
    <>    
      <header id="header" style={{textAlign:"center"}}>
        <h1>공미남의 하루</h1>
      </header>
      <main id="main">
        <div id="dis">
          <div>
            <h2>피로도 : </h2> &nbsp;&nbsp;
            <div id="prog">
              <div id="tired"></div>
            </div>
          </div>
          <div>
            <h2>포만감 : </h2> &nbsp;&nbsp;
            <div id="prog">
              <div id="hungry"></div>
            </div>            
          </div>   
          <button onClick={button} style={{width:"100px",height:"30px"}}>눌러볼래요?</button>       
        </div>  
        <div id ="senario">
        
        </div>      
      </main>    
    </>
  )
}



export default senario1;