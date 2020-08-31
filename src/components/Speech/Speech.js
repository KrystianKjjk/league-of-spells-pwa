import React from 'react';
import PropTypes from "prop-types";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// const propTypes = {
//     // Props injected by SpeechRecognition
//     transcript: PropTypes.string,
//     resetTranscript: PropTypes.func,
//     browserSupportsSpeechRecognition: PropTypes.bool
// };

const Speech = () => {


    const { transcript, finalTranscript, interimTranscript, resetTranscript, listening } = useSpeechRecognition()

    console.log("Hey", transcript);
    console.log(SpeechRecognition.browserSupportsSpeechRecognition());

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    return (
        <div>
            <button onClick={async () => await SpeechRecognition.startListening({ continuous: true })}> Start</button>
            <button onClick={async () => SpeechRecognition.stopListening()}> Stop</button>
            <button onClick={resetTranscript}> Reset</button>
            <div>{listening ? "Listening" : "Not listening"}</div>
            <div style={{ border: '2px solid red' }}>{transcript} : {finalTranscript} : {interimTranscript}</div>

        </div>
    )
}
//Speech.propTypes = propTypes;

//export default SpeechRecognition(Speech);
export default Speech;

//({
    //resetTranscript,
    //browserSupportsSpeechRecognition,
    //startListening,
    //stopListening,
    //listening,
    //finalTranscript
//})