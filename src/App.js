import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setvalue] = useState({
    text:""
  });
  const [response,setresponse] = useState([])

  const handleChange = (e) => {
    setvalue({text:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5555',{
        method:"post",
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json',
        }
    }).then(res => {
      res.json().then(result =>{
        setresponse([...response,result])
      });
    })
  }
  return (
    <React.Fragment>
      <h1>Ubico Test</h1>
      <input type ="text" onChange={handleChange} value={value.text}/>
      <button onClick={handleSubmit}>Submit</button>
      <table>
        <th>
          Text
        </th>
        <th>
          Value
        </th>
        {response.map(data => (
          <React.Fragment>
          <tr></tr>
          <td>{data.msg}</td>
          <td>{data.count}</td>
          </React.Fragment>
        ))}
      </table>
    </React.Fragment>
  );
}

export default App;
