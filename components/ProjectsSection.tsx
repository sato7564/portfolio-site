import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "販売支援分析ダッシュボード",
      description: "現在Sunglobe社で開発中の包括的なデータ分析システム。SQL、Python、Google Cloudを活用し、データ収集から可視化まで一気通貫で設計・実装。売上データ分析とビジネス改善提案を実現。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["SQL", "Python", "Google Cloud", "Looker Studio", "データ分析"],
      featured: true,
      status: "進行中 (2025年2月-)"
    },
    {
      title: "おえかきシューター",
      description: "「描いたイラストが動く！」をコンセプトにした子供向けシューティングゲーム。6人チームのリーダーとして企画・開発・デザインを担当し、神戸電子専門学校ゲームコンペでアイディア賞を受賞。",
      image: "/images/projects/oekaki/お絵描きシューター＿サムネ.PNG",
      tags: ["Unity", "C#", "チームリーダー", "受賞作品", "Trello"],
      featured: true,
      githubUrl: "https://github.com",
      demoUrl: "https://www.youtube.com/watch?v=sZlDruW1RtE"
    },
    {
      title: "裏斬リッシュ（うらぎりっしゅ）",
      description: "4人プレイヤーの中に潜む1人の裏切り者を探す人狼系アクションゲーム。8人チームの統率で卒業制作を完成させ、ゲームクリエイター甲子園に応募。オンラインマルチプレイを実装。",
      image: "/images/projects/uragiri/裏斬り_真のサムネ.PNG",
      tags: ["Unity", "C#", "マルチプレイ", "卒業制作", "8人チーム統率"],
      featured: true,
      demoUrl: "https://www.youtube.com/watch?v=uXaN-lF9T5g"
    },
    {
      title: "メービードゥーン",
      description: "魚型クリーチャーを使役して洞窟を探索するアクションゲーム。COVID-19下でのオンライン開発を成功させ、日本ゲーム大賞アマチュア部門に応募。OP動画と図鑑機能を実装。",
      image: "https://img.youtube.com/vi/wd9o9eifRZk/hqdefault.jpg",
      tags: ["Unity", "C#", "オンライン開発", "日本ゲーム大賞応募", "Slack"],
      featured: true,
      demoUrl: "https://www.youtube.com/watch?v=wd9o9eifRZk"
    },
    {
      title: "多得ルワー子（Vtuber）",
      description: "最新AI技術を統合したVtuberプロジェクト。AI画像生成、Live2D、AI音声変換、フェイストラッキングを組み合わせ、個人で高品質なVtuberを制作・運営中。",
      image: "/images/projects/vtuber/Vtuber_サムネ.PNG",
      tags: ["AI画像生成", "Live2D", "AI音声変換", "フェイストラッキング", "最新技術統合"],
      featured: false,
      status: "継続運営中 (2024年10月-)",
      demoUrl: "https://www.youtube.com/watch?v=ztrAmFgPR4M"
    },
    {
      title: "ポートフォリオサイト開発",
      description: "Claude Codeを活用した5日間の超高速開発。Obsidian情報アーキテクチャとAI協働ワークフローを確立し、フルスタック開発でのAI活用可能性を実証。",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Claude Code", "AI協働開発", "Obsidian", "超高速開発"],
      featured: true,
      githubUrl: "https://github.com"
    },
    {
      title: "LINE占いコンテンツ開発",
      description: "JavaScriptとLINE APIを活用した占いコンテンツの受託開発。AI支援により未経験技術を2ヶ月で習得し、サブスクリプション決済機能付きで商用レベル品質を実現。",
      image: "/images/projects/line-fortune/LINE_おみくじ.jpg",
      tags: ["JavaScript", "LINE API", "AI活用開発", "受託開発", "決済システム"],
      featured: false,
      status: "完了 (2024年9-10月)"
    },
    {
      title: "Claim（ホラーゲーム）",
      description: "DirectX 11を直接使用した顔面が迫りくるホラーゲーム。Unity等を使わず低レベルプログラミングで開発し、A*アルゴリズムとステージエディタを自作。就職活動用ポートフォリオとして制作。",
      image: "/images/projects/claim/Claim_サムネ.jpg",
      tags: ["DirectX 11", "C++", "A*アルゴリズム", "ステージエディタ", "個人制作"],
      featured: false,
      demoUrl: "https://www.youtube.com/watch?v=kFCVxULzJsY"
    },
    {
      title: "持たないで、モアイさん",
      description: "モアイをモチーフにしたキャラクタービジネス実験。LINEスタンプ販売とX(Twitter)での4コマ漫画配信を実施。AI活用による高速プロトタイピングでアイデアから商品化まで実現。",
      image: "/images/projects/moai/moai_サムネ.png",
      tags: ["キャラクタービジネス", "LINEスタンプ", "SNSマーケティング", "4コマ漫画", "AI活用"],
      featured: false,
      status: "継続運営中 (2024年10月-)"
    },
    {
      title: "演劇サークル立ち上げ・舞台公演",
      description: "専門学校で演劇サークルを創設し、20人以上のメンバーを統率。2年間で複数の舞台公演を成功させ、大規模チーム管理とプロジェクト運営のスキルを確立。",
      image: "/images/projects/theater/演劇＿ポスター.jpg",
      tags: ["大規模チーム管理", "プロジェクト運営", "演出", "2年間継続", "20人以上統率"],
      featured: false
    },
    {
      title: "共同ゲーム開発プロジェクト",
      description: "プロデザイナーとの協働による自転車アクションゲーム開発。レトロポップなデザインとUnityアーキテクチャ学習を重視し、デバッグ手法と状態遷移パターンを習得中。",
      image: "/images/projects/collaborative-game/自転車ゲーム_サムネ.jpg",
      tags: ["Unity", "C#", "デザイナー協働", "アーキテクチャ学習", "状態遷移"],
      featured: false,
      status: "開発中 (2025年5月-)",
      demoUrl: "https://www.youtube.com/watch?v=6IGk8kICtZ8"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4">Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ゲーム開発から現在のビジネスシステム開発まで、技術とクリエイティビティを融合した
            多彩なプロジェクトをご紹介します。AI活用による効率化と、チームワークを重視した価値創造が特徴です。
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`overflow-hidden group hover:shadow-lg transition-all duration-300 ${project.featured ? 'border-primary' : ''}`}>
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="flex-1">{project.title}</CardTitle>
                  <div className="flex flex-col gap-1 ml-2">
                    {project.featured && (
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        Featured
                      </Badge>
                    )}
                    {project.status && (
                      <Badge variant="secondary" className="text-xs">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}