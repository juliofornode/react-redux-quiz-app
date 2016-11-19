import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchQuestions} from '../actions/index';
import Question from './question';
import Results from './results';

class QuestionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            page: 1
        };
        this.displayQuestion = this.displayQuestion.bind(this);
        this.upScore = this.upScore.bind(this);
        this.upPage = this.upPage.bind(this);
    }

    componentWillMount() {
        this.props.fetchQuestions();
    }

    upScore(score) {
        this.setState({score});
    }

    upPage(page) {
        this.setState({page});
    }

    displayQuestion() {
        if(!this.props.questions) {
            return <div>Loading...</div>;
        }
        return this.props.questions.map(question => {
            if(this.state.page == question.numeroPregunta) {
                return(
                    <Question
                        key={question.numeroPregunta}
                        question={question}
                        upScore = {this.upScore}
                        upPage = {this.upPage}
                        {...this.state}
                    />
                );
            }
        })
    }

    render() {
        if(!this.props.questions) {
            return <div>Loading...</div>;
        }
        if(this.state.page > this.props.questions.length) {
            var results = <Results {...this.state} {...this.props}/>;
            var progress = '';
        } else {
            var results = '';
            var progress = <p>Page: {this.state.page}  -  Score: {this.state.score}</p>;
        }

        return(
            <div>
                {this.displayQuestion()}
                {progress}
                {results}
            </div>
        );
    }


}


function mapStateToProps(state) {
    return {
        questions: state.questions
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchQuestions: fetchQuestions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);