import React from 'react';
import HeroData from './HeroData';
import GeneralData from './GeneralData';

function Personal() {
  return (
    <div id="Personal">
      <h1>General Data</h1>
        <GeneralData />
      <h1>Hero Data</h1>
        <HeroData />
    </div>
  );
}

export default Personal;
