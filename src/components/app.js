import React, { Component } from 'react';
import QuestionList from './question_list';
import Steps from './steps';

export default class App extends Component {
  render() {
      return (
      <div>
            <h3 style={{marginTop: '50'}}>Quiz App built with React and Redux</h3>
            <hr/>
            <br/>
            <QuestionList />
            <Steps />
      </div>
    );
  }
}
