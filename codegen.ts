import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "src/**/*.ts",
  generates: {
    "types.ts": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "types.ts",
        folder: "__generated__",
      },
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: false,
          defaultValue: false,
        },
        arrayInputCoercion: false,
        extractAllFieldsToTypes: true,
        printFieldsOnNewLines: true,
        omitOperationSuffix: true,
        namingConvention: "keep",
      },
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
