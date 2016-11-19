export function fetchQuestions() {

    const questions = [
        {
            numeroPregunta: 1,
            textoPregunta: 'Capital of Spain?',
            posiblesRespuestas: [
                { numeroRespuesta: 1, textoRespuesta: 'Barcelona'},
                { numeroRespuesta: 2, textoRespuesta: 'Sevilla'},
                { numeroRespuesta: 3, textoRespuesta: 'Madrid'}
            ],
            respuestaCorrecta: 3
        },
        {
            numeroPregunta: 2,
            textoPregunta: 'Capital of France?',
            posiblesRespuestas: [
                { numeroRespuesta: 1, textoRespuesta: 'Marseille'},
                { numeroRespuesta: 2, textoRespuesta: 'Paris'},
                { numeroRespuesta: 3, textoRespuesta: 'Nantes'}
            ],
            respuestaCorrecta: 2
        }
    ];

    return {
        type: 'FETCH_DATA',
        payload: questions
    }
}