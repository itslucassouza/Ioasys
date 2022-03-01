import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  padding: 0px 16px;
  z-index: 105;
  position: fixed;
  height: 100rem;

  @media screen and (min-width: 800px) {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .button-content {
      width: 100%;
    }
  }

  .button-content {
    display: flex;
    justify-content: flex-end;
  }
`

export const Title = styled.div`
  font-weight: 500;
  font-size: ${(props) => props.theme.font.sizes.xxlarge};
  margin-top: 20px;

  line-height: 40px;
  color: ${(props) => props.theme.colors.black};

  @media screen and (min-width: 800px) {
    margin: 0px;
  }
`

export const Subtitle = styled.div`
  font-size: ${(props) => props.theme.font.sizes.small};
  line-height: 20px;
  color: ${(props) => props.theme.colors.mainColor};
`

export const ModalContent = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10px;
  height: 80rem;
  padding: 40px 0;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 769px;
    height: 458px;
    padding: 40px;
  }
`

export const BookValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 28px;
`

export const BookInfos = styled.div`
  h1 {
    font-weight: 500;
    font-size: ${(props) => props.theme.font.sizes.medium};
    padding: 4px 0;
    line-height: 28px;
  }
`

export const BookContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`

export const Labels = styled.div`
  p {
    font-weight: 500;
    font-size: ${(props) => props.theme.font.sizes.xsmall};
    color: ${(props) => props.theme.colors.black};
  }
`

export const Infos = styled.div`
  p {
    font-size: ${(props) => props.theme.font.sizes.xsmall};
    color: ${(props) => props.theme.colors.lightGray};
  }
`

export const Reviews = styled.div`
  margin-top: 12px;
`

export const ReviewsTitle = styled.h1`
  font-weight: 500;
  font-size: ${(props) => props.theme.font.sizes.small};
  line-height: 28px;
`

export const ReviewsContent = styled.div`
  font-size: ${(props) => props.theme.font.sizes.small};
  color: ${(props) => props.theme.colors.lightGray};
  max-height: 75px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    margin: 05px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: 20px;
  }
`
export const Book = styled.img`
  width: 240px;
  height: 300px;

  @media screen and (min-width: 800px) {
    width: 240px;
    height: 331px;
  }
`

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin: 16px;
`
