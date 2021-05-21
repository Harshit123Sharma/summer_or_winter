import React from "react";
import ReactDOM from "react-dom";
import Display from "./SeasonDisplay";
import Load from "./Loading";
import Err from "./Error";
class App extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = { lat: null, errMsg: " " };

  }*/

  state = {lat: null, errMsg: ""};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

  renderContent() {

    if (this.state.lat && !this.state.errMsg) {
      return <Display lat = {this.state.lat}/>;
    }
    if (this.state.errMsg && !this.state.lat) {
      return <Err message = {this.state.errMsg} />;
    }
    return <Load message = "Pls allow location request..." />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
}
}

ReactDOM.render(<App />, document.querySelector("#root"));