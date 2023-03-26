import React, { Component } from 'react';
import styled from 'styled-components';
import {NotificationContainer, NotificationMessage} from './Container.styled';

const LoadingSpinnerImg = styled.img`
    height: 50px;
    pointer-events: none;
    cursor: pointer;
    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 2s linear;
    }

    @media (max-width: ${({ theme }) => theme.desktop}) {
        animation: App-logo-spin infinite 10s linear;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`


class Loading extends Component {
    render() {
        return (
            <NotificationContainer>
                <div>
                    <LoadingSpinnerImg src='/company.png' className="App-logo" alt="logo" />
                    <NotificationMessage>Loading...</NotificationMessage>
                </div>
            </NotificationContainer>
        )
    }
}

export default Loading;
