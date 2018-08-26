import React from 'react';

class Connexion extends React.Component{
    
    goToChat = e => {
        e.preventDefault();
        //récuperer le pseudo
        const pseudo = this.refs.pseudo.value;
        //changer l'url
        this.context.router.transitionTo(`/pseudo/${pseudo}`);
    }

    render(){
        return(
            <div className="connexionBox">                      
                <form action="" className="connexion" onSubmit={this.goToChat.bind(this)}>
                    <input type="text" placeholder="Pseudo" required ref="pseudo" />
                    <button type="submit">GO</button>
                </form>
            </div>
        );
    };

   static contextTypes = {
     router: React.PropTypes.object
   }
}

export default Connexion;
