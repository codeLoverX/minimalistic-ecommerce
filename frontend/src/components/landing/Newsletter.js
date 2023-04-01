import React, { Component } from 'react';
import styled from 'styled-components';
const NewsletterContainer = styled.div`
    margin: 0 0 -20px;
    background-color: ${({ theme }) => `${theme.colors.hoverBg}`};
    padding: 3vh 5vw;
    p{
        font-family: 'Raleway', sans-serif;
        *{
            font-size: 18px;
            padding: 15px;
        }
        input{
            font-size: 18px;
            width: 100%;
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
        padding: 2em 30vw;
        *{
            padding: 15px;
        }
        p{
            textarea{
                height: 13vh;
            }
        }
        input{
            width: 50% !important;
        }
    }
`

class Newsletter extends Component {
    
    constructor(){
        super()

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            isSubmit: false, error: false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
    
        const myForm = event.target;
        const formData = new FormData(myForm);
    
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => {
            this.setState({isSubmit: true, error: false})
          })
          .catch((error) => {
            this.setState({isSubmit: false, error: true})
          });
      };
    render() {
        return (
            <NewsletterContainer>
                {
                !this.state.isSubmit && !this.state.error && 
                <form name="contact" method="post" onSubmit={this.handleSubmit}>
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
                }
                {
                    this.state.isSubmit &&
                    <p>Successfully submitted your response</p>
                }
                 {
                    this.state.error &&
                    <p>Failed to submit your response</p>
                }
            </NewsletterContainer>
        )
    }
}

export default Newsletter;
