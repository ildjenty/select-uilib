## アンケート結果を踏まえて

Headless ライブラリは

- Radix UI
- React Aria

CSS フレームワークは

- Tailwind CSS
- Panda CSS

を使い、試しに簡易な Slack 風 UI を実装。

---

## 実際に使ってみて

### Panda CSS

#### 所感

とにかく多機能で、かつ型安全な実装が可能な CSS フレームワークです。ただその分学習コストも非常に高いです。少し触ってみただけでは全く使いこなせる気がしません。今回のサンプル実装においても、Panda の良さの 10%も引き出せてないと思います。ですがその分使いこなせればチーム開発においては非常に厳格でスケーラブルなスタイリングが可能だと言えそうです。

Takamagari 個人としては、デザイナーとハイコンテキストなコミュニケーションを取れるレベルで UI/UX に精通したエンジニアがいない場合は採用したくないフレームワークだと感じました。今回採用するとしたら Panda のことを徹底的に調査し、研究した内容をしっかり横展開する時間を確保しないと難しく、非常にチャレンジングになると思います。

#### 詳細

主に以下の機能を組み合わせて実装していくイメージです。

- [Token](https://panda-css.com/docs/theming/tokens)...いわゆるセマンティックトークン
- [Recipe](https://panda-css.com/docs/concepts/recipes)...デザインとしてまとまりのある単位のスタイル(base と Variant の定義)
- [Pattern](https://panda-css.com/docs/concepts/patterns)...vstack, hstack など Chakra にもあるレイアウトパターンの定義
- [Utility](https://panda-css.com/docs/customization/utilities)...Tailwind CSS 風なユーティリティの定義

通常、CSS in JS でここまでの機能分けはされていませんが、実際の UI/UX デザインにおいて考えるべきことがそれぞれ明確に機能として表現されており、まさに「誰もが迷わず UI を実装するための仕組みづくり」を実現するためにあるようなフレームワークだと思います。

型安全に記述できるため、className や CSSProperty の Typo で時間を取るということはないでしょう。Tailwind と比較した場合のみの話になりますが、Tailwind は className が読みにくくなるため Typo を探すのに一手間かかるのに対し、Panda の場合は型エラーで即時検出できるので、開発体験・可読性も良いはずです。

懸念点として、基本的に静的に検出可能なスタイリングがメインのため動的なスタイリングには不向きなことが挙げられますが、定義したトークンなどから外れるようなスタイリングはかなり例外的な実装であるため、大抵の場合は事前に定義されたトークンなどで対処できると思います。

ただ、先述したようにとにかく学習コストが高く、各機能の使い所を見極めながら仕組みを作る必要があり、安易に採用すると人によって使う関数が揺れたりして逆に無秩序になってしまいそうです。全ての機能の適切な使い所を熟知した上で、チームに合わせたスタイルシステムを考えていく必要があります。

---

### Tailwind CSS

#### 所感

ユーティリティファーストであること以外特に特筆すべき点はないですが、現在圧倒的なシェアを持つデファクトスタンダードなことから、多くの開発でユーティリティファーストが有用であると証明されていると言えるでしょう。

Takamagari も長いこと使っており、最初は className が汚れまくり可読性が低くなることにかなり抵抗があったものの、徹底的なコンポーネント化と tailwindMerge を使った className の改行(本サンプルでもやっています)である程度可読性の低さはカバーできる上、文書的な意味を持たない HTML 構造に一々命名を考える必要がないことによるストレスのなさが他のデメリットを帳消しにしてくれるため、Tailwind 未経験者が想像しているほど負債にならないと思っています。

ただ、好みが分かれるフレームワークなのは間違い無いです。

#### 詳細

特段豊富な機能が色々あるわけでもなく、className を覚えるだけなので研究する必要もないです。

今回選定する背景である「「誰もが迷わず UI を実装するための仕組みづくり」を考えた時、Panda が提供している Pattern や Recipe といった概念は独自で土台を設計する必要があるのがネックになりそうです。

また、className が長くなることは改行でカバーできるとはいえ、

- 何個の class 名で改行するのか
- 1 行内である程度 CSS Property の分類をそろえるのか

といったことは Tailwind では考慮されていないため(記述順を言い出したらどの CSS フレームワークでも同じなのですが)、Panda に比べるとフレームワークの外で考えるルールが多くなるかもしれません。

また、デザインシステムの一部としてコンポーネントを作る時、そのコンポーネントでは上書きして欲しくないスタイルというのが必ず生じるため、安易に className を上書きさせないために Variant で隠蔽するといった工夫も別途必要になってきます。(Variant 定義 は[CVA](https://cva.style/docs)が使われることが多いようです)

仕組みづくりはできなくはないものの、それは Tailwind の外で考えることになるため、Panda を学習するのと同じくらいの労力を使って設計を考える必要があるかもしれません。

このリポジトリのバージョンだと turbo で Next.js を立ち上げると上手くビルドできないようです。

---

### [Radix UI](https://www.radix-ui.com/)

#### 所感

React Aria よりもシンプルなコンポーネント群 で、使ったことない人でも簡単に取り入れられるライブラリだと思います。React Aria と同様キーボード操作などのアクセシビリティのことを気にせず UI の実装ができます。

ただ最近は開発者が新しく[Base UI](https://base-ui.com/react/overview/about)というライブラリの開発に注力しているということもあり、今後はレガシー化していく可能性もあります。一方でいい意味で枯れているとも言えるでしょう。

#### 詳細

React Aria と明確に異なる点として、[Composition](https://www.radix-ui.com/primitives/docs/guides/composition)が可能なことが挙げられます。Radix UI の各コンポーネントが持っている asChild prop を使うことで、Radix のコンポーネントが隠蔽しているイベントハンドラ子要素に合成することができます。それほど出番は多くありませんが、例えば通常 button として描画される Tooltip のトリガーを a タグにしたい場合などに役立ちます。

とはいえこれがメリットになるかというとそうでもなく、Tooltip の話でいうと React Aria は useTooltipTrigger からイベントハンドラを得ることができるため、Radix UI とは違う形で描画するタグを変更することができます。むしろ、Next.js の Link や Image などの特殊コンポーネントと合成する場合は React Aria の hooks API を利用した方が実装は綺麗かもしれません。

また、こちらは DatePicker や Calendar 系が全くないため、別のライブラリを使用する必要があります。

全体として、シンプルな UI を実装するには十分ですが、少しでも複雑な UI の実装が必要になると少し力及ばずなライブラリです。とはいえ Calendar 以外のコンポーネントは充実しているため、Radix で事足りる仕様なら採用しても全く問題ないと思います。

---

### [React Aria](https://react-spectrum.adobe.com/react-aria/index.html)

#### 所感

全体的にオールインワンな感じかつ疎結合な実装を保てるような API になっており、よく考えられたライブラリだなと思います。ただし、学習コストは非常に高そうで、使いこなすには研究が必要そうです。

Takamagari 個人としては、今後の新規プロジェクトなら React Aria をまず第 1 選択肢にするだろうと思います。

#### 詳細

component ベース、hooks ベース両方の API があり、汎用性は Radix UI よりも高そうです。ただし今回は一部の component と一部の特殊な hooks しか試せていません。

Radix UI よりも学習コストが高そうですが、より複雑なインターフェースをフルアクセシブルに実装するには Radix UI よりも優れていると言えそうです。

特に Form 系や Calendar、DateTime 系など、細かい UX を考え出すと実装が非常に面倒なタイプのものが充実しており、React Aria さえあれば他の UI ライブラリは必要ないと言えるくらい痒い所に手が届きそうです。

[NumberField](https://react-spectrum.adobe.com/react-aria/NumberField.html), [SearchField](https://react-spectrum.adobe.com/react-aria/SearchField.html), [DateField](https://react-spectrum.adobe.com/react-aria/DateField.html), [TimeField](https://react-spectrum.adobe.com/react-aria/TimeField.html)など、UX 的にも開発者目線的にもよく考えられています。

他にも[useHover](https://react-spectrum.adobe.com/react-aria/useHover.html)や[useLongPress](https://react-spectrum.adobe.com/react-aria/useLongPress.html)の Interactions は、ブラウザ間の差異を徹底的に無くす(アクセシビリティ)ことや、Event Propagation のせいで親子コンポーネントが密結合になったり、useRef を使う面倒な実装をいい感じにする hooks として優れており、ポータビリティの高い複雑なインタラクションを持つコンポーネント実装が楽にできそうです。

小さな例ですが [useFocusWithin](https://react-spectrum.adobe.com/react-aria/useFocusWithin.html) を試しているので、react-aria-panda,radix-tailwind それぞれの src/features/chats/message-form の実装の違いを参照してみると、Interactions がどういうものか少しわかると思います。

一つ懸念点としては、front-conc では React Hook Form (RHF)が使われていますが、React Aria のいいところを残しつつ組み合わせるためには RHF の Controller を多用する必要があり、少々鬱陶しいコードになってしまいそうです。([公式のサンプル](https://react-spectrum.adobe.com/react-aria/forms.html#react-hook-form))

ただ、React Aria 自体が[Server Actions](https://react-spectrum.adobe.com/react-aria/forms.html#react-hook-form)との組み合わせもできるように作られており、大変ですが RHF を剥がすことで強みを活かせるかもしれません。

React Aria は Form のバリデーションなどに対応する API も多く備わっているので、これらも活かせるといいと思います。しかし RHF の useArrayField が必要な仕様だと 別途工夫が必要そうです。
