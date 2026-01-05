export interface AssetItem {
  type: "youtube" | "image";
  title: string;
  url: string;
  description?: string;
}

export interface DocumentLink {
  image: string;
  label: string;
  url: string;
}

export interface SchoolCaseStudyContent {
  id: string;
  pill: string;
  title: string;
  subtitle: string;
  assignmentTitle: string;
  assignmentText: string[];
  ideaImage?: string;
  ideaSectionHeader?: string;
  ideaHeadline?: string;
  ideaSections: {
    title?: string;
    text: string[];
    plainText?: string;
    isBulletList?: boolean;
  }[];
  assets?: AssetItem[];
  assetsHeader?: string;
  resultsHeader?: string;
  resultsText?: string[];
  linkedinEmbed?: string;
  documentLinks?: DocumentLink[];
  groupImages?: string[];
  groupImagesHeader?: string;
  creatives?: {
    image: string;
    caption: string;
  }[];
  embedUrl?: string;
}
