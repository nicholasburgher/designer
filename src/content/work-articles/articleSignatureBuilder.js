const articleSignatureBuilder = {
  "key": "w06",
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
          "caption": "Headshots dynamically load in based on the email address field."
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

export default articleSignatureBuilder;