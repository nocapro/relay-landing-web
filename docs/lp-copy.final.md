Relaycode
A CLI tool that turns any LLM answer into real code—built by Arman for solo devs.

---

One command, zero surprises
```bash
relay watch
```
Copy the LLM’s patch → Relaycode writes, tests, lints → you approve or roll back. Nothing lands broken, nothing is hidden.

---

### Why it exists
I got tired of copy-pasting code, forgetting to add tests, and breaking main.
Relaycode automates the boring parts while keeping me in full control.
___

Repomix companion
Use **Repomix** to pack your entire repo into one AI-friendly file, then let **Relaycode** apply the edits exactly where they belong. No manual file juggling, no merge hell.

---

Install & go
```bash
bun install -g relaycode
cd your-project && relay init
```

---

Want the web version?
If you love this workflow, head to https://www.noca.pro for the full web app: same atomic safety, plus repo-wide visual Drag-and-Drop context, history, and rollback from any browser.

---

FAQ
Q: Why not an agentic AI loop?
A: Agent loops are great until they decide to restructure your project at 2 a.m.
Relaycode keeps the AI on a short leash: it can only change what you explicitly paste, nothing more. One clipboard copy, one atomic transaction, zero surprises.

Q: Does it abuse free LLM tiers?
A:  No. The tool is built to help solo devs work faster, not to exploit anyone’s free tier. Use Google AI Studio (or any other LLM) within the limits they publish—Relaycode doesn’t batch, loop, or automate extra calls behind your back. One clipboard copy equals one human-triggered request, nothing more.

---

Ship features, not chores.
