# 原神伤害计算器

一个基于 React 和 TypeScript 的原神伤害计算器，帮助玩家计算角色的伤害数值。

![image](https://github.com/user-attachments/assets/f2dbcf96-ee23-49c1-a3ef-106a59a23ba6)

## 功能特点

- 📊 主伤害计算器
  - 支持输入攻击力、倍率、增伤等多个伤害因素
  - 实时计算最终伤害
  - 清晰的数值展示

- 🗡️ 攻击力计算器
  - 分别计算基础攻击力（人物+武器）
  - 计算额外攻击力（百分比+固定值）
  - 一键应用到主界面

- ⚔️ 暴击收益计算器
  - 计算暴击率与暴击伤害的收益比
  - 帮助优化暴击属性分配
  - 详细的说明指导

## 技术栈

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (图标库)
- Vite (构建工具)

## 项目结构

```
src/
├── components/          # React 组件
│   ├── Calculator.tsx   # 主计算器组件
│   ├── AttackCalculator.tsx  # 攻击力计算器
│   ├── CritCalculator.tsx    # 暴击收益计算器
│   ├── DamageResult.tsx      # 结果显示组件
│   ├── Layout.tsx            # 布局组件
│   └── Section.tsx           # 输入区块组件
├── context/            # React Context
│   └── CalculatorContext.tsx # 全局状态管理
├── hooks/              # 自定义 Hooks
│   ├── useCalculator.ts      # 主计算器逻辑
│   ├── useAttackCalculator.ts# 攻击力计算逻辑
│   └── useCritCalculator.ts  # 暴击收益计算逻辑
├── types/              # TypeScript 类型定义
│   └── calculator.ts
└── utils/             # 工具函数
    └── damageCalculator.ts   # 伤害计算函数
```

## 安装与运行

1. 克隆项目
```bash
git clone https://github.com/BennetttChen/Updated-calculator.git
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 使用说明

1. 主界面
   - 输入各项属性数值
   - 点击"计算伤害"查看结果
   - 使用"重置"清空所有输入

2. 攻击力计算
   - 点击"不知道如何计算攻击力?"进入
   - 输入基础数值和加成数值
   - 使用"应用到主界面"将结果带回

3. 暴击收益计算
   - 点击"暴击收益"进入
   - 输入暴击率和暴击伤害
   - 查看收益比进行属性优化

## 数据来源

所有数据理论及计算方式来自米游社[白猫大人《伤害乘区论》](https://www.miyoushe.com/ys/accountCenter/postList?id=159074312)

## 开发者

- 项目维护者：BiaoChen

## 许可证

MIT License
