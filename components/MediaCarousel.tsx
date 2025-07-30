import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  videoId?: string;
}

interface MediaCarouselProps {
  images?: string[];
  videoUrl?: string;
  videoThumbnail?: string;
  aspectRatio?: number;
}

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;

// アニメーションバリアント
const slideVariants = {
  enter: (direction: 'left' | 'right') => {
    return {
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
      scale: 0.9
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: 'left' | 'right') => {
    return {
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
      scale: 0.9
    };
  }
};

export function MediaCarousel({
  images = [],
  videoUrl,
  videoThumbnail,
  aspectRatio = 16 / 9,
}: MediaCarouselProps) {
  // メディアアイテムを統合
  const mediaItems: MediaItem[] = [
    ...images.map(src => ({ type: 'image' as const, src })),
    ...(videoUrl && videoThumbnail ? [{
      type: 'video' as const,
      src: videoUrl,
      thumbnail: videoThumbnail,
      videoId: videoUrl.split('v=')[1]
    }] : [])
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const containerRef = useRef<HTMLDivElement>(null);


  // インデックスが変わったら動画を停止
  useEffect(() => {
    setIsVideoPlaying(false);
  }, [currentIndex]);

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, mediaItems.length]);

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    // 左にドラッグ = 次へ（右方向にスライド）
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (currentIndex < mediaItems.length - 1) {
        setDirection('right');
        setCurrentIndex(currentIndex + 1);
      }
    } 
    // 右にドラッグ = 前へ（左方向にスライド）
    else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (currentIndex > 0) {
        setDirection('left');
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection('left');
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < mediaItems.length - 1) {
      setDirection('right');
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (mediaItems.length === 0) return null;

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg bg-muted/20"
        style={{
          aspectRatio: `${aspectRatio}`,
        }}
      >
        {isVideoPlaying && currentItem.type === 'video' && currentItem.videoId ? (
          // ビデオプレーヤー
          <div className="relative w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${currentItem.videoId}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors text-xl w-10 h-10 flex items-center justify-center z-20"
              aria-label="Close video"
            >
              ×
            </button>
          </div>
        ) : (
          // カルーセル with アニメーション
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                duration: 0.3, 
                ease: [0.16, 1, 0.3, 1] // カスタムイージング
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {currentItem.type === 'video' ? (
                // ビデオサムネイル
                <div className="relative w-full h-full">
                  <motion.img
                    src={currentItem.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                    draggable={false}
                    initial={{ filter: "blur(10px)" }}
                    animate={{ filter: "blur(0px)" }}
                    transition={{ duration: 0.3 }}
                  />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                  >
                    <motion.div 
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </motion.div>
                  </button>
                </div>
              ) : (
                // 画像
                <motion.img
                  src={currentItem.src}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                  initial={{ filter: "blur(10px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Navigation Buttons */}
        {mediaItems.length > 1 && (
          <>
            {currentIndex > 0 && (
              <motion.button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors z-10"
                aria-label="Previous"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
            )}
            
            {currentIndex < mediaItems.length - 1 && (
              <motion.button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors z-10"
                aria-label="Next"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </>
        )}
      </div>

      {/* Indicators */}
      {mediaItems.length > 1 && (
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {mediaItems.map((item, index) => (
              <motion.button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  currentIndex === index
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                animate={{
                  scale: currentIndex === index ? 1.2 : 1,
                  opacity: currentIndex === index ? 1 : 0.5,
                }}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                whileHover={{ opacity: 1 }}
                aria-label={`Go to ${item.type === 'video' ? 'video' : `image ${index + 1}`}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}