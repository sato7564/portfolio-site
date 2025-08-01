import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ScrollFloat from "./ScrollFloatSimple";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 pb-40">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-medium mb-4">エンジニアとしての軸</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          エンジニアとして技術力を磨きつつ、チームワークも大事にしています。<br />
          ゲーム開発の経験を生かして、今はシステム開発とデータ分析の世界で<br />
          価値のあるものを作ろうと頑張っています。<br />
          AIを活用した効率化と誰でも使いやすいシステム設計が得意分野です！
        </p>
      </div>
      

      {/* Scroll Float Text */}
      <div className="relative mt-32 h-48">
        <div className="absolute left-1/2 -translate-x-1/2">
        <ScrollFloat 
            className="font-bold text-muted-foreground"
          >
            OKA SATOSHI
          </ScrollFloat>
        </div>
      </div>
    </div>
  );
}