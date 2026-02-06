import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Image, Video, Music, X, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import GlowButton from "./GlowButton";

interface UploadZoneProps {
  onUpload?: (file: File) => void;
  accept?: string[];
  className?: string;
}

export const UploadZone = ({
  onUpload,
  accept = ["image/*", "video/*", "audio/*"],
  className,
}: UploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) {
        setUploadedFile(file);
        onUpload?.(file);
      }
    },
    [onUpload]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setUploadedFile(file);
        onUpload?.(file);
      }
    },
    [onUpload]
  );

  const clearFile = () => setUploadedFile(null);

  const getFileIcon = (type: string) => {
    if (type.startsWith("image")) return Image;
    if (type.startsWith("video")) return Video;
    if (type.startsWith("audio")) return Music;
    return FileCheck;
  };

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait">
        {uploadedFile ? (
          <motion.div
            key="uploaded"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative p-6 rounded-xl border-2 border-success/50 bg-success/10"
          >
            <button
              onClick={clearFile}
              className="absolute top-3 right-3 p-1 rounded-full bg-muted hover:bg-destructive/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-4">
              {(() => {
                const Icon = getFileIcon(uploadedFile.type);
                return <Icon className="w-12 h-12 text-success" />;
              })()}
              <div>
                <p className="font-medium text-foreground">{uploadedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="upload"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "relative p-8 rounded-xl border-2 border-dashed transition-all duration-300",
              isDragging
                ? "border-primary bg-primary/10 scale-[1.02]"
                : "border-border hover:border-primary/50 hover:bg-muted/30"
            )}
          >
            {/* Scan effect when dragging */}
            {isDragging && (
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            )}

            <div className="flex flex-col items-center gap-4 text-center">
              <motion.div
                className={cn(
                  "p-4 rounded-full",
                  isDragging ? "bg-primary/20" : "bg-muted"
                )}
                animate={isDragging ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <Upload
                  className={cn(
                    "w-8 h-8",
                    isDragging ? "text-primary" : "text-muted-foreground"
                  )}
                />
              </motion.div>

              <div>
                <p className="text-lg font-medium text-foreground">
                  {isDragging ? "Drop your file here" : "Drag & drop your media"}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Supports images, videos, and audio files
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                    <Image className="w-3 h-3" /> Images
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                    <Video className="w-3 h-3" /> Videos
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                    <Music className="w-3 h-3" /> Audio
                  </div>
                </div>
              </div>

              <label
                className={cn(
                  "relative inline-flex items-center justify-center gap-2 font-medium rounded-lg cursor-pointer",
                  "transition-all duration-300 px-4 py-2 text-sm",
                  "bg-transparent border border-primary/50 text-primary",
                  "hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(185_100%_50%/0.3)]"
                )}
              >
                <input
                  type="file"
                  accept={accept.join(",")}
                  onChange={handleFileSelect}
                  className="sr-only"
                />
                Browse Files
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadZone;
