import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ScrollFloat from "./ScrollFloatSimple";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 pb-40">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-medium mb-4">僕について</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          技術力とコミュニケーション力を両立し、ゲーム業界での実務経験を活かして
          システム開発・データ分析の分野で価値創造に取り組んでいます。
          AI活用による効率化と、ユーザー中心設計を重視したシステム構築が得意です。
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
              「技術×コミュニケーション×継続的改善」を軸に、システム全体を俯瞰した価値創造を重視しています。
              単なる機能実装に留まらず、ユーザーが直感的に使える「マニュアル不要」な設計と、
              チーム全体の生産性向上を実現することにこだわっています。
              最新のAI技術を積極的に活用し、開発効率と品質の両立を追求しています。
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
                  「マニュアル不要」を目指した直感的なシステム設計を重視しています。
                  エンドユーザーの視点に立ち、使いやすさと機能性を両立したソリューションを提供します。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">02. データドリブンな意思決定</h3>
                <p className="text-muted-foreground">
                  売上データ分析から業務改善提案まで、データに基づいた論理的なアプローチを実践。
                  SQL、Python、Google Cloudを活用した包括的なデータパイプラインを構築しています。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">03. AI活用による生産性革命</h3>
                <p className="text-muted-foreground">
                  ChatGPTを活用した未経験技術の習得加速、開発効率化を実践。
                  従来の学習・開発手法にAI支援を統合し、短期間での高品質なシステム構築を実現します。
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
                  <span className="text-primary mr-2">●</span>前向きな姿勢
                </h3>
                <p className="text-muted-foreground text-sm">
                  困難な状況でも笑顔とポジティブな姿勢を維持し、チーム全体の士気向上に貢献します。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="text-primary mr-2">●</span>情報収集・分析力
                </h3>
                <p className="text-muted-foreground text-sm">
                  IT業界の最新動向をキャッチアップし、データに基づいた論理的な判断を行います。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="text-primary mr-2">●</span>効率化への取り組み
                </h3>
                <p className="text-muted-foreground text-sm">
                  Python、VBA、AIツールを活用した業務自動化で、チーム全体の生産性向上を実現します。
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="text-primary mr-2">●</span>メンタルケア
                </h3>
                <p className="text-muted-foreground text-sm">
                  演劇部部長経験に基づく、メンバーの状況察知と適切なサポートでチーム結束を強化します。
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
              システム開発を通じて、ユーザーと組織の両方に価値を提供することが私の使命です。
              技術的な専門性と高いコミュニケーション能力を活かし、複雑な課題をシンプルで使いやすい
              ソリューションに変換することで、ビジネスの成長と効率化に貢献したいと考えています。
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              今後は、データ分析とAI活用の専門性をさらに深め、
              技術とビジネスを繋ぐ架け橋として、新しい価値創造に挑戦し続けます。
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