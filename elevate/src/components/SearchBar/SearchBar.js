import React, {Component} from 'react';
// @ts-ignore
import { Button } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styles from './SearchBar.module.css'
 
import { Link } from 'react-router-dom';

export function SearchBar(){
    return(

        // <p>SearchBar</p>
   
<div>

    <div class="field has-addons">
  
      <p className="control">
  
      <button className="button is-static is-medium">Search</button>
      </p>

      <p className="control">
        <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="singer, mower, photographer"/>
      </p>

      <p className="control">

        <button className="button is-static is-medium">NEAR</button>
      </p>

      <p className="control">
        <input className={`input is-medium ${styles['input-control']}`}  type="text" placeholder="Zip Code"/>
      </p>



  <div className={`button is-medium ${styles['search-button']}`} >  
    <span className="icon">
  
      <Link className="collapse-item" to="/Search"><i className="fas fa-search">
      </i>
      
      </Link> 

    </span>
  </div>



    </div>

</div>

);
}

