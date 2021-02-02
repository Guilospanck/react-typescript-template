import React from 'react';
import LoadingButton from '~/components/LoadingButton';

import { Container, Content, TransitionGroup, Input } from './styles';

type Props = {
  viewModel: any
};

const SignInView = ({ viewModel }: Props) => {

  return (
    <TransitionGroup>
      <Container>
        <div style={{ color: 'white' }}>Hello from SignIn View</div>
        <Content>
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => viewModel.formControl(e)}>
            <LoadingButton isLoading={true} type="submit" label="Acessar" />
          </form>
        </Content>
      </Container>
    </TransitionGroup>
  );

};

export default SignInView;
