import React from 'react';

import SignInView from './views';
import useSignInViewModel from './viewModels/signinViewModel';

const SignIn = () => {
    const signinViewModel = useSignInViewModel();

    return <SignInView viewModel={signinViewModel} />;
};

export default SignIn;
