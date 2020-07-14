import styled from 'styled-components'

export const BackToStart = styled.div`
    display: flex;
    background-image: url(${p => p.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 70%;
    /* background-color: red; */
    margin: 0px;
    padding: 0px;
    right: 15%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-right: 5%;
    transition: transform 0.3s;
    &:hover {
        cursor: pointer;
        /* text-decoration: underline; */
        transform: scale(1.20);
    }
`;