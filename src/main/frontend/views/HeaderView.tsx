import { RocketLogo } from "Frontend/components/RocketLogo"

export function HeaderView() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <RocketLogo style={{ marginRight: '0.75rem', height: '2.5rem' }} />
          <h1><span className="logo-primary">to</span><span className="logo-secondary">do</span></h1>
        </div>
      </div>
    </header>
  );
}
