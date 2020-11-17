import React, {useContext} from 'react'
import TransactionContext from '../../context/transations';
import { Link } from "gatsby"
const Content = () => {
    const {hello, storeObject} =  useContext(TransactionContext);
    console.log(hello)
    return <div>
        {hello}
        <input type="text" onChange={(e)=>storeObject(e.target.value)}/>


        <Link to="/" state={{hello}}>home</Link><br/>
        <Link to="/page-2">page 2</Link><br/>
        <Link to="/page-3">page 3</Link><br/>

    </div>
  }

  export default Content