import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [youPay, setYouPay] = useState(0)
  const [youSave, setYouSave] = useState(0)

  console.log(amount, discount);

  const discountCalculate = (e) => {
    const result = amount * discount / 100
    console.log(result);

    const total = amount - result;
    console.log(total);
    setYouPay(total)

    const save = amount - total;
    console.log(save);
    setYouSave(save)


  }

  const resetButton = (e) => {
    setAmount(0);
    setDiscount(0);
    setYouPay(0);
    setYouSave(0)
  }

  return (
    <div className="App">
      <div className="container">

        <div className="headings">
          <h1>Discount Calculator</h1>
        </div>

        <div className="form">
          <form>
            <div className="input">
              <h3>Enter Discount Details</h3>
              <TextField  onChange={(e)=>setAmount(e.target.value)} value={amount || ''} style={{ marginBottom: '10px' }} id="outlined-basic" label="Amount" variant="outlined" />
              <TextField  onChange={(e)=>setDiscount(e.target.value)} value={discount || ''} style={{ marginBottom: '10px' }} id="outlined-basic" label="Discount %" variant="outlined" />
              <Button  onClick={discountCalculate} variant="contained">Calculate</Button>
            </div>
            <div className="input">
              <h3>After Discount:</h3>
              <p style={{color:'green'}}>You Save: &#8377;{youSave}</p>
              <p style={{color:'red'}}>You Pay: &#8377;{youPay}</p>
              <Button onClick={resetButton} variant="contained" color='error'>Reset</Button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
