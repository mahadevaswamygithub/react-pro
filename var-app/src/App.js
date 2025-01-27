import React , {Component} from 'react';
// import { Greet } from './components/Greet';  // named Import
import Greet from './components/Greet'; 
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FuncClick from './components/FuncClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

class App extends Component{
  render() {
    return (
    <div className='App'>
      {/* <Greet/>
      <Welcome/>
      <Hello/>

      

      <Greet name='bob' heroName = 'tester'>
        <p1>
         this is children props
        </p1>
      </Greet>

      */}

      {/* <Greet name='alice' heroName = 'devloper'/> */}

      {/* <Welcome name='mike' heroName='auto tester'></Welcome> */}

      {/* example for component state
      <Message/> */}

      {/* example to use the setState()
      <Counter/> */}

      {/* <FuncClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind/> */}

      <ParentComponent />


    </div>
  );
  }
}

export default App;