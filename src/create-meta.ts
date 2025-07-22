import { Metadata } from "next";

// metadataを関数生成で記述しても認識してくれるのか？テスト
export function createMeta(metadata: Metadata) {
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type: metadata.type,
      title: metadata.title,
      description: metadata.description,
    },
  } as Metadata;
}
