import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-6">私について</h2>
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
      </div>
    </section>
  );
}