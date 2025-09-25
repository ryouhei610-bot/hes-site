# Happy Error Studio — One‑page Site

このフォルダをそのまま公開すれば、HESのシンプルな公式サイトとして使えます。

## 公開方法
- **GitHub Pages**: このフォルダを新規リポに入れて、Settings → Pages → Deploy from branch。
- **Netlify / Vercel**: ドラッグ&ドロップかリポ連携でOK（Build不要）。
- **さくら/Xserverなど**: `index.html` をドキュメントルートにアップロード。

## カスタム
- テキスト編集: `index.html`（理念/サービス/実績/プロフィール/お問い合わせ）
- 色味: `styles.css` の `--brand` / `--accent` を変更
- 画像差し替え: `assets` 内のファイルを差し替え（同名でもOK）
- 連絡フォーム: `index.html` の `<form action="...">` を自分のFormspree URLやGoogleフォームURLへ変更

## ライセンス
自由に編集・再配布可。
