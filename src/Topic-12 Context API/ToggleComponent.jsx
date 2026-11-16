import {useContext} from 'react'
import AuthContext from './context/AuthContext'

const ToggleComponent = () => {
    const toggleData = useContext(AuthContext);
    console.log("toggleData:", toggleData);
  return (
    <div>ToggleComponent</div>
  )
}

export default ToggleComponent