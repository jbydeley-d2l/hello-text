import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'hellotext',
  globalScript: 'src/global/index.ts',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
