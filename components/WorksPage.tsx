import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import RollingGallery from "./RollingGallery";
import ScrollFloat from "./ScrollFloatSimple";
import { getProjectImage, getProjectScreenshots, getProjectVideo, projectImages } from "../src/data/projectImages";

export function WorksPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseProjects = [
    {
      title: "おえかきシューター",
      description: "「描いたイラストが動く！」をコンセプトにした子供向けシューティングゲーム。神戸電子専門学校のゲームコンペでアイディア賞を受賞。初のチーム制作でリーダーとして6人を統括。",
      longDescription: "1年次のチーム制作で開発した、子供向けシューティングゲームです。プレイヤーが描いた絵がそのままゲーム内のキャラクターとして動き出す、創造性を刺激する作品。Trelloを活用したタスク管理と半月ごとの満足度アンケートでチーム運営を成功させました。",
      image: getProjectImage("おえかきシューター"),
      images: getProjectScreenshots("おえかきシューター"),
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
      image: getProjectImage("裏斬リッシュ（うらぎりっしゅ）"),
      images: getProjectScreenshots("裏斬リッシュ（うらぎりっしゅ）"),
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
      image: getProjectImage("メービードゥーン"),
      images: getProjectScreenshots("メービードゥーン"),
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
      image: getProjectImage("Claim"),
      images: getProjectScreenshots("Claim"),
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
      image: getProjectImage("LINE占いコンテンツ開発"),
      images: getProjectScreenshots("LINE占いコンテンツ開発"),
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
      image: getProjectImage("持たないで、モアイさん"),
      images: getProjectScreenshots("持たないで、モアイさん"),
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
      image: getProjectImage("多得ルワー子（Vtuber）"),
      images: getProjectScreenshots("多得ルワー子（Vtuber）"),
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
    },
    {
      title: "演劇サークル立ち上げ・舞台公演",
      description: "毎回の公演で異なるジャンルに挑戦（コメディ・ミステリー・アクション等）し、多様な観客層を獲得。学園祭での最大集客イベントを実現。",
      longDescription: "大学で演劇サークルを立ち上げ、年2回の公演を企画・実施。学園祭では300人規模の観客を動員し、大学イベントとしては最大級の集客を達成。限られた予算（2万円）で舞台装置や衣装を工夫し、観客満足度の高い公演を実現しました。",
      image: getProjectImage("演劇サークル立ち上げ・舞台公演"),
      images: getProjectScreenshots("演劇サークル立ち上げ・舞台公演"),
      tags: ["演劇", "イベント企画", "リーダーシップ", "マーケティング"],
      category: "エンターテインメント",
      year: "大学時代",
      team: "15-20人",
      featured: false,
      achievement: "学園祭最大集客イベント",
      features: [
        "年2回の定期公演の企画・実施",
        "多様なジャンルへの挑戦（コメディ・ミステリー・アクション）",
        "限られた予算での効果的な舞台演出",
        "学園祭での300人規模の集客達成",
        "持続可能な運営体制の構築"
      ],
      techDetails: "エンターテインメントの本質を追求し、観客を楽しませることに特化。限られたリソースでも工夫次第で高品質なコンテンツが作れることを実証しました。"
    },
    {
      title: "イナズマイレブン - サッカーシステム開発",
      description: "業務で関わった人気ゲームシリーズのサッカープログラマーとして、試合シーンのシステム開発を担当。",
      longDescription: "人気ゲームシリーズの開発に参加し、サッカーゲームの中核となる試合システムの実装を担当。複雑なゲームロジックと演出の両立を図りながら、プレイヤーが楽しめるゲーム体験を追求しました。",
      image: getProjectImage("イナズマイレブン - サッカーシステム開発"),
      images: getProjectScreenshots("イナズマイレブン - サッカーシステム開発"),
      tags: ["ゲーム開発", "Unity", "C#", "システム設計"],
      category: "ゲーム開発",
      year: "業務経験",
      team: "開発チーム",
      featured: false,
      type: "商用開発",
      features: [
        "サッカーゲームシステムの実装",
        "複雑なゲームロジックの設計",
        "パフォーマンス最適化",
        "チーム開発での協働"
      ],
      techDetails: "大規模商用タイトルの開発において、品質とパフォーマンスを両立させるシステム設計を実現。"
    },
    {
      title: "創作漫画制作",
      description: "趣味で描いている創作漫画。独自の世界観とキャラクターを創造し、ストーリーテリングの技術を磨いています。",
      longDescription: "ゲーム開発で培った「ユーザーを楽しませる」視点を活かし、読者を引き込む漫画作品を制作。キャラクターデザインからストーリー構成まで、総合的なコンテンツ制作スキルを実践しています。",
      image: getProjectImage("創作漫画制作"),
      images: getProjectScreenshots("創作漫画制作"),
      tags: ["漫画", "イラスト", "ストーリーテリング", "キャラクターデザイン"],
      category: "クリエイティブ",
      year: "2024年〜",
      team: "1人",
      featured: false,
      status: "進行中",
      features: [
        "オリジナルストーリーの創作",
        "魅力的なキャラクターデザイン",
        "読者を意識した構成",
        "継続的な作品制作"
      ],
      techDetails: "エンターテインメントの本質を追求し、読者に楽しんでもらえる作品作りを心がけています。"
    },
    {
      title: "共同ゲーム開発プロジェクト",
      description: "デザイナーとの共同制作で進めているゲーム開発プロジェクト。お互いの強みを活かした協働開発を実践。",
      longDescription: "プロのデザイナーと協力して進めているゲーム開発プロジェクト。企画段階から綿密なコミュニケーションを取り、それぞれの専門性を活かした高品質なゲーム制作を目指しています。",
      image: getProjectImage("共同ゲーム開発プロジェクト"),
      images: getProjectScreenshots("共同ゲーム開発プロジェクト"),
      tags: ["Unity", "ゲーム開発", "チーム制作", "プロジェクト管理"],
      category: "ゲーム開発",
      year: "2024年〜",
      team: "2人",
      featured: false,
      status: "開発中",
      features: [
        "デザイナーとの協働開発",
        "役割分担の明確化",
        "定期的なミーティングとフィードバック",
        "品質重視の開発プロセス"
      ],
      techDetails: "異なる専門性を持つメンバーとの協働により、より洗練されたゲーム体験の実現を目指しています。"
    },
    {
      title: "業務解析ダッシュボード開発",
      description: "Looker StudioとPostgreSQLを活用した業務解析ツールの開発。データの可視化により業務効率を大幅に改善。",
      longDescription: "現職で開発した業務解析ダッシュボード。複雑なデータを直感的に理解できるよう設計し、経営判断の迅速化に貢献。SQLの最適化により、大量データの高速処理を実現しました。",
      image: getProjectImage("業務解析ダッシュボード開発"),
      images: getProjectScreenshots("業務解析ダッシュボード開発"),
      tags: ["Looker Studio", "PostgreSQL", "データ分析", "BI"],
      category: "ビジネス開発",
      year: "2024年",
      team: "1人",
      featured: false,
      type: "業務開発",
      features: [
        "リアルタイムデータの可視化",
        "直感的なダッシュボード設計",
        "SQLクエリの最適化",
        "業務効率の大幅改善"
      ],
      techDetails: "データドリブンな意思決定を支援するツールとして、実際の業務で活用されています。"
    },
    {
      title: "音楽制作活動",
      description: "趣味で行っている音楽制作。DTMを活用してオリジナル楽曲を制作し、創造性の幅を広げています。",
      longDescription: "ゲーム開発とは異なる創造的な活動として音楽制作に取り組んでいます。メロディー構成から音響効果まで、総合的な音楽制作スキルを独学で習得。作品はYouTubeで公開しています。",
      image: getProjectImage("音楽制作活動"),
      images: getProjectScreenshots("音楽制作活動"),
      tags: ["DTM", "作曲", "音楽制作", "YouTube"],
      category: "クリエイティブ",
      year: "2024年〜",
      team: "1人",
      featured: false,
      status: "進行中",
      features: [
        "オリジナル楽曲の制作",
        "DTMソフトウェアの活用",
        "音響効果の研究",
        "YouTubeでの作品公開"
      ],
      techDetails: "音楽という異なる表現媒体を通じて、エンターテインメントの可能性を探求しています。"
    }
  ];

  // プロジェクトに動画情報を追加
  const projects = baseProjects.map(project => {
    const projectData = projectImages[project.title];
    return {
      ...project,
      video: getProjectVideo(project.title),
      videos: projectData?.videos || null
    };
  });

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
              <div className="aspect-[16/12] overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                  {'liveUrl' in project && project.liveUrl ? (
                    <Button size="sm" className="flex-1 intellectual-gradient hover:opacity-90" asChild>
                      <a href={project.liveUrl as string} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  ) : null}
                  {'githubUrl' in project && project.githubUrl ? (
                    <Button size="sm" variant="outline" className="border-intellectual hover:bg-secondary/20" asChild>
                      <a href={project.githubUrl as string} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  ) : null}
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