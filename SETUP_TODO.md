# ⚠️ Setup TODO — before the tester signup form works

The landing page collects beta testers via a form, but it needs **one manual
step** before those signups actually reach you. Until you do this, submitting
the form shows an error message.

## The one thing you must do: connect Formspree

1. Go to **https://formspree.io** and sign up (free — up to 50 submissions/month).
2. Create a **new form** (give it a name like "Nuvyel testers"). Use the email
   you want signups delivered to.
3. Formspree gives you an **endpoint URL** that looks like:
   ```
   https://formspree.io/f/abcdwxyz
   ```
4. Open **`src/content/site.ts`**, find the `beta` block, and replace the
   placeholder in `formEndpoint`:
   ```ts
   // before
   formEndpoint: "https://formspree.io/f/XXXXXXXX",
   // after (your real ID)
   formEndpoint: "https://formspree.io/f/abcdwxyz",
   ```
5. Save. Submit the form once yourself to test — the entry should appear in your
   Formspree dashboard and arrive by email. (Formspree may ask you to confirm
   your address the first time.)

That's it. From then on, every tester who signs up lands in your Formspree
inbox + dashboard (which you can export as CSV) so you can email them back.

## Where the collected info goes
Each signup sends: **name, email, device (iOS/Android/Both), and their "why".**
All of it shows up in the Formspree submission.

---

### Optional / nice-to-have (not required)
- The repo folder is still named `echome-landing` while the product is **Nuvyel**
  — purely cosmetic, rename whenever you like.
- Unused marketing sections (Showcase, Stats, About, Community, Contact, FinalCTA)
  are still in `src/sections/` but no longer shown. Delete them if you want a
  cleaner repo — just say the word.
- To **replay the intro animation** while testing: open the browser console and
  run `localStorage.removeItem("nuvyel_intro_seen")`, then reload.
