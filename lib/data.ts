import { 
  Truck, 
  Pickaxe, 
  HardHat, 
  Building2, 
  Package, 
  Construction,
  ShieldCheck,
  Award,
  Clock,
  Users,
  Briefcase,
  TrendingUp,
  Target,
  Handshake
} from 'lucide-react';

export const companyInfo = {
  name: "Sbongilevictor Trading (Pty) Ltd",
  shortName: "Sbongilevictor",
  ceo: {
    name: "Shaun Shady Sidelle",
    title: "Chief Executive Officer & Director",
    bio: "Under the visionary leadership of Shaun Shady Sidelle, Sbongilevictor Trading (Pty) Ltd has grown into a multi-industry powerhouse. Shaun is also the proud owner of SIL Logistics Group and Sidell Trading and Projects, bringing a wealth of diversified business experience to our operations. With a deep commitment to South Africa's industrial development, he oversees the strategic direction of our logistics, mining, and engineering operations. His focus on operational excellence and ethical business practices ensures that every client receives the highest standard of service, fostering long-term partnerships built on trust and reliability.",
    image: "/ceo.png"
  },
  contact: {
    phone: "069 314 9502",
    address: "09 Decora Street, Valencia Park, South Africa",
    email: "info@sbongilevictor.co.za",
    whatsapp: "27693149502"
  },
  compliance: {
    csdNumber: "MAAA1695990",
    regNumber: "2026/158185/07",
    beeStatus: "100.00% Black Owned",
    taxStatus: "Compliant"
  }
};

export const services = [
  {
    id: "logistics",
    title: "Logistics",
    icon: Truck,
    shortDescription: "Efficient and reliable transportation solutions across South Africa.",
    fullDescription: "Our logistics division is the backbone of our operations, providing seamless transportation and supply chain management solutions. We understand that in the industrial sector, time is money. That's why we've built a robust network that ensures your cargo—whether it's bulk materials, heavy machinery, or specialized equipment—reaches its destination safely and on schedule.",
    benefits: [
      "Optimized route planning for cost efficiency",
      "Real-time tracking and reporting",
      "Specialized handling for fragile or hazardous materials",
      "Flexible fleet options for various cargo sizes",
      "Experienced drivers with deep knowledge of South African terrain"
    ],
    industries: ["Manufacturing", "Retail", "Agriculture", "Mining", "Construction"],
    process: [
      "Requirement Analysis: We assess your cargo type, volume, and destination.",
      "Strategic Planning: Developing the most efficient route and selecting the right vehicle.",
      "Execution: Safe loading and professional transport by our expert team.",
      "Delivery: Timely drop-off with full documentation and verification."
    ]
  },
  {
    id: "mining",
    title: "Mining",
    icon: Pickaxe,
    shortDescription: "Specialized mining support services and resource extraction logistics.",
    fullDescription: "Sbongilevictor Trading provides critical support services to the South African mining sector. We specialize in the logistical and operational challenges of resource extraction, site preparation, and material handling. Our team is trained to operate in high-pressure mining environments while maintaining the strictest safety standards.",
    benefits: [
      "Strict adherence to Mine Health and Safety Act standards",
      "High-capacity equipment for bulk material handling",
      "Expert site preparation and rehabilitation services",
      "Efficient resource extraction logistics",
      "24/7 operational support for mining sites"
    ],
    industries: ["Coal", "Gold", "Platinum", "Diamond", "Iron Ore"],
    process: [
      "Site Assessment: Evaluating the specific needs and safety requirements of the mine.",
      "Equipment Deployment: Mobilizing specialized machinery and personnel.",
      "Operational Support: Continuous handling and transport of mined materials.",
      "Safety Monitoring: Constant oversight to ensure zero-harm operations."
    ]
  },
  {
    id: "construction",
    title: "Construction",
    icon: HardHat,
    shortDescription: "Comprehensive construction services for residential and industrial projects.",
    fullDescription: "From the ground up, we build excellence. Our construction division handles projects ranging from high-end residential developments to complex industrial facilities. We combine traditional craftsmanship with modern project management techniques to deliver structures that are built to last.",
    benefits: [
      "End-to-end project management",
      "High-quality material sourcing",
      "Skilled workforce across all trades",
      "Strict quality control and safety protocols",
      "Sustainable building practices"
    ],
    industries: ["Residential", "Commercial", "Industrial", "Public Infrastructure"],
    process: [
      "Consultation & Design: Understanding the client's vision and requirements.",
      "Planning & Permitting: Managing all regulatory approvals and site logistics.",
      "Construction Phase: Professional execution with regular progress updates.",
      "Handover: Final inspection and delivery of the completed project."
    ]
  },
  {
    id: "engineering",
    title: "Civil & Structural Engineering",
    icon: Building2,
    shortDescription: "Design and implementation of robust infrastructure and structural projects.",
    fullDescription: "Our engineering team focuses on the structural integrity and innovative design of infrastructure. We specialize in civil works that form the foundation of urban and industrial development, including roads, bridges, and complex structural frameworks for industrial plants.",
    benefits: [
      "Innovative structural design solutions",
      "Advanced engineering software and techniques",
      "Focus on long-term durability and sustainability",
      "Expertise in complex South African soil conditions",
      "Seamless integration with construction teams"
    ],
    industries: ["Public Works", "Urban Development", "Industrial Plants", "Transport Infrastructure"],
    process: [
      "Feasibility Study: Technical assessment of the project's viability.",
      "Structural Design: Detailed engineering drawings and calculations.",
      "Implementation Oversight: Ensuring construction matches engineering specs.",
      "Certification: Final structural integrity verification and sign-off."
    ]
  },
  {
    id: "supply",
    title: "General Supply & Demand",
    icon: Package,
    shortDescription: "Sourcing and supplying high-quality industrial materials and tools.",
    fullDescription: "We bridge the gap between demand and supply. Our extensive network of local and international suppliers allows us to source high-quality industrial materials, tools, and consumables at competitive prices. We ensure that your operations never stop due to a lack of essential supplies.",
    benefits: [
      "Vast network of vetted suppliers",
      "Rigorous quality assurance for all supplied goods",
      "Just-in-time delivery to minimize inventory costs",
      "Competitive bulk pricing",
      "Specialized sourcing for hard-to-find industrial parts"
    ],
    industries: ["All Industrial Sectors", "Government Departments", "Corporate Offices"],
    process: [
      "Sourcing: Identifying the best quality products at the best prices.",
      "Quality Check: Verifying that all items meet client specifications.",
      "Logistics: Managing the transport and delivery of goods.",
      "Inventory Support: Helping clients manage their supply cycles."
    ]
  },
  {
    id: "plant-hire",
    title: "Plant Hire",
    icon: Construction,
    shortDescription: "Heavy machinery and specialized equipment available for hire.",
    fullDescription: "Access the power you need without the capital investment. Our plant hire division offers a wide range of well-maintained heavy machinery and specialized equipment. Whether you need a single excavator for a week or a fleet of trucks for a year, we have the flexible solutions to power your project.",
    benefits: [
      "Modern, well-maintained equipment fleet",
      "Flexible hire terms (daily, weekly, monthly)",
      "Option for skilled operators with every machine",
      "On-site maintenance and support",
      "Rapid deployment to sites across South Africa"
    ],
    industries: ["Construction", "Mining", "Agriculture", "Infrastructure Development"],
    process: [
      "Equipment Selection: Helping you choose the right machine for the task.",
      "Mobilization: Transporting the equipment to your site.",
      "Operational Support: Providing operators and on-site maintenance.",
      "Demobilization: Safe removal of equipment after project completion."
    ]
  }
];
