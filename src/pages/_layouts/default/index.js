import React from 'react';
import PropTypes from 'prop-types';

// Component
import Header from '~/components/Header';

// Styled Components
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
