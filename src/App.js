import { Users } from "./Components/Users";
import "./App.css";
function App() {
  const users = [
    {name:"Ohto",age:39,sex:"male"},
    {name:"Hossein",age:41,sex:"male"},
    {name:"Mina",age:35,sex:"female"},
    {name:"Saarah",age:36,sex:"female"},
    {name:"Mona",age:44,sex:"female"},

  ]
  return <div className="App">
  {users.map((user,index)=>{
   return <Users key={index} name={user.name} age= {user.age} sex={user.sex}/>
  })}
  </div>;
}
export default App;
