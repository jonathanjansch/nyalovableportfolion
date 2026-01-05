import { SchoolCaseStudyContent } from "@/types/schoolCaseStudy";
import ahlensGingerbread from "@/assets/case-studies/ahlens-gingerbread.png";
import ahlensLeavebehind from "@/assets/case-studies/ahlens-leavebehind.png";
import ahlensPresentation from "@/assets/case-studies/ahlens-presentation.png";
import ahlensGroup1 from "@/assets/case-studies/ahlens-group1.png";
import ahlensGroup2 from "@/assets/case-studies/ahlens-group2.png";
import veridoHero from "@/assets/case-studies/verido-hero.jpg";
import boostaiBackground from "@/assets/case-studies/boostai-background.png";
import uberBicycle1 from "@/assets/case-studies/uber/bicycle1.png";
import uberBicycle2 from "@/assets/case-studies/uber/bicycle2.png";
import uberBicycle3 from "@/assets/case-studies/uber/bicycle3.png";
import uberBicycle4 from "@/assets/case-studies/uber/bicycle4.png";
import imagespecadsTelia from "@/assets/case-studies/imagespecads/telia.png";
import imagespecadsOreo from "@/assets/case-studies/imagespecads/oreo.png";
import imagespecadsGillette from "@/assets/case-studies/imagespecads/gillette.png";

export const schoolCaseStudyContent: Record<string, SchoolCaseStudyContent> = {
  ahlens: {
    id: "ahlens",
    pill: "Course project · Explore Sustainability · Berghs SOC",
    title: "Explore Sustainability",
    subtitle: "A communication concept developed for Åhléns, addressing community & social inequality.",
    assignmentTitle: "The assignment",
    assignmentText: [
      "This group project was part of the Explore Sustainability course at Berghs School of Communication. I was assigned to a group of eight people, all from different programs. We were then challenged to help a well-known brand take social responsibility in an area it is not naturally associated with - by creating a meaningful, brand-aligned communication solution.",
      "Our team was assigned Åhléns as our brand, and the societal theme Community & Social Inequality. So we had to explore how a department store brand could contribute to social inclusion, belonging and community — in a way that creates value for both society and the brand."
    ],
    ideaImage: ahlensGingerbread,
    ideaSectionHeader: "The Idea",
    ideaHeadline: "Åhléns Gingerbread House collection in collaboration with Stadsmissionen.",
    ideaSections: [
      {
        title: "Our target problem",
        text: [
          "Our starting point was a critical insight within social inequality: homelessness in Sweden is largely invisible. Thousands of families, especially children, live in insecure housing situations that never appear in official statistics. For them, homelessness is not only the absence of a home, but the absence of stability and belonging.",
          "During the holiday season, the idea of home carries its strongest emotional meaning. This contrast became our entry point. By turning one of Sweden's most cherished Christmas traditions — gingerbread houses — into a symbol of those who lack a safe home, we created a simple and tangible way to make the invisible visible."
        ]
      },
      {
        title: "The solution",
        text: [
          "Åhléns launches a limited gingerbread house collection in collaboration with Sveriges Stadsmissioner, where profits support long-term housing solutions for people affected by homelessness. Each house built becomes a symbolic act: building a home for someone who doesn't have one.",
          "The concept transforms a familiar, joyful ritual into meaningful participation — connecting warmth, creativity and community with real social impact."
        ]
      },
      {
        title: "My primary contributions",
        text: [
          "My main focus in this project was on production and execution, in line with my Content Engineer specialization.",
          "Together with one other team member, I scripted and produced the full case film for the project. I was also responsible for generating all AI-based visuals used in both the film and the final presentation."
        ]
      }
    ],
    assets: [
      {
        type: "youtube",
        title: "Casefilm",
        url: "https://www.youtube.com/embed/vdRfje2NwM4"
      }
    ],
    documentLinks: [
      {
        image: ahlensLeavebehind,
        label: "Leave behind document",
        url: "https://docs.google.com/document/d/16c_y7uU1SFRAvsbDP3wDWRrVkmR3OEUpoEwy62kXMlU/edit?usp=sharing"
      },
      {
        image: ahlensPresentation,
        label: "Presentation slides",
        url: "https://drive.google.com/drive/folders/1HRUI7qbXYCSCMZJkrymOJPULZvwd6R2d?usp=sharing"
      }
    ],
    groupImages: [ahlensGroup1, ahlensGroup2]
  },
  verido: {
    id: "verido",
    pill: "Course project · Programming & Methods · Berghs SOC",
    title: "Programming & Methods",
    subtitle: "A course project focused on full-stack development, collaborative coding and AI-assisted workflows.",
    assignmentTitle: "The assignment",
    assignmentText: [
      "This project was the final assignment in the Programming & Methods course. The objective was to design and build a fully working web application/website.",
      "Rather than focusing on visual concepts or static prototypes, the assignment emphasized real implementation: writing production-ready code, working in teams via GitHub, managing pull requests and merges, and deploying a live application."
    ],
    ideaImage: veridoHero,
    ideaHeadline: "Verido",
    ideaSections: [
      {
        text: [
          "Verido is a fully functional social prediction platform where users create, share and bet on predictions about future events - ranging from sports and technology to culture, economics and everyday questions.",
          "Unlike traditional betting platforms, Verido is entirely community-driven. Any user can define what people are predicting on, set outcomes, and invite others to participate. Odds update in real time based on collective behavior, creating a dynamic system that reflects community sentiment rather than fixed bookmaker logic."
        ]
      },
      {
        plainText: "The platform includes:",
        text: [
          "User authentication and account management",
          "Creation of custom predictions with yes/no or multiple-choice outcomes",
          "Real-time betting mechanics with live odds updates",
          "A token-based reward system tied to prediction accuracy",
          "Social features such as public and private leagues, leaderboards and competition between users",
          "A fully integrated marketplace where earned tokens can be redeemed for real-world rewards"
        ],
        isBulletList: true
      },
      {
        text: [
          "From a technical perspective, Verido was built as a complete, production-ready application rather than a prototype. The project demonstrates full-stack system thinking - combining frontend, backend, database logic and deployment into a cohesive product.",
          "The result is a scalable, interactive platform that showcases both technical execution and product logic: real-time interaction, user-generated content, incentive design and social engagement - all implemented as a usable system rather than a conceptual demo.",
          "The platform was built using an AI-assisted, vibe-coding workflow, with me overseeing the system architecture, logic, structure and implementation decisions throughout the project."
        ]
      }
    ],
    embedUrl: "https://verido.lovable.app/"
  },
  boostai: {
    id: "boostai",
    pill: "Brief · Understanding the job of communication · Berghs SOC",
    title: "BOOST.AI - DO BETTER",
    subtitle: "A brief from boost.ai, creating marketing assets for their \"Do better\" campaign.",
    assignmentTitle: "About boost.ai",
    assignmentText: [
      "Boost.ai is a Norwegian software company providing an enterprise-grade platform for conversational AI and virtual agents.",
      "Their technology enables organizations to build, deploy and manage AI-driven assistants that automate customer service and internal support — at scale, and with a high degree of trust and reliability.",
      "The platform is used by large enterprises, financial institutions and public sector organizations where accuracy, security and user experience are critical."
    ],
    ideaSectionHeader: "THE BRIEF",
    ideaSections: [
      {
        text: [
          "The brief we got from boost.ai was to create fully AI generated short-form video concepts portraying bad conversational AI experiences, designed to be used as marketing assets.",
          "The work aimed to highlight the frustration users feel when expectations of \"smart AI\" collide with the reality of poorly designed chatbots and voice assistants.",
          "The content needed to be short, relatable and culturally tuned-in — exposing bad conversational AI experiences and calling on companies to \"do better\" in how they build and deploy AI-powered customer interactions, therefore the campaign name \"Do better\"."
        ]
      }
    ],
    assetsHeader: "THE WORK",
    assets: [
      {
        type: "youtube",
        title: "",
        url: "https://www.youtube.com/embed/lwME6M_mj24",
        description: "\"The infinite queue\" A short-form video illustrating the frustration of long customer support queues caused by poor AI-driven support."
      }
    ],
    resultsHeader: "RESULTS & REFLECTION",
    resultsText: [
      "This brief marked my first time using AI to generate video content, as it was early in my program.",
      "Looking back, it's clear how much both my own skills and the tools themselves have evolved since then. While the core insight and concept behind Infinite Queue remain strong, the execution would be significantly more refined today.",
      "The idea, Infinite Queue, was selected by boost.ai as the winning ad for the brief. The client later launched their own execution based on the concept - reinterpreting the original idea while keeping the core insight intact, here's what they said: \"Our winner is Infinite Queue. We will replicate the concept you shared, but also adapt it. We'll launch the campaign with a new execution - not someone aging on hold, but a depressed skeleton waiting in the queue.\" - David, boost.ai"
    ],
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7389571773240950784"
  },
  uber: {
    id: "uber",
    pill: "Course Project · Content generating · Berghs SOC",
    title: "UBER SPEC AD",
    subtitle: "A course assignment during my Content generating course, where we deep dove into how to generate images, video and audio only with AI.",
    assignmentTitle: "The assignment",
    assignmentText: [
      "For the final assignment of this course we were assigned to generate a 20-60 second video. The format was open, allowing anything from music videos and trailers to speculative advertisements."
    ],
    ideaSectionHeader: "THE PROCESS",
    ideaSections: [
      {
        text: [
          "During the project, I initially explored a concept for an electric bicycle advertisement, generating over 60 final AI images as part of the development process to use for video generation.",
          "But as the deadline approached, it became clear that the scope and complexity of the concept would be difficult to execute within the given timeframe. I therefore made a late decision to pivot and instead develop a speculative ad for Uber — a project that was not as time consuming."
        ]
      },
      {
        plainText: "See some of the images that would've been for the electric bicycle ad here:",
        text: []
      }
    ],
    groupImagesHeader: "Electric bicycle ad concept images",
    groupImages: [uberBicycle1, uberBicycle2, uberBicycle3, uberBicycle4],
    assetsHeader: "THE FINAL SPEC AD",
    assets: [
      {
        type: "youtube",
        title: "",
        url: "https://www.youtube.com/embed/dVylD6nNxAY",
        description: "The final output is a speculative ad expanding on Uber's well-known \"Should've taken an Uber\" campaign, a campaign where exaggerations of situations where choosing Uber would have been the smart decision."
      }
    ],
    resultsHeader: "RESULTS & REFLECTION",
    resultsText: [
      "Some of the clips achieved a strong level of realism, while others would have benefited from additional iteration. Due to time constraints close to the deadline, later sequences in the ad were not refined to the same level as earlier ones.",
      "Despite this, the core concept aligns closely with Uber's brand and its established \"Should've taken an Uber\" campaign logic."
    ]
  },
  imagespecads: {
    id: "imagespecads",
    pill: "Course Project · Content generating · Berghs SOC",
    title: "Image Spec Ads",
    subtitle: "A course assignment during my Content generating course, where we generated image ads for the first time.",
    assignmentTitle: "The assignment",
    assignmentText: [
      "The assignment was to test out different image AI generation tools and create a few spec ads."
    ],
    ideaSections: [],
    creatives: [
      {
        image: imagespecadsTelia,
        caption: "A spec ad for telecommunications company Telia, expanding on their \"5G everywhere, that's Telia\" campaign."
      },
      {
        image: imagespecadsOreo,
        caption: "A spec ad for Oreo playing on that their cookies are too good to resist, even Santa didn't get to eat his cookies."
      },
      {
        image: imagespecadsGillette,
        caption: "A spec ad for Gillette."
      }
    ]
  }
};
