import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, ArrowRight, Code, Palette, Lightbulb } from "lucide-react";
import ScrollFloat from "./ScrollFloatSimple";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative pb-96">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/30 rounded-full blur-lg" />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-secondary/80 text-secondary-foreground border border-secondary">
            <Lightbulb className="w-3 h-3 mr-1" />
            Available for work
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-medium mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent leading-tight">
            フロントエンド<br />デベロッパー
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            美しく、機能的で、ユーザーフレンドリーなWebアプリケーションを作成しています。
            React、TypeScript、そして最新のWeb技術を使って、デジタル体験を向上させます。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="min-w-32 intellectual-gradient hover:opacity-90 transition-all duration-300 shadow-intellectual"
              onClick={() => onPageChange('works')}
            >
              <Code className="w-4 h-4 mr-2" />
              作品を見る
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-32 border-intellectual hover:bg-secondary/20 transition-all duration-300"
              onClick={() => onPageChange('profile')}
            >
              <Palette className="w-4 h-4 mr-2" />
              プロフィール
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-secondary/30 transition-all duration-300 shadow-intellectual"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-secondary/30 transition-all duration-300 shadow-intellectual"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <button
              onClick={() => onPageChange('contact')}
              className="p-3 rounded-full glass-effect hover:bg-secondary/30 transition-all duration-300 shadow-intellectual"
            >
              <Mail className="w-6 h-6 text-primary" />
            </button>
          </div>
          
          {/* 技術要素の装飾 */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto opacity-60">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-secondary/20 rounded-lg flex items-center justify-center mb-2">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Clean Code</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-secondary/20 rounded-lg flex items-center justify-center mb-2">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">UI/UX Design</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-secondary/20 rounded-lg flex items-center justify-center mb-2">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Innovation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Float Test Text */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
        <ScrollFloat 
          className="font-bold text-muted-foreground"
        >
          YAMADA NAO
        </ScrollFloat>
      </div>
    </div>
  );
}