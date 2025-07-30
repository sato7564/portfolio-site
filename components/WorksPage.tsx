import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import ScrollFloat from "./ScrollFloatSimple";

export function WorksPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      title: "Eコマースダッシュボード",
      description: "React、TypeScript、Supabaseを使用した現代的なEコマース管理システム。売上分析、在庫管理、顧客管理機能を含む包括的なダッシュボード。リアルタイムでの在庫更新や売上レポートの自動生成機能により、効率的な店舗運営をサポートします。",
      longDescription: "このEコマースダッシュボードは、中小規模のオンラインストアオーナー向けに開発された包括的な管理システムです。React 18とTypeScriptを使用し、型安全性と保守性を確保しています。バックエンドにはSupabaseを採用し、リアルタイムデータベース機能により在庫の即時更新を実現。Chart.jsを活用した視覚的な売上分析機能では、日別・月別・商品カテゴリ別の売上推移を直感的に把握できます。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=j1Lc_eov5Po",
      videoThumbnail: "https://img.youtube.com/vi/j1Lc_eov5Po/maxresdefault.jpg",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "ダッシュボード",
      year: "2024",
      team: "3人",
      featured: true,
      features: [
        "リアルタイムの在庫管理と自動アラート機能",
        "AIを活用した売上予測と推奨仕入れ提案",
        "顧客の購買履歴分析とパーソナライズドマーケティング",
        "多言語対応（日本語・英語・中国語）",
        "モバイルレスポンシブデザイン"
      ],
      techDetails: "フロントエンドはReact 18のConcurrent Featuresを活用し、大量データの表示でもスムーズなUXを実現。状態管理にはZustandを採用し、シンプルかつ効率的なデータフローを構築。バックエンドのSupabaseではRow Level Securityを実装し、セキュアなデータアクセスを保証しています。"
    },
    {
      title: "タスク管理アプリ",
      description: "チーム向けの直感的なタスク管理アプリケーション。ドラッグ&ドロップ機能、リアルタイム同期、プロジェクト管理機能を搭載。チームメンバー間でのタスクの進捗状況を可視化し、効率的なプロジェクト管理を実現します。",
      longDescription: "リモートワークが普及する中、チームの生産性向上を目的として開発されたタスク管理アプリケーションです。Next.js 14のApp Routerを採用し、高速なページ遷移とSEO最適化を実現。Socket.IOによるWebSocket通信で、チームメンバーのアクションがリアルタイムで同期されます。",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=j1Lc_eov5Po",
      videoThumbnail: "https://img.youtube.com/vi/j1Lc_eov5Po/maxresdefault.jpg",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion", "Socket.IO"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "生産性ツール",
      year: "2024",
      team: "2人",
      featured: true,
      features: [
        "カンバンボード式のタスク管理",
        "ガントチャートによるプロジェクト全体の可視化",
        "Slackとの連携による通知機能",
        "タイムトラッキング機能",
        "レポート自動生成機能"
      ],
      techDetails: "Prismaを使用したタイプセーフなデータベースアクセス、Framer Motionによる滑らかなアニメーション、そしてOptimistic UIパターンの採用により、レスポンシブで快適なユーザー体験を提供しています。"
    },
    {
      title: "ポートフォリオサイト",
      description: "レスポンシブデザインとダークモード対応のモダンなポートフォリオサイト。スムーズなアニメーションと最適化されたパフォーマンス。SEO対策も施し、検索エンジンでの上位表示を狙える設計になっています。",
      longDescription: "個人のスキルと実績を効果的にアピールするために開発したポートフォリオサイトです。React 18とTailwind CSSを組み合わせ、モダンで洗練されたデザインを実現。Framer Motionによる滑らかなアニメーションで、訪問者に印象的な体験を提供します。",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=j1Lc_eov5Po",
      videoThumbnail: "https://img.youtube.com/vi/j1Lc_eov5Po/maxresdefault.jpg",
      tags: ["React", "Tailwind CSS", "Motion", "Vercel", "SEO"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "ウェブサイト",
      year: "2023",
      team: "1人",
      featured: false,
      features: [
        "レスポンシブデザインで全デバイス対応",
        "ダークモード/ライトモードの切り替え機能",
        "Lazy Loadingによる高速ページ読み込み",
        "SEO最適化による検索順位向上",
        "アクセシビリティ対応（WCAG 2.1準拠）"
      ],
      techDetails: "Next.jsのSSGを活用し、高速なページ配信を実現。画像最適化にはnext/imageを使用し、Core Web Vitalsで高スコアを達成。GitHub Actionsによる自動デプロイパイプラインも構築しています。"
    },
    {
      title: "レシピ共有アプリ",
      description: "料理好きのためのレシピ共有プラットフォーム。ユーザー投稿機能、評価・レビューシステム、お気に入り機能などを実装。画像アップロード機能や検索・フィルタリング機能により、使いやすさを追求しました。",
      longDescription: "料理愛好家のコミュニティを活性化させるために開発したレシピ共有プラットフォームです。Vue.js 3のComposition APIを採用し、再利用可能なコンポーネント設計を実現。Firebaseのリアルタイムデータベースにより、レシピの更新がリアルタイムで反映されます。",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=j1Lc_eov5Po",
      videoThumbnail: "https://img.youtube.com/vi/j1Lc_eov5Po/maxresdefault.jpg",
      tags: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "ソーシャル",
      year: "2023",
      team: "4人",
      featured: false,
      features: [
        "レシピの投稿・編集・削除機能",
        "材料からのレシピ検索機能",
        "調理時間・カロリー表示",
        "ユーザーフォロー機能",
        "オフライン対応（PWA）"
      ],
      techDetails: "Vuetifyによるマテリアルデザインの実装、Firebase Authenticationによる安全な認証システム、Cloud Storageを使用した画像の最適化と配信を実現。PWA対応により、オフラインでもレシピの閲覧が可能です。"
    },
    {
      title: "不動産検索サイト",
      description: "地図連動型の不動産検索プラットフォーム。高度な検索フィルター、地図上での物件表示、バーチャルツアー機能を実装。不動産会社様向けの管理画面も同時開発し、物件情報の更新が簡単に行える仕組みを構築しました。",
      longDescription: "不動産業界のDX推進を目的として開発した、地図連動型の物件検索プラットフォームです。Google Maps APIを活用し、直感的な物件探しを実現。360度画像によるバーチャルツアー機能で、現地に行かなくても物件の雰囲気を確認できます。",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=j1Lc_eov5Po",
      videoThumbnail: "https://img.youtube.com/vi/j1Lc_eov5Po/maxresdefault.jpg",
      tags: ["React", "Google Maps API", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "ビジネス",
      year: "2023",
      team: "5人",
      featured: false,
      features: [
        "地図上での物件表示と絞り込み検索",
        "360度画像によるバーチャルツアー",
        "AIによる物件推薦機能",
        "不動産会社向け管理ダッシュボード",
        "LINE通知連携"
      ],
      techDetails: "React Query による効率的なデータ取得、Node.js + Express によるRESTful API設計、MongoDBの地理空間インデックスを活用した高速な位置情報検索を実装。管理画面はRole-based Access Controlで権限管理を行っています。"
    },
    {
      title: "学習管理システム",
      description: "オンライン学習をサポートする包括的なLMS（学習管理システム）。動画コンテンツ配信、進捗管理、クイズ機能、掲示板機能などを実装。受講者と講師の双方にとって使いやすいインターフェースを実現しました。",
      longDescription: "コロナ禍でのオンライン教育需要に応えるために開発した学習管理システムです。Next.js 13のApp Routerを採用し、高速なページ遷移を実現。WebRTCによるリアルタイム授業配信機能で、インタラクティブな学習体験を提供します。",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=600&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=j1Lc_eov5Po",
      videoThumbnail: "https://img.youtube.com/vi/j1Lc_eov5Po/maxresdefault.jpg",
      tags: ["Next.js", "Prisma", "Stripe", "Video.js", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "教育",
      year: "2022",
      team: "6人",
      featured: false,
      features: [
        "動画授業のストリーミング配信",
        "リアルタイム授業とチャット機能",
        "自動採点クイズシステム",
        "学習進捗の可視化ダッシュボード",
        "Stripe決済による課金システム"
      ],
      techDetails: "Prisma によるタイプセーフなDB操作、Video.jsを使用したHLS動画配信、Socket.IOによるリアルタイムチャット機能を実装。Stripeのサブスクリプション機能で月額課金システムも構築しています。"
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-20 pb-40">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground border border-secondary">
          <Award className="w-3 h-3 mr-1" />
          All Projects
        </Badge>
        <h1 className="text-4xl font-medium mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          プロジェクト一覧
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          これまでに手がけたプロジェクトをご紹介します。
          それぞれ異なる技術スタックと課題に取り組み、ユーザーのニーズに応える解決策を提供しています。
        </p>
      </div>
      
      {/* プロジェクト一覧 */}
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-intellectual transition-all duration-500 border-intellectual cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs border-intellectual">
                    {project.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.team}
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-secondary/50">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 intellectual-gradient hover:opacity-90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-intellectual hover:bg-secondary/20" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* プロジェクト詳細モーダル */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Scroll Float Text */}
      <div className="relative mt-32 h-48">
        <div className="absolute left-1/2 -translate-x-1/2">
        <ScrollFloat 
            className="font-bold text-muted-foreground"
          >
            YAMADA NAO
          </ScrollFloat>
        </div>
      </div>
    </div>
  );
}