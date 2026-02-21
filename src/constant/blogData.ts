// blogData.ts
// Source of truth for all blog content — mirrors blog-posts.md structure.
// Update content here; BlogGrid and BlogDetails read from this automatically.

export interface BlogPost {
    slug:            string;
    date:            string;
    author:          string;
    role:            string;
    comments:        number;
    tags:            string[];
    title:           string;
    excerpt:         string;
    quote:           string;
    quote_author:    string;
    section_heading: string;
    body_1:          string;
    body_2:          string;
    body_3:          string;
    body_4:          string;
    comments_list: {
        author: string;
        text:   string;
        isReply?: boolean;
    }[];
}

export const blogPosts: BlogPost[] = [
    {
        slug:    "dental-implants-guide",
        date:    "12 January 2025",
        author:  "Dr. Sarah Mitchell",
        role:    "Lead Dentist & Founder",
        comments: 18,
        tags:    ["Dental", "Implants", "Surgery", "Oral Health", "Smile"],
        title:   "The Complete Guide to Dental Implants: What to Expect Before, During & After",
        excerpt: "Thinking about dental implants? Our lead dentist breaks down everything you need to know — from candidacy to full recovery — in plain, easy-to-understand language.",
        quote:       `"A dental implant is not just a tooth replacement — it is an investment in your overall oral health, your appearance, and your quality of life for decades to come."`,
        quote_author: "Dr. Sarah Mitchell, Lead Dentist & Founder",
        section_heading: "What to Expect During Recovery",
        body_1: "Dental implants are one of the most effective and long-lasting solutions for replacing missing teeth. Unlike dentures or bridges, implants are surgically anchored into the jawbone, providing a permanent foundation that looks, feels, and functions just like a natural tooth. At ClinicMaster, we have helped thousands of patients restore their smiles — and their confidence — through this life-changing procedure.",
        body_2: "Before the procedure begins, you will have a comprehensive consultation with our dental team. This includes a full oral health assessment, dental X-rays, and in some cases a 3D CBCT scan to evaluate the density and volume of your jawbone. Those with insufficient bone density may first require a bone grafting procedure, which adds several months to the overall timeline but dramatically improves long-term outcomes.",
        body_3: "The first 48 to 72 hours after implant surgery are the most important for recovery. You may experience mild swelling, bruising, and some discomfort — this is completely normal. We recommend sticking to soft foods, avoiding strenuous activity, and following your prescribed medications. Most patients return to normal daily activities within two to three days.",
        body_4: "With proper care — regular brushing, flossing, and routine dental visits — dental implants can last a lifetime. They represent the single best investment you can make in your long-term oral health. Book a free consultation with our team at ClinicMaster today.",
        comments_list: [
            { author: "Amanda Clarke",       text: "I had my implants done at ClinicMaster six months ago and the experience exceeded my expectations. The team was incredibly thorough and I felt fully informed at every stage. My new crown looks completely natural — I couldn't be happier!" },
            { author: "Dr. Sarah Mitchell",  text: "Thank you so much, Amanda! It was a pleasure working with you. Your bone density was excellent which made the procedure very straightforward. Enjoy your new smile!", isReply: true },
            { author: "Rahul Menon",         text: "Great article! I've been putting off implants for years due to fear of surgery. This breakdown really helped me understand what to expect. Going to book a consultation this week." },
        ],
    },
    {
        slug:    "skincare-habits-aging-skin",
        date:    "28 January 2025",
        author:  "Dr. Priya Nair",
        role:    "Senior Dermatologist",
        comments: 24,
        tags:    ["Skincare", "Anti-Aging", "Dermatology", "Skin Health", "Wellness"],
        title:   "5 Skincare Habits That Are Secretly Aging Your Skin Faster",
        excerpt: "Small daily habits can have a massive impact on how your skin ages. Our dermatologist reveals the most common mistakes patients make and how to correct them.",
        quote:       `"Your skin is a living organ and it remembers everything — the sun exposure, the sleep deprivation, the harsh products. The sooner you listen to it, the better it responds."`,
        quote_author: "Dr. Priya Nair, Senior Dermatologist",
        section_heading: "How to Build a Skin-Positive Routine",
        body_1: "Most people are surprised to learn that some of their most ingrained daily habits are quietly accelerating the ageing process. From skipping sunscreen on cloudy days to using overly harsh cleansers, these small missteps compound over years into visible lines, uneven tone, and loss of elasticity. At ClinicMaster, our dermatology team sees the consequences of these habits every day — and the good news is that most of them are entirely reversible.",
        body_2: "The five most damaging habits we see are: skipping SPF (UV damage is the number one cause of premature ageing), over-exfoliating which strips the skin barrier, sleeping in makeup, using hot water to wash your face, and neglecting your neck and hands. Each of these degrades collagen and elastin — the proteins responsible for firm, youthful-looking skin — far faster than the natural ageing process alone.",
        body_3: "Building a skin-positive routine does not have to be complex or expensive. A gentle cleanser, a broad-spectrum SPF 50 applied every morning, a retinol-based product used three nights a week, and a good moisturiser are the foundation of every effective routine. Consistency matters far more than the number of products you use.",
        body_4: "If you are seeing visible signs of premature ageing or struggling with persistent skin concerns, our dermatology team offers personalised skin assessments. From medical-grade chemical peels to laser resurfacing and anti-aging injectables, we have a full suite of treatments tailored to your skin type and goals.",
        comments_list: [
            { author: "Leena Krishnan",   text: "I had no idea hot water was damaging my skin! I've switched to lukewarm and my skin already feels less tight after cleansing. Such a simple change with a noticeable difference." },
            { author: "Dr. Priya Nair",   text: "So glad to hear that, Leena! Hot water disrupts the lipid barrier faster than most people realise. Keep it up and you'll notice even more improvement in a few weeks.", isReply: true },
            { author: "James Whitfield",  text: "Been using SPF daily for 6 months on your recommendation and friends keep asking if I've had something done. Best habit I've ever started. Thank you ClinicMaster!" },
        ],
    },
    {
        slug:    "braces-vs-clear-aligners",
        date:    "10 February 2025",
        author:  "Dr. James Okafor",
        role:    "Orthodontics Specialist",
        comments: 15,
        tags:    ["Orthodontics", "Aligners", "Braces", "Dental", "Smile"],
        title:   "Braces vs. Clear Aligners: Which Is Right for You in 2025?",
        excerpt: "With so many orthodontic options today, choosing the right treatment can feel overwhelming. Here's a clear, honest side-by-side comparison to help you decide.",
        quote:       `"There is no universally 'better' option between braces and aligners — the right choice depends entirely on the complexity of your case, your lifestyle, and your commitment to the process."`,
        quote_author: "Dr. James Okafor, Orthodontics Specialist",
        section_heading: "Making the Right Choice for Your Smile",
        body_1: "Orthodontic treatment has come a long way in the past decade. Traditional metal braces remain one of the most reliable and cost-effective tools for correcting even complex misalignment, bite issues, and crowding. Clear aligners have revolutionised orthodontics by offering a discreet, removable alternative that suits the lifestyle of many adult and teenage patients.",
        body_2: "The key differences come down to four factors: complexity of treatment, visibility, comfort, and patient compliance. Braces are fixed — they work continuously and require less discipline from the patient. Aligners must be worn 20 to 22 hours per day to be effective. For severe misalignment or complex bite corrections, braces are still the more predictable and precise tool.",
        body_3: "Clear aligners win decisively on aesthetics and convenience. They are virtually invisible, removable for eating and cleaning, and generally cause less irritation to the soft tissues of the mouth. For mild to moderate alignment issues, they deliver excellent results — often in a shorter overall treatment time than braces.",
        body_4: "At ClinicMaster, we offer both options and will always recommend the treatment that is clinically most appropriate for your specific case. Book an orthodontic consultation today and receive a personalised treatment plan with transparent pricing.",
        comments_list: [
            { author: "Sophie Tan",    text: "I was so torn between the two options. After my consultation at ClinicMaster I went with aligners and I'm 4 months in — genuinely couldn't be happier. Nobody at work even noticed I was in treatment!" },
            { author: "Dr. James Okafor", text: "That's exactly the outcome we aim for, Sophie! Your case was well-suited to aligners. Keep wearing them consistently and you're on track for a fantastic result.", isReply: true },
            { author: "Tariq Hassan",  text: "Really balanced article — most things I read online are clearly pushing one product. Nice to see an honest comparison. Booked my consultation already." },
        ],
    },
    {
        slug:    "how-often-visit-dentist",
        date:    "22 February 2025",
        author:  "Dr. Sarah Mitchell",
        role:    "Lead Dentist & Founder",
        comments: 11,
        tags:    ["Dental", "Preventive Care", "General", "Oral Health"],
        title:   "How Often Should You Really Visit the Dentist? The Truth Might Surprise You",
        excerpt: "Most people think twice a year is the gold standard — but the answer is more nuanced. Here's what modern dentistry actually recommends based on your risk profile.",
        quote:       `"Preventive dentistry is the single most cost-effective thing a patient can do. A scale and polish every six months costs a fraction of a root canal — which is the consequence of skipping it."`,
        quote_author: "Dr. Sarah Mitchell, Lead Dentist & Founder",
        section_heading: "What Risk Category Are You In?",
        body_1: "The 'twice a year' recommendation has been standard dental advice for decades, but modern evidence-based dentistry tells a more nuanced story. The optimal frequency of dental visits varies significantly depending on individual risk factors including gum disease history, cavity susceptibility, smoking status, diabetes, pregnancy, and overall oral hygiene habits.",
        body_2: "Low-risk patients — those with excellent oral hygiene and no history of gum disease — may genuinely only need to see a dentist once a year. High-risk patients, however, should ideally be visiting every three to four months. This group includes smokers, diabetics, patients with a history of periodontal disease, and those undergoing cancer treatment.",
        body_3: "Beyond frequency, what happens during your visit matters enormously. A thorough appointment should include a full soft tissue assessment for oral cancer screening, a periodontal pocket depth check, X-rays at appropriate intervals, and a professional clean by a dental hygienist.",
        body_4: "At ClinicMaster, every patient receives a personalised recall schedule based on their clinical risk profile. If you haven't had a full oral health assessment recently, book one today. Early detection saves teeth, money, and in some cases, lives.",
        comments_list: [
            { author: "Patricia Yuen",    text: "I had no idea my diabetes meant I should be going more often. Just booked a hygiene appointment after reading this — thank you for the wake-up call!" },
            { author: "Dr. Sarah Mitchell", text: "Really glad this was helpful, Patricia! Diabetic patients are at significantly higher risk for periodontal disease so more frequent visits make a real difference. See you soon!", isReply: true },
            { author: "Mark Reynolds",    text: "Never realised there was so much nuance to it. I've been going every 6 months but apparently I'm low risk so I could go once a year. Good to know!" },
        ],
    },
    {
        slug:    "botox-vs-dermal-fillers",
        date:    "05 March 2025",
        author:  "Dr. Priya Nair",
        role:    "Senior Dermatologist",
        comments: 31,
        tags:    ["Aesthetics", "Botox", "Fillers", "Anti-Aging", "Non-Surgical"],
        title:   "Botox vs. Dermal Fillers: Understanding the Difference and Which One You Need",
        excerpt: "Both are injectable treatments but they work very differently. Our aesthetic specialist explains when each is appropriate and what results you can realistically expect.",
        quote:       `"Injectable treatments are not about looking different — they are about looking like the best, most rested version of yourself. The goal is always natural enhancement, never alteration."`,
        quote_author: "Dr. Priya Nair, Senior Dermatologist",
        section_heading: "What Results Can You Realistically Expect?",
        body_1: "Botox and dermal fillers are often mentioned in the same breath, but they are fundamentally different treatments that address different concerns. Botox (botulinum toxin) works by temporarily relaxing the muscles responsible for dynamic wrinkles — the lines that form from repeated facial expressions such as frowning, squinting, and smiling. It is most effective on the forehead, between the brows, and around the eyes.",
        body_2: "Dermal fillers use hyaluronic acid or other biocompatible substances to add volume, contour, and structure to the face. They are ideal for restoring lost volume in the cheeks and temples, softening deep static lines around the mouth, enhancing lip volume, and defining the jawline. Unlike Botox, fillers do not relax muscles — they physically fill and sculpt.",
        body_3: "Botox results typically appear within three to five days and last three to four months. Dermal filler results are immediate and can last anywhere from six months to two years. Both treatments are minimally invasive with little to no downtime, though some mild bruising or swelling at the injection site is normal.",
        body_4: "The best aesthetic outcomes come from combining both treatments strategically. At ClinicMaster, every injectable treatment begins with a detailed facial analysis and a conservative treatment plan. We always prioritise natural-looking results and build trust gradually.",
        comments_list: [
            { author: "Nadia Al-Farsi",   text: "This is the clearest explanation of the difference I've ever read. I always thought they were the same thing. Booked a consultation after reading this — feeling much more informed going in!" },
            { author: "Dr. Priya Nair",   text: "So pleased this helped, Nadia! Knowledge really does make the consultation so much more productive. Looking forward to meeting you and discussing your goals.", isReply: true },
            { author: "Caroline Hughes",  text: "I've had Botox elsewhere before but felt the results looked too 'frozen'. Reading this I understand why — it sounds like technique and dosage really matter. Will be trying ClinicMaster next time." },
        ],
    },
    {
        slug:    "fue-vs-dhi-hair-transplant",
        date:    "18 March 2025",
        author:  "Dr. James Okafor",
        role:    "Hair Restoration Specialist",
        comments: 22,
        tags:    ["Hair Restoration", "FUE", "DHI", "Hair Transplant", "Hair Loss"],
        title:   "Hair Transplant (FUE vs DHI): A Complete 2025 Comparison Guide",
        excerpt: "Hair restoration has advanced dramatically. We compare the two leading techniques — FUE and DHI — covering costs, downtime, results, and who each method suits best.",
        quote:       `"Hair loss affects self-esteem in a profound way. Modern transplant techniques have made it possible to achieve results so natural that even your barber won't be able to tell the difference."`,
        quote_author: "Dr. James Okafor, Hair Restoration Specialist",
        section_heading: "Which Method Is Right for You?",
        body_1: "Hair transplantation has undergone a revolution in the past decade. The two most widely used techniques are Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI). Both harvest individual follicular units from the donor area — typically the back and sides of the scalp — but differ significantly in how those grafts are implanted into the recipient area.",
        body_2: "FUE involves creating small recipient sites in the scalp before implanting the harvested grafts. This gives the surgeon greater control over the angle and depth of implantation across large areas, making it well-suited to patients requiring high graft counts. It is also used for beard, eyebrow, and body hair transplants. Recovery time is typically five to seven days.",
        body_3: "DHI uses a specialised pen-like Choi implanter to extract and implant grafts simultaneously — eliminating the need to create recipient sites in advance. This results in less scalp trauma, a higher graft survival rate, and a faster recovery. DHI is particularly effective for hairline refinement and adding density to thinning areas.",
        body_4: "Both techniques deliver permanent, natural-looking results when performed by an experienced surgeon. At ClinicMaster, we offer both FUE and DHI and will recommend the most appropriate method after a full scalp assessment and trichoscopy. Book your free hair restoration consultation today.",
        comments_list: [
            { author: "David Osei",    text: "I went with DHI at ClinicMaster four months ago. The recovery was surprisingly quick — I was back at work in four days. The early results already look incredible. Can't wait to see the full result at 12 months." },
            { author: "Dr. James Okafor", text: "Fantastic to hear, David! DHI was definitely the right call for your hairline work. The grafts are growing in beautifully. See you at your 6-month follow-up!", isReply: true },
            { author: "Fiona Walsh",   text: "I'm a woman considering a hair transplant for thinning at my crown and temples. I didn't realise FUE could address this. Really reassuring article — making an appointment this week." },
        ],
    },
];