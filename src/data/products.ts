export type Product = {
  name: string;
  oneLiner: string;
  href: string;
};

export const products: Product[] = [
  {
    name: 'Teachers Toolkit',
    oneLiner: 'Classroom tools for teachers.',
    href: 'https://teacherstoolkit-nriit.web.app',
  },
  {
    name: 'Python Programming Course',
    oneLiner: 'Course materials for Python programming.',
    href: 'https://github.com/asvnphanindra/2026-27_PythonProgrammingCourse',
  },
  {
    name: 'AI Dev Tools Zoom Camp',
    oneLiner: 'Hands-on camp for AI developer tooling.',
    href: 'https://github.com/asvnphanindra/2026_AIDevToolsZoomCamp',
  },
  {
    name: '5G ISAC simulator',
    oneLiner: 'System-level integrated sensing and communication simulator.',
    href: 'https://github.com/asvnphanindra/5G_based_System_level_Integrated_Sensing_and_Communication_Simulator',
  },
  {
    name: 'ashtadhyayi',
    oneLiner: 'Data and tooling around Ashtadhyayi.',
    href: 'https://github.com/asvnphanindra/data_ashtadhyayi',
  },
];

/** Featured subset shown on Home (first three). */
export const featuredProducts = products.slice(0, 3);
