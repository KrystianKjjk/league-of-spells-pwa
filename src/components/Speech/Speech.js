import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
};

const Speech = ({
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    startListening,
    stopListening,
    listening,
    finalTranscript
}) => {

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    return (
        <div>{}</div>
    )
}
Speech.propTypes = propTypes;

export default SpeechRecognition(Speech);