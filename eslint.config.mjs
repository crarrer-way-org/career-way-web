import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "**/*.css",
      "**/*.scss",
      "**/*.md",
      "**/*.yaml",
      "**/*.yml",
      "**/*.json",
      "!**/.eslintrc.json",
      "!**/.prettierrc.json",
      "**/*Dockerfile*",
      "**/*.txt",
      "**/*.sh",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "prefer-template": ["error"],
      semi: "error",
      "prefer-const": "error",
    },
  },
];

export default eslintConfig;
