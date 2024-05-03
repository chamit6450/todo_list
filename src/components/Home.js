import React, { useState } from 'react';
import './style.css';
import Leftbar from './Leftbar';
import Index from './Index'
import Searchbydate from './Searchbydate';
export default function Home() {
    const [task, setTask] = useState(""); 
    const [date, setDate] = useState(""); 
    const [data, setData] = useState([{ name: "task1", date: "2024-02-14" }]);
    const [searchDate, setSearchDate] = useState(""); 
    const [searchResults, setSearchResults] = useState([]);
    const [flag,setFlag] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, { name: task, date: date }]); 
        setTask(""); 
        setDate(""); 
    };

    const searchTasksByDate = () => {
        setTask("")
        const results = data.filter(item => item.date === searchDate);
        setSearchResults(results);
    //    setFlag(true)
    };

    // Function to search tasks based on date
   
    const set =()=>{
        setFlag(false)
    }

    return (
        <div className='body'>

        <div className='LeftBar'>
      <h1>Welcome!!</h1>
      <button>Today's Tasks</button><br/>
      <button>Tomorrow's Tasks</button><br/>
      
      <h2>Search by date</h2>
      <input type="date" value={date} onChange={(e) => setSearchDate(e.target.value)} />
      <button onClick={searchTasksByDate}>Search</button>

    </div>

        <div className='rightBar'>
            <div className='tasks'>
                <Index data={data} setData={setData} />
                <Searchbydate data={data} setData={setData} searchDate={searchDate} searchResults={searchResults} setSearchResults={setSearchResults}/>
                
            </div>
            <form className='input' onSubmit={handleSubmit}>
                <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task name" />
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                <button type='submit' onClick={set}>Add task</button>           
            </form>
    
        </div>
        </div>
    );
  }    