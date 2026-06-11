export const en = {
  meta: {
    site_name: 'Patricio Parra Galia',
    description:
      'Telecommunications and IT Infrastructure Engineer with 15+ years of experience across Europe and Latin America. Dell Wyse Management Suite specialist.',
  },
  nav: {
    home:       'Home',
    cv:         'Career',
    blog:       'Blog',
    wyse:       'Dell WMS',
    shop:       'Shop',
    menu_open:  'Open menu',
    menu_close: 'Close menu',
  },
  hero: {
    badge:         'Groningen, Netherlands',
    title_line1:   'Telecommunications &',
    title_line2:   'IT Infrastructure',
    title_accent:  'Engineer',
    subtitle:
      '15+ years designing, administering, and securing IT infrastructures across Europe and Latin America.',
    cta_primary:   'View career',
    cta_wyse:      'Dell WMS Service',
    scroll:        'Scroll to discover',
  },
  stats: [
    { value: '15+',   label: 'Years of experience' },
    { value: '6',     label: 'European countries' },
    { value: 'ITIL®', label: 'Foundation certified' },
    { value: 'WMS',   label: 'Dell specialist' },
  ],
  about: {
    title: 'Professional profile',
    text:
      'Telecommunications, Connectivity, and Networking Engineer with solid experience in high-pressure environments and a strong ability to adapt to new challenges. Skilled in project management, team collaboration, leadership, and problem-solving.',
    badges: ['ITIL® Foundation', '15+ years', '6 EU countries', 'Dutch resident'],
  },
  skills: {
    title:    'Areas of expertise',
    subtitle: 'Broad technical depth, from Layer 2 to cloud endpoints',
    items: [
      {
        id:   'networking',
        icon: 'network',
        title: 'Networking & Security',
        desc:  'L2/3 switching and routing, VPN, Fortinet & Cisco ASA firewalls, Cisco Meraki, Ubiquiti UniFi, Mikrotik, structured cabling CAT5/6/7.',
        tags:  ['Fortinet', 'Cisco ASA', 'Meraki', 'UniFi', 'Mikrotik', 'VPN'],
      },
      {
        id:   'sysadmin',
        icon: 'server',
        title: 'Systems Administration',
        desc:  'Windows Server 2012–2019 (AD, GPO, DNS, DHCP, IIS). Linux CentOS/Debian/RedHat: IPTables, Squid, monitoring with Nagios, Zabbix, Checkmk.',
        tags:  ['Windows Server', 'Active Directory', 'Linux', 'Nagios', 'Zabbix'],
      },
      {
        id:   'cloud',
        icon: 'cloud',
        title: 'Virtualization & Cloud',
        desc:  'VMware, Hyper-V, Oracle VM and Amazon Web Services. Office 365 administration: user accounts, licenses, and policy configuration.',
        tags:  ['VMware', 'Hyper-V', 'AWS', 'Office 365', 'Oracle VM'],
      },
      {
        id:   'endpoint',
        icon: 'endpoint',
        title: 'Endpoint Management',
        desc:  'Dell Wyse Management Suite (WMS) for centralized Thin Client deployment and VDI. SOTI MobiControl MDM for Android enterprise. Zebra Technologies.',
        tags:  ['Dell WMS', 'SOTI MDM', 'Zebra', 'VDI', 'Thin Clients'],
      },
    ],
  },
  wyse_cta: {
    badge:    'Core specialty',
    title:    'Dell Wyse Management Suite',
    subtitle: 'Centralized deployment & management of Dell Thin Clients',
    desc:
      'Advisory, implementation, and ongoing support for VDI environments and virtual desktop infrastructure based on Dell Thin Clients. Detailed architecture diagrams, deployment guides, and configuration walkthroughs.',
    button: 'Explore WMS solutions',
    features: [
      'Centralized Thin Client deployment & configuration',
      'VDI infrastructure design and setup',
      'Secure remote access solutions',
      'Architecture diagrams & topology maps',
      'Step-by-step deployment guides',
    ],
  },
  experience: {
    title: 'Professional experience',
    items: [
      {
        role:    'IT Application Support Analyst',
        company: 'ICON Clinical Research',
        country: 'Netherlands',
        period:  'Oct 2025 – Present',
        desc:    'On-site technical support for applications and systems in a highly regulated clinical research environment, ensuring operation, maintenance, compliance, and availability.',
      },
      {
        role:    'IT Administrator',
        company: 'Radial Netherlands B.V.',
        country: 'Netherlands',
        period:  'Apr 2023 – Oct 2025',
        desc:    'Managed and supported IT infrastructure across multiple European locations: Netherlands, Belgium, Germany, Poland, Italy, and the UK.',
      },
      {
        role:    'Network Administrator & Support',
        company: 'ACFCAPITAL S.A.',
        country: 'Chile',
        period:  'May 2019 – Jan 2021',
        desc:    "Managed and maintained the company's network infrastructure. Provided technical support for end users, troubleshooting hardware and software issues.",
      },
      {
        role:    'Network Administrator & Support',
        company: 'Laboratorio Biosano S.A.',
        country: 'Chile',
        period:  'Jan 2014 – May 2019',
        desc:    'Administered local and wide area networks, ensuring continuous uptime. Assisted in server maintenance, backup processes, and system upgrades.',
      },
      {
        role:    'IT Support',
        company: 'Adventist Schools CASS',
        country: 'Chile',
        period:  'Jan 2010 – Jan 2014',
        desc:    'Provided technical support for students and staff in educational environments. Maintained computer labs and network connectivity.',
      },
    ],
  },
  blog: {
    title:        'Blog & Case studies',
    subtitle:     'Technical articles, deployment guides, and field experiences',
    coming_soon:  'Coming soon — first articles in preparation.',
    read_more:    'Read article',
    all_articles: 'View all articles',
  },
  cv: {
    title:          'Professional career',
    download:       'Download CV (PDF)',
    experience:     'Experience',
    education:      'Education',
    skills:         'Skills',
    certifications: 'Certifications',
    references:     'References',
    present:        'Present',
  },
  shop: {
    title:       'Shop',
    subtitle:    'Peripherals, cables, and IT solutions',
    coming_soon: 'Catalog in preparation.',
    view:        'View product',
  },
  footer: {
    tagline: 'Telecommunications · Networking · IT Infrastructure',
    sections: {
      navigation: 'Navigation',
      contact:    'Contact',
    },
    contact: {
      location: 'Groningen, Netherlands',
    },
    copyright: '© {year} Patricio Fabián Parra Galia. All rights reserved.',
    built_with: 'Built with Astro & Tailwind CSS',
  },
  theme: {
    toggle: 'Toggle theme',
    light:  'Light mode',
    dark:   'Dark mode',
  },
  lang: {
    switch_label: 'Cambiar a Español',
  },
  sections: {
    explore_title:    'Explore the site',
    explore_subtitle: 'Everything in one place',
    cv_card_desc:     'Full career timeline, skills, certifications, and PDF download.',
    blog_card_desc:   'Technical guides, case studies, and field experiences.',
    shop_card_desc:   'Peripherals, cables, and IT solutions catalog.',
  },
};

export type Translations = typeof en;
