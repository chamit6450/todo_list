import React from 'react'

export default function Index({data,setData}) {
    const remove = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
     };
  return (
    <div>
        
          { data.map((item, index) => (
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
  )
}
