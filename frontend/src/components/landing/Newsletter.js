import React, { Component } from 'react';
import styled from 'styled-components';
const NewsletterContainer = styled.div`
    margin: 0 0 -20px;
    background-color: ${({ theme }) => `${theme.colors.hoverBg}`};
    padding: 5em 30vw;
    p{
        font-family: 'Raleway', sans-serif;
        *{
            font-size: 18px;
            padding: 15px;
        }
        input{
            font-size: 18px;
            width: 50%;
        }
        textarea{
            width: 100%;
            height: 20vh;
        }
        input[type="submit"]{
            width: 200px;
            font-size: 18px;
            background-color: ${({ theme }) => `${theme.colors.primary}`};
            border: 0px solid white;
            color: black;
            padding: 10px;
            :hover{
                background-color: transparent;
                color: black;
                border: ${({ theme }) => `3px solid ${theme.colors.primary}`};
            }
        }
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
        padding: 5em 30vw;
        *{
            padding: 1-px;
        }
        p{
            textarea{
                height: 13vh;
            }
        }
    }
`

class Newsletter extends Component {
    render() {
        return (
            <NewsletterContainer>
                <form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <input type="text" id="name" name="name" required placeholder='Enter your name...' />
                        <input type="email" id="email" name="email" required placeholder='Enter your email...' />
                    </p>
                   
                    <p>
                        <textarea id="message" name="message" required placeholder='Enter your message...'></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Submit message" />
                    </p>
                </form>

            </NewsletterContainer>
        )
    }
}

export default Newsletter;
