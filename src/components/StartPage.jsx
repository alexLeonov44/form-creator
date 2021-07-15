import React from 'react'
import {Link, NavLink, useHistory} from "react-router-dom";

export default function StartPage() {
    const history = useHistory();

    const routeChange = () =>{ 
      let path = `form`; 
      history.push(path);
    }
    return (
        <div className="StartPage">
        <button onClick={routeChange} className="StartPage__button">Create Your Form !</button>
       </div>
    )
}
