import React, { useState } from 'react';
import { Container, NotCompletedError } from './style'
import { Button } from '../../GlobalStyles';

import Search from '../../components/Search/Search';
import { useWidth } from '../../MyHooks/useWidth';
import TableContainer from '../../components/TableContainer/TableContainer';
import { useSelector } from 'react-redux';
import { hasAllPositionsCompleted } from '../../State/AddedChampions/selectors';
import { useHistory } from 'react-router';
import { useTimeout } from '../../MyHooks/useTimeout';

const widthDivider = 650;
const ChooseChampions = props => {

    const { width } = useWidth();
    const [searchedChampions, setSearchedChampions] = useState('x')
    const canSwitchToTimerPage = useSelector(state => hasAllPositionsCompleted(state))
    const [showNotCompletedPositionError, setShowNotCompletedPositionError] = useState(false)

    useTimeout(() => setShowNotCompletedPositionError(false), 2000, [showNotCompletedPositionError]);

    const history = useHistory()

    const handleAccept = (e) => {
        canSwitchToTimerPage
            ? history.push('/spells-timer')
            : setShowNotCompletedPositionError(true)
    }
    const searchChampion = e => {
        setSearchedChampions(e.target.value);
    }
    return (
        <Container>
            <Search value={searchedChampions} onChange={searchChampion} />
            <TableContainer widthDivider={widthDivider} searchedChampions={searchedChampions} />
            <Button
                style={{
                    position: 'absolute',
                    bottom: '2%',
                    right: width > widthDivider ? null : '2%'
                }}
                size={18}
                onClick={handleAccept}
            >
                Accept
            </Button>
            {showNotCompletedPositionError ? <NotCompletedError> <span>You have to complete all positions to <b> Accept</b></span></NotCompletedError> : null}
        </Container >
    )
}


export default ChooseChampions