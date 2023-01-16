const work = [
  {
    "key": "w01",
    "title": "Wisephone",
    "skills": "UX/UI Design | Product Design | Graphics",
    "date": "2020 - Present",
    "path": "wisephone",
    "graphic": "wisephone/Wisephone_newBox.jpg",
    "content": [
      {
        "component": "Title",
        "content": "Wisephone Product Design"
      },
      {
        "component": "Subheading",
        "design": "centered",
        "content": "UX/UI Design | Product Design | Graphics"
      },
      {
        "component": "Body",
        "design": "full-width centered",
        "content": "Wisephone is a minimalist phone with a clean and simple UI. <br/>Each app custom designed to present a unified, distraction-free user experience."
      },
      {
        "component": "Video",
        "source": "WP_ProductShowcase_Compressed.mov"
      },
      {
        "component": "Heading",
        "content": "The Challenge"
      },
      {
        "component": "Body",
        "design": "full-width",
        "content": "Creating a cohesive branded user experience across an entire OS no doubt requires serious planning and thought to execute, even for such a straight-forward product as Wisephone."
      },
      {
        "component": "Body",
        "design": "full-width",
        "content": "To turn our WiseOS into a memorable branded user experience, we had to define a comprehensive design language that would work well across the wide variety of application&nbsp;scenarios.<br/><br/>"
      },
      {
        "component": "Gallery",
        "galleryType": "masonry",
        "content": [
          {
            "source": "wisephone/DSC_3967_WisephoneTexting.jpg",
            "alt": "Texting on Wisephone",
            "caption": "Texting on Wisephone is familiar yet clean, with a bright, bloatless interface to fit user needs."
          },
          {
            "source": "wisephone/WisephoneCamera2-0.jpg",
            "alt": "Camera App",
            "caption": "We revamped the Camera tool in late 2022 with a new interface and improvemed performance."
          }
        ]
      },
      {
        "component": "Body",
        "content": "However, early Wisephone builds lacked this level of consistency. Even though we were using modern design tools like Figma as our \"Source of Truth,\" we handn't quite discovered how to best deliver a consistent looking design in final output."
      },
      {
        "component": "Body",
        "content": "What was wrong? Despite all the rules and guidelines our team added to prevent inconsistency, something wasn't clicking. A hundred little things were being overlooked: wrong font sizes, margin issues, small hit boxes, bad interactions, and bugs. I was hungry to figure out what was going on."
      },
      {
        "component": "Subheading",
        "content": "Investigation"
      },
      {
        "component": "Body",
        "content": "Digging in, I found some team members believed cultural differences and language barriers were contributing to the innacurate design builds. They communicated that our developers required extremely rigid guidelines or else they would basically go rogue and build whatever they wanted. And with tight time constraints, we couldn't afford for developers to rebuild something twice or play guessing games."
      },
      {
        "component": "Body",
        "content": "While I agreed it would be most efficient if developers had straightforward documentation of the final output up front, I didn't like how this rigidity cut out the creativity and input of our engineers. Often, engineers come up with the best solutions to problems because they understand the capabilities of the systems they work within. I also didn't like that our team was responding out of fear, and thus adding new process requirements that were disempowering the team to think creatively."
      },
      {
        "component": "Body",
        "content": "Less convinced we had a personnel issue, my attention turned elsewhere; how good was our design documentation? Could our development team actually build the spec? Was Figma really a good source of truth?"
      },
      {
        "component":"Heading",
        "content": "First Steps"
      },
      {
        "component": "Combination",
        "design": "body-two-thirds",
        "title": "Transforming Figma",
        "content": "There was definitely room to improve our master Figma file. Dozens of screen views contained \"absolute positioned\" elements with no thought to how it would translate to the device. Fonts, while generally consistent, were not linked to a style. There were only a few \"components\" (reusable UI elements) and they weren't well documented.<br/><br/> Before anything else, I would begin working on the transformation of our master Figma file into a useful and trustworthy tool for developers.",
        "source": "wisephone/More-Keyboard-Components.jpg",
        "alt": "Wisephone Components",
        "caption": "Every UI element would be turned into a reusable component, even down to the finest details. Above are components specific to the Keyboard app."
      },
      {
        "component": "Combination",
        "design": "body-two-thirds",
        "title": " ",
        "content": "We divided content into separate pages for the different product teams, including one specific to WiseOS Components. This made it a lot easier to find UI elements when building new interfaces and to communicate their purpose.",
        "source": "wisephone/FigmaPages.jpg",
        "alt": "picture showing figma pages for our design system"
      },
      {
        "component": "Combination",
        "design": "image-one-third",
        "title":"Adding Constraints",
        "content": "Screen views were rebuilt with intelligent constraints to ensure our apps run well on any screen size. Each section in a view was given a name to closely represent what developers use when building in Android Studio.",
        "source" : "wisephone/Constraints.gif",
        "alt": "frame constraints and structure"
      },
      {
        "component": "Heading",
        "content": "New Practices for Design"
      },
      {
        "component": "Subheading",
        "content": "Accompanying UX Documention"
      },
      {
        "component": "Body",
        "content": "In late 2021, we also began to make it common practice to include product design documents with every new build request. Documentation included <strong><u>business rules</u></strong>, <strong><u>test cases</u></strong>, and <strong><u>user flow diagrams</u></strong> to communicate details that were more challenging to pass along through Figma or plain text."
        
      },
      {
        "component": "Image",
        "source": "wisephone/Final_Flow.png",
        "alt": "User flow documentation example"
      },
      {
        "component": "Body",
        "content": "We encouraged developers to give their feedback upon reviewing the design details, letting us know if there were any gaping holes or flaws in the design. These Product Requirement Documents, or PRDs, were also great for reviewing final design with company leadership before beginning development."
      },
      {
        "component": "Heading",
        "content": "New Channels of Communication"
      },
      {
        "component": "Body",
        "content": "It's often said that companies move at the speed of trust. Poor communication will break down trust every time. Since our dev team was 11 hours ahead and could only meet with U.S. team members virtually, we  inherently had communication barriers that would need special attention."
      },
      {
        "component": "Body",
        "content": "We saw major improvements when we implemented a weekly one-hour meeting with all developers, our designer (me), and the product and/or project manager. These \"face-to-face\" opportunities helped our team grow familiar with the people we were working with. I grew to love the dev team and each of their quirks, interests, and talents. One team member was really into his fish! Another was an avid soccer fan. Another was working on her masters."
      },
      {
        "component": "Body",
        "content": "In addition to the meetings, we opened up a development Slack channel where we could send quick update messages, questions, or encouragement. We then made it common practice to communicate on it. We also made it culturally OK to ask questions directly to team members working on projects. Because of the face-to-face meetings, people were less hesitant to reach out via Slack for a quick word or spontaneous meeting because we grew comfortable and trusting with one another."
      },
      {
        "component":"Heading",
        "content": "Results"
      },
      {
        "component": "Image",
        "source": "wisephone/Wisephone_newBox.jpg",
        "alt": "Wisephone model 3"
      },
      {
        "component": "Body",
        "content": "The most valuable result that came from the changes we made were the relationships I formed with the individuals who worked on Wisephone with me. We grew to trust each other and believe we were all on the same team, passionate about delivering a quality phone solution to those looking to break free from addictive technology."
      },
      {
        "component": "Body",
        "content": "But, we also saw a drastic decrease in design consistency issues, as well as bugs. The stronger initial documentation made it much easier for developers to comprehend the intent the designer was going for. The improvements in communication helped build trust and challenged team members to share their input in order to affect final outcomes."
      },
      {
        "component": "Body",
        "content": "In addition, other team members took the lead in implementing better testing practices for the product, which included testing the Figma design and PRD against pre-production releases. We also petitioned to bring aboard a dedicated product manager to help. This critical team member became the glue for our team, who would vouch for us and understand all viewpoints to make tough tradeoffs for the business and product."
      },
      {
        "component": "Heading",
        "content": "Conclusion"
      },
      {
        "component": "Body",
        "content": "While I would say I played a major role in designing the Wisephone experience, my work would have been worthless if our team couldn't have built it. Below is the list of contributions I made while working on Wisephone:"
      },
      {
        "component": "List",
        "listType": "unordered",
        "content": [
          "Interface design, phone-wide",
          "New product features and improvements (discovery and validation)",
          "Product design documentation",
          "Management of Figma design system and components",
          "Marketing content creation (Photography, Videography, Mockups, etc.)",
          "Product testing"
        ]
      },
      {
        "component": "Body",
        "content": "Learn more about Wisephone at <a href=\"techless.com\">Techless.com</a>.<br/><br/>"
      }
    ]
  },
  {
    "key": "w02",
    "title": "Tech Addiction Quiz",
    "skills": "Illustration | Web Design | Development | Marketing",
    "date": "2020",
    "path": "tech-addiction-quiz",
    "graphic": "quiz/COB_Junky.png",
    "content": [
      {
        "component": "Title",
        "content": "Tech Addiction Quiz"
      },
      {
        "component": "Body",
        "design": "centered",
        "content": "The Tech Addiction Quiz was one of my most involved projects I've helped create, and one I'm most excited to share with others! The lighthearted aesthetic and engaging interface makes it stand out as a powerful lead generation tool for the Techless brand."
      },
      {
        "component": "Image",
        "customClass": "smaller",
        "source": "quiz/SocialPostGraphic_Quiz.jpg",
        "alt": "image of the Tech addiction quiz being marketed on social platforms"
      },
      {
        "component": "Button",
        "destination": "https://nicholasburgher.github.io/quiz/index2.html",
        "content": "Take the Tech Addiction Quiz!",
        "target": "_blank",
        "design": "button-1"
      },
      {
        "component": "Subheading",
        "content": "My Involvement"
      },
      {
        "component": "List",
        "listType": "unordered",
        "content": [
          "Persona Illustrations",
          "Quiz Experience Design",
          "Distribution & Marketing",
          "Development",
          "Landing Page Design"
        ]
      },
      {
        "component": "Heading",
        "content": "Illustrating the Personas"
      },
      {
        "component": "Body",
        "content": "I worked with creative writers to name the different personas and determine the visual characteristics we wanted to highlight. Each character was sketched on paper first. Then, the team talked through the design until we locked in the visual components. They were digitized and further refined, starting with line work, then basic shading, then lighting and coloring."
      },
      {
        "component": "Image",
        "source": "quiz/TechAddictionQuiz_ImageBuildup.jpg",
        "alt": "picture of illustration development for the Tech Addiction Quiz"
      },
      {
        "component": "Body",
        "content": "In all, we came up with 5 tech addiction personas, each one slightly more addicted to their device than the last. Quiz takers would answer simple questions and be given a persona that fits them at the end!"
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
        "component": "Heading",
        "content": "Custom Quiz Experience"
      },
      {
        "component": "Video",
        "source": "quiz/Quiz-First-look.mp4"
      },
      {
        "component": "Body",
        "content": "Many online surveying tools exist like Survey Monkey, Google Forms, and Typeform. But none allowed quite the customizability we were looking for. We needed <strong><u>email client integration</u></strong>, on-the-fly <strong><u>result calculations</u></strong> based on user's choices, and <strong><u>auto redirecting</u></strong> after completion. In addition, the results only mattered to the user and not to us (we would not need to store all their answers in a database)."
      },
      {
        "component": "Body",
        "content": "I suggeted the team build a custom-coded quiz interface. I was confident we would have MUCH greater flexibility to create something truly unique and \"Techless\" this way and could meet all the needs within our project scope. We would not have to pay for an advanced surveying tool and could have a stronger brand presence this way."
      },
      {
        "component": "Subheading",
        "content": "The Interface"
      },
      {
        "component": "Image",
        "source": "quiz/design-details/page-content-dimensions.jpg",
        "alt": "general structure of the Tech Addiction Quiz"
      },
      {
        "component": "Body",
        "content": "We kept things simple. We implemented a basic paging system, in which each question resided on a different \"page\". Users could focus on one question at a time and the system would automatically \"page through\" each question until they got to the end. Below is the code written to handle the paging system."
      },
      {
        "component": "Image",
        "source": "quiz/design-details/paging-system-code.jpg",
        "alt": "paging system code",
      },
      {
        "component": "Body",
        "content": "Another way we kept things simple was by making all questions \"Yes\" or \"No\". This made it easier to calculate the user's persona at the end rather than using multiple choice questions. We also didn't include a forward or back button, though we initially planned to. We determined the buttons weren't necessary for this specific application, and cutting them kept the interface even cleaner."
      },
      {
        "component": "Body",
        "content": "Other page visuals included the question counter at the top and the questions themselves. To ensure smooth, delightful page transition, we made sure the height of the question box was always the same so that the yes and no buttons didn't move. We also made questions slide out and into place to visually give the user the feeling of moving forward. These were all things we learned over time would make the interface more engaging and completable for users."
      },
      {
        "component": "Body",
        "content": "We were able to stick completely with the Techless brand colors: shades of warm grays and a rust-like accent color. Elements could also perfectly mimic user interface elements from the main website because this was built custom."
      },
      {
        "component": "Heading",
        "content": "Email Marketing Funnel"
      },
      {
        "component": "Body",
        "content": "Upon finishing the quiz, users were presented with a form in which to submit their email address to get their quiz results. We used Mailchimp's Customer Journeys to automate the delivery of re-engagement emails to individuals who took the quiz. Based on the user's awarded persona, they would receive different followup emails."
      },
      {
        "component": "Image",
        "source": "quiz/design-details/results-screen.jpg",
        "alt" :"results screen"
      },
      {
        "component": "Body",
        "content": "This was a critical part to our tool that we could not accomplish without the custom build."
      },
      {
        "component": "Heading",
        "content": "Development"
      },
      {
        "component": "Subheading",
        "content": "Quiz Calculations"
      },
      {
        "component": "Image",
        "customClass": "smaller",
        "source": "quiz/design-details/calculate.jpg",
        "alt": "image or code used for calculating"
      },
      {
        "component": "Body",
        "content": "I worked through the development of a script that runs on the final page of the quiz to determine which persona to award the user. The script analyzes the quiz \"Results\" (r) from the 7 questions and adjusts the scores for each of the personas based on their answer. Which ever score is highest will then be selected as their persona assignment."
      },
      {
        "component": "Body",
        "content": "I spent some time refining the calculation mechanism to make sure the results made sense based on user's answers. But I also tried not to overthink it since the quiz itself was lighthearted and non-critical."
      },
      {
        "component": "Subheading",
        "content": "Email Submission Wall"
      },
      {
        "component": "Body",
        "content": "Implemention of an email submission wall was a critical challenge to developing this custom-coded quiz. Because the Mailchimp API has to run certain calls when registering new email addresses, I needed to get a specific return from their scripts to proceed to the last page of the quiz, where redirecting occurs and results shown."
      },
      {
        "component": "Image",
        "source": "quiz/design-details/validation.jpg",
        "alt": "Mailchimp validation code for testing if we successfully received a signup from the user"
      },
      {
        "component": "Body",
        "content": "You'll see from the validation code above that I was able to validate a successful email submission by testing the text written into the Mailchimp field with the ID \"mce-success-response\" that gets updated after the API call is triggered. With the right text in place, the program can move forward."
      },
      {
        "component": "Body",
        "content": "It's worth noting that I'm fully aware the solution I came up with is not full proof in preventing people from moving forward to the last screen. Anyone privvy with javascript could easily skip the email signup. But, I didn't have reason to anticipate that the majority of our users would try this, and believed the ramifications would be minimal since the content was not sensitive in any way. It's important to realise when to take extra precaution and when to let go of imperfect implementation for the sake of getting a product out the door. We've had no issues with this implementation."
      },
      {
        "component": "Subheading",
        "content": "The Final Result"
      },
      {
        "component": "Body",
        "content": "Overall, I was very pleased with the end result. We created a fun, engaging, evergreen marketing piece that's distinct to Techless while spending minimal amounts of money on the development of the tool. If you haven't had a chance, I'd encourage you to try and take the quiz found <a href=\"https://nicholasburgher.github.io/quiz/index2.html\">here</a>."
      },
    ]
  },
  {
    "key": "w03",
    "title": "Animation Showcase",
    "skills": "Graphic Design | Animation | Scripting",
    "date": `${new Date().getFullYear()}`,
    "date": "2015 - Present",
    "path": "animations",
    "graphic": "anim-bg.jpg",
    "content": [
      {
        "component": "Title",
        "content": "Animation Showcase"
      },
      {
        "component": "Subheading",
        "design": "centered",
        "content": "Graphic Design | Animation | Scripting"
      },
      {
        "component": "Body",
        "design": "centered",
        "content": "This collection of animation projects shows my fun, light-hearted, punchy style for motion graphics creation. I enjoy using various tools like Photoshop, AfterEffects, Resolve, and CSS to build unique and engaging visual experiences for brands and products."
      },
      {
        "component": "Subheading",
        "content": "NBD Animated Logo"
      },
      {
        "component": "Image",
        "source": "../videos/animations/UI-Animation-2.gif",
        "alt": "Nick Burgher Design - Animated Logo"
      },
      {
        "component": "Body",
        "content": "Created with love by hand in Photoshop 7.0 and ImageReady<br/>built frame-by-frame!",
        "design": "centered caption"
      },
      {
        "component": "Subheading",
        "content": "Tech Addiction Quiz Social Ad"
      },
      {
        "component": "Video",
        "source": "animations/TechlessQuiz_Ad_compressed.mov"
      },
      {
        "component": "Body",
        "content": "Taking one of the illustrations created for the <a href=\"./tech-addiction-quiz\">Tech Addiction Quiz</a>, I animated our \"smartphone disciple\" character and added supporting text for a Facebook Ad.",
        "design": "centered caption"
      },
      {
        "component": "Subheading",
        "content": "Techless Talks Bumper"
      },
      {
        "component": "Video",
        "source": "animations/TTBumper_compressed.mov",
        "autoplay": "autoplay"
      },
      {
        "component": "Body",
        "content": "This was an intro for the \"Techless Talks\" video series. I was involved in the full production of this sequence, including visual art direction, pacing, animation, and audio selection.",
        "design": "centered caption"
      },
      {
        "component": "Subheading",
        "content": "Animated Techless Logo"
      },
      {
        "component": "Video",
        "source": "animations/TechlessAnimatedLogo_compressed.mov"
      },
      {
        "component": "Body",
        "content": "Originally built for use within a slide presentation with the Sexual Intergrity Leaderhsip Summit, this version of the Techless logo was animated from line data and utilized physics-based keyframing in to give it life.",
        "design": "centered caption"
      },
      {
        "component": "Subheading",
        "content": "Dexter Solutions Logo Animation"
      },
      {
        "component": "YoutubeEmbed",
        "embedId": "K-C-Co1u7sI"
      },
      {
        "component": "Body",
        "content": "Animation for Dexter Solutions branded videos. Built with AfterEffects.",
        "design": "centered caption"
      },
      {
        "component": "Subheading",
        "content": "Status Auto Detailing"
      },
      {
        "component": "YoutubeEmbed",
        "embedId": "9ywCsmroOgs"
      },
      {
        "component": "Body",
        "content": "Status Auto Detailing in Springfield MO. Animation was created in AfterEffects using complex mask groups, smooth keyframe interpolation, expressions, and 3D rotation.",
        "design": "centered caption"
      },
      {
        "component": "Subheading",
        "content": "\"Sellable Units\" Stop Motion"
      },
      {
        "component": "YoutubeEmbed",
        "embedId": "xIras8B23Rs",
        "startAt": "12"
      },
      {
        "component": "Body",
        "content": "Internal initiative, frame animation created with Nikon D750 and a lot of chocolate. Had to be created in reverse order because the video wraps each of the items into their wrappers. Fun fun.",
        "design": "centered caption"
      },
      {
        "component": "Subheading",
        "content": "SVG Web Animations"
      },
      {
        "component": "Video",
        "source": "animations/SVGAnim_compressed.mov"
      },
      {
        "component": "Body",
        "content": "This clever SVG animation was designed in Figma first, then exported to code. With CSS, I was able to animate specific parts of the illustration in order to have our character move within the space. Building an animation in this way is a much better alternative to GIFs and embedded videos for web implementations because the file size is so much smaller and the resolution infinitely scalable.",
        "design": "centered caption"
      },
      {
        "component": "Subheading",
        "content": "\"3 Phones\" Animation"
      },
      {
        "component": "Video",
        "source": "animations/3Phones_Anim_compressed1080.mov"
      },
      {
        "component": "Body",
        "content": "Created for a website header video, this looping animation was designed to loop continuously on the Techless homepage to quickly showcase the Wisephone product for first-time visitors. With AfterEffects, I was able to chain the animation of one object to the others and set an offset value so that elements moved in a wave-like pattern.",
        "design": "centered caption"
      }
    ]
  },
  {
    "key": "w04",
    "title": "Email Signature Builder Tool",
    "skills": "UX Design | Programming | Branding",
    "date": "2017",
    "path": "email-signatures",
    "graphic": "email-sig/email-signature-graphic.jpg",
    "content": [
      {
        "component": "Title",
        "content": "Email Signature Builder Tool"
      },
      {
        "component": "Subheading",
        "design": "centered",
        "content": "UX Design | Programming | Branding"
      },
      {
        "component": "Body",
        "design": "centered caption",
        "content": "This internal tool resulted in time savings for team members and enhanced brand presence for the Dexter Solutions family of brands."
      },
      {
        "component": "Image",
        "source": "email-sig/email-signature-graphic.jpg",
        "customClass": "",
        "alt": "email signature tool illustrative graphic"
      },
      {
        "component": "Heading",
        "content": "The Need"
      },
      {
        "component": "Body",
        "content": "In 2014, multiple brands came under the same roof as \"Dexter Solutions.\" To enforce the name change and merge, our marketing team was tasked with the rebrand of the public-facing email signatures."
      },
      {
        "component": "Gallery",
        "galleryType": "masonry",
        "content": [
          {
            "source": "email-sig/early-1.jpg",
            "alt": "early dexter email signature",
            "caption": "Old designs were inconsistent from person to person."
          },
          {
            "source": "email-sig/early-2.jpg",
            "alt": "early dexter hospitality email signature with graphics",
            "caption": "Different team members had different addresses, logos, and data to share with clients."
          }
        ]
      },
      {
        "component": "Body",
        "content": "New, unified layouts were designed and forwarded to development to write the html code for each person. They would feature a \"Dexter Solutions\" logo or \"A S Hospitality\" and required information displayed in a standardized format."
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
        "content": "The job became more complex when operations requested to have corporate headshots included for the majority of our users. Emailing over a blank signature and expecting sales team members to add all the components, especially an image, was out of the question. This would be too difficult for team members to accomplish on their own and was prone to brand inconsistencies. At this time, I began to explore a new approach to the request."
      },
      {
        "component": "Heading",
        "content": "The Solution"
      },
      {
        "component": "Body",
        "content": "<br/>"
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
        "content": "With a relatively basic understanding of Javascript at that time, I knew it was possible to dynamically change the contents of a webpage based on user input. This gave me the idea to create a webpage where team members could update their own email signatures without needing to involve Marketing or Development."
      },
      {
        "component": "Combination",
        "design": "image-one-half",
        "title": " ",
        "content": "With lots of research and comprehensive testing, I was able to put together a demo for our team that met the needs and included each user's headshot! Team members could enter in their personal information to the web form on the landing page that would automatically update the design of the signature. We quickly launched the tool company-wide to ensure all users could be on-brand with their email messaging.",
        "source": "email-sig/signature-form-screenshot.jpg",
        "alt": "Email Signature Builder Tool: form",
        "caption": ""
      },
      {
        "component": "Subheading",
        "content": "Further Development"
      },
      {
        "component": "Body",
        "content": "We expanded the capabilities of the \"Email Signature Builder Tool\" over time as needs arose. Beyond adding more team member headshots, they were given a few additional branding options such as various logo support and optional marketing banners for different use cases. I also added support for on-brand text-only signatures, which were needed for certain systems."
      },
      {
        "component": "Body",
        "content": "In addition, a save feature was added that would embed the user's input values into the URL string. To do this, they can click \"Save\" or the \"I\" beam at the top of the interface. This made it possible for team members to have their own unique url to come back to should they need to make an update to their signature in the future. <strong>(This feature is currently not working on portfolio site.)</strong><br/><br/>"
      },
      {
        "component": "Button",
        "destination": "./assets/signature/Email%20Signature%20Builder%20Tool.html",
        "content": "Check out the Tool",
        "target": "_blank",
        "design": "button-1"
      },
      {
        "component": "Body",
        "design": "centered caption",
        "content": "<br/>When you <a href=\"./assets/signature/Email%20Signature%20Builder%20Tool.html\" target=\"_blank\">check out the tool</a>, try using my old email address, \"nburgher@dextersolutions.net\". This will make my headshot appear!"
      }
    ]
  }
]
export default work;