import React from 'react'
import { connect } from 'react-redux'
import { startGetUsers } from '../actions/userAction'
import { Link } from 'react-router-dom'

class UserList extends React.Component{

    componentDidMount(){
        if(this.props.users.length == 0 ){
            this.props.dispatch(startGetUsers())
        }
    }

    render(){
        return (
            <div>
                <h1>User List -{ this.props.users.length }</h1>
                {
                    this.props.users.map((user)=>{
                        return <p><Link to={`/users/${user.id}`}>{ user.name }</Link></p>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users : state.users
    }
}

export default connect(mapStateToProps)(UserList)