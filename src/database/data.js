export const data = {
  meetups: [
    {
      id: "meet001",
      title: "Tech Conference",
      eventStartTime: "2023-07-13T07:00:00",
      eventEndTime: "2023-07-13T17:00:00",
      location: "Tech Hub",
      address: "123 Main Street, City",
      eventThumbnail: "https://i.postimg.cc/SKrZhNpS/pexels-photo-1181403.jpg",
      eventDescription:
        "Join us for a day of technology insights and networking at the Tech Conference, organized by the Tech Community. This offline event will take place on August 1st from 9:00 AM to 5:00 PM at Tech Hub, located at 123 Main Street, City. The conference will feature renowned speakers including John Smith, CTO, and Jane Doe, Software Engineer. With a focus on technology and networking, this event offers a great opportunity to learn, connect, and stay up-to-date with the latest trends in the industry. The event is paid, and the ticket price is ₹7,500. Please adhere to the business casual dress code, and note that the event is open to individuals aged 18 and above.",
      hostedBy: "Tech Community",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["technology", "networking"],
      speakers: [
        {
          name: "John Smith",
          image: "https://i.postimg.cc/J7xjYLnc/pexels-photo-5384445.jpg",
          designation: "CTO"
        },
        {
          name: "Jane Doe",
          image: "https://i.postimg.cc/tC5yVBBg/pexels-photo-1130626.jpg",
          designation: "Software Engineer"
        }
      ],
      price: "7,500",
      additionalInformation: {
        dressCode: "Business casual",
        ageRestrictions: "18 and above"
      }
    },
    {
      id: "meet002",
      title: "Design Workshop",
      eventStartTime: "2023-07-10T14:00:00",
      eventEndTime: "2023-07-10T16:00:00",
      location: "Creative Studio",
      address: "456 Elm Street, City",
      eventThumbnail: "https://i.postimg.cc/vT1XfrxT/pexels-photo-7256897.jpg",
      eventDescription:
        "Enhance your design skills and learn the fundamentals of design at the Design Workshop hosted by the Design Association. Taking place on August 10th from 2:00 PM to 4:00 PM at the Creative Studio, located at 456 Elm Street, City, this offline workshop offers an opportunity to learn from industry experts. Emily Johnson, Design Director, and Alex Brown, Graphic Designer, will share their insights and knowledge. The workshop is suitable for individuals aged 16 and above and follows a casual dress code. The ticket price for this paid event is ₹4,500.",
      hostedBy: "Design Association",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["design", "workshop"],
      speakers: [
        {
          name: "Emily Johnson",
          image: "https://i.postimg.cc/d3wpsYPj/pexels-photo-1181686.jpg",
          designation: "Design Director"
        },
        {
          name: "Alex Brown",
          image: "https://i.postimg.cc/zBm4QhxM/pexels-photo-1516680.jpg",
          designation: "Graphic Designer"
        }
      ],
      price: "4,500",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "16 and above"
      }
    },
    {
      id: "meet003",
      title: "Marketing Seminar",
      eventStartTime: "2023-08-15T10:00:00",
      eventEndTime: "2023-08-15T12:00:00",
      location: "Marketing City",
      address: "789 Marketing Avenue, City",
      eventThumbnail: "https://i.postimg.cc/L8FvgZ94/pexels-photo-6476776.jpg",
      eventDescription:
        "Stay ahead of the game in the dynamic field of digital marketing by attending the Marketing Seminar organized by Marketing Experts. This offline seminar will be held on August 15th from 10:00 AM to 12:00 PM at Marketing City, situated at 789 Marketing Avenue, City. Join industry leaders Sarah Johnson, Marketing Manager, and Michael Brown, SEO Specialist, as they delve into the latest trends and strategies in digital marketing. The seminar is open to individuals aged 18 and above and requires a ticket priced at ₹3,000. The dress code for the event is smart casual.",
      hostedBy: "Marketing Experts",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["marketing", "digital"],
      speakers: [
        {
          name: "Sarah Johnson",
          image: "https://i.postimg.cc/yxTqcNXG/pexels-photo-1239288.jpg",
          designation: "Marketing Manager"
        },
        {
          name: "Michael Brown",
          image: "https://i.postimg.cc/nL96T2GB/pexels-photo-2182970.jpg",
          designation: "SEO Specialist"
        }
      ],
      price: "3,000",
      additionalInformation: {
        dressCode: "Smart casual",
        ageRestrictions: "18 and above"
      }
    },
    {
      id: "meet004",
      title: "Startup Pitch Night",
      eventStartTime: "2023-08-20T18:00:00",
      eventEndTime: "2023-08-20T20:00:00",
      location: "Zoom",
      address: "",
      eventThumbnail: "https://i.postimg.cc/k59jzRzY/event-492280317.jpg",
      eventDescription:
        "If you're interested in entrepreneurship and innovation, don't miss the Startup Pitch Night hosted by Startup Hub. This online event, taking place on August 20th from 6:00 PM to 8:00 PM, offers a platform for aspiring entrepreneurs to pitch their innovative ideas. Join David Anderson, a Startup Coach, and Emma Roberts, an Investor, as they provide valuable insights and feedback. The event is free and has a business attire dress code. It is open to individuals aged 16 and above.",
      hostedBy: "Startup Hub",
      eventType: "Online",
      isPaid: false,
      eventTags: ["startup", "entrepreneurship"],
      speakers: [
        {
          name: "David Anderson",
          image: "https://i.postimg.cc/5yW18TcX/pexels-photo-220453.jpg",
          designation: "Startup Coach"
        },
        {
          name: "Emma Roberts",
          image: "https://i.postimg.cc/vZYYPJ49/pexels-photo-3796217.jpg",
          designation: "Investor"
        }
      ],
      price: "Free",
      additionalInformation: {
        dressCode: "Business attire",
        ageRestrictions: "16 and above"
      }
    },
    {
      id: "meet005",
      title: "Data Science Workshop",
      eventStartTime: "2023-06-25T14:00:00",
      eventEndTime: "2023-06-25T16:00:00",
      location: "Data City",
      address: "456 Data Avenue, City",
      eventThumbnail: "https://i.postimg.cc/dVGH5jHT/600-498146586.webp",
      eventDescription:
        "Learn the essentials of data science and its applications at the Data Science Workshop organized by the Data Analytics Society. This offline workshop will be held on August 25th from 2:00 PM to 4:00 PM at Data City, located at 456 Data Avenue, City. Join Robert Wilson, Data Scientist, and Linda Thompson, Machine Learning Engineer, as they share their expertise. The workshop is open to individuals aged 18 and above, with a casual dress code. The ticket price for this event is ₹5,500.",
      hostedBy: "Data Analytics Society",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["data science", "analytics"],
      speakers: [
        {
          name: "Robert Wilson",
          image: "https://i.postimg.cc/yYBsdMX5/pexels-photo-2379004.jpg",
          designation: "Data Scientist"
        },
        {
          name: "Linda Thompson",
          image: "https://i.postimg.cc/RFhTx7Rd/pexels-photo-3756679.jpg",
          designation: "Machine Learning Engineer"
        }
      ],
      price: "5,500",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "18 and above"
      }
    },
    {
      id: "meet006",
      title: "Photography Workshop",
      eventStartTime: "2023-06-01T11:00:00",
      eventEndTime: "2023-06-01T13:00:00",
      location: "Google Meet",
      address: "",
      eventThumbnail: "https://i.postimg.cc/HxN9Yrvg/event-511954422.jpg",
      eventDescription:
        "Discover the art of photography and enhance your skills at the Photography Workshop organized by the Photography Society. This online workshop, taking place on September 1st from 11:00 AM to 1:00 PM, offers insights from Christopher Davis, a Professional Photographer, and Olivia Walker, a Photography Instructor. The workshop is free and open to individuals aged 16 and above. The dress code is casual.",
      hostedBy: "Photography Society",
      eventType: "Online",
      isPaid: false,
      eventTags: ["photography", "art"],
      speakers: [
        {
          name: "Christopher Davis",
          image: "https://i.postimg.cc/Nfpq0509/pexels-photo-2379005.jpg",
          designation: "Professional Photographer"
        },
        {
          name: "Olivia Walker",
          image: "https://i.postimg.cc/PJbHyyh2/pexels-photo-774909.jpg",
          designation: "Photography Instructor"
        }
      ],
      price: "Free",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "16 and above"
      }
    },
    {
      id: "meet007",
      title: "Finance Conference",
      eventStartTime: "2023-09-05T09:00:00",
      eventEndTime: "2023-09-05T18:00:00",
      location: "Financial City",
      address: "987 Finance Boulevard, City",
      eventThumbnail: "https://i.postimg.cc/WtLmZQPY/pexels-photo-6694543.jpg",
      eventDescription:
        "Gain valuable insights into the world of finance and investment strategies by attending the Finance Conference hosted by Financial Experts. This offline conference will take place on September 5th from 9:00 AM to 6:00 PM at Financial City, situated at 987 Finance Boulevard, City. Join William Adams, Financial Analyst, and Sophia Miller, Investment Advisor, as they share their knowledge and expertise. The conference is open to individuals aged 18 and above, with a business formal dress code. The ticket price for this event is ₹9,000.",
      hostedBy: "Financial Experts",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["finance", "investment"],
      speakers: [
        {
          name: "William Adams",
          image: "https://i.postimg.cc/7LcqZbmM/pexels-photo-5792641.jpg",
          designation: "Financial Analyst"
        },
        {
          name: "Sophia Miller",
          image: "https://i.postimg.cc/0yBTpFD9/pexels-photo-762020.jpg",
          designation: "Investment Advisor"
        }
      ],
      price: "9,000",
      additionalInformation: {
        dressCode: "Business formal",
        ageRestrictions: "18 and above"
      }
    },
    {
      id: "meet008",
      title: "Fitness Workshop",
      eventStartTime: "2023-09-10T15:00:00",
      eventEndTime: "2023-09-10T17:00:00",
      location: "Zoom",
      address: "",
      eventThumbnail: "https://i.postimg.cc/kMkLwGJz/event-495951818.jpg",
      eventDescription:
        "Get fit and learn effective workout techniques from fitness experts at the Fitness Workshop organized by the Fitness Club. This online workshop, taking place on September 10th from 3:00 PM to 5:00 PM, offers valuable insights from Jennifer Wilson, a Fitness Instructor, and Daniel Thompson, a Personal Trainer. The workshop is free and open to individuals aged 16 and above. The dress code is athletic wear.",
      hostedBy: "Fitness Club",
      eventType: "Online",
      isPaid: false,
      eventTags: ["fitness", "workout"],
      speakers: [
        {
          name: "Jennifer Wilson",
          image: "https://i.postimg.cc/XvXVW9cY/pexels-photo-5876695.jpg",
          designation: "Fitness Instructor"
        },
        {
          name: "Daniel Thompson",
          image: "https://i.postimg.cc/sxWL4gPz/pexels-photo-1681010.jpg",
          designation: "Personal Trainer"
        }
      ],
      price: "Free",
      additionalInformation: {
        dressCode: "Athletic wear",
        ageRestrictions: "16 and above"
      }
    },
    {
      id: "meet009",
      title: "Art Exhibition",
      eventStartTime: "2023-07-15T12:00:00",
      eventEndTime: "2023-07-15T20:00:00",
      location: "Zoom Call",
      address: "",
      eventThumbnail: "https://i.postimg.cc/nhxgbWQ1/pexels-photo-3004909.jpg",
      eventDescription:
        "Explore a diverse collection of artworks by renowned artists at the Art Exhibition hosted by the Art Gallery. This online exhibition, taking place on September 15th from 12:00 PM to 8:00 PM, offers an opportunity to appreciate various art forms. The event is free and open to all ages. The dress code is casual.",
      hostedBy: "Art Gallery",
      eventType: "Online",
      isPaid: false,
      eventTags: ["art", "exhibition"],
      speakers: [],
      price: "Free",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "All ages"
      }
    },
    {
      id: "meet010",
      title: "Music Festival",
      eventStartTime: "2023-08-20T16:00:00",
      eventEndTime: "2023-08-20T23:00:00",
      location: "Zoom Event",
      address: "",
      eventThumbnail: "https://i.postimg.cc/VNLh5bgr/event-492294898.jpg",
      eventDescription:
        "Immerse yourself in a day filled with live music performances from various genres at the Music Festival hosted by the Music Society. This online festival, taking place on September 20th from 4:00 PM to 11:00 PM, promises a memorable experience for music enthusiasts. The event is free and open to individuals aged 16 and above. The dress code is casual.",
      hostedBy: "Music Society",
      eventType: "Online",
      isPaid: false,
      eventTags: ["music", "festival"],
      speakers: [],
      price: "Free",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "16 and above"
      }
    }
  ]
};
