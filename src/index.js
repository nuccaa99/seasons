import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
// import "semantic-ui-css/semantic.min.css";
import Spinner from './spinner';





class App extends React.Component {
    state = { lat: null, errorMessagee: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>
                this.setState({ lat: position.coords.latitude }),
            err =>
                this.setState({ errorMessagee: err.message })

        );
    }

    renderContent() {
        if (this.state.errorMessagee && !this.state.lat) {
            return <div> Error: {this.state.errorMessagee}</div>
        }

        if (!this.state.errorMessagee && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Pleace accept location request"/>

    }

    render() {
        return <div className='border red'>
            {this.renderContent}
        </div>
    }

    render() {
        if (this.state.errorMessagee && !this.state.lat) {
            return <div> Error: {this.state.errorMessagee}</div>
        }

        if (!this.state.errorMessagee && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Pleace accept location request"/>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);