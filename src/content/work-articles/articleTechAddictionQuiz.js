const articleTechAddictionQuiz = {
  "key": "w04",
  "title": "Tech Addiction Quiz",
  "skills": "Illustration | Web Design | Development | Marketing",
  "date": "2020",
  "path": "tech-addiction-quiz",
  "graphic": "quiz/COB_Junky.png",
  "graphicReposition": "50% 45%",
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
      "content": "It's worth noting that I'm fully aware the solution I came up with is not foolproof in preventing people from moving forward to the last screen. Anyone privvy with javascript could easily skip the email signup. But, I didn't have reason to anticipate that the majority of our users would try this, and believed the ramifications would be minimal since the content was not sensitive in any way. It's important to realise when to take extra precaution and when to let go of imperfect implementation for the sake of getting a product out the door. We've had no issues with this implementation."
    },
    {
      "component": "Subheading",
      "content": "The Final Result"
    },
    {
      "component": "Body",
      "content": "Overall, I was very pleased with the end result. We created a fun, engaging, evergreen marketing piece that's distinct to Techless while spending minimal amounts of money on the development of the tool. If you haven't had a chance, I'd encourage you to try and take the quiz found <a href=\"https://techless.com/pages/tech-addiction-quiz\" target=\"_blank\">here</a>."
    },
  ]
}

export default articleTechAddictionQuiz;