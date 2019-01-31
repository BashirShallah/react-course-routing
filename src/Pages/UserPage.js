import React, { Component } from 'react';
import {getUser} from "../Api/Users";
import ViewUser from "../Components/ViewUser";

export default class UsersPage extends Component {
    state = {
        user: {}
    }

    componentDidMount =()=>{
        const userID = this.props.match.params.id;

        getUser(userID).then(response => {
            this.setState({
                user: response.data
            });
        })
        .catch(error=>{
            alert('حدث خطأ غير معروف');
        });
    }
    
    render(){
        return <div>
            <h2>User</h2>
            
            <ViewUser user={this.state.user} />
        </div>;
    }
    
}
