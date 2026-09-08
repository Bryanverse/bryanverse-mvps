const metrics = [
  ["Returns in workflow", "1,284"],
  ["Active offices", "42"],
  ["Open compliance flags", "17"],
  ["Agent tasks today", "8,941"],
];

const activity = [
  { agent: "Document Parser", action: "Classified taxpayer upload", level: "GREEN" },
  { agent: "Compliance Reviewer", action: "Flagged unusual Schedule C deduction", level: "YELLOW" },
  { agent: "ERO Assistant", action: "Prepared filing packet for signoff", level: "RED" },
  { agent: "Revenue Agent", action: "Qualified franchise prospect", level: "GREEN" },
];

export default function HomePage() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">IntelliTax Cloud <small>Enterprise OS</small></div>
        <nav className="nav">
          <a href="#">Command Center</a>
          <a href="#">Tax Operations</a>
          <a href="#">Compliance</a>
          <a href="#">Filings</a>
          <a href="#">Revenue & Sales</a>
          <a href="#">Academy</a>
          <a href="#">Marketplace</a>
          <a href="#">Creative Studio</a>
          <a href="#">System Governance</a>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <div className="eyebrow">National Operations Command</div>
            <h1>IntelliTax Cloud OS</h1>
            <p className="muted">AI-operated tax enterprise with governed human oversight.</p>
          </div>
          <span className="status green">SYSTEM HEALTHY</span>
        </header>

        <section className="grid">
          {metrics.map(([label, value]) => (
            <div className="card" key={label}>
              <div className="muted">{label}</div>
              <div className="metric">{value}</div>
            </div>
          ))}
        </section>

        <section className="section">
          <div className="card">
            <div className="eyebrow">Agent Operations</div>
            <h2>Live governed activity</h2>
            <div className="activity">
              {activity.map((item) => (
                <div className="activity-item" key={`${item.agent}-${item.action}`}>
                  <div><strong>{item.agent}</strong><div className="muted">{item.action}</div></div>
                  <span className={`status ${item.level.toLowerCase()}`}>{item.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="eyebrow">Human Oversight</div>
            <h2>Approval queue</h2>
            <p className="muted">Yellow and Red actions stop here until an authorized reviewer acts.</p>
            <div className="activity">
              <div className="activity-item"><div><strong>8 Yellow</strong><div className="muted">Review required</div></div><span className="status yellow">PENDING</span></div>
              <div className="activity-item"><div><strong>3 Red</strong><div className="muted">Mandatory signoff</div></div><span className="status red">BLOCKED</span></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
