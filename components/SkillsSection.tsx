import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "システム開発・データ分析",
      skills: ["SQL", "Python", "Google Cloud", "Looker Studio", "BigQuery", "データパイプライン", "業務自動化", "VBA"]
    },
    {
      title: "ゲーム開発・プログラミング",
      skills: ["C++", "Unity", "C#", "DirectX 11", "メモリ管理", "A*アルゴリズム", "マルチプレイ", "ゲームエンジン"]
    },
    {
      title: "Web・モダン技術",
      skills: ["React", "TypeScript", "JavaScript", "LINE API", "Tailwind CSS", "Obsidian", "Git", "フルスタック開発"]
    },
    {
      title: "AI・最新技術活用",
      skills: ["ChatGPT活用", "AI画像生成", "Live2D", "AI音声変換", "Claude Code", "効率化", "学習加速", "プロンプトエンジニアリング"]
    },
    {
      title: "リーダーシップ・マネジメント",
      skills: ["チームリーダー", "プロジェクト管理", "Trello", "Slack", "メンタルケア", "20人以上統率", "演出・指導", "コミュニケーション"]
    },
    {
      title: "クリエイティブ・ビジネス",
      skills: ["キャラクターデザイン", "LINEスタンプ", "SNSマーケティング", "4コマ漫画", "Vtuber制作", "受託開発", "商用品質", "ユーザー中心設計"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4">スキル & 専門領域</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ゲーム開発から現在のビジネスシステム開発まで、技術・マネジメント・クリエイティブを
            横断する多様なスキルセットで価値創造に取り組んでいます。
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}