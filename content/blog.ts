export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  readTime: number;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "canada-student-visa-2024",
    slug: "canada-student-visa-2024",
    title: "Complete Guide to Canada Student Visa in 2024",
    description:
      "Everything you need to know about applying for a Canadian student visa, including requirements, timeline, and common mistakes to avoid.",
    content: `
## Canada Student Visa Guide 2024

Studying in Canada is an excellent choice for international students. Here's what you need to know about the visa process.

### Eligibility Requirements

- You must have an acceptance letter from a Designated Learning Institution (DLI) in Canada
- You need proof of financial support (approximately CAD 60,000-80,000 per year)
- You must pass a medical exam if required
- You need a valid passport

### Financial Documentation

Canadian immigration requires proof that you can support yourself throughout your studies. This includes:

- Tuition fees
- Living expenses (rent, food, transportation)
- Health insurance
- Return transportation

### Application Timeline

- **3-4 months before intake**: Complete your program applications
- **2-3 months before intake**: Receive acceptance letter from DLI
- **1-2 months before intake**: Gather financial documents and medical exam
- **6-8 weeks before intake**: Submit visa application

### Common Mistakes

1. Submitting incomplete documentation
2. Unclear financial source documentation
3. Gaps in employment history
4. Poor language test scores
5. Not having a clear study plan

### Tips for Success

- Start the process early
- Keep all documents organized
- Ensure your financial documents match your application
- Practice your English/French
- Have a clear career goal post-graduation

For personalized guidance, our consultants can help you navigate the entire process.
    `,
    date: "2024-05-09",
    author: "C-Visas Agency",
    readTime: 6,
    category: "Canada",
  },
  {
    id: "uk-student-visa-requirements",
    slug: "uk-student-visa-requirements",
    title: "UK Student Visa Requirements and Application Process",
    description:
      "A comprehensive guide to obtaining a UK student visa, including the latest requirements and application steps.",
    content: `
## UK Student Visa Requirements

The UK offers world-class education and is home to many prestigious universities. Here's how to get your student visa.

### Types of UK Student Visas

#### Tier 4/Student Visa
- For students aged 16+
- Pursuing degree-level courses or higher
- Valid for 2-10 years depending on course length

#### Short-term Study Visa
- For courses under 6 months
- No work permission
- Faster processing

### Key Requirements

- Acceptance letter from a UK university
- Proof of financial support
- English language proficiency (IELTS 5.5-6.5)
- Valid passport

### Financial Requirements

For 2024, you need to demonstrate:
- Full tuition fees for your course
- Living expenses (approximately £1,025/month in London, £819/month outside London)

### Application Process

1. **Accept your university offer**
2. **Receive your Confirmation of Acceptance for Studies (CAS)**
3. **Gather required documents**
4. **Apply online through UKVI website**
5. **Pay visa and Healthcare Surcharge**
6. **Attend biometric appointment**
7. **Receive decision**

### Points to Remember

- Processing usually takes 3 weeks
- Priority service available (1 week)
- You can work part-time during studies (20 hours/week during term)
- Post-graduation work visa available for 2 years

### Common Reasons for Refusal

- Insufficient funds
- Fake documents
- Poor English language skills
- No genuine intention to study

Our team can help ensure your application is strong and complete.
    `,
    date: "2024-04-28",
    author: "C-Visas Agency",
    readTime: 7,
    category: "UK",
  },
  {
    id: "study-abroad-financial-planning",
    slug: "study-abroad-financial-planning",
    title: "Financial Planning Guide for Study Abroad",
    description:
      "How to plan your finances for international education and explore scholarship opportunities.",
    content: `
## Financial Planning for Study Abroad

Studying abroad is an investment in your future. Smart financial planning can make it achievable.

### Total Cost of Study

The total cost includes:

- **Tuition fees**: $15,000-$50,000+ per year (varies by country and university)
- **Accommodation**: $500-$2,000/month
- **Food and groceries**: $200-$500/month
- **Transportation**: $50-$200/month
- **Insurance**: $500-$2,000/year
- **Personal expenses**: $200-$500/month

### Funding Sources

#### Personal/Family Savings
- Most reliable source
- Shows genuine commitment to immigration officers

#### Educational Loans
- Private loans available in Rwanda
- International education loans
- Home country loans

#### Scholarships and Grants
- University scholarships
- Government scholarships
- International funding organizations
- NGO support

#### Part-time Work
- Usually allowed 15-20 hours/week during studies
- Helps cover living expenses
- Builds work experience

### Budgeting Tips

1. Research total costs for your specific program
2. Create a detailed budget spreadsheet
3. Consider currency exchange rates
4. Plan for unexpected expenses (15% buffer)
5. Track spending monthly
6. Look for student discounts

### Scholarship Opportunities

- Commonwealth Scholarships (UK)
- Chevening Scholarships
- Government sponsorship programs
- University-specific scholarships
- Merit-based awards

### Making It Affordable

- Choose countries with lower living costs (Germany, Poland)
- Apply for scholarships early
- Consider budget-friendly universities
- Work part-time if allowed
- Share accommodation with other students

Start financial planning 1-2 years before your intended intake. The earlier you plan, the more funding options become available.
    `,
    date: "2024-04-15",
    author: "C-Visas Agency",
    readTime: 8,
    category: "Finance",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
