module.exports = {
  extends: [
    require.resolve('./base'),
    require.resolve('./rules/strict'),
    require.resolve('./rules/react'),
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
};
