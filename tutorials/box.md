#  教程 - 1

## Boxed 岛屿玩家命令（别名：`/box` 或 `/boxed`）

以下为 Boxed 插件中常用的玩家命令及其权限说明：

| 命令 | 描述 | 权限 |
|--------|--------|--------|
| `/box` | 主玩家命令 | `boxed.island` |
| `/box ban <player>` | 禁止玩家进入你的岛屿 | `boxed.island.ban` |
| `/box banlist` | 列出被禁止的玩家 | `boxed.island.ban` |
| `/box biomes` | 生物群系插件主命令，打开生物群系更改 GUI | - |
| `/box challenges <Level>` | 允许玩家使用 `/box challenges` 命令 | `boxed.challenges` |
| `/box create` | 创建一个岛屿 | `boxed.island.create` |
| `/box go` | 传送你到你的岛屿 | `boxed.island` |
| `/box info` | 显示你的岛屿或玩家岛屿的信息 | `boxed.island.info` |
| `/box language` | 选择语言 | `boxed.island.language` |
| `/box level [player]` | 计算你的岛屿等级或显示 `[player]` 的等级 | - |
| `/box reset` | 重启你的岛屿并移除旧的 | `boxed.island.reset` |
| `/box sethome` | 设置你的家传送点 | `boxed.island.sethome` |
| `/box setname` | 为你的岛屿设置名称 | `boxed.island.name` |
| `/box settings` | 显示岛屿设置 | `boxed.island.settings` |
| `/box spawn` | 传送你到出生点 | `boxed.island.home` |
| `/box resetname` | 重置你的岛屿名称 | `boxed.mod.resetname` |
| `/box unban` | 解禁一个玩家进入你的岛屿 | `boxed.island.ban` |
| `/box team` | 管理你的团队 | `boxed.island.team` |
| `/box team accept` | 接受邀请 | `boxed.island.team` |
| `/box team coop` | 使一个玩家在你的岛屿上成为合作等级 | `boxed.island.team.coop` |
| `/box team demote` | 在你的岛屿上降低一个玩家的等级 | `boxed.island.team` |
| `/box team leave` | 离开你的岛屿 | `boxed.island.team` |
| `/box team invite` | 邀请一个玩家加入你的岛屿 | `boxed.island.team` |
| `/box team kick` | 从你的岛屿中移除一个成员 | `boxed.island.expel` |
| `/box team promote` | 在你的岛屿上提升一个玩家的等级 | `boxed.island.team` |
| `/box team reject` | 拒绝邀请 | `boxed.island.team` |
| `/box team setowner` | 将你的岛屿所有权转给一个成员 | `boxed.island.team` |
| `/box team trust` | 在你的岛屿上给一个玩家信任等级 | `boxed.island.team.trust` |
| `/box top` | 显示十强 | - |
| `/box team uncoop` | 移除一个玩家的合作等级 | `boxed.island.team.coop` |
| `/box team untrust` | 移除一个玩家的信任等级 | `boxed.island.team.trust` |
| `/box warp` | 传送到玩家的传送标志 | - |
| `/box warps` | 打开传送面板 | - |

---

## 岛屿设置（`/box settings`）

- **功能说明**：  
  Boxed 的独特设置是确定谁可以通过投掷末影珍珠移动盒子。  
  默认情况下，**只有岛屿所有者可以**。

- **图标**：堆肥桶（通常用于表示“设置”或“配置”）。