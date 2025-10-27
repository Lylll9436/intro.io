import cvFile from '../cv/cv.pdf?url';

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

type ResearchProject = {
  period: string;
  title: string;
  affiliation: string;
  role: string;
  highlights: string[];
};

type Publication = {
  title: string;
  venue: string;
  status: string;
  summary: string;
};

const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'lyl_arch@seu.edu.cn', href: 'mailto:lyl_arch@seu.edu.cn' },
  { label: 'Location', value: 'Nanjing, Jiangsu, China' },
];

const focusAreas = [
  'Urban Analytics',
  'Digital Twin',
  'Graph Neural Networks',
  'Multimodal Fusion',
  'Large Language Models',
];

const technicalExpertise = [
  'Python · Deep Learning · Graph Neural Networks',
  'GIS (QGIS / ArcGIS) and Remote Sensing',
  'Knowledge Graph Modelling and Semantic Reasoning',
  'Urban Multimodal Data Integration and Prediction',
];

const languages = ['Mandarin Chinese (native)', 'English (fluent)'];

const education: EducationItem[] = [
  {
    period: 'Sep 2023 – Jun 2026 (expected)',
    school: 'Southeast University, Nanjing',
    degree: 'M.Arch in Urban Design · GPA 3.7 / 4.0',
    details:
      'Relevant coursework: Programming Fundamentals for Architecture, Big Data Methods in Urban Planning, Urban Big Data Analytics, Digital Technology in Historic Environments.',
  },
  {
    period: 'Sep 2018 – Jun 2023',
    school: 'Shandong Jianzhu University, Jinan',
    degree: 'B.Arch in Architecture · GPA 3.3 / 4.0',
    details: 'Relevant coursework: Advanced Mathematics, Computer Fundamentals.',
  },
];

const researchProjects: ResearchProject[] = [
  {
    period: 'Nov 2024 – Present',
    title: 'National Key R&D Program of China: City-scale Green Performance Model Automation',
    affiliation: 'Graduate Research Assistant',
    role: 'Designing system architecture and integrating multimodal optimisation models that support large-scale urban performance analysis.',
    highlights: [
      'Constructed an LLM-augmented urban knowledge graph to harmonise heterogeneous spatial and environmental datasets.',
      'Trained graph neural networks on the knowledge graph to extract node-level representations for performance prediction and optimisation.',
      'Delivered the initial framework and data preprocessing pipeline; currently tuning models for city-scale reliability.',
    ],
  },
  {
    period: 'Nov 2024',
    title: 'SAM-GPT Semantic Enhancement Framework for Street-view Imagery Analysis',
    affiliation: 'Independent Research',
    role: 'Investigated LLM inaccuracies in street-scene localisation and proposed a multimodal remedy.',
    highlights: [
      'Introduced SAM panoptic segmentation masks as spatial priors to guide large language models.',
      'Recorded a marked improvement in object description accuracy; the framework supports a forthcoming presentation at the Architectural Society of China 2025 Annual Conference.',
    ],
  },
  {
    period: 'Apr 2024 – Present',
    title: 'Master’s Thesis: Multimodal Fusion for Urban Carbon Emission Simulation – Nanjing Case Study',
    affiliation: 'Supervised by Prof. Yu Zhang',
    role: 'Developing an interpretable multimodal architecture for city-scale carbon emission forecasting.',
    highlights: [
      'Integrates meteorological time series, remote sensing imagery, and statistical data with attention-based fusion.',
      'Completed data acquisition and system blueprint; implementing attention modules and end-to-end training.',
    ],
  },
];

const publications: Publication[] = [
  {
    title:
      'Decoding the 24-hour City: A Cross-domain Impact Prediction Framework Integrating Knowledge Graphs and Graph Neural Networks',
    venue: '59th ISOCARP World Planning Congress · Riyadh, Saudi Arabia · 2025',
    status: 'Oral presentation · forthcoming',
    summary:
      'Combines knowledge graph construction with semantic-aware GNNs to integrate remote sensing, GIS, and energy datasets; delivers ~20% accuracy gain in cross-sector impact forecasting.',
  },
  {
    title: 'From Pixels to Predicates: Structuring Urban Perception with Scene Graphs',
    venue: '31st International Conference of CAADRIA · 2026',
    status: 'Abstract accepted · full paper submitted',
    summary:
      'Transforms street-view imagery into relational data through scene graphs and a heterogeneous graph autoencoder; uncovers safety perception patterns and demonstrates inter-city transferability.',
  },
  {
    title:
      'Chinese Superblocks Regeneration: Street Network Learning with an Edge-centred Unsupervised Graph Neural Network',
    venue: '31st International Conference of CAADRIA · 2026',
    status: 'Abstract accepted',
    summary:
      'Proposes a self-supervised GNN pipeline over 7,000 street segments across seven Chinese cities, identifying four structural street types to guide regeneration strategies.',
  },
  {
    title:
      'Research on Regional Urban Development Level Based on Club Convergence: The Yangtze River Delta Urban Agglomeration',
    venue: 'China Urban Planning Annual Conference · 2024',
    status: 'Published',
    summary:
      'Applies Markov transition and spatial Markov chain analysis to reveal divergent development trajectories and highlight “poverty trap” risks in western subregions.',
  },
];

const academicActivities = [
  '2025 · DigitalFutures Workshop – Habitat Representation: Graph Neural Networks for Urban Examination and Urban Design, Tongji University',
  '2024 · Southeast University – University of Pennsylvania Joint Summer Workshop',
  '2023 · DigitalFutures Workshop – Computational Design with Shape Grammar, Tongji University',
  '2024 · First Prize · University-level Regional Planning and Design Project – Shunde Village Redevelopment',
  '2023 & 2024 · Academic Merit Scholarship, Southeast University',
  '2023 · Outstanding Bachelor’s Thesis Award, Shandong Jianzhu University',
];

const App = () => (
  <div className="page">
    <header className="site-header">
      <div>
        <span className="site-subtitle">Curriculum Vitae</span>
        <h1 className="site-title">Yunlong Liu</h1>
        <p className="site-role">Graduate Researcher in Urban Data Intelligence · Southeast University</p>
      </div>
      <div className="header-actions">
        <a className="download-btn" href={cvFile} target="_blank" rel="noreferrer">
          Download Full CV (PDF)
        </a>
      </div>
    </header>

    <main className="layout">
      <aside className="side-panel">
        <div className="monogram" aria-hidden="true">
          <span>YL</span>
        </div>
        <div className="side-group">
          <h2>Contact</h2>
          <ul>
            {contactLinks.map((link) => (
              <li key={link.label}>
                <span className="label">{link.label}</span>
                {link.href ? (
                  <a href={link.href}>{link.value}</a>
                ) : (
                  <span className="value">{link.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="side-group">
          <h2>Research Interests</h2>
          <ul>
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="side-group">
          <h2>Technical Focus</h2>
          <ul>
            {technicalExpertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="side-group">
          <h2>Languages</h2>
          <ul>
            {languages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="content">
        <section id="profile">
          <h2>Profile</h2>
          <p>
            Graduate student specialising in data-driven urban design and planning. My research focuses on building
            interpretable pipelines that link environmental sensing, semantic representation, and machine learning to
            support decision-making for complex urban systems.
          </p>
          <p>
            I bridge multimodal data with knowledge graphs, graph neural networks, and large language models to deliver
            holistic solutions spanning data acquisition, analysis, and policy insight. Current efforts emphasise urban
            performance optimisation, carbon emission simulation, and street-level perception analysis.
          </p>
        </section>

        <section id="education">
          <h2>Education</h2>
          {education.map((item) => (
            <article key={item.school} className="entry">
              <div className="entry-period">{item.period}</div>
              <div>
                <h3>{item.school}</h3>
                <p className="entry-role">{item.degree}</p>
                <p>{item.details}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="research">
          <h2>Research Experience</h2>
          {researchProjects.map((project) => (
            <article key={project.title} className="entry">
              <div className="entry-period">{project.period}</div>
              <div>
                <h3>{project.title}</h3>
                <p className="entry-role">
                  {project.affiliation} · {project.role}
                </p>
                <ul className="highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section id="publications">
          <h2>Publications & Presentations</h2>
          <ol className="list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <strong>{publication.title}</strong>
                <p className="meta">{publication.venue}</p>
                <p className="status">{publication.status}</p>
                <p>{publication.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="activities">
          <h2>Academic Activities & Honours</h2>
          <ul className="list">
            {academicActivities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <h2>Collaboration Outlook</h2>
          <p>
            I welcome collaboration on urban data analytics, graph learning for planning practice, multimodal knowledge
            graph construction, and carbon emission modelling. Opportunities related to workshops, consulting, or joint
            research are of particular interest.
          </p>
          <a className="download-btn" href={cvFile} target="_blank" rel="noreferrer">
            Download Full CV (PDF)
          </a>
        </section>
      </div>
    </main>

    <footer className="site-footer">
      © {new Date().getFullYear()} Yunlong Liu · Advancing data-informed urban intelligence
    </footer>
  </div>
);

export default App;
