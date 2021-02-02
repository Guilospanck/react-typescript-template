import { Button } from '@material-ui/core'

import styled from 'styled-components'

export const Loading = styled.div`
  display: flex;

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 15px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`

export const ButtonLoading = styled(Button)`
  color: #ffff;
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: none;
  text-transform: none;
  font-size: 16;
  border: 1px solid;
  line-height: 1.5;
  background-color: #65bcda !important;
  border-color: #65bcda !important;

  &:hover {
    background-color: #468398 !important;
    border-color: #468398 !important;
    box-shadow: none !important;
  }

  &:active {
    box-shadow: none;
    background-color: #468398 !important;
    border-color: #468398 !important;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem #468398 !important,
  }
`
