import React, {Component} from 'react';
// @ts-ignore
import { Button } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styles from './SearchBar.module.css'
 


export function SearchBar(){
    return(

        // <p>SearchBar</p>
        
<div>

    <div class="field has-addons">
  
      <p className="control">
      {/* <a class="button is-static">@gmail.com </a> */}
      <button className="button is-static is-medium">Search</button>
      </p>

      <p className="control">
        <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="baby sitter, handyman, landscape"/>
      </p>

      <p className="control">
        {/* <a class="button is-static">@gmail.com </a> */}
        <button className="button is-static is-medium">NEAR</button>
      </p>

      <p className="control">
        <input className={`input is-medium ${styles['input-control']}`}  type="text" placeholder="Where"/>
      </p>

  {/* <Button variant="contained" color="primary">
  Primary
</Button> */}

  <div className={`button is-medium ${styles['search-button']}`} >  
    <span className="icon"><i className="fas fa-search"></i></span>
  </div>





    </div>

</div>

);
}

