const ListWebDev = [
    {
        id: 0,
        title: "Code a landing page for a small course application.",
        tag: [
            {
                id: 0,
                name: "Small-scale Development",
                alt: "ssd",
            },
        ],
        Link: "https://spelling-school-sora.vercel.app/",
        img: "/thumbnail1.png"
    },
    {
        id: 1,
        title: "Fetching a basic API in a form of JSON data.",
        tag: [
            {
                id: 0,
                name: "School Excercise",
                alt: "sch",
            },
        ],
        Link: "https://dad-joke-generator-dun.vercel.app/",
        img: "/thumbnail2.png"
    },
    {
        id: 2,
        title: "Basic article format with basic HTML and JS.",
        tag: [
            {
                id: 0,
                name: "Personal Project",
                alt: "pp",
            },
        ],
        Link: "https://smpgh.vercel.app/",
        img: "/thumbnail3.png",
    }
]

const WebDev = [
    ListWebDev[ListWebDev.length - 3],
    ListWebDev[ListWebDev.length - 2],
    ListWebDev[ListWebDev.length - 1],
];

export default WebDev;

