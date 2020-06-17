import React from 'react'
import { findUser } from '../selectores/usersSelector'
import { connect } from 'react-redux'

class UserShow extends React.Component{
    render(){
        return(
            <div>
                <h1>User Detail</h1>
                <p>{ this.props.user.name }</p>
                <p>{ this.props.user.email }</p>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user : findUser(state.users, props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShow)