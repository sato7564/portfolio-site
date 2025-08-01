import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ScrollFloat from "./ScrollFloatSimple";
import Orb from "./Orb";
import GlareHover from "./GlareHover";

export function ProfilePage() {
  const skillCategories = [
    {
      title: "ゲーム開発",
      skills: ["Unity", "C#", "DirectX 11", "C++", "ゲームデザイン", "Live2D"]
    },
    {
      title: "Web開発",
      skills: ["JavaScript", "LINE API", "React", "TypeScript", "Node.js", "HTML/CSS"]
    },
    {
      title: "ツール & スキル",
      skills: ["AI活用", "Git", "Trello", "Slack", "プロジェクト管理", "チームマネジメント"]
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
              こんにちは！岡悟史です。26歳のゲームプログラマー・クリエイターとして、
              「思い立ったら、すぐ形に」をモットーに企画から開発まで一貫して手がけています。
            </p>
            <p>
              株式会社レベルファイブでのゲーム開発経験を活かし、現在は独立してLINE占いコンテンツ、
              Vtuberプロジェクト、キャラクタービジネスなど多分野でのプロジェクトを推進しています。
            </p>
            <p>
              企画力・開発力・統率力をバランスよく備え、チームを率いて数々の受賞作品を生み出してきました。
              AI技術の活用にも積極的で、常に新しい技術に挑戦し続けています。
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4">経歴</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">プログラマー</h4>
                <p className="text-muted-foreground text-sm">株式会社レベルファイブ • 2022年4月 - 2024年8月</p>
                <p className="text-sm mt-2">イナズマイレブン 英雄たちのヴィクトリーロードの開発。日本ゲーム大賞2023フューチャー賞受賞作品。</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-medium">独立・個人開発</h4>
                <p className="text-muted-foreground text-sm">2024年9月 - 現在</p>
                <p className="text-sm mt-2">LINE占いコンテンツ、Vtuberプロジェクト、モアイキャラクタービジネスなど多分野でのプロジェクトを推進。</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-medium">神戸電子専門学校</h4>
                <p className="text-muted-foreground text-sm">エンターテインメントソフト学科 • 2018年 - 2022年</p>
                <p className="text-sm mt-2">チーム制作でリーダーを務め、アイディア賞など複数の受賞実績。Unity開発の基礎を習得。</p>
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
            <Card className="w-full h-full overflow-hidden">
              <CardContent className="p-0 h-full">
                <ImageWithFallback
                  src="/images/profile.png"
                  alt="岡悟史のプロフィール写真"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
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