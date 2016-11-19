import React, {Component} from 'react';

class Results extends Component {
    render() {
        return(
            <div>You have {this.props.score} correct and {this.props.questions.length - this.props.score} wrong answers.</div>
        );
    }
}

export default Results;