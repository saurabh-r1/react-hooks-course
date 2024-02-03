
import './App.css';
// import Login from './components/UseContextHook/Login';
// import Register from './components/UseContextHook/Register';
// import UseContextHook from './components/UseContextHook/UseContextHook';
import UseReducerHook from './components/UseReducerHook';
// import UseEffectHook from './components/UseEffectHook';
// import UseStateHook from './components/UseStateHook';



function App() {
  

  return (
    <div className="App">
      {/* <p>Hello World</p> */}
     {/* <UseStateHook/> */}
     {/* <UseEffectHook /> */}
     {/* <UseContextHook />
      <div style={{display:'flex', gap:'10', justifyContent:'center'}}>
      <Login />
     <Register />
      </div>
     */}

     <UseReducerHook />
     
    </div>
  );
}

export default App;
