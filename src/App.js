import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checkbox, Row, Col } from 'antd';
import { Layout } from 'antd';
import Element from './Elements'
import Notification from './Notification'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { homedir } from 'os';


const { Header, Footer, Sider, Content } = Layout;

const objects = [
  {
    name: "My Luggage",
    pic: 'https://bit.ly/35atVLY',
    className: 'myLuggage',
    checkBoxNumber: 'A'
  },
  {
    name: "My Key",
    pic: 'https://bit.ly/2NZZToi',
    className: 'myKey',
    checkBoxNumber: 'B'
  },
  {
    name: "My Passport",
    pic: 'https://bit.ly/37jQWxP',
    className: 'myPass',
    checkBoxNumber: 'C'
  },
  {
    name: "My Airpods Case",
    pic: 'https://bit.ly/37iSlom',
    className: 'myAir',
    checkBoxNumber: 'D'

  }, {
    name: "My Wallet",
    pic: 'https://bit.ly/2Oo7qfK',
    className: 'myWallet',
    checkBoxNumber: 'E'
  }
  , {
    name: '...add Icon',
    pic: 'https://bit.ly/35mitwX',
    className: "addIcon",
    checkBoxNumber: 'F'
  }
]






function App() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedObjects, setCheckedObjects] = useState([]);

  return (
    <Router>
      <Route exact path='/' render={() => <Home checkedObjects={checkedObjects} setCheckedObjects={setCheckedObjects} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />}></Route>
      <Route path='/notification' render={() => <Notification items={checkedItems} objects={checkedObjects} />}></Route>
    </Router>
  );
}





function Home(props) {
  const items = props.checkedItems;


  const whatever = objects.map(function (obj) {
    return (<Element obj={obj} />)
  })

  function onChange(items) {
    console.log("items", items);
    props.setCheckedItems(items);
    const temporaryObjects = [];
    objects.map(getCheckedObjects);
    props.setCheckedObjects(temporaryObjects);
    console.log(temporaryObjects)
    function getCheckedObjects(object) {
      if (items.includes(object.checkBoxNumber)){
      // if (object.checkBoxNumber.match(items)) {
        temporaryObjects.push(object); //这个可能行不通，不行的话就用state在之前已有的object后面加一项，用concat（）
      }
    }
  }



  return (<div>
    <Layout>
      <Header className='topOfThePage' >
        <img className='userProfile' src='https://bit.ly/2KDtS3z'></img>
        <Link to='/notification' className='activateBox'> Activate</Link>

      </Header>
      <Content>
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
          <Row>
            {whatever}
          </Row>
        </Checkbox.Group></Content>

    </Layout>
  </div>)
}




export default App;
