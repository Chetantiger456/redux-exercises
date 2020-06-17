import React from 'react' 
import { connect } from 'react-redux'
import { updateMessage } from '../actions/messageAction'

class MessageItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: props.body,
            updateForm: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleClick = ()=> {
        this.setState((prevState) =>{
            return{
            updateForm: !prevState.updateForm
            }
        })
    }

    handleSubmit = (event) => { 
        event.preventDefault()
        const formData = {
            id: this.props.id,
            body : this.state.body
        }
        
        this.props.dispatch(updateMessage(formData))
        this.handleClick()
    }
    render(){
        return (
            <div>
                {
                (this.state.updateForm) ? 
                <form onSubmit={ this.handleSubmit}>
                    <h1>Update Message</h1>
                    <textarea name= "body" value={ this.state.body } onChange={ this.handleChange }></textarea>
                    <input type='submit' value="Update" /> <button onClick={ this.handleClick}>Cancel</button>
                </form>
                :
                <p> { this.props.body } - { this.props.createdAt.toString() } <button onClick={this.handleClick}>Edit</button> </p> 
                 
                 }
            </div>
        )
    }
}

export default connect()(MessageItem)