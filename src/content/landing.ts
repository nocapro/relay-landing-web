export const hero = {
  title: "Relaycode",
  subtitle: "A CLI tool that turns any LLM answer into real code.",
};

export const showcase = {
  title: "One command, zero surprises",
  command: "relay watch",
  workflow: [
    "Copy the LLM’s patch",
    "Relaycode writes, tests, lints",
    "You approve or roll back",
  ],
  footer: "Nothing lands broken, nothing is hidden.",
};

export const problem = {
  title: "Why it exists",
  description: "I got tired of copy-pasting code, forgetting to add tests, and breaking main. Relaycode automates the boring parts while keeping me in full control.",
};

export const companion = {
  title: "Repomix companion",
  description: "Use **Repomix** to pack your entire repo into one AI-friendly file, then let **Relaycode** apply the edits exactly where they belong. No manual file juggling, no merge hell.",
};

export const install = {
  title: "Install & go",
  steps: [
    "bun install -g relaycode",
    "cd your-project && relay init",
  ],
};

export const webVersion = {
  title: "Want the web version?",
  description: "If you love this workflow, head to https://www.noca.pro for the full web app: same atomic safety, plus repo-wide visual Drag-and-Drop context, history, and rollback from any browser.",
  link: "https://www.noca.pro",
};

export const faq = {
  title: "FAQ",
  items: [
    {
      question: "Why not an agentic AI loop?",
      answer: "Agent loops are great until they decide to restructure your project at 2 a.m. Relaycode keeps the AI on a short leash: it can only change what you explicitly paste, nothing more. One clipboard copy, one atomic transaction, zero surprises.",
    },
    {
      question: "Does it abuse free LLM tiers?",
      answer: "No. The tool is built to help solo devs work faster, not to exploit anyone’s free tier. Use Google AI Studio (or any other LLM) within the limits they publish—Relaycode doesn’t batch, loop, or automate extra calls behind your back. One clipboard copy equals one human-triggered request, nothing more.",
    },
  ],
};

export const finalCta = {
  title: "Ship features, not chores.",
};
