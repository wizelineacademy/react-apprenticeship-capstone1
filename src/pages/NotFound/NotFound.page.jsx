import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NotFound.styles.scss';

function NotFound(props) {
  return (
    <section data-testid={props['data-testid']} className="not-found-page">
      <FontAwesomeIcon
        icon={['far', 'frown']}
        size="7x"
        className="not-found-page__icon--color-primary"
      />
      <h1>Sorry!</h1>
      <h2>Page not found</h2>
      <p>Sorry we didn&apos;t find the page you were looking for.</p>
    </section>
  );
}

NotFound.defaultProps = {
  'data-testid': '',
};

export default NotFound;
