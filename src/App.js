
import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import {UserData} from './Data';
function App() {
const [userData, setUserData] = useState({
  labels:UserData.map((data)=>data.year),
  datasets:[{
    label:"Users Gained",
    data:UserData.map((data)=>data.userGain),
    backgroundColor: [
    "rgba(75,192,192,1)",
    "#ecf0f1",
    "#50AF95",
    "#f3ba2f",
    "#2a71d0",
  ],
  borderColor: "black",
  borderWidth: 2,
  }]
})

const [userdata, setUserdata] = useState({
  labels: UserData.map((data)=>data.year),
  datasets : [{
    label: "Users Gained",
    data: UserData.map((data)=>data.userGain),
    backgroundColor: [
      "rgba(75,192,192,1)"
    ],
    borderColor: "black",
    borderWidth:2,
}]
})
  return (
    <div className="App">
      <h1>Bar Chart</h1>
      <div style={{width:500, padding:10, margin:10}}>
        <BarChart chartData={userData}/>
      </div>
      <h1>Line Chart</h1>
      <div style={{width:500, padding:10, margin:10}}>
        <LineChart chartData={userdata}/>
      </div>
      <h1>Pie Chart</h1>
      <div style={{width:500, padding:10, margin:10}}>
        <PieChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;
