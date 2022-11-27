// App.stories.tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import App from './ui/app/App';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;
