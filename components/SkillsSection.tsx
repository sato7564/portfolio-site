import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function SkillsSection() {
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
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4">スキル & 技術</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            幅広い技術スタックを使用して、スケーラブルで保守性の高いアプリケーションを構築しています。
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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