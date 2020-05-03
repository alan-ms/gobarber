import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import logo from '~/assets/react.png';
import Background from '~/components/Background';
import {
  Container, ImageLogo, Form, FormInput, SubmitButton, SignLink, SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() { }

  return (
    <Background>
      <Container>
        <ImageLogo source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            placeholder="Digite seu e-mail"
            onSubmitEditing={() => { passwordRef.current.focus(); }}
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
        <SignLink onPress={() => { navigation.navigate('SignUp'); }}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
