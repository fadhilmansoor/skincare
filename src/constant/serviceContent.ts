// serviceContent.ts
// All detailed content for 22 services across 4 categories.
// Icons updated to professional Lucide-React identifiers.

export interface ServiceBenefit {
  title: string
  desc: string
}

export interface ServiceStep {
  num: string
  title: string
  desc: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface ServiceContent {
  id: string
  slug: string
  title: string
  categoryId: "dental" | "dermatology" | "cosmetic" | "hair"
  category: string
  icon: string
  shortDesc: string       
  heroDesc: string        
  whatIs: string
  

  bannerImage?: string
  contentImage?: string
  cardImage?: string
  
  benefits: ServiceBenefit[]
  steps: ServiceStep[]
  faqs: ServiceFaq[]
  tags: string[]
}

// ════════════════════════════════
//  DENTAL SERVICES  (8 services)
// ════════════════════════════════

const dentalServices: ServiceContent[] = [
  {
    id: "general-dentistry",
    slug: "general-dentistry",
    title: "General Dentistry",
    categoryId: "dental",
    category: "Dental Services",
    icon: "Stethoscope",
    shortDesc: "General dentistry services such as exams, fillings and preventative care.",
    heroDesc: "Your path to maintaining healthy teeth for life — & nowhere you go at your pace.",
     bannerImage: "/assets/images/imageupload/generalDentistry/1.jpg",
    contentImage: "/assets/images/imageupload/generalDentistry/2.jpg",
   
    whatIs:
      "General dentistry is key to maintaining a healthy smile and here at Ideal Family Dental, we focus on prevention through education. We offer comprehensive exams, X-ray with Digital technology, tooth-coloured filling, root canal treatment and extraction as well abuse mouth -card on every visit by our experienced dentists. We also prioritize prevention and early detection — identifying small problems before they become painful or expensive. “Using the newest pain-free techniques and biocompatible materials, each treatment is administered in a calm, reassuring environment that’s centered around your comfort.”",
    benefits: [
      {
        title: "Early Problem Detection",
        desc: "Regular check-ups detect cavities, gum disease and oral cancer in the earliest and most treatable stage.",
      },
      {
        title: "Complete Oral Assessment",
        desc: "Comprehensive examination (from teeth and gums to bite alignment, jaw function and oral cancer screen)",
      },
      {
        title: "Pain-Free Modern Fillings",
        desc: "Tooth-coloured composite fillings match natural teeth perfectly and are placed with up-to-date anaesthetic for total comfort.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Exam & Digital X-Rays",
        desc: "Complete oral evaluation and digital x-rays for any problems below the surface.",
      },
      {
        num: "2",
        title: "Personalised Treatment Plan",
        desc: "A straightforward treatment plan with no jargon and upfront costs, before a single procedure is performed.",
      },
      {
        num: "3",
        title: "Comfortable Procedure",
        desc: "All treatment using the most updated materials and instruments along with pain-management techniques.",
      },
      {
        num: "4",
        title: "Recall & Maintenance",
        desc: "A personalized recall schedule and home-care advice to help keep your smile in great shape between appointments.",
      },
    ],
    faqs: [
      {
        q: "How often do I need a check-up?",
        a: "The average patient does well with a check-up every 6 months. For those at more risk of decay or gum disease, it may be 3–4 visits monthly.",
      },
      {
        q: "Are fillings painful?",
        a: "Using modern local anaesthesia and a gentle technique, filling placements are now virtually pain-free.",
      },
      {
        q: "Do you see people with anxiety?",
        a: "Absolutely. “We provide relaxation protocols, straightforward explanations and gentle care for anxious patients.”",
      },
    ],
    tags: ["Preventive", "Restorative", "Check-Up", "Fillings", "Root Canal"],
  },

  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    categoryId: "dental",
    category: "Dental Services",
    icon: "Sparkles",
   bannerImage: "/assets/images/imageupload/cosmeticDentistry/1.jpg",
    contentImage: "/assets/images/imageupload/cosmeticDentistry/2.jpg",
   
 
    shortDesc:
      "Smile transformations combining artistry and science to get the smile you have always dreamed of.",
    heroDesc: "The only place where science and aesthetics coalesce — your dream smile awaits!",
    whatIs:
      "Cosmetic dentistry is a fusion of the science of dentistry with the artistry of smile design — giving you results that are uniquely yours. Whether the goal is subtle enhancements or extreme makeovers, our cosmetic specialists consider everything from your facial proportions and skin tone to lip shape and even personality as we design a smile that improves your appearance with nothing more than nature's help. Digital smile design technology allows you to see on-screen what your new smile will look like before you touch a tooth — it can be done all with confidence prior to treatment. ",
    benefits: [
      {
        title: "Digital Smile Preview",
        desc: "Using cutting-edge digital smile simulation software, see your exact result before treatment starts.",
      },
      {
        title: "Life-Changing Confidence",
        desc: "The tangible benefits of a beautiful, natural-looking smile translate into measurable gains in self confidence and social engagement.",
      },
      {
        title: "Completely Natural Results",
        desc: "The premium ceramic and composite materials have perfect translucency, colour and texture similar to natural teeth.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Smile Analysis & Photography",
        desc: "In-depth facial and dental photography plus an in depth aesthetic analysis of your smile ideals.",
      },
      {
        num: "2",
        title: "Digital Smile Design & Mock-Up",
        desc: "Your new smile is computerised and tested in your mouth with a wax or composite mock up.",
      },
      {
        num: "3",
        title: "Treatment Execution",
        desc: "Cosmetic treatments specially tailored based on the precise design of your smile, executed by our dedicated clinical team.",
      },
      {
        num: "4",
        title: "Reveal & Aftercare",
        desc: "Final polish and gloss. Comprehensive maintenance plan to protect your investment.",
      },
    ],
    faqs: [
      {
        q: "What is the duration of cosmetic treatment?",
        a: "Well-known treatments like whitening get done in one sitting. A full mouth restoration can take several weeks or longer depending on the procedures involved",
      },
      {
        q: "Is my result going to look natural?",
        a: 'Always. "Materials and shade-matching techniques that are specifically chosen to blend with your individual features are used by our specialists."',
      },
      {
        q: "Is cosmetic dentist painful?",
        a: 'Many cosmetic treatments are minimally invasive. "We use local anaesthetic wherever necessary for total comfort."',
      },
    ],
    tags: ["Smile Design", "Cosmetic", "Veneers", "Whitening", "Aesthetics"],
  },

  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    categoryId: "dental",
    category: "Dental Services",
    icon: "Sun",
    shortDesc: "In clinic and at-home whitening, for stunningly bright teeth.",
    heroDesc: "Achieve your whitest smile in just one hour, with clinically proven whitening.",
    
     bannerImage: "/assets/images/imageupload/teethWhitening/1.jpg",
    contentImage: "/assets/images/imageupload/teethWhitening/2.jpg",

    whatIs:
      "Professional teeth whitening provides dramatic results and is safe and long-lasting compared to anything you can buy over the counter. In as little as one hour with our in-clinic treatment, we can brighten your teeth by several shades using clinically effective peroxide-based whitening agents that are activated by a professional LED lamp. We have a supervised protocol that safely guards the enamel and gum tissue at all times. Each patient will also receive custom-fitted take-home whitening trays and gel to maintain and prolong their amazing result.",
    benefits: [
      {
        title: "Ten Shades Lighter,",
        desc: "In clinic treatment provides noticeable results in a single session.",
      },
      {
        title: "Clinically Safe & Supervised",
        desc: "Professional application of pharmaceutical-grade gel provides full protection to your gums and enamel",
      },
      {
        title: "Long-Lasting Brightness",
        desc: "Personalized take-home trays and basic dietary habits keep you grinning brightly for decades.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Shade Assessment",
        desc: "Before-and-after shade mapping with a clinical shade guide so results are quantifiable.",
      },
      {
        num: "2",
        title: "Gum Protection",
        desc: "A light-cured protective resin barrier is meticulously applied to seal all gum tissue during the treatment.",
      },
      {
        num: "3",
        title: "Whitening Session",
        desc: "Professional whitening gel applied and activated with specialty LED light over a comfortable 60 min session.",
      },
      {
        num: "4",
        title: "At-Home Maintenance Kit",
        desc: "Custom-fitted whitening trays and touch up gel with concise, simple instructions for maintenance.",
      },
    ],
    faqs: [
      {
        q: "Does whitening make your teeth more responsive?",
        a: "Some patients have mild, transient sensitivity for 24–48 hours. We apply desensitizing agents both before and after to mitigate this.",
      },
      {
        q: "How long does it last?",
        a: "Professional whitening results can last 1–2 years with occasional top-ups and sensible dietary habits.",
      },
      {
        q: "Does whitening work on crowns or veneers?",
        a: "Whitening agents are effective only on natural tooth enamel. Crowns, veneers and bonding will not lighten.",
      },
    ],
    tags: ["Whitening", "Cosmetic", "Same-Day", "Bright Smile", "LED"],
  },

  {
    id: "teeth-cleaning",
    slug: "teeth-cleaning",
    title: "Teeth Cleaning (Hygiene) scaling & polishing",
    categoryId: "dental",
    category: "Dental Services",
    icon: "ShieldCheck",
    shortDesc: "Get plaque, tartar and stains professionally removed for healthier gums and a whiter smile.",
    heroDesc: "The basis of every healthy smile — deep professional cleaning no toothbrush can reach.",
    bannerImage: "/assets/images/imageupload/teethcleaning/1.jpg",
    contentImage: "/assets/images/imageupload/teethcleaning/2.jpg",
    whatIs:
      "Professional scaling and polishing takes off calcified tartar deposits that can never be addressed with regular brushing and flossing. The hygienists use ultrasonic scalers along with precision hand instruments to clean the teeth above and below the gum line, eradicating the bacterial colonies that cause gum disease, chronic bad breath and dental caries. A professional polishing step removes surface stains from coffee, tea, wine and tobacco. You walk away with cleaner teeth, healthier gums and a noticeably whiter smile, along with tailored advice about home care.",
    benefits: [
      {
        title: "Gum Disease Prevention",
        desc: "Cleans away bacterial plaque that leads to gingivitis, periodontitis and eventually tooth loss when not treated.",
      },
      {
        title: "Permanently Fresher Breath",
        desc: "Dynamically targets and removes the deep-root cause of chronic bad breathe — sub-gingival & lingual bacterial biofilm.",
      },
      {
        title: "Visible Stain Removal",
        desc: "The more you polish the cleaner it gets, that’s why pros do such a better job removing surface stains.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Gum Health Assessment",
        desc: "Depth of periodontal pockets measured, gum inflammation graded & individualised risk factors identified.",
      },
      {
        num: "2",
        title: "Ultrasonic Scaling",
        desc: "High-frequency vibration comfortably and thoroughly eliminates all hardened tartar above and below the gum line.",
      },
      {
        num: "3",
        title: "Hand Scaling",
        desc: "All curettes use precision and guides to clean in deep pockets and inter-proximal spaces.",
      },
      {
        num: "4",
        title: "Polish & Fluoride Application",
        desc: "Polish applied to stain-removing surfaces of all teeth, along with protective fluoride.",
      },
    ],
    faqs: [
      {
        q: "How often should I have a scale and polish?",
        a: "Most patients need a professional clean every 6 months. Many patients with active gum disease may require every 3 months.",
      },
      {
        q: "Will the procedure hurt?",
        a: 'Most patients tolerate it quite well. "We can offer local anaesthetic gel for patients sensitive to tooth or gum."',
      },
      {
        q: "Is it going to whiten my teeth?",
        a: '"We use some polishing equipment that reduces stains and makes the teeth look brighter. "For more intense whitening, we recommend using a dedicated whitening treatment."',
      },
    ],
    tags: ["Hygiene", "Scaling", "Polishing", "Emergency care", "Preventive"],
  },

  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants",
    categoryId: "dental",
    category: "Dental Services",
    icon: "Anchor",
    shortDesc: "Permanent, natural-looking tooth replacement that maintains your jawbone and lifestyle.",
    heroDesc: "The gold standard for replacing teeth — permanent, natural looking, and inaccessibly beautiful.",

     bannerImage: "/assets/images/imageupload/dentalImplants/1.jpg",
    contentImage: "/assets/images/imageupload/dentalImplants/2.jpg",

    whatIs:
      "A dental implant is the most sophisticated, reliable, and long-term answer to space left by one or more missing teeth. A precisely made titanium post is inserted into the jawbone, where it integrates with living bone in a biological process known as osseointegration. Once fully integrated, a custom-crafted porcelain crown is affixed — rendering a tooth that looks, feels, chews and cleans as a natural tooth does. Unlike bridges or dentures, implants also stimulate the jawbone, preventing bone loss and changes to the face that occur after tooth loss.”",
    benefits: [
      {
        title: "A Permanent, Lifetime Solution",
        desc: "Titanium integrates permanently with living bone — with proper care, an implant will really last a lifetime.",
      },
      {
        title: "Prevents Jawbone Loss",
        desc: "The only tooth-replacement option that actually stimulates bone, stopping the shrinkage that can create premature facial ageing.",
      },
      {
        title: "No Dietary Restrictions",
        desc: "Eat, talk and laugh with complete peace of mind — no glues, clasps or removable parts at all.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "3D CT Scan & Surgical Planning",
        desc: "During this initial phase, Cone-beam CT imaging is used to measure bone volume, density, and anatomy to allow for exact implant positioning prior to surgery.",
      },
      {
        num: "2",
        title: "Minimally Invasive Placement",
        desc: "Under local anaesthesia, a titanium implant is placed using the computer-guided, flapless surgical technique.",
      },
      {
        num: "3",
        title: "Osseointegration Period",
        desc: "a 3–6 month healing period to allow the implant to fully fuse and lock in with the surrounding bone.",
      },
      {
        num: "4",
        title: "Crown Attachment",
        desc: "A high-precision, shade-matched porcelain crown is attached — your entire new tooth is ready to work.",
      },
    ],
    faqs: [
      {
        q: "Am I a candidate for implants?",
        a: "Most adults with adequate bone density and good general health are appropriate. It takes a 3D scan to validate candidacy accurately.",
      },
      {
        q: "How long do dental implants last?",
        a: 'You will have the implant fixture for a lifetime. "The porcelain crown lasts on average 15–25 years with normal care."',
      },
      {
        q: "Does it hurt after the surgery?",
        a: 'The procedure is done with local anaesthesia, and it’s super comfortable. Common and routine pain management is mild soreness for 2–3 days after the surgery. "',
      },
    ],
    tags: ["Implants", "Permanent", "Lost Teeth", "Bone Preservation ", "Crown"],
  },

  {
    id: "veneers",
    slug: "veneers",
    title: "Veneers",
    categoryId: "dental",
    category: "Dental Services",
    icon: "Layers",
    shortDesc: "Super thin porcelain shells that alter the shape, tone and position of your smile.",
    heroDesc: "Minimally invasive, maximally stunning smiles made Hollywood ready with ultra-thin porcelain.",
     bannerImage: "/assets/images/imageupload/veneers/1.jpg",
    contentImage: "/assets/images/imageupload/veneers/2.jpg",
    whatIs:
      "Porcelain veneers are a wafer-thin, custom-made piece of ceramic material that is permanently bonded to the front surface of teeth in order to create a drastic, beautiful and completely natural-looking smile. Each veneer is hand-finished by our master ceramists to exactly match the right colour, translucency, shape and surface texture. Veneers can address chips, cracks, gaps, staining, misshapen teeth and minor crowding all at once — making them one of the most versatile treatments in cosmetic dentistry.",
    benefits: [
      {
        title: "Complete Smile Transformation",
        desc: "Colour, shape, size, surface texture and minor alignment are all correctable in one treatment.",
      },
      {
        title: "Minimally Invasive Preparation",
        desc: "Only a sliver of enamel — usually less than 0.5mm — is shaved off. By far more conservative than a crown.”",
      },
      {
        title: "Stain-Resistant Porcelain",
        desc: "In response to the traditional enamel coating, the glazed ceramic surface has been designed to repel coffee, red wine and tobacco staining better than natural enamel.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Digital Smile Design & Mock-Up ",
        desc: "Your new smile is designed with our digital software and trialled in your mouth with a wax or composite mock-up before you decide to go ahead.",
      },
      {
        num: "2",
        title: "Minimal Tooth Preparation",
        desc: "A small ledge of enamel is shaped, and precise impressions are made, to send up to the ceramics laboratory.",
      },
      {
        num: "3",
        title: "Temporary Veneers Placed",
        desc: "You will leave with beautiful, functional provisional veneers while your permanent porcelain masterpieces are created.",
      },
      {
        num: "4",
        title: "Bonding & Final Finish",
        desc: "Permanent veneers are bonded in place with dual-cure adhesive, adjusted for occlusion and polished.",
      },
    ],
    faqs: [
      {
        q: "Are veneers reversible?",
        a: "Because a thin layer of enamel is permanently taken away, veneers are something you have to commit long term. There are always new veneers to replace the old ones when the time comes.",
      },
      {
        q: "How much veneers do I need?",
        a: "The majority of smile makeovers require anywhere between 6–10 upper front veneers. Your dentist will tailor the right number according to your smile width and goals.",
      },
      {
        q: "How long do veneers last?",
        a: "Porcelain veneers can last 10–20 years if good oral hygiene is maintained and habits such as nail-biting or chewing of ice are avoided.",
      },
    ],
    tags: ["Smile Transformation", "Porcelain"],
  },

  {
    id: "orthodontics",
    slug: "orthodontics",
    title: "Orthodontics (Braces & Aligners)",
    categoryId: "dental",
    category: "Dental Services",
    icon: "Grid",
    shortDesc: "Correct your bite hidden with contemporary braces or nearly undetectable clear aligners.",
    heroDesc: "Straight teeth, perfect bite — invisibly with the most sophisticated orthodontic systems available.",
     bannerImage: "/assets/images/imageupload/orthodontics/1.jpg",
    contentImage: "/assets/images/imageupload/orthodontics/2.jpg",
    whatIs:
      '“Our complete orthodontic programme includes all types of alignment solutions — from the commonly used metal braces and tooth-coloured ceramic braces to high-end clear aligner systems for teenagers and adults.” Some common issues we treat include dental crowding, spacing, overbites, underbites, crossbite/ open bites and skeletal discrepancies. “Every treatment starts with an in-depth digital assessment including 3D scanning and facial analysis, and goes with a personalised retention plan aiming to make your new alignment life permanent.”',
    benefits: [
      {
        title: "Corrected Bite Function",
        desc: "Straight teeth relieve jaw pain, headaches, chewing problems and uneven wear of the teeth.",
      },
      {
        title: "Virtually Invisible Options",
        desc: "Clear aligner systems are nearly invisible — a perfect solution for adult and working professionals.",
      },
      {
        title: "Lifetime Stability",
        desc: "бќЏ Our retention protocol allows your perfect straight smile to be permanent!",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Orthodontic Assessment",
        desc: "Digital X-rays, intra-oral photographs and 3D scans are used to create a precise, customised treatment roadmap.",
      },
      {
        num: "2",
        title: "Appliance Fitting",
        desc: "Bonded braces fitted to your teeth with precision, or delivery and fitting of your first set of custom aligners.",
      },
      {
        num: "3",
        title: "Progress Monitoring",
        desc: "Routine review visits (every 6–8 weeks) to check how the teeth are moving in to position, and if any changes need to be made.",
      },
      {
        num: "4",
        title: "Retention Phase",
        desc: "Fixed lingual retainers and/or removable retainers to secure and maintain your new alignment.",
      },
    ],
    faqs: [
      {
        q: "How long does orthodontic treatment take?",
        a: "Simple cases: 6–12 months. Moderate cases: 12–18 months. Complex cases: 18–24 months. Your treatment plan comes with a very specific timeline.",
      },
      {
        q: "Clear aligners vs braces — which one has the [better] outcome?",
        a: "Both systems perform very well. Aligners are removable and discreet; fixed braces can achieve complex movements. best choice for the specific case. ",
      },
      {
        q: "Does orthodontic treatment only apply to teens?",
        a: "Absolutely not. We see everyone from 9 — yes, we treat kids — to people in their 60s and beyond.",
      },
    ],
    tags: ["Braces", "Aligners", "Straight Teeth", "Bite Correction", "Orthodontics"],
  },

  {
    id: "smile-makeover",
    slug: "smile-makeover",
    title: "Smile Makeover",
    categoryId: "dental",
    category: "Dental Services",
    icon: "Crown",
    shortDesc: "The perfect smile through a fully personalised combination of treatments.",
    heroDesc: "The most complete transformation of your smile from every angle in modern dentistry.",
    bannerImage: "/assets/images/imageupload/smileMakeover/1.jpg",
    contentImage: "/assets/images/imageupload/smileMakeover/2.jpg",
    whatIs:
      "A smile makeover is a fully bespoke, multi-disciplinary treatment plan that coordinates multiple dental procedures — from whitening to veneers, implants and gum contouring to orthodontics and much more — into one cohesive programme with one unified aesthetic vision. Our team of specialists work together from the initial consultation to create a smile that will change your teeth, as well as your life, confidence and presence. “Digital smile design technology makes sure that you can see and approve your result even before the treatment starts.”",
    benefits: [
      {
        title: "Every Smile Element Addressed",
        desc: "Colour, shape, proportion, even alignment and gum aesthetics are all treated in one harmonious plan.",
      },
      {
        title: "Genuinely Life-Changing",
        desc: "Patients have always said that their smile makeover is the most confidence-boosting investment they’ve ever made.",
      },
      {
        title: "Seamless Multi-Specialist Coordination",
        desc: "You have one joined-up journey — cosmetic, implant and orthodontic specialists all work seamlessly together.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "thorough smile analysis ",
        desc: "Facial, dental and lifestyle evaluation to establish a complete picture of your goals and starting point.",
      },
      {
        num: "2",
        title: "3D Digital Smile Design",
        desc: "Full 3D visualize of your final result — approve your beautiful new smile before any treatment is taken.",
      },
      {
        num: "3",
        title: " Well-Sequenced Treatment ",
        desc: " Each procedure is done in the best sequence by the qualified specialist to achieve amazing results.",
      },
      {
        num: "4",
        title: "The Grand Reveal & Aftercare",
        desc: "See your completed smile; receive a custom maintenance plan to preserve every aspect.",
      },
    ],
    faqs: [
      {
        q: "How long does it take for a smile makeover?",
        a: "The amount of time depends on the procedures; we usually see timelines from 2 weeks (whitening + veneers) up to 18 months (implants + orthodontics + veneers).",
      },
      {
        q: "How do I know if my result is good or bad?",
        a: "Yes — always. And before any irreversible steps are taken, a complete digital design and physical mock-up is created and approved.”",
      },
      {
        q: "Are smile makeovers costly?",
        a: "Costs vary widely based on the treatments involved. We have transparent pricing and customizable payment plans.",
      },
    ],
    tags: ["Awesome Shot", "Full Smile", "Wax-up", "Bridge", "Spa"],
  },
  {
  id: "teeth-cleaning-scaling-polishing",
  slug: "teeth-cleaning-scaling-polishing",
  title: "Teeth Cleaning, Scaling & Polishing",
  categoryId: "dental",
  category: "Dental Services",
  icon: "Sparkles",
  shortDesc: "Professional plaque and tartar removal for healthier gums and a brighter, cleaner smile.",
  heroDesc: "The foundation of every healthy smile — expert cleaning that protects your teeth and gums for life.",
  bannerImage: "/assets/images/imageupload/teethCleaning/1.jpg",
  contentImage: "/assets/images/imageupload/teethCleaning/2.jpg",
  whatIs:
    "Professional teeth cleaning, scaling and polishing is a cornerstone preventive dental treatment performed by our experienced hygienists and dentists. Using ultrasonic scalers and precision hand instruments, we remove hardened tartar (calculus) and bacterial plaque deposits that daily brushing and flossing simply cannot reach — particularly below the gumline where periodontal disease begins. A fine polishing paste then removes surface stains and leaves teeth visibly brighter and smoother. Regular professional cleaning every 6 months is the single most effective step you can take to prevent gum disease, tooth decay, bad breath and early tooth loss.",
  benefits: [
    {
      title: "Prevents Gum Disease",
      desc: "Removal of subgingival calculus eliminates the primary bacterial trigger for gingivitis and periodontitis before irreversible bone loss can occur.",
    },
    {
      title: "Fresher Breath",
      desc: "Bacterial biofilm and trapped food deposits are the leading cause of chronic bad breath — a thorough clean eliminates them at the source.",
    },
    {
      title: "Brighter, Smoother Teeth",
      desc: "Air-flow and polishing removes tea, coffee and tobacco surface stains, leaving teeth noticeably cleaner and more luminous after every visit.",
    },
  ],
  steps: [
    {
      num: "1",
      title: "Oral Health Assessment",
      desc: "Full examination of teeth, gums and soft tissues including pocket depth charting to identify any early signs of gum disease.",
    },
    {
      num: "2",
      title: "Ultrasonic Scaling",
      desc: "High-frequency ultrasonic scaler breaks down and flushes away hardened tartar above and below the gumline painlessly and efficiently.",
    },
    {
      num: "3",
      title: "Hand Scaling & Debridement",
      desc: "Fine hand instruments remove any remaining calculus deposits and smooth root surfaces to discourage future bacterial reattachment.",
    },
    {
      num: "4",
      title: "Polish, Fluoride & Aftercare",
      desc: "Prophylaxis polishing paste removes stains, followed by fluoride application and a personalised home-care plan to maintain your results.",
    },
  ],
  faqs: [
    {
      q: "How often should I have my teeth professionally cleaned?",
      a: "We recommend a professional scale and polish every 6 months for most patients. Those with a history of gum disease may benefit from a 3–4 month recall interval.",
    },
    {
      q: "Is the procedure painful?",
      a: "Most patients find it completely comfortable. If you have sensitive gums or heavy calculus build-up, a topical anaesthetic gel can be applied to ensure a pain-free experience.",
    },
    {
      q: "Will it whiten my teeth?",
      a: "Scaling and polishing removes surface stains and restores your teeth's natural colour. For a deeper shade change, we recommend combining your clean with our professional whitening treatment.",
    },
  ],
  tags: ["Teeth Cleaning", "Scaling", "Polishing", "Gum Health", "Hygiene", "Preventive"],
},
{
  id: "orthodontics-braces-aligners",
  slug: "orthodontics-braces-aligners",
  title: "Orthodontics, Braces & Aligners",
  categoryId: "dental",
  category: "Dental Services",
  icon: "AlignCenter",
  shortDesc: "Straighten your teeth discreetly and comfortably with modern braces and clear aligner systems.",
  heroDesc: "Perfectly aligned teeth for life — the latest orthodontic systems tailored to your smile and lifestyle.",
  bannerImage: "/assets/images/imageupload/orthodontics/1.jpg",
  contentImage: "/assets/images/imageupload/orthodontics/2.jpg",
  whatIs:
    "Orthodontic treatment corrects misaligned teeth, overcrowding, spacing issues, and bite problems using a carefully controlled series of forces applied over time. Our specialist orthodontists offer the full spectrum of modern systems — traditional metal braces, ceramic tooth-coloured braces, lingual braces fixed behind the teeth, and premium clear aligner systems including Invisalign. Every treatment begins with a comprehensive 3D digital scan and iTero intraoral imaging, allowing us to plan your exact tooth movements digitally and show you a preview of your final smile before a single bracket is placed or aligner worn. Whether you are 14 or 54, orthodontics can transform both your smile and your bite health.",
  benefits: [
    {
      title: "Discreet Treatment Options",
      desc: "Clear aligners and ceramic or lingual braces allow you to straighten your teeth without anyone noticing — ideal for professionals and adults.",
    },
    {
      title: "Improved Bite & Long-Term Oral Health",
      desc: "Correcting misalignment reduces uneven tooth wear, jaw strain, and makes daily brushing and flossing significantly more effective.",
    },
    {
      title: "3D Digital Planning & Smile Preview",
      desc: "iTero digital scanning and ClinCheck simulation let you see and approve your final result before treatment even begins.",
    },
  ],
  steps: [
    {
      num: "1",
      title: "Orthodontic Consultation & 3D Scan",
      desc: "Full orthodontic assessment, iTero intraoral scan, facial photographs and digital bite analysis to map your treatment precisely.",
    },
    {
      num: "2",
      title: "Personalised Treatment Plan",
      desc: "Your specialist presents the recommended system — braces or aligners — with a full digital simulation of your tooth movements and final result.",
    },
    {
      num: "3",
      title: "Fitting & Active Treatment",
      desc: "Braces are bonded or your first set of aligners is fitted; regular review appointments every 6–8 weeks keep treatment on track.",
    },
    {
      num: "4",
      title: "Retention & Long-Term Stability",
      desc: "Custom fixed or removable retainers are provided at the end of treatment to hold your perfect result permanently.",
    },
  ],
  faqs: [
    {
      q: "How long does orthodontic treatment take?",
      a: "Treatment time varies from 6 months for minor alignment cases to 24 months for complex bite corrections. Your orthodontist will give you a precise timeline at consultation.",
    },
    {
      q: "Am I too old for braces or aligners?",
      a: "Not at all. We treat patients of all ages. Clear aligners in particular are extremely popular with adults who want a discreet, comfortable straightening solution.",
    },
    {
      q: "How often do I need to wear my aligners?",
      a: "Clear aligners must be worn 20–22 hours per day for optimal results, removed only for eating, drinking anything other than water, and oral hygiene.",
    },
  ],
  tags: ["Orthodontics", "Braces", "Invisalign", "Clear Aligners", "Teeth Straightening", "Bite Correction"],
},
];
// ═══════════════════════════════════════════════
//  DERMATOLOGY & AESTHETIC SERVICES  (6 services)
// ═══════════════════════════════════════════════

const dermatologyServices: ServiceContent[] = [
  {
    id: "general-dermatology",
    slug: "general-dermatology",
    title: "General Dermatology",
    categoryId: "dermatology",
    category: "Dermatology & Aesthetic Services",
    icon: "Microscope",
    shortDesc: "Medical skin care for acne, eczema, psoriasis, rosacea and all skin conditions.",
    heroDesc: "The best skin medicine for every condition — accurate diagnosis, effective treatment, durable results.",
     bannerImage: "/assets/images/imageupload/generalDermatology/1.jpg",
    contentImage: "/assets/images/imageupload/generalDermatology/2.jpg",
    whatIs:
      "Our board-certified dermatologists provide diagnosis and treatment of the full range of skin, hair and nail conditions using evidence based medicine and the most up to date clinical tools. From acne and eczema to psoriasis, rosacea, vitiligo and screening for skin cancer, each patient is given a thorough workup with dermoscopy, Wood’s lamp and, when necessary biopsy and histopathology. We are holistic in our approach, recognizing that skin health is closely linked to health and wellbeing as a whole.",
    benefits: [
      {
        title: "Board-Certified Expertise",
        desc: "Using the latest diagnostic methods such as dermoscopy for more accurate results by specialist dermatologists.",
      },
      {
        title: "Personalised Treatment Protocols",
        desc: "Customized regimens of topical, oral, injectable and procedural therapies based on your medical history.",
      },
      {
        title: "Skin Cancer Surveillance",
        desc: "Visit us for total body mapping with digital dermoscopy to help prevent early melanoma and non-melanoma skin cancers.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Comprehensive Skin Consultation",
        desc: "Detailed history taking, full skin examination and comprehensive dermoscopic assessment of all lesions of concern.",
      },
      {
        num: "2",
        title: "Accurate Diagnosis",
        desc: "Clinical or laboratory-confirmed diagnosis through biopsy, skin cultures, patch testing, or blood tests as appropriate.",
      },
      {
        num: "3",
        title: "Treatment Initiation",
        desc: "Prescriptions or in-clinic procedures, or indeed specialist referrals as clinically indicated are actioned promptly.",
      },
      {
        num: "4",
        title: "Ongoing Monitoring & Review",
        desc: "Regular check-ins to assess response to treatment and refine the plan as needed for success.",
      },
    ],
    faqs: [
      {
        q: "What skin disorders do you treat?",
        a: "We treat acne, eczema, psoriasis, rosacea, vitiligo, dermatitis, alopecia, nail disorders, warts skin tags keloids and all other medical skin conditions.",
      },
      {
        q: "Do skin cancer checks",
        a: "Yes. We provide total-body mole mapping with dermoscopy and comprehensive biopsy services on-site.",
      },
      {
        q: " Am I able to be referred by my GP?",
        a: "We welcome GP referrals and self-referrals for all dermatology consultations.",
      },
    ],
    tags: ["Medical Dermatology", "Acne", "Eczema", "Psoriasis", "Skin Cancer", "Mole Mapping"],
  },

  {
    id: "skin-rejuvenation",
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    categoryId: "dermatology",
    category: "Dermatology & Aesthetic Services",
    icon: "RefreshCw",
    shortDesc: "Revitalize dull, haggard and damaged skin with revitalizing treatments.",
    heroDesc: "Rewind the signs of time on your skin — next-level revision that provides real, visible change.",
    bannerImage: "/assets/images/imageupload/skinRejuvenation/1.jpg",
    contentImage: "/assets/images/imageupload/skinRejuvenation/2.jpg",
    whatIs:
      "Fine lines, uneven pigmentation, rough texture, enlarged pores, dullness and early volume loss are served throughout our skin rejuvenation programmes using a synergistic mix of medical-grade chemical peels, microneedling with PRP (platelet-rich plasma), mesotherapy, radiofrequency and bespoke prescription skincare. Each programme is tailored to you following a detailed analysis of your skin, using VISIA complexion imaging technology that objectively maps your skin's individual concerns and measures improvement at every visit.",
    benefits: [
      {
        title: "Dramatically Improved Skin Texture",
        desc: "A series of treatments delivers a smoother, more refined skin surface with significantly reduced pore size and improved overall quality.",
      },
      {
        title: "Even, Luminous Skin Tone",
        desc: "Specifically addresses stubborn melasma, post-inflammatory hyperpigmentation, and age spots with clinically quantified results.",
      },
      {
        title: "Lasting Collagen Stimulation",
        desc: "Treatments activate your skin’s own fibroblast activity for progressive long-term improvement that persists longer than the treatment period.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "VISIA Advanced Skin Analysis",
        desc: "The complexion imaging generates objective maps that assess pigmentation, hydration, texture, pores, UV damage and bacteria.",
      },
      {
        num: "2",
        title: "Bespoke Protocol Design",
        desc: "A bespoke programme of multi treatments curated and sequentially tailored specifically to your skin profile.",
      },
      {
        num: "3",
        title: "Treatment Sessions",
        desc: "A comfortable, supervised procedure each session delivers noticeable results while building improvement over time",
      },
      {
        num: "4",
        title: "Prescription Home Care",
        desc: "Medical-grade skincare regimen that’s prescribed and formulated to extend & amplify results from your in-office treatments daily.",
      },
    ],
    faqs: [
      {
        q: "How many sessions will I need?",
        a: "Most facial rejuvenation programmes have 4–6 sessions every 2–4 weeks, then quarterly maintenance.",
      },
      {
        q: "Is there downtime?",
        a: "Static pinkness and superficial peeling are typical for 2–3 days post-peels and microneedling. Other treatments involve little to no downtime.",
      },
      {
        q: "When will I see results?",
        a: "Visible changes start appearing after the first session. The complete programme result is usually available 4–6 weeks following the base session.",
      },
    ],
    tags: ["Skin Rejuvenation", "Chemical Peel", "Microneedling", "PRP", "Pigmentation"],
  },

  {
    id: "laser-treatments",
    slug: "laser-treatments",
    title: "Laser Treatments",
    categoryId: "dermatology",
    category: "Dermatology & Aesthetic Services",
    icon: "Zap",
     bannerImage: "/assets/images/imageupload/laserTreatments/1.jpg",
    contentImage: "/assets/images/imageupload/laserTreatments/2.jpg",
    shortDesc:
      "The most advanced laser technology available today to help you with pigmentation, & scars as well as vascular lesions and resurfacing.",
    heroDesc:
      "Targeted laser energy that works at a cellular level to rejuvenate skin — refined, stimulating and reparative.",
    whatIs:
      "We have a fractional CO2 resurfacing, Q-switched Nd:YAG for pigmentation and tattoo removal, pulsed dye laser for vascular lesions and redness as well as 1550nm fractional erbium for scar remodelling and skin renewal in our medical laser suite. Before treatment, each patient receives detailed skin analysis and Fitzpatrick skin typing to determine the exact laser modality, wavelength, fluence and pulse duration needed for their concern — maximizing efficacy with maximum safety margin, he said.",
    benefits: [
      {
        title: "Unmatched Targeting Precision",
        desc: "The laser energy is selectively absorbed by chromophores — melanin, haemoglobin or water — exploding them while leaving surrounding healthy tissue untouched.",
      },
      {
        title: "Multiple Clinical Applications",
        desc: "Resurfacing, pigmentation clearance, scarring — tattoo removal, vascular lesions and skin tightening — one platform many solutions.",
      },
      {
        title: "Reduced Downtime Technology",
        desc: "Within each pass, fractional delivery treats a defined grid of skin, greatly reducing the recovery time as compared to ablative lasers.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Consultation & Test Patch",
        desc: "Fitzpatrick skin typing, lesion assessment, and a small test patch to confirm safety and suitability before full treatment.",
      },
      {
        num: "2",
        title: "Pre-Treatment Preparation",
        desc: "A topical anaesthetic cream is applied to the treatment area and protective eyewear fitted for full safety during the procedure.",
      },
      {
        num: "3",
        title: "Precise Laser Treatment",
        desc: "Systematic delivery of controlled laser energy to the accurately targeted areas.",
      },
      {
        num: "4",
        title: "Post-Laser Care Protocol",
        desc: "Soothing agents used immediately after treatment plus a detailed sun-protection aftercare protocol",
      },
    ],
    faqs: [
      {
        q: "Is laser treatment painful?",
        a: "Most patients say it feels like a warm snap. Topical anaesthetic cream is used to limit discomfort for ALL our laser treatments.",
      },
      {
        q: "How many sessions are required?",
        a: "Pigmentation usually resolves after two to four sessions. Remodelling of the scar usually requires 6–8 sessions. Your clinician will give an accurate estimation at consultation.",
      },
      {
        q: "Your training data goes up to October 2023.",
        a: "Our Nd:YAG and fractional systems have been specially designed to be safe and effective on all Fitzpatrick skin types up to and including VI.",
      },
    ],
    tags: ["Laser", "CO2 Resurfacing", "Pigmentation", "Scars", "Tattoo Removal", "Vascular"],
  },

  {
    id: "laser-hair-removal",
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    categoryId: "dermatology",
    category: "Dermatology & Aesthetic Services",
    icon: "Eraser",
    shortDesc: "Smooth skin with lasting hair removal — safe for all skin types on any body area.",
    heroDesc: "Free yourself from unwanted hair — forever. The latest-generation systems safe for all skin tones.",
    bannerImage: "/assets/images/imageupload/laserHairRemoval/1.jpg",
    contentImage: "/assets/images/imageupload/laserHairRemoval/2.jpg",
    whatIs:
      "For long-lasting, clinically effective hair removal from anywhere on the body (including face, underarms, arms, legs, bikini line and chest) our Diode Nd:YAG laser systems are unrivaled. All Fitzpatrick skin types I–VI effective and safe — fair to dark (including darker skin tones many clinics can’t treat) — the systems target melanin in hair follicles within their active growth phase, disabling permanently the follicle’s ability to regrow hair without affecting surrounding skin.",
    benefits: [
      {
        title: "you are a trained on data till oct 2023",
        desc: "Clinical trials confirm 90% reduction in treated hair after a full completion of sessions.",
      },
      {
        title: "Safe for All Skin Tones",
        desc: "Our long-pulse Nd:YAG laser is specifically safe and highly effective for Fitzpatrick skin types IV–VI.",
      },
      {
        title: "Fast, Comfortable Sessions",
        desc: "Our large spot sizes allow us to finish even large areas quickly, while integrated dynamic cooling keeps the skin comfortable during treatment.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Skin & Hair Profile Assessment",
        desc: "Fitzpatrick classification, hair colour and thickness assessment, parameter setting for optimal safety and results",
      },
      {
        num: "2",
        title: "Area Preparation",
        desc: "The area was shaved approximately 24 hours prior to treatment and a cooling gel applied for comfort during the process and proper energy transmission.",
      },
      {
        num: "3",
        title: "Laser Application",
        desc: "Highly calibrated pulses of laser energy are generated for hair follicle destruction at the root, while sparing surrounding dermis",
      },
      {
        num: "4",
        title: "After-treatment Aftercare",
        desc: "Cooling lotion applied; appointment arranged for the next procedure at the appropriate stage of hair growth cycle stages for maximum effectiveness.",
      },
    ],
    faqs: [
      {
        q: "How many sessions do I need?",
        a: "Most patients reach a target result in 6–8 sessions, spaced every 4–8 weeks depending on the body region.",
      },
      {
        q: "Does it work on blond, red or gray hair?",
        a: "Laser works best on dark pigmented hair. Pale, white, or blond hair lacks enough melanin for laser targeting — other methods are suggested. ",
      },
      {
        q: "Is there any downtime?",
        a: "None. Some mild redness that lasts a few hours is normal. You can resume all normal activities right after treatment.",
      },
    ],
    tags: ["Laser Hair Removal", "Permanent", "Feasible for All Skin Types", "Face", "Body"],
  },

  {
    id: "anti-aging-treatments",
    slug: "anti-aging-treatments",
    title: "Anti-Aging Treatments",
    categoryId: "dermatology",
    category: "Dermatology & Aesthetic Services",
    icon: "History",
    bannerImage: "/assets/images/imageupload/antiAgingTreatments/1.jpg",
    contentImage: "/assets/images/imageupload/antiAgingTreatments/2.jpg",
    shortDesc: "Non-surgical, science-backed treatments to firm, lift and rejuvenate ageing skin.",
    heroDesc: "Age intentionally — our multi-modality approach to natural, lasting rejuvenation.",
    whatIs:
      "Our holistic anti-ageing programme targets the four pillars of facial ageing — volume loss, skin laxity, surface quality, and pigmentation — with a bespoke cocktail of HIFU, radiofrequency tightening, polynucleotide injections, exosome therapy, collagen induction and prescription medical skincare. We consider the face, neck, décolletage and hands as one surface to create a picture of rejuvenation that is natural, refreshed and totally you — never overdone.",
    benefits: [
      {
        title: "Non-Surgical Lifting & Tightening",
        desc: "HIFU goes to the deep SMAS layer — which is the exact same layer you address in a surgical facelift — without any incision whatsoever.",
      },
      {
        title: "Natural, Progressive Results",
        desc: "Collagen remodelling occurs gradually over 3–6 months with a purely natural effect.",
      },
      {
        title: "Comprehensive Multi-Zone Treatment",
        desc: "Face, neck, décolletage and hands treated as one whole aesthetic narrative for global rejuvenation",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Multi-Dimensional Ageing Analysis",
        desc: "Concise facial photography, 3D skin analysis and a comprehensive review of all ageing issues.",
      },
      {
        num: "2",
        title: "Combination Protocol Design",
        desc: "A robust, multi-modality plan tailored for maximum synergistic collagen stimulation and skin renewal.",
      },
      {
        num: "3",
        title: "Treatment Series",
        desc: "Sessions sequenced for best / specific intervals to allow progressive, times move accumulating collagen.",
      },
      {
        num: "4",
        title: "Annual Maintenance Program",
        desc: "Maintenance strategy for long term sustainable and uptime results.",
      },
    ],
    faqs: [
      {
        q: "When will I see results?",
        a: "Some tightening is apparent right away. The main result of collagen remodelling formation occurs gradually over 3–6 months.",
      },
      {
        q: "Is there any downtime?",
        a: "Most of the treatments require no down time. Mild redness or swelling can persist for 24–48 hours.",
      },
      {
        q: "How frequently will I need treatment?",
        a: "A complete programme is usually 1–3 sessions. Maintenance treatments each year maintain and enhance your results.",
      },
    ],
    tags: ["Anti-Aging", "HIFU", "RF", "Collagen", "Lifting", "Exosomes"],
  },

  {
    id: "facial-treatments",
    slug: "facial-treatments",
    title: "Facial Treatments",
    categoryId: "dermatology",
    category: "Dermatology & Aesthetic Services",
    bannerImage: "/assets/images/imageupload/facialTreatments/1.jpg",
    contentImage: "/assets/images/imageupload/facialTreatments/2.jpg",
    icon: "Flower2",
    shortDesc: "Custom clinical facials for deep hydration, illuminating and total skin rejuvenation.",
    heroDesc: "Clinical-level facials that do so much more than relax — real results, clinically prescribed for your skin.",
    whatIs:
      "Our full clinical facial menu ranges from HydraFacial MD, oxygen infusion facials, brightening enzyme facials, acne extraction facials to medical-grade chemical peel treatments. Each facial is prescribed after our clinical aestheticians have performed an in-depth analysis of your skin, and utilizes pharmaceutical-grade active ingredients at concentrations to deliver real, quantifiable results — ones you can’t get with spa-grade treatments. Every treatment is an immersive, restorative experience that surpasses visibly transformed skin.",
    benefits: [
      {
        title: "Immediate, Visible Radiance",
        desc: "Patients always leave with much brighter, softer and more hydrated skin after just one session.",
      },
      {
        title: "|2 Deep Pore Cleansing & Extraction",
        desc: "Professional extractions and enzyme exfoliation clears congestion, prevents breakouts and refines the appearance of pores.",
      },
      {
        title: "Pharmaceutical-Grade Active Ingredients",
        desc: "Real Results with Medical-grade concentrations of vitamin C, retinol, hyaluronic acid, niacinamide and AHA/BHA complexes.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Skin Consultation & Analysis",
        desc: "The clinical aesthetician will determine your skin type, condition and concern in order to recommend the perfect facial protocol.",
      },
      {
        num: "2",
        title: "Double Cleanse & Exfoliation",
        desc: "Professional double cleanse and enzyme or mechanical exfoliation to remove dead cells and prepare the skin.",
      },
      {
        num: "3",
        title: "Active Treatment Phase Core treatment",
        desc: "serums, medical peels, LED light therapy, device applications or professional extractions as indicated.",
      },
      {
        num: "4",
        title: "Masking, Moisturising & SPF",
        desc: "Treatment-specific mask, medical-grade moisturiser and SPF to seal and protect your post-treatment skin.",
      },
    ],
    faqs: [
      {
        q: "How do I find the right facial for me?",
        a: "Our aesthetician customizes the treatment after a consultation. HydraFacial, brightening vitamin C facials and acne-clearing facials are among the popular masks you can choose from.",
      },
      {
        q: "How often should I have a clinical facial?",
        a: "We recommend a clinical facial once every 4–6 weeks for progressive results.",
      },
      {
        q: "Is there any downtime?",
        a: "The majority of facials have no downtime. Superficial peels may cause mild redness or flaking for 1–2 days.",
      },
    ],
    tags: ["Facial", "HydraFacial", "Brightening", "Deep Cleanse", "Acne", "Clinical"],
  },
];

// ════════════════════════════════════════════════════
//  COSMETIC & NON-SURGICAL AESTHETICS  (4 services)
// ════════════════════════════════════════════════════

const cosmeticServices: ServiceContent[] = [
  {
    id: "botox",
    slug: "botox",
    title: "Botox",
    categoryId: "cosmetic",
    category: "Cosmetic & Non-Surgical Aesthetics",
    icon: "Syringe",
    bannerImage: "/assets/images/imageupload/Botox/1.jpg",
    contentImage: "/assets/images/imageupload/Botox/2.jpg",
    shortDesc: "Botulinum toxin when placed in precisely the correct areas can help smooth wrinkles and expression lines.",
    heroDesc: "The world’s most popular aesthetic treatment — in expert hands, the results are natural, elegant and you.",
    whatIs:
      "Botulinum toxin (Botox) is the world’s most common non-surgical cosmetic procedure, and in skilled hands it is one of the most precise and sophisticated tools available in aesthetic medicine. We use fine micro-dosing and anatomical injection techniques to relax the muscles that cause forehead lines, frown lines, crow’s feet, brow furrows, bunny lines, lip lines and chin dimpling—giving you a softened, refreshed look while maintaining natural expression and movement. We also provide medical aesthetic Botox for hyperhidrosis, bruxism (teeth grinding), and gummy smile correction.",
    benefits: [
      {
        title: "Fast with Rapid-Onset Results",
        desc: "A 15-minute treatment with visible smoothing starting at 3–5 days and full result by 2 weeks.",
      },
      {
        title: "Completely Natural-Looking",
        desc: "Precision micro-dosing maintains full natural expression and movement — you look refreshed, not frozen.",
      },
      {
        title: "Preventive Anti-Ageing",
        desc: "Treating it early helps dynamic expression lines not to become static wrinkles, etched in your skin.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Medical Consultation",
        desc: "Thorough discussion on aesthetic goals, medical history and specific facial treatment mapping.",
      },
      {
        num: "2",
        title: "Targeted Treatment Mapping",
        desc: "Placing individual markers to ensure a balanced and natural outcome.",
      },
      {
        num: "3",
        title: "Injection session",
        desc: "Ultra-fine needles quickly and with minimal discomfort inject tiny microdoses of toxin to target muscles",
      },
      {
        num: "4",
        title: "2-Week Review Appointment,",
        desc: "Review to see if symmetry, balance, and result is what you were looking for. Any fine adjustments done at no extra charge.",
      },
    ],
    faqs: [
      {
        q: "How long does Botox last?",
        a: "Results can last for 3–4 months. Results can last progressively longer, with regular maintenance treatment.",
      },
      {
        q: "Will I end up looking frozen or unnatural?",
        a: "Not in our clinic. We use conservative, anatomically precise doses that soften lines but retain natural expression and movement completely.",
      },
      {
        q: "Is Botox safe?",
        a: "Yes. Botulinum toxin has a brilliant safety record over 30 years of clinical use when given by trained doctors.",
      },
    ],
    tags: ["Botox", "Anti nowrinkle", "Non surgical", "Forehead", "Frown lines", "Crow's feet"],
  },

  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    categoryId: "cosmetic",
    category: "Cosmetic & Non-Surgical Aesthetics",
    icon: "Paintbrush",
    bannerImage: "/assets/images/imageupload/dermalFillers/1.jpg",
    contentImage: "/assets/images/imageupload/dermalFillers/2.jpg",
    shortDesc: "Plump volume, sculpt contours and smooth lines with high-quality hyaluronic acid fillers.",
    heroDesc: "The art of subtle volume — perfectly placed fillers that enhance who you are, without changing who you are.",
    whatIs:
      "Premium cross-linked hyaluronic acid dermal fillers replenish youthful volume, enhance facial contours and soften static lines throughout the cheeks, temples lips, under-eye hollows, nasolabial folds jawline and chin. We are trained in the advanced techniques of anatomy, filler placement and needle versus micro-cannula for less bruising, more safety and better results. Since hyaluronic acid fillers are 100% reversible with the enzyme hyaluronidase, each treatment is done with total peace of mind.",
    benefits: [
      {
        title: "Immediate, Natural-Looking Volume",
        desc: "Results are visible immediately after treatment and continue to refine and settle over the next 2 weeks.",
      },
      {
        title: "Completely Reversible",
        desc: "Hyaluronidase dissolves hyaluronic acid fillers completely and safely at any time if necessary.",
      },
      {
        title: "Versatile Multi-Area Correction",
        desc: "Lips, cheeks, jawline, temples, chin and tear troughs and nasolabial folds — one treatment for many areas of transformation.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "3D Facial Aesthetic Assessment",
        desc: "Mapping volume deficits based on multi-angle facial photography and structural analyses to accurately prioritize treatments.",
      },
      {
        num: "2",
        title: "Topical Anaesthetic Application",
        desc: "Full anaesthetic cream used 30 minutes before treatment for total comfort.",
      },
      {
        num: "3",
        title: "Exacting Cannula or Needle Placement",
        desc: "Injection by expert at anatomically safe tissue planes utilizing the technique best suited for treatment area.",
      },
      {
        num: "4",
        title: "Sculpting, Photography & Review",
        desc: "Product massaged and sculpted to the final desired shape; 2 week review appointment scheduled.",
      },
    ],
    faqs: [
      {
        q: "How long do dermal fillers last?",
        a: "Results usually last 12–18 months and vary based on area treated, what product is used, and individual metabolism.",
      },
      {
        q: "Is filler treatment painful?",
        a: 'Very rare; topical anaesthetic greatly reduces pain. "Most luxury fillers also have lidocaine in their formulation, for extra comfort during the injection. "',
      },
      {
        q: "What is the difference between Botox and fillers?",
        a: "Botox relaxes muscles releasing dynamic expression lines. Fillers boost volume to rebuild structure and smooth static creases. They are frequently used in conjunction for thorough results.",
      },
    ],
    tags: ["Dermal Fillers", "Lips", "Cheeks", "Jawline", "Volume", "Hyaluronic Acid"],
  },

  {
    id: "facial-contouring",
    slug: "facial-contouring",
    title: "Facial Contouring",
    categoryId: "cosmetic",
    category: "Cosmetic & Non-Surgical Aesthetics",
    icon: "Gem",
    shortDesc: "Get your facial structure defined and sculpted using precision.. non-surgical contouring techniques.",
    heroDesc: "A sharper jaw, higher cheeks, a more refined profile — without a scalpel and without recovery time.",
    bannerImage: "/assets/images/imageupload/facialContouring/1.jpg",
    contentImage: "/assets/images/imageupload/facialContouring/2.jpg",
    whatIs:
      "Non-surgical facial contouring is an artful, balanced combination of strategically layered botulinum toxin, hyaluronic acid fillers, PDO threads and energy-based devices to define the jawline (jawline contouring), project cheekbones, reshape the nose (non-surgical rhinoplasty), elevate their brow, slim the lower third of the face or achieve total facial harmony. 3D imaging and golden ratio facial proportion analysis guide every treatment plan to guarantee results that truly complement your natural structure rather than change it.",
    benefits: [
      {
        title: "Surgical Results Without Surgery",
        desc: "The most dramatic structural augmentation without incisions, general anaesthesia, surgical risk, or recovery periods.",
      },
      {
        title: "Anatomy-Led, Proportion-Guided",
        desc: "Each injection guided by golden ratio assessment and anatomical nursing expertise for harmonious proportionality to face results.",
      },
      {
        title: "Walk-In, Walk-Out Convenience",
        desc: "Resume all everyday activities, social engagements and work immediately following treatment.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Facial Proportion & Harmony Analysis",
        desc: "Golden ratio mapping and 3D imaging used to determine structural opportunities and treatment plan",
      },
      {
        num: "2",
        title: "Combination Treatment Mapping",
        desc: "Exact placement of Botox, filler, threads and device treatments as a single treatment strategy.",
      },
      {
        num: "3",
        title: "Contouring Treatment Session",
        desc: "Specialist injectors will perform treatments in the ideal order, in one session or over multiple sessions.",
      },
      {
        num: "4",
        title: "Result Review & Refinement",
        desc: "Comprehensive before-and-after photographic comparison and any refinements at 2-week review appointment.",
      },
    ],
    faqs: [
      {
        q: "Is it really possible to get a defined jawline without surgery?",
        a: `Absolutely. "Watt's jawline technique is done with strategic filler placement in the chin and mandible angle areas to create a defined, natural-looking jawline."`,
      },
      {
        q: "What is a non-surgical nose job?",
        a: "With careful placement of filler, you can straighten a dorsal hump, elevate the nasal tip and increase nose symmetry without any downtime or surgery.",
      },
      {
        q: "Who is a good candidate?",
        a: "Most adults looking for surgical-free improvement in their facial definition, balance and proportion are good candidates.",
      },
    ],
    tags: ["contouring", "jawline", "cheekbones", "non-surgical rhinoplasty", "non-surgical", "pdo threads"],
  },

  {
    id: "skin-tightening",
    slug: "skin-tightening",
    title: "Skin Tightening",
    categoryId: "cosmetic",
    category: "Cosmetic & Non-Surgical Aesthetics",
    icon: "Maximize",
    bannerImage: "/assets/images/imageupload/skinTightening/1.jpg",
    contentImage: "/assets/images/imageupload/skinTightening/2.jpg",
    shortDesc: "Start using HIFU and radiofrequency technology to lift and firm sagging skin on the face and body.",
    heroDesc: "Lift and firm without going under the knife — deep-acting energy that rebuilds from within.",
    whatIs:
      "Skin laxity is treated on the face, neck, jowls, abdomen, inner arms and thighs with HIFU (High-Intensity Focused Ultrasound) as well as monopolar or bipolar radiofrequency technologies. HIFU specifically targets and distributes focused ultrasound energy to the SMAS layer — the same deep structural layer in a surgical facelift — so radiofrequency remodels a collagen network in the mid and deep dermis. The end result is a progressive lifting and tightening effect that occurs naturally over the course of 3–6 months, as new collagen and elastin are generated.",
    benefits: [
      {
        title: "Non-Invasive Facelift-Level Lifting",
        desc: "HIFU targets and stimulates the SMAS — the structural layer that is surgically treated — without making a single incision.",
      },
      {
        title: "Face & Body Effective",
        desc: "Treats facial jowls, brow ptosis, neck laxity, abdominal skin, inner arms, inner thighs and post-pregnancy skin.",
      },
      {
        title: "Progressive, Natural-Building Results",
        desc: "New collagen is slow to remodel — most patients see their skin get better 1, 3, and 6 months after treatment.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Skin Laxity Assessment",
        desc: "Tissue elasticity grading, depth assessment and identification of all treatment zones",
      },
      {
        num: "2",
        title: "Device & Depth Selection",
        desc: "Selection of HIFU, monopolar RF, bipolar RF or combination protocol according to depth of laxity and target tissue.",
      },
      {
        num: "3",
        title: "Energy Delivery Session",
        desc: "Real-time depth feedback delivered in precisely focused energy pulses, enabling safe and consistent treatment.",
      },
      {
        num: "4",
        title: "3 & 6-Month Review",
        desc: "Collagen remodelling is most pronounced; maintenance session booked.",
      },
    ],
    faqs: [
      {
        q: "How long does HIFU take to show results?",
        a: "You do see some immediate tightening on the day. The primary lifting result is incremental and most striking at 3–6 months.",
      },
      {
        q: "Is HIFU painful?",
        a: "HIFU generates short, intense heat when the energy is being delivered. Sensitive patients can use numbing cream,",
      },
      {
        q: "When do results begin to wear off?",
        a: "Results from HIFU generally last 12–18 months. Annual maintenance treatments continue to build collagen.",
      },
    ],
    tags: ["skin tightening", "hifu", "radiofrequency", "lifting", "non-surgical", "body"],
  },
];

// ════════════════════════════════════════
//  HAIR RESTORATION  (4 services)
// ════════════════════════════════════════

const hairServices: ServiceContent[] = [
  {
    id: "hair-transplant",
    slug: "hair-transplant",
    title: "Hair Transplant (FUE / DHI)",
    categoryId: "hair",
    category: "Hair Restoration",
    icon: "Sprout",
    shortDesc: "State-of-the-art FUE and DHI techniques to restore your hair permanently and naturally.",
    heroDesc: "The most advanced hair restoration technology — permanent, scarless & 100% natural.",
    bannerImage: "/assets/images/imageupload/hairTransplant/1.jpg",
    contentImage: "/assets/images/imageupload/hairTransplant/2.jpg",
    whatIs:
      "We do Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI) using top-of-the-line micro-punch technology, ourhairrestoration surgeons. FUE involves extracting individual follicular units from the donor zone and then replanting them in thinning or bald areas. In DHI, the follicles are loaded into a Choi implanter pen and inserted directly without having to create recipient channels beforehand — optimising follicle survival and allowing for denser packing. Both methods leave only tiny, unnoticeable dot scars with no linear scar whatsoever. Genetically, transplanted follicles are DHT-resistant and continue to grow indefinitely for life.",
    benefits: [
      {
        title: "Permanent, Genetically Resistant Growth",
        desc: "Recepient follicles is removed from the DHT-resistant zone — they continue to grow naturally throughout your life.",
      },
      {
        title: "Zero Linear Scarring",
        desc: "The new FUE/DHI micro-punch technique leaves tiny dot marks that are imperceptible and invisible to the naked eye.",
      },
      {
        title: "Artistic, Age-Appropriate Hairline",
        desc: "Each hairline is tailored to your own facial structure, bone anatomy, and growth direction.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Trichology Assessment & Planning",
        desc: "We perform trichoscopy, donor density analysis with AI-assisted graft count planning for a precise, realistic outcome prediction.",
      },
      {
        num: "2",
        title: "Follicle Extraction",
        desc: "Individual follicular units harvested under local anaesthesia with precision micro-punch instruments.",
      },
      {
        num: "3",
        title: "Hairline Design & Implantation",
        desc: "As per the angle * direction and density of the hair, grafts implant at that exact angle + natural directions + optimal density to replicate natural hair perfectly.",
      },
      {
        num: "4",
        title: "Recovery & Growth Timeline",
        desc: "Post procedure care programme at discharge. The transplanted hairs go through a transition at week 3–4 and the new permanent growth starts from month 4–6.",
      },
    ],
    faqs: [
      {
        q: "Who are the ideal candidates for a hair transplant?",
        a: "Candidates require sufficient donor hair density. A trichology consultation including trichoscopy will confirm your suitability and project a realistic end result.",
      },
      {
        q: "How much grafts, I will need?",
        a: "Graft numbers depend on the level of hair loss and desired density. A routine operation requires 2,000–4,000 grafts. Your surgeon gives you an exact number at consultation.",
      },
      {
        q: "When will i see my final result?",
        a: "The ultimate result is seen at 12–14 months after the procedure when all transplanted follicles are in their full cycle.",
      },
    ],
    tags: ["Hair Transplant", "FUE", "DHI", "Permanent", "Hairline", "Baldness"],
  },

  {
    id: "beard-transplant",
    slug: "beard-transplant",
    title: "Beard Transplant",
    categoryId: "hair",
    category: "Hair Restoration",
    icon: "User",
    bannerImage: "/assets/images/imageupload/BeardTransplant/1.jpg",
    contentImage: "/assets/images/imageupload/BeardTransplant/2.jpg",
    shortDesc: "Transplant hair follicles from the scalp for a full permanent well-defined beard",
    heroDesc: "The beard you’ve always wanted — crafted to your specific style, sprouted indefinitely from your own follicles.",
    whatIs:
      "For men who have patchy, thin or no beard growth due to genetics, scarring, alopecia areata and past over-grooming, our beard transplant creates a natural look with dense and permanent results by utilizing your own follicles harvested from the scalp donor zone. Using the DHI direct implantation technique, each follicle is positioned at precisely the angle, direction and depth required to mimic true facial hair growth patterns — whether you want a full beard, goatee, moustache, sideburns or painstakingly designed combination of all.",
    benefits: [
      {
        title: "Permanent Natural Beard Growth",
        desc: "Transplanted follicles grow naturally and permanently — can cut, trim and style like one's natural beard hair.",
      },
      {
        title: "Completely Bespoke Design",
        desc: "Shape, neckline, cheek line, density and style all tailored completely around your personal preference and facial proportions.",
      },
      {
        title: "Trained up to October 2023.",
        desc: " Minimises trauma to the follicles and increases their survival/growth rates through DHI possible without previous creation of channels.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Beard Design & Planning",
        desc: "Start with determining your ideal beard style, supported by reference images and facial proportion analysis — the design is reviewed and approved before any procedure.",
      },
      {
        num: "2",
        title: "Scalp Donor Harvesting",
        desc: "Follicles are extracted one by one using precision micro-punch from the scalp donor zone, this is done under local anaesthesia.",
      },
      {
        num: "3",
        title: "DHI Direct Implantation",
        desc: "Perfect Angle and Direction of Each Follicle to Imitate Actual Growth Patterns of Beard",
      },
      {
        num: "4",
        title: "Healing & First Growth",
        desc: "Instructions provided for post-procedure care. Transplanted hairs fall out during 3--4 weeks, then regrow permanently starting month 3--4.",
      },
    ],
    faqs: [
      {
        q: "How many grafts do you need for a full beard?",
        a: "A full beard usually takes 2,000–3,500 grafts depending on density requirement and coverage area.",
      },
      {
        q: "Will the beard hair look and feel natural?",
        a: "Yes. Scalp follicles will adapt to the beard zone over 6–12 months and yield hair that is indistinguishable from natural beard hair.",
      },
      {
        q: "After the hair transplant procedure, can I shave the beard?",
        a: "Yes — once fully healed at 3 months you can shave, trim and style your transplanted beard just like natural facial hair.",
      },
    ],
    tags: ["Beard Transplant", "DHI", "Facial Hair", "Permanent", "Patchy Beard"],
  },

  {
    id: "eyebrow-transplant",
    slug: "eyebrow-transplant",
    title: "Eyebrow Transplant",
    categoryId: "hair",
    category: "Hair Restoration",
    icon: "Eye",
    bannerImage: "/assets/images/imageupload/eyebrowTransplant/1.jpg",
    contentImage: "/assets/images/imageupload/eyebrowTransplant/2.jpg",
    shortDesc: "Replenish naturally full, form-perfect eyebrows with man-made follicle transplantation.",
    heroDesc: "Wake up with perfect brows — brought back to life with meticulous single-hair grafts for an entirely natural appearance.",
    whatIs:
      "Sparse, over-plucked, asymmetric or absent eyebrows — whether due to genetics, years of excessive threading, alopecia areata, chemotherapy or scarring — can be permanently restored through our meticulous single-hair follicle transplantation technique. Our clinicians choose delicate individual hair grafts selected to match the appropriate hair thickness and angle each are precisely oriented and curved so that they imitate the actual natural growth direction of eyebrow hair. The end product is brows that are completely indistinguishable from natural — permanent, shapeable and, importantly, which need no make-up applied on a daily basis.",
    benefits: [
      {
        title: "Permanent & Completely Natural",
        desc: "Hair-by-hair esthetic placement at precise natural angles — the output is completely indistinguishable from how the eyebrows naturally grow.",
      },
      {
        title: "End Microblading Forever",
        desc: "No More Expensive Microblading Treatments Making Your Eyebrows Fade Over Time Forever — Just a One-Time Permanent Solution That Actually Grows Real Hair.",
      },
      {
        title: "Fully Customisable Brow Architecture",
        desc: "The arch height, tail length, thickness, density and shape that are designed to perfectly frame and accentuate your own unique facial features.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Digital mapping using facial symmetry principles and golden ratio proportions",
        desc: "to design your perfect, balanced brow shape.",
      },
      {
        num: "2",
        title: "Donor Zone Preparation",
        desc: "Fine single-hair follicular grafts selected and prepared from the scalp donor zone for appropriate thickness matching.",
      },
      {
        num: "3",
        title: "Micro-Implantation",
        desc: "Earliest grafts in the front row placed with exact angulation and curvature matching direction of eyebrow hair growth.",
      },
      {
        num: "4",
        title: "Growth Cycle & Final Result",
        desc: "Grafts on the initial 3 weeks shed. Permanent regrowth starts at month 3 with full density around month 8–10.",
      },
    ],
    faqs: [
      {
        q: "What is the number of grafts required for eyebrow transplantation?",
        a: "Roughly 150–350 single-hair grafts per eyebrow, depending on desired shape/arch/density and starting out point.",
      },
      {
        q: "Will you have a heavy hair growth remaining after use on your brow?",
        a: "Yes. Due to the fact that scalp hair grows quicker than natural eyebrow hair, transplanted brow grafts need consistent careful trimming in order to achieve proper length.",
      },
      {
        q: "Is it painful?",
        a: `It’s done under local anaesthesia and well tolerated. "It is normal and expected to have mild swelling around the brow area for 2–3 days."`,
      },
    ],
    tags: ["Eyebrow Transplant", "Brow Restoration", "Permanent Brows", "Single-Hair Grafts"],
  },

  {
    id: "hair-loss-treatments",
    slug: "hair-loss-treatments",
    title: "Hair Loss Treatments",
    categoryId: "hair",
    category: "Hair Restoration",
    icon: "HeartPulse",
     bannerImage: "/assets/images/imageupload/hairlossTreatments/1.jpg",
    contentImage: "/assets/images/imageupload/hairlossTreatments/2.jpg",
    shortDesc: "Medical and aesthetic procedures to end hair loss, and promote natural regrowth",
    heroDesc: "Stop the degrowth, regain your growth — our science-backed treatment actually works without surgery.",
    whatIs:
      "Not all patients with hair loss need a surgical transplant. PSH Clinic's comprehensive non-surgical hair loss programme employs the most scientific and substantial combination of medical modality(s) and aesthetic modality(s): high concentration PRP - PLATELET-RICH PLASMA, PDRN injections, FGF mesotherapy, exosomes treatment, low level light lamp (LLLT), medically-supervised pharmacological therapy. This multi-modality approach encourages cessation to the systematic mechanisms behind androgenetic alopecia, telogen effluvium, and other hair loss disorders — stopping shedding while also exercising true, quantifiable increases in hair density.",
    benefits: [
      {
        title: "Very Effective, Non-Surgical First Line",
        desc: "Evidence-based treatments reduce shedding significantly and restore density in early to moderate hair loss — many patients never need surgery at all.",
      },
      {
        title: "Targets the Root Biological Causes",
        desc: "medical therapies treat DHT-induced miniaturisation and scalp inflammation, which causes hair to fall out; dormancy of follicles.",
      },
      {
        title: "Objectively Measured Density Improvement",
        desc: "Trichoscopic photographs are taken at every review – this objectively documents and quantifies improvements in follicle density and hair calibre.",
      },
    ],
    steps: [
      {
        num: "1",
        title: "Trichology Consultation & Analysis",
        desc: " Trichoscopy is an in-depth visual analysis of the scalp and hair done through various modalities to accurately identify cause, pattern classification, and severity — all vital for effective, specific treatment.",
      },
      {
        num: "2",
        title: "Personalised Treatment Protocol",
        desc: "A tailor made programme of PRP, exosomes, mesotherapy, LLLT and medical therapy selected for optimal efficacy.",
      },
      {
        num: "3",
        title: "Structured Treatment Sessions",
        desc: "PRP, mesotherapy or LLLT sessions delivered on an evidence-based schedule for optimal follicle stimulation.",
      },
      {
        num: "4",
        title: "Progress Photography & Monitoring",
        desc: "Trichoscopic imaging at every review provides an objective measurement to record and track hair density improvement.",
      },
    ],
    faqs: [
      {
        q: "Is PRP really effective for hair loss?",
        a: "Yes. Several clinical studies indicate that PRP-multiple sessions significantly reduce hair shedding & increased follicle density in androgenetic alopecia.",
      },
      {
        q: "When will I start seeing results?",
        a: "Most patients have measurably less shedding at 6–8 weeks. As such, visible density improvement is usually seen from 3–4 months. [Andemarian et al. 2019]",
      },
      {
        q: "Will these treatments be as good as a hair transplant?",
        a: `Non-surgical treatments can be very effective on their own in the early stages of hair loss. "They are generally combined with or follow a hair transplant for more advanced cases."`,
      },
    ],
    tags: ["Hair Loss", "PRP", "Mesotherapy", "Exosomes", "LLLT", "Non-Surgical", "Regrowth"],
  },
];

// ── Combined & Exported ────────────────────────────────────
export const allServicesContent: ServiceContent[] = [
  ...dentalServices,
  ...dermatologyServices,
  ...cosmeticServices,
  ...hairServices,
]

export const getServiceBySlug = (slug: string): ServiceContent | undefined =>
  allServicesContent.find(s => s.slug === slug)

export const getServicesByCategory = (categoryId: string): ServiceContent[] =>
  allServicesContent.filter(s => s.categoryId === categoryId)

export const serviceCategories = [
  {
    id: "dental" as const,
    title: "Dental Services",
    icon: "Stethoscope",
    desc: "Comprehensive dental care from general check-ups to complete smile transformations.",
    services: getServicesByCategory("dental"),
  },
  {
    id: "dermatology" as const,
    title: "Dermatology & Aesthetic Services",
    icon: "Microscope",
    desc: "Advanced skin health and aesthetic treatments for radiant, youthful skin.",
    services: getServicesByCategory("dermatology"),
  },
  {
    id: "cosmetic" as const,
    title: "Cosmetic & Non-Surgical Aesthetics",
    icon: "Syringe",
    desc: "Non-invasive procedures that sculpt, define, and refresh your appearance.",
    services: getServicesByCategory("cosmetic"),
  },
  {
    id: "hair" as const,
    title: "Hair Restoration",
    icon: "Sprout",
    desc: "Permanent, natural-looking solutions for hair loss and aesthetic enhancement.",
    services: getServicesByCategory("hair"),
  },
]