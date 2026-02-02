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

## トラブルシューティング

### Claudeが`@claude`コマンドに応答しない場合

1. **GitHub Appの確認**
   - [Claude GitHubアプリ](https://github.com/apps/claude)がリポジトリにインストールされているか確認
   - 必要な権限（Contents、Issues、Pull requests）が許可されているか確認

2. **ワークフローの実行確認**
   - GitHubリポジトリの「Actions」タブでワークフローが実行されているか確認
   - エラーログがないか確認

3. **シークレットの確認**
   - `CLAUDE_API_KEY`がリポジトリのSecretsに正しく設定されているか確認
   - APIキーが有効で、十分な権限があるか確認

4. **Issueの内容確認**
   - Issueの本文に正確に`@claude`が含まれているか確認（`/claude`ではなく`@claude`）

5. **ワークフローファイルの確認**
   - `.github/workflows/claude.yml`が正しくコミット・プッシュされているか確認

### CIがClaudeのコミットで実行されない場合

- GitHub Appまたはカスタムアプリを使用していることを確認（Actionsユーザーではなく）
- ワークフロートリガーに必要なイベントが含まれていることを確認

## 参考リンク

- [Claude Code GitHub Actions ドキュメント](https://code.claude.com/docs/ja/github-actions)
- [Claude Code Action リポジトリ](https://github.com/anthropics/claude-code-action)
