module.exports = {
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    bracketSpacing: true,
    jsxBracketSameLine: false,
    printWidth: 180,
    trailingComma: 'none',
    arrowParens: 'avoid',
    proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    endOfLine: 'auto', // 结尾是 \n \r \n\r auto
    htmlWhitespaceSensitivity: 'ignore',
    jsxSingleQuote: true // 在jsx中使用单引号代替双引号
}
