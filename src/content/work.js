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
        "component": "Body",
        "content": "Upon finishing the quiz questions, users were required to give an email to see their quiz results. We used Mailchimp's customer journeys to set up triggered automations that send 2 or 3 email touchpoints to engage individuals who took the quiz. Based on the user's awarded persona, they would receive different followup emails."
      },
      {
        "component": "Image",
        "source": "quiz/design-details/results-screen.jpg",
        "alt" :"results screen"
      },
      {
        "component": "Subheading",
        "content": "Development"
      },
      {
        "component": "Body",
        "content": "I'd like to take a minute to highlight just a few of the development items I worked through when building this tool. The first item is <u>calculating</u> the quiz results."
      },
      {
        "component": "Image",
        "source": "quiz/design-details/calculate.jpg",
        "alt": "image or code used for calculating"
      },
      {
        "component": "Body",
        "content": "In short, I wrote a script that runs on the final page of the quiz. What it does is read the results (r) from each of the 7 questions the user submitted and adjust the scores for each of the personas based on their answer. Which ever is highest will then be selected as their persona assignment."
      },
      {
        "component": "Body",
        "content": "This isn't a highly technical or serious program, so it was important not to overthink the calculations and just let it run. That said, I did have to consider how the user's answer might effect their outcome. For that reason, I spent some time working on refining those calculations until it made the most sense."
      },
      {
        "component": "Body",
        "content": "Lastly, I had to spend some serious time working through implementing a email submission wall. Because some of the code comes straight from Mailchimp, and their API has to run certain calls when registering new emails, I need to get a callback before I proceed to the last page of the quiz, then redirecting the user to the Techless.com landing page."
      },
      {
        "component": "Image",
        "source": "quiz/design-details/validation.jpg",
        "alt": "Mailchimp validation code for testing if we successfully received a signup from the user"
      },
      {
        "component": "Body",
        "content": "You'll see from the validation code above that I was able to hack this system to work by requiring the function to receive back very specific text into the Mailchimp field with the ID \"mce-success-response\". With the right text in place, the program can move forward."
      },
      {
        "component": "Body",
        "content": "It's worth noting that I'm fully aware that the solution I came up with at that time was not really the best. Anyone privvy enough to javascript could easily read this and skip the email signup. But for the majority of our users, I didn't have reason to anticipate that, and the ramifications would be minimal since the content was not sensitive. It's important to realise when there is reason to take on such battles as making a full-proof system that cannot be hacked, but this was a time where it didn't matter for our need."
      },
      {
        "component": "Subheading",
        "content": "The Final Result"
      },
      {
        "component": "Body",
        "content": "Overall, I was very pleased with the end result. We created a fun, engaging, evergreen marketing piece that's distinct to Techless while spending minimal amounts of money on the development of the tool. If you haven't had a chance, I'd encourage you to try and take the quiz. <a href=\"techaddictionquiz.com\">Techaddictionquiz.com</a>."
      },
    ]
  },
  {
    "key": "w03",
    "title": "Animation Showcase",
    "skills": "Graphic Design | Animation | Scripting",
    "date": `${new Date().getFullYear()}`,
    "path": "animations",
    "graphic": "moving-graphic.gif",
    "content": [
      {
        "component": "Title",
        "content": "Building an Internal Tool"
      },
      {
        "component": "Heading",
        "content": "The Need"
      },
      {

      }
    ]
  },
  {
    "key": "w04",
    "title": "Email Signature Builder Tool",
    "skills": "UX Design | Programming | Branding",
    "date": "2017",
    "path": "email-signatures",
    "graphic": "email-sig-builder-tool-splash.jpg",
    "content": [
      {
        "component": "Title",
        "content": "Building an Internal Tool"
      },
      {
        "component": "Heading",
        "content": "The Need"
      },
      {
        "component": "Body",
        "content": "The idea of the \"Email Signature Builder Tool\" was far off when I started assisting in the creation of our Dexter Solutions' branded signature designs."
      },
      {
        "component": "Gallery",
        "galleryType": "masonry",
        "content": [
          {
            "source": "email-sig/early-1.jpg",
            "alt": "early dexter email signature",
            "caption": "Old designs were inconsistent from brand to brand."
          },
          {
            "source": "email-sig/early-2.jpg",
            "alt": "early dexter hospitality email signature with graphics",
            "caption": "Different team membes had different addresses, logos, and data to share with clients."
          }
        ]
      },
      {
        "component": "Body",
        "content": "New, unified layouts were crafted by our marketing team and forwarded on to development to write the html code. They would feature a \"Dexter Solutions\" logo and required information displayed in a standardized format."
      },
      {
        "component": "Body",
        "content": "Once the html was complete, we connected with key team members on how to implement their code and apply their custom signature within various email clients like Gmail or Outlook. Most users understood how to copy and paste the materials with ease, so this worked for a while."
      },
      {
        "component": "Heading",
        "content": "Expanded Scopes"
      },
      {
        "component": "Body",
        "content": "The job became more complex when operations requested to have corporate headshots included for the majority of our users. Emailing over a blank signature and expecting sales members to add all the components, especially an image, was out of the question. This would be too difficult for team members to accomplish on their own and prone to brand inconsistencies. At this time, I began to explore a new approach to the request."
      },
      {
        "component": "Gallery",
        "galleryType": "masonry",
        "content": [
          {
            "source": "email-sig/nb_ex.jpg",
            "alt": "new branded email signature example",
            "caption": "Headshopts were loaded in based on the email address."
          },
          {
            "source": "email-sig/am_ex.jpg",
            "alt": "new branded email signature example with A S Hospitality logo",
            "caption": "The signature builder tool let employees choose which marketing banner, if any, they wanted to include in their signature. They could also opt to brand their emails with the A s Hospitality logo instead of Dexter Solutions."
          }
        ]
      },
      {
        "component": "Body",
        "content": "With some basic understanding of Javascript, I knew it was possible to change the contents of various elements on a click action. This gave me the idea of using a form to dynamically update the contents of the signature design. With lots of research and comprehensive testing, I was able to put together a demo for our team that met the needs and included each user's headshot! We quickly launched the tool company-wide to ensure all users could be on-brand with their email messaging."
      },
      {
        "component": "Body",
        "content": "We pushed the \"Email Signature Builder Tool\" a little farther by also including customizable branding options and marketing banners for different use cases. Also, a text-only version was included for some systems that don't accept imagery. In addition, all variables can be \aved into the URL string by clicking \"Save\" or the \"I\" beam. This makes it possible for all users to have their own unique url to come back to should they need to make an update to their signature in the future."
      },
      {
        "component": "Body",
        "content": "When you <a href=\"../assets/signature/Email%20Signature%20Builder%20Tool.html\" target=\"_blank\">check out the tool</a>, try using the email address, \"nburgher@dextersolutions.net\". This will make my headshot appear!"
      },
      {
        "component": "Button",
        "destination": "../assets/signature/Email%20Signature%20Builder%20Tool.html",
        "content": "Check out the Tool",
        "target": "_blank",
        "design": "button-1"
      },
    ]
  }
]
export default work;