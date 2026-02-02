// NOTE FOR STUDENTS:
// - This is SAMPLE product data to help you get started quickly.
// - You are FREE to:
//   - Change the fields
//   - Add more products
//   - Replace the placeholder image URLs with your own images
// - Combine this with Context API to power the UI.

export const products = [
  {
    id: 'prod-1',
    title: 'AeroTune Wireless Headphones',
    price: 4999,
    originalPrice: 7199,
    discountPercentage: 30,
    category: 'Headphones',
    rating: 4.8,
    ratingCount: 120,
    inStock: true,
    stock: 24,
    thumbnail:
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Over‑ear Bluetooth headphones with adaptive noise cancellation and 40‑hour battery life.',
    description:
      'Experience studio‑quality sound with adaptive noise cancellation, ultra‑soft memory foam ear cushions and up to 40 hours of battery life. Perfect for long study sessions, travel and deep work.',
    tags: ['bestseller', 'wireless', 'noise cancelling'],
  },
  {
    id: 'prod-2',
    title: 'NovaLite Smartwatch S2',
    price: 2999,
    originalPrice: 4599,
    discountPercentage: 35,
    category: 'Wearables',
    rating: 4.5,
    ratingCount: 86,
    inStock: true,
    stock: 40,
    thumbnail:
      'https://images.pexels.com/photos/2773972/pexels-photo-2773972.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Slim fitness smartwatch with AMOLED display, heart‑rate monitor and 10‑day battery.',
    description:
      'Track your steps, sleep, heart‑rate and workouts with a bright AMOLED display and water‑resistant design. Receive call and app notifications right on your wrist.',
    tags: ['fitness', 'water resistant', 'student friendly'],
  },
  {
    id: 'prod-3',
    title: 'PixelCraft Mechanical Keyboard 60%',
    price: 3499,
    originalPrice: 5299,
    discountPercentage: 34,
    category: 'Accessories',
    rating: 4.7,
    ratingCount: 64,
    inStock: true,
    stock: 15,
    thumbnail:
      'https://images.pexels.com/photos/2767566/pexels-photo-2767566.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Hot‑swappable mechanical keyboard with RGB backlight, ideal for coding and gaming.',
    description:
      'Compact 60% layout with hot‑swappable switches, vibrant RGB backlighting and detachable USB‑C cable. Perfect for minimal desk setups and comfortable typing.',
    tags: ['mechanical', 'rgb', 'compact'],
  },
  {
    id: 'prod-4',
    title: 'SkyView 24" Full HD Monitor',
    price: 7999,
    originalPrice: 10999,
    discountPercentage: 27,
    category: 'Monitors',
    rating: 4.4,
    ratingCount: 45,
    inStock: true,
    stock: 10,
    thumbnail:
      'https://images.pexels.com/photos/3746311/pexels-photo-3746311.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Slim bezel 24‑inch IPS monitor ideal for multitasking, coding and content consumption.',
    description:
      'Full HD IPS panel with ultra‑thin bezels, low blue light mode and adjustable tilt stand. Great for dual‑monitor setups and productivity.',
    tags: ['monitor', 'ips', 'student setup'],
  },
  {
    id: 'prod-5',
    title: 'BoltCharge 65W GaN Charger',
    price: 1999,
    originalPrice: 2799,
    discountPercentage: 29,
    category: 'Chargers',
    rating: 4.6,
    ratingCount: 52,
    inStock: true,
    stock: 30,
    thumbnail:
      'https://images.pexels.com/photos/3945662/pexels-photo-3945662.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Compact 65W GaN charger with USB‑C PD for laptops, tablets and phones.',
    description:
      'Charge your laptop and phone together with multiple high‑speed USB ports in a tiny form factor powered by GaN technology.',
    tags: ['charger', 'gan', 'fast charge'],
  },
  {
    id: 'prod-6',
    title: 'EchoWave Bluetooth Speaker',
    price: 2599,
    originalPrice: 3799,
    discountPercentage: 32,
    category: 'Speakers',
    rating: 4.4,
    ratingCount: 73,
    inStock: true,
    stock: 20,
    thumbnail:
      'https://images.pexels.com/photos/935940/pexels-photo-935940.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Portable wireless speaker with powerful bass, LED ring and 12‑hour playback.',
    description:
      'Take the party anywhere with deep bass, splash‑resistant body and multi‑color LED ring that reacts to your music.',
    tags: ['speaker', 'wireless', 'portable'],
  },
  {
    id: 'prod-7',
    title: 'StudyMate Ergonomic Chair',
    price: 6499,
    originalPrice: 8999,
    discountPercentage: 28,
    category: 'Furniture',
    rating: 4.3,
    ratingCount: 39,
    inStock: true,
    stock: 12,
    thumbnail:
      'https://images.pexels.com/photos/2029672/pexels-photo-2029672.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Ergonomic mesh chair with lumbar support, height adjustment and tilt lock.',
    description:
      'Designed for long coding sessions with breathable mesh, adjustable armrests and built‑in lumbar support to reduce back strain.',
    tags: ['chair', 'ergonomic', 'desk setup'],
  },
  {
    id: 'prod-8',
    title: 'FocusLite Desk Lamp',
    price: 1299,
    originalPrice: 1999,
    discountPercentage: 35,
    category: 'Lighting',
    rating: 4.6,
    ratingCount: 58,
    inStock: true,
    stock: 25,
    thumbnail:
      'https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Adjustable LED desk lamp with 3 color modes and touch controls.',
    description:
      'Reduce eye strain while studying with adjustable brightness, warm/cool modes and a flexible neck for perfect positioning.',
    tags: ['lamp', 'led', 'study'],
  },
  {
    id: 'prod-9',
    title: 'CloudCore Laptop Stand',
    price: 1599,
    originalPrice: 2299,
    discountPercentage: 30,
    category: 'Accessories',
    rating: 4.5,
    ratingCount: 61,
    inStock: true,
    stock: 35,
    thumbnail:
      'https://images.pexels.com/photos/3746318/pexels-photo-3746318.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Aluminium adjustable laptop stand for better posture and cooling.',
    description:
      'Lift your screen to eye‑level with a sturdy, foldable stand that improves airflow and reduces neck strain.',
    tags: ['laptop stand', 'ergonomic', 'aluminium'],
  },
  {
    id: 'prod-10',
    title: 'ProStream USB Microphone',
    price: 3999,
    originalPrice: 5999,
    discountPercentage: 33,
    category: 'Audio',
    rating: 4.7,
    ratingCount: 42,
    inStock: true,
    stock: 18,
    thumbnail:
      'https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Plug‑and‑play USB condenser mic for online classes, streaming and calls.',
    description:
      'Capture your voice clearly with cardioid pickup pattern, built‑in gain control and mute button—ideal for remote lectures and content creation.',
    tags: ['microphone', 'usb', 'streaming'],
  },
  {
    id: 'prod-11',
    title: 'CampusDrive 1TB External SSD',
    price: 6499,
    originalPrice: 8999,
    discountPercentage: 27,
    category: 'Storage',
    rating: 4.6,
    ratingCount: 34,
    inStock: true,
    stock: 22,
    thumbnail:
      'https://images.pexels.com/photos/2225612/pexels-photo-2225612.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Ultra‑fast portable SSD for backups, project files and media.',
    description:
      'Transfer large projects in seconds with USB‑C connectivity and rugged, pocket‑sized design for on‑the‑go students.',
    tags: ['ssd', 'storage', 'portable'],
  },
  {
    id: 'prod-12',
    title: 'CodeCraft Wireless Mouse',
    price: 899,
    originalPrice: 1399,
    discountPercentage: 36,
    category: 'Accessories',
    rating: 4.3,
    ratingCount: 80,
    inStock: true,
    stock: 50,
    thumbnail:
      'https://images.pexels.com/photos/5082558/pexels-photo-5082558.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Silent wireless mouse with ergonomic design and long battery life.',
    description:
      'Work late without disturbing others thanks to silent clicks, adjustable DPI and a comfortable grip.',
    tags: ['mouse', 'wireless', 'silent'],
  },
  {
    id: 'prod-13',
    title: 'EverCharge Power Bank 20,000 mAh',
    price: 1799,
    originalPrice: 2499,
    discountPercentage: 28,
    category: 'Power',
    rating: 4.5,
    ratingCount: 93,
    inStock: true,
    stock: 60,
    thumbnail:
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'High‑capacity power bank with dual USB outputs and fast charging.',
    description:
      'Keep your phone and tablet alive during long college days with multiple high‑speed charging ports and LED battery indicators.',
    tags: ['power bank', 'fast charge', 'travel'],
  },
  {
    id: 'prod-14',
    title: 'StudySync Noise‑Blocking Earbuds',
    price: 1499,
    originalPrice: 2199,
    discountPercentage: 32,
    category: 'Earphones',
    rating: 4.2,
    ratingCount: 54,
    inStock: true,
    stock: 28,
    thumbnail:
      'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'In‑ear wired earbuds tuned for focus with passive noise isolation.',
    description:
      'Block out background chatter in libraries or hostels with snug‑fit ear tips and balanced sound signature.',
    tags: ['earbuds', 'wired', 'study'],
  },
  {
    id: 'prod-15',
    title: 'StreamView 4K TV Stick',
    price: 3499,
    originalPrice: 4999,
    discountPercentage: 30,
    category: 'Streaming',
    rating: 4.4,
    ratingCount: 37,
    inStock: true,
    stock: 19,
    thumbnail:
      'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      '4K streaming stick with voice remote and all major OTT apps.',
    description:
      'Turn any HDMI display into a smart TV with support for popular streaming apps and built‑in Wi‑Fi.',
    tags: ['streaming', '4k', 'entertainment'],
  },
  {
    id: 'prod-16',
    title: 'NoteFlow Smart Notebook',
    price: 799,
    originalPrice: 1199,
    discountPercentage: 33,
    category: 'Stationery',
    rating: 4.1,
    ratingCount: 29,
    inStock: true,
    stock: 70,
    thumbnail:
      'https://images.pexels.com/photos/951240/pexels-photo-951240.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Reusable smart notebook compatible with scanning apps for digital notes.',
    description:
      'Write with any erasable pen, scan pages to your cloud drive and reuse the notebook again and again.',
    tags: ['notebook', 'reusable', 'notes'],
  },
  {
    id: 'prod-17',
    title: 'DeskMate Cable Organizer Kit',
    price: 599,
    originalPrice: 899,
    discountPercentage: 33,
    category: 'Accessories',
    rating: 4.2,
    ratingCount: 41,
    inStock: true,
    stock: 80,
    thumbnail:
      'https://images.pexels.com/photos/159220/cables-energies-power-current-159220.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Cable clips, sleeves and labels to keep your desk tidy.',
    description:
      'Organize chargers, HDMI cables and USB wires with a complete set of clips and sleeves for a clean, minimal setup.',
    tags: ['cable management', 'desk', 'organization'],
  },
  {
    id: 'prod-18',
    title: 'VistaCam HD Webcam',
    price: 2199,
    originalPrice: 3299,
    discountPercentage: 33,
    category: 'Cameras',
    rating: 4.3,
    ratingCount: 48,
    inStock: true,
    stock: 26,
    thumbnail:
      'https://images.pexels.com/photos/6898852/pexels-photo-6898852.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      '1080p webcam with built‑in mic for online classes and meetings.',
    description:
      'Upgrade your video quality with a sharp full HD sensor, low‑light correction and noise‑reducing microphone.',
    tags: ['webcam', 'online class', 'video'],
  },
  {
    id: 'prod-19',
    title: 'CampusSound Soundbar',
    price: 3299,
    originalPrice: 4799,
    discountPercentage: 31,
    category: 'Audio',
    rating: 4.4,
    ratingCount: 33,
    inStock: true,
    stock: 17,
    thumbnail:
      'https://images.pexels.com/photos/3747036/pexels-photo-3747036.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'Compact soundbar for laptops and TVs with Bluetooth and AUX input.',
    description:
      'Enjoy movies and music with better clarity and bass compared to built‑in laptop speakers, in a space‑saving design.',
    tags: ['soundbar', 'audio', 'bluetooth'],
  },
  {
    id: 'prod-20',
    title: 'Aurora RGB Light Strip',
    price: 999,
    originalPrice: 1599,
    discountPercentage: 38,
    category: 'Lighting',
    rating: 4.5,
    ratingCount: 77,
    inStock: true,
    stock: 90,
    thumbnail:
      'https://images.pexels.com/photos/4046712/pexels-photo-4046712.jpeg?auto=compress&cs=tinysrgb&w=800',
    // TODO (Student): Replace thumbnail URL with your own product image link.
    shortDescription:
      'USB‑powered RGB LED strip to add ambient lighting to your setup.',
    description:
      'Customize your desk aesthetic with multiple color modes and remote control, powered directly from your laptop or adapter.',
    tags: ['rgb', 'light strip', 'aesthetic'],
  },
];

