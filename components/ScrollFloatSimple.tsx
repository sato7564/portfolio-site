import { useEffect, useRef, useState } from 'react';

interface ScrollFloatProps {
  children: string;
  className?: string;
}

export default function ScrollFloat({ children, className = "" }: ScrollFloatProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 要素が画面内に入ったときの進行度を計算
      const start = rect.top + rect.height;
      const end = rect.top;
      
      if (start < 0) {
        setScrollProgress(1);
      } else if (end > windowHeight) {
        setScrollProgress(0);
      } else {
        const progress = 1 - (end / windowHeight);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期位置を設定

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const characters = children.split('');

  return (
    <div 
      ref={containerRef}
      className={`flex justify-between ${className}`}
      style={{ width: '50%' }}
    >
      {characters.map((char, index) => {
        const delay = index * 0.05;
        const yOffset = Math.sin((scrollProgress * Math.PI) + (index * 0.5)) * 20;
        const opacity = Math.max(0.3, scrollProgress);
        
        return (
          <span
            key={index}
            className="inline-block transition-all duration-300 ease-out text-[clamp(2.4rem,40vw,16rem)]"
            style={{
              transform: `translateY(${yOffset * (1 - scrollProgress)}px)`,
              opacity: opacity,
              transitionDelay: `${delay}s`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </div>
  );
}