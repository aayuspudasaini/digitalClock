import React, {useState} from 'react'
import './App.css'
const App =( ) => {
  //current time , date,day;
  let cTime = new Date().toLocaleTimeString();
  let cDate = new Date().toLocaleDateString();
  let cDay = new Date().getDay();
  //assigning days in an array
  let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  //using useState in cTime with setInterval
  const [uTime,setUtimes] = useState(cTime);
  const sTime = () =>
  {
    cTime = new Date().toLocaleTimeString();
    setUtimes(cTime);
  }
  setInterval(sTime,1000);
  //using useState in cDate with setInterval
  const [uDate,setsUTime] = useState(cDate);
  const sDate = () =>
  {
    cDate = new Date().toLocaleDateString();
    setsUTime(cDate);
  }
  setInterval(sDate,1000*60*60);
  //using useState in cDay with setInterval
  const [uDay,setUday] = useState(cDay);
  const sDay = () =>
  {
    cDay = new Date().getDay();
    setUday(cDay);
  }
  setInterval(sDay,1000*60*60);


  return (
    <>  
    <div className="container">
      <p className="dg_text">Digital Clock</p>
      <div className="box-background">
      <h1 className="dg_clock">{uTime}<p className="dg_date">{uDate} {days[uDay]}</p></h1>      
      </div>
    </div>
    </>
  );
};
export default App;