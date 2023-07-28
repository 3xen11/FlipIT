import { nanoid } from 'nanoid';

export default [
  {
    id: nanoid(),
    shoppingPackage: 'basic',
    content: [
      'a. Lorem Ipsum - basic',
      'b. Lorem Ipsum - basic',
      'c. Lorem Ipsum - basic',
      'd. Lorem Ipsum - basic',
      'e. Lorem Ipsum - basic',
    ],
  },
  {
    id: nanoid(),
    shoppingPackage: 'standard',
    content: [
      'a. Lorem Ipsum - standard',
      'b. Lorem Ipsum - standard',
      'c. Lorem Ipsum - standard',
      'd. Lorem Ipsum - standard',
      'e. Lorem Ipsum - standard',
    ],
  },
  {
    id: nanoid(),
    shoppingPackage: 'premium',
    content: [
      'a. Lorem Ipsum - premium',
      'b. Lorem Ipsum - premium',
      'c. Lorem Ipsum - premium',
      'd. Lorem Ipsum - premium',
      'e. Lorem Ipsum - premium',
    ],
  },
];
