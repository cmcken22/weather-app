import React from 'react';
import PropTypes from 'prop-types';

const EmptyState = ({ title, subTitle }) => {
  return (
    <div className="empty-state">
      <div className='empty-state__icon' />
      {title && (
        <p className='empty-state__title'>{title}</p>
      )}
      {subTitle && (
        <p className='empty-state__sub-title'>{subTitle}</p>
      )}
    </div>
  );
}

EmptyState.defaultProps = {
  title: 'No data found!',
  subTitle: 'Please try later.'
}

EmptyState.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default EmptyState;