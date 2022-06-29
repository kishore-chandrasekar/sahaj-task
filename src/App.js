import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from "react-redux";
import {
  create,
  deposit,
  selectUser,
} from "./Features/Users";

function App() {
  const [input, setInput] = useState('')
  const [myUser,setMyUser]=useState([])
  const [no, setNo] = useState(1001)
  const[balance,setbalance]=useState(0)
  const inputValue = input.toLowerCase().split(" ")
  console.log(inputValue[0])
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user)
  const setUser =()=>{
    setMyUser(user)
  }
  
  let usersArray=[]
 
  const runCommand = (e) => {
    e.preventDefault();
    if (inputValue[0] === 'create') {
      setNo(no + 1)
      alert(`User created successfully with account number ${no} `)
      dispatch(
        create({
          name:inputValue[1],
          accountId:no,
          balance:balance
          
        })
      )
      
    }
    if (inputValue[0]==='deposit'){

      alert('Please press run button again to confirm')
      dispatch(
       create({
        name:user.name,
        accountId:user.accountId,
        balance:inputValue[2]
       })
      )
      // usersArray.push(user)
      setUser()
      
    }
    if (inputValue[0]==='balance'){
      alert(`Available balance is ${usersArray[0].balance}`)
    }
    if (inputValue[0]==='withdraw'){
      alert('Currently this option is disabled!! Please wait 24 hours to start using your account')
    }
    if (inputValue[0]==='transfer'){
      alert('Currently this option is disabled!! Please wait 24 hours to start using your account')
    }
    if(inputValue[0]!='transfer'&&inputValue[0]!='withdraw'&& inputValue[0]!='create'&&inputValue[0]!='deposit'&&inputValue[0]!='balance')
    alert('Please enter valid keyword')
  }
  usersArray.push(myUser)
  console.log(usersArray)
  // console.log(usersArray[0].balance)
  
  return (
    <div className="App">
      <div>
        <h1>Sahaj Payments bank</h1>
       
        <ol type='1' className='list'>
          <li>Create</li>
          <li>Deposit</li>
          <li>Balance</li>
          <li>Transfer</li>
          <li>Withdraw</li>
        </ol>
       
        <h4 style={{marginTop:"200px"}}>Please enter any one the above mentioned commands</h4>
        <input placeholder='Enter Your Command' className='box' onChange={e => setInput(e.target.value)} /><br />
        <button className='btn' onClick={runCommand} >Run</button>
        <h2>{usersArray[0].name}</h2>
        <h2>{usersArray[0].balance}</h2>
      </div>
    </div>
  );
}

export default App;
