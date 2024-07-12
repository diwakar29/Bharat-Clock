import { useEffect, useState } from "react";

let CurrentTime =() =>{
   const [time, setTime] =    useState(new Date())
 useEffect (()=>{
       
 
        const intervalls = setInterval(() => {
           setTime(new Date())     
        }, );
        
 }, []
)
return (
     <p className="lead"> 
        This is the Current time: {time.toLocaleDateString()} 
        <br></br>
{time.toLocaleTimeString()}
</p>

);
};

 export default CurrentTime;