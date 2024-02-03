import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';
import {Link } from 'react-router-dom'
class RestaurantList extends Component {
    constructor(){
        super();
        this.state={
            list:null,
        }
    }
    componentDidMount(){
       this.getData();
    }
    getData(){
        fetch("http://localhost:3000/restaurant").then((response)=>{
            response.json().then((result)=>{
                // console.warn(result)
                this.setState({list:result})
            })
        })
    }
    delete(id){
        fetch("http://localhost:3000/restaurant/"+id,{
        method:"DELETE",
    }).then((result)=>{
        result.json().then((resp)=>{
            alert("Restaurant has been deleted")
            this.getData();
        })
    })
    }
    render(){
      

        return(
            <div>
                <h1>RestaurantList</h1>
                {
                    this.state.list?
                    <div>
                        <Table striped bordered hover>
                        <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Location</th>
                                    <th>Operation</th>
                                </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.list.map((item)=>
                        // <div className='list-wrapper'>
                        //     {/* <span>{item.id}</span> */}
                        //     <span>{item.name}</span>
                        //     <span>{item.address}</span>
                        //     <span>{item.email}</span>
                        //     <span>{item.rating}</span>
                        // </div>
                        <tr>
                            <td>{item.id}</td>                            
                            <td>{item.name}</td>
                            <td>{item.rating}</td>
                            <td>{item.address}</td>
                            <td><Link to={'/update/'+item.id}>Edit</Link>
                            <span onClick={()=>this.delete(item.id)}>delete</span>
                            </td>                            
                            
                        </tr>
                        )
                    }
                    </tbody>
                    </Table>
                    </div>
                    :<p>Please Wait...</p>
                }

            </div>
        );
    }
}
export default RestaurantList;