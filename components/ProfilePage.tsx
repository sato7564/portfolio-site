import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ScrollFloat from "./ScrollFloatSimple";
import Orb from "./Orb";
import GlareHover from "./GlareHover";

export function ProfilePage() {
  const skillCategories = [
    {
      title: "システム開発",
      skills: ["Unity", "C#", "DirectX 11", "C++", "JavaScript", "React", "TypeScript", "LINE API", "SQL", "Python"]
    },
    {
      title: "ツール",
      skills: ["Git", "GitHub", "Trello", "Slack", "Looker Studio", "Photoshop", "Aviutl", "Spreadsheets"]
    },
    {
      title: "スキル",
      skills: ["AI活用開発", "プロジェクト管理", "チームマネジメント", "ゲームデザイン", "Live2D", "データ分析", "UI/UX設計"]
    }
  ];

  return (
    <div className="relative">
      {/* Orbバックグラウンド */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-96 h-96 opacity-30">
          <Orb hue={200} hoverIntensity={0} rotateOnHover={false} forceHoverState={false} />
        </div>
        <div className="absolute bottom-20 left-10 w-64 h-64 opacity-20">
          <Orb hue={120} hoverIntensity={0} rotateOnHover={false} forceHoverState={false} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 pb-40 relative z-10">
        {/* プロフィール情報 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl font-medium mb-6">プロフィール</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              こんにちは、岡悟史です。26歳のシステムエンジニアとして、現在AI駆動開発の領域に専門的に取り組んでいます。
            </p>
            <p>
              従来はバックエンド開発を中心としたキャリアを歩んでいましたが、UI/UXデザインやフロントエンド技術への関心から技術領域の拡張を模索していました。
              AI技術の急速な発展により、これまでのスキルセットを核として活用しながら、包括的な開発が可能となり、現在大きな技術的成長を実感しています。
            </p>
            <p>
              ネットワークアーキテクチャとデータベース設計の基盤知識強化のため、応用情報技術者試験の取得を目指しており、
              将来的にはフルスタックエンジニアとして開発をリードしたいと考えています。
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4">経歴</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">システムエンジニア</h4>
                <p className="text-muted-foreground text-sm">サングローブ株式会社 • 2025年2月 - 現在</p>
                <p className="text-sm mt-2">営業支援企業にて、業務データの解析・設計・実装を一貫して担当。SQL/GAS/Pythonを活用した機能開発と連携処理、ダッシュボード構築による営業データ分析を実施。</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-medium">プログラマー</h4>
                <p className="text-muted-foreground text-sm">株式会社レベルファイブ • 2022年4月 - 2024年8月</p>
                <p className="text-sm mt-2">イナズマイレブン 英雄たちのヴィクトリーロードの開発。日本ゲーム大賞2023フューチャー賞受賞作品。</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-medium">個人開発</h4>
                <p className="text-muted-foreground text-sm">2024年9月 - 2025年1月</p>
                <p className="text-sm mt-2">LINE占いコンテンツ、Vtuber制作、キャラクタービジネス、プログラミングコンテストなど多分野での勉強と創作に取り組む。</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-medium">神戸電子専門学校</h4>
                <p className="text-muted-foreground text-sm">エンターテインメントソフト学科 • 2018年 - 2022年</p>
                <p className="text-sm mt-2">チームでのシステム/ゲーム開発を行い、アイディア賞など複数の受賞実績。</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-medium">演劇部 部長</h4>
                <p className="text-muted-foreground text-sm">神戸龍谷高等学校 • 2015年 - 2017年</p>
                <p className="text-sm mt-2">18人の部員を統率し、市大会優秀賞を受賞。チームマネジメントとメンタルケアの経験を積む。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <GlareHover
            width="320px"
            height="384px"
            background="transparent"
            borderRadius="0.5rem"
            borderColor="transparent"
            glareColor="#ffffff"
            glareOpacity={0.4}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="w-full h-full flex items-center justify-center">
              <ImageWithFallback
                src="/images/profile.png"
                alt="岡悟史のプロフィール写真"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </GlareHover>
        </div>
      </div>

      {/* スキル */}
      <div>
        <h2 className="text-3xl font-medium mb-8 text-center">スキル & 技術</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4 text-center">{category.title}</h3>
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
    </div>
  );
}