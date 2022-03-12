import logo from './logo.svg';
import './App.css';


function App() {
  const products = [
    {name : 'Photoshop', price: '$99'},
    {name :'Adobe Premiere Pro', price : '$200'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Get Started  
        </p>
       
  {/* 1st */}

 {/*   <Product name = {products[0].name} price ={products[0].price}></Product>
 */}
 <Product product = {products[0]}></Product>
{/* 2nd  */}
<Person name="Komol" ></Person>
<Person name="Love" ></Person>
<Person name="Enni" ></Person>
{/* <Person name={nayoks[0]} ></Person> */}

      </header>
    </div>
  );
}
      

/*1st  */
function Product(props){
  const productStyle ={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor : 'lightgray',
    padding :'50px'
  }
 const {name,price}= props.product;
console.log(name,price);

  return(
    <div style={productStyle}>
<h1>
 {props.product.name}
</h1>
<h1>
 {props.product.price}
</h1>
<button>Buy Now</button>

    </div>
  )
}

// 2nd
function Person(props){
 const personStyle = {
   border:'3px solid gold',
   backgroundColor:'indianred'
 }
  return (
   <div style={personStyle}>
      <h1>
      Name :{props.name}
    </h1>
     
   </div>
  )
}


export default App;


