import React from 'react';
import './App.css';
import axios from "axios";

class Shows extends React.Component{
                 constructor(){
                 
                     super();
                        this.state={
                            info:[]
                
                          
                        }
                 }
    componentDidMount() {
        let url = " https://reqres.in/api/users?page=2";
        
        axios.get(url,).then(
          (res) => {
    
         //  console.log(res.data);
            this.setState({ info:res.data.data});

             console.log(this.state.info);
        
          },
          (err) => {
            console.log(err);
          }
        );
      }
      first=()=> {
        let url = " https://reqres.in/api/users?page=1";
        
        axios.get(url,).then(
          (res) => {
    
         //  console.log(res.data);
            this.setState({ info:res.data.data});

             console.log(this.state.info);
        
          },
          (err) => {
            console.log(err);
          }
        );
      }
      second=()=> {
        let url = " https://reqres.in/api/users?page=2";
        
        axios.get(url,).then(
          (res) => {
    
         //  console.log(res.data);
            this.setState({ info:res.data.data});

             console.log(this.state.info);
        
          },
          (err) => {
            console.log(err);
          }
        );
      }
      render(){
          return(
             <div>
                    <div className="container-fluide">
                                         <div className="row">
                                             <div className="col-md-4">

                                             </div>
                                             <div className="col-md-4">
                                             <h2>Assign Work</h2>
                                            </div>
                                            <div className="col-md-4">

                                             </div>
                                         </div>
                               <div className="row">
                                       <div className="col-md-2">
                                            
                                       </div>
                                       <div className="col-md-6">
                                             <table className=" table ">
                                                      <thead>
                                                          <tr>
                                                              <th>Id</th>
                                                              <th>First Name</th>
                                                              <th>Last Name Name</th>
                                                              <th>Email</th>
                                                              <th>photo</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                            {
                                                                this.state.info.map((ele)=>{
                                                                    return(
                                                                        <tr>
                                                                             <td>{ele.id}</td>
                                                                            <td>{ele.first_name}</td>
                                                                            <td>{ele.last_name}</td>
                                                                            <td>{ele.email}</td>
                                                                            <td><img src={ele.avatar} ></img></td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                      </tbody>
                                             </table>
                                       </div>
                                       <div className="col-md-4">
                                            
                                       </div>
                               </div>
                               <div className="row">
                                             <div className="col-md-4">

                                             </div>
                                             <div className="col-md-4">
                                                  <button onClick={this.first}>1</button> <button onClick={this.second}>2</button>
                                            </div>
                                            <div className="col-md-4">

                                             </div>
                                         </div>
                    </div>
                             
                         
            </div>

          )
      }



          
       


    }
    export default Shows;