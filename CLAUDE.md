# UI ライブラリ比較検討プロジェクト

## 概要

このリポジトリは、モダンな React UI ライブラリとスタイリングソリューションの比較検討を目的としています。

### ディレクトリ構造

- `radix-tailwind/`: Radix UI + Tailwind CSS の実装（完成済み）
- `react-aria-panda/`: React Aria + Panda CSS の実装（実装中）

## 実装済みコンポーネント

## 技術スタック比較

### Radix UI + Tailwind CSS

- **Radix UI**: アクセシブルなヘッドレス UI コンポーネント
- **Tailwind CSS**: ユーティリティファーストの CSS フレームワーク
- **特徴**:
  - asChild パターンによる柔軟なコンポーネント合成
  - data 属性ベースのスタイリング
  - アニメーションライブラリとの統合が容易

### React Aria + Panda CSS

- **React Aria**: Adobe が開発するアクセシビリティ重視の UI ライブラリ
- **Panda CSS**: 型安全な CSS-in-JS ソリューション
- **特徴**:
  - より包括的なアクセシビリティサポート
  - cva（Class Variance Authority）によるバリアント管理
  - ビルド時の CSS 生成による高パフォーマンス

## 実装上の注意点

### 共通

1. **CSS 変数**: 両実装で同じ CSS 変数を使用し、デザインの一貫性を保つ
2. **サイズ**: Button、Input、Select の高さを統一（sm: 2rem, md: 2.25rem, lg: 2.5rem）
3. **カラーシステム**: oklch 色空間を使用した統一的なカラーパレット

### React Aria 特有の注意点

1. **forwardRef**: Button や Input の実装パターンに従って適切に使用
2. **slot 属性**: MenuTrigger などでは`slot="trigger"`を使用
3. **コンポーネントの有無**: Avatar など表示専用コンポーネントは提供されていない
4. **className**: ListBoxItem など一部のコンポーネントは関数形式の className を受け付けない

### Panda CSS 特有の注意点

1. **トークン定義**:
   - `tokens`は直接プロパティ値として使えない
   - `semanticTokens`として定義すると使いやすいが、過度に複雑にしない
   - デフォルトのスペーシングシステム（数値）を活用
2. **スタイルのマージ**: `cx()`関数を使用（`css.raw()`は外部スタイルオブジェクトに使用）
3. **レシピ vs カスケードレイヤー**:
   - レシピ: コンポーネントのバリアント管理に使用
   - カスケードレイヤー: グローバルスタイルに使用（@layer recipes は自動生成）
4. **postcss 設定**: `@pandacss/dev/postcss`プラグインが必要

## 開発コマンド

### 両プロジェクト共通

```bash
npm run dev     # 開発サーバー起動
npm run build   # ビルド
npm run lint    # リント実行
```

### react-aria-panda 特有

```bash
npm run prepare # Panda CSSのコード生成
```

## 今後の実装予定

- Label
- Popover
- NavLink
- レイアウトコンポーネント（Panda CSS のパターン活用）
- フォームバリデーション例
- 複雑なインタラクション例

## パフォーマンス・DX 比較ポイント

1. ビルドサイズ
2. ランタイムパフォーマンス
3. TypeScript 補完の品質
4. デバッグのしやすさ
5. スタイル拡張の柔軟性
6. アクセシビリティ対応の充実度
