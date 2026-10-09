// Real stock automotive photography suited specifically to each service title
import imgBikePuncture from '../assets/images/Motorcycle_Tyre_Repair_Workshop.png';
import imgCarPuncture from '../assets/images/car_puncher-Repairing.png';
import imgTyreRepair from '../assets/images/Car_Tire_Patchwork.png';
import imgTubelessRepair from '../assets/images/car_tubeless_puncher.png';
import imgTyreReplacement from '../assets/images/tyer_replace_machine.png';
import imgNewTyres from '../assets/images/Modern_Tyre_Shop_best.png';
import imgBulkTyre from '../assets/images/tyerack.png';
import imgTyreInspection from '../assets/images/Tyre-Inspection.png';
import imgAirPressure from '../assets/images/Tyre-Air-Pressure-Check.png';

export const SERVICES_DATA = [
  {
    id: 'two-wheeler-puncture',
    title: 'Two-Wheeler Tyre Puncture',
    category: 'Two Wheeler',
    shortDescription: 'Quick, reliable puncture repair for motorcycles and scooters, including tube patching and tubeless sealing.',
    fullDescription: 'Fast and dependable puncture repair for all two-wheelers including daily commuter bikes, premium sports bikes, and automatic scooters. We use proper puncture strips and hot vulcanized patches when necessary to ensure the tyre does not leak again.',
    highlights: ['Bike & scooter puncture fixing', 'Tube patch & valve replacement', 'Quick turn-around service'],
    iconName: 'Bike',
    image: imgBikePuncture,
  },
  {
    id: 'four-wheeler-puncture',
    title: 'Four-Wheeler Tyre Puncture',
    category: 'Four Wheeler',
    shortDescription: 'Professional puncture location and repair for passenger cars, sedans, and SUVs with rim safety.',
    fullDescription: 'Safe, rim-friendly puncture service for cars, sedans, hatchbacks, and SUVs. We inspect the puncture location, test for secondary cuts, and apply professional mushroom plugs or vulcanized patches for durable highway safety.',
    highlights: ['Puncture detection & leak testing', 'Alloy wheel rim protection', 'Durable highway-safe repair'],
    iconName: 'Car',
    image: imgCarPuncture,
  },
  {
    id: 'tyre-repair',
    title: 'Tyre Repair',
    category: 'General',
    shortDescription: 'Practical tyre repair solutions with 19 years of practical field experience and modern machinery.',
    fullDescription: 'Comprehensive repair of tyres suffering minor sidewall damage, bead leaks, or severe puncture clusters. Our 19 years of practical tyre experience ensures honest advice on whether a tyre can be safely repaired or needs replacement.',
    highlights: ['19 years practical experience', 'Honest safety assessment', 'Vulcanized repair methods'],
    iconName: 'Wrench',
    image: imgTyreRepair,
  },
  {
    id: 'tubeless-repair',
    title: 'Tubeless Tyre Repair',
    category: 'General',
    shortDescription: 'Specialized tubeless puncture plug, internal patch, and bead sealing for bikes and cars.',
    fullDescription: 'Tubeless tyres require correct repair technique so that the inner liner and steel belts are not damaged. We utilize high-grade rubber plugs, chemical vulcanizing compound, and rim bead sealants to stop gradual air seepage.',
    highlights: ['Internal patch & exterior plug', 'Bead leak repair & rim cleaning', 'Proper chemical vulcanization'],
    iconName: 'ShieldCheck',
    image: imgTubelessRepair,
  },
  {
    id: 'tyre-replacement',
    title: 'Tyre Replacement',
    category: 'General',
    shortDescription: 'Safe dismounting of worn tyres and precision fitting of replacement tyres using modern machines.',
    fullDescription: 'Professional tyre demounting and mounting using modern tyre changer machines that prevent scratches to your alloy wheels or steel rims. We ensure correct rotation direction and proper bead seating.',
    highlights: ['Modern tyre changer equipment', 'Zero rim scratches or damage', 'Proper rotational direction fitment'],
    iconName: 'RefreshCw',
    image: imgTyreReplacement,
  },
  {
    id: 'new-tyre-purchase',
    title: 'New Tyre Purchase',
    category: 'General',
    shortDescription: 'Genuine two-wheeler and four-wheeler tyres from trusted brands at reasonable prices.',
    fullDescription: 'Wide range of genuine brand tyres from CEAT, Apollo, JK Tyre, and Ralco for bikes, scooters, cars, and SUVs. Get expert guidance on the right size, tread pattern, and load index for your driving needs.',
    highlights: ['100% genuine brand tyres', 'CEAT, Apollo, JK Tyre, Ralco', 'Reasonable market pricing'],
    iconName: 'ShoppingBag',
    image: imgNewTyres,
  },
  {
    id: 'bulk-tyre-supply',
    title: 'Bulk Tyre Supply',
    category: 'Bulk',
    shortDescription: 'Wholesale and bulk tyre supply for commercial vehicle fleets, transport operators, and workshops.',
    fullDescription: 'Alam Works provides reliable bulk tyre supply for commercial fleet operators, taxi aggregators, logistics operators, and local repair shops. Get competitive quotations and dependable inventory.',
    highlights: ['Commercial fleet pricing', 'Multiple brand options', 'Direct quote & fulfillment'],
    iconName: 'Boxes',
    image: imgBulkTyre,
  },
  {
    id: 'tyre-inspection',
    title: 'Tyre Inspection',
    category: 'General',
    shortDescription: 'Thorough inspection of tread depth, uneven wear, cracks, bulging, and roadworthiness.',
    fullDescription: 'A thorough visual and physical examination of your tyres to detect uneven tread wear, sidewall bulges, rubber hardening, or alignment issues before they lead to highway failures or blowouts.',
    highlights: ['Tread depth & wear pattern check', 'Sidewall bulge detection', 'Highway readiness evaluation'],
    iconName: 'Search',
    image: imgTyreInspection,
  },
  {
    id: 'tyre-air-pressure',
    title: 'Tyre Air Pressure Check',
    category: 'General',
    shortDescription: 'Accurate tyre air pressure check and top-up to vehicle manufacturer recommended PSI levels.',
    fullDescription: 'Maintaining correct tyre pressure extends tyre life, improves fuel mileage, and guarantees vehicle stability. We provide calibrated tyre pressure checks and air top-ups for all two-wheelers and four-wheelers.',
    highlights: ['Calibrated pressure gauges', 'Manufacturer recommended PSI', 'Improved fuel efficiency & safety'],
    iconName: 'Gauge',
    image: imgAirPressure,
  },
];
