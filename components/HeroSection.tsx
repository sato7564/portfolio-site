import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            システムエンジニア at Sunglobe Co., Ltd.
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-medium mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            岡 悟史<br />Oka Satoshi
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            ゲーム開発からビジネスシステムまで、幅広い技術領域でのフルスタック開発経験。
            AI活用による効率化と、チーム成長を重視したシステム設計で価値を創造します。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="min-w-32">
              プロジェクトを見る
            </Button>
            <Button variant="outline" size="lg" className="min-w-32">
              履歴書をダウンロード
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sato7564@outlook.jp"
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}