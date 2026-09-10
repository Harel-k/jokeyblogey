# Add a new JokeyBlogey joke

Create a new file inside the `_jokes` folder.

Use a short filename made from the joke, for example:

`my-toaster-joined-a-band.md`

Then paste this:

```md
---
title: "PUT THE EXACT WEIRD QUESTION HERE"
description: "A short natural description of this joke page."
emoji: "🤪"
category: "Internet Nonsense"
answer: "PUT THE CANONICAL FUNNY ANSWER HERE"
---

## What happened?

Write a few genuinely readable/funny sentences here.

## What should I do?

Add more of the joke answer or fake instructions here.

## Reality check

Make it clear if the subject could otherwise be mistaken for real medical, legal, financial, safety, or other serious advice.
```

Commit the file.

That is it.

Jekyll automatically creates the joke page, the homepage automatically lists it,
the search box automatically finds it, the Random Joke buttons can open it, and
`sitemap.xml` automatically includes it.
