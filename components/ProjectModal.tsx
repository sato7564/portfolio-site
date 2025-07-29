import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Users, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    images?: string[];
    videoUrl?: string;
    videoThumbnail?: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    category: string;
    year: string;
    team: string;
    features?: string[];
    techDetails?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  if (!project) return null;

  const allMedia = [
    ...(project.images || []),
    ...(project.videoThumbnail ? [project.videoThumbnail] : [])
  ];

  const isVideoIndex = project.videoThumbnail && currentImageIndex === allMedia.length - 1;

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allMedia.length - 1 : prev - 1));
    setIsVideoPlaying(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === allMedia.length - 1 ? 0 : prev + 1));
    setIsVideoPlaying(false);
  };

  const handleVideoClick = () => {
    if (isVideoIndex && project.videoUrl) {
      setIsVideoPlaying(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFEF5]">
        <DialogHeader>
          <div className="flex items-center justify-between mb-4">
            <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
            <Badge variant="outline" className="border-intellectual">
              {project.category}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.year}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              チーム{project.team}
            </div>
          </div>
        </DialogHeader>

        {/* 画像ギャラリー */}
        {allMedia.length > 0 && (
          <div className="relative mb-6">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              {isVideoPlaying && isVideoIndex ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoUrl?.split('v=')[1]}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <ImageWithFallback
                    src={allMedia[currentImageIndex]}
                    alt={`${project.title} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isVideoIndex && (
                    <button
                      onClick={handleVideoClick}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                    >
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>
            
            {allMedia.length > 1 && (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                
                {/* インジケーター */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allMedia.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? 'bg-primary'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsVideoPlaying(false);
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* プロジェクト詳細 */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">プロジェクト概要</h3>
            <DialogDescription className="text-base leading-relaxed">
              {project.longDescription || project.description}
            </DialogDescription>
          </div>

          {/* 主な機能 */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2">主な機能</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 技術詳細 */}
          {project.techDetails && (
            <div>
              <h3 className="text-lg font-medium mb-2">技術的な詳細</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.techDetails}
              </p>
            </div>
          )}

          {/* 使用技術 */}
          <div>
            <h3 className="text-lg font-medium mb-2">使用技術</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary/50">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* アクションボタン */}
          <div className="flex gap-3 pt-4">
            <Button className="intellectual-gradient hover:opacity-90" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" className="border-intellectual hover:bg-secondary/20" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}