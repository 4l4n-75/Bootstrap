// const { render } = require("express/lib/response");

function App(){
    return(
        <div>
            <h1>Hola mundo con React, componentes</h1>
        </div>
    );
}
function Welcome(props){
    return <h1>Hola ... {props.name}</h1>
}

class WelcomeClass extends React.Component{
    render(){
        return <h1>Hola  soy {this.props.name}</h1>
    }
}
function Apps(){
    return(
        <div>
            <WelcomeClass name= "Alan"/>
            <Welcome name= "Jair"/>
            <Welcome name= "Ezequiel"/>
        </div>
    )
}
function Comment(props){
    return (
        <div className="comment">
            <div className="UserInfo">
                <Avatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
                <div className="User-info-name">
                    {props.author.name}
                </div>
            </div>
            <div className="comment-text">
                {props.text}
            </div>
        </div>
    );
}
function Avatar(props){
    return (
        <img className="Avatar" 
            src={props.avatarUrl} 
            alt={props.name}
        />
    )
}
function Author(props){
    return(
        <div className="UserInfo">
            <Avatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
            <div className="User-info-name">
                {props.author.name}
            </div>
        </div>
    )
}
const element = <Welcome name="Alan" />
const secondelement = <WelcomeClass name="Isaac" />
const author = {
    avatarUrl: "../logo.png",
    name: "Alan Garcia"
}
const text ="Texto del componente comment"

let app = document.getElementById('app');

ReactDOM.render(<Comment author={author} text={text} />, app);