import { useEffect, useState } from 'react';
import './App.css';

// function App() {
//   const programmers = ['Zaheed Sabur', 'Jhankar Mahbub', 'Sumit Saha', 'Anisul Islam'];
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Person name = {programmers[1]} job = "Web Guru"></Person>
//         <Person name = {programmers[0]} job = "Boss"></Person>
//         <Person name = {programmers[2]} job = "Programmer"></Person>
     
//       </header>
//     </div>
//   );
// }
// function Person(props) {
//   const style = {
//     border : '2px solid yellow',
//     margin : '10px',
//     padding : '10px'
//   }
//   console.log(props);
//   return (
//     <div style={style}>
//       <h1>Name : {props.name}</h1>
//       <h3>I am a {props.job}</h3>
//     </div>
//   );
// }

// export default App;

// new example //

// function App() {
//   const nayoks = ['Allu Arjun', 'Ram Charan', 'Shuvo', 'Bappi', 'Sakib Khan'];
//   const products = [
//     {name : 'Photoshop', price : '$90.99'},
//     {name : 'Illustrator', price : '$60.99'},
//     {name : 'PDF Reader', price : '$70.99'},
//     {name : 'Design Tool', price : '$30.99'},
//     {name : 'Domain Cost', price : '$50.99'},
//     {name : 'Premium E', price : '$340.99'},
//   ];
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ul>
//           {
//             nayoks.map(nayok => <li>{nayok}</li>)
//           }
//         </ul>
//         {
//           products.map(pd => <Products product = {pd}></Products>)
//         }
//       </header>
//     </div>
//   );
// }

// function Products(props) {
//   const productStyle = {
//     border : '1px solid gray',
//     borderRadius : '5px',
//     backgroundColor  : 'lightgray',
//     color : 'black',
//     width : '300px',
//     height : '300px',
//     position : 'relative',
//     marginTop : '10px'
//   };
//   const styleBtn = {
//      position : "absolute", 
//      bottom : "10px", 
//      right : "10px", 
//      borderRadius : "5px",
//      backgroundColor : "blue",
//      color : "white", 
//      padding : "5px",
//      border : "none"
//   }
//   const {name, price} = props.product;
//   console.log(name,  price);
//     return(
//     <div style = {productStyle}>
//       <h3>{name}</h3>
//       <h5>{price}</h5>
//       <button style = { styleBtn}>Buy now</button>
//     </div>
//   );
// } 

// export default App;

// third example //


function App() {
  const languages = [
    {name : 'Python', trending : '1', headline : 'specially for matchine learning... '},
    {name : 'JavaScript', trending : '2', headline : 'the power of web...'},
    {name : 'Java', trending : '3', headline : 'best for banking sector...'},
    {name : 'PHP', trending : '4', headline : 'the power of server...'},
    {name : 'Ruby', trending : '5', headline : 'demandable language once a time...'},
    {name : 'C#', trending : '6', headline : 'highly paid for web...'},
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <Users></Users>
        {
          languages.map(demand => <Trending trend = {demand}></Trending>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [users,  setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.email}</li>)
       }
     </ul>
    </div>
  )
}

function Count() {
  const [count, setCount] = useState(40);
  // const clickHandler = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count : {count}</h1>
      {/* <button onClick = {clickHandler}>Increase</button> */}
      <button onClick = {() => setCount(count + 1) } style = {{marginRight : '5px'}}>Increase</button>
      <button onMouseMove = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Trending(props) {
    const containerStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor  : 'lightgray',
    color : 'black',
    width : '300px',
    height : '300px',
    position : 'relative',
    marginTop : '10px'
  };
  const btnStyle = {
     position : "absolute", 
     bottom : "10px", 
     right : "10px", 
     borderRadius : "5px",
     backgroundColor : "blue",
     color : "white", 
     padding : "5px",
     border : "none"
  }
  const {name, trending, headline} = props.trend; 
  console.log(props);
  return (
    <div style = {containerStyle}>
      <h1>{name}</h1>
      <h2>Trending No : {trending}</h2>
      <small>{headline}</small>
      <button style = {btnStyle}>Buy now</button>
    </div>
  )
}

export default App;
