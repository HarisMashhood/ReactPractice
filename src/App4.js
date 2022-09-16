import React, {useState,useEffect} from 'react'



//UseEffect hook used to display the live changing width of the screen 




const App4 = () => {
    const [size,setSize] = useState(window.screen.width);
    const actualWidth = ()=>{
        setSize(window.innerWidth);
        console.log(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',actualWidth);



    },[size])
  return (
    <div>



     <h2>Screen size is</h2>



     <h2>{size}px</h2>



    </div>
  )
}

export default App4
