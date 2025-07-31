import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import RollingGallery from "./RollingGallery";
import ScrollFloat from "./ScrollFloatSimple";

export function WorksPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      title: "おえかきシューター",
      description: "「描いたイラストが動く！」をコンセプトにした子供向けシューティングゲーム。神戸電子専門学校のゲームコンペでアイディア賞を受賞。初のチーム制作でリーダーとして6人を統括。",
      longDescription: "1年次のチーム制作で開発した、子供向けシューティングゲームです。プレイヤーが描いた絵がそのままゲーム内のキャラクターとして動き出す、創造性を刺激する作品。Trelloを活用したタスク管理と半月ごとの満足度アンケートでチーム運営を成功させました。",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop"
      ],
      tags: ["Unity", "C#", "チーム開発", "Trello", "ゲームデザイン"],
      category: "ゲーム開発",
      year: "専門学校1年次",
      team: "6人",
      featured: true,
      award: "神戸電子専門学校ゲームコンペ「アイディア賞」",
      features: [
        "お絵かき機能とシューティングゲームの融合",
        "子供向けの直感的なUI設計",
        "クリックやカーソル移動に反応する遊び心のある演出",
        "Trelloを活用した効率的なプロジェクト管理",
        "チームメンバーの満足度を重視した運営"
      ],
      techDetails: "Unityで開発し、子供の創造力を育むゲームシステムを実現。初めてのチーム開発でしたが、管理ツールの活用と定期的な振り返りにより、計画通りプロジェクトを完走させることができました。"
    },
    {
      title: "裏斬リッシュ（うらぎりっしゅ）",
      description: "4人プレイヤーの中に潜む1人の裏切り者を探す人狼系アクションゲーム。「Among Us」に戦隊もの・仮面ライダーの要素を融合。卒業制作として8人チームを統括。",
      longDescription: "卒業制作として開発した、オンライン対戦型の人狼系アクションゲームです。リアルタイムバトルと推理要素を組み合わせ、日本の特撮文化を取り入れた独自の演出が特徴。これまでの経験を総動員し、8人という最大規模のチームを成功に導きました。",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1598875706250-21faaf804361?w=800&h=600&fit=crop"
      ],
      tags: ["Unity", "C#", "オンラインマルチプレイ", "ゲームデザイン", "チームリーダー"],
      category: "ゲーム開発",
      year: "専門学校卒業制作",
      team: "8人",
      featured: true,
      competition: "ゲームクリエイター甲子園応募",
      features: [
        "4人対戦のオンラインマルチプレイ実装",
        "アクションと推理要素の融合",
        "戦隊もの風の演出（変身シーン、決めポーズ等）",
        "コミカルなダンスシーンと印象的な撃墜演出",
        "8人規模のチーム管理と開発統括"
      ],
      techDetails: "Unity＋オンラインマルチプレイで、リアルタイム同期と低遅延を実現。専門学校で培ったすべての経験を注ぎ込んだ集大成作品として、技術的にも内容的にも充実した作品を完成させました。"
    },
    {
      title: "メービードゥーン",
      description: "魚型クリーチャーを使役して洞窟を探索するアクションゲーム。コロナ禍でのオンライン開発を成功させ、日本ゲーム大賞アマチュア部門に応募。",
      longDescription: "3年次のチーム制作で開発した、魚型のクリーチャーを使役して洞窟を探索するアクションゲームです。コロナ禍という制約の中、朝夕のミーティングとGitを活用してオンライン開発を成功させました。各メンバーがUnityの特定機能のプロフェッショナルになることを目指し、チーム全体の技術力向上を実現。",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=800&h=600&fit=crop"
      ],
      tags: ["Unity", "C#", "Git", "オンライン開発", "チームリーダー"],
      category: "ゲーム開発",
      year: "専門学校3年次",
      team: "6人",
      featured: true,
      competition: "日本ゲーム大賞アマチュア部門",
      features: [
        "魚型クリーチャーの多彩なアクション",
        "広大な洞窟ステージの探索要素",
        "OPムービーや図鑑機能などの充実したコンテンツ",
        "オンライン開発体制の確立（朝夕ミーティング）",
        "メンバーの専門性向上を重視した開発"
      ],
      techDetails: "Unity開発において、各メンバーが特定機能（シェーダー、AI、UI等）のエキスパートになることで、チーム全体の技術力を向上。大規模プロジェクトながら計画的な開発により完成度の高い作品に仕上げました。"
    },
    {
      title: "Claim",
      description: "顔面が迫りくるホラーゲーム。DirectX 11を使用した技術的に挑戦的な個人制作作品。A*経路探索アルゴリズムとステージエディタを自力で実装。",
      longDescription: "2年次に就職活動用として制作した、技術力をアピールするホラーゲームです。Unity等の既存エンジンを使わず、DirectX 11 APIを直接使用して開発。A*経路探索アルゴリズムによる賢い敵AIや、ステージエディタの実装など、低レベルプログラミングの深い理解を示す作品です。",
      image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=800&h=600&fit=crop"
      ],
      tags: ["DirectX 11", "C++", "A*アルゴリズム", "ホラーゲーム", "個人制作"],
      category: "ゲーム開発",
      year: "専門学校2年次",
      team: "1人（個人制作）",
      featured: false,
      features: [
        "DirectX 11を直接使用した低レベル開発",
        "A*経路探索アルゴリズムの自力実装",
        "ステージエディタの開発",
        "効果的なホラー演出の実装",
        "調査力と粘り強さで技術的課題を克服"
      ],
      techDetails: "既存エンジンに頼らず、DirectX 11 APIを直接使用することで、グラフィックスプログラミングの深い理解を獲得。短期間でインパクトのある作品を作るという目標を達成し、技術力の高さを証明しました。"
    },
    {
      title: "LINE占いコンテンツ開発",
      description: "LINE公式アカウント上で動作する占いコンテンツ。JavaScript未経験ながらAI活用により2ヶ月で商用レベルの品質を実現。",
      longDescription: "知人からの依頼で開発した、LINE公式アカウント上で動作する占いコンテンツです。LINE開発やJavaScriptが未経験でしたが、AIを活用した効率的な開発手法により、約2ヶ月という短期間で実装を完了。非エンジニアでも占い内容を更新できるデータエディタも開発し、運用面まで考慮したシステムを構築しました。",
      image: "https://images.unsplash.com/photo-1632772998017-15e4a8ec0f17?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1632772998017-15e4a8ec0f17?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop"
      ],
      tags: ["JavaScript", "LINE API", "AI活用", "データエディタ", "商用開発"],
      category: "ビジネス開発",
      year: "2024年9-10月",
      team: "1人",
      featured: false,
      type: "受託開発",
      features: [
        "LINE Messaging APIを活用した占いシステム",
        "AIを活用した効率的な開発プロセス",
        "非エンジニア向けデータエディタの開発",
        "商用レベルの品質とUX",
        "2ヶ月という短期間での完成"
      ],
      techDetails: "未経験技術への挑戦でしたが、AIツールを戦略的に活用することで学習と開発を同時進行。社会人経験で培った問題解決能力により、短期間で商用レベルのシステムを構築できました。"
    },
    {
      title: "持たないで、モアイさん",
      description: "モアイをモチーフにしたキャラクタービジネス。LINEスタンプ販売とX(Twitter)での4コマ漫画配信を展開中。",
      longDescription: "「自分のイラストを商品にしたい」という思いから始めたキャラクタービジネスプロジェクトです。趣味のタロットカードから着想を得た独自性のあるキャラクター「モアイさん」を創造。「持つ」というアクションを強調することで、グッズ展開やキャラクターへの親しみを深める工夫をしています。",
      image: "https://images.unsplash.com/photo-1656337875867-c83bb0e50c67?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1656337875867-c83bb0e50c67?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578761499019-d71ff2d0e433?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=800&h=600&fit=crop"
      ],
      tags: ["キャラクターデザイン", "LINEスタンプ", "SNSマーケティング", "イラスト"],
      category: "キャラクタービジネス",
      year: "2024年10月〜",
      team: "1人",
      featured: false,
      status: "進行中",
      features: [
        "独自性のあるキャラクターデザイン",
        "LINEスタンプとしての商品化",
        "X(Twitter)での定期的な4コマ漫画配信",
        "「持つ」アクションを活かしたグッズ展開計画",
        "ファンとのインタラクション重視"
      ],
      techDetails: "ゲーム開発で培った「ユーザーを楽しませる」視点を活かし、親しみやすいキャラクター作りを実現。SNSマーケティングを通じて認知度向上を図り、将来的なIPビジネス化を目指しています。"
    },
    {
      title: "多得ルワー子（Vtuber）",
      description: "AI画像生成、Live2D、AI音声変換などの最新技術を駆使したVtuberプロジェクト。技術的な挑戦を通じてエンターテイメントを創出。",
      longDescription: "最新技術を活用してエンターテイメントを創出する試みとして始めたVtuberプロジェクトです。AIによる画像生成でキャラクターデザインを作成し、Live2Dでモデリング、AI音声変換で声を作成。フェイストラッキングにより滑らかに動くVtuberを実現しました。",
      image: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1649183424680-464747a8e43d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1636955779321-819753cd1741?w=800&h=600&fit=crop"
      ],
      tags: ["AI画像生成", "Live2D", "AI音声変換", "フェイストラッキング", "配信技術"],
      category: "エンターテインメント",
      year: "2024年10月〜",
      team: "1人",
      featured: false,
      status: "進行中",
      features: [
        "AI技術を活用したキャラクター制作",
        "Live2Dによる自然な動きの実現",
        "AI音声変換でのキャラクターボイス",
        "フェイストラッキングによる表情豊かな演出",
        "複数の最新技術の統合"
      ],
      techDetails: "社会人経験で培った問題解決能力を活かし、トライ＆エラーを繰り返すことで、複数の最新技術を統合したシステムを構築。技術的な挑戦を通じて、新しいエンターテイメントの形を模索しています。"
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-20 pb-40">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground border border-secondary">
          <Award className="w-3 h-3 mr-1" />
          All Projects
        </Badge>
        <h1 className="text-4xl font-medium mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          プロジェクト一覧
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          これまでに手がけたプロジェクトをご紹介します。
          それぞれ異なる技術スタックと課題に取り組み、ユーザーのニーズに応える解決策を提供しています。
        </p>
      </div>
      
      {/* ローリングギャラリー */}
      <div className="mb-12">
        <RollingGallery 
          images={projects.map(p => p.image)}
          autoplay={true}
          pauseOnHover={true}
          onImageClick={(index) => handleProjectClick(projects[index])}
        />
      </div>
      
      {/* プロジェクト一覧 */}
      <div>
        <h2 className="text-2xl font-medium text-center mb-8">すべてのプロジェクト</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-intellectual transition-all duration-500 border-intellectual cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs border-intellectual">
                    {project.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.team}
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-secondary/50">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1 intellectual-gradient hover:opacity-90" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="border-intellectual hover:bg-secondary/20" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* プロジェクト詳細モーダル */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

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