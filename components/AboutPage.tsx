import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import ScrollFloat from "./ScrollFloatSimple";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 pb-40">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-medium mb-4">私について</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          デザインとエンジニアリングの交差点で、価値あるプロダクトを生み出すことに情熱を注いでいます。
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
              「美しさと機能性の両立」を常に追求しています。優れたデザインは見た目だけでなく、
              使いやすさと性能を兼ね備えているべきだと考えています。細部にこだわり抜くことで、
              ユーザーにとって本当に価値のある体験を創造することを目指しています。
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
                <h3 className="font-medium mb-2">01. ユーザー中心設計</h3>
                <p className="text-muted-foreground">
                  すべてのプロジェクトは、エンドユーザーのニーズから始まります。
                  徹底的なリサーチと分析を通じて、真の課題を理解し、最適な解決策を提案します。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">02. イテレーティブな開発</h3>
                <p className="text-muted-foreground">
                  完璧を求めすぎず、素早くプロトタイプを作成し、フィードバックを収集して改善を重ねます。
                  この反復的なプロセスにより、より良い成果物を生み出します。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">03. 技術の適材適所</h3>
                <p className="text-muted-foreground">
                  最新技術を追いかけるだけでなく、プロジェクトに最適な技術を選択します。
                  シンプルさと保守性を重視し、長期的に価値を提供できるソリューションを構築します。
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
            YAMADA NAO
          </ScrollFloat>
        </div>
      </div>
    </div>
  );
}