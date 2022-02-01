import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: rgb(34, 36, 38);

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 85vh;
`

export const IdeasContainer = styled.div`
    border: 1px solid red;
    flex: 1;
`

export const ImageLogoText = styled.img.attrs(props => ({
    src : "/lidealogo_text.png"
}))`
  height: 64px;
`

export const ImageLogo = styled.img.attrs(props => ({
    src : "/lidealogo.png"
}))`
  height: 200px;
`