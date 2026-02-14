/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains work history displayed in the Experience section.
 *
 * TO CUSTOMIZE:
 * 1. Replace the example entries with your actual work history
 * 2. List positions in reverse chronological order (newest first)
 * 3. Use action verbs for achievements (Led, Built, Increased, Reduced, etc.)
 * 4. Include metrics when possible (numbers, percentages, dollar amounts)
 * 5. List relevant technologies used at each position
 *
 * TO ADD A NEW EXPERIENCE:
 * Copy an existing entry and modify all fields. Example:
 * {
 *   id: 'exp-4',  // Unique identifier
 *   title: 'Your Job Title',
 *   company: 'Company Name',
 *   location: 'City, State/Country',
 *   type: 'full-time',  // Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
 *   startDate: '2023-01',  // Format: YYYY-MM
 *   endDate: '2024-01',    // Format: YYYY-MM or omit for current position
 *   current: false,        // Set to true if this is your current job
 *   description: 'Brief description of your role...',
 *   achievements: ['Achievement 1', 'Achievement 2'],
 *   technologies: ['Tech 1', 'Tech 2'],
 * }
 *
 * TO REMOVE AN EXPERIENCE:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Experience entry type definition
 */
export interface Experience {
  /** Unique identifier (e.g., 'exp-1', 'exp-2') */
  id: string;

  /** Job title (e.g., "Senior Software Engineer", "Product Manager") */
  title: string;

  /** Company name */
  company: string;

  /**
   * Company logo path (optional)
   * - Use '/logos/company.png' for local image in public/logos/
   * - Use full URL for external image
   * - Omit or use undefined for no logo
   */
  companyLogo?: string;

  /**
   * Location
   * Format: "City, State/Country" or "Remote"
   */
  location: string;

  /**
   * Employment type
   * Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
   */
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';

  /**
   * Start date in YYYY-MM format
   * Example: '2023-01' for January 2023
   */
  startDate: string;

  /**
   * End date in YYYY-MM format (optional)
   * - Omit for current position
   * - Example: '2024-06' for June 2024
   */
  endDate?: string;

  /**
   * Is this your current position?
   * Set to true if still working here
   */
  current: boolean;

  /**
   * Brief description of the role
   * 1-2 sentences about what you did
   */
  description: string;

  /**
   * Key achievements/accomplishments in this role
   * - Use action verbs (Led, Built, Increased, Reduced, etc.)
   * - Include metrics when possible
   * - 3-5 bullet points recommended
   */
  achievements: string[];

  /**
   * Technologies/tools used in this role
   * List programming languages, frameworks, tools, etc.
   */
  technologies: string[];
}

/**
 * =============================================================================
 * YOUR WORK EXPERIENCE - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual work history.
 * Keep positions in reverse chronological order (newest first).
 */
export const experience: Experience[] = [
  // ---------------------------------------------------------------------------
  // CURRENT POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-1',
    title: 'Senior Mobile Engineer (Android)',
    company: 'App-Agentur NEXT Munich GmbH',
    location: 'Munich, Germany',
    type: 'full-time',
    startDate: '2023-11',
    current: true,
    description:
      'Working on FC Köln and Alltours apps focusing on refactoring and enhancements. Also contributing to OLBBanking app (Xamarin native).',
    achievements: [
      'Improved app speed, analytics, and internal architecture for FC Köln and Alltours apps',
      'Worked on OLBBanking app using Xamarin native',
      'Documented and created tutorials for later use in app development cycles',
      'Collaborated across multi-disciplinary teams using Agile development frameworks',
    ],
    technologies: ['Kotlin', 'Java', 'Xamarin', 'Android', 'CI/CD', 'Agile'],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITIONS
  // ---------------------------------------------------------------------------
  {
    id: 'exp-2',
    title: 'Senior Android Engineer',
    company: 'Klivvr By Orascom Financial Holding',
    location: 'Egypt',
    type: 'full-time',
    startDate: '2021-08',
    endDate: '2023-10',
    current: false,
    description:
      'Built the Klivvr financial application from scratch, ensuring high-quality user experience.',
    achievements: [
      'Built the Klivvr application from scratch, meeting unique requirements',
      'Implemented new features and enhancements, improving functionality and usability',
      'Collaborated with product and security teams to refine features before implementation',
      'Published regular application updates on the Play Store',
      'Acted as the App production support in various cases',
    ],
    technologies: ['Kotlin', 'Java', 'Android', 'MVVM', 'Git', 'CI/CD'],
  },

  {
    id: 'exp-3',
    title: 'Senior Android Developer',
    company: 'Kashat By Pharos Financial Holding',
    location: 'Egypt',
    type: 'full-time',
    startDate: '2020-03',
    endDate: '2021-08',
    current: false,
    description:
      'Enhanced the Kashat fintech lending application with new features that increased user engagement.',
    achievements: [
      'Enhanced the Kashat application, implementing new features that significantly increased user engagement',
      'Collaborated with design and business teams to define and refine app features',
      'Published regular application updates on the Play Store',
      'Assisted the support team in promptly resolving user issues',
    ],
    technologies: ['Kotlin', 'Java', 'Android', 'MVVM', 'Git'],
  },

  {
    id: 'exp-4',
    title: 'Android Developer',
    company: 'STS | Smart Touch Solutions',
    location: 'Egypt',
    type: 'full-time',
    startDate: '2017-07',
    endDate: '2020-03',
    current: false,
    description:
      'Designed and developed mobile applications for the Android platform, meeting client requirements.',
    achievements: [
      'Designed and developed mobile applications for the Android platform',
      'Collaborated with the design and analysis team to translate business needs into app features',
      'Ensured the highest standards of quality, security, and performance',
      'Published applications on the Play Store',
      'Continuously improved and updated applications based on user feedback',
    ],
    technologies: ['Java', 'Android', 'XML', 'Git', 'MVC', 'MVP'],
  },

  {
    id: 'exp-5',
    title: 'Teaching Assistant',
    company: 'October 6 University',
    location: 'Egypt',
    type: 'part-time',
    startDate: '2018-07',
    endDate: '2018-09',
    current: false,
    description:
      'Teaching Assistant at the Faculty of Computer Science and Information Systems for Automata course.',
    achievements: [
      'Provided guidance and support to students, helping them understand course materials',
    ],
    technologies: ['Computer Science', 'Automata'],
  },

  // ---------------------------------------------------------------------------
  // INTERNSHIPS
  // ---------------------------------------------------------------------------
  {
    id: 'exp-6',
    title: 'Mobile Developer Intern',
    company: 'Sarmady A Vodafone Company',
    location: 'Egypt',
    type: 'full-time',
    startDate: '2018-07',
    endDate: '2018-09',
    current: false,
    description:
      'Learned from mobile development team leads on each platform, gaining hands-on experience in Android and iOS development.',
    achievements: [
      'Gained hands-on experience in Android and iOS development',
      'Worked on various assigned tasks and challenges',
    ],
    technologies: ['Android', 'iOS', 'Mobile Development'],
  },

  {
    id: 'exp-7',
    title: 'Software Engineer Trainee',
    company: 'E-finance',
    location: 'Egypt',
    type: 'full-time',
    startDate: '2017-07',
    endDate: '2017-08',
    current: false,
    description:
      'Comprehensive training in System Analysis, IT, Development, Operations, and HR departments.',
    achievements: [
      'Gained insights into various areas of software development and project delivery',
      'Obtained practical knowledge of the software development life cycle',
    ],
    technologies: ['System Analysis', 'Software Engineering'],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get total years of professional experience
 */
export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

/**
 * Get current position (if any)
 */
export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

/**
 * Get all unique technologies across all experience
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Get experience duration as string
 */
export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
