# actions_demo

GitHub ActionsでClaude Codeを使用するデモプロジェクトです。

## セットアップ

### 1. Claude GitHubアプリのインストール

1. [Claude GitHubアプリ](https://github.com/apps/claude)をリポジトリにインストール
2. 以下の権限を許可：
   - **Contents**: 読み取り＆書き込み
   - **Issues**: 読み取り＆書き込み
   - **Pull requests**: 読み取り＆書き込み

### 2. APIキーの設定

1. GitHubリポジトリの **Settings** → **Secrets and variables** → **Actions** に移動
2. **New repository secret** をクリック
3. 名前: `CLAUDE_API_KEY`
4. 値: あなたのAnthropic APIキーを入力
5. **Add secret** をクリック

### 3. 使用方法

#### IssueでClaudeを呼び出す

新しいIssueを作成し、本文に `@claude` を含めます：

```
@claude 計算機に累乗機能を追加してください
```

#### PRコメントでClaudeを呼び出す

PRのコメントに `@claude` を含めます：

```
@claude このコードをレビューしてください
```

## プロジェクト構造

```
actions_demo/
├── .github/
│   └── workflows/
│       └── claude.yml      # GitHub Actionsワークフロー
├── src/
│   ├── calculator.js       # 計算機のサンプルコード
│   └── calculator.test.js  # テストファイル
├── CLAUDE.md               # Claude Codeのガイドライン
├── package.json            # Node.jsプロジェクト設定
└── README.md               # このファイル
```

## デモの実行方法

1. このリポジトリをGitHubにプッシュ
2. 新しいIssueを作成し、`@claude` を含める
3. Claudeが自動的に応答し、必要に応じてPRを作成します

## 参考リンク

- [Claude Code GitHub Actions ドキュメント](https://code.claude.com/docs/ja/github-actions)
- [Claude Code Action リポジトリ](https://github.com/anthropics/claude-code-action)
