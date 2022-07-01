module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    /// [字體]
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['/microsoft jhenghei/', '/FontAwesome/'],
      },
    ],

    // [css-屬性]
    //樣式層級高不可在低層級前
    'no-descending-specificity': [null, { ignore: ['selectors-within-list'] }],
    // 屬性最多十個
    'declaration-block-single-line-max-declarations': 20,
    // 屬性重複
    'declaration-block-no-duplicate-properties': true,
    // 簡寫屬性冗長方式
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['/flex/', '/padding/', '/border/'] },
    ],
    // 不允許調用中的方向值linear-gradient()無效
    'function-linear-gradient-no-nonstandard-direction': null,
    // [css-樣式規則]
    // 為函數名指定小寫或大寫（可自動修復）
    'function-name-case': 'lower',
    // 重複樣式
    'no-duplicate-selectors': null,
    // 限制嵌套深度
    'max-nesting-depth': 4,
    // 指定縮進（可自動修復）
    indentation: 2,
    // 指定類選擇器的模式
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    // 限制一個選擇器中 ID 選擇器的數量。
    'selector-max-id': 2,
    // 小於1的小數點
    'number-leading-zero': 'never',
    // [css-層級]
    'selector-max-compound-selectors': 10,
    'rule-empty-line-before': 'never-multi-line',

    // [符號類]
    // 空格
    'block-no-empty': [true, { ignore: ['comments'] }],
    // 關閉大括號後面的空白
    'block-closing-brace-empty-line-before': 'never',
    // 分號前後
    'declaration-block-semicolon-space-after': 'never-single-line',
    'declaration-block-semicolon-space-before': 'never-single-line',
    // 結束後分號
    'declaration-block-trailing-semicolon': 'always',
    // [顏色類]
    // 顏色代碼
    'color-hex-length': 'short',
    // 為適用的顏色功能指定現代或傳統符號（可自動修復）
    'color-function-notation': 'legacy',
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class', 'id'],
      },
    ],
    // "max-line-length":null,
    'alpha-value-notation': 'number',

    // [偽元素]
    // 未知的偽元素選擇器
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['input-placeholder'] }],
    // 未知的偽類選擇器
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['/./', '-webkit-'] }],
    // 'order/order': [
    //   // CSS規則
    //   'declarations',
    //   // 變量$variable
    //   'dollar-variables',
    //   // 嵌套規則a { span {} }
    //   'rules',
    //   // div { @media () {} }
    //   'at-rules',
    //   // 自定義屬性--property: 10px;
    //   'custom-properties',
    // ],
    'scss/no-global-function-names': null,
    'scss/comment-no-empty': null,
    // [自動排序]
    'order/properties-alphabetical-order': null, // 不照字母順序排序
    'order/properties-order': [
      // 設定自己的排序
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'color',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
