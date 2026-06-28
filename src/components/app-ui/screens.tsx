import "./screens.css";

/**
 * Recreated in-app screens, using the app's own tight type sizes
 * (page headers ~17-22px, card titles ~16px, body 12-14px, nav 9px).
 * These are HTML/CSS, not screenshots, so they stay crisp at any size
 * and match the brand tokens exactly.
 *
 * NOTE: panels inside use a single light-glass style — never nested
 * blur — and the status/tab bars use the solid surface color.
 */

function StatusBar() {
  return (
    <div className="appx__status" aria-hidden="true">
      <span>9:41</span>
      <span className="appx__status-icons">
        <i /> <i /> <b />
      </span>
    </div>
  );
}

export function JournalScreen() {
  return (
    <div className="appx">
      <StatusBar />
      <div className="appx__body">
        <header className="appx__head">
          <p className="appx__eyebrow">Friday · June 28</p>
          <h3 className="appx__title">Today's page</h3>
        </header>

        <div className="appx__panel appx__entry">
          <p className="appx__entry-time">Written 11:58 PM</p>
          <p className="appx__entry-text">
            Big presentation went better than I feared. I keep bracing for
            things that turn out fine. Want to remember this one.
          </p>
        </div>

        <div className="appx__panel appx__prompt">
          <span className="appx__dot" />
          <p>
            <b>Echo</b> noticed a pattern across 4 entries. Tap to talk it
            through.
          </p>
        </div>

        <div className="appx__goals">
          <p className="appx__section-label">In view</p>
          <div className="appx__chip-row">
            <span className="appx__chip appx__chip--on">Be kinder to myself</span>
            <span className="appx__chip">Call family weekly</span>
          </div>
        </div>

        <div className="appx__composer">
          <span className="appx__composer-text">Write what's there…</span>
          <span className="appx__send" aria-hidden="true">
            ↑
          </span>
        </div>
      </div>

      <TabBar active="journal" />
    </div>
  );
}

export function EchoChatScreen() {
  return (
    <div className="appx">
      <StatusBar />
      <div className="appx__body">
        <header className="appx__head appx__head--chat">
          <span className="appx__avatar" aria-hidden="true" />
          <div>
            <h3 className="appx__title appx__title--sm">Echo</h3>
            <p className="appx__eyebrow appx__eyebrow--live">reading you back</p>
          </div>
        </header>

        <div className="appx__thread">
          <div className="appx__msg appx__msg--in">
            You wrote three weeks ago that you wanted to call your brother. You
            did. That mattered to you.
          </div>
          <div className="appx__msg appx__msg--out">
            I forgot I even wrote that.
          </div>
          <div className="appx__msg appx__msg--in">
            It might be worth holding onto today, on a heavier day. What felt
            different after that call?
          </div>
          <div className="appx__typing" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="appx__composer">
          <span className="appx__composer-text">Say something to Echo…</span>
          <span className="appx__mic" aria-hidden="true">
            ◉
          </span>
        </div>
      </div>

      <TabBar active="echo" />
    </div>
  );
}

function TabBar({ active }: { active: "journal" | "echo" }) {
  const tabs: { id: "journal" | "echo" | "you"; label: string }[] = [
    { id: "journal", label: "Journal" },
    { id: "echo", label: "Echo" },
    { id: "you", label: "You" },
  ];
  return (
    <nav className="appx__tabs" aria-hidden="true">
      {tabs.map((t) => (
        <span
          key={t.id}
          className={`appx__tab ${t.id === active ? "is-active" : ""}`}
        >
          <i className="appx__tab-dot" />
          {t.label}
        </span>
      ))}
    </nav>
  );
}
