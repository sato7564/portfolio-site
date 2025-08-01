// プロジェクトの実際の画像URL管理
// Obsidianで管理している画像情報と連携
export const projectImages: {
  [key: string]: {
    thumbnail: string;
    screenshots: { url: string; caption: string }[];
    video?: { url: string; thumbnail: string } | null;
    videos?: { url: string; thumbnail: string }[];
  }
} = {
  "おえかきシューター": {
    thumbnail: "/images/projects/oekaki/お絵描きシューター＿サムネ.PNG",
    screenshots: [
      {
        url: "/images/projects/oekaki/お絵描きシューター＿サムネ.PNG",
        caption: "ゲームタイトル画面"
      },
      {
        url: "/images/projects/oekaki/オエカキシューター＿メニュー.PNG",
        caption: "メニュー画面"
      }
    ],
    video: {
      url: "https://www.youtube.com/watch?v=sZlDruW1RtE",
      thumbnail: "https://img.youtube.com/vi/sZlDruW1RtE/hqdefault.jpg"
    }
  },
  "裏斬リッシュ（うらぎりっしゅ）": {
    thumbnail: "/images/projects/uragiri/裏斬り_真のサムネ.PNG",
    screenshots: [
      {
        url: "/images/projects/uragiri/裏斬り_真のサムネ.PNG",
        caption: "ゲームタイトル"
      },
      {
        url: "/images/projects/uragiri/裏斬り_サムネ.PNG",
        caption: "ゲーム画面"
      },
      {
        url: "/images/projects/uragiri/裏斬り_map.PNG",
        caption: "マップ画面"
      },
      {
        url: "/images/projects/uragiri/裏切り＿ホムペ.jpg",
        caption: "ホームページ"
      }
    ],
    video: {
      url: "https://www.youtube.com/watch?v=uXaN-lF9T5g",
      thumbnail: "https://img.youtube.com/vi/uXaN-lF9T5g/hqdefault.jpg"
    }
  },
  "メービードゥーン": {
    thumbnail: "https://img.youtube.com/vi/wd9o9eifRZk/hqdefault.jpg",
    screenshots: [],
    video: {
      url: "https://www.youtube.com/watch?v=wd9o9eifRZk",
      thumbnail: "https://img.youtube.com/vi/wd9o9eifRZk/hqdefault.jpg"
    }
  },
  "Claim": {
    thumbnail: "/images/projects/claim/Claim_サムネ.jpg",
    screenshots: [
      {
        url: "/images/projects/claim/Claim_サムネ.jpg",
        caption: "ホラー探索シーン"
      }
    ],
    video: {
      url: "https://www.youtube.com/watch?v=kFCVxULzJsY",
      thumbnail: "https://img.youtube.com/vi/kFCVxULzJsY/hqdefault.jpg"
    },
    videos: undefined
  },
  "LINE占いコンテンツ開発": {
    thumbnail: "/images/projects/line-fortune/LINE_おみくじ.jpg",
    screenshots: [
      {
        url: "/images/projects/line-fortune/LINE_おみくじ.jpg",
        caption: "おみくじ画面"
      },
      {
        url: "/images/projects/line-fortune/LINE_タロット.jpg",
        caption: "タロット占い画面"
      },
      {
        url: "/images/projects/line-fortune/LINE_リッチメニュー.jpg",
        caption: "リッチメニュー"
      },
      {
        url: "/images/projects/line-fortune/占い＿スプシ.PNG",
        caption: "占いデータシート"
      }
    ],
    video: null
  },
  "持たないで、モアイさん": {
    thumbnail: "/images/projects/moai/moai_サムネ.png",
    screenshots: [
      {
        url: "/images/projects/moai/moai_サムネ.png",
        caption: "キャラクター"
      },
      {
        url: "/images/projects/moai/moai_sutanpu.png",
        caption: "LINEスタンプ"
      },
      {
        url: "/images/projects/moai/moai_manga.png",
        caption: "漫画作品"
      },
      {
        url: "/images/projects/moai/moai＿スタンプ仕様.jpg",
        caption: "スタンプ仕様"
      }
    ],
    video: null
  },
  "多得ルワー子（Vtuber）": {
    thumbnail: "/images/projects/vtuber/Vtuber_サムネ.PNG",
    screenshots: [
      {
        url: "/images/projects/vtuber/Vtuber_サムネ.PNG",
        caption: "Vtuberキャラクター"
      },
      {
        url: "/images/projects/vtuber/Vtuber_制作.jpg",
        caption: "Vtuber制作"
      }
    ],
    video: {
      url: "https://www.youtube.com/watch?v=ztrAmFgPR4M",
      thumbnail: "https://img.youtube.com/vi/ztrAmFgPR4M/hqdefault.jpg"
    }
  },
  "演劇サークル立ち上げ・舞台公演": {
    thumbnail: "/images/projects/theater/演劇＿ポスター.jpg",
    screenshots: [
      {
        url: "/images/projects/theater/演劇＿ポスター.jpg",
        caption: "公演ポスター"
      },
      {
        url: "/images/projects/theater/演劇＿練習.jpg",
        caption: "稽古風景1"
      },
      {
        url: "/images/projects/theater/演劇＿練習2.jpg",
        caption: "稽古風景2"
      },
      {
        url: "/images/projects/theater/演劇＿集合.jpg",
        caption: "集合写真"
      }
    ],
    video: null
  },
  "イナズマイレブン - サッカーシステム開発": {
    thumbnail: "/images/projects/inazuma/inazuma_サムネ.jpg",
    screenshots: [
      {
        url: "/images/projects/inazuma/inazuma_サムネ.jpg",
        caption: "ゲームタイトル"
      },
      {
        url: "/images/projects/inazuma/inazuma_sentou.png",
        caption: "戦闘シーン"
      },
      {
        url: "/images/projects/inazuma/inazuma_map.jpg",
        caption: "マップ画面"
      },
      {
        url: "/images/projects/inazuma/inazuma_kurezitto.jpg",
        caption: "クレジット"
      }
    ],
    video: null
  },
  "創作漫画制作": {
    thumbnail: "/images/projects/manga/漫画＿趣味＿サムネ.PNG",
    screenshots: [
      {
        url: "/images/projects/manga/漫画＿趣味＿サムネ.PNG",
        caption: "漫画作品"
      },
      {
        url: "/images/projects/manga/漫画＿趣味2.PNG",
        caption: "作品ページ2"
      },
      {
        url: "/images/projects/manga/漫画＿趣味3.PNG",
        caption: "作品ページ3"
      }
    ],
    video: null
  },
  "共同ゲーム開発プロジェクト": {
    thumbnail: "/images/projects/collaborative-game/自転車ゲーム_サムネ.jpg",
    screenshots: [
      {
        url: "/images/projects/collaborative-game/自転車ゲーム_サムネ.jpg",
        caption: "開発中のゲーム"
      }
    ],
    video: {
      url: "https://www.youtube.com/watch?v=6IGk8kICtZ8",
      thumbnail: "https://img.youtube.com/vi/6IGk8kICtZ8/hqdefault.jpg"
    }
  },
  "業務解析ダッシュボード開発": {
    thumbnail: "/images/projects/looker/Looker_シート.PNG",
    screenshots: [
      {
        url: "/images/projects/looker/Looker_シート.PNG",
        caption: "Looker Studioダッシュボード"
      }
    ],
    video: null
  },
  "音楽制作活動": {
    thumbnail: "https://img.youtube.com/vi/R3bcNZKux9Q/hqdefault.jpg",
    screenshots: [],
    video: null,
    videos: [
      {
        url: "https://www.youtube.com/shorts/R3bcNZKux9Q",
        thumbnail: "https://img.youtube.com/vi/R3bcNZKux9Q/hqdefault.jpg"
      },
      {
        url: "https://www.youtube.com/shorts/QK1cwAksOl4",
        thumbnail: "https://img.youtube.com/vi/QK1cwAksOl4/hqdefault.jpg"
      }
    ]
  }
};

// 画像取得ヘルパー関数
export function getProjectImage(projectTitle: string): string {
  return projectImages[projectTitle]?.thumbnail || "https://via.placeholder.com/600x400";
}

export function getProjectScreenshots(projectTitle: string): string[] {
  const project = projectImages[projectTitle];
  if (!project) return ["https://via.placeholder.com/800x600"];
  return project.screenshots.map((s: { url: string; caption: string }) => s.url);
}

export function getProjectVideo(projectTitle: string): { url: string; thumbnail: string } | null {
  return projectImages[projectTitle]?.video || null;
}