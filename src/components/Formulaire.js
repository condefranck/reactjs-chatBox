import React from 'react';

class Formulaire extends React.Component{

    state = {
        length: this.props.length
    }

    createMessage = e => {
        e.preventDefault();
        const message = {
            message: this.refs.message.value,
            pseudo: this.props.pseudo
        }

        this.props.addMessage(message);
        this.refs.form.reset();
        this.setState({length:this.props.length});
    }

    compteur = e =>{
        const length = this.props.length - this.refs.message.value.length;
        this.setState({length});
    }

    render(){
        return(
            <form 
                className="form" 
                onSubmit={this.createMessage.bind(this)}
                ref="form"
            >
                <textarea 
                    required 
                    maxLength={this.props.length} 
                    ref="message"
                    onChange={e => this.compteur(e)}
                >
                </textarea>
                <div className="info">{this.state.length}</div>
                <button type="submit">Envoyer !</button>
            </form>
        );
    }

    static propTypes = {
        addMessage: React.PropTypes.func.isRequired,
        pseudo: React.PropTypes.string.isRequired,
        length: React.PropTypes.number.isRequired
    }
}

export default Formulaire;