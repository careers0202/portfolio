import React, { Component} from 'react';


class Child extends Component {

    constructor(){
        super();
        this.state = {
            users: [],
            inputVal: ''
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            users: props.users
        }
    }

    handelFilter = (event) => {
        this.setState({
            inputVal: event.target.value
        })
    }


    render(){


        const filteredusers = this.state.users.filter(user=>user.name.includes(this.state.inputVal));
        
        return (
            <div className="componentA ">
                <input type="search" onChange={this.handelFilter}/>
                 <ol>
                {
                 filteredusers.map((user, index)=>{
                        return (<li key={index}>
                            {user.name} : {user.phone}
                        </li>)
                    })
                }
                 </ol>

            </div>
        )
    }
}




export default Child;