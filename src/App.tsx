import cvFile from '../cv/cv.pdf?url';

type NavLink = {
  label: string;
  href: string;
};

type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

type EducationItem = {
  period: string;
  school: string;
  degree: string;
  details: string;
};

type CapabilityColumn = {
  title: string;
  items: string[];
};

type ResearchStatus = 'CURRENT' | 'UPCOMING' | 'ARCHIVED';

type ResearchProject = {
  period: string;
  title: string;
  affiliation: string;
  role: string;
  highlights: string[];
  status: ResearchStatus;
};

type Publication = {
  title: string;
  venue: string;
  status: string;
  summary: string;
};

const navLinks: NavLink[] = [
  { label: 'Overview', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Publications', href: '#publications' },
  { label: 'Collaboration', href: '#contact' },
];

const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'lyl_arch@seu.edu.cn', href: 'mailto:lyl_arch@seu.edu.cn' },
  { label: 'Location', value: 'Nanjing, Jiangsu, China' },
];

const focusAreas = [
  'Urban Analytics',
  'Digital Twin Systems',
  'Graph Neural Networks',
  'Multimodal Fusion',
  'Large Language Models',
];

const technicalExpertise = [
  'Python / Deep Learning / Graph Neural Networks',
  'GIS (QGIS, ArcGIS) and Remote Sensing',
  'Knowledge Graph Modeling and Semantic Reasoning',
  'Urban Multimodal Data Integration and Prediction',
];

const languages = ['Mandarin Chinese (native)', 'English (fluent)'];

const capabilityColumns: CapabilityColumn[] = [
  { title: 'Focus Areas', items: focusAreas },
  { title: 'Technical Stack', items: technicalExpertise },
  { title: 'Languages', items: languages },
];

const education: EducationItem[] = [
  {
    period: 'Sep 2023 - Jun 2026 (expected)',
    school: 'Southeast University, Nanjing',
    degree: 'M.Arch in Urban Design, GPA 3.7 / 4.0',
    details:
      'Coursework includes programming for architecture, big data methods, urban data analytics, and digital technology for historic environments.',
  },
  {
    period: 'Sep 2018 - Jun 2023',
    school: 'Shandong Jianzhu University, Jinan',
    degree: 'B.Arch in Architecture, GPA 3.3 / 4.0',
    details: 'Coursework includes advanced mathematics and computer fundamentals.',
  },
];

const researchProjects: ResearchProject[] = [
  {
    period: 'Nov 2024 - Present',
    title: 'City-scale Green Performance Model Automation',
    affiliation: 'National Key R&D Program of China',
    role: 'Graduate Research Assistant',
    highlights: [
      'Built an LLM-augmented urban knowledge graph to harmonise spatial and environmental datasets.',
      'Trained graph neural networks on the graph to deliver node-level predictions for performance optimisation.',
      'Delivered the initial system architecture and data pipeline; tuning models for city-scale reliability.',
    ],
    status: 'CURRENT',
  },
  {
    period: 'Nov 2024',
    title: 'SAM-GPT for Street-view Semantic Enhancement',
    affiliation: 'Independent Research',
    role: 'Research Lead',
    highlights: [
      'Injected SAM panoptic segmentation as spatial priors to guide large language models.',
      'Improved localisation accuracy for street-scene narratives; preparing for Architectural Society of China 2025.',
    ],
    status: 'UPCOMING',
  },
  {
    period: 'Apr 2024 - Present',
    title: 'Multimodal Fusion for Urban Carbon Simulation',
    affiliation: 'Master Thesis, Southeast University',
    role: 'Principal Investigator',
    highlights: [
      'Designing an interpretable fusion pipeline for meteorology, remote sensing, and statistical data.',
      'Implementing attention modules and end-to-end training for reliable carbon forecasting.',
    ],
    status: 'UPCOMING',
  },
];

const publications: Publication[] = [
  {
    title:
      'Decoding the 24-hour City: A Cross-domain Impact Prediction Framework Integrating Knowledge Graphs and GNNs',
    venue: '59th ISOCARP World Planning Congress, Riyadh, 2025',
    status: 'Oral presentation (forthcoming)',
    summary:
      'Combines knowledge graph construction with semantic-aware GNNs to integrate remote sensing, GIS, and energy datasets, delivering a 20% accuracy gain in cross-sector forecasting.',
  },
  {
    title: 'From Pixels to Predicates: Structuring Urban Perception with Scene Graphs',
    venue: '31st International Conference of CAADRIA, 2026',
    status: 'Abstract accepted, full paper submitted',
    summary:
      'Transforms street-view imagery into relational data through scene graphs and a heterogeneous graph autoencoder, revealing safety perception patterns with inter-city transferability.',
  },
  {
    title: 'Chinese Superblocks Regeneration: Street Network Learning with an Edge-centred Unsupervised GNN',
    venue: '31st International Conference of CAADRIA, 2026',
    status: 'Abstract accepted',
    summary:
      'Introduces a self-supervised GNN over 7,000 street segments to identify structural street types and recommend regeneration strategies.',
  },
  {
    title:
      'Regional Urban Development Level Based on Club Convergence: The Yangtze River Delta Urban Agglomeration',
    venue: 'China Urban Planning Annual Conference, 2024',
    status: 'Published',
    summary:
      'Applies Markov transition analysis to reveal divergent development trajectories and highlight poverty-trap risks in western subregions.',
  },
];

const academicActivities = [
  '2025 DigitalFutures Workshop, Habitat Representation: Graph Neural Networks for Urban Design, Tongji University',
  '2024 Southeast University and University of Pennsylvania Joint Summer Workshop',
  '2023 DigitalFutures Workshop, Computational Design with Shape Grammar, Tongji University',
  '2024 First Prize, University-level Regional Planning and Design Project, Shunde Village Redevelopment',
  '2023 and 2024 Academic Merit Scholarship, Southeast University',
  "2023 Outstanding Bachelor's Thesis Award, Shandong Jianzhu University",
];

const rosterLabels = [
  'URBAN ANALYTICS',
  'GRAPH MODELS',
  'CARBON SIMULATION',
  'CITY DIGITAL TWIN',
  'MULTIMODAL FUSION',
  'KNOWLEDGE GRAPHS',
  'DATA STORYTELLING',
];

const heroHeadline = ['DATA-FORWARD', 'URBAN', 'MODERNISM.'];

const heroSecondary =
  'Bridging multimodal sensing, graph intelligence, and narrative strategy to build resilient urban systems.';

const App = () => {
  const quickFacts: ContactLink[] = [
    { ...contactLinks[0] },
    { ...contactLinks[1] },
    { label: 'Languages', value: languages.join(' / ') },
  ];

  return (
    <div className="page dark-surface">
      <header className="hero" id="about">
        <div className="hero-bar">
          <span className="hero-tag">YUNLONG LIU / URBAN DATA ARCHITECT</span>
          <nav className="hero-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <h1 className="hero-title">
          {heroHeadline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <p className="hero-lead">
          Graduate researcher specialising in data-informed urban design, building interpretable intelligence pipelines
          for carbon, mobility, and perception challenges.
        </p>
        <p className="hero-secondary">{heroSecondary}</p>

        <div className="hero-meta">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="hero-meta-item">
              <span className="meta-label">{fact.label}</span>
              {fact.href ? (
                <a href={fact.href}>{fact.value}</a>
              ) : (
                <span>{fact.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a className="hero-button" href={cvFile} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a className="hero-link" href="#contact">
            Open to collaboration -&gt;
          </a>
        </div>
      </header>

      <main className="content-grid">
        <section className="spotlight-section" id="research">
          <div className="section-heading">
            <span className="section-eyebrow">Research Programmes</span>
            <div className="section-title">
              <h2>Active And Upcoming Experiments</h2>
              <p>
                Edge-to-cloud toolchains for sustainable cities, connecting sensing infrastructure with predictive and
                generative intelligence.
              </p>
            </div>
          </div>

          <div className="project-grid">
            {researchProjects.map((project) => (
              <article key={project.title} className={`project-card status-${project.status.toLowerCase()}`}>
                <div className="card-header">
                  <span className="status-badge">{project.status}</span>
                  <span className="card-period">{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="card-role">
                  {project.affiliation} / {project.role}
                </p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="capability-section" id="capabilities">
          <div className="section-heading">
            <span className="section-eyebrow">Systems And Craft</span>
            <div className="section-title">
              <h2>Toolkits In Rotation</h2>
              <p>
                Methods that intertwine scientific rigour, spatial insight, and human interpretation for measurable
                urban impact.
              </p>
            </div>
          </div>

          <div className="capability-grid">
            {capabilityColumns.map((column) => (
              <div key={column.title} className="capability-column">
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="timeline-section" id="background">
          <div className="section-heading">
            <span className="section-eyebrow">Foundations</span>
            <div className="section-title">
              <h2>Education And Formation</h2>
              <p>
                Cross-disciplinary training spanning architecture, computation, and planning theory underpins every
                project.
              </p>
            </div>
          </div>

          <div className="timeline-grid">
            {education.map((item) => (
              <article key={item.school} className="timeline-card">
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.school}</h3>
                  <p className="timeline-degree">{item.degree}</p>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="publication-section" id="publications">
          <div className="section-heading">
            <span className="section-eyebrow">Discourse</span>
            <div className="section-title">
              <h2>Selected Publications</h2>
              <p>Translating experiments into conferences and journals that shape urban technology debate.</p>
            </div>
          </div>

          <ol className="publication-list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <div className="publication-meta">
                  <span className="status-badge">{publication.status}</span>
                  <span className="publication-venue">{publication.venue}</span>
                </div>
                <h3>{publication.title}</h3>
                <p>{publication.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="activity-section" id="activities">
          <div className="section-heading">
            <span className="section-eyebrow">Community</span>
            <div className="section-title">
              <h2>Workshops And Honours</h2>
              <p>Learning and sharing in global studios, technical fellowships, and award programmes.</p>
            </div>
          </div>

          <ul className="activity-list">
            {academicActivities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </section>

        <section className="collaboration-section" id="contact">
          <div className="section-heading">
            <span className="section-eyebrow">Collaboration</span>
            <div className="section-title">
              <h2>Co-create The Next Urban Prototype</h2>
              <p>
                Keen to partner on research residencies, experimental studios, or data infrastructure for complex city
                questions.
              </p>
            </div>
          </div>

          <div className="collaboration-grid">
            <div className="collaboration-note">
              <p>
                I work across full-stack analytics, spatial computing, and narrative storytelling to make future urban
                transitions understandable. Let us build platforms that align policy, technology, and lived experience.
              </p>
            </div>
            <ul className="contact-links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <span>{link.label}</span>
                  {link.href ? (
                    <a href={link.href}>{link.value}</a>
                  ) : (
                    <span>{link.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <a className="hero-button ghost" href={cvFile} target="_blank" rel="noreferrer">
              Download Full Portfolio
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-roster">
          {rosterLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <p className="footer-note">
          (c) {new Date().getFullYear()} Yunlong Liu // Advancing data-informed urban intelligence.
        </p>
      </footer>
    </div>
  );
};

export default App;
