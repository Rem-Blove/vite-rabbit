module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue'],
  rules: {
    '@typescript-eslint/promise-function-async': 'off',
   // 关闭驼峰命名规则
   'vue/multi-word-component-names': 0,
   // 去掉函数()前面的空格
   'space-before-function-paren': 'off'
  }
}
