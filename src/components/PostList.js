import React from 'react'
import { connect } from 'react-redux'
import { startGetPosts } from '../actions/postAction'
import { Link } from 'react-router-dom'

class PostList extends React.Component{
    
    componentDidMount(){
        
        (this.props.posts.length == 0) &&
        this.props.dispatch(startGetPosts())
    }

    render(){    
        return (
            <div>
                <h1> Post List - {this.props.posts.length}</h1>
                {
                    this.props.posts.map((post) => {
                        return <p><Link to = {`/posts/${post.id}`}>{post.title}</Link></p>
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostList)