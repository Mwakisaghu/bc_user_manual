// src/components/TransparentDiv.js

import React from 'react';

const TransparentDiv = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'transparent' }}>
      {children}
    </div>
  );
};

export default TransparentDiv;
