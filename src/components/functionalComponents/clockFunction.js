
import React, { useEffect, useState } from "react";


function Clock(props) {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Ramu");
  const [surname, setSurname] = useState("Akarapu");
  const [width, setWidth] = useState(window.innerWidth);
  const nameChangeHandle=(e)=>{
    setName(e.target.value);
  };
  const surnameChangeHandle=(e)=>{
    setSurname(e.target.value);
  };
  useEffect(() => {
    document.title = name + ' ' + surname;
     
			});
  
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })
  return (
    <div>
      <h1>Width:{width}</h1>
			<h1>Hello, friends</h1>
			<h2>It IS {props.date} </h2>
			<div>
				<p>{counter}</p>
				<button onClick={() => setCounter(counter + 1)}>plus</button>
				<button onClick={() => setCounter(counter - 1)}>minus</button>
			</div>
			<div>
				<p>
					Name:<input onChange={nameChangeHandle} value={name}></input>
				</p>
				<p>
					Surname:<input onChange={surnameChangeHandle}  value={surname}></input>
        </p>
       
			</div>
		</div>
	);
}
export default Clock;