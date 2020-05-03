import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './sytles';

export default function Background({ children }) {
  return (
    <Container colors={['#8305f0', '#058bf0']}>
      {children}
    </Container>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};
