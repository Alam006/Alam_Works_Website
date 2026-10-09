import { BUSINESS_INFO } from '../config/constants.js';

import Apollo_ActiGripp_R6 from'../assets/images/Apollo-ActiGripp-R6.jfif';
import CEAT_Zoom_Plus from '../assets/images/CEAT-Zoom-Plus.jfif';
import JK_Tyre_Blaze_BR41 from '../assets/images/JK-Tyre-Blaze-BR41.png';
import Ralco_Blaster_Pro from '../assets/images/Ralco_Blaster_Pro.webp';
import CEAT_Milaze_Scooter from '../assets/images/CEAT-Milaze.webp';
import Apollo_ActiZip_S2 from '../assets/images/Apollo-ActiZip-S2.jfif';
import Ralco_Speed_Blaster_Scooter from '../assets/images/Ralco_speed_Blaster_Scooter.png';
import Apollo_Amazer_4G_Life from '../assets/images/Apollo-Amazer-4G-Life.jfif';
import CEAT_SecuraDrive from '../assets/images/CEAT-SecuraDrive.jfif';
import JK_Tyre_UX_Royale from '../assets/images/JK-Tyre-UX-Royale.jfif';
import Apollo_Alnac_4G from '../assets/images/Apollo-Alnac-4G.avif';
import CEAT_Czar_AT from '../assets/images/CEAT-Czar-AT.webp'
import Apollo_Apterra_AT2 from '../assets/images/Apollo-Apterra-AT2.jfif';
import JK_Tyre_Ranger_AT from '../assets/images/JK-Tyre Ranger A-T.jfif';
import JK_Tyre_Steel_King from '../assets/images/JK-Tyre-Steel-King.jfif';

export const TYRE_PRODUCTS = [
  // --- Two Wheeler: Bikes ---
  {
    id: 1,
    brand: 'Apollo',
    name: 'Apollo ActiGripp R6',
    vehicleType: 'Two Wheeler',
    vehicleCategory: 'Bike',
    tyreType: 'Tubeless',
    size: '90/90-18',
    price: null,
    image: Apollo_ActiGripp_R6,
    description: 'High traction directional block pattern designed for superior wet grip, dry stability, and puncture resistance on city and highway commutes.',
    features: ['Directional tread blocks', 'Reinforced puncture belt', 'All-weather rubber compound'],
    bestFor: 'Commuter & standard motorcycles (Splendor, Passion, Shine)'
  },
  {
    id: 2,
    brand: 'CEAT',
    name: 'CEAT Zoom Plus',
    vehicleType: 'Two Wheeler',
    vehicleCategory: 'Bike',
    tyreType: 'Tubeless',
    size: '100/90-17',
    price: null,
    image: CEAT_Zoom_Plus,
    description: 'Continuous center groove with aggressive shoulder pattern for confident high-speed cornering and directional control.',
    features: ['High-speed stability', 'Deep shoulder sipes', 'Low rolling resistance'],
    bestFor: 'Sport & performance motorcycles (Pulsar, Apache, FZ)'
  },
  {
    id: 3,
    brand: 'JK Tyre',
    name: 'JK Tyre Blaze BR41',
    vehicleType: 'Two Wheeler',
    vehicleCategory: 'Bike',
    tyreType: 'Tube',
    size: '2.75-17',
    price: null,
    image: JK_Tyre_Blaze_BR41,
    description: 'Sturdy ribbed pattern offering high mileage, dependable braking, and consistent road contact for everyday work and travel.',
    features: ['Heavy-duty casing', 'Uniform wear design', 'Strong bead construction'],
    bestFor: 'Front & rear fitment on classic and utility motorcycles'
  },
  {
    id: 4,
    brand: 'Ralco',
    name: 'Ralco Blaster Pro',
    vehicleType: 'Two Wheeler',
    vehicleCategory: 'Bike',
    tyreType: 'Tubeless',
    size: '120/80-17',
    price: null,
    image: Ralco_Blaster_Pro,
    description: 'Aggressive dual-purpose tread blocks engineered to tackle uneven roads, rough patches, and wet asphalt with confidence.',
    features: ['Cut-resistant tread compound', 'Interlocking tread blocks', 'Robust sidewalls'],
    bestFor: 'Rear fitment on cruiser and touring motorbikes (Bullet, Classic 350)'
  },

  // --- Two Wheeler: Scooters ---
  {
    id: 5,
    brand: 'CEAT',
    name: 'CEAT Milaze (Scooter)',
    vehicleType: 'Two Wheeler',
    vehicleCategory: 'Scooter',
    tyreType: 'Tubeless',
    size: '90/100-10',
    price: null,
    image: CEAT_Milaze_Scooter,
    description: 'Specially engineered high rubber content delivering extended tyre lifespan and high fuel mileage across daily urban traffic.',
    features: ['Deep tread depth', 'Resistant to shoulder scrubbing', 'Even tread wear'],
    bestFor: 'Daily commuter gearless scooters (Activa, Jupiter, Access)'
  },
  {
    id: 6,
    brand: 'Apollo',
    name: 'Apollo ActiZip S2',
    vehicleType: 'Two Wheeler',
    vehicleCategory: 'Scooter',
    tyreType: 'Tubeless',
    size: '90/90-12',
    price: null,
    image: Apollo_ActiZip_S2,
    description: 'Precision cornering stability and rapid water channeling for front wheel fitment on modern scooters.',
    features: ['Continuous directional groove', 'Responsive steering feedback', 'Anti-skid sipes'],
    bestFor: '12-inch front wheels (Activa 125, Jupiter 125, Burgman)'
  },
  {
    id: 7,
    brand: 'Ralco',
    name: 'Ralco Speed Blaster (Scooter)',
    vehicleType: 'Two Wheeler',
    vehicleCategory: 'Scooter',
    tyreType: 'Tubeless',
    size: '100/90-10',
    price: null,
    image: Ralco_Speed_Blaster_Scooter,
    description: 'Wider profile offering plush shock absorption, steady grip over potholes, and puncture protection on rough urban lanes.',
    features: ['Reinforced ply rating', 'Broad road footprint', 'Strong rim grip'],
    bestFor: 'Rear fitment on heavy-duty and family scooters'
  },

  // --- Four Wheeler: Passenger Cars ---
  {
    id: 8,
    brand: 'Apollo',
    name: 'Apollo Amazer 4G Life',
    vehicleType: 'Four Wheeler',
    vehicleCategory: 'Car',
    tyreType: 'Tubeless',
    size: '165/80 R14',
    price: null,
    image: Apollo_Amazer_4G_Life,
    description: 'Legendary Indian durability offering up to 100,000 km tread life with micro-grooves and strong damage-resistant tread compound.',
    features: ['Micro siping', 'High mileage rubber formulation', 'Low interior cabin noise'],
    bestFor: 'Hatchbacks & Sedans (Swift, Dzire, WagonR, i10, Etios)'
  },
  {
    id: 9,
    brand: 'CEAT',
    name: 'CEAT SecuraDrive',
    vehicleType: 'Four Wheeler',
    vehicleCategory: 'Car',
    tyreType: 'Tubeless',
    size: '185/65 R15',
    price: null,
    image: CEAT_SecuraDrive,
    description: 'High-speed stability, whisper-quiet cabin acoustics, and reliable wet braking for highway cruising and family road trips.',
    features: ['Chamfered shoulder blocks', 'Wide longitudinal channels', 'Silica-infused polymer'],
    bestFor: 'Premium hatchbacks and sedans (Baleno, City, Ciaz, Verna)'
  },
  {
    id: 10,
    brand: 'JK Tyre',
    name: 'JK Tyre UX Royale',
    vehicleType: 'Four Wheeler',
    vehicleCategory: 'Car',
    tyreType: 'Tubeless',
    size: '175/65 R14',
    price: null,
    image: JK_Tyre_UX_Royale,
    description: '5-rib asymmetrical design crafted for plush ride comfort, precise steering response, and dependable wet and dry traction.',
    features: ['Asymmetric tread pattern', 'Variable pitch sequencing', 'Robust inner shoulder'],
    bestFor: 'Compact family cars (Tiago, Amaze, Figo, Grand i10)'
  },
  {
    id: 11,
    brand: 'Apollo',
    name: 'Apollo Alnac 4G',
    vehicleType: 'Four Wheeler',
    vehicleCategory: 'Car',
    tyreType: 'Tubeless',
    size: '195/60 R16',
    price: null,
    image: Apollo_Alnac_4G,
    description: 'European-tuned precision handling tyre delivering instant deceleration, lane-change stability, and excellent wet braking.',
    features: ['Tread rigidity optimization', 'Four wide straight grooves', 'High-grip tread formula'],
    bestFor: 'Performance sedans & crossovers (Brezza, S-Cross, Urban Cruiser)'
  },


  {
    id: 12,
    brand: 'CEAT',
    name: 'CEAT Czar A/T',
    vehicleType: 'Four Wheeler',
    vehicleCategory: 'SUV',
    tyreType: 'Tubeless',
    size: '215/65 R16',
    price: null,
    image: CEAT_Czar_AT,
    description: 'All-Terrain capability with interlocking center blocks, stone ejectors, and reinforced sidewall armour for road and trails.',
    features: ['Interlocking center ribs', 'Built-in stone ejectors', 'Deep tread lugs'],
    bestFor: 'Compact & Mid SUVs (Duster, Creta, Seltos, Terrano)'
  },
  {
    id: 13,
    brand: 'Apollo',
    name: 'Apollo Apterra AT2',
    vehicleType: 'Four Wheeler',
    vehicleCategory: 'SUV',
    tyreType: 'Tubeless',
    size: '235/65 R17',
    price: null,
    image: Apollo_Apterra_AT2,
    description: 'Heavy duty all-terrain SUV tyre engineered with herringbone grooves and saw-toothed shoulders for commanding off-road grip.',
    features: ['Herringbone groove geometry', 'Polymer compound with high tear strength', 'Rim-protector flange'],
    bestFor: 'Full size & rugged SUVs (Scorpio, Thar, Safari, Harrier, XUV700)'
  },
  {
    id: 14,
    brand: 'JK Tyre',
    name: 'JK Tyre Ranger A/T',
    vehicleType: 'Four Wheeler',
    vehicleCategory: 'SUV',
    tyreType: 'Tubeless',
    size: '205/60 R16',
    price: null,
    image: JK_Tyre_Ranger_AT,
    description: 'High-rigidity carcass engineered for heavy loads, gravel paths, highway endurance, and aggressive braking responsiveness.',
    features: ['Extra deep shoulder lugs', 'Tough bead apex', 'Puncture resistant casing'],
    bestFor: 'Compact SUVs & Crossovers (EcoSport, Nexon, Sonet, Venue)'
  },
  {
    id: 15,
    brand: 'JK Tyre',
    name: 'JK Tyre Steel King',
    vehicleType: 'Four Wheeler',
    vehicleCategory: 'SUV',
    tyreType: 'Tube',
    size: '7.00-16',
    price: null,
    image: JK_Tyre_Steel_King,
    description: 'Steel-belted radial construction engineered for commercial transport, passenger utility vehicles, and heavy-duty load hauling.',
    features: ['Steel-belted carcass', 'Heavy load index', 'Reinforced shoulder blocks'],
    bestFor: 'Commercial utility vehicles & pickups (Bolero Maxi Truck, Tata 407)'
  }
];

export const TYRE_BRANDS = ['All', 'Apollo', 'CEAT', 'JK Tyre', 'Ralco'];
export const VEHICLE_TYPES = ['All', 'Two Wheeler', 'Four Wheeler'];
export const VEHICLE_CATEGORIES = ['All', 'Bike', 'Scooter', 'Car', 'SUV'];
export const TYRE_TYPES = ['All', 'Tubeless', 'Tube'];
