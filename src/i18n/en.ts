const en = {
  // Header
  "app.title": "机佬AI",
  "app.subtitle": "AI assistant for machinery repair folks · session memory & Agent Tools",

  // Empty state
  "empty.title": "机佬AI",
  "empty.hint": "I'm 机佬AI, an AI assistant for machinery repair folks. With custom tools and session memory, I can help you troubleshoot faults, plan repair steps and keep maintenance notes.",
  "empty.features": "Repair Q&A · Session Memory · Agent Tools",

  // Chat input
  "chat.placeholder": "Type a message...  ⏎ Send · Shift+⏎ Newline",
  "chat.hint": "机佬AI · AI assistant for mechanics · Demo only",

  // Preset questions
  "preset.1": "My machine is making a strange noise — help me troubleshoot it step by step.",
  "preset.2": "Draft a routine maintenance checklist for me.",

  // Tool indicators
  "tool.weather": "Weather",
  "tool.clothing": "Clothing",
  "tool.translate": "Translate",
  "tool.statistics": "Statistics",

  // Status & errors
  "status.error": "Request failed. Please check if the backend service is running.",
  "status.stopped": "⏹ *Generation stopped*",
  "status.backendError": "Backend abort request failed. The server may still be running.",

  // Debug panel
  "debug.title": "Trace",
  "debug.events": "events",
  "debug.clear": "Clear",
  "debug.empty": "Waiting for SSE events...",
  "debug.emptyHint": "After sending a message, all raw backend data will be displayed here.",

  // Conversation sidebar
  "sidebar.label": "Conversation list",
  "sidebar.title": "Chats",
  "sidebar.newChat": "New chat",
  "sidebar.loading": "Loading conversations...",
  "sidebar.loadMore": "Load more",
  "sidebar.loadingMore": "Loading...",
  "sidebar.emptyTitle": "No conversations yet",
  "sidebar.emptyHint": "Click \"New chat\" to start your first conversation.",
  "sidebar.delete": "Delete conversation",
  "sidebar.deleteConfirm": "Permanently delete this conversation? This cannot be undone.",

  // Aria labels (button hover/screen-reader)
  "aria.send": "Send",
  "aria.clearHistory": "Clear history",
  "aria.stopGeneration": "Stop generation",

  // Language toggle
  "lang.switch": "中文",

  // ─── Floating bottom-right action badges ─────────────────────────────
  "floatingLink.deploy": "Deploy",
  "floatingLink.github": "GitHub",
} as const;

export default en;
