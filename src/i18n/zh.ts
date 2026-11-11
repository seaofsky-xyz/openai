const zh = {
  // Header
  "app.title": "机佬AI",
  "app.subtitle": "机修佬的 AI 助手 · 支持会话记忆、Agent Tools",

  // Empty state
  "empty.title": "机佬AI",
  "empty.hint": "我是机佬AI，机修佬身边的 AI 助手。支持自定义工具与会话记忆，帮你查故障、理维修步骤、记保养笔记。",
  "empty.features": "机修问答 · 会话记忆 · Agent Tools",

  // Chat input
  "chat.placeholder": "发消息…  ⏎ 发送 · Shift+⏎ 换行",
  "chat.hint": "机佬AI · 机修佬的 AI 助手 · 仅供演示",

  // Preset questions
  "preset.1": "设备有异响，帮我理一份排查步骤。",
  "preset.2": "帮我整理一份日常保养检查清单。",

  // Tool indicators
  "tool.weather": "天气查询",
  "tool.clothing": "穿衣建议",
  "tool.translate": "文本翻译",
  "tool.statistics": "文本统计",

  // Status & errors
  "status.error": "⚠️ 请求失败，请检查后端服务是否启动。",
  "status.stopped": "⏹ *已停止生成*",
  "status.backendError": "⚠️ 后端中断请求失败，服务端可能仍在运行。",

  // Debug panel
  "debug.title": "传输流",
  "debug.events": "事件",
  "debug.clear": "清除",
  "debug.empty": "等待 SSE 事件...",
  "debug.emptyHint": "发送消息后，所有原始后端数据将在此处显示。",

  // Conversation sidebar
  "sidebar.label": "会话列表",
  "sidebar.title": "会话",
  "sidebar.newChat": "新建聊天",
  "sidebar.loading": "正在加载会话...",
  "sidebar.loadMore": "加载更多",
  "sidebar.loadingMore": "加载中...",
  "sidebar.emptyTitle": "暂无会话",
  "sidebar.emptyHint": "点击「新建聊天」开始第一段对话。",
  "sidebar.delete": "删除会话",
  "sidebar.deleteConfirm": "确定要永久删除这个会话吗？此操作不可恢复。",

  // Aria labels (button hover/screen-reader)
  "aria.send": "发送",
  "aria.clearHistory": "清除历史",
  "aria.stopGeneration": "停止生成",

  // Language toggle
  "lang.switch": "English",

  // ─── Floating bottom-right action badges ─────────────────────────────
  "floatingLink.deploy": "一键部署",
  "floatingLink.github": "GitHub",
} as const;

export default zh;
