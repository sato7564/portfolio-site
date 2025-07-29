import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WorksPage() {
  const projects = [
    {
      title: "Eコマースダッシュボード",
      description: "React、TypeScript、Supabaseを使用した現代的なEコマース管理システム。売上分析、在庫管理、顧客管理機能を含む包括的なダッシュボード。リアルタイムでの在庫更新や売上レポートの自動生成機能により、効率的な店舗運営をサポートします。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "ダッシュボード",
      year: "2024",
      team: "3人",
      featured: true
    },
    {
      title: "タスク管理アプリ",
      description: "チーム向けの直感的なタスク管理アプリケーション。ドラッグ&ドロップ機能、リアルタイム同期、プロジェクト管理機能を搭載。チームメンバー間でのタスクの進捗状況を可視化し、効率的なプロジェクト管理を実現します。",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion", "Socket.IO"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "生産性ツール",
      year: "2024",
      team: "2人",
      featured: true
    },
    {
      title: "ポートフォリオサイト",
      description: "レスポンシブデザインとダークモード対応のモダンなポートフォリオサイト。スムーズなアニメーションと最適化されたパフォーマンス。SEO対策も施し、検索エンジンでの上位表示を狙える設計になっています。",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "Motion", "Vercel", "SEO"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "ウェブサイト",
      year: "2023",
      team: "1人",
      featured: false
    },
    {
      title: "レシピ共有アプリ",
      description: "料理好きのためのレシピ共有プラットフォーム。ユーザー投稿機能、評価・レビューシステム、お気に入り機能などを実装。画像アップロード機能や検索・フィルタリング機能により、使いやすさを追求しました。",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "ソーシャル",
      year: "2023",
      team: "4人",
      featured: false
    },
    {
      title: "不動産検索サイト",
      description: "地図連動型の不動産検索プラットフォーム。高度な検索フィルター、地図上での物件表示、バーチャルツアー機能を実装。不動産会社様向けの管理画面も同時開発し、物件情報の更新が簡単に行える仕組みを構築しました。",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tags: ["React", "Google Maps API", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "ビジネス",
      year: "2023",
      team: "5人",
      featured: false
    },
    {
      title: "学習管理システム",
      description: "オンライン学習をサポートする包括的なLMS（学習管理システム）。動画コンテンツ配信、進捗管理、クイズ機能、掲示板機能などを実装。受講者と講師の双方にとって使いやすいインターフェースを実現しました。",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      tags: ["Next.js", "Prisma", "Stripe", "Video.js", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "教育",
      year: "2022",
      team: "6人",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground border border-secondary">
          <Award className="w-3 h-3 mr-1" />
          Featured Projects
        </Badge>
        <h1 className="text-4xl font-medium mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          作品一覧
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          これまでに手がけた主要なプロジェクトをご紹介します。
          それぞれ異なる技術スタックと課題に取り組み、ユーザーのニーズに応える解決策を提供しています。
        </p>
      </div>
      
      {/* フィーチャードプロジェクト */}
      <div className="mb-16">
        <h2 className="text-2xl font-medium mb-8 text-primary">主要プロジェクト</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-intellectual transition-all duration-500 border-intellectual">
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="intellectual-gradient text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs border-intellectual">
                    {project.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    チーム{project.team}
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="intellectual-gradient hover:opacity-90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-intellectual hover:bg-secondary/20" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* その他のプロジェクト */}
      <div>
        <h2 className="text-2xl font-medium mb-8 text-primary">その他のプロジェクト</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-intellectual transition-all duration-300 border-intellectual">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
    </div>
  );
}