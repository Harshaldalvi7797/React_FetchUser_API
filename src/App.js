import React,{Component} from "react";
import Axios from "axios";
import Search from "./component/search.component";
import Userpost from "./component/userpost";


class App extends Component
{
  constructor()
  {
    super();
    this.state={
      searchField:"",
      userpost:[]
    }
  }
 async componentDidMount()
  {
    let item =await  Axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(item.data);
    this.setState({userpost:item.data});
    // console.log(this.state.searchField);
  }
  render()
    {
          const SearchUserPost=this.state.userpost.filter(item=> {  console.log(item);  
            return item.name.toLowerCase().includes(this.state.searchField.toLowerCase());})
      //  console.log(this.state.searchField);
      return(
       <div className="container">
         <div className="row">

           <Search  placeholder="Search Something..." Search={e => this.setState({searchField : e.target.value}
            , () => console.log(this.state.searchField) )} />
          
         
         </div>

         <div className="row">
           <Userpost post={SearchUserPost}/>
         </div>

      
       </div>
      );
    }
  

}

export default App;
