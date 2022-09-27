import { useEffect, useState } from 'react';
// import './App.css';

function App() {
  const[data,setData]=useState([])
  const url=`https://fakestoreapi.com/products`;
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(Response=>{
      console.log(Response);
      setData(Response)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className="App">
    {
      data.map(item=>{
        return(
          <div>
            <p>Title:{item.title}</p>
            <p>Price:{item.price}</p>
            <p>Description:{item.description}</p>
          </div>
        )
      })
    }
  
    </div>
  );
}

export default App;
