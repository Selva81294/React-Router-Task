//Task 2:
import './App.css';
// import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import {Studentdetails} from './components/students'
import Base from './Base/Base';
import Dashboard from './components/Dashboard'
import AuthPage from './components/AuthPage';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import NoPage from './components/NoPage';
import WelcomePage from './components/WelcomePage';
import SelectedStudent from './components/SelectedStudent';
import { useState } from 'react';
import { data } from './Data/data';
import AddData from './components/AddData';
import UpdateData from './components/UpdateData';



// function App() {
//     return (
//       <div className="App">
//           {/* <ProductCard/> */}
//       </div>
//     )
//   }

 /*  const proData = [
      {
         img: "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
         name: "Fancy Product",
         price:"$40.00 - $80.00",
         rating:"⭐⭐⭐⭐"
      },
      {
         img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1563378212-amazon-echo-dot-3-1563376152.jpg?crop=1xw:1xh;center,top&resize=480:*",
         name: "Special Item",
         priceStrike:"$20.00",
         price:" $18.00",
         rating:"⭐⭐⭐"
      },
      {
         img: "https://startupbros.com/wp-content/uploads/2019/08/Top-Selling-Amazon-Products-SiliconeWeddingRings.jpg",
         name: "Sale Item",
         priceStrike:"$50.00",
         price:" $25.00",
         rating:"⭐⭐⭐⭐"
      },
      {
         img: "https://www.ecomengine.com/hs-fs/hubfs/images/screenshots/amazon/product-photo-infographic-dog-food.jpg?width=600&name=product-photo-infographic-dog-food.jpg",
         name: "Popular Item",
         price:"$40.00",
         rating:"⭐⭐⭐⭐⭐"
      },
      {
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLrG-MvyBWlBZ4hhlSPujbcKUjnb7qf3ozQ&usqp=CAU",
         name: "Sale Item",
         priceStrike:"$50.00",
         price:" $25.00",
         rating:"⭐⭐⭐⭐"
      },
      {
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHttFUQxBleDj5Q0FRKTyv14EGLwK_15Ab1g&usqp=CAU",
         name: "Fancy Product",
         price:"$12.00 - $28.00",
         rating:"⭐⭐⭐⭐⭐"
      },
      {
         img: "https://img3.gadgetsnow.com/gd/images/products/additional/large/G201788_View_1/mobiles/smartphones/apple-iphone-12-128-gb-red-6-gb-ram-.jpg",
         name: "Fancy Product",
         price:"$120.00 - $280.00",
         rating:"⭐⭐⭐⭐⭐"
      },
      {
         img: "https://cdn.arstechnica.net/wp-content/uploads/2022/09/iPhone-14-Pro-and-iPhone-14-Pro-Max.jpeg",
         name: "Fancy Product",
         price:"$120.00 - $280.00",
         rating:"⭐⭐⭐⭐⭐"
      },
    ]


function ProductCard(){
  const[show,setShow]=useState(false)
  const [add,setAdd] = useState(0)

  const handleRemove = (idx)=>{
    setShow(!show);
    setAdd(add-1)
  }

   const handleAdd = (idx)=>{
      setShow(!show);
      setAdd(add+1)
    }
   const btnAdd =   document.getElementsByClassName('btnAdd')
      const  displayAddBtn =(idx)=>{
          btnAdd[idx].style.display =  "none"
          btnRemove[idx].style.display =  "block"
      }
   const btnRemove = document.getElementsByClassName('btnRemove')
   const displayRemoveBtn = (idx)=>{
      btnRemove[idx].style.display =  "none"
      btnAdd[idx].style.display =  "block"
   }
   
  return(
      <div>
         <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                  <NavDropdown title="Shop" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Popular Items
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  🛒 Cart {add}
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        <h1 className='header1'>Shop in style<br/><h6>With this shop hompeage template</h6></h1>
        <div className='cardStyle' >
        {
          proData.map((value,idx)=>(
            <Card key={idx} style={{ width: '18rem', textAlign:'center', alignItems:'center', margin:'10px'}}>
            <Card.Img style={{height:'200px'}} variant="top" src={value.img} />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Title>{value.rating}</Card.Title>
              <Card.Text>
                <strike>{value.priceStrike}</strike>
                {value.price}
              </Card.Text>
              <Card.Text>
              <Button className='btnAdd' onClick={()=>{handleAdd();displayAddBtn(idx) }} variant="primary">Add Cart</Button> 
              <Button disabled={!add} className='btnRemove' onClick={()=>{handleRemove(); displayRemoveBtn(idx) }} variant="primary">Remove Cart</Button>
              </Card.Text>
            </Card.Body>
        </Card>
        
          ))
        } 
        </div>
      </div>
  )
}  */



//CRUD

function App() {
const [studentsData,setStudentsData] = useState(data);
  return (
    <div className="App">
        <Switch>
          <Route exact path= '/'>
              <WelcomePage/>
          </Route> 

          <Route path= '/dashboard'>
              <Dashboard/>
          </Route>

          <Route path= '/register'>
              <AuthPage/>
          </Route>

          <Route path = '/studentsData'>
              <Studentdetails studentsData = {studentsData} setStudentsData = {setStudentsData}/>
          </Route>

  //Redirect
          <Route path = '/students'>
            <Redirect to = '/studentsData'/>
          </Route>

          <Route path = '/student/:id'>
            <SelectedStudent studentsData = {studentsData}/>
          </Route>

          
          <Route path = '/AddData'>
              <AddData studentsData = {studentsData} setStudentsData = {setStudentsData}/>
          </Route>

          <Route path = '/edit/:idx'>
              <UpdateData studentsData = {studentsData} setStudentsData = {setStudentsData}/>
          </Route>

          <Route path= '**'>
             <NoPage/>
          </Route>

        </Switch>
    </div>
  )
}




export default App; 

{/* <Base title='Batch Details' description='All students details'> 
            <Studentdetails/>
        </Base>
        <Dashboard/>
        <AuthPage/> */}