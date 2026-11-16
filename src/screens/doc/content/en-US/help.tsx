import { Link } from "@/components/Link";

export const title = "Help · Broto";

export const description = "Common questions about analyses, credits, watering reminders and your Broto account.";

export function Body() {
  return (
    <>
      <h1>Help</h1>

      <p className="intro">The questions that come up most. If yours is not here, write to <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a>.</p>

      <h2>How the analysis works</h2>
      <p>You photograph the plant and that is it — the app asks nothing beforehand. The photo goes to a vision model that returns the species, how to care for it, and, when something is wrong, a ranked list of likely causes with a test you can run at home to find out which one it is.</p>

      <h3>Why is there more than one cause?</h3>
      <p>Because the same yellow leaf means opposite things depending on context: watered yesterday and yellowing is overwatering; two weeks without water and yellowing is the opposite. Instead of filling you with questions first, the app ranks the causes by likelihood and explains how to tell them apart.</p>

      <h3>What is “How to confirm”?</h3>
      <p>The test that breaks the tie. For example: push your finger three centimetres into the soil — if it comes out damp, it is overwatering, not fungus. Sometimes it asks you to turn a leaf over and look underneath, which is where mealybugs and spider mites live.</p>

      <h3>It did not recognise the species</h3>
      <p>A close-up of a sick leaf sometimes does not show enough to identify the plant. In those cases we would rather say we do not know than guess wrong. Photograph the whole plant and try again.</p>

      <h3>The photo came out bad — did I lose an analysis?</h3>
      <p>No. When we cannot read your photo, the credit returns to you automatically and we say so on screen.</p>

      <h2>Analyses and credits</h2>

      <h3>How many analyses do I have?</h3>
      <p>For the <strong>first 3 days</strong> after sign-up you try Broto with no card and no charge. You get up to <strong>10 analyses</strong> and <strong>50 messages</strong> with Brotinho in total, and reminders for every care task work.</p>
      <p>When the trial ends and you have not subscribed, saving plants, marking them watered and getting the watering reminder stay free. Analysis, Brotinho and the other reminders stop.</p>
      <p>The complete subscription costs <strong>R$ 13.00 a month</strong> or <strong>R$ 120.00 a year</strong>, which works out at R$ 10.00 a month. It gives up to <strong>40 analyses a month</strong> and <strong>150 messages a month</strong> with Brotinho, with a limit of 50 analyses and 30 messages per day.</p>

      <h2>Brotinho</h2>

      <h3>What does it answer?</h3>
      <p>Plant care questions. It can see the data of the plants you have saved, so you can ask about one of them directly. What it will not do: pesticide dosages, or whether a plant is edible.</p>

      <h3>I ran out of messages</h3>
      <p>The trial has <strong>50 in total</strong>. The complete subscription has <strong>150 a month</strong>, with a limit of 30 per day, renewed on the 1st.</p>

      <h2>Watering reminders</h2>

      <h3>The reminder arrived late</h3>
      <p>On Android, battery saving can delay notifications by a few minutes — that is a system limitation. To reduce it, exempt Broto in your device's battery optimisation settings.</p>

      <h3>I get no reminders at all</h3>
      <p>Check that notification permission is enabled in your device settings, and that the reminder is on both globally and for that specific plant, under <strong>Profile → Notifications</strong>.</p>

      <h3>The time is wrong</h3>
      <p>Reminders use the time zone saved in your profile. If you moved country, update it under <strong>Profile → Edit profile</strong>.</p>

      <h2>Account and data</h2>

      <h3>How do I delete my account?</h3>
      <p>Under <strong>Profile → Delete my account</strong>. The full walkthrough, and what happens to each piece of data, is in <Link href="/en/delete-account">Delete account and data</Link>.</p>

      <h3>I changed phones — do I lose my plants?</h3>
      <p>No. Everything is saved to your account. Sign in with the same login on the new device and your plants will be there.</p>

      <h3>I forgot my password</h3>
      <p>On the email sign-in screen, tap “I forgot my password”. The reset link arrives in your inbox.</p>

      <h2>Talk to us</h2>
      <p>Write to <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a>. We answer within 3 business days. For a technical problem, include the app version and your device model — the “Help and contact” button inside the app fills that in for you.</p>
    </>
  );
}
