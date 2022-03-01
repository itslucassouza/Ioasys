import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.lightBg};
  height: auto;
  @media screen and (min-width: 700px) {
    background-image: url(/img/bghome.png);
  }
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 0 22px;

  @media (min-width: 923px) {
    display: grid;
    align-items: center;
    grid-template-columns: 272px 272px 272px 272px;
    padding: 0 100px;
  }

  @media screen and (max-width: 1150px) and (min-width: 880px) {
    display: grid;
    align-items: center;
    grid-template-columns: 272px 272px 272px;
    padding: 0 22px;
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 700px) {
    width: 100%;
    justify-content: flex-end;
    padding: 0 105px;

    p {
      position: absolute;
      right: 166px;
    }
  }

  p {
    margin: 0 16px;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`
export const PrevBtn = styled.img`
  width: 32px;
  height: 32px;
  margin: 10px 02px;
`
