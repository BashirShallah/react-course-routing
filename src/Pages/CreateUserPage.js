import React, { Component } from 'react';
import { addUser} from "../Api/Users";
import UsersForm from "../Components/UsersForm";

export default class CreateUserPage extends Component {
    state = {
        user: {
            name: '',
            email: ''
        }
    }

    addUser = (values)=>{
      addUser(values)
        .then(()=>{
          alert('Success');
          this.props.history.push('/users');
        })
        .catch(error=>{
          alert('حدث خطأ غير معروف');
        });
    }
    
    render(){
        return <div>
            <h2>User</h2>
            
            <UsersForm values={this.state.user} onSubmit={this.addUser} />
        </div>;
    }
    
}
