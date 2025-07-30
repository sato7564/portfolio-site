import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ScrollFloat from "./ScrollFloatSimple";

export function ProfilePage() {
  const skillCategories = [
    {
      title: "フロントエンド",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand"]
    },
    {
      title: "バックエンド",
      skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "Prisma", "REST API"]
    },
    {
      title: "ツール & その他",
      skills: ["Git", "Docker", "Figma", "Jest", "Cypress", "Vercel"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* プロフィール情報 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl font-medium mb-6">プロフィール</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              こんにちは！山田直央です。5年以上の経験を持つフロントエンドデベロッパーとして、
              ユーザー中心の設計と最新技術を組み合わせて、魅力的なWebアプリケーションを作成しています。
            </p>
            <p>
              私は特にReact、TypeScript、そしてモダンなCSS技術に精通しており、
              パフォーマンスとアクセシビリティを重視した開発を心がけています。
            </p>
            <p>
              新しい技術を学ぶことが大好きで、常にベストプラクティスを追求し、
              チームと協力して素晴らしいプロダクトを生み出すことに情熱を注いでいます。
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4">経歴</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">シニア フロントエンドエンジニア</h4>
                <p className="text-muted-foreground text-sm">株式会社テクノロジー • 2022年4月 - 現在</p>
                <p className="text-sm mt-2">React/TypeScriptを使用したWebアプリケーションの設計・開発を担当。チームリードとして新人エンジニアの指導も行っています。</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-medium">フロントエンドエンジニア</h4>
                <p className="text-muted-foreground text-sm">株式会社ウェブソリューション • 2020年4月 - 2022年3月</p>
                <p className="text-sm mt-2">Vue.js、Reactを使用したECサイトやコーポレートサイトの開発に従事。</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <h4 className="font-medium">Webデザイナー・コーダー</h4>
                <p className="text-muted-foreground text-sm">フリーランス • 2019年4月 - 2020年3月</p>
                <p className="text-sm mt-2">個人事業主として、小規模企業向けのWebサイト制作を手がけました。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <Card className="w-80 h-96 overflow-hidden">
            <CardContent className="p-0 h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="山田直央のプロフィール写真"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
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
      <div className="relative mt-32 mb-16">
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