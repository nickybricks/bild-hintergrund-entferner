export async function processBackgroundRemoval(
  file: File,
  onProgress: (progress: number) => void
): Promise<Blob> {
  const { removeBackground } = await import('@imgly/background-removal');

  const blob = new Blob([await file.arrayBuffer()], { type: file.type });

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
