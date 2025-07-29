import { useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'works', english: 'Works', japanese: '作品一覧' },
    { id: 'profile', english: 'Profile', japanese: 'プロフィール' },
    { id: 'contact', english: 'Contact', japanese: 'コンタクト' }
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
              <span className="text-white font-medium">YN</span>
            </div>
            <span className="font-medium text-primary">Yamada Nao</span>
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

          {/* モバイルメニュー */}
          <div className="md:hidden">
            <div className="flex items-center space-x-3">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                const isHovered = hoveredItem === item.id && !isActive;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative pb-1 px-1 text-xs transition-all duration-300 min-w-[80px] ${
                      isActive
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {/* アクティブタブの下線（モバイル） */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 intellectual-gradient rounded-full" />
                    )}
                    
                    {/* テキストコンテナ */}
                    <div className="relative h-5 flex items-center justify-center">
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
          </div>
        </nav>
      </div>
    </header>
  );
}