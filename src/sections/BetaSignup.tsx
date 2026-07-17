import { lazy, Suspense, useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { GradientText } from "@/components/primitives/GradientText";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import "./BetaSignup.css";

// The WebGL scene is heavy (Three.js); load it after the copy paints.
const EchoScene = lazy(() =>
  import("@/components/three/EchoScene").then((m) => ({ default: m.EchoScene }))
);

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The new hero and primary focus of the page: a tester-recruitment form.
 * Copy on the left with the signup form, the Echo orb floating on the right —
 * the same two-column composition as the old marketing hero.
 *
 * Submissions POST to Formspree (see site.beta.formEndpoint) so the owner
 * receives each signup by email + in a dashboard; no backend of our own.
 */
export function BetaSignup() {
  const b = site.beta;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();

    // Minimal client-side validation before we bother the network.
    if (!name || !EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(b.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section beta" id="beta">
      <div className="container beta__inner">
        <div className="beta__copy">
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <h1 className="beta__title">
            {b.headlineLead} <GradientText>{b.headlineAccent}</GradientText>
          </h1>
          <p className="beta__sub">{b.sub}</p>

          {status === "success" ? (
            <div className="beta__card beta__success" role="status">
              <h2 className="beta__success-title">
                <GradientText>{b.successTitle}</GradientText>
              </h2>
              <p className="beta__success-body">{b.successBody}</p>
            </div>
          ) : (
            <form className="beta__card beta__form" onSubmit={handleSubmit} noValidate>
              <div className="beta__row">
                <div className="beta__field">
                  <label className="beta__label sr-only" htmlFor="beta-name">
                    {b.fields.name.label}
                  </label>
                  <input
                    className="beta__input"
                    id="beta-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={b.fields.name.placeholder}
                    required
                  />
                </div>

                <div className="beta__field">
                  <label className="beta__label sr-only" htmlFor="beta-device">
                    {b.fields.device.label}
                  </label>
                  <select
                    className="beta__input beta__select"
                    id="beta-device"
                    name="device"
                    defaultValue=""
                  >
                    {b.devices.map((d) => (
                      <option key={d.value} value={d.value} disabled={d.value === ""}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="beta__field">
                <label className="beta__label sr-only" htmlFor="beta-email">
                  {b.fields.email.label}
                </label>
                <input
                  className="beta__input"
                  id="beta-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={b.fields.email.placeholder}
                  required
                />
              </div>

              <div className="beta__field">
                <label className="beta__label sr-only" htmlFor="beta-reason">
                  {b.fields.reason.label}
                </label>
                <textarea
                  className="beta__input beta__textarea"
                  id="beta-reason"
                  name="reason"
                  rows={3}
                  placeholder={b.fields.reason.placeholder}
                />
              </div>

              {status === "error" && (
                <p className="beta__error" role="alert">
                  {b.errorBody}
                </p>
              )}

              <Button
                as="button"
                type="submit"
                variant="solid"
                size="lg"
                className="beta__submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? b.submittingLabel : b.submitLabel}
              </Button>

              <p className="beta__note">{b.note}</p>
            </form>
          )}
        </div>

        <div className="beta__visual">
          <Suspense fallback={<div className="beta__visual-fallback" />}>
            <EchoScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
