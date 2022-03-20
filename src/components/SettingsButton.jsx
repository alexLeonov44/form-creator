import React from 'react'
import SettingsButtonIcon from '../assets/icons8-settings.svg'
import {Link, NavLink, useHistory} from "react-router-dom";

export default function SettingsButton() {
    const history = useHistory();

    const routeChange = () =>{ 
      let path = `setting`; 
      history.push(path);
    }
  return (
    <img onClick={routeChange} className='Settings_button' src={SettingsButtonIcon} alt='settings button' />
  )
}
