import Learn from "./Learn"

const App = () => {

  // function btnClicked(){
  //   console.log('button is clicked');
    
  // }

  // function mouseEnter(){
  //   console.log('Mouse Entered');
    
  // }

  // function inputChanging(val){
  //   console.log(val);
    
  // }
  

  return (
    <div>
      {/* <h1>Hello Sarthak</h1>

      <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>change user</button>

      <button onClick={function(){
        console.log('Hello Neha');
        
      }}>learn new</button> */}

   

      {/* <button>explore now</button> */}

      {/* <input onClick={()=>{
        console.log("chill chill guys");
        
      }} type="text" placeholder="Enter your name"/> */}

      {/* <input onChange={inputChanging} type="text" placeholder="Enter your name"/> */}

      {/* <input 
      onChange={function(elem){
        inputChanging(elem.target.value)
        
      }}
       type="text" 
       placeholder="Enter your name"
       /> */}
       <Learn />

    </div>
  )
}

export default App


// var a = document.querySelector('h1')

// function hero(){
//   console.log('hello guys');
  
// }

// a.addEventListener('click',function(){
//   console.log('Hello');
  
// })

// a.addEventListener('click',hero)