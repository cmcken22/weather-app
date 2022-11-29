import React, { useEffect, useState } from 'react';
import { getConditions, getDayOfWeek } from '../../utils';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

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

export default EmptyState;