module.exports = {
  extends: [
    './base',
    './rules/strict',
    './rules/react',
    './rules/typescript',
  ].map(require.resolve),
  rules: {},
};
