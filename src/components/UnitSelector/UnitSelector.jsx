import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UnitSelector = ({ onUpdateUnit, unit }) => {
  const [fahrenheit, setFahrenheit] = useState(unit === 'F');

  const handleUpdateUnit = () => {
    setFahrenheit(prev => {
      const next = !prev;
      if (onUpdateUnit) onUpdateUnit(next ? 'F' : 'C');
      return next;
    });
  }

  return (
    <div className='unit-selector'>
      <p>Show tempurature in Celcius</p>
      <label className="switch">
        <input type="checkbox" onChange={(e) => handleUpdateUnit()}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

UnitSelector.defaultProps = {
  unit: 'F'
}

UnitSelector.propTypes = {
  onUpdateUnit: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
}

export default UnitSelector;