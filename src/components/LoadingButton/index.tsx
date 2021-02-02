import React from 'react';

import { ButtonLoading, Loading } from './styles';

type Props = {
  isLoading: boolean;
  onClick?: () => void;
  type: "submit" | "button" | "reset";
  label: string;
};

const LoadingButton = ({ isLoading, onClick, type, label }: Props) => {
  return (
    <ButtonLoading type={type} onClick={onClick}>
      {isLoading
      ? (
        <Loading>
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </Loading>
      ) : (label)}
    </ButtonLoading>
  );
}

export default LoadingButton;
