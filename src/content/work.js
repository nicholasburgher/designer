const work = [
  {
    "key": "w01",
    "title": "Wisephone",
    "skills": "UX/UI Design | Product Design | Graphics",
    "date": "2020 - Present",
    "path": "wisephone",
    "graphic": "unamed.jpg",
    "content": [
      {
        "component": "Title",
        "content": "Simplifying the modern mobile OS"
      },
      {
        "component": "Body",
        "design": "full-width centered",
        "content": "Wisephone is a minimalist phone with a clean and simple UI. <br/>Each app is branded to present a unified, distraction-free user experience."
      },
      {
        "component": "Image",
        "source": "wisephone/Angeled_NewMapsV2_WB.png",
        "alt": "Wisephone"
      },
      {
        "component": "Heading",
        "content": "The Challenge"
      },
      {
        "component": "Body",
        "design": "full-width",
        "content": "Turning the vision of Wisephone into a reality has been <strong><u>no easy feat</u></strong>. Creating a cohesive branded experience across an entire OS requires serious planning and thought, even for such a straight-forward design as Wisephone."
      },
      {
        "component": "Body",
        "design": "full-width",
        "content": "To turn our customized version of Android into WiseOS, we essentially had to create a new design language that could be applied across our library of shared apps and tools."
      },
      {
        "component": "Heading",
        "content": "Hurdles to Success"
      },
      {
        "component": "Subheading",
        "content": "The Single Source of Truth"
      },
      {
        "component": "Body",
        "content": "Our team considers Figma as our \"Single Source of Truth\" for developers and designers. Whatever is designed in Figma is how it should look when coded. But early on, it was clear that the <strong>Figma designs were not being followed</strong>, or at least not 100% of the time. There would be a hundred minor discrepencies from our design and the final output. In addition, some things were built without there ever being any design documentation provided. "
      },
      {
        "component": "Body",
        "content": "Why was this the case? Project managers, who are supposed to remove barriers, were thus beginning to impose new rules on the development team to restict them from working on tasks without designs. It had to be in Figma or it wasn't worked on...it had to be on a roadmap...it had to have a ticket. These weren't bad standards to have, but they demotivated creativity and spontaneous discovery of new ideas. I began investigating why we were having this problem in the first place."
      },
      {
        "component": "Subheading",
        "content": "Findings"
      },
      {
        "component": "Body",
        "content": "Team members initially believed cultural differences and language barriers were contributing to innacurate design builds. I found myself less convinced of this since I did not encounter issues when communicating. Instead, my attention was turned to a different question, was Design providing the dev team with adequate documentation to build our designs? Was Figma really a good source of truth?"
      },
      {
        "component": "Combination",
        "design": "body-two-thirds",
        "title": "Transforming Figma",
        "content": "Our master Figma file contained dozens of screen views, designed independent of one another. Most elements were absolute positioned with constraints on the top left. Fonts were generally consistent but not linked to styles. Also, there were only a few \"components\" (reusable UI elements) and they weren't well documented.<br/><br/> Over the next 2 years, I would transform our master Figma file into a <strong>component-driven design system</strong>. It would contain reusable UI components and assets, greater frame consistency across the board, uniform text and color styling, and animated prototypes where appropriate.",
        "source": "wisephone/More-Keyboard-Components.jpg",
        "alt": "Wisephone Components",
        "caption": "Every UI element would be turned into reusable components, even down to the finest details. Above are component specific to the Keyboard app."
      },
      {
        "component": "Subheading",
        "content": "Auditing the Current Product"
      },
      {
        "component": "Body",
        "content": "Since we were discovering inconsistencies in our builds from the design, I needed a way to audit the apps easily. I would also need to build missing screens from what was live on the phone or website in order to be prepared to make adjustments."
      },
      {
        "component": "Combination",
        "design": "image-one-third",
        "content": "One of the best tools for auditing the UI was Android debugging. Turning on this mode would allow us to see the underlying structure of live code, and to evaluate if improvements could be made. This was a much faster alternative to looking at source code in Android studio, because problems could be identified rather quickly.<br/><br/>After reviewing, we could more accurately report why certain bugs occur or share more specifics on what could be changed to improve the user experience.",
        "source": "wisephone/calcscreen.png",
        "alt": "Wisephone debugging",
        "caption": "Above you can see some elements were a little larger than others, and extra frames existed."
      },
      {
        "component":"Heading",
        "content": "What was Implemented"
      },
      {
        "component": "Combination",
        "design": "body-two-thirds",
        "title": "Structure & Components",
        "content": "After reworking Figma, we now have clearly divided pages including one specific to just Components for WiseOS. This has made it a lot easier to find pieces for new UI builds and communicate our design intent to others. <br/><br/> It's also worth noting we now directly link to Figma frames when sharing documentation. Before we would just attach a screenshot or type out the frame name for developers to look up. A direct link removes the searching process and let's them see first hand.",
        "source": "wisephone/FigmaPages.jpg",
        "alt": "picture showing figma pages for our design system"
      },
      {
        "component": "Combination",
        "design": "image-one-third",
        "title":"Constraints",
        "content": "Also, all screen views utilize frame constraints in order to ensure our app will run well on any device size. From time to time, we change phone models, so this is important to have in Figma as well. We try our best to give consistent names to each section in a view, and to name it close to what developers may use when building in Android studio.",
        "source" : "wisephone/Constraints.gif",
        "alt": "frame constraints and structure"
      },
      {
        "component": "Subheading",
        "content": "Accompanying UX Documention"
      },
      {
        "component": "Body",
        "content": "The Wisephone project has also challenged me to deepen not only my UI building skills but UX also. Taking documentation to the next level, I discovered how to use <strong><u>business rules</u></strong>, <strong><u>test cases</u></strong>, and <strong><u>user flow diagrams</u></strong> to better communicate the intent of complex designs. These details are often very hard to communicate in Figma directly and when your teams are remote. Tables, charts, and product requirement documents help team members better envision the end product and remove the guesswork. I have deeply grown in my skills at crafting such technical documentation."
        
      },
      {
        "component": "Image",
        "source": "wisephone/Final_Flow.png",
        "alt": "User flow documentation example"
      },
      {
        "component":"Heading",
        "content": "Results"
      },
      {
        "component": "Body",
        "content": "The Techless vision of Wisephone is coming to life more and more every day. As an ongoing project, we've learned a lot since the start of 2019 and we still believe there's more to learn and do to strengthen our system. But we are proud to say our most recent releases have knocked out many of the UX bugs that early adopters were so patient with us in fixing."
      },
      {
        "component": "Body",
        "content": "We're now delivering a truly unique product with it's own unique feel that you can't find anywhere else!"
      },
      {
        "component": "Body",
        "content": "As we look into the future and what Techless will do next, I am confident the work we accomplished in establishing best practices and a repeatable, growing system of UI components and user experience patterns will continue to influence the Techless brand and keep it well established for years to come."
      }
    ]
  },
  {
    "key": "w02",
    "title": "Tech Addiction Quiz",
    "skills": "Illustration | Web Design | Development | Marketing",
    "date": "2020",
    "path": "tech-addiction-quiz",
    "graphic": "unamed.jpg",
    "content": [
      {
        "component": "Title",
        "content": "Email Funnel as a Fun Touchpoint"
      },
      {
        "component": "Body",
        "design": "centered",
        "content": "Capturing leads through engaging content is a great way to empower marketing efforts. The Tech Addiction Quiz was one of the most involved lead generation systems I've ever been involved in creating, and one of the projects I'm most proud of."
      },
      {
        "component": "Image",
        "customClass": "smaller",
        "source": "quiz/SocialPostGraphic_Quiz.jpg",
        "alt": "image of the Tech addiction quiz being marketed on social platforms"
      },
      {
        "component": "Button",
        "destination": "techaddictionquiz.com",
        "content": "Go to the Tech Addiction Quiz",
        "target": "_blank",
        "design": "button-1"
      },
      {
        "component": "Heading",
        "content": "Involvement"
      },
      {
        "component": "List",
        "listType": "unordered",
        "content": [
          "Design illustrations for each tech addict personas",
          "Design the quiz interface",
          "Set up email automation journeys in Mailchimp",
          "Develop the site, both UI and functionality",
          "Create supporting landing pages for each persona"
        ]
      },
      {
        "component": "Subheading",
        "content": "Illustrating the Personas"
      },
      {
        "component": "Image",
        "source": "quiz/TechAddictionQuiz_ImageBuildup.jpg",
        "alt": "picture of illustration development for the Tech Addiction Quiz"
      },
      {
        "component": "Body",
        "content": "I worked with creative writers in naming the different personas and determining the visual characteristics we wanted to highlight. Each character was sketched on paper first, then refined. When all concepts were nearly locked down, they were digitized and further refined, starting with line work, then basic shading, then toning and coloring."
      },
      {
        "component": "Gallery",
        "galleryType": "masonry",
        "content": [
          {
            "source": "quiz/COB_Flipster.png",
            "alt": "Modern Flipster",
            "caption": "Modern Flipster"
          },
          {
            "source": "quiz/COB_Zen.png",
            "alt": "Zen Minimalist",
            "caption": "Zen Minimalist"
          },
          {
            "source": "quiz/COB_BrandLoyalist.png",
            "alt": "Brand Loyalist",
            "caption": "Brand Loyalist"
          },
          {
            "source": "quiz/COB_Junky.png",
            "alt": "Bonafide Tech Addict",
            "caption": "Bonafide Tech Addict"
          },
          {
            "source": "quiz/COB_Table.png",
            "alt": "Smartphone Disciple",
            "caption": "Smartphone Disciple"
          }
        ]
      },
      {
        "component": "Subheading",
        "content": "Custom Quiz Experience"
      },
      {
        "component": "Video",
        "source": "quiz/Quiz-First-look.mp4"
      },
      {
        "component": "Body",
        "content": "Many online surveying tools exist out there such as Survey Monkey, Google Forms, and Typeform. But none allowed quite the customizability we were looking for. We needed <strong>email client integration</strong>, on-the-fly <strong>result calculations</strong> based on user's choices, and <strong>auto redirecting</strong> after completion. In addition, the results only mattered to the user and not to us (we would not need to store all their answers in a database)."
      },
      {
        "component": "Body",
        "content": "I requested the team allow me to build a custom-coded webpage on our site that would house the whole quiz. I was confident we would have MUCH greater flexibility to create something truly unique and \"Techless\", that met all our needs, and ticked all the boxes of the project scope, buy going with a custom-coded solution rather than using one of the stock options. Both the cost-savings from not using those tools and the better user experience were tradeoffs we were willing to make in the end."
      },
      {
        "component": "Image",
        "source": "quiz/design-details/page-content-dimensions.jpg",
        "alt": "general structure of the Tech Addiction Quiz"
      },
      {
        "component": "Body",
        "content": "I kept things simple, by implementing a basic paging system, in which each question resided on a different \"page\". By interacting with the interface, users can \"page through\" each question until they get to the end of the survey."
      },
      {
        "component": "Image",
        "source": "quiz/design-details/paging-system-code.jpg",
        "alt": "paging system code"
      },
      {
        "component": "Body",
        "content": "The main UI for the web app is also very simple, both mobile friendly and user friendly. All questions are \"Yes\" or \"No\" questions, and the butons for the submission stays in the same place on all pages. A simple tally system keeps track of what question the user is on. And page elements visually transition with smooth welcoming animations. These were all things we learned over time would make the interface more inviting and completable for users."
      },
      {
        "component": "Body",
        "content": "We were able to stick completely with the Techless brand colors: shades of warm grays and a rust-like accent color. Elements could also perfectly mimic user interface elements from the main website because this was built custom."
      },
      {
        "component": "Subheading",
        "content": "Email Funnel"
      },
      {
        "component": "Subheading",
        "content": "Development"
      },
      {
        "component": "Subheading",
        "content": "The Final Result"
      }
    ]
  },
  {
    "key": "w03",
    "title": "Animation Showcase",
    "skills": "Graphic Design | Animation | Scripting",
    "date": `${new Date().getFullYear()}`,
    "path": "animations",
    "graphic": "moving-graphic.gif"
  },
  {
    "key": "w04",
    "title": "Email Signature Builder Tool",
    "skills": "UX Design | Programming | Branding",
    "date": "2017",
    "path": "email-signatures",
    "graphic": "email-sig-builder-tool-splash.jpg"
  }
]
export default work;