"use client";

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface EventGalleryProps {
  images: string[];
  title: string;
}

export function EventGallery({ images, title }: EventGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);
  const thumbnailImages = images.slice(1, 5);

  return (
    <div>
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 lg:hidden">
          {title}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <Dialog>
                <DialogTrigger asChild>
                    <div className="relative aspect-[4/3] lg:aspect-auto cursor-pointer group">
                        <Image
                        src={mainImage}
                        alt={`Main image for ${title}`}
                        fill
                        className="object-cover rounded-l-xl"
                        data-ai-hint="event main image"
                        priority
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0">
                    <Image src={mainImage} alt={`Main image for ${title}`} width={1200} height={800} className="w-full h-auto object-contain rounded-lg" data-ai-hint="event main image" />
                </DialogContent>
            </Dialog>
            <div className="hidden lg:grid grid-cols-2 gap-2">
                {thumbnailImages.map((image, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div className="relative aspect-square cursor-pointer group">
                                <Image
                                src={image}
                                alt={`Thumbnail ${index + 1} for ${title}`}
                                fill
                                className={cn("object-cover", index === 1 && "rounded-tr-xl", index === 3 && "rounded-br-xl")}
                                data-ai-hint="event thumbnail"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 border-0">
                            <Image src={image} alt={`Thumbnail ${index + 1} for ${title}`} width={1200} height={800} className="w-full h-auto object-contain rounded-lg" data-ai-hint="event thumbnail" />
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    </div>
  );
}
