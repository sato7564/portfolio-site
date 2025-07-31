import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ScrollFloat from "./ScrollFloatSimple";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 pb-40">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-medium mb-4">私について</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          「思い立ったら、すぐ形に」をモットーに、ゲーム開発からビジネス領域まで幅広く挑戦しています。
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 信条・理念 */}
        <Card>
          <CardHeader>
            <CardTitle>信条</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              「企画力・開発力・統率力の三位一体」を大切にしています。アイデアを形にするだけでなく、
              チームを率いて品質の高いプロダクトを完成させることにこだわっています。
              新しい技術やAIの活用も積極的に取り入れ、常に成長し続けることを心がけています。
            </p>
          </CardContent>
        </Card>

        {/* アプローチ */}
        <Card>
          <CardHeader>
            <CardTitle>アプローチ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">01. チームファースト</h3>
                <p className="text-muted-foreground">
                  個人の力ではなく、チーム全体の力を最大化することを大切にしています。
                  メンバーの強みを見極め、適材適所の役割分担でプロジェクトを成功に導きます。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">02. 継続的な改善</h3>
                <p className="text-muted-foreground">
                  完成したプロジェクトでも、常に改善の余地があると考えています。
                  定期的な振り返りとフィードバックを通じて、より良いプロダクトへと育てていきます。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">03. 新技術の積極活用</h3>
                <p className="text-muted-foreground">
                  AI技術や最新の開発ツールを積極的に取り入れ、開発効率の向上を図っています。
                  伝統的な手法と新しいアプローチを組み合わせ、最適な解決策を提供します。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 価値観 */}
        <Card>
          <CardHeader>
            <CardTitle>大切にしていること</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="text-primary mr-2">●</span>透明性
                </h3>
                <p className="text-muted-foreground text-sm">
                  オープンなコミュニケーションを心がけ、プロジェクトの進捗や課題を率直に共有します。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="text-primary mr-2">●</span>継続的学習
                </h3>
                <p className="text-muted-foreground text-sm">
                  技術の進化に対応し続けるため、常に新しい知識を吸収し、スキルを磨いています。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="text-primary mr-2">●</span>品質へのこだわり
                </h3>
                <p className="text-muted-foreground text-sm">
                  妥協せず、細部まで丁寧に作り込むことで、長く愛されるプロダクトを目指します。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="text-primary mr-2">●</span>チームワーク
                </h3>
                <p className="text-muted-foreground text-sm">
                  個人の力だけでなく、チーム全体の力を引き出すことで、より大きな成果を生み出します。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ビジョン */}
        <Card>
          <CardHeader>
            <CardTitle>ビジョン</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              テクノロジーを通じて、人々の生活をより豊かで便利にすることが私の使命です。
              単なる機能的なソリューションではなく、使う人の心に響き、日々の生活に溶け込む
              プロダクトを創造し続けたいと考えています。
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              これからも、デザインとエンジニアリングの境界を越えて、
              新しい価値を生み出すことに挑戦し続けます。
            </p>
          </CardContent>
        </Card>
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