import React, [PropTypes, Component] from 'react';

class Button extends Component {
  static propTypes ={
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }
  logFormDataToConsole(event){
    console.log(this.props.formValues);
    this.ListeningStateChangedEvent({isClicked: true});
  }
  render (){
    return(
      <button
      disabled={this.state.isClicked}
      onClick={this.logFormDataToConsole}
    >
    Contact Us
    </button>
      );
  }
}

Button.propTypes $ {

};
export default Button;
