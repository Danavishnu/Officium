import uuid from 'uuid/v1';
import moment from 'moment';

import mock from 'utils/mock';

mock.onGet('/api/management/customers').reply(200, {
  customers: [
    {
      id: uuid(),
      name: 'Google',
      // email: 'https://forindia.withgoogle.com/intl/en/',
      avatar: '/images/companies/google.jpg',
      spent: ' 60L',
      // currency: 'Rs',
      type: 'Cloud',
      projects: '1',
      rating: 5,
      location: 'Hyderabad , India'
    },
    {
      id: uuid(),
      name: 'Microsoft',
      // email: 'cao.yu@devias.io',
      avatar: '/images/companies/microsoft.jpg',
      spent: '50L',
      type: 'Blockchain',
      // currency: '$',
      projects: '3',
      rating: 5,
      location: 'Bangalore ,India '
    },
    {
      id: uuid(),
      name: 'Amazon',
      // email: 'alexa.richardson@devias.io',
      avatar: '/images/companies/amazon.jpg',
      spent: '45L',
      type: 'Enterprise',
      // currency: '$',
      projects: '0',
      rating: 4.5,
      location: 'Gurgaon ,India'
    },
    {
      id: uuid(),
      name: 'IBM',
      // email: 'anje.keizer@devias.io',
      avatar: '/images/companies/ibm.jpg',
      spent: '18L',
      type: 'Image Processing',
      // currency: '$',
      projects: '6',
      rating: 4,
      location: 'Ohio, USA'
    },
    {
      id: uuid(),
      name: 'Intuit',
      // email: 'clarke.gillebert@devias.io',
      avatar: '/images/companies/intuit.webp',
      spent: '25L',
      type: 'Deep Learning',
      // currency: '$',
      projects: '1',
      rating: 3.5,
      location: 'Capetown , South Africa'
    },
    {
      id: uuid(),
      name: 'Apple',
      // email: 'adam.denisov@devias.io',
      avatar: '/images/companies/apple.svg',
      spent: '50L',
      type: 'Cognitive Computing',
      // currency: '$',
      projects: '0',
      rating: 3,
      location: 'Helsinki, Denmark'
    },
    {
      id: uuid(),
      name: 'Samsung',
      // email: 'ava.gregoraci@devias.io',
      avatar: '/images/companies/samsung.png',
      spent: '30L',
      type: 'Full Stack',
      // currency: '$',
      projects: '0',
      rating: 4,
      location: 'Addis Abbaba, Ethiopia'
    },
    {
      id: uuid(),
      name: 'TCS',
      // email: 'emilee.simchenko@devias.io',
      avatar: '/images/companies/tcs.png',
      spent: '10L',
      type: 'Augmented Reality',
      // currency: '$',
      projects: '4',
      rating: 4.5,
      location: 'Nevada, USA'
    },
    {
      id: uuid(),
      name: 'Bosch',
      // email: 'kwak.seong.min@devias.io',
      avatar: '/images/companies/bosch.jpg',
      spent: '10L',
      type: 'Digital Marketing',
      // currency: '$',
      projects: '2',
      rating: 5,
      location: 'Stuttgart, Germany'
    },
    {
      id: uuid(),
      name: 'Coronna',
      // email: 'shen.zhi@devias.io',
      avatar: '/images/companies/corona.jpg',
      spent: '-100L',
      type: 'Viral Computing',
      // currency: '$',
      projects: '0',
      rating: 3.9,
      location: 'Wuhan, China'
    },
    {
      id: uuid(),
      name: 'Merrile Burgett',
      // email: 'merrile.burgett@devias.io',
      avatar: '/images/avatars/avatar_12.png',
      spent: '200.00',
      type: 'Containerization',
      // currency: '$',
      projects: '7',
      rating: 4.2,
      location: 'Utah, USA'
    }
  ]
});

mock.onGet('/api/management/customers/1/summary').reply(200, {
  summary: {
    name: 'Ekaterina Tankova',
    email: 'ekaterina@devias.io',
    phone: '+55 748 327 439',
    state: 'Alabama',
    country: 'United States',
    zipCode: '240355',
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    iban: '4142 **** **** **** ****',
    autoCC: false,
    verified: true,
    currency: '$',
    invoices: [
      {
        id: uuid(),
        type: 'paid',
        value: 10.0
      },
      {
        id: uuid(),
        type: 'paid',
        value: 15.0
      },
      {
        id: uuid(),
        type: 'due',
        value: 5
      },
      {
        id: uuid(),
        type: 'income',
        value: 10.0
      }
    ],
    vat: 19,
    balance: 0,
    emails: [
      {
        id: uuid(),
        description: 'Order confirmation',
        created_at: moment()
          .subtract(3, 'days')
          .subtract(5, 'hours')
          .subtract(34, 'minutes')
      },
      {
        id: uuid(),
        description: 'Order confirmation',
        created_at: moment()
          .subtract(4, 'days')
          .subtract(11, 'hours')
          .subtract(49, 'minutes')
      }
    ]
  }
});

mock.onGet('/api/management/customers/1/invoices').reply(200, {
  invoices: [
    {
      id: uuid(),
      date: moment(),
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '$',
      status: 'paid'
    },
    {
      id: uuid(),
      date: moment(),
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '$',
      status: 'paid'
    }
  ]
});

mock.onGet('/api/management/customers/1/logs').reply(200, {
  logs: [
    {
      id: uuid(),
      status: 200,
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
    },
    {
      id: uuid(),
      status: 522,
      error: 'Invalid credit card',
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'DELETE',
      route: '/api/products/d65654e/remove',
      desc: 'Cart remove',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(8, 'minutes')
        .subtract(23, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/d65654e/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(20, 'minutes')
        .subtract(54, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(34, 'minutes')
        .subtract(16, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f',
      desc: 'View product',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(54, 'minutes')
        .subtract(30, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products',
      desc: 'Get products',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(56, 'minutes')
        .subtract(40, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'POST',
      route: '/api/login',
      desc: 'Login',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(57, 'minutes')
        .subtract(5, 'seconds')
    }
  ]
});
