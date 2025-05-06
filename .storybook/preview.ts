import type { Preview } from '@storybook/react';
import '../src/app/globals.css';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // Next.js App Router 対応
    },
  },
};

export default preview;