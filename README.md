# blockly-kaleidoscope-server

blockly-kaleidoscope 用の HTTPS サーバーです。

## 起動方法

### 通常起動

```powershell
npm start
```

### 静的ファイルをリバースプロキシして起動

起動時に STATIC_PROXY_URL を設定すると、静的ファイルアクセスを指定先 URL にリバースプロキシします。

PowerShell:

```powershell
$env:STATIC_PROXY_URL="https://example-static-host/"
npm start
```

cmd.exe:

```bat
set STATIC_PROXY_URL=https://example-static-host/ && npm start
```
