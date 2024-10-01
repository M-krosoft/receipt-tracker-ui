module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "no-shadow": "error",
    "no-nested-ternary": "error",
    "no-else-return": "error",
    "no-async-promise-executor": "error",
    "no-unreachable-loop": "error",
    "no-constant-condition": "error",
    "no-console": "error",
  },
};
