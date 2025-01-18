import React, { useState } from 'react'

export default function Todolist() {
    const [activity,setActivity] = useState('');
    const [listdata, setlistdata] = useState([]);
    
    function addactivity() {
        setlistdata((listdata) =>{
            const updateddata = [...listdata, activity]
            console.log(updateddata)
            setActivity('')
            return updateddata
        })  
    }
    function removeActivity(i){
        const updatedlistdata = listdata.filter((elem, id) => {
            return i!=id;
        })
        setlistdata(updatedlistdata);
    }
    function removeall(){
        setlistdata([]);
    }
  return (
    <>
    <div className='container'>
     <div className='header'>What I will do today?...?..!!</div>
        <input type='text'
        placeholder='I think to.....' value={activity} onChange={(e) => setActivity(e.target.value)}/>
     <button onClick={addactivity}>Add</button>
     <p className='List-heading'>Here is your day routin</p>
     {listdata!=[] && listdata.map((data,i) => {
        return(
            <>
            <p key={i}>
<div className='listdata'>
    {data}
</div>
<div className='btn-position'><button onClick={() => removeActivity(i)}>remove(-)</button></div>
            </p>
             </>
        )
     })}
     {listdata.length >= 1 && <button onClick={removeall}>removeall</button>}
    
    </div>
    
    
    </>
  )
}
