# Vite-Vue-GitAvalable-for-SSHkey
面试前各知识点综合运用的仓库

**我来产生变化（我是训练在VS里的git操作）**

# 记录标准目录结构
标准目录结构
src/
├── assets/                 # 静态资源文件
├── components/             # 可复用组件
├── views/                  # 页面级组件
├── routes/                 # 路由配置
├── store/                  # 状态管理
├── services/               # API 服务层
├── utils/                  # 工具函数
├── styles/                 # 样式文件
├── hooks/                  # 自定义 Hooks
├── layouts/                # 布局组件
├── constants/              # 常量定义
├── plugins/                # 插件配置
├── directives/             # 自定义指令
├── locales/                # 国际化文件
├── types/                  # TypeScript 类型定义
├── config/                 # 配置文件
├── mocks/                  # 模拟数据
└── tests/                  # 测试文件
各目录详细说明
1. assets/
bash
assets/
├── images/        # 图片资源
├── icons/         # 图标文件
├── fonts/         # 字体文件
└── media/         # 音频、视频等媒体文件
2. components/
bash
components/
├── common/        # 通用基础组件
├── business/      # 业务组件
├── ui/            # UI 组件库封装
└── shared/        # 跨模块共享组件
3. views/
bash
views/
├── home/          # 首页模块
├── user/          # 用户模块
├── product/       # 商品模块
├── order/         # 订单模块
└── dashboard/     # 控制台模块
4. routes/
bash
routes/
├── index.js       # 路由入口文件
├── modules/       # 按模块划分的路由
└── guards/        # 路由守卫
5. store/
bash
store/
├── modules/       # 按模块划分的状态
├── actions/       # 异步操作
├── mutations/     # 状态变更
└── getters/       # 状态计算属性
6. services/
bash
services/
├── api/           # API 接口定义
├── http/          # HTTP 请求封装
├── interceptors/  # 请求/响应拦截器
└── modules/       # 按业务模块划分的服务
7. utils/
bash
utils/
├── helpers/       # 辅助函数
├── validators/    # 表单验证
├── formatters/    # 数据格式化
└── adapters/      # 数据适配器
8. styles/
bash
styles/
├── base/          # 基础样式
├── components/    # 组件样式
├── pages/         # 页面样式
├── themes/        # 主题样式
└── mixins/        # Sass mixins

# 推荐开发流程
先搭建骨架：路由 + 布局 + 基础样式
再填充内容：各页面组件和业务逻辑
最后优化：性能优化、测试、国际化等

1. 基础环境搭建
配置文件和核心设置
bash
src/
├── config/          # 先配置环境变量、全局配置
├── plugins/         # 初始化插件配置
├── constants/       # 定义项目常量
└── types/           # TypeScript 类型定义（如果使用TS）
2. 路由系统搭建
路由优先级最高
bash
src/
├── routes/          # 配置基础路由结构
│   ├── index.js     # 路由入口文件
│   └── modules/     # 各模块路由占位
└── layouts/         # 基础布局组件
3. 状态管理初始化
全局状态管理
bash
src/
└── store/           # 初始化状态管理
    ├── index.js     # store 入口
    └── modules/     # 各模块状态占位
4. 样式系统搭建
基础样式和主题
bash
src/
└── styles/
    ├── base/        # 重置样式、基础样式
    ├── themes/      # 主题样式
    └── mixins/      # 全局 mixins（如果使用 Sass）
5. 工具函数和公共服务
基础工具类
bash
src/
├── utils/           # 工具函数
│   ├── helpers/     # 基础辅助函数
│   └── validators/  # 表单验证等
├── services/        # API 服务层基础结构
│   ├── http/        # HTTP 请求封装
│   └── interceptors/ # 拦截器
└── hooks/           # 自定义 Hooks（Vue/React）
6. 静态资源准备
资源文件
bash
src/
└── assets/
    ├── images/      # 基础图片资源
    ├── icons/       # 图标资源
    └── fonts/       # 字体文件
7. 组件开发顺序
按重要性开发组件
基础组件 (components/common/)
按钮、输入框、表格等通用组件
布局组件 (layouts/)
头部、侧边栏、底部等
业务组件 (components/business/)
根据具体业务需求开发
8. 页面开发
按路由层级开发
bash
src/
└── views/
    ├── home/        # 首页（通常最先完成）
    ├── user/        # 用户相关页面
    ├── product/     # 商品相关页面
    └── dashboard/   # 控制台页面
9. 集成测试
完善项目
bash
src/
├── mocks/           # 模拟数据（开发阶段）
├── locales/         # 国际化（如需要）
└── tests/           # 测试文件

# HTML+CSS 
 页面结构规划 → 容器尺寸分配 → 内容填充 → 细节调整