import React, {Component} from 'react';

class Question extends Component {

    handleChange(eventObject) {
        eventObject.preventDefault();
        this.props.upPage(this.props.page + 1);
        if (eventObject.target.value == this.props.question.respuestaCorrecta) {
            this.props.upScore(this.props.score + 1);
        }
    }

    displayAnswers() {
        return this.props.question.posiblesRespuestas.map(choice => {
            return (
                <div>
                    <input
                        type="radio"
                        value={choice.numeroRespuesta}
                        key={choice.numeroRespuesta}
                        name={this.props.question.numeroPregunta}
                        onChange={this.handleChange.bind(this)}
                    /> {choice.textoRespuesta}
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <h4>{this.props.question.textoPregunta}</h4>
                {this.displayAnswers()}
            </div>
        );
    }
}

export default Question;