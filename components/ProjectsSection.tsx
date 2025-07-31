import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "演劇サークル立ち上げ・舞台公演",
      description: "専門学校で演劇サークルを創設し、18人で「沙羅双樹のハムレット」を上演。演劇初心者が多い中、スケジュール調整と演技指導を担当し、200人以上を動員する公演を実現。",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop",
      tags: ["プロジェクト管理", "リーダーシップ", "チームビルディング", "演出"],
      featured: true
    },
    {
      title: "Eコマースダッシュボード",
      description: "React、TypeScript、Supabaseを使用した現代的なEコマース管理システム。売上分析、在庫管理、顧客管理機能を含む包括的なダッシュボード。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "タスク管理アプリ",
      description: "チーム向けの直感的なタスク管理アプリケーション。ドラッグ&ドロップ機能、リアルタイム同期、プロジェクト管理機能を搭載。",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "ポートフォリオサイト",
      description: "レスポンシブデザインとダークモード対応のモダンなポートフォリオサイト。スムーズなアニメーションと最適化されたパフォーマンス。",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "Motion", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4">プロジェクト</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            これまでに手がけた主要なプロジェクトの一部をご紹介します。
            それぞれ異なる技術スタックと課題に取り組んでいます。
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
                  {project.featured && (
                    <Badge className="ml-2 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
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
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
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