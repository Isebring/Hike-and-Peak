export interface Product {
  id: string;
  image: string;
  title: string;
  summary: string[];
  price: number;
}

export const products: Product[] = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1620998825552-d258a878cde5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Water Flask',
    summary: ['Easy to carry', '500 ml', 'Stays cold'],
    price: 10,
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Hiking Boots',
    summary: ['Comfortable', 'Durable', 'Steady'],
    price: 150,
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1622260614927-208cfe3f5cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Backpack',
    summary: [
      'Spacious',
      'Withstands the toughest terrains',
      'Perfect companion for your next adventure',
    ],
    price: 110,
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1620327467532-6ebaca6273ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Hiking Cap',
    summary: ['Air holes', 'Durable', 'Adjustable'],
    price: 11,
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1507347554497-2dab112100d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Water Flask',
    summary: ['1 liter', 'Easy to carry', 'Transparent'],
    price: 12,
  },
  {
    id: '6',
    image:
      'https://images.pexels.com/photos/167706/pexels-photo-167706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hiking Boots',
    summary: ['Comfortable', 'Trustworthy', 'Zipper'],
    price: 120,
  },
];
