import React, {Component} from 'react'
class RestaurantUpdate extends Component {

    constructor(){
        super();
        this.state={
            "name":null,
            "email":null,
            "address":null,
            "rating":null,
            "id":null
        }
    }
    update(){
        fetch('http://localhost:3000/restaurant/'+this.state.id,{
            method: "Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been updated")
            })

        })
    }
    componentDidMount(){
        fetch("http://localhost:3000/retaurant/"/+this.props.match.params.id).then((response)=>{
            response.json().then((result)=>{
                // console.warn(result)
                this.setState({
                    name:result.name,
                    email:result.email,
                    address:result.address,
                    rating:result.rating,
                    id:result.id,

                })
            })
        })
    }
    render(){
        // console.warn(this.state);
        return(
            <div>
                <h1>RestaurantUpdate</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder='Restaurant Name' value={this.state.name}/><br/><br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder='Restaurant Email' value={this.state.email}/><br/><br/>
                    <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder='Restaurant Rating' value={this.state.rating}/><br/><br/>
                    <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder='Restaurant Address' value={this.state.address}/><br/><br/>
                    <button onClick={()=>{this.update()}}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}
export default RestaurantUpdate;