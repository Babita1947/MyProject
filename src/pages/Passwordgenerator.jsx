import React, { useCallback, useEffect, useRef, useState } from 'react'

const Passwordgenerator = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] =  useState(false);
    const [password, setPassword] = useState("");
    const [bgChange, setBgChange] = useState("bg-blue-700");
    // useRef Hook 
    const passwordRef = useRef(null);

    //useCallback(() => {},[]) is used to optimize the functions on according to its dependencies
    const passwordGenerator = useCallback(()=> {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"
      
      for(let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);

      }
      // to read password we have to use setPassword function
      setPassword(pass);

    }, [length, numberAllowed, charAllowed, setPassword])
    
    const buttonHandler = () => {
      copyPasswordToClipboard();
    }

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,length);

      window.navigator.clipboard.writeText(password);
      setBgChange("bg-blue-400")

    },[password])


    // useEffect is used whenever any chages is done in its dependencies then call the function
    useEffect(() => {
      passwordGenerator()
    },[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>  Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly

          ref={passwordRef}
          />
          <button 
          onClick={buttonHandler}
          className={`outline-none ${bgChange} text-white px-3 py-05 shrink-0`}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100} 
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            className='text-blue cursor-pointer'/>
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                 setNumberAllowed((prev) => !prev);
              }}>
            </input>
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                 setCharAllowed((prev) => !prev);
              }}>
            </input>
            <label htmlFor='characterInput'>Characters</label>
          </div>
      </div>
    </div>
  )
}

export default Passwordgenerator