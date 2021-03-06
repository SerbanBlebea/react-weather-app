const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const Loader = require('./components/Loader.js');
const Cards = require('./components/Cards.js');
const Input = require('./components/Input.js');

class App extends React.Component {
    constructor()
    {
        super();

        axios.get('/api').then((response)=> {
            console.log("Got response");
            this.setState({
                weather: response.data
            });
        }).catch((err)=> {
            console.log(err);
        })

        this.state = {
            weather: null
        }
    }

    render()
    {
        return (
            <div style={{ backgroundImager: 'url("img/bg.jpg")', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
                {(this.state.weather == null) ? <Loader/> : <Cards weather={this.state.weather}/>}
                <Input/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, window.document.getElementById('app'));
