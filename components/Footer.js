import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Foot>
            <Container>
                <Logo>
                    <img src="/images/logo.png" alt="Logo" />
                    <div>
                        <h1>DEV<span>Friend</span>.io</h1>
                        <h4>Learn Programming by building projects</h4>
                    </div>
                </Logo>
                <Links>
                    <section>
                        <h1>Web Development Projects</h1>
                        <h1>Mobile Development Projects</h1>
                        <h1>Python Projects</h1>
                    </section>
                    <section>
                        <h1>Find Mentors</h1>
                        <h1>Become a Mentor</h1>
                        <h1>Contact Us</h1>
                    </section>
                </Links>
            </Container>
            <hr />
            <ContainerSmall>
                <h1>Made with ❤</h1>
                <Links>
                    <i className="fab fa-youtube-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github-square"></i>
                </Links>
            </ContainerSmall>
        </Foot>
    )
}

const Foot = styled.footer`
    height: 40vh;
    background-color: #F6FBFF;
    width: 100%;
    padding: 5rem;
`


const Container = styled.div`
    max-width: 1720px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerSmall = styled(Container)`
    height: max-content;
    padding: 2rem;

    & > h1 {
        font-weight: 700;
        font-size: 2rem;
    }
`

const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div > h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 900;

        & > span {
            color: var(--yellow);
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    & > div > h4 {
        font-size: 1rem;

        @media (max-width: 768px) {
            display: none;
        }
    }

    & > img {
        margin: 0 1rem;
        height: 6vh;
    }
`
const Links = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    & > i {
        font-size: 3rem;
        margin: 0 2rem;
    }

    & > section {
        margin: 0 2rem;

        & > h1 {
            cursor: pointer;
            font-weight: 400;
            font-size: 1.2rem;
            margin: 1rem 0;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`


export default Footer
