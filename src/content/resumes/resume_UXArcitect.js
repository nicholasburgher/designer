import detailsForAllResumes from "./detailsForAllResumes";

const resume_UXArcitect = {
    path: 'ux-arcitect',
    title: 'UI / UX',
    intro: 'I am a detail-oriented, reliable, and collaborative creative professional with over 9 years of experience producing design solutions of extreme excellence and craftsmanship.',
    skillsUsed: [
        'User Experience Design',
        'Graphic Design',
        'Photography / Digital Imaging',
        'Web Design',
        'Front-End Development',
        'User Interface / Interaction Design',
        'Animation',
        'Project Management / Time Management',
        'Design Documentation / Technical Writing',
        'Creative Direction'        
    ],
    industryKnowledge: [
        'Figma',
        'Adobe Photophop, Illustrator, InDesign',
        'React JS, Vanilla Javascript',
        'HTML, CSS, SCSS, some PHP',
        'Squarespace, Wordpress, Shopify',
        'Mailchimp, Pardot, Salesforce'
    ],
    experience: [
        {
            ...detailsForAllResumes.tpm,
            details: [
                'Established a new site design for the upcoming re-release of texasdepository.com, featuring a brand new logged-in experience, and resolving 10 major customer challenges.',
                'Designed and implemented dozens of visual assets like icons, buttons, components, and page mockups to be used as a part of the new site. Designed in Figma, built with React JS.',
                'Collaboarated with lead engineer and business stakeholders to deliver web experiences, including the all new storage.kirkelliottphd.com landing site.',
                'Grew alongside other developers as we utilized tools like React JS to build groundbreaking web applications.',
                'Established trust and expertise in design with company leadership by providing quality communication on design direction, a thorough vision on brand guidelines, and requesting/welcoming continuous feedback.'
            ]
        },
        {
            ...detailsForAllResumes.techless,
            details: [
                'Designed dozens of valuable, usable mobile applications and user experiences for Wisephone and Techless.',
                'Crafted memorable, on-brand customer interactions that supported business and customer goals.',
                'Generated engaging, meaningful content to enhance user experiences; such as video demonstrations, tutorials, print materials, and online tools.',
                'Used Figma to establish visual guidelines for Techless\'s bespoke UI design system, code-named Sofie. Included standards for font styles, colors, and various UI components, used to build new screens and flows for Wisephone.',
                'Formalized a UX design process for analyzing new product opportunities. The 24-page document covers a wide variety of topics including how to do product discovery and user research.',
                'Built prototypes, both low and high fidelity, with paper, Figma, coded prototypes (JS and React). Tested interfaces for usability using tools like Maze.co.',
                'Collaboarated with engineers within Jira. Supported sprints by writing demo/working code, compiling thorough product design documentation, and testing pre-production releases.',
                'Worked across all departments and teams to help identify and understand business problems and evaluate potential solutions. Used techniques such as user research, product testing, and risk assessment.'
            ]
        },
        {
            ...detailsForAllResumes.dexter,
            details: [
                'Led a team of designers, providing art direction for the creation of three 52-week church bulletin subscriptions series, yearly from 2016-2020.',
                'Supported the design and development of print product design and production for Hermitage Art, a client of Dexter. Assisted in brainstorming new product ideas and obtaining approval on all artwork.',
                'Generated advanced typesetting and file generation solutions for Dexter\'s Prepress department, using technologies like InDesign\'s Data Merge and GREP styling. Trained teams on how to use the new tools.',
                'Programmed nuturing campaigns for marketing efforts with Mailchimp and Pardot',
                'Generated "lookbooks" showcasing over 100 products. Built design automations to assist with PDF generation and employed contract designers to support some manual processes.',
                'Managed dextersolutions.net, adding new content to the site. Built custom landing pages for events, signup forms, and online tools.',
                'Made marketing business decisions based on goal progress.'
            ]
        }
    ],
    education: [
        {
            ...detailsForAllResumes.sbu,
        }
    ],
    highlights: [
        ...detailsForAllResumes.highlights
    ]
}
let keywords = '';
for (let i = 0; i < resume_UXArcitect.skillsUsed.length; i++) {
    keywords = keywords + ' ' + resume_UXArcitect.skillsUsed[i]
};
resume_UXArcitect.keywords = keywords;

export default resume_UXArcitect;