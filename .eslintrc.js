module.exports = {
  extends: ["react-app", "plugin:sonarjs/recommended", "prettier"],
  plugins: ["prettier", "simple-import-sort", "sonarjs"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
