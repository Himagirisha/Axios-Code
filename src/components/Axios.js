import React,{useEffect,useState} from "react" ;
import axios from "axios";


function Axios(){
 const [ user , setUser ] = useState ( [ ] ) ;
 useEffect (()=>{
    fetchusers();
},[]) ;
 const fetchusers = async ( ) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users") ;
    console.log(res);
    setUser (res.data);
 } ;
 return (
    <div>
      <table>
        <tr>
                   I
          <th> ID </th >
          <th> Name </ th >
          <th> User Name </ th >
          < th > Email </ th >
          < th > Web Site </ th >
        </tr >
        { user.map ((val)=>{
          return (
            <tr>
              < td >{val.id } </ td >
              <td>{val.name } </td>
              <td>{val.username } </td>
              <td>{val.email}</td>
              <td>{val.website} </td>
              </tr>
          )
        })}
        </table>
        </div>
 );

    }

    export default Axios;

