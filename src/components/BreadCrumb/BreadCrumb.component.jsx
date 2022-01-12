import React from 'react';

import './BreadCrumb.styles.scss';
import { useAuth } from '@providers/Auth';

function BreadCrumb(props) {
  const { authenticated } = useAuth();

  return (
    <ul className={'breadcrumb ' + props.className}>
      <li
        className={
          'breadcrumb__item ' +
          (props.selected === 'related' ? 'breadcrumb__item--selected' : '')
        }
        onClick={() => props.onSelectedChange('related')}
      >
        <h5>Related</h5>
      </li>
      {authenticated ? (
        <li
          className={
            'breadcrumb__item ' +
            (props.selected === 'favorites' ? 'breadcrumb__item--selected' : '')
          }
          onClick={() => props.onSelectedChange('favorites')}
        >
          <h5>Favorites</h5>
        </li>
      ) : null}
    </ul>
  );
}

BreadCrumb.defaultProps = {
  className: '',
  selected: 'related',
  onSelectedChange: null,
};

export default BreadCrumb;
