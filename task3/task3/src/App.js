import { useState } from "react";

import "./App.css";
export default function App(){
    // const darkTheme = createTheme({
    //     palette: {
    //       mode: 'dark',
    //     },
    //   });
      
      
return(
    <div className="App">
         {/* <ThemeProvider theme={darkTheme}>
      <main>This app is using the dark mode</main>
    </ThemeProvider> */}
  jfgufk
        <AddColor/>
    </div>
);
}
function AddColor(){
    const [color,setColor]=useState("blue");
    const styles={
        background:color,
    };
    const [colorList,setColorList]=useState([
        "crimson",
        "red",
        "orange",
        "brown",
    ]);
    // Todo-capture -typing event
    // event.target.value-typed word
    // setcolor-informs react color has changed
    return(
        <div>
            <input 
            value={color}
            style={styles} 
            onChange={(event)=>setColor(event.target.value)} 
            placeholder="Enter a color"/>
            {/*  copy the colorlist and add new to it */}
            <button  className="colour" onClick={()=>setColorList([...colorList,color])}>
            Add Color
            </button>
        {colorList.map((clr)=>(
            <ColorBox color={clr}/>
        ))}
        </div>
    );
}
function ColorBox({color}){
    const styles={
        backgroundColor:color,
        height:"25px",
        width:"200px",
       marginTop:"10px", 
    };
    return <div style={styles}></div>;
    
}

  
  
  

      