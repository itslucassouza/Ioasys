import styled from 'styled-components'

export const Container = styled.main`
  background-image: url(/img/background-mobile.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:focus {
    outline-style: none;
  }

  input:-internal-autofill-selected {
    background-color: transparent;
  }

  @media screen and (min-width: 700px) {
    background-image: url(/img/bgdesk.png);
    display: flex;
    justify-content: center;
    padding: 0 115px;
    align-items: flex-start;

    div {
      width: 50%;
    }
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 50px;

  p {
    padding-left: 16px;
    font-style: normal;
    font-weight: 300;
    font-size: ${(props) => props.theme.font.sizes.xxlarge};
    font-weight: 300;
    color: #ffffff;
  }
`
export const InputsContent = styled.div`
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  width: 288px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px 16px 8px 13px;
  border-radius: 4px;
  margin-bottom: 16px;

  label {
    margin-bottom: 4px;
    color: #ffffff;
    font-size: ${(props) => props.theme.font.sizes.xsmall};
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`

export const InputsContentPassword = styled.div`
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  width: 288px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 8px 13px;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  button {
    color: ${(props) => props.theme.colors.secondary};
    width: 85px;
    height: 36px;
    font-weight: 700;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 44px;
    border: none;
    font-size: ${(props) => props.theme.font.sizes.small};
    cursor: pointer;

    @media screen and (min-width: 700px) {
      width: 85px;
    }
  }

  label {
    margin-bottom: 4px;
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.font.sizes.xsmall};
  }
  input {
    color: ${(props) => props.theme.colors.primary};
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`

export const Logo = styled.img`
  width: 15rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export const Error = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 90%;
  height: 48px;
  font-size: ${(props) => props.theme.font.sizes.small};

  @media (min-width: 900px) {
    width: 40%;
  }

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);

  border-radius: 4px;
  &::after {
    content: '';
    position: absolute;
    top: -07px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid rgba(255, 255, 255, 0.4);
  }
`
