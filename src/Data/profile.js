/**
 * ============================================================
 *  EDIT THIS FILE to update the portfolio.
 *  After saving, run `npm start` locally or `npm run deploy`
 *  to publish to GitHub Pages.
 * ============================================================
 */

import profilePhoto from "../assets/img/profileimg.png";
import resumePdf from "../assets/pdf/sagarprajapati.pdf";

import tmroApp from "../Data/Portfolioimg/tmroApp.png";
import jahanMoneyTransfer from "../Data/Portfolioimg/jahanMoneyTransfer.png";
import goodHands from "../Data/Portfolioimg/goodhandsrescuenetworks.png";
import pelipost from "../Data/Portfolioimg/pelipost.png";
import otherlevels from "../Data/Portfolioimg/otherlevels.png";
import invictus from "../Data/Portfolioimg/invictus.png";
import docScanner from "../Data/Portfolioimg/docScanner.png";
import cadTech from "../Data/Portfolioimg/cadTech.png";
import wimetlab from "../Data/Portfolioimg/wimetlab.png";
import onelife from "../Data/Portfolioimg/1life.png";
import cnAppstore from '../Data/Portfolioimg/cn_store_image.png';
import spotlightStore from '../Data/Portfolioimg/spotlight_store.png';
import fastcastStore from '../Data/Portfolioimg/fastr_cast_store.png';
const profile = {
  name: "Sagar Prajapati",
  firstName: "Sagar",
  title: "Lead Mobile Engineer | React Native & Expo | iOS & Android",
  tagline:
    "I build mobile apps around real user problems — from cross-platform growth and payments to faster, more reliable releases.",
  location: "Ahmedabad, India",
  availability: "Mobile engineering · Product-focused",
  photo: profilePhoto,
  resume: resumePdf,
  email: "sagar.prajapti0201@gmail.com",
  phone: "+91 875 872 45 53",
  yearsExperience: "9+",
  summary:
    "I’m a mobile engineer with 9+ years building and improving production apps. I work across React Native, Expo, iOS, and Android, taking products from user needs and architecture through payments, testing, release, and iteration.",

  impactPoints: [
    "Expanded Spotlight to Android after user analytics revealed the opportunity, building the React Native app and core performer and casting workflows from scratch.",
    "Implemented OTA updates for eligible Spotlight fixes, helping teams ship hot fixes without waiting for store approval; native-code changes still require a store release.",
    "Built and improved subscription and payment journeys across Apple and Google Play, working with backend services on purchase lifecycle handling.",
    "Improved reliability with automated testing and observability, including 80% unit and UI test coverage for Spotlight iOS and 85% unit-test coverage for Good Hands Rescue Network.",
  ],

  stats: [
    { value: "9+", label: "Years building mobile apps" },
    { value: "50K+", label: "Spotlight users" },
    { value: "1.3M+", label: "Casting Networks performers" },
    { value: "80%", label: "Spotlight iOS test coverage" },
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/sagar-prajapati-72279213b",
    github: "https://github.com/sagarpra98",
    instagram: "https://www.instagram.com/i_am_sagar98/",
    email: "mailto:sagar.prajapti0201@gmail.com",
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "Approach" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "apps", label: "Apps" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],

  focusAreas: [
    {
      title: "Solve for the user",
      text: "Use product context and user analytics to find the right problem, then shape clear onboarding, search, and core mobile journeys.",
    },
    {
      title: "Build for both platforms",
      text: "Grow products beyond their original platform with React Native and Expo while continuing to deliver native iOS features.",
    },
    {
      title: "Ship with confidence",
      text: "Make complex payments, subscriptions, releases, and hot fixes more reliable with automation, observability, and fit-for-purpose architecture.",
    },
  ],

  skillGroups: [
    {
      title: "Mobile platforms & languages",
      items: [
        "React Native",
        "Expo",
        "TypeScript",
        "JavaScript",
        "Swift",
        "SwiftUI",
        "UIKit",
        "Objective-C",
        "iOS",
        "Android",
      ],
    },
    {
      title: "Architecture, APIs & data",
      items: [
        "MVVM",
        "SOLID",
        "REST APIs",
        "GraphQL",
        "Apollo",
        "Core Data",
        "AVFoundation",
      ],
    },
    {
      title: "Payments & subscriptions",
      items: [
        "StoreKit 2",
        "React Native IAP",
        "Google Play Billing",
        "Stripe",
        "Apple Pay",
      ],
    },
    {
      title: "Analytics, messaging & monitoring",
      items: [
        "Firebase Analytics",
        "Crashlytics",
        "Braze",
        "Heap",
        "Datadog",
        "APNs",
        "FCM",
        "AWS SNS",
      ],
    },
    {
      title: "Release engineering & quality",
      items: [
        "EAS Build",
        "GitHub Actions",
        "Fastlane",
        "Firebase App Distribution",
        "TestFlight",
        "Google Play Console",
        "Maestro",
        "XCTest",
        "XCUITest",
        "Git",
        "Agile / Scrum",
      ],
    },
  ],

  apps: [
    {
      title: "Spotlight",
      client: "Talent Systems · UK casting platform · 50K+ users",
      role: "Lead Mobile Engineer / iOS Lead",
      architecture: "React Native · Expo · native iOS",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "GraphQL",
        "Firebase",
        "OTA updates",
      ],
      highlight:
        "Expanded a successful iOS casting platform to Android after user analytics showed the opportunity; built onboarding, role search and filtering, performer profiles, and self-tape and media-request journeys.",
      solution:
        "Implemented OTA delivery for eligible JavaScript fixes to reduce hot-fix wait time for store approval. Native-code changes still go through store review.",
      appStore: "https://apps.apple.com/in/app/spotlight/id6453605864",
      image: spotlightStore,
    },
    {
      title: "Fast Cast",
      client: "Talent Systems · 20K+ users",
      role: "Mobile Engineer",
      architecture: "React Native · Expo",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Payments",
        "CI/CD",
        "Release engineering",
      ],
      highlight:
        "Work on payment integrations and purchase flows, coordinating with backend services to support reliable transactions and dependable iOS and Android releases.",
      appStore: "https://apps.apple.com/in/app/fastcast-talent-discovery/id6760730100",
      image: fastcastStore,
    },
    {
      title: "Casting Networks",
      client: "Casting platform · 1.3M+ registered performers",
      role: "iOS Engineer",
      architecture: "Swift · UIKit",
      technologies: [
        "Swift",
        "UIKit",
        "StoreKit 2",
        "Firebase",
        "GraphQL",
        "Push notifications",
      ],
      highlight:
        "Built onboarding and performer journeys and implemented auto-renewable subscriptions, trial, and paywall flows integrated with backend subscription lifecycle events.",
      appStore: "https://apps.apple.com/in/app/casting-networks/id1607830864",
      image: cnAppstore,
    },
    {
      title: "Good Hands Rescue Networks",
      client: "Allstate Insurance",
      role: "Senior iOS Developer",
      tenure: "5 months",
      architecture: "MVVM",
      technologies: ["Swift", "RxSwift", "Objective-C", "CI/CD", "Push", "Geofencing", "REST"],
      highlight:
        "Modernized roadside-assistance workflows with SwiftUI, improved notifications, and helped bring iOS ownership in-house, reaching 85% unit-test coverage.",
      appStore: "https://apps.apple.com/us/app/rescue-network/id1136266554?platform=iphone",
      image: goodHands,
    },
    {
      title: "Digital Marketing Framework",
      client: "Other Levels",
      role: "Senior iOS Developer",
      tenure: "5 months",
      architecture: "MVVM",
      technologies: ["Swift", "Objective-C", "iBeacon", "Geofencing", "Rich notifications", "REST"],
      highlight: "iOS SDK for intelligent messaging, beacons, and custom notifications.",
      appStore: "https://www.otherlevels.com/intelligent-messaging/",
      image: otherlevels,
    },
    {
      title: "TMRO",
      client: "Blue Label Labs",
      role: "Senior iOS Developer",
      tenure: "8 months",
      architecture: "MVVM",
      technologies: ["Swift", "Sendbird", "Firebase", "Core Data", "Stripe"],
      highlight: "Creative client app with chat, payments, and push notifications.",
      appStore: "https://apps.apple.com/us/app/tmro/id1524246583",
      image: tmroApp,
    },
    {
      title: "Pelipost",
      client: "Pelipost",
      role: "Senior iOS Developer",
      tenure: "4 months",
      architecture: "MVC",
      technologies: ["Swift", "Push", "Location", "Geofencing", "Core Data", "Apple Pay", "Stripe"],
      highlight: "Photos-to-prison printing app with payments and location features.",
      appStore: "https://apps.apple.com/us/app/pelipost-photos-to-prison/id1092410781",
      image: pelipost,
    },
    {
      title: "Family Trail",
      client: "Consumer app",
      role: "Senior iOS Developer",
      tenure: "5 months",
      architecture: "MVC",
      technologies: ["Swift", "Push", "Location", "Geofencing", "Core Data", "In-App Purchase"],
      highlight: "Family tracking and safety app with live location and IAP.",
      appStore: "https://apps.apple.com/in/app/family-security-system/id1450069089",
      image: onelife,
    },
    {
      title: "Document Scanner & PDF Editor",
      client: "Huf",
      role: "iOS Developer",
      tenure: "3 months",
      architecture: "MVVM",
      technologies: ["Swift", "UIKit", "VisionKit", "OCR", "CloudKit", "Biometrics", "IAP"],
      highlight: "Scanner with OCR, iCloud, Face ID / Touch ID lock, and subscriptions.",
      appStore: "https://apps.apple.com/ge/app/document-scanner-pdf-editor/id1586783907",
      image: docScanner,
    },
    {
      title: "Invictus Lifestyle",
      client: "Invictus Worldwide LLC",
      role: "iOS Developer",
      tenure: "6 months",
      architecture: "MVC",
      technologies: ["Swift", "UIKit", "Smart Lock", "REST", "Socket.IO", "Chat"],
      highlight: "Lifestyle app with real-time chat and smart-lock hardware.",
      appStore: "https://apps.apple.com/us/app/invictus-lifestyle/id1239884635",
      image: invictus,
    },
    {
      title: "On-Site Location",
      client: "Stanford · Enterprise",
      role: "iOS Developer",
      tenure: "3 months",
      architecture: "MVC",
      technologies: ["Swift", "Push", "Geofencing", "REST"],
      highlight: "Enterprise site-location app with geofencing and notifications.",
      appStore: "",
      image: cadTech,
    },
    {
      title: "Autonomous Fleet App",
      client: "Y Combinator accelerator product",
      role: "iOS Developer",
      tenure: "3 months",
      architecture: "MVC",
      technologies: ["Swift", "BLE", "Noke lock SDK", "Core Data", "Location", "Push"],
      highlight: "Fleet / asset transport app with BLE locks and live tracking.",
      appStore: "",
      image: wimetlab,
    },
    {
      title: "Jahan Money Transfer",
      client: "Jahan Money Transfer",
      role: "iOS Developer",
      tenure: "5 months",
      architecture: "MVVM",
      technologies: ["Swift", "Payments", "Mobile top-up", "Firebase", "Core Data"],
      highlight: "Remittance and top-up app with a payment gateway.",
      appStore: "https://apps.apple.com/bf/app/jahan-money/id1543661941",
      image: jahanMoneyTransfer,
    },
    {
      title: "Fleet App",
      client: "Stanford · Enterprise",
      role: "Junior iOS Developer",
      tenure: "4 months",
      architecture: "MVC",
      technologies: ["Swift", "REST", "Push", "SQLite", "iBeacon"],
      highlight: "Vehicle monitoring for an enterprise fleet.",
      appStore: "",
      image: null,
    },
    {
      title: "Taxi in Paris",
      client: "Taxi in Paris",
      role: "Junior iOS Developer",
      tenure: "6 months",
      architecture: "MVC",
      technologies: ["Swift", "REST", "SQLite", "Stripe", "PayPal"],
      highlight: "Taxi booking with payments and local persistence.",
      appStore: "",
      image: null,
    },
  ],

  experience: [
    {
      role: "Lead Mobile Engineer",
      company: "Talent Systems India Pvt Ltd",
      period: "Aug 2024 – Present",
      description:
        "Leading mobile delivery for Spotlight, Fast Cast, and Casting Networks, including Spotlight’s Android expansion and faster OTA hot-fix delivery.",
    },
    {
      role: "Senior iOS Developer",
      company: "All State Solutions",
      period: "",
      description:
        "Built Cadillac Technician roadside-service workflows with SwiftUI and MVVM, offline job updates, and location notifications; wrote network-layer tests to 80% coverage. Also improved Good Hands Rescue Network with SwiftUI modernization and 85% unit-test coverage.",
    },
    {
      role: "iOS Lead",
      company: "Talent Systems India Pvt Ltd",
      period: "Aug 2021 – Aug 2024",
      description:
        "Led native iOS product work, subscription delivery, release pipelines, and app quality across casting and mobile products.",
    },
    {
      role: "Senior iOS Developer",
      company: "TatvaSoft",
      period: "Nov 2019 – Aug 2021",
      description:
        "Built features for TMRO, OtherLevels, and Jahan Money, including messaging frameworks, media and location features, international transfers, and payments.",
    },
    {
      role: "iOS Developer",
      company: "Innopad Solution",
      period: "Sep 2016 – Oct 2019",
      description:
        "Delivered photo and letter ordering, family location tracking, geofencing, and location-aware enterprise app features.",
    },
  ],

  education: [
    {
      course: "Diploma in Computer Engineering",
      year: "2013 – 2016",
      institute: "Gujarat Technological University · Gandhidham, India",
    },
  ],

  contact: {
    heading: "Let’s solve a mobile product problem",
    blurb:
      "Tell me what your users need and where the app is getting stuck — whether that’s platform growth, payments, reliability, or delivery speed.",
    emailjs: {
      serviceId: "service_qt6ynin",
      templateId: "template_fti9rjh",
      publicKey: "user_GN17fKoDZSyAlOwwLj3LN",
    },
  },
};

export default profile;
