import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert('メッセージを送信しました！2営業日以内にご返信いたします。');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-medium mb-4">お問い合わせ</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          プロジェクトのご相談、お仕事のご依頼、技術的なご質問など、お気軽にお問い合わせください。
          通常2営業日以内にご返信いたします。
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* 連絡先情報 */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">メール</h3>
                  <p className="text-muted-foreground">yamada.nao@example.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">電話</h3>
                  <p className="text-muted-foreground">+81 90-1234-5678</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">所在地</h3>
                  <p className="text-muted-foreground">東京, 日本</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">営業時間</h3>
                  <p className="text-muted-foreground">平日 9:00 - 18:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">対応可能な案件</h3>
                  <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                    <li>• Webアプリケーション開発</li>
                    <li>• フロントエンド開発</li>
                    <li>• UI/UXコンサルティング</li>
                    <li>• 技術顧問</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* お問い合わせフォーム */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>メッセージを送る</CardTitle>
              <CardDescription>
                下記のフォームに必要事項をご記入ください。プロジェクトの詳細やご予算についてもお聞かせいただけると、より具体的なご提案が可能です。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">お名前 *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">会社名・組織名</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="株式会社サンプル"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">件名 *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Webアプリケーション開発のご相談"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">メッセージ *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="プロジェクトの詳細、ご希望の納期、予算感などをお聞かせください。"
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto min-w-32">
                  メッセージを送信
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>ご返信について：</strong>
                  お送りいただいたメッセージには、通常2営業日以内にご返信いたします。
                  お急ぎの場合は、お電話でのお問い合わせも承っております。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}