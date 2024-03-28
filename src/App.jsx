import TextField from '@mui/material/TextField';
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {

const [amount,setAmount] =useState(0)
const [year,setYear] =useState(0)
const [interest,setInterest] =useState(0)
const [rate,setRate] = useState(0)

console.log(amount,year,rate);


const Calculate =(e)=>{

  const output =amount*year*rate/100;
  setInterest(output)

  if(amount,year,rate =='')
{
  alert("Enter the fields")
}

}

const Reset =()=>{

  setInterest(0)
  setAmount('')
  setYear('')
  setRate('')
}


  return (
    <div className='container'>
     <div className='box text-center mt-4 py-5  '>
     <form className='py-4'> 
      <div className='head'>
        <h1>Simple interest</h1>
      <p>Calculate interest with us <span style={{color:"orange", fontSize:"20px"}}>&#9733;</span></p>
        </div>
    

      <div className='calc p-5 '>
        <h2 style={{"fontWeight":600}}> &#8377;{interest}</h2>
        <p>Yout Total Interest</p>
      </div>

      <div className='we'>
  
        <TextField id="standard-basic"  value={amount || ''} label="Amount" onChange={(e)=>setAmount(e.target.value)} variant="standard"  />
        <TextField id="standard-basic" value={year || ''} label="Year"onChange={(e)=>setYear(e.target.value)}  variant="standard" />
        <TextField id="standard-basic"  value={rate || ''}label="Rate" onChange={(e)=>setRate(e.target.value)} variant="standard" />
        
        
      </div>

       <div className='mt-4'>
       <Button  className='mx-5' onClick={e=>Calculate(e)}  variant="contained" color='warning'>Calculate</Button>
       <Button variant="outlined"  onClick={e=>Reset(e)} >Reset</Button>
       </div>

       </form>


     </div>
     </div>
  );
}

export default App;
