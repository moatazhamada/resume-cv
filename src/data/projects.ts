/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'Sports',
  'Travel',
  'Finance',
  'Fintech',
  'Enterprise',
  'CRM',
  // Add more categories here:
  // 'E-Commerce',
  // 'AI/ML',
  // 'Open Source',
  // 'Personal Project',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // FC KÖLN APP
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'fc-koln-app',
    title: 'FC Köln | Sports Club Management App',
    description:
      'A custom app for managing the operations and events of FC Köln, providing up-to-date information on matches, schedules, and club news.',
    thumbnail: '/projects/fc-koln-thumb.jpg',
    images: ['/projects/fc-koln-1.jpg'],
    technologies: ['Kotlin', 'Android', 'MVVM'],
    category: 'Sports',
    role: 'Senior Mobile Engineer',
    duration: '2023 - Present',
    liveUrl: 'https://play.google.com/store/apps/details?id=de.fckoeln.app',
    featured: true,
    highlights: [
      'Improved app speed and analytics',
      'Refactored internal architecture',
      'Enhanced user experience',
    ],
  },

  // ---------------------------------------------------------------------------
  // ALLTOURS APP
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'alltours-app',
    title: 'Mein Alltours Reiseplaner | Travel Planning App',
    description:
      'An application for seamless travel planning with Alltours, allowing users to manage their itineraries, book accommodations, and receive personalized recommendations.',
    thumbnail: '/projects/alltours-thumb.jpg',
    images: ['/projects/alltours-1.jpg'],
    technologies: ['Kotlin', 'Android', 'MVVM'],
    category: 'Travel',
    role: 'Senior Mobile Engineer',
    duration: '2023 - Present',
    liveUrl: 'https://play.google.com/store/apps/details?id=de.alltours.reisen',
    featured: true,
    highlights: [
      'Enhanced app performance',
      'Improved internal structure',
      'Better analytics integration',
    ],
  },

  // ---------------------------------------------------------------------------
  // OLB BANKING APP
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'olb-banking',
    title: 'OLB: Finanzen & Banking to go',
    description:
      'A financial application that offers banking solutions for users to manage their accounts, payments, and transactions on the go.',
    thumbnail: '/projects/olb-thumb.jpg',
    images: ['/projects/olb-1.jpg'],
    technologies: ['Xamarin', 'C#', 'Android'],
    category: 'Finance',
    role: 'Senior Mobile Engineer',
    duration: '2023 - Present',
    liveUrl: 'https://play.google.com/store/apps/details?id=de.bs.ibanking',
    featured: true,
    highlights: [
      'Xamarin native development',
      'Banking solutions',
      'Secure transactions',
    ],
  },

  // ---------------------------------------------------------------------------
  // KLIVVR APP
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
    slug: 'klivvr-app',
    title: 'Klivvr | Financial App',
    description:
      'Klivvr is an all-in-one financial app for smart spending, sending, receiving, and tracking.',
    thumbnail: '/projects/klivvr-thumb.jpg',
    images: ['/projects/klivvr-1.jpg'],
    technologies: ['Kotlin', 'Android', 'MVVM', 'CI/CD'],
    category: 'Fintech',
    role: 'Senior Android Engineer',
    duration: '2021 - 2023',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.klivvr.consumer',
    featured: true,
    highlights: [
      'Built app from scratch',
      'Published on Play Store',
      'Regular updates and improvements',
    ],
  },

  // ---------------------------------------------------------------------------
  // KASHAT APP
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'kashat-app',
    title: 'Kashat | Fintech Lending App',
    description:
      'Kashat is a lending app offering small loans for small business owners. Loans start from 100 EGP and go up to 2000 EGP.',
    thumbnail: '/projects/kashat-thumb.jpg',
    images: ['/projects/kashat-1.jpg'],
    technologies: ['Kotlin', 'Android', 'MVVM'],
    category: 'Fintech',
    role: 'Senior Android Developer',
    duration: '2020 - 2021',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.klivvr.consumer',
    featured: false,
    highlights: [
      'Increased user engagement',
      'Regular Play Store updates',
      'Fintech lending solution',
    ],
  },

  // ---------------------------------------------------------------------------
  // GIG APP
  // ---------------------------------------------------------------------------
  {
    id: 'proj-6',
    slug: 'gig-app',
    title: 'GIG | Cars Insurance Services',
    description:
      'GIG is an application for Arab Misr Insurance Company to help both company and customers communicate and allows customers to report car accidents.',
    thumbnail: '/projects/gig-thumb.jpg',
    images: ['/projects/gig-1.jpg'],
    technologies: ['Java', 'Android', 'MVP'],
    category: 'Enterprise',
    role: 'Android Developer',
    duration: '2017 - 2020',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.sts.gigEgypt',
    featured: false,
    highlights: [
      'Client and Reviewer apps',
      'Insurance claim reporting',
      'Enterprise solution',
    ],
  },

  // ---------------------------------------------------------------------------
  // AZURA CRM
  // ---------------------------------------------------------------------------
  {
    id: 'proj-7',
    slug: 'azura-crm',
    title: 'Azura | CRM Application',
    description:
      'App for managing all your company\'s relationships and interactions with customers and potential customers.',
    thumbnail: '/projects/azura-thumb.jpg',
    images: ['/projects/azura-1.jpg'],
    technologies: ['Java', 'Android', 'MVP'],
    category: 'CRM',
    role: 'Android Developer',
    duration: '2017 - 2020',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.stss.azur',
    featured: false,
    highlights: [
      'Customer relationship management',
      'Lead tracking',
      'Business solution',
    ],
  },

  // ---------------------------------------------------------------------------
  // STEP ONE CRM
  // ---------------------------------------------------------------------------
  {
    id: 'proj-8',
    slug: 'step-one-crm',
    title: 'Step One | CRM Application',
    description:
      'Manage customers and leads using this CRM system.',
    thumbnail: '/projects/stepone-thumb.jpg',
    images: ['/projects/stepone-1.jpg'],
    technologies: ['Java', 'Android', 'MVC'],
    category: 'CRM',
    role: 'Android Developer',
    duration: '2017 - 2020',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.sts.steponecrm',
    featured: false,
    highlights: [
      'Customer management',
      'Lead tracking system',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
