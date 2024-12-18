StudentHub Backend
專案簡介
這是一個基於 Express + TypeScript + MongoDB 的後端服務，提供完整的 RESTful API 接口，支援學生資料的 CRUD 操作。
系統架構圖
mermaidCopygraph TD
    A[Controller Layer] -->|使用| B[Service Layer]
    B -->|操作| C[MongoDB]
    D[Express Routes] -->|路由| A
    E[Middlewares] -->|處理| D
    B -->|使用| F[Utils]

專案結構
Copysrc/
├── abstract/       # 抽象類別
│   ├── Controller.ts
│   ├── Route.ts
│   └── Service.ts
├── controller/     # 控制器
│   ├── pageController.ts
│   └── UserController.ts
├── interfaces/     # 介面定義
│   ├── DBResp.ts
│   ├── MongoInfo.ts
│   └── Student.ts
├── middlewares/    # 中間件
│   └── log.ts
├── orm/schemas/    # 資料庫綱要
│   └── studentSchemas.ts
├── routers/       # 路由配置
│   ├── pageRoute.ts
│   └── UserRoute.ts
├── Service/       # 服務層
│   ├── PageService.ts
│   └── UserService.ts
└── utils/         # 工具函數
    ├── deepValid.ts
    ├── MongoDB.ts
    └── resp.ts


資料結構
typescriptCopyinterface Student {
    _id?: string,          // MongoDB ID
    userName: string,      // 使用者名稱
    sid?: String,         // 學號
    name: string,         // 學生姓名
    department: string,   // 科系
    grade: string,        // 年級
    class: string,        // 班級
    Email: string,        // 電子郵件
    absences?: number     // 缺席次數（選填）
}


API 規格
Base URL: http://127.0.0.1:2083/api/v1/user
typescriptCopyexport enum api {
    findAll = "http://127.0.0.1:2083/api/v1/user/findAll",
    getStudent = "http://127.0.0.1:2083/api/v1/user/getStudent",
    insertOne = "http://127.0.0.1:2083/api/v1/user/insertOne",
    updateStudent = "http://127.0.0.1:2083/api/v1/user/updateNameById",
    deleteStudent = "http://127.0.0.1:2083/api/v1/user/deleteById"
}


1. 查詢所有學生

路徑：/findAll
方法：GET
回應格式：

typescriptCopy{
    code: 200,
    message: "find success",
    body: Student[]
}


2. 查詢單一學生

路徑：/getStudent
方法：GET
回應格式：

typescriptCopy{
    code: 200,
    message: "success",
    body: Student
}


3. 新增學生

路徑：/insertOne
方法：POST
請求體：Student 物件
回應格式：

typescriptCopy{
    code: 200,
    message: "success",
    body: Student
}


4. 更新學生姓名

路徑：/updateNameById
方法：PUT
請求體：

typescriptCopy{
    id: string,
    name: string
}

回應格式：

typescriptCopy{
    code: 200,
    message: "success",
    body: UpdateResult
}


5. 刪除學生

路徑：/deleteById
方法：DELETE
查詢參數：id
回應格式：

typescriptCopy{
    code: 200,
    message: "success",
    body: DeleteResult
}
安裝與執行
環境需求

Node.js 14.x+
MongoDB 4.x+
TypeScript 4.x+

安裝步驟

安裝依賴

bashCopynpm install

設定環境變數
創建 .env 檔案：

CopyMONGODB_URI=你的MongoDB連接字串
PORT=2083

編譯並啟動

bashCopynpm run build
npm start
技術棧

Express.js
TypeScript
MongoDB + Mongoose
RESTful API
MVC 架構
