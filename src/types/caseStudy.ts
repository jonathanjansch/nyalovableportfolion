export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudyCreatives {
  topLeft: string;
  topRight: string;
  bottom?: string;
  topMiddle?: string;
  bottomLeft?: string;
  bottomRight?: string;
  layout?: "three-image" | "two-image" | "two-image-horizontal" | "five-image-collage";
}

export interface CaseStudyContent {
  id: string;
  title: string;
  meta: string;
  results: CaseStudyResult[];
  context: string[];
  strategy: string[];
  funnelDescription: string;
  funnelVariant?: "sales-call" | "checkout" | "webinar" | "booking" | "qualification" | "webshop";
  trafficSources: string[];
  funnelFlow: string[];
  funnelFollowUp: string;
  executionIntro: string;
  executionItems: string[];
  executionOutro?: string;
  creativesPlaceholder?: boolean;
  creatives?: CaseStudyCreatives;
}
