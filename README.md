# 短網址產生器 url-shortener
此專案為 ALPHA Camp Dev C3 M6 指標作業 所製作。  
運用 Node.js 與 Express 建立本機伺服器，在伺服器運行期間可執行短網址的產生與重新導向。

## 版本
- v1.0.0 (目前版本)

## 功能 (Features)
- 依輸入網址產生對應的短網址。
- 以 json 檔儲存網址資料。
- 將短網址導向原址。
- 短網址之 id 無效時，導回短網址生成器首頁 `http://localhost:3000`
- 複製按鈕可一鍵複製轉換後的短網址。

## 執行環境 (RTE)
[Node.js](https://nodejs.org/) (v18.18.0)  
ℹ️ *執行此專案前，需安裝 Node.js。*

## 安裝 (Installation)
1. 開啟終端機 (Terminal)，cd 至存放本專案的資料夾，執行以下指令將本專案 clone 至本機電腦。

```
git clone https://github.com/letitia-chiu/url-shortener.git
```

2. 進入此專案資料夾

```
cd url-shortener
```

3. 執行以下指令以安裝套件

```
npm install
```

4. 執行下列指令來啟動伺服器 

```
npm run dev
```

當 Terminal 出現以下字樣，即代表伺服器啟動成功：  
`Express server is running on http://localhost:3000`  
現在，您可開啟任一瀏覽器輸入 http://localhost:3000 來使用短網址生成器。

## 使用工具 (Tools)
- 開發環境：[Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/)
- 應用程式框架：[Express](https://www.npmjs.com/package/express)
- 樣版引擎：[Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- 字體圖標工具：[Font Awesome](https://fontawesome.com/)

## 開發者 (Contributor)
[Letitia Chiu](https://github.com/letitia-chiu)
