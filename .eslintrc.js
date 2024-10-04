module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"],
          ["@ui-components", "./src/app/ui-components"],
          ["@screens", "./src/app/(screens)"],
          ["@assets", "./assets"],
          ["@store", "./src/app/store"],
          ["@api", "./src/app/api"],
          ["@utils", "./src/app/utils"],
        ],
        extensions: [".ts", ".js", ".json"],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        "comma-dangle": "off",
        trailingComma: "es5",
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "no-nested-ternary": "error",
    "no-else-return": "error",
    "no-async-promise-executor": "error",
    "no-unreachable-loop": "error",
    "no-constant-condition": "error",
    "no-console": "error",
  },
};
