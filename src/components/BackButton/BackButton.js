import React from 'react';

import { Container, BackToStart } from './style'
import { useWidth } from '../../MyHooks/useWidth';
import { useHistory } from 'react-router';
import backIcon from '../../Icons/icons8-back-64-2.png';
import { useDispatch } from 'react-redux';
import { resetChampions } from '../../State/AddedChampions';
import { useCallback } from 'react';


const BackButton = props => {
    const { resultValue } = useWidth([400], [(null), (<span>Start</span>)])
    const history = useHistory();
    const dispatch = useDispatch();

    const reset = useCallback(
        () => dispatch(resetChampions()),
        [dispatch],
    )
    const handleClick = (e) => {
        e.preventDefault();
        reset()
        history.push("/");
    }
    return (
        <Container onClick={handleClick}>
            <BackToStart icon={backIcon} />
            {resultValue}
        </Container>
    )
}


export default BackButton