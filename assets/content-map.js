const contentMap = [
  {
    id: "home",
    title: "九游首页",
    tags: ["九游", "首页", "热门"],
    keywords: ["九游官网", "九游游戏", "最新活动"],
    url: "https://chinese-portal-9you.com/home",
    summary: "九游平台综合入口"
  },
  {
    id: "news",
    title: "新闻中心",
    tags: ["九游", "新闻", "公告"],
    keywords: ["九游新闻", "九游公告", "游戏资讯"],
    url: "https://chinese-portal-9you.com/news",
    summary: "九游平台最新动态"
  },
  {
    id: "games",
    title: "游戏库",
    tags: ["九游", "游戏", "分类"],
    keywords: ["九游游戏列表", "热门手游", "九游下载"],
    url: "https://chinese-portal-9you.com/games",
    summary: "九游官方游戏收录"
  },
  {
    id: "community",
    title: "玩家社区",
    tags: ["九游", "社区", "论坛"],
    keywords: ["九游论坛", "玩家交流", "九游公会"],
    url: "https://chinese-portal-9you.com/community",
    summary: "九游玩家互动社区"
  },
  {
    id: "support",
    title: "客服支持",
    tags: ["九游", "客服", "帮助"],
    keywords: ["九游客服", "账号问题", "充值帮助"],
    url: "https://chinese-portal-9you.com/support",
    summary: "九游官方客服中心"
  },
  {
    id: "events",
    title: "活动中心",
    tags: ["九游", "活动", "福利"],
    keywords: ["九游活动", "九游礼包", "限时活动"],
    url: "https://chinese-portal-9you.com/events",
    summary: "九游平台福利活动汇总"
  },
  {
    id: "about",
    title: "关于九游",
    tags: ["九游", "关于", "公司"],
    keywords: ["九游公司", "九游介绍", "联系方式"],
    url: "https://chinese-portal-9you.com/about",
    summary: "九游平台简介与联系"
  }
];

function searchContent(query) {
  if (!query || typeof query !== "string") {
    return [];
  }
  const lowerQuery = query.toLowerCase();
  return contentMap.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const tagMatch = item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
    const keywordMatch = item.keywords.some((kw) => kw.toLowerCase().includes(lowerQuery));
    const summaryMatch = item.summary.toLowerCase().includes(lowerQuery);
    return titleMatch || tagMatch || keywordMatch || summaryMatch;
  });
}

function getSectionsByTag(tag) {
  if (!tag || typeof tag !== "string") {
    return [];
  }
  const lowerTag = tag.toLowerCase();
  return contentMap.filter((item) =>
    item.tags.some((t) => t.toLowerCase() === lowerTag)
  );
}

function getSectionById(id) {
  if (!id || typeof id !== "string") {
    return null;
  }
  return contentMap.find((item) => item.id === id) || null;
}

function listAllUrls() {
  return contentMap.map((item) => ({
    title: item.title,
    url: item.url
  }));
}

function printSectionInfo(section) {
  if (!section) {
    console.log("未找到指定分区");
    return;
  }
  console.log(`分区：${section.title}`);
  console.log(`标签：${section.tags.join(", ")}`);
  console.log(`关键词：${section.keywords.join(", ")}`);
  console.log(`链接：${section.url}`);
  console.log(`简介：${section.summary}`);
}