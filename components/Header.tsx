import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'profile', english: 'Profile', japanese: 'プロフィール' },
    { id: 'works', english: 'Works', japanese: '作品一覧' },
    { id: 'about', english: 'About', japanese: 'アバウト' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-intellectual">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 group"
          >
            <div className="w-8 h-8 intellectual-gradient rounded-full flex items-center justify-center shadow-intellectual group-hover:shadow-lg transition-all duration-300">
              <span className="text-white font-medium">OS</span>
            </div>
            <span className="font-medium text-primary">Oka Satoshi</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const isHovered = hoveredItem === item.id && !isActive;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative pb-2 px-2 transition-all duration-300 min-w-[120px] ${
                    isActive
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {/* アクティブタブの下線 */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 intellectual-gradient rounded-full" />
                  )}
                  
                  {/* ホバー効果 */}
                  <div className={`absolute inset-0 rounded-lg bg-secondary/10 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* テキストコンテナ */}
                  <div className="relative z-10 h-6 flex items-center justify-center">
                    {/* アクティブな場合は常に日本語、非アクティブでホバー時のみ切り替え */}
                    {isActive ? (
                      <span className="whitespace-nowrap">{item.japanese}</span>
                    ) : (
                      <>
                        <span 
                          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 whitespace-nowrap ${
                            isHovered ? 'opacity-0' : 'opacity-100'
                          }`}
                        >
                          {item.english}
                        </span>
                        <span 
                          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 whitespace-nowrap ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          {item.japanese}
                        </span>
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary/20 transition-colors"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>
      
      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative bg-background border-b border-intellectual shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onPageChange(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:bg-secondary/20 hover:text-primary'
                      }`}
                    >
                      <span className="block text-sm">{item.english}</span>
                      <span className="block text-xs opacity-70">{item.japanese}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}