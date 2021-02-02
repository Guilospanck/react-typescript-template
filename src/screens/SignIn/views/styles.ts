import styled from 'styled-components'
import { TextField } from '@material-ui/core/'

export const TransitionGroup = styled.div`
  width: 100%;
  height: 100%;

  background: black;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 100%;

  opacity: 0.3;
  position: absolute;

  @media (max-width: 480px) {
    height: 100%;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;

  video{
    z-index: -1000;
    zoom: 150%;

    position: fixed;
    opacity:0.3;
    padding:0px;
  }

  /* Telefones em paisagem e abaixo */
  @media (max-width: 480px) {
    height: 100%;
  }

  /* Telefones em paisagem a tablet em retrato */
  @media (min-width: 481px) and (max-width: 560px) {
    height: 100%;
  }

  /* Telefone em retrato e tablete a paisagem */
  @media (min-width: 595px) and (max-width: 979px) {
    height: 100%;
  }

  /* Desktop */
  @media (min-width: 980px) {
    height: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  img {
    max-width: 250px;
    width: 100%;
    animation: transitionInitial 1.2s;

  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    animation: transitionInitial 1s;

    span {
      align-self: flex-start;
      color: red;
      margin-bottom: 5px;
      font-weight: bold;
    }

    div {
      width:100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    span {
      align-self: flex-start;
    }

  }

  button {
    span {
      color: #fff
    }
  }

  a {
    color: #fff;
    font-size: 18px;
    opacity: 0.8;
    letter-spacing: 1.1px;
    margin-top: 20px;

    &:hover {
      opacity: 1;
      justify-content:space-around

    }
  }

  @keyframes transitionInitial {
    0% {
      opacity: 0;
      transform: translateX(-50%)
    }
    100% {
      opacity: 1;
      transform: translateX(0)
    }
  }

  input:-internal-autofill-selected {
    background: red,
  }
`

export const Input = styled(TextField)` /* div MuiFormControl-root*/
  label {
    color: #fff !important;
  }

  div {
    input {
      border-radius: 6px;
      color: #fff !important;
    }
    fieldset {
      border: 1px solid #fff !important;
    }
  }
`
