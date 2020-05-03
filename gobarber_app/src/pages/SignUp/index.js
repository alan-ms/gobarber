import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import logo from '~/assets/react.png';
import Background from '~/components/Background';
import {
  Container, ImageLogo, Form, FormInput, SubmitButton, SignLink, SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() { }

  return (
    <Background>
      <Container>
        <ImageLogo source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => { emailRef.current.focus(); }}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => { passwordRef.current.focus(); }}
            ref={emailRef}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            returnKeyType="send"
            placeholder="Sua senha secreta"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => { navigation.navigate('SignIn'); }}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
