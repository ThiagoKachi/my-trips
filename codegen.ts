
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/clb2vfipg03gu01um9n6l07ly/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/graphql.ts": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
