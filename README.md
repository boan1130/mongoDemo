系統概觀
這是一個基於 React + TypeScript + Vite 的學生資料管理系統前端應用，提供完整的 CRUD 操作介面。
系統架構圖
graph TD
    subgraph Frontend [前端應用層]
        A[頁面組件] -->|使用| B[UI 組件]
        A -->|調用| C[API 服務]
        C -->|使用| D[Fetch 工具]
        E[路由] -->|管理| A
    end

    D -->|HTTP| F[後端 API]
    CRUD 操作流程
    sequenceDiagram
    participant U as 用戶
    participant F as 前端
    participant B as 後端

    %% Create 流程
    rect rgb(200, 250, 200)
    U->>F: 點擊"新增學生"
    F->>F: 顯示輸入表單
    U->>F: 填寫學生資料
    F->>B: POST /api/students
    B-->>F: 返回響應
    F-->>U: 顯示結果
    end

    %% Read 流程
    rect rgb(200, 220, 250)
    U->>F: 訪問學生列表
    F->>B: GET /api/students
    B-->>F: 返回數據
    F-->>U: 顯示列表
    end

    %% Update/Delete 流程
    rect rgb(250, 220, 200)
    U->>F: 選擇操作
    F->>B: PUT/DELETE /api/students
    B-->>F: 返回響應
    F-->>U: 更新顯示
    end
   
    專案結構
    src/
├── assets/           # 靜態資源
│   └── react.svg
├── components/ui/    # UI 元件
│   ├── button.tsx
│   ├── card.tsx
│   └── select.tsx
├── enum/            # 列舉定義
│   └── api.ts
├── interface/       # 介面定義
│   ├── resp.ts
│   └── Student.ts
├── router/          # 路由配置
│   └── router.tsx
├── style/           # CSS 樣式
│   ├── App.css
│   └── index.css
├── utils/           # 工具函數
│   └── fetch.ts
└── view/            # 頁面元件
    ├── all.tsx
    ├── App.tsx
    ├── home.tsx
    ├── insert.tsx
    └── update.tsx

    功能頁面

首頁 (home.tsx)
學生列表頁 (all.tsx)
新增學生頁 (insert.tsx)
更新學生資料頁 (update.tsx)

安裝與執行
前置需求

Node.js 14.x+
npm 或 yarn

安裝步驟
1.安裝依賴 npm install
2.設定環境變數 創建 .env 檔案：
VITE_API_URL=後端API網址
3.啟動開發服務器 npm run dev
4.建置生產版本 npm run build

技術棧

React 18
TypeScript
Vite
Tailwind CSS
React Router v6
