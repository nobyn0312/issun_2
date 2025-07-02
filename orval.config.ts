import { defineConfig } from "orval";

/**
 * Orval Configuration
 * @see https://orval.dev/reference/configuration/overview
 */
export default defineConfig({
  issunStore: {
    input: {
      target: './openapi.yaml',
    },
 output: {
      mode: 'tags-split',
      target: './src/gen/tan-stack-query/issunStore',
      schemas: './src/gen/types/issunStore',
      clean: true,
      mock: {
        type: 'msw',
        delay: false,
        useExamples: true,
        generateEachHttpStatus: true,
      },
      client: 'react-query',
      prettier: true,
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: './src/utils/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
});

