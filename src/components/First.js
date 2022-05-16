
import {Link} from 'react-router-dom';
import React, {useState} from 'react'


export default function First() {
    const [data, setData] = useState("")
    return (
        <div>
        I am First !
        <label>Name :</label>
        <input type="text" value={data} placeholder="Name" onChange={(e)=>{setData(e.target.value)}}/>
        <Link  to={{
                    search: '?id=' + 1,
                    pathname: 'second',
                    state: {
                      name: data
                    },
                  }}>Continue</Link>
        </div>
    )
}
