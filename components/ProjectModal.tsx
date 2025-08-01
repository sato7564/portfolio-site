import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { MediaCarousel } from "./MediaCarousel";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    images?: string[];
    videoUrl?: string;
    videoThumbnail?: string;
    video?: { url: string; thumbnail: string } | null;
    videos?: { url: string; thumbnail: string }[];
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
  if (!project) return null;

  const hasMedia = 
    (project.images && project.images.length > 0) || 
    (project.videoUrl && project.videoThumbnail) ||
    (project.video) ||
    (project.videos && project.videos.length > 0);

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

        {/* メディアギャラリー */}
        {hasMedia && (
          <div className="mb-6">
            <MediaCarousel
              images={
                project.videos && project.videos.length > 0
                  ? [
                      ...(project.images || []),
                      ...project.videos.map(v => v.thumbnail)
                    ]
                  : project.images || []
              }
              videoUrl={project.video?.url || project.videoUrl}
              videoThumbnail={project.video?.thumbnail || project.videoThumbnail}
              aspectRatio={16 / 9}
            />
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