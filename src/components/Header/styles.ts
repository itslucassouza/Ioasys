import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;

  @media screen and (min-width: 700px) {
    padding: 32px 110px;
    justify-content: space-between;
  }

  div {
    display: flex;
    align-items: center;
  }

  p {
    color: ${(props) => props.theme.colors.black};
    padding-left: 16px;
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: ${(props) => props.theme.font.sizes.xxlarge};
  }
`

export const Logout = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 8px;
  cursor: pointer;
`

export const Logo = styled.img`
  width: 105px;
  height: 36px;
`

export const UserName = styled.div`
  p {
    display: none;
  }

  @media screen and (min-width: 700px) {
    p {
      font-size: ${(props) => props.theme.font.sizes.small};
      display: block;
    }
  }

  span {
    font-weight: 800;
    padding-left: 03px;
  }
`
