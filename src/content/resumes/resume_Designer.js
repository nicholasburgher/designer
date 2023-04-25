import detailsForAllResumes from "./detailsForAllResumes";

const resume_Designer = {
    path: 'graphic-designer',
    title: 'Designer',
    intro: 'I am a detail-oriented, reliable, and collaborative creative professional with over 9 years of experience producing design solutions of extreme excellence and craftsmanship.',
    skillsUsed: [
        'Graphic Design',
        'Illustration',
        'User Interface Design',
        'Photography'
    ],
    industryKnowledge: [
        'Adobe Creative Suite',
        'Design Fundamentals',
        'InDesign',
        'Photoshop',
        'Print Production & File Setup'
    ],
    experience: [
        {
            ...detailsForAllResumes.tpm,
            details: [
                'Designed user interfaces for 3 major product launches.',
                'Crafted dozens of elegant icons and other visual assets to be used as a part of user interfaces.',
                'Expanded the TPM brand by defining new text styles, fonts, colors, and visual components.',
                'Built trust with company leadership by providing quality communication on design direction, and requesting feedback.'
            ]
        },
        {
            ...detailsForAllResumes.techless,
            details: [
                'Designed digital and printed marketing materials such as social media posts,emails, and event materials.',
                'Captured high-quality product photos for website and other promotional materials',
                'Produced high-quality video content for Youtube and other social platforms',
                'Expanded the company brand through the creation of updated visual assets, from icon sets to new UI components. Created a cohesive brand experience across all customer touchpoints.'
            ]
        },
        {
            ...detailsForAllResumes.dexter,
            details: [
                'Led a team of designers providing art direction for the creation of three 52-week church bulletin subscriptions series, yearly from 2016-2020.',
                'Maintained the Hermitage Art contract relationship by providing high quality print product design services and marketing services, including weekly marketing emails and bi-annual catalog productions.',
                'Supported PrePress team through the development of typesetting and file generation solutions using InDesign Data Merge and advanced template creation.',
                'Captured high-quality product photographs to showcase company work on websites and promotional content. Produced realistic 3D renderings of products when photography was not available.',
                'Generated "lookbooks" showcasing over 100 products. Built design automations to assist with PDF generation and employed contract designers to support some manual processes.',
                'Created responsive email campaigns for major marketing promotions. Builts user journeys and drip campaigns.',
                'Tracked goal progress with marketing team. Analyzed the success of marketing campaigns.'
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
for (let i = 0; i < resume_Designer.skillsUsed.length; i++) {
    keywords = keywords + ' ' + resume_Designer.skillsUsed[i]
};
resume_Designer.keywords = keywords;

export default resume_Designer;