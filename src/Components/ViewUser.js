import React from 'react';
import {withRouter} from "react-router-dom";

const ViewUser = function (props){
    return <div>
        Id: {props.match.params.id}

        <div>
            Name: {props.user.name}
        </div>
        <div>
            Email: {props.user.email}
        </div>
    </div>;
}

export default withRouter(ViewUser);
