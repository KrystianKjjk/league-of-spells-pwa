import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { SpeechWindow, ListeningInfo, Button, Span } from "./style";

import { spells } from '../../GameData/spells.json'
import { positions } from '../../GameData/positions.json'

const spellsToLower = spells.map(s => s.name.toLocaleLowerCase())
const positionsToLower = positions.map(p => p.position.toLocaleLowerCase())

const Speech = React.forwardRef(
    ({ onSpellRecognition }, ref) => {

        const [recognizedSpell, setRecognizedSpell] = useState(null)
        const [recognizedPosition, setRecognizedPosition] = useState(null)
        const { transcript, finalTranscript, interimTranscript, resetTranscript, listening } = useSpeechRecognition()

        useEffect(() => {
            (async () => {
                // await SpeechRecognition.startListening({ continuous: true, language: 'en-GB' })
            })()
            return () => {
                SpeechRecognition.stopListening()
            }
        }, [])
        useEffect(() => {
            const interimToLower = interimTranscript.toLocaleLowerCase();
            const recSpell = spellsToLower.find(s => interimToLower.includes(s))
            if (recSpell !== undefined) {
                setRecognizedSpell(recSpell);
            }
            const recPosition = positionsToLower.find(p => interimToLower.includes(p))
            if (recPosition !== undefined) {
                setRecognizedPosition(recPosition)
            }

            if (recognizedSpell !== null && recognizedPosition !== null) {
                onSpellRecognition(recognizedPosition, recognizedSpell);
                setRecognizedSpell(null);
                setRecognizedPosition(null);
                resetTranscript()
            }
            //wywołaj zadanie dla postaci
            //onSpellRecognition(position, spell);

        }, [interimTranscript, onSpellRecognition])

        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            return <SpeechWindow ref={ref}><Span > this browser don't support <br /> Speech Recognition</Span></SpeechWindow>;
        }

        return (
            <SpeechWindow ref={ref}>
                <Span>Dictaphone </Span>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button
                        style={{ backgroundColor: listening ? 'gray' : 'lightgray' }}
                        onClick={async () => await SpeechRecognition.startListening({ continuous: true })}
                    >
                        Start
                    </Button>
                    <Button
                        style={{ backgroundColor: !listening ? 'gray' : 'lightgray' }}
                        onClick={() => SpeechRecognition.stopListening()}
                    >
                        Stop
                    </Button>
                </div>
                {/* <button onClick={() => { resetTranscript(); setMessage('') }}> Reset</button> */}
                <ListeningInfo>{listening ? "Listening" : "Not listening"}</ListeningInfo>
            </SpeechWindow>
        )
    }
)
export default Speech;