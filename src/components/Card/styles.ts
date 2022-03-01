import styled from 'styled-components'

export const Card = styled.article`
  width: 100%;
  height: 160px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 16px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  cursor: pointer;

  &&:hover {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1.01);
  }

  @media screen and (min-width: 700px) {
    height: 140px;
  }
`

export const Infos = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: ${(props) => props.theme.font.sizes.small};
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${(props) => props.theme.font.sizes.xsmall};
    line-height: 20px;
    color: ${(props) => props.theme.colors.mainColor};
  }
`

export const Details = styled.div`
  margin-top: 10px;

  @media screen and (min-width: 700px) {
    margin-top: 05px;
  }

  p {
    width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: ${(props) => props.theme.font.sizes.xsmall};
    line-height: 20px;
    color: ${(props) => props.theme.colors.lightGray};
  }
`

export const Book = styled.img`
  margin-right: 16px;
  width: 81px;
  height: 122px;
`
