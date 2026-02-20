const MAX_DIMENSION = 4096;

async function downscaleIfNeeded(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const { naturalWidth: w, naturalHeight: h } = img;

      if (w <= MAX_DIMENSION && h <= MAX_DIMENSION) {
        resolve(new Blob([file], { type: file.type }));
        return;
      }

      const scale = Math.min(MAX_DIMENSION / w, MAX_DIMENSION / h);
      const targetW = Math.floor(w * scale);
      const targetH = Math.floor(h * scale);

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, targetW, targetH);

      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas toBlob failed'));
      }, 'image/png');
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Image load failed'));
    };

    img.src = objectUrl;
  });
}

export async function processBackgroundRemoval(
  file: File,
  onProgress: (progress: number) => void
): Promise<Blob> {
  const { removeBackground } = await import('@imgly/background-removal');

  const blob = await downscaleIfNeeded(file);

  const result = await removeBackground(blob, {
    model: 'isnet_quint8' as const,
    progress: (key: string, current: number, total: number) => {
      console.log(`Processing ${key}: ${current}/${total}`);
      if (total > 0) {
        onProgress((current / total) * 100);
      }
    },
  } as any);

  return result;
}
