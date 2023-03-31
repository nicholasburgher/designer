//Articles Template

//Key "graphic" looking within the images folder
//Example of graphicReposition = 50% 40%; this is optional

const articleWisephone = 
      {
        "key": "w01",
        "title": "Wisephone",
        "skills": "UX/UI Design | Product Design | Graphics",
        "date": "2020 - Present",
        "path": "wisephone",
        "graphic": "wisephone/Wisephone_newBox.jpg",
        "graphicReposition": "50% 40%",
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
                "caption": "Texting on Wisephone is familiar yet clean, with a bright, streamlined interface to fit user needs."
              },
              {
                "source": "wisephone/WisephoneCamera2-0.jpg",
                "alt": "Camera App",
                "caption": "We revamped the Camera tool in late 2022 with a new interface and improved performance."
              }
            ]
          },
          {
            "component": "Body",
            "content": "However, early Wisephone builds lacked this level of consistency. Even though we were using modern design tools like Figma as our \"Source of Truth,\" we hadn't quite discovered how to best deliver a consistent looking design in final output."
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
            "content": "Digging in, I found some team members believed cultural differences and language barriers were contributing to the inaccurate design builds. They communicated that our developers required extremely rigid guidelines or else they would basically go rogue and build whatever they wanted. And with tight time constraints, we couldn't afford for developers to rebuild something twice or play guessing games."
          },
          {
            "component": "Body",
            "content": "While I agreed it would be most efficient if developers had straightforward documentation of the final output up front, I didn't like how this rigidity cut out the creativity and input of our engineers. Often, engineers come up with the best solutions to problems because they understand the capabilities of the systems they work within. I also didn't like that our team was responding out of fear, and thus adding new process requirements that were disempowering the team to think creatively."
          },
          {
            "component": "Body",
            "content": "Instead of tightening the rules of conduct, I turned my attention towards the product design practice; how good was our design documentation? Could our development team actually build the spec? Was Figma really a good source of truth?"
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
            "content": "Learn more about Wisephone at <a href=\"https://techless.com\" target=\"_blank\">Techless.com</a>.<br/><br/>"
          }
        ]
      }

  export default articleWisephone;