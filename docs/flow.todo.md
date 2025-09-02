the right youtube to embed is https://www.youtube.com/watch?v=Io9HT3D5wgU
make it play only on click, do not autoplay

===

real example of relay watch is below so please make the demo in hero animated to a real

```
Starting clipboard watcher (polling every 2000ms)
Configuration file watching is enabled for relay.config.json.
New clipboard content detected. Attempting to parse...
Clipboard content is not a valid relaycode patch. Ignoring.
New clipboard content detected. Attempting to parse...
Valid patch detected for project 'relay-landing-web'. Processing...
🚀 Starting transaction for patch 486a43e7-7edb-4d43-9842-8877990089f2...
Reasoning:
  ok, let's build this thing. dark mode, slick animations, hacker vibes. got it. i'll spin up the components, wire up the content, and make it look portfolio-ready.
  first, i'll create a content file to keep the copy separate from the components. clean code is good code.
  next, i'll create all the section components for the landing page. each will live in its own file under `src/components/landing/`.
  now, let's assemble them in `LandingPage.tsx`.
  the boilerplate is missing a 404 page component, which `App.tsx` imports. i'll create a minimal one to prevent build errors.
  finally, let's update `vite.config.ts` to include all the new landing components in the manual chunk for better optimization.
  ship it.
  - Staged changes to .pending.yml file.
  - Applying file operations...
  - File operations complete.
✔ Written: src/content/landing.ts (+57, -0)
✔ Written: src/components/landing/Header.tsx (+28, -0)
✔ Written: src/components/landing/Hero.tsx (+44, -0)
✔ Written: src/components/landing/Solution.tsx (+19, -0)
✔ Written: src/components/landing/Demo.tsx (+24, -0)
✔ Written: src/components/landing/Problem.tsx (+19, -0)
✔ Written: src/components/landing/Roadmap.tsx (+26, -0)
✔ Written: src/components/landing/WhoFor.tsx (+15, -0)
✔ Written: src/components/landing/FAQ.tsx (+25, -0)
✔ Written: src/components/landing/CTA.tsx (+42, -0)
✔ Written: src/components/landing/Footer.tsx (+18, -0)
✔ Written: src/pages/LandingPage.tsx (+45, -1)
✔ Written: src/pages/NotFoundPage.tsx (+15, -0)
✔ Written: vite.config.ts (+4, -1)

Pre-flight summary:
Lines changed: +381, -2
Checks completed in 68.89ms
  - Final linter error count: 0
```
==== DONE

1. this is the logo of repomix and noca. also this is the profil pic of arman and twitter of arman https://go.noca.pro/x-arman
  https://repomix.com/images/repomix-logo.svg
  https://www.noca.pro/logo.svg
  https://pbs.twimg.com/profile_images/1961594429338472448/OOzuAD7h_400x400.jpg

2. the url for this landing is relay.noca.pro

==== DONE

1. improve hero by showing Demo.tsx
2. logo postioning in header is bad also the logo is bad

==== DONE

1. header and bottom footer is so ugly. do magic
2. show discord and github in header not ask to go to web version,links https://go.noca.pro/relaycode-discord https://go.noca.pro/relaycoder-cli-github
3. add demo video (youtube)

==== DONE

above dir structure is boilerplate

now

read docs/lp-copy.final.md and use it as is to finish the landing using bun react vite tailwind shadcn. make sure the UI is amazing as personal portfolio.
