import React from "react";
import { render } from "react-dom";


const Search =({placeholder,Search})=>
{
  let style= {
    padding: "60px 0 60px "
}
// console.log(props);
   
        return(
            <div className="container" style={style}>
            <div className="row">
             <div className="col-md-8">
             <div className="form-group">
                <input type="text" className="form-control" placeholder={placeholder} onChange={Search} />
   
              </div>
             </div>
             
            </div>

            </div>
        )
    }


export default Search;
