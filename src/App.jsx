import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] =useState(0)
  const [rate,setRate] =useState(0)
  const [year,setYear] =useState(0)
  
  const [isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)
  const userInputValidation=(inputTag)=>{
    // used to validate user input
    const {name,value}= inputTag
    console.log(name,value);
    // check number pattern in value
    console.log(!!value.match(/^[0-9]*\.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=='principle'){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/)?setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)
    }
    else if(name=='rate'){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/)?setIsRateInvalid(false):setIsRateInvalid(true)
    }
    else if(name=='year'){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/)?setIsYearInvalid(false):setIsYearInvalid(true)
    }
  }

  const handleCalculate = ()=>{
    if(principle && rate && year){   
   setInterest(principle*rate*year/100)
    } 
    else{
      alert("Please fill the Form Completely")
    } 
  }

  const handleReset = ()=> {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }
  

  return (
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-black'>
      <div style={{width:'600px'}} className='bg-light text-center rounded p-5'>
        <h3 className='fw-bold'>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div className='d-flex flex-column justify-content-center align-items-center shadow bg-dark text-white p-3 rounded'>
          <h1>₹ {interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-3'>
          {/* principle */}
          <div className='mb-2'>
          <TextField value={principle||""} onChange={e=>userInputValidation(e.target)} name='principle' className='w-100' id="standard-priciple" label="Principle Amount" variant="standard" />
          </div>
          {
            isPrincipleInvalid && <div className='fw-bold text-start text-danger mb-2'>*Invalid Principle Amount</div>
          }
          <div className='mb-2'>
          <TextField value={rate||""} onChange={e=>userInputValidation(e.target)} name='rate' className='w-100' id="standard-rate" label="Rate Of Interest" variant="standard" />
          </div>
          {
            isRateInvalid && <div className='fw-bold text-start text-danger mb-2'>*Invalid Rate</div>
          }
          <div className='mb-3'>
          <TextField value={year||""} onChange={e=>userInputValidation(e.target)} name='year' className='w-100' id="standard-year" label="Time Period (Yr)" variant="standard" />
          </div>
          {
            isYearInvalid && <div className='fw-bold text-start text-danger mb-2'>*Invalid Year</div>
          }
          <Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} disabled={isPrincipleInvalid||isRateInvalid||isYearInvalid} style={{width:'50%',height:'50px'}} className='bg-dark' variant="contained">Calculate</Button>
          <Button onClick={handleReset} style={{width:'50%',height:'50px'}} className='border border-dark text-dark' variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
