module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // Disable the no-explicit-any rule
    "@typescript-eslint/no-unused-vars": "warn", // Downgrade unused vars to warnings instead of errors
  },
}; 