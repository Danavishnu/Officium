import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

import mock from 'utils/mock';

mock.onGet('/api/users').reply(200, {
  users: []
});

mock.onGet('/api/users/1/posts').reply(200, {
  posts: [
    {
      id: uuid(),
      author: {
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      message: 'Just made this home screen for a project, what-cha thinkin?',
      media: '/images/posts/post_1.jpg',
      liked: true,
      likes: 24,
      comments: [
        {
          id: uuid(),
          author: {
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png'
          },
          message: 'Could use some more statistics, but that’s me haha',
          created_at: moment().subtract(3, 'hours')
        },
        {
          id: uuid(),
          author: {
            name: 'Ava Gregoraci',
            avatar: '/images/avatars/avatar_8.png'
          },
          message:
            'Hmm, honestly this looks nice but I would change the shadow though',
          created_at: moment().subtract(2, 'hours')
        }
      ],
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      author: {
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      message:
        'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
      liked: false,
      likes: 65,
      comments: [
        {
          id: uuid(),
          author: {
            name: 'Clarke Gillebert',
            avatar: '/images/avatars/avatar_6.png'
          },
          message:
            'That’s actually deep. Thanks for the design, would you consider making an interaction?',
          created_at: moment().subtract(3, 'hours')
        },
        {
          id: uuid(),
          author: {
            name: 'Alexa Richardson',
            avatar: '/images/avatars/avatar_4.png'
          },
          message: 'It looks nice',
          created_at: moment().subtract(2, 'hours')
        }
      ],
      created_at: moment().subtract(7, 'hours')
    }
  ]
});

mock.onGet('/api/users/1/projects').reply(200, {
  projects: [
    {
      id: uuid(),
      title: 'Mella Full Screen Slider',
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      price: '12,500',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        }
      ],
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'Dashboard Design',
      author: {
        name: 'Devias IO',
        avatar: ''
      },
      price: '15,750',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      tags: [
        {
          text: 'React JS',
          color: colors.indigo[600]
        }
      ],
      updated_at: moment().subtract(1, 'hour')
    },
    {
      id: uuid(),
      title: 'Ten80 Web Design',
      author: {
        name: 'Devias IO',
        avatar: ''
      },
      price: '15,750',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      tags: [
        {
          text: 'Vue JS',
          color: colors.green[600]
        }
      ],
      updated_at: moment().subtract(16, 'hour')
    }
  ]
});

mock.onGet('/api/users/Google/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating: 4,
      message:
        'I have been working at Google full-time for more than 3 years .Google is the best company I have ever been to.',
      reviewer: {
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: 'Senior Data Scientist',
        // price: '5,240.00'
      },
      pricePerHour: '43L',
      hours: 3,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 5,
      reviewer: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Dashboard Design',
        price: '3,680.00'
      },
      pricePerHour: '38L',
      hours: 7,
      currency: '',
      message:
        'Being the savage\'s bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale\'s back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship\'s steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.',
      created_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/users/Apple/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating: 5,
      message:
        'The people here at Apple don’t just build products — they build the kind of wonder that’s revolutionized entire industries. It’s the diversity of those people and their ideas that encourages the innovation that runs through everything we do, from amazing technology to industry-leading environmental efforts. Join Apple, and help us leave the world better than we found it.',
      reviewer: {
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: 'Platforms Delivery Manager',
        // price: '5,240.00'
      },
      pricePerHour: '32L',
      hours: 1,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 5,
      reviewer: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Dashboard Design',
        price: '3,680.00'
      },
      pricePerHour: '38L',
      hours: 6,
      currency: '',
      message:
        'Being the savage\'s bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale\'s back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship\'s steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.',
      created_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/users/IBM/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating: 3,
      message:
        ' Decide before joining and have clarity on what position they are hiring you.Timings is a constraint where in IT Support.Salary hike is very rare.Salary for freshers/experienced at initial joining time is good.good to go if you work smart and if you work hard.',
      reviewer: {
        name: 'John',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: 'System operation specialist',
        // price: '5,240.00'
      },
      pricePerHour: '32L',
      hours: 1,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 5,
      reviewer: {
        name: 'Nitesh',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Associate System Engineer',
        // price: '4,658.00'
      },
      pricePerHour: '48L',
      hours: 5,
      currency: '',
      message:
        'Joined as a graduate hire. Had a month-long training in the assigned field. They assign specialties on no basis other than requirement which was a bit tough. However, as my first job, they will always be special for me .Growth is not fast and is hierarchial. Great place to settle down after youve reached management level..',
      created_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/users/Amazon/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating: 4,
      message:
        ' My work from home experience with Amazon was pretty good. I didnt mind the schedule, and the processes were easy to learn. I did think that training could greatly be improved. I hardly had much interaction with my assigned manager, and I felt placed on the back burner because I was seasonal. Aside from that, the experience was cool',
      reviewer: {
        name: 'rithwik',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: 'Customer Service Representive',
        // price: '5,240.00'
      },
      pricePerHour: '32L',
      hours: 31,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 5,
      reviewer: {
        name: 'Mohan',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Maintenance Technician',
        // price: '3,680.00'
      },
      pricePerHour: '20L',
      hours: 8,
      currency: '',
      message:
        ' Great place to work if you have a good attitude and want to work.Good benefits, great chances for advancement. It will work for you if you want to work.',
      created_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/users/Microsoft/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating: 4,
      message:
        'Its great just cant say at the moment I have not been employed with them as of yet this is really aggravating to fill this portion out when I dont even work for Microsoft',
      reviewer: {
        name: 'Keshav',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: 'Platforms Delivery Manager',
        // price: '5,240.00'
      },
      pricePerHour: '39L',
      hours: 4,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 4.1,
      reviewer: {
        name: 'Srihari',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Property Manager',
        price: '3,680.00'
      },
      pricePerHour: '38L',
      hours: 7,
      currency: '',
      message:
        'I was a Senior Program Manager with a virtual pager. Had to rotate with Devs for 24x7 on-call escalations of multiple 24x7 online services. Review process changes every year. Very bureaucratic and political. Lots of turnover due to local competition for talent. Devs and PMs get burnt out with the expected work culture (at least on my org). Sloth-like SDLC.Most enjoyable part of the job were the people I worked with.',
      created_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/users/Bosch/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating: 3.9,
      message:
        ' Good atmosphere to work.good campus.They also provide food at very cheap rate.overall a good choice for working there .we can improve our skills and can polish our talents..',
      reviewer: {
        name: 'Vishal',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: 'Project Trainee',
        // price: '3,700.00'
      },
      pricePerHour: '22L',
      hours: 9,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 3.8,
      reviewer: {
        name: 'Yaswanth',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Technology Analyst',
        price: '3,590.00'
      },
      pricePerHour: '41L',
      hours: 6,
      currency: '',
      message:
        ' The technologies they use is good, Good work life balance. Very good environment to learn things. You will get to interact with people in Senior level which will help in your career.',
      created_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/users/TCS/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating:4,
      message:
        ' Great place to work and we can learn a lot. This is a project where we can have lot of experience through customer service & team management. Team work is main focus.',
      reviewer: {
        name: 'malli',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: 'Customer Service Manager',
        // price: '5,240.00'
      },
      pricePerHour: '37L',
      hours: 4,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 4.9,
      reviewer: {
        name: 'harsha',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Software Developer',
        price: '3,680.00'
      },
      pricePerHour: '36L',
      hours: 16,
      currency: '',
      message:
        ' Great company have a lot of good projects. Too many perks of being an employee. Many different projects works in collaboration with Indian government.',
      created_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/users/Samsung/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating: 3.5,
      message:
        ' I have been working at Samsung Electronics full-time. Samsung innovations and product quality',
      reviewer: {
        name: 'Maruthi',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: 'Manager',
        // price: '5,240.00'
      },
      pricePerHour: '39L',
      hours: 47,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 3.6,
      reviewer: {
        name: 'chetan',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Software Developer',
        price: '2,680.00'
      },
      pricePerHour: '58L',
      hours: 76,
      currency: '',
      message:
        ' I was mentally free..there was enough time for me to look after my body ,gymming etc..location was also very close to malls. But , project allocation was random ,so some guys had to work in some areas which they werent interested in',
      created_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/users/Intuit/reviews').reply(200, {
  reviews: [
    {
      id: uuid(),
      rating: 4.4,
      message:
        'A strong work ethic pervades the organization combined with a healthy respect for a good work life balance. Great benefits and flexible schedules. But, sometimes middle management gets stuck because leaders can’t get aligned to one intuit priorities',
      reviewer: {
        name: 'Ram',
        avatar: '/images/avatars/avatar_2.png'
      },
      project: {
        title: ' Senior Software Engineer',
        // price: '5240.00'
      },
      pricePerHour: '38L',
      hours: 3,
      currency: '',
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      rating: 5,
      reviewer: {
        name: 'Sree',
        avatar: '/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Senior Consultant',
        price: '3,680.00'
      },
      pricePerHour: '12L',
      hours: 4,
      currency: '',
      message:
        ' Great place to work with. Competitive, motivation and understanding process. I started as an executive. I never thought of growing myself with a confidence level in the beginning. I had to face all kind of challenges as everyone go through but yet it is an understanding process. They encourage your ideas and they help you to groom to the next level. Fun place to work with. I really miss those moments. All I would say is I would love to work again with it.',
      created_at: moment().subtract(8, 'days')
    }
  ]
});
mock.onGet('/api/users/1/connections').reply(200, {
  connections: [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png',
      common: 12,
      status: 'connected'
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
      common: 10,
      status: 'rejected'
    },
    {
      id: uuid(),
      name: 'Alexa Richardson',
      avatar: '/images/avatars/avatar_4.png',
      common: 8,
      status: 'pending'
    },
    {
      id: uuid(),
      name: 'Adam Denisov',
      avatar: '/images/avatars/avatar_7.png',
      common: 5,
      status: 'not_connected'
    },
    {
      id: uuid(),
      name: 'Ava Gregoraci',
      avatar: '/images/avatars/avatar_8.png',
      common: 1,
      status: 'connected'
    }
  ]
});
