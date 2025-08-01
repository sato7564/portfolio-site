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
      title: "イナズマイレブン - サッカーシステム開発",
      description: "子供の頃から憧れていた『イナズマイレブン』の商業ゲーム開発に参加。サッカーシステムとツール開発を担当し、エンドクレジットに名前が掲載される貴重な経験を積む。",
      longDescription: "子供の頃から好きだったタイトルである『イナズマイレブン』の開発に携わる貴重な機会を得て、主にサッカーシステムとツール開発を担当しました。商業ゲーム開発の現場で実際のプロダクトに貢献し、熟練エンジニアとの協働により「仕事としての開発」を学ぶ貴重な経験となりました。会社規模のプロジェクトでの分業体制や品質基準への適応を通じて、商業レベルの開発プロセスを習得しています。",
      image: getProjectImage("イナズマイレブン - サッカーシステム開発"),
      images: getProjectScreenshots("イナズマイレブン - サッカーシステム開発"),
      tags: ["Unity", "C#", "商業ゲーム開発", "サッカーシステム", "ツール開発", "チーム開発"],
      category: "商業ゲーム開発",
      year: "商業プロジェクト参加",
      team: "商業プロジェクト",
      featured: true,
      role: "サッカーシステム・ツール開発",
      status: "開発参加（未発売）",
      achievement: "エンドクレジット掲載",
      features: [
        "ゲームの核となるサッカーシステムの実装と調整",
        "開発効率向上のための専用ツール制作",
        "商業開発プロセスと品質基準への適応",
        "熟練エンジニアとのコードレビュー・設計レビュー参加",
        "会社規模プロジェクトでの分業体制習得",
        "エンドクレジットへの正式な開発者としての掲載",
        "幼少期の憧れ作品への実際の貢献"
      ],
      techDetails: "学生時代の8人規模チーム開発から、会社規模のプロジェクトへステップアップし、厳格な品質基準と効率的な分業体制を実体験。熟練エンジニアとの協働により、商業レベルでの技術力と開発プロセスの理解を大幅に向上させました。"
    },
    {
      title: "ポートフォリオサイト開発",
      description: "Claude Codeを活用した5日間の超高速開発。Obsidian情報アーキテクチャとAI協働ワークフローを確立し、フルスタック開発でのAI活用可能性を実証。",
      longDescription: "Claude Codeを活用して5日間で開発した現在のポートフォリオサイトです。Obsidianによる情報アーキテクチャ構築から、React・TypeScriptによるフロントエンド実装まで、AI協働による超高速開発ワークフローを実践。従来の開発手法では数週間を要するプロジェクトを、AI支援により短期間で高品質に完成させ、フルスタック開発におけるAI活用の可能性を実証しました。",
      image: getProjectImage("ポートフォリオサイト開発"),
      images: getProjectScreenshots("ポートフォリオサイト開発"),
      tags: ["React", "Claude Code", "AI協働開発", "Obsidian", "超高速開発", "TypeScript"],
      category: "Web開発",
      year: "2025年7月",
      team: "1人（AI協働）",
      duration: "5日間",
      featured: true,
      features: [
        "Claude CodeによるAI協働開発の実践",
        "Obsidian情報アーキテクチャとの統合",
        "React・TypeScriptによるモダンフロントエンド",
        "レスポンシブデザインとアニメーション実装",
        "5日間での完全なサイト構築",
        "AI活用による開発効率化の実証",
        "継続的な機能追加・改善"
      ],
      techDetails: "Claude Codeを戦略的に活用し、設計・実装・デバッグ・デプロイまで一貫したAI協働開発を実現。Obsidianのナレッジベースと連携することで、情報管理から実装まで効率化され、従来手法では不可能な開発速度と品質を両立させました。"
    },
    {
      title: "共同ゲーム開発プロジェクト",
      description: "プロデザイナーとの協働による自転車アクションゲーム開発。レトロポップなデザインとUnityアーキテクチャ学習を重視し、デバッグ手法と状態遷移パターンを習得中。",
      longDescription: "2025年5月から開始したプロのデザイナーとの協働ゲーム開発プロジェクトです。レトロポップなデザインテイストの自転車アクションゲームを制作中。デザイナーとプログラマーの効果的な協働体制を確立し、品質重視の開発プロセスを実践。Unityアーキテクチャの深い理解、デバッグ手法の習得、状態遷移パターンの学習など、技術的成長も重視したプロジェクト運営を行っています。",
      image: getProjectImage("共同ゲーム開発プロジェクト"),
      images: getProjectScreenshots("共同ゲーム開発プロジェクト"),
      tags: ["Unity", "C#", "デザイナー協働", "アーキテクチャ学習", "状態遷移", "レトロポップ"],
      category: "ゲーム開発",
      year: "2025年5月〜現在",
      team: "2人（プログラマー・デザイナー）",
      featured: false,
      status: "開発中",
      features: [
        "プロデザイナーとの効果的な協働開発体制",
        "レトロポップなデザインテイストのゲーム制作",
        "Unityアーキテクチャの深い理解と実践",
        "デバッグ手法・状態遷移パターンの習得",
        "定期的なミーティングと進捗共有",
        "品質重視の開発プロセス確立",
        "技術的成長と実践的学習の両立"
      ],
      techDetails: "異なる専門性を持つメンバーとの協働により、より洗練されたゲーム体験の実現を目指しています。技術的な学習も重視し、長期的なスキル向上を図りながらプロジェクトを進行しています。"
    },
    {
      title: "販売支援分析ダッシュボード",
      description: "現在Sunglobe社で開発中の包括的なデータ分析システム。SQL、Python、Google Cloudを活用し、データ収集から可視化まで一気通貫で設計・実装。売上データ分析とビジネス改善提案を実現。",
      longDescription: "システムエンジニアとして担当している、企業の販売データを分析・可視化するダッシュボードシステムです。BigQueryを活用したデータパイプライン構築、Python による自動化処理、Looker Studio でのダッシュボード設計まで、エンドツーエンドでシステム全体を担当。「マニュアル不要」を目指した直感的なUI設計により、非エンジニアでも簡単に使える仕組みを実現しています。",
      image: getProjectImage("業務解析ダッシュボード開発"),
      images: getProjectScreenshots("業務解析ダッシュボード開発"),
      tags: ["SQL", "Python", "Google Cloud", "Looker Studio", "BigQuery", "データ分析", "業務自動化"],
      category: "ビジネスシステム開発",
      year: "2025年2月〜現在",
      team: "1人（単独担当）",
      featured: true,
      status: "進行中",
      type: "業務開発",
      features: [
        "データ収集から可視化まで一気通貫の設計・実装",
        "SQL最適化による高速データ処理",
        "Python による業務プロセス自動化",
        "直感的で「マニュアル不要」なダッシュボード設計",
        "Google Cloud Platform を活用したスケーラブルな構成",
        "リアルタイムデータ更新とアラート機能",
        "売上トレンド分析と業績予測機能"
      ],
      techDetails: "BigQuery のパーティション機能とクラスタリングを駆使した高速クエリ、Cloud Functions による自動データ更新、Looker Studio での高度な可視化を実現。単独でプロジェクト全体を担当し、要求定義から運用まで一貫して責任を持って取り組んでいます。"
    },
    {
      title: "裏斬リッシュ（うらぎりっしゅ）",
      description: "4人プレイヤーの中に潜む1人の裏切り者を探す人狼系アクションゲーム。8人チームの統率で卒業制作を完成させ、ゲームクリエイター甲子園に応募。「Among Us」と日本の特撮要素を融合させた独創的なゲームデザイン。",
      longDescription: "専門学校卒業制作として開発した、オンライン対戦型の人狼系アクションゲームです。「Among Us」の人狼ゲーム要素に、日本の戦隊もの・仮面ライダーの特撮要素を融合した独創的な作品。リアルタイムバトルと推理要素を組み合わせ、コミカルなダンスシーンや決めポーズなど、日本文化ならではの演出を盛り込みました。8人という最大規模のチームを5ヶ月間統率し、全員で完成まで走り抜けた集大成プロジェクトです。",
      image: getProjectImage("裏斬リッシュ（うらぎりっしゅ）"),
      images: getProjectScreenshots("裏斬リッシュ（うらぎりっしゅ）"),
      tags: ["Unity", "C#", "オンラインマルチプレイ", "8人チーム統率", "卒業制作", "特撮要素"],
      category: "ゲーム開発",
      year: "専門学校卒業制作（2022年）",
      team: "8人",
      duration: "5ヶ月",
      featured: true,
      competition: "ゲームクリエイター甲子園応募",  
      role: "チームリーダー・企画・プログラマー",
      features: [
        "4人同時オンラインマルチプレイシステムの実装",
        "人狼ゲームロジックとアクション要素の融合",
        "戦隊もの風の変身シーン・決めポーズ演出",
        "印象的な撃墜演出とコミカルなダンスシーン",
        "8人規模チームの統率と長期プロジェクト管理",
        "リアルタイム通信・同期処理の最適化"
      ],
      techDetails: "Unity のネットワーク機能を駆使してオンラインマルチプレイを実装。リアルタイム同期と低遅延通信を実現し、4人が同時にプレイできる安定したゲーム環境を構築。専門学校で培った全ての技術と経験を注ぎ込んだ、技術的にも内容的にも最も充実した作品です。"
    },
    {
      title: "LINE占いコンテンツ開発",
      description: "JavaScriptとLINE APIを活用した占いコンテンツの受託開発。AI支援により未経験技術を2ヶ月で習得し、サブスクリプション決済機能付きで商用レベル品質を実現。",
      longDescription: "外部企業からの依頼で開発した、LINE公式アカウント上で動作する占いコンテンツシステムです。JavaScript・LINE API共に未経験の技術領域でしたが、ChatGPTを戦略的に活用した効率的な学習・開発手法により、約2ヶ月という短期間で商用レベルのシステムを完成。おみくじ・タロット占いの機能実装に加え、非エンジニアでも占い内容を更新できるデータエディタの開発、サブスクリプション決済システムの統合まで行い、運用・保守性を重視した包括的なソリューションを提供しました。",
      image: getProjectImage("LINE占いコンテンツ開発"),
      images: getProjectScreenshots("LINE占いコンテンツ開発"),
      tags: ["JavaScript", "LINE API", "AI活用開発", "受託開発", "決済システム", "データエディタ"],
      category: "ビジネス開発",
      year: "2024年9-10月",
      team: "2人（開発担当）",
      duration: "2ヶ月",
      featured: false,
      type: "受託開発",
      client: "外部企業",
      features: [
        "LINE Messaging APIを活用した占いシステム構築",
        "おみくじ・タロット占い機能の実装",
        "サブスクリプション決済システムの統合",
        "非エンジニア向けデータエディタの開発",
        "AI（ChatGPT）を活用した効率的な開発プロセス",
        "商用レベルの品質とユーザビリティ",
        "保守性・拡張性を考慮したシステム設計"
      ],
      techDetails: "未経験のJavaScript・LINE API開発において、AI支援による学習加速と実装効率化を実現。従来の学習方法にChatGPTを統合することで、短期間での技術習得と高品質なシステム構築を両立させました。社会人経験で培った問題解決能力を活かし、要件定義から納品まで一貫して担当しました。"
    },
    {
      title: "多得ルワー子（Vtuber）",
      description: "最新AI技術を統合したVtuberプロジェクト。AI画像生成、Live2D、AI音声変換、フェイストラッキングを組み合わせ、個人で高品質なVtuberを制作・運営中。",
      longDescription: "2024年10月から開始した最新技術を活用したVtuberプロジェクトです。AI画像生成によるキャラクターデザイン、Live2Dモデリング・アニメーション、AI音声変換技術、フェイストラッキングによるリアルタイム配信技術を統合し、個人レベルで高品質なVtuberの制作・運営を実現。複数の最新技術を組み合わせることで、従来は大規模チームでしか不可能だった品質のエンターテインメントコンテンツ制作に挑戦しています。",
      image: getProjectImage("多得ルワー子（Vtuber）"),
      images: getProjectScreenshots("多得ルワー子（Vtuber）"),
      tags: ["AI画像生成", "Live2D", "AI音声変換", "フェイストラッキング", "最新技術統合", "配信技術"],
      category: "エンターテインメント",
      year: "2024年10月〜現在",
      team: "1人（個人制作）",
      featured: false,
      status: "継続運営中",
      features: [
        "AI画像生成（Stable Diffusion）によるキャラクターデザイン",
        "Live2Dモデリング・リアルタイムアニメーション",
        "AI音声変換技術によるキャラクターボイス生成",
        "フェイストラッキングによる自然な表情・動作",
        "複数AI技術の統合による高品質コンテンツ制作",
        "リアルタイム配信技術の習得・運用",
        "個人レベルでの包括的エンターテインメント制作"
      ],
      techDetails: "社会人経験で培った問題解決能力を活かし、複数の最新技術を統合したシステムを独学で構築。トライ&エラーを繰り返すことで技術的課題を克服し、従来の制作手法では不可能だった効率的で高品質なVtuber制作ワークフローを確立しました。"
    },
    {
      title: "音楽制作活動",
      description: "個人のストーリーやコンセプトを短編楽曲で表現するYouTube音楽制作プロジェクト。日常的な創作アウトプット環境を確立し、視覚と聴覚を結ぶ実験的表現手法を探求。",
      longDescription: "個人のストーリーやコンセプトを音楽で表現することを核とした創作活動です。ミニマリスト音楽制作アプローチにより、日常的で持続可能な創作環境を構築。視覚と聴覚を結ぶ表現技法の実験を通じて、他のクリエイティブプロジェクト（ゲーム、動画、Vtuberコンテンツ）に独特の音楽的雰囲気を提供する可能性を発見。物語から音への迅速な変換ワークフローを確立し、包括的なメディア表現力の向上を図っています。",
      image: getProjectImage("音楽制作活動"),
      images: getProjectScreenshots("音楽制作活動"),
      tags: ["音楽制作", "YouTube", "ミニマリスト制作", "実験的表現", "ストーリーテリング", "クロスメディア", "BGM制作"],
      category: "クリエイティブ・コンテンツ制作",
      year: "継続中",
      team: "1人（音楽プロデューサー）",
      featured: false,
      status: "継続運営中",  
      platform: "YouTube",
      approach: "日常的な創作アウトプットと実験的創作",
      features: [
        "個人のストーリー・コンセプトの短編楽曲での表現",
        "日常的で持続可能な創作アウトプット環境の確立",
        "視覚と聴覚を結ぶ実験的表現技法の探求",
        "物語から音への迅速な変換ワークフロー構築",
        "他プロジェクトへの音楽的雰囲気提供の可能性発見",
        "オリジナルゲームBGM制作への展開計画",
        "包括的メディア表現のための音楽統合能力向上"
      ],
      techDetails: "ミニマリスト制作手法により、アイデアから楽曲完成までの高速化を実現。視覚的要素と音楽的要素の連携表現を通じて、総合的なクリエイティブ能力を向上させ、将来的な自作ゲームや他のマルチメディアプロジェクトでの音楽的価値創造を目指しています。"
    },
    {
      title: "おえかきシューター",
      description: "「描いたイラストが動く！」をコンセプトにした子供向けシューティングゲーム。6人チームのリーダーとして企画・開発・デザインを担当し、神戸電子専門学校ゲームコンペでアイディア賞を受賞。",
      longDescription: "専門学校1年次のチーム制作で開発した、創造性を刺激する子供向けシューティングゲームです。プレイヤーが描いた絵がそのままゲーム内のキャラクターとして動き出すという、革新的なゲームシステムを実現。初めてのチーム開発プロジェクトでリーダーを務め、Trelloを活用したタスク管理、週間調査による満足度調整、適切な役割分担によりチーム運営を成功させました。",
      image: getProjectImage("おえかきシューター"),
      images: getProjectScreenshots("おえかきシューター"),
      tags: ["Unity", "C#", "チームリーダー", "受賞作品", "Trello", "プロジェクト管理"],
      category: "ゲーム開発",
      year: "専門学校1年次（2020年2月）",
      team: "6人",
      featured: true,
      award: "神戸電子専門学校ゲームコンペ「アイディア賞」",
      role: "チームリーダー・企画・プログラマー・デザイン",
      features: [
        "お絵かき機能とシューティングゲームの革新的融合",
        "子供向けの直感的なUI設計とカラフルな演出",
        "クリックやカーソル移動に反応する遊び心のある仕掛け",
        "Trelloを活用した効率的なプロジェクト管理",
        "週間満足度調査によるチームメンバーのケア",
        "タスク調整とバランス配分による円滑な開発進行"
      ],
      techDetails: "Unity エンジンを使用し、子供の創造力を育むゲームシステムを設計・実装。初回のチーム開発でしたが、プロジェクト管理ツールの戦略的活用と定期的な振り返りにより、予定通りの完成と受賞を達成しました。"
    },
    {
      title: "メービードゥーン",
      description: "魚型クリーチャーを使役して洞窟を探索するアクションゲーム。COVID-19下でのオンライン開発を成功させ、日本ゲーム大賞アマチュア部門に応募。OP動画と図鑑機能を実装した完成度の高い作品。",
      longDescription: "専門学校3年次のチーム制作で開発した、魚型クリーチャーを使役して洞窟を探索するアクションゲームです。COVID-19の影響により完全オンライン開発を余儀なくされましたが、朝夕のミーティング体制とGit活用により、チーム一丸となって開発を成功させました。各メンバーがUnityの特定機能のプロフェッショナルになることを目指し、チーム全体の技術力向上を図った戦略的なプロジェクト運営が特徴です。",
      image: getProjectImage("メービードゥーン"),
      images: getProjectScreenshots("メービードゥーン"),
      tags: ["Unity", "C#", "オンライン開発", "日本ゲーム大賞応募", "Git", "Slack"],
      category: "ゲーム開発",
      year: "専門学校3年次（2021年頃）",
      team: "6人",
      duration: "3ヶ月",
      featured: true,
      competition: "日本ゲーム大賞アマチュア部門応募",
      role: "チームリーダー・企画・プログラマー",
      context: "COVID-19影響下でのリモート開発",
      features: [
        "魚型クリーチャーの多様なアクションシステム",
        "広大な洞窟ステージでの探索ゲームプレイ",
        "OP動画制作と統合による演出強化",
        "図鑑機能による情報管理システム",
        "オンライン開発体制の確立（朝夕ミーティング）",
        "Slackを活用したリモートコミュニケーション",
        "メンバー専門性向上を重視した役割分担"
      ],
      techDetails: "Unity開発において、各メンバーがシェーダー、AI、UI等の特定機能のエキスパートになることでチーム全体の技術力を向上。困難な開発環境下でも、Git による効率的な分散開発とSlack による密なコミュニケーションにより、計画通りの完成と応募を達成しました。"
    },
    {
      title: "持たないで、モアイさん",
      description: "モアイをモチーフにしたキャラクタービジネス実験。LINEスタンプ販売とX(Twitter)での4コマ漫画配信を実施。AI活用による高速プロトタイピングでアイデアから商品化まで実現。",
      longDescription: "2024年10月から開始したモアイをモチーフにしたキャラクタービジネスの実験的プロジェクトです。趣味のタロット知識を活かした独自性のあるキャラクター設定により差別化を図り、「持つ」というアクションを強調することでグッズ展開やキャラクターへの親しみを深める戦略を採用。LINEスタンプの企画・制作・販売と、X(Twitter)での継続的な4コマ漫画配信を通じて、ファン獲得とブランド構築に取り組んでいます。",
      image: getProjectImage("持たないで、モアイさん"),
      images: getProjectScreenshots("持たないで、モアイさん"),
      tags: ["キャラクタービジネス", "LINEスタンプ", "SNSマーケティング", "4コマ漫画", "AI活用", "ブランド構築"],
      category: "キャラクタービジネス",
      year: "2024年10月〜現在",
      team: "1人（個人事業）",
      featured: false,
      status: "継続運営中",
      businessModel: "スタンプ販売・ファン獲得",
      features: [
        "タロット知識を活かした独自性のあるキャラクター設定",
        "LINEスタンプの企画・制作・販売",
        "X(Twitter)での定期的な4コマ漫画配信",
        "「持つ」アクションを活かしたグッズ展開戦略",
        "SNSを活用したファンコミュニティ構築",
        "AI活用による効率的なコンテンツ制作",
        "継続的なブランド価値向上の取り組み"
      ],
      techDetails: "ゲーム開発で培った「ユーザーを楽しませる」視点と、エンターテインメントに対する深い理解を活かしたキャラクター作りを実践。SNSマーケティング戦略により認知度向上を図り、将来的なIPビジネス化を目指した持続可能な運営を行っています。"
    },
    {
      title: "Claim（ホラーゲーム）",
      description: "DirectX 11を直接使用した顔面が迫りくるホラーゲーム。Unity等を使わず低レベルプログラミングで開発し、A*アルゴリズムとステージエディタを自作。就職活動用ポートフォリオとして制作。",
      longDescription: "専門学校2年次に就職活動用として制作した、技術力をアピールする3Dホラーゲームです。Unity等の既存エンジンに頼らず、DirectX 11 APIを直接使用して開発することで、低レベルプログラミングの深い理解を実証。A*経路探索アルゴリズムによる賢い敵AIの実装、独自のステージエディタ開発など、技術的に挑戦的な要素を多数盛り込んだ個人制作の力作です。",
      image: getProjectImage("Claim"),
      images: getProjectScreenshots("Claim"),
      tags: ["DirectX 11", "C++", "A*アルゴリズム", "ステージエディタ", "個人制作", "低レベルプログラミング"],
      category: "ゲーム開発",
      year: "専門学校2年次（2021年頃）",
      team: "1人（個人制作）",
      duration: "3ヶ月",
      featured: false,
      purpose: "就職活動用ポートフォリオ",
      features: [
        "DirectX 11 APIを直接使用した低レベル3D開発",
        "A*経路探索アルゴリズムの自力実装と可視化",
        "独自ステージエディタの設計・開発",
        "効果的なホラー演出とライティング効果",
        "調査力と粘り強さによる技術的課題の克服",
        "グラフィックスプログラミングの基礎習得"
      ],
      techDetails: "既存のゲームエンジンに頼らず、DirectX 11 APIを直接操作することで、3Dグラフィックスの基本原理から深く理解。メモリ管理、レンダリングパイプライン、シェーダープログラミングなど、低レベルの技術を実践的に学習し、短期間で技術力の高さを証明する作品を完成させました。"
    },
    {
      title: "創作漫画制作",
      description: "「何でもやってみよう計画」の一環として取り組むオリジナル漫画制作プロジェクト。ネーム構成から作画まで一人で手がけ、友人からの高評価を獲得。現在第17話まで制作継続中。",
      longDescription: "「何でもやってみよう計画」の一環として取り組んだオリジナル漫画の制作プロジェクトです。創作活動の原点の一つでもあり、継続的にストーリー構想から作画まで一貫して手がけています。ネーム（構成）から下描き、ペン入れ、トーン貼りまで、すべての工程を一人で行い、友人からは特に「必殺技のネーミングセンス」や「1ページ目の迫力」が高く評価されています。",
      image: getProjectImage("創作漫画制作"),
      images: getProjectScreenshots("創作漫画制作"),
      tags: ["漫画制作", "ストーリー構成", "作画", "トーン貼り", "創作活動", "継続制作"],
      category: "クリエイティブ・コンテンツ制作",
      year: "継続中",
      team: "1人（漫画家）",
      featured: false,
      status: "継続制作中（第17話まで）",
      features: [
        "ネーム構成から作画まで一人での完全制作",
        "友人からの高評価（ネーミングセンス・表現力）",
        "継続的な制作力による長期プロジェクト管理",
        "トーン貼りによる画面効果の追求",
        "読み手との視点ギャップを意識した表現改善",
        "アウトプットを通じた学習の実践",
        "現在第17話まで構想・制作を継続"
      ],
      techDetails: "時間を見つけては少しずつ描き進める継続的な制作スタイルで、「作品を完成させる力」を着実に積み重ね。プロの漫画家の技術や努力を実感しながら、客観的な視点を意識した表現力向上に取り組んでいます。"
    },
    {
      title: "演劇サークル立ち上げ・舞台公演",
      description: "専門学校時代に20人規模の演劇サークルを立ち上げ、複数の舞台公演を成功。企画から演出、マネジメントまで幅広く担当し、人材育成とチーム運営スキルを習得。",
      longDescription: "専門学校時代に「演劇サークル」を立ち上げ、主催公演を実施しました。メンバーは約20人で、終業後に集まって練習を重ね、1ヶ月半〜2ヶ月の準備期間を経て、約1時間の舞台作品を上演。高校時代の演劇部部長経験をもとに、企画から演出、マネジメントまで幅広く担当し、現在のチーム開発でのコミュニケーション能力や指導力の土台となる貴重な経験を積みました。",
      image: getProjectImage("演劇サークル立ち上げ・舞台公演"),
      images: getProjectScreenshots("演劇サークル立ち上げ・舞台公演"),
      tags: ["演劇", "チーム運営", "マネジメント", "演出", "人材育成", "コミュニケーション"],
      category: "課外活動・マネジメント",
      year: "専門学校時代（2年間）",
      team: "20人",
      duration: "2年間（公演準備：1ヶ月半〜2ヶ月）",
      featured: false,
      role: "部長・企画・演出・マネジメント",
      features: [
        "20人規模のチームをまとめ複数の舞台公演を成功",
        "人材育成とモチベーション管理の実践",
        "タイトスケジュールでの効率的な調整",
        "演技指導スキルによる具体的な改善提案",
        "公演パンフレット制作・会場手配等の制作統括",
        "主役を務めつつ裏方作業も統括する多角的運営",
        "批評・観察力を活かした表現指導"
      ],
      techDetails: "演技指導において、相手の表現を言語化し、改善点を具体的に伝える力を習得。この経験は現在のチーム開発での技術指導やコンテンツ制作、チームレビューに活かされ、コミュニケーション能力とマネジメントスキルの重要な基盤となっています。"
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
          Works - 実績紹介
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          ゲーム開発から現在のビジネスシステム開発まで、技術・マネジメント・クリエイティブを
          融合した多彩なプロジェクト実績をご紹介します。AI活用による効率化と、
          チーム成長を重視した価値創造が一貫したテーマです。
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
                <div className="mt-2 text-xs text-primary/70 hover:text-primary transition-colors flex items-center gap-1">
                  <span>続きを読む</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
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