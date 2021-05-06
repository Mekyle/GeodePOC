import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Timeline = () => (
  <Main
    meta={
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
    }
  >
    <h1 className="font-bold text-2xl">Timeline</h1>
    <h2 className="font-semibold text-lg">Next js Boilerplate Features</h2>
    <p>Developer experience first:</p>
  </Main>
);

export default Timeline;
