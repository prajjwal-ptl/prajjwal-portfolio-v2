import { useEffect, useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

const projects = [
  { title: 'LeadFlow', tag: 'AI • CRM', text: 'Lead qualification and workflow dashboard concept with a clean operator-first experience.', metric: '92% workflow clarity' },
  { title: 'Portfolio OS', tag: 'UI/UX', text: 'A personal command center that turns projects, skills and proof-of-work into a recruiter-friendly story.', metric: '3D interaction layer' },
  { title: 'Growth Lab', tag: 'Marketing', text: 'Campaign thinking, content systems and conversion-focused experiments presented as a visual workspace.', metric: '12 experiment ideas' },
  { title: 'SalesPulse', tag: 'Business', text: 'A sales pipeline concept for tracking leads, follow-ups, priority and conversion signals.', metric: 'Pipeline visibility' },
  { title: 'CampaignOS', tag: 'Growth', text: 'A campaign planning workspace connecting audience, message, creative and measurement.', metric: 'End-to-end planning' },
  { title: 'AI Resume Studio', tag: 'AI • Product', text: 'A concept for turning raw experience into structured, recruiter-friendly application assets.', metric: 'Recruiter-first UX' },
  { title: 'ClientDesk', tag: 'UI/UX', text: 'A lightweight client communication dashboard concept focused on briefs, tasks and status.', metric: 'Clear handoffs' },
  { title: 'ContentPilot', tag: 'AI • Growth', text: 'An AI-assisted content workflow from idea capture to publishing checklist and iteration.', metric: 'Content workflow' },
  { title: 'Landing Lab', tag: 'Web', text: 'Conversion-oriented landing page experiments exploring hierarchy, CTA placement and visual storytelling.', metric: 'Conversion thinking' },
  { title: 'WebAudit', tag: 'Web', text: 'A diagnostic concept for reviewing usability, responsiveness, SEO basics and interaction quality.', metric: 'UX audit framework' },
  { title: 'IdeaForge', tag: 'Product', text: 'A rapid product ideation board for turning vague problems into testable feature concepts.', metric: 'Fast prototyping' },
  { title: 'RecruiterView', tag: 'UI/UX', text: 'A hiring-oriented portfolio interface designed around the questions recruiters actually need answered.', metric: '30-second scan' },
]

const capabilities = [
  ['01', 'Growth & Marketing', 'Campaign thinking · Content · Conversion'],
  ['02', 'Business Development', 'Lead research · Client communication · Sales thinking'],
  ['03', 'UI/UX & Web', 'Wireframes · Responsive UI · HTML/CSS/JS'],
  ['04', 'AI Workflows', 'Prompt design · Workflow automation · Product ideation'],
]

function Orb({ className = '' }: { className?: string }) { return <div className={`orb ${className}`} aria-hidden="true"><span /><i /><b /></div> }

function Home() {
  const [active, setActive] = useState('Overview')
  const [aiOpen, setAiOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState('All')
  useEffect(() => setMounted(true), [])
  const stats = useMemo(() => [['12', 'Portfolio concepts'], ['04', 'Core capabilities'], ['01', 'AI studio'], ['30s', 'Recruiter scan']], [])
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tag.includes(filter))
  const generate = () => { if (!prompt.trim()) return; setResult(`For “${prompt.trim()}”, I’d build a focused workflow: define the audience → map the user journey → prototype the highest-impact screen → test one measurable outcome → iterate.`) }

  return <main className="site-shell"><div className="grain" />
    <nav className="nav glass"><a className="brand" href="#top"><span className="brand-dot" />PRAJJWAL<span className="muted">/PTL</span></a><div className="nav-links">{['Overview','Work','Skills','Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className={active===item?'active':''} onClick={()=>setActive(item)}>{item}</a>)}</div><button className="ai-nav" onClick={()=>setAiOpen(true)}><span>✦</span> AI Studio</button></nav>

    <section id="top" className="hero section-grid">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR OPPORTUNITIES <span className="slash">/</span> BHOPAL, INDIA</div>
        <div className="hero-kicker"><span>PORTFOLIO 02.0</span><span>BUILT FOR RECRUITERS</span></div>
        <h1>Not just a portfolio.<br /><em>A product about me.</em></h1>
        <p className="hero-text">B.Tech CSE fresher blending <strong>growth, business development, UI/UX and web technology</strong> into practical digital experiences — with an AI-first, builder mindset.</p>
        <div className="role-chips"><span>Digital Growth</span><span>Business Development</span><span>UI/UX</span><span>Web</span></div>
        <div className="hero-actions"><a href="#work" className="primary">Explore selected work <span>↗</span></a><button className="secondary" onClick={()=>setAiOpen(true)}>Ask my AI <span>✦</span></button></div>
        <div className="mini-proof"><span>●</span> Open to internships & entry-level roles <b>•</b> Digital / Growth / BD / Web</div>
      </div>
      <div className="hero-visual"><div className="visual-card glass">
        <div className="card-top"><span>01 / DIGITAL PROFILE</span><span>LIVE</span></div><Orb/>
        <div className="orbit-label one">STRATEGY</div><div className="orbit-label two">DESIGN</div><div className="orbit-label three">BUILD</div>
        <div className="profile-float glass"><span className="tiny-dot"/><div><b>Prajjwal Patel</b><small>Digital Growth × Technology</small></div></div>
        <div className="hero-signal glass"><span>FOCUS</span><strong>Ideas → Systems → Outcomes</strong></div>
        <div className="scroll-hint">DRAG THE ENERGY <span>↘</span></div>
      </div></div>
    </section>

    <section className="ticker"><div>UI/UX <span>✦</span> DIGITAL GROWTH <span>✦</span> BUSINESS DEVELOPMENT <span>✦</span> WEB TECHNOLOGY <span>✦</span> AI WORKFLOWS <span>✦</span> PRODUCT THINKING <span>✦</span> UI/UX <span>✦</span></div></section>

    <section className="recruiter-strip section-grid">
      <div className="scan-card glass"><span className="kicker">/ 10-SECOND SNAPSHOT</span><h3>What a recruiter should know <em>before scrolling.</em></h3><p>Computer Science graduate • practical project builder • comfortable across business + technology • actively looking for the right first opportunity.</p></div>
      <div className="scan-points"><div><span>01</span><strong>Think</strong><small>Problem → user → outcome</small></div><div><span>02</span><strong>Design</strong><small>Clear interfaces & flows</small></div><div><span>03</span><strong>Build</strong><small>Web + AI prototypes</small></div></div>
    </section>

    <section id="overview" className="section overview"><div className="section-head"><div><span className="kicker">/ 01 — PROFILE</span><h2>A fresher with a <em>builder's</em> mindset.</h2></div><p>I enjoy turning ambiguous problems into clear interfaces, workflows and experiments that people can actually use.</p></div><div className="stats">{stats.map(([n,l])=><div className="stat glass" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

    <section id="work" className="section"><div className="section-head"><div><span className="kicker">/ 02 — SELECTED WORK</span><h2>Projects that show<br/><em>how I think.</em></h2></div><span className="count">{String(filtered.length).padStart(2,'0')} / 12</span></div>
      <div className="filter-row">{['All','AI','UI/UX','Growth','Web'].map(item=><button key={item} className={filter===item?'filter active-filter':'filter'} onClick={()=>setFilter(item)}>{item}</button>)}</div>
      <div className="projects">{filtered.map((p,i)=><article className="project glass" key={p.title}><div className="project-no">{String(i+1).padStart(2,'0')}</div><div className="project-main"><div className="project-meta"><span className="project-tag">{p.tag}</span><span className="status">CONCEPT</span></div><h3>{p.title}</h3><p>{p.text}</p><span className="metric">↗ {p.metric}</span></div><div className="project-art"><div className={`art-grid art-${i%3}`}><span/><span/><span/><span/></div><span className="arrow">↗</span></div></article>)}</div>
    </section>

    <section className="proof section-grid"><div className="proof-head"><span className="kicker">/ WHY THIS PORTFOLIO</span><h2>Designed to answer the<br/><em>hiring questions.</em></h2></div><div className="proof-grid"><div className="proof-card glass"><span>01</span><h3>Can he think?</h3><p>Projects show problem framing, audience awareness and workflow thinking — not only visuals.</p></div><div className="proof-card glass"><span>02</span><h3>Can he build?</h3><p>Web projects demonstrate responsive UI, interaction design and practical technical execution.</p></div><div className="proof-card glass"><span>03</span><h3>Can he grow?</h3><p>Growth and BD concepts show curiosity about leads, campaigns, conversion and communication.</p></div><div className="proof-card glass"><span>04</span><h3>Can he adapt?</h3><p>AI workflows show experimentation with modern tools without pretending concepts are client work.</p></div></div></section>

    <section id="skills" className="section skills"><div className="section-head"><div><span className="kicker">/ 03 — CAPABILITIES</span><h2>Where strategy meets<br/><em>execution.</em></h2></div></div><div className="skill-grid">{capabilities.map(([n,t,d])=><div className="skill glass" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></div>)}</div></section>

    <section className="tool-stack section-grid"><div className="tool-copy"><span className="kicker">/ TOOLBOX</span><h2>Modern tools.<br/><em>Practical use.</em></h2><p>I use tools to speed up thinking and execution — not to replace the thinking itself.</p></div><div className="tool-orbit glass"><div className="tool-core">STACK<br/><small>2026</small></div>{['HTML/CSS','JavaScript','GitHub','Figma','AI Tools','Analytics','Canva','Prompting'].map((x,i)=><span key={x} className={`tool-node node-${i}`}>{x}</span>)}</div></section>

    <section className="ai-section section"><div className="ai-panel glass"><div><span className="kicker">/ AI STUDIO</span><h2>Your portfolio,<br/><em>with a copilot.</em></h2><p>Use the interactive AI concept to turn a rough idea into a structured product or growth workflow.</p><button className="primary" onClick={()=>setAiOpen(true)}>Open AI Studio ✦</button></div><Orb className="small-orb"/><div className="ai-terminal"><span>AI / WORKFLOW ENGINE</span><code>01 DEFINE<br/>02 MAP<br/>03 BUILD<br/>04 ITERATE</code></div></div></section>

    <section id="contact" className="section contact"><span className="kicker">/ 04 — NEXT MOVE</span><h2>Let's make something<br/><em>worth remembering.</em></h2><p>For opportunities, collaborations or a conversation about digital growth and technology.</p><div className="contact-actions"><a className="primary" href="mailto:hello@prajjwalpatel.dev">Start a conversation ↗</a><a className="secondary" href="https://github.com/prajjwal-ptl" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>

    <footer><span>© 2026 PRAJJWAL PATEL</span><span>BUILT WITH CURIOSITY <b>✦</b></span><span>BHOPAL / INDIA</span></footer>

    {aiOpen&&<div className="modal-backdrop" onClick={()=>setAiOpen(false)}><div className="ai-modal glass" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setAiOpen(false)}>×</button><span className="kicker">/ GENERATIVE AI CONCEPT</span><h2>Build an idea.</h2><p>Describe a project, campaign or product problem. This demo copilot will structure the first workflow for you.</p><textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="e.g. Create a lead generation campaign for a B2B startup..."/><button className="primary" onClick={generate}>Generate workflow ✦</button>{result&&<div className="ai-result"><span>AI OUTPUT</span><p>{result}</p></div>}</div></div>}
    {!mounted&&<div className="loading"/>}
  </main>
}
