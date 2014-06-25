/* Metadata represendations of resources that are outside of the autogenerated
   local resource lists, or that override local resource representations.

   Resources listed here are referenced from sitemap sections and collections,
   matched by url string if there is no resource existing in ALL_RESOURCES.

   Currently, these articles can override only the generated resources
   in DISTRIBUTE_RESOURCES. A representation defined here will not be applied
   when a collection or section specifies a url that's not in DISTRIBUTE_RESOURCEs.
   Also
   So if a section url refers to a static doc that's
   not in a distribute section, you need to create an item for
   it in this file. Fix is to compare across
   ALL_RESOURCES_BY_URL.  */

DISTRIBUTE_RESOURCES = DISTRIBUTE_RESOURCES.concat([
  {
    "title":"Android L Developer Preview",
    "titleFriendly":"",
    "summary":"<p style='font-size:18px;'>Get an early look at the next release and get your apps ready when the platform officially launches.</p>",
    "url":"preview/index.html",
    "group":"",
    "keywords": [],
    "tags": [],
    "image":"preview/images/l-dev-prev.png",
    "type":""
  },
  {
    "title":"Developer Registration",
    "titleFriendly":"",
    "summary":"Additional information about the registration process.",
    "url":"https://support.google.com/googleplay/android-developer/answer/113468",
    "group":"",
    "keywords": [],
    "tags": [],
    "image":"images/play_dev.jpg",
    "type":"google"
  },
  {
    "title": "Google Play Distribution and Seller Countries",
    "titleFriendly":"",
    "summary": "List of countries and territories where you can distribute your apps in Google Play.",
    "url":"https://support.google.com/googleplay/android-developer/answer/138294",
    "group":"",
    "keywords": [],
    "tags": [],
    "image":"images/play_dev.jpg",
    "type":"google"
  },
  {
    "title":"Google Play Content Policies",
    "titleFriendly":"",
    "summary":"Details on policies relating to your developer account and app distribution is governed.",
    "url":"https://support.google.com/googleplay/android-developer/topic/3453577",
    "group":"",
    "keywords": [],
    "tags": ["#developersupport"],
    "image":"images/play_dev.jpg",
    "type":"google"
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["#developersupport #termsandpolicies"],
    "url": "https://support.google.com/googleplay/android-developer/answer/4407611",
    "timestamp": 1194884220000,
    "image": 'images/play_dev.jpg',
    "title": "Google Play Terms and Policies",
    "summary": "Developer terms and policies that apply when you distribute apps in Google Play.",
    "keywords": [],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "title":"Google Play Policy Center",
    "titleFriendly":"",
    "summary":"A central resource for you to learn about Google Play policies and guidelines.",
    "url":"https://support.google.com/googleplay/android-developer/answer/4430948",
    "group":"",
    "keywords": [],
    "tags": [],
    "image":"http://storage.googleapis.com/support-kms-prod/SNP_712EA2784949DDF085C46E3BE7B1DC618A09_4389397_en_v0",
    "type":"google"
  },
  {
    "title":"Developer Help Center",
    "titleFriendly":"",
    "summary":"Complete details on getting started, publishing, troubleshooting, and more.",
    "url":"https://support.google.com/googleplay/android-developer",
    "group":"",
    "keywords": [],
    "tags": [],
    "image":"images/play_dev.jpg",
    "type":"google"
  },
  {
    "title":"Google for Education",
    "titleFriendly":"",
    "summary":"Find out more about how Google can support your work with apps and tablets.",
    "url":"http://www.google.com/edu/tablets/",
    "group":"",
    "keywords": [],
    "tags": [],
    "image":"distribute/images/gp-edu-apps-image.jpg",
    "type":"google"
  },
  {
    "title":"Keeping Your App Responsive",
    "titleFriendly":"",
    "summary":"This document describes how the Android system determines whether an application is not responding and provides guidelines for ensuring that your application stays responsive.",
    "url":"training/articles/perf-anr.html",
    "group":"",
    "keywords": [],
    "tags": [],
    "image":"",
    "type":"google"
  },
  {
    "title":"Google Play Game Services",
    "titleFriendly":"",
    "summary":"Tools to offer a better game experience.",
    "url":"google/play-services/games.html",
    "group":"",
    "keywords": [],
    "tags": [],
    "image":"",
    "type":"google"
  },

  {
    "lang": "en",
    "group": "",
    "tags": [
      "versions", "blog", "googleplay"
    ],
    "url": "http://android-developers.blogspot.com/",
    "timestamp": 1004884220000,
    "image": "images/blog.jpg",
    "title": "Android Developers Blog",
    "summary": "Follow the latest news on Android design, development, and distribution.",
    "keywords": [],
    "type": "blog",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://android-developers.blogspot.com/2011/11/making-android-games-that-play-nice.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Making Android Apps that Play Nice",
    "summary": "Audio lifecycle and expected audio behaviors for Android apps.",
    "keywords": [],
    "type": "blog",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://android-developers.blogspot.com/2010/07/multithreading-for-performance.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Multithreading for Performance",
    "summary": "Ways to improve performance through multi-threading.",
    "keywords": [],
    "type": "blog",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://play.google.com/about/developer-content-policy.html",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Developer Program Policies",
    "summary": "Guidelines acceptable content in Google Play. Please read and understand the policies before publishing.",
    "keywords": [],
    "type": "google",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/188189",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Rating your application content for Google Play",
    "summary": "How to choose the appropriate content ratings level for your apps.",
    "keywords": [],
    "type": "support",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://android-developers.blogspot.com/2011/10/android-market-featured-image.html",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Google Play Featured Image Guidelines",
    "summary": "How to create attractive, effective Featured Images for your apps.",
    "keywords": [],
    "type": "support",
    "titleFriendly": ""
  },
{
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/113477",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Supporting your users",
    "summary": "Options for supporting users.",
    "keywords": [],
    "type": "support",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/practices/screens_support.html#ConfigurationExamples",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Configuration examples",
    "summary": "How to declare layouts and other resources for specific screen sizes.",
    "keywords": [],
    "type": "design",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "training/design-navigation/multiple-sizes.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Planning for Multiple Touchscreen Sizes",
    "summary": "",
    "keywords": [],
    "type": "design",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "training/multiscreen/index.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Designing for Multiple Screens",
    "summary": "Designing an intuitive, effective navigation for tablets and other devices.",
    "keywords": [],
    "type": "design",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/topics/resources/providing-resources.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Providing Resources",
    "summary": "Layouts and drawable resources for specific ranges of device screens.",
    "keywords": [],
    "type": "design",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "training/basics/supporting-devices/screens.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Supporting Different Screens",
    "summary": "Optimizing the user experience for different screen sizes and densities.",
    "keywords": [],
    "type": "design",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/topics/appwidgets/index.html#MetaData",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Adding the AppWidgetProviderInfo Metadata",
    "summary": "How to set the height and width dimensions of a widget.",
    "keywords": [],
    "type": "design",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/topics/manifest/uses-sdk-element.html#ApiLevels",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Android API Levels",
    "summary": "Introduction to API levels and how they relate to compatibility.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/practices/screens_support.html#DeclaringScreenSizeSupport",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Declaring screen size support",
    "summary": "How to declare support for screen sizes in your app\'s manifest.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/topics/manifest/uses-feature-element.html#testing",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Checking for hardware feature requirements",
    "summary": "Determining an app’s hardware and software requirements.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://play.google.com/apps/publish/",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Google Play Developer Console",
    "summary": "The tools console for publishing your app.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://youtu.be/SkHHPf3EdzE",
    "timestamp": 1194884220000,
    "image": "http://i1.ytimg.com/vi/SkHHPf3EdzE/maxresdefault.jpg",
    "title": "Level Up Your Android Game",
    "summary": "Learn how to take your game to the next level on Google Play.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://developers.google.com/+/mobile/android/share/interactive-post",
    "timestamp": 1194884220000,
    "image": 'images/google/gps-googleplus.png',
    "title": "Sharing interactive posts to Google+ from your Android app",
    "summary": "Interactive posts provide an easy and prominent way to allow users to share your site or app with their friends and invite them to take a specific action.",
    "keywords": ["Interactive", "Google+"],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://play.google.com/about/developer-distribution-agreement.html",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Developer Distribution Agreement",
    "summary": "Terms for distributing and selling apps and in-app products in Google Play.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/113417",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Inappropriate content in comments and applications",
    "summary": "More details on what content is appropriate.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/legal/troubleshooter/1114905",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Removing content from Google",
    "summary": "Find how how to request the removal of content that infringes on your trademark.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://play.google.com/about/developer-distribution-agreement-addendum.html",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Google Play for Education Addendum",
    "summary": "Review the education-specific requirements.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://android-developers.blogspot.com/2013/03/native-rtl-support-in-android-42.html",
    "timestamp": null,
    "image": null,
    "title": "Native RTL Support in Android 4.2",
    "summary": "Blog post that explains how to support RTL in your UI.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/topics/resources/string-resource.html#Plurals",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Quantity Strings (Plurals)",
    "summary": "How to work with string plurals according to rules of grammar in a given locale.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "reference/java/util/Locale.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Locale",
    "summary": "Determine what CLDR data or version of the Unicode spec a particular Android platform version uses.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
    {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/topics/resources/string-resource.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "String Resources",
    "summary": "Explains how to use string resources in your UI.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "distribute/tools/localization-checklist.html#strings",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Manage strings for localization",
    "summary": "Guidance on having your strings translation ready.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "tools/publishing/publishing_overview.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "General Publishing Overview",
    "summary": "Start here for an overview of publishing options for Android apps.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "tools/publishing/preparing.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Preparing for Release",
    "summary": "Developer documentation on how to build the signed, release-ready APK. This process is the same for all Android apps.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "distribute/googleplay/policies/index.html",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Google Play Policies and Guidelines",
    "summary": "An overview of Google Play policies for spam, intellectual property, and ads, with examples of common problems.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/topic/2364761",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Policy and Best Practices",
    "summary": "Help Center document describing various content policies and processes.",
    "keywords": [],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "google/play/expansion-files.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "APK Expansion Files",
    "summary": "Developer documentation describing APK Expansion Files and how to support them in your app.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "tools/help/proguard.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "ProGuard",
    "summary": "Developer documentation describing how to use ProGuard to shrink, optimize, and obfuscate your code prior to release.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "title":"Dashboards",
    "titleFriendly":"",
    "summary":"This page provides information about the relative number of devices that share a certain characteristic, such as Android version or screen size. This information may help you prioritize efforts for supporting different devices by revealing which devices…",
    "url":"about/dashboards/index.html",
    "group":"",
    "keywords": ["android","dashboard","platforms","versions"],
    "tags": ["#ecosystem","#versions","#whatsnew"],
    "image":"http://chart.googleapis.com/chart?chl=GL%201.1%20only%7CGL%202.0%7CGL%203.0&chf=bg%2Cs%2C00000000&chd=t%3A0.1%2C93.5%2C6.4&chco=c4df9b%2C6fad0c&chs=400x250&cht=p",
    "lang":"en",
    "type":"about"
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://developers.google.com/wallet/instant-buy/",
    "timestamp": 1194884220000,
    "image": "distribute/images/payment-method.jpg",
    "title": "Google Wallet Instant Buy APIs",
    "summary": "Developer documentation describing Instant Buy and how to support it in your apps.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/1169947",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Selling Apps in Multiple Currencies",
    "summary": "Help Center document describing how pricing works in Google Play.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/138412",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Prices and supported currencies",
    "summary": "Help Center document listing supported currencies for pricing your apps.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/112622",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Transaction Fees",
    "summary": "Help Center document describing transaction fees for priced apps and in-app products.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/138000",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Specifying tax rates",
    "summary": "Help Center document describing how to set tax rates for different countries.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "guide/topics/resources/localization.html",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Localizing with Resources",
    "summary": "Developer guide to localizing resources in your app.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/113475",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Category types",
    "summary": "Help Center document listing available categories for apps.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/113476",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Updates",
    "summary": "Requirements for app updates in Google Play.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/1153479",
    "timestamp": 1194884220000,
    "image": null,
    "title": "In-app Billing",
    "summary": "Help Center document describing how to correctly set up In-app Billing.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [
      "#gpfe",
      "#googleplay"
    ],
    "url": "http://youtu.be/vzvpcEffvaE",
    "timestamp": 1383243492000,
    "image": "http://i1.ytimg.com/vi/vzvpcEffvaE/maxresdefault.jpg",
    "title": "Introducing Google Play for Education",
    "summary": "Google Play for Education is a destination where schools can find great, teacher-approved, educational content&mdash;from videos and books, to educational apps&mdash;all in one place. Teachers can filter content by subject matter, grade and other criteria. Bulk purchase and instant distribution let educators bring your apps directly to classrooms and schools.",
    "keywords": [],
    "type": "youtube",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [
      "#engagement",
    ],
    "url": "http://www.youtube.com/yt/dev/",
    "timestamp": 1383243492000,
    "image": "http://www.youtube.com/yt/dev/media/images/yt-dev-home-hero.jpg",
    "title": "YouTube for Developers",
    "summary": "The YouTube APIs and Tools enable you to integrate YouTube's video content and functionality into your website, app, or device.",
    "keywords": [],
    "type": "youtube",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [
      "#engagement",
    ],
    "url": "http://www.google.com/analytics/mobile/",
    "timestamp": 1383243492000,
    "image": "http://www.google.com//analytics/images/heros/mobile-index.jpg",
    "title": "Google Mobile App Analytics",
    "summary": "Mobile App Analytics measures what matters most at all key stages: from first discovery and download to in-app purchases. ",
    "keywords": ["analytics,user behavior"],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [
      "#engagement",
    ],
    "url": "https://developers.google.com/app-indexing/",
    "timestamp": 1383243492000,
    "image": "https://developers.google.com/app-indexing/images/allthecooks_srp.png",
    "title": "Sign Up for App Indexing",
    "summary": "Google is working with app developers and webmasters to index the content of apps and relate them to websites. When relevant, Google Search results on Android will include deep links to apps.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },

  {
    "lang": "en",
    "group": "",
    "tags": [
      "#gcm",
    ],
    "url": "http://www.youtube.com/watch?v=y76rjidm8cU",
    "timestamp": 1383243492000,
    "image": "http://1.bp.blogspot.com/-IF-1-1kA0sg/UYwTidxdi3I/AAAAAAAAAEU/ellLeQ-E1vs/s800/google-io-lockup-2.png",
    "title": "Google Cloud Messaging at I/O 2013",
    "summary": "Google Cloud Messaging allows your services to efficiently send data to applications on Android devices. See what's new, and learn how to use GCM to make your apps more efficient.",
    "keywords": ["gcm"],
    "type": "youtube",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [
      "#googleplus",
    ],
    "url": "https://developers.google.com/+/mobile/android/people",
    "timestamp": 1383243492000,
    "image": "images/google/gps-googleplus.png",
    "title": "Sign Up for App Indexing",
    "summary": "After you let users sign in with Google, you can access their age range, language, public profile information, and people that they have circled.",
    "keywords": ["googleplus"],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [
      "#gcm",
    ],
    "url": "http://developer.chrome.com/apps/cloudMessagingV2",
    "timestamp": 1383243492000,
    "image": "images/kk-chromium-icon.png",
    "title": "Google Cloud Messaging for Chrome",
    "summary": "Google Cloud Messaging for Chrome (GCM) is a service for signed-in Chrome users that helps developers send message data from servers to their Chrome apps and extensions.",
    "keywords": ["gcm"],
    "type": "guide",
    "titleFriendly": ""
  },

  {
    "lang": "en",
    "group": "",
    "tags": [
      "#sdkupdates"
    ],
    "url": "http://android-developers.blogspot.com/2013/07/making-beautiful-android-app-icons.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Make Beautiful Android App Icons",
    "summary": "Follow these in-depth launcher icon tips on the Android Developers blog.",
    "keywords": [],
    "type": "blog",
    "titleFriendly": ""
  },
     {
    "lang": "en",
    "group": "",
    "tags": [
      "#sdkupdates"
    ],
    "url": "http://android-developers.blogspot.com/2012/12/localize-your-promotional-graphics-on.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Localize Your Promotional Graphics",
    "summary": "Learn how to capitalise on international audiences.",
    "keywords": [],
    "type": "blog",
    "titleFriendly": ""
  },
   {
    "lang": "en",
    "group": "",
    "tags": [
      "#sdkupdates"
    ],
    "url": "http://android-developers.blogspot.com/2013/10/making-your-app-content-more-accessible.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Make your App Content more Accessible with App Linking",
    "summary": "About using search and deep linking to get more users.",
    "keywords": [],
    "type": "blog",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://developers.google.com/+/mobile/android/share/interactive-post",
    "timestamp": 1194884220000,
    "image": 'images/google/gps-googleplus.png',
    "title": "Sharing interactive posts to Google+ from your Android app",
    "summary": "Interactive posts provide an easy and prominent way to allow users to share your site or app with their friends and invite them to take a specific action.",
    "keywords": ["Interactive", "Google+"],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/2528691",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "How to add multiple user accounts to your Developer Console for testing and more.",
    "summary": "",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://developers.google.com/+/mobile/android/share/deep-link",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Adding deep linking to Google+ posts shared from your Android app",
    "summary": "",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "google/play/licensing/index.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Application Licensing",
    "summary": "Information on the features of Google Play to protect your apps’ licences.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "design/style/writing.html",
    "timestamp": 1194884220000,
    "image": null,
    "title": "Writing Style",
    "summary": "Android Design guidelines for voice and style in your UI.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://en.wikipedia.org/wiki/XLIFF",
    "timestamp": 1194884220000,
    "image": null,
    "title": "XML Localisation Interchange File Format (XLIFF)",
    "summary": "Background information on XLIFF.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
    {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/googleplay/android-developer/answer/1078870",
    "timestamp": 1194884220000,
    "image": "images/play_dev.jpg",
    "title": "Graphic Assets for your Application",
    "summary": "Details about the graphics you can add to your product listing.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://support.google.com/payments/answer/2741495",
    "timestamp": null,
    "image": null,
    "title": "Issuing Refunds",
    "summary": "Help Center document describing how to issue refunds.",
    "keywords": [],
    "type": "guide",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "http://android-developers.blogspot.com/2013/11/bring-your-apps-into-classroom-with.html",
    "timestamp": null,
    "image": "distribute/images/gp-edu-apps-image.jpg",
    "title": "Google play for education",
    "summary": " ",
    "keywords": [],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["localization", "pricing", "developer support"],
    "url": "https://support.google.com/googleplay/android-developer/table/3541286",
    "timestamp": null,
    "image": "images/play_dev.jpg",
    "title": "Supported locations for distributing your apps in Google Play",
    "summary": "Countries and regions where you can distribute your app in Google Play.",
    "keywords": [],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["games", "localization", "quality"],
    "url": "http://www.youtube.com/watch?v=SkHHPf3EdzE",
    "timestamp": null,
    "image": "https://developers.google.com/apps/images/io_2013/google-io-logo.png",
    "title": "Level Up Your Android Game",
    "summary": "Learn how to take your game to the next level in this Google I/O session.",
    "keywords": [],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["support"],
    "url": "https://support.google.com/groups/answer/46601",
    "timestamp": null,
    "image": null,
    "title": "Google Groups",
    "summary": "Create a group for your community.",
    "keywords": [],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["support"],
    "url": "https://support.google.com/plus/topic/2888488",
    "timestamp": null,
    "image": null,
    "title": "Google+ Communities",
    "summary": "Host a Google+ community for testers or users.",
    "keywords": [],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["monetize", "ads"],
    "url": "http://www.google.com/ads/admob/#subid=us-en-et-dac",
    "timestamp": null,
    "image": "distribute/images/advertising.png",
    "title": "AdMob for Android",
    "summary": "Make money by connecting with over a million Google advertisers all over the world, so your revenue scales with your app.",
    "keywords": ["ads"],
    "type": "distribute",
    "titleFriendly": ""
  },

  {
    "lang": "en",
    "group": "",
    "tags": ["monetize", "ads"],
    "url": "http://www.google.com/doubleclick/publishers/small-business/index.html",
    "timestamp": null,
    "image": "http://www.google.com/doubleclick/publishers/small-business/images/define_ad.png",
    "title": "DoubleClick for Publishers",
    "summary": "A free ad management solution that helps growing publishers sell, schedule, deliver, and measure all of their digital ad inventory.",
    "keywords": ["ads"],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["monetize", "ads"],
    "url": "http://support.google.com/googleplay/android-developer/topic/2985714",
    "timestamp": null,
    "image": "http://storage.googleapis.com/support-kms-prod/SNP_712EA2784949DDF085C46E3BE7B1DC618A09_4389397_en_v0",
    "title": "Policy Center: Ads",
    "summary": "Introduction to ads and system interference policies in Google Play",
    "keywords": ["ads"],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["monetize", "giftcards"],
    "url": "https://play.google.com/about/giftcards/",
    "timestamp": null,
    "image": "images/gp-balance.png",
    "title": "Google Play Gift Cards",
    "summary": "Buy Google Play gift cards online or at a variety of retail stores.",
    "keywords": ["gift card"],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["monetize", "paymentmethods"],
    "url": "https://support.google.com/googleplay/answer/2651410",
    "timestamp": null,
    "image": "images/play_dev.jpg",
    "title": "Google Play Accepted Payment Methods",
    "summary": "Support details on the payment methods supported in Google Play.",
    "keywords": ["gift card"],
    "type": "distribute",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["plus", "social"],
    "url": "https://plus.google.com/+AndroidDevelopers/",
    "timestamp": null,
    "image": "images/plus.jpg",
    "title": "+Android Developers",
    "summary": "Sharing news, ideas, and techniques for success.",
    "keywords": ["+AndroidDevelopers"],
    "type": "Google+",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["plus", "social"],
    "url": "http://plus.google.com/+GooglePlay",
    "timestamp": null,
    "image": "https://lh4.googleusercontent.com/-IKezweZlcXI/AAAAAAAAAAI/AAAAAAABOvg/uK8Z0jekVE4/s120-c/photo.jpg",
    "title": "+Google Play",
    "summary": "News and discussion about Google Play, apps, and other content in Google+.",
    "keywords": ["+GooglePlay"],
    "type": "Google+",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["support", "android"],
    "url": "support.html",
    "timestamp": null,
    "image": null,
    "title": "Developer Support",
    "summary": "Links to community and support resources for Android developers.",
    "keywords": ["support"],
    "type": "Google+",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": ["analytics"],
    "url": "https://developers.google.com/analytics/devguides/collection/android/",
    "timestamp": null,
    "image": "https://developers.google.com/analytics/images/home/gear-logo.png",
    "title": "Google Mobile App Analytics SDK",
    "summary": "The Google Analytics for Mobile Apps SDKs make it easy for you to implement Google Analytics in your mobile application.",
    "keywords": ["analytics, user behavior"],
    "type": "sdk",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://developers.google.com/edu/guidelines",
    "timestamp": null,
    "image": "http://developer.android.com/distribute/images/edu-guidelines.jpg",
    "title": "Education Guidelines",
    "summary": "These guidelines and requirements help you develop great apps for students, which offer compelling content and an intuitive user experience on Android tablets.",
    "keywords": [],
    "type": "",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://developers.google.com/edu/faq",
    "timestamp": null,
    "image": "http://developer.android.com/distribute/images/gpfe-faq.jpg",
    "title": "Education FAQ",
    "summary": "Answers to common questions you might have about Google Play for Education.",
    "keywords": [],
    "type": "",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://developers.google.com/edu/",
    "timestamp": null,
    "image": "https://developers.google.com/edu/images/home-android.png",
    "title": "Chrome Apps in Google Play for Education",
    "summary": "Find out more about Chrome apps in Google Play for Education.",
    "keywords": [],
    "type": "",
    "titleFriendly": ""
  },
  {
    "lang": "en",
    "group": "",
    "tags": [],
    "url": "https://www.google.com/edu/tablets/#tablets-family",
    "timestamp": null,
    "image": "https://www.google.com/edu/images/tablets/big-tablet.png",
    "title": "Google Play for Education Tablets",
    "summary": "Google Play for Education leverages a diverse set up tablets approved for the classroom which may help inform you how to build educational apps.",
    "keywords": [],
    "type": "",
    "titleFriendly": ""
  }
]);