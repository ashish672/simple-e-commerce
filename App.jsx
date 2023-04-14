import { useCallback, useMemo, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Products from './components/Products'
import Title from './components/Title';
import Count from './components/Count';
import Button from './components/Button';

function App() {
  const [sortByPrice, setSortByPrice] = useState("");
  const [colors, setColors] = useState([]); 

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  

  let products = [
    {   
        id : 1,
        price : "1769",
        name : "Shoe 1",
        image : "./images/1.jpg",
        color : "red"
      },
      {
        id : 2,
        price : "2499",
        name : "Shoe 2",
        image : "../images/2.jpg",
        color : "red"
    },
    {
        id : 3,
        price : "2999",
        name : "Shoe 3",
        image : "../images/3.jpg",
        color : "black"
      },
      {
        id : 4,
        price : "3499",
        name : "Shoe 4",
        image : "../images/4.jpg",
        color : "black"
    },
    {
        id : 5,
        price : "599",
        name : "Shoe 5",
        image : "../images/5.jpg",
        color : "yellow"
    },
    {
        id : 6,
        price : "1999",
        name : "Shoe 6",
        image : "../images/6.jpg",
        color : "yellow"
    },

  ]


  const colorsHandler = (e) => {
      const color = e.target.id;
      const colorFound = colors.find(c => c === color);
      if(colorFound) {
        setColors(colors.filter(c => c !== color))
      } else {
        setColors([...colors , color])
      }
  }

  // const [counterOne , setCounterOne] = useState(0)
  // const [counterTwo , setCounterTwo] = useState(0)

  // const [age , setAge] = useState(20)
  // const [salary , setSalary] = useState(10000)
 

  // const handleClickAge = useCallback(() => {
  //   setAge(age => age + 1)
  // } , [age])

  // const handleClickSalary = useCallback(() => {
  //   setSalary(salary => salary + 1000)
  // }, [salary])

  // const handleClickSalary = () => {
  //   // setSalary(salary => salary + 1000)
  //   handleClickSalaryCb()
  // }

  // const counterOneHandler = () => {

   

  //   setCounterOne((count) => count + 1)
  // }
  
  // const counterTwoHandler = () => {
  //   setCounterTwo((count) => count + 1)

  // }

  // const isEven = () => {

  //   for (let i = 0; i < 1900000000; i++) {
  //   }

  //   return counterOne % 2 === 0
  // }

  // const isEven = useMemo(() => {

  //   for (let i = 0; i < 1900000000; i++) {
  //     // console.log(i)
  //   }

  //   return counterOne % 2 === 0
  // } , [counterOne])


  return (
    <div className="App">

      <label htmlFor="sortBy">Sort By : </label>

     <select name="sortBy" id="sortBy" className='select' value = {sortByPrice} onChange={(e) => setSortByPrice(e.target.value)} placeholder='Sort By'>

        <option value="">Sort By</option>
        <option value="low-to-high">Price - Low to high</option>
        <option value="high-to-low">Price - High to Low</option>

     </select>

      <div className="range" >
          <p>From : <input type="number" value = {from} min = "0" onChange={(e) => setFrom(+e.target.value)} /> </p>
          <p>To : <input type="number" value = {to} min = "0"  onChange={(e) => setTo(+e.target.value)}/></p>
      </div>

      <div className="colors">
          <div className='red'>
            <label htmlFor="red">Red</label>
            <input type="checkbox" onChange={(e) => colorsHandler(e) }  name="" id="red" />
          </div>

          <div className='yellow'>
            <label htmlFor="red">Yellow</label>
            <input type="checkbox" onChange={(e) => colorsHandler(e) }  name="" id="yellow" />
          </div>

          <div className='black'>
            <label htmlFor="black">Black</label>
            <input type="checkbox"  onChange={(e) => colorsHandler(e) }  id="black" />
          </div>

      </div>


        <Products from = {from} to = {to} colors = {colors} products = {products} sortByPrice = {sortByPrice}  />




{/* 
        <Title />
        <Count text = "age" count = {age} />

        <Button handleClick = {handleClickAge}> Increment Age</Button>

        <Count text = "salary" count = {salary} />

        <Button handleClick = {handleClickSalary}> Increment Salary</Button> */}


{/* 
        <button onClick={counterOneHandler}>
          Counter One - {counterOne}
          {isEven ? 'Even' : 'Odd'}
        </button>
        <br/>

        <button onClick={counterTwoHandler}>
          Counter Two - {counterTwo}
        </button> */}



    </div>
  )
}

export default App




