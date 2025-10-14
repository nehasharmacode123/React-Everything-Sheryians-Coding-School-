import React from 'react'

const Learn = () => {

  const pageScrolling = (elem) => {
    // console.log('Page Scrolling.... at speed', elem);
    if(elem>0){
      console.log('seedha scrolling');
    }else{
      console.log('ulta scrolling');
      
    }
    
  }

  return (
    <div onWheel={(elem)=>{
      
      pageScrolling(elem.deltaY)
    }}>
      {/* <div 
      onMouseMove={(elem)=>{
        console.log(elem.clientY);
        
      }}
      className="box"
      >

      </div> */}

      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default Learn;