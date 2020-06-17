import React from 'react'
import { connect } from 'react-redux'
import { findPost } from '../selectores/postsSelector'
import { findUser } from '../selectores/usersSelector'

class PostShow extends React.Component{
    render(){
        return(
            <div>
                <h2>Post Detail</h2>
                <h3>User Name: { this.props.user.name }</h3>       
                <h3>Title: { this.props.post.title }</h3>
                <h4>Body: { this.props.post.body }</h4>
            </div>
        )
    }
    
}

const mapStateToProps = (state, props)=>{
    const post = findPost(state.posts, props.match.params.id)
    console.log(post)
    return{
        post ,
        user: findUser(state.users, post.userId)
    }
}
export default connect(mapStateToProps)(PostShow)