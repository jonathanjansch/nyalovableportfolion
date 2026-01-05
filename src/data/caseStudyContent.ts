import { CaseStudyContent } from "@/types/caseStudy";
import kroppskolanIgAd from "@/assets/case-studies/kroppskolan/igad.jpg";
import kroppskolanAnnonsbild from "@/assets/case-studies/kroppskolan/annonsbild.png";
import kroppskolanWebbsida from "@/assets/case-studies/kroppskolan/webbsida.jpg";
import relationsproffsetIgAd from "@/assets/case-studies/relationsproffset/igad.jpg";
import relationsproffsetAnnonsbild from "@/assets/case-studies/relationsproffset/annonsbild.png";
import relationsproffsetKampanj from "@/assets/case-studies/relationsproffset/kampanj.png";
import klickerforlagetIgAd from "@/assets/case-studies/klickerforlaget/igad.jpg";
import klickerforlagetWebbsida from "@/assets/case-studies/klickerforlaget/webbsida.png";
import golfnarapatenTop from "@/assets/case-studies/golfnaprapaten/top.png";
import golfnarapatenBottom from "@/assets/case-studies/golfnaprapaten/bottom.png";
import nutritionmattersIgAd from "@/assets/case-studies/nutritionmatters/igad.jpg";
import nutritionmattersIgAd2 from "@/assets/case-studies/nutritionmatters/igad2.jpg";
import nutritionmattersBottom from "@/assets/case-studies/nutritionmatters/bottom.png";
import coachdreaIgAd from "@/assets/case-studies/coachdreas/igad.jpg";
import coachdreaIgAd2 from "@/assets/case-studies/coachdreas/igad2.jpg";
import samuelTop from "@/assets/case-studies/samuelchristensson/top.png";
import samuelBottom from "@/assets/case-studies/samuelchristensson/bottom.jpg";
import mia3 from "@/assets/case-studies/mialundin/mia3.jpg";
import mia4 from "@/assets/case-studies/mialundin/mia4.jpg";
import mia5 from "@/assets/case-studies/mialundin/mia5.jpg";
import kvinna2 from "@/assets/case-studies/mialundin/kvinna2.jpg";
import mia1 from "@/assets/case-studies/mialundin/mia1.jpg";

export const kroppskolanContent: CaseStudyContent = {
  id: "kroppskolan",
  title: "Kroppskolan",
  meta: "Info-Product · Body therapy · Sweden",
  results: [
    { value: "0 -> 328,200 SEK", label: "in contracted revenue" },
    { value: "25.23", label: "ROAS" },
    { value: "1.5+", label: "years ongoing partnership" },
  ],
  context: [
    "Kroppskolan is a company offering in-person advanced education for licensed body therapists, with a focus on dynamic lymphatic treatment.",
    "I had previously worked with Rasmus, the founder and main instructor of Kroppskolan, in one of his earlier businesses. When Kroppskolan was preparing to launch its very first education program, he reached out immediately to get our help in building a scalable sales process for filling seats in a high-ticket, professional training program.",
    "The goal from day one was not just to fill the spots for its first term, but to build a system that could be reused and scaled for future cohorts and yearly intakes.",
  ],
  strategy: [
    "Since Kroppskolan was a completely new business at the time, we entered a long-term growth partnership and stepped in as an internal partner rather than an external consultant.",
    "We took full ownership of designing and building the entire sales process for the first launch, with the objective of consistently filling all available seats without requiring Rasmus to do anything beyond holding sales calls with highly qualified, warm leads.",
    "The system was built to be reusable for future education launches, creating a predictable and scalable acquisition engine for the business.",
  ],
  funnelDescription:
    "The sales process was centered around a Video Sales Letter–based funnel, designed to educate prospects and pre-qualify them before any direct sales interaction.",
  funnelVariant: "sales-call",
  trafficSources: ["Paid traffic via Meta Ads", "Targeted cold outreach via email"],
  funnelFlow: [
    "Prospects opted in to access the Video Sales Letter",
    "After watching the VSL, prospects were invited to book a sales call",
    "Sales calls were held directly with Rasmus, where final enrollment decisions were made",
  ],
  funnelFollowUp:
    "To support the funnel, we built a follow-up email system that continued nurturing leads who did not convert immediately, running for up to 30 days after initial opt-in.",
  executionIntro:
    "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and scripting of talking-head ads for Meta",
    "Video editing and creative production for all ad assets",
    "Scripting and video editing of the Video Sales Letter",
    "Design and copywriting for a 3-step sales page flow",
    "Copywriting and automation of a dynamic 20+ email marketing system",
    "Hosting and technical setup of the entire sales infrastructure",
    "Booking system, reminders, and calendar integration for sales calls",
    "Media buying, optimization, and ongoing management of all paid advertising",
  ],
  executionOutro:
    "All qualified leads were routed directly into booked sales calls with Rasmus, allowing him to focus exclusively on closing and delivering the education program.",
  creatives: {
    topLeft: kroppskolanIgAd,
    topRight: kroppskolanAnnonsbild,
    bottom: kroppskolanWebbsida,
    layout: "three-image",
  },
};

export const relationsproffsetContent: CaseStudyContent = {
  id: "relationsproffset",
  title: "Relationsproffset",
  meta: "Info-Product · Dating · Sweden / Norway",
  results: [
    { value: "152,000 SEK", label: "/ month in revenue" },
    { value: "1.5+", label: "years ongoing partnership" },
  ],
  context: [
    "Relationsproffset, led by relationship expert Jacqueline, is one of Sweden's most recognized voices within modern dating and relationships.",
    "When we began working together, the goal was clear: to significantly scale sales for her flagship online course Psykologin bakom dejting, a pre-recorded, low-ticket education product with fully automated delivery.",
    "Our assignment was to turn an already strong course into a scalable acquisition engine.",
    "Psykologin bakom dejting is now established as the leading online dating course in Sweden, and right now we are expanding into Norway.",
  ],
  strategy: [
    "Because the product was fully digital, low-ticket and required no fulfillment beyond content delivery, we entered the collaboration as a long-term growth partner.",
    "We took full ownership of designing and building a scalable, performance-driven sales system centered around paid traffic, a long-form Video Sales Letter, and a dynamic email marketing ecosystem.",
    "The strategy was built around one core principle: Jacqueline's only responsibility should be to record the content and appear on camera — everything else would be handled by us.",
  ],
  funnelDescription:
    "Since this was a straight-to-checkout product, the funnel was designed to educate, qualify and convert prospects without any direct sales interaction. The entire sales process was centered around a longer, training-style Video Sales Letter that nurtured prospects deeply enough to move directly to purchase.",
  funnelVariant: "checkout",
  trafficSources: ["Paid advertising via Meta"],
  funnelFlow: [
    "Prospects opted in via an opt-in page to access the Video Sales Letter",
    "After watching the VSL, prospects were sent directly to checkout",
  ],
  funnelFollowUp:
    "To support conversions, we built a dynamic email marketing system that continued nurturing leads with educational content related to dating psychology. The system adapts based on user behavior and only pushes sales messaging to prospects who show clear buying intent.",
  executionIntro:
    "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and scripting of talking-head ads for Meta",
    "Video editing and creative production for all ad assets",
    "Scripting and video editing of the Video Sales Letter",
    "Design and copywriting for a 3-step sales page flow",
    "Copywriting and automation of a dynamic 20+ email marketing system",
    "Hosting and technical setup of the entire sales infrastructure",
    "Media buying, optimization, and ongoing management of all paid advertising",
  ],
  creatives: {
    topLeft: relationsproffsetIgAd,
    topRight: relationsproffsetAnnonsbild,
    bottom: relationsproffsetKampanj,
    layout: "three-image",
  },
};

export const klickerforlagetContent: CaseStudyContent = {
  id: "klickerforlaget",
  title: "Klickerförlaget",
  meta: "Info-Product · Dog training · Sweden",
  results: [
    { value: "122,000 SEK", label: "/ month in revenue" },
    { value: "4+", label: "months Retention" },
    { value: "1000+", label: "Webinar sign-ups" },
  ],
  context: [
    "Klickerförlaget is one of Sweden's leading dog training companies, helping private dog owners train and understand their dogs through modern, evidence-based methods.",
    "Their offering includes books, private coaching, online courses and structured training programs.",
    "We were brought in to help scale sales for one of their digital courses focused on dog recall training — a highly competitive niche with many alternative solutions available to the end customer.",
  ],
  strategy: [
    "The product was fully digital, low-ticket and required no fulfillment beyond content delivery.",
    "Because the course launched on fixed dates and operated in a highly competitive market, we decided to build the sales process around a webinar / online challenge–based funnel.",
    "The goal was to: Pre-educate prospects, build trust and authority, and create urgency around a specific enrollment window.",
    "We took full ownership of designing and building the complete webinar-based sales system — including infrastructure, hosting, lead generation, reminder flows and post-webinar sales logic.",
  ],
  funnelDescription:
    "Since the course operated on a fixed launch schedule and required deeper prospect education, the funnel was built around a live webinar as the core conversion mechanism.",
  funnelVariant: "webinar",
  trafficSources: ["Paid advertising via Meta"],
  funnelFlow: [
    "Paid ads drove traffic to a webinar opt-in page with a short introductory video",
    "Prospects registered for the webinar",
    "Leads were nurtured and reminded through automated email and SMS workflows prior to the live event",
    "Live webinar delivered educational content and the core offer",
    "Sales were collected and increased through post-webinar email and SMS follow-up",
  ],
  funnelFollowUp:
    "This structure allowed us to maximize show-up rates, engagement and post-webinar conversions in a market where direct-to-checkout funnels typically underperform.",
  executionIntro:
    "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and scripting of talking-head ads for Meta",
    "Video editing and creative production for all ad assets",
    "Scripting and video editing of Introvideo",
    "Structuring for Webinar content (what to say and when)",
    "Design and copywriting for a 2-step sales page (Opt-in and post webinar sales page)",
    "Copywriting and automation of a dynamic email and SMS marketing pre and post webinar",
    "Hosting and technical setup of the entire sales infrastructure + webinar",
    "Media buying, optimization, and ongoing management of all paid advertising",
  ],
  creatives: {
    topLeft: klickerforlagetIgAd,
    topRight: klickerforlagetWebbsida,
    layout: "two-image",
  },
};

export const golfnarapatenContent: CaseStudyContent = {
  id: "golfnaprapaten",
  title: "Golfnaprapaten",
  meta: "Training Program · Golf rehab · Sweden / Norway",
  results: [
    { value: "283,000 SEK", label: "revenue in 2 months" },
    { value: "3+", label: "years ongoing partnership" },
  ],
  context: [
    "Golfnaprapaten, led by Mikael, is Sweden's leading golf-specialized naprapath, helping golfers improve mobility, prevent injuries and perform better on the course. By combining rehabilitation, movement optimization and golf-specific biomechanics, Golfnaprapaten offers a structured rehab and mobility program tailored specifically for golfers.",
    "We first established the partnership back in 2022 through my previous agency, AOTG Media. Since then, Golfnaprapaten has been one of our long-term clients.",
    "Our assignment was clear: to generate a consistent flow of qualified clients for Mikael's golf rehab and mobility program.",
  ],
  strategy: [
    "The offer was a service-based rehabilitation program with limited capacity and a strong need for pre-qualified leads. Instead of content-heavy funnels or complex education sequences, we designed a direct, conversion-focused lead generation system centered around paid acquisition and appointment booking.",
    "The strategy was built around one core principle: Mikael should spend his time exclusively working with clients — not creating content, managing systems or handling marketing.",
    "We therefore took full ownership of the entire acquisition and booking flow, from ad creative to calendar bookings.",
  ],
  funnelDescription:
    "Since this was a service-based program with limited capacity, the funnel was designed to educate, qualify and convert prospects efficiently into booked appointments.",
  funnelVariant: "booking",
  trafficSources: ["Paid advertising via Meta"],
  funnelFlow: [
    "Prospects were introduced to the program through paid ads targeting golfers with mobility issues, pain, or performance limitations.",
    "After clicking the ad, prospects landed on a focused opt-in page explaining the rehab program and its benefits.",
    "From there, qualified prospects were sent directly to a booking portal where they could schedule an initial session and access their online program.",
    "To increase conversion rates, we implemented automated email and SMS follow-ups for leads who opted in but did not immediately book.",
  ],
  funnelFollowUp:
    "This structure allowed us to maximize booking rates and ensure Mikael's calendar was consistently filled with pre-qualified prospects.",
  executionIntro:
    "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and creation of graphic-based image ads",
    "Copywriting for all ad creatives and landing pages",
    "Funnel architecture and opt-in page design",
    "Booking portal setup and calendar integration",
    "Automated email and SMS follow-up sequences",
    "Hosting and technical setup of the entire system",
    "Media buying, optimization and ongoing performance management",
  ],
  executionOutro:
    "All client acquisition was handled by us end-to-end, allowing Mikael to focus entirely on delivering results for his clients and building the training program.",
  creatives: {
    topLeft: golfnarapatenTop,
    topRight: golfnarapatenBottom,
    layout: "two-image",
  },
};

export const nutritionmattersContent: CaseStudyContent = {
  id: "nutritionmatters",
  title: "NutritionMatters",
  meta: "Info-Product · Skin therapy · Sweden",
  results: [
    { value: "200,000 SEK", label: "in revenue" },
    { value: "1.5+", label: "years ongoing partnership" },
  ],
  context: [
    "NutritionMatters, led by diet and nutrition expert Lina Åhlén, is Sweden's leading specialized education programs focused entirely on how nutrition, diet and lifestyle impact skin health.",
    "The flagship product is the online course Diet, Nutrition and Lifestyle for Skin Health — an advanced education designed for professionals within skincare, such as skin therapists and aestheticians, who want to deliver better and more long-lasting results for their clients.",
    "Our assignment was to scale sales for this education program and position it as a credible, science-based and high-quality complementary training for professionals in the skincare industry.",
  ],
  strategy: [
    "Because the product was fully digital, medium-ticket and required little to no fulfillment beyond content delivery, we entered the collaboration as a long-term growth partner.",
    "We took full ownership of designing and building a scalable, performance-driven sales system centered around our core and most proven funnel type: paid acquisition → long-form Video Sales Letter → automated email marketing → direct checkout.",
    "The strategy was built around one key principle: Lina's only responsibility should be to record the scripts we provided — everything else would be handled by us.",
  ],
  funnelDescription:
    "Since this was a straight-to-checkout product, the funnel was designed to educate, qualify and convert prospects without any direct sales interaction. The entire sales process was centered around a longer, training-style Video Sales Letter that built authority, trust and clarity — nurturing prospects deeply enough to move directly to purchase.",
  funnelVariant: "checkout",
  trafficSources: ["Paid advertising via Meta"],
  funnelFlow: [
    "Prospects opted in via an opt-in page to access the Video Sales Letter",
    "After watching the VSL, prospects were guided directly to checkout to enroll in the course.",
  ],
  funnelFollowUp:
    "To support conversions, we built a dynamic email marketing system that continued nurturing leads with educational and authority-building content related to nutrition, diet and skin health. The system adapts based on user behavior and only pushes sales messaging to prospects who show clear buying intent.",
  executionIntro:
    "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and scripting of talking-head ads for Meta",
    "Video editing and creative production for all ad assets",
    "Scripting and video editing of the Video Sales Letter",
    "Design and copywriting for a 3-step sales page flow",
    "Copywriting and automation of a dynamic 20+ email marketing system",
    "Hosting and technical setup of the entire sales infrastructure",
    "Media buying, optimization, and ongoing management of all paid advertising",
  ],
  creatives: {
    topLeft: nutritionmattersIgAd,
    topRight: nutritionmattersIgAd2,
    bottom: nutritionmattersBottom,
    layout: "three-image",
  },
};

export const coachdreaContent: CaseStudyContent = {
  id: "coachdreas",
  title: "Coachdreas",
  meta: "Info-Product · Fitness · Sweden",
  results: [
    { value: "52,800 SEK", label: "/ month in revenue" },
    { value: "2+", label: "months client retention" },
  ],
  context: [
    "Coachdreas is an online fitness coach helping individuals lose weight and improve their physical health through structured online coaching, including meal plans, training programs and 1-on-1 support.",
    "Our assignment was to help Andreas increase sales volume and acquire more clients, allowing him to focus fully on delivering results for his customers rather than spending time on marketing and sales.",
  ],
  strategy: [
    "The product was fully digital, medium-ticket and required minimal fulfillment beyond onboarding and coaching — leaving strong margins and clear potential for paid acquisition.",
    "Given the clarity of the offer and the well-understood problem it solves, we deliberately chose a simpler and more direct sales process.",
    "The strategy was centered around: A copy-heavy, high-conversion one-page sales page, paid traffic at scale and a qualification and onboarding call handled directly by Andreas.",
  ],
  funnelDescription:
    "Since the offer required an onboarding and qualification call, the funnel focused entirely on selling the core desire and outcome — not the full program details. This allowed us to drive higher lead volume while keeping the sales process efficient.",
  funnelVariant: "sales-call",
  trafficSources: ["Paid advertising via Meta"],
  funnelFlow: [
    "Prospects opted in via the sales page to get in contact with Coachdreas.",
    "After opt-in, leads were contacted directly by Andreas for an introduction and qualification call, where final enrollment decisions were made.",
  ],
  funnelFollowUp: "",
  executionIntro:
    "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and scripting of talking-head ads for Meta",
    "Video editing and creative production for all ad assets",
    "Design and copywriting for our sales page",
    "Hosting and technical setup of the entire sales infrastructure",
    "Media buying, optimization, and ongoing management of all paid advertising",
  ],
  creatives: {
    topLeft: coachdreaIgAd,
    topRight: coachdreaIgAd2,
    layout: "two-image-horizontal",
  },
};

export const samuelChristenssonContent: CaseStudyContent = {
  id: "samuelchristensson",
  title: "Samuel Christensson",
  meta: "Rehab Program · Norway",
  results: [
    { value: "84 000 SEK / month", label: "in revenue" },
    { value: "2+ years", label: "ongoing partnership" },
  ],
  context: [
    "Samuel Christensson is a naprapath helping individuals recover from pain, injuries and movement limitations through rehabilitation info-products and hands-on treatment.",
    "Rather than positioning his work as single treatment sessions, Samuel operates through structured rehabilitation programs tailored to each client's condition - combining assessment, treatment and follow-up into a clear, outcome-driven process.",
    "Our assignment was to help Samuel generate a consistent flow of qualified clients for his rehabilitation services, without requiring him to spend time on marketing, systems or lead handling.",
  ],
  strategy: [
    "Because the offer was a service-based rehabilitation program with limited capacity, lead quality was significantly more important than lead volume.",
    "Instead of using low-friction lead ads or sending traffic directly to a booking calendar — approaches that often generate high volume but low-quality inquiries — we designed a more intentional acquisition flow focused on pre-qualification.",
    "Paid traffic was directed to an opt-in page that clearly explained the rehabilitation approach and set expectations upfront. From there, prospects were qualified before being contacted and invited to book an appointment.",
    "The strategy was built around one core principle: Samuel should focus exclusively on treating clients — everything else should run in the background.",
    "By adding intentional friction to the sales process, we prioritized lead quality, booking rate and long-term client value over raw volume — resulting in a system that was simple, efficient and scalable.",
  ],
  funnelDescription: "",
  funnelVariant: "qualification",
  trafficSources: ["Paid advertising via Meta"],
  funnelFlow: [
    "Paid ads were used to capture intent-driven prospects actively seeking help for pain, injuries and rehabilitation.",
    "Traffic was directed to a single-step sales page that clearly explained Samuel's rehabilitation approach, who the program was for, and what results clients could expect.",
    "Interested prospects completed a qualification form, allowing us to filter for relevance, readiness and treatment fit before any direct contact.",
    "Qualified leads were contacted and invited to a sales/onboarding call for further qualification, as well as onboarding.",
  ],
  funnelFollowUp: "",
  executionIntro:
    "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and creation of graphic-based image ads",
    "Copywriting for all ad creatives and sales pages",
    "Funnel architecture and opt-in page design",
    "Automated email and SMS follow-up sequences",
    "Hosting and technical setup of the entire system",
    "Media buying, optimization and ongoing performance management",
  ],
  creatives: {
    topLeft: samuelTop,
    topRight: samuelBottom,
    layout: "two-image",
  },
};

export const mialundinContent: CaseStudyContent = {
  id: "mialundin",
  title: "Mia Lundin",
  meta: "Info-Product · Women's hormonal health · Sweden",
  results: [
    { value: "25,000 SEK", label: "/ month in revenue" },
    { value: "1+", label: "month ongoing partnership" },
  ],
  context: [
    "Mia Lundin is a long-time pioneer and Sweden's most recognized authority within women's hormonal health and education.",
    "In collaboration with lifestyle medicine company THRiVE Wellness Solutions, she runs Kvinna+, Sweden's now leading hormone health program for women - helping participants navigate hormonal changes and related health challenges through structured education and guidance.",
    "We were brought in to scale sales for Kvinna+, a pre-recorded, low-ticket online education program. At the time of onboarding, the course had never been marketed through paid advertising and did not have a defined, scalable sales process in place.",
    "As of writing this case study, the collaboration is still in its early phase, approximately one month in, with around 15 days of active paid traffic - making this an early-stage case focused on system setup, validation and initial scaling.",
  ],
  strategy: [
    "Because the product was fully digital, low-ticket and required no fulfillment beyond content delivery, and because of Mia's strong brand authority and existing audience in this space, we identified significant scaling potential early on.",
    "We therefore entered the collaboration as a long-term growth partner and took full ownership of designing and building a scalable sales system. The strategy was centered around paid acquisition, a long-form Video Sales Letter, and a dynamic email marketing ecosystem leading directly to checkout.",
    "This setup represents our flagship sales process for low-ticket info-products, designed to educate, nurture and convert at scale without 1-on-1 sales.",
  ],
  funnelDescription:
    "Since this was a straight-to-checkout product, the funnel was designed to educate, qualify and convert prospects without any direct sales interaction. The entire sales process was centered around a longer, training-style Video Sales Letter that nurtured prospects deeply enough to move directly to purchase.",
  funnelVariant: "checkout",
  trafficSources: ["Paid ads and organic marketing on social media"],
  funnelFlow: [
    "Prospects opted in via an opt-in page to access the Video Sales Letter",
    "After watching the VSL, prospects were sent directly to checkout",
  ],
  funnelFollowUp:
    "To support conversions, we built a dynamic email marketing system that continued nurturing leads with educational content related to the course topic, hormonal health in a personal way while building authority for Mia. The system adapts based on user behavior and only pushes sales messaging to prospects who show clear buying intent.",
  executionIntro:
    "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and scripting of talking-head ads for Meta",
    "Video editing and creative production for all ad assets",
    "Scripting and video editing of the Video Sales Letter",
    "Design and copywriting for a 3-step sales page flow",
    "Copywriting and automation of a dynamic 20+ email marketing system",
    "Hosting and technical setup of the entire sales infrastructure",
    "Media buying, optimization, and ongoing management of all paid advertising",
  ],
  creatives: {
    topLeft: mia3,
    topMiddle: mia4,
    topRight: mia5,
    bottomLeft: kvinna2,
    bottomRight: mia1,
    layout: "five-image-collage",
  },
};

export const coachmikeContent: CaseStudyContent = {
  id: "coachmike",
  title: "Coach Mike",
  meta: "Info-Product · Fitness · Sweden",
  results: [
    { value: "28 000 SEK", label: "/ month in revenue" },
    { value: "4 months", label: "Client retention" },
  ],
  context: [
    "Coach Mike is an online fitness coach and influencer helping individuals lose weight and get in shape through personal training, training programs and online coaching.",
    "Despite having a large and engaged social media following, Coach Mike had never run paid advertising or built a structured sales system for his pre-made training programs.",
    "Our assignment was to help him increase sales volume and turn existing audience attention into predictable, scalable revenue.",
  ],
  strategy: [
    "The products were fully digital, pre-made and low-ticket, with no fulfillment costs - creating strong margins and clear potential for paid acquisition.",
    "Given the clarity of the offer (getting in shape through proven training programs from a trusted authority) and the fact that the problem and solution were already well understood by the audience, we deliberately chose a simpler and more direct sales process.",
    "The strategy was centered around: removing friction and converting existing demand efficiently.",
    "Instead of building a longer education funnel, we designed a streamlined purchase flow built around a one-page sales page / webshop presenting all available programs, supported by scaled paid traffic.",
  ],
  funnelDescription: "Since Coach Mike already had a large audience, the initial campaigns were focused on activating low-hanging demand — prospects who were already solution-aware, familiar with Coach Mike, but had not yet made a purchase. This approach allowed us to drive high-ROAS paid acquisition using simple creatives and a low-friction offer.",
  funnelVariant: "webshop",
  trafficSources: ["Paid advertising via Meta"],
  funnelFlow: [
    "Prospects clicked on paid ads driving directly to the webshop",
    "The one-page sales page presented all available training programs",
    "Prospects could purchase directly with minimal friction",
  ],
  funnelFollowUp: "",
  executionIntro: "The partnership included full responsibility for both strategy and execution, including:",
  executionItems: [
    "Ad strategy and scripting of talking-head ads for Meta",
    "Video editing and creative production for all ad assets",
    "Design and copywriting for our sales page",
    "Hosting and technical setup of the webshop",
    "Media buying, optimization, and ongoing management of all paid advertising",
  ],
};

export const caseStudyContentMap: Record<string, CaseStudyContent> = {
  kroppskolan: kroppskolanContent,
  relationsproffset: relationsproffsetContent,
  klickerforlaget: klickerforlagetContent,
  golfnaprapaten: golfnarapatenContent,
  nutritionmatters: nutritionmattersContent,
  coachdreas: coachdreaContent,
  samuelchristensson: samuelChristenssonContent,
  mialundin: mialundinContent,
  coachmike: coachmikeContent,
};
