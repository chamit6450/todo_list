import React from 'react';
import './style.css';

export default function Searchbydate({ data, searchDate,setData,setSearchResults,searchResults }) {
    

    const searchTasksByDate = () => {
        const results = data.filter(item => item.date === searchDate);
        setSearchResults(results);
    //    setFlag(true)
    };
    const remove = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
     };

    return (
        <div>
            {                                  
            searchResults.map((item, index) => (
                <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label>
                        <input type='checkbox' />
                        <span className="blended-text">{item.name}<br/></span>
                        <span className="blended-text">{item.date}</span>
                    </label>
                    <button onClick={() => remove(index)}>Remove</button>
                </li>
            ))
        }
        </div>
    );
}
