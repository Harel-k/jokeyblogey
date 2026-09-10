# JokeyBlogey — one-time setup

## Recommended free setup

Use a public GitHub repository named:

`jokeyblogey`

GitHub Pages can host the site for free.

## 1. Update the username once

Open `_config.yml`.

Replace:

`Harel-k`

with your real GitHub username.

If your repository is NOT named `jokeyblogey`, also change:

`baseurl: "/jokeyblogey"`

to match the repository name.

## 2. Upload this entire project

Upload all files and folders to the root of the repository.

Important folders beginning with `_`, such as `_layouts` and `_jokes`, must stay exactly as named.

## 3. Enable GitHub Pages

Repository → Settings → Pages

Choose a publishing source for the `main` branch/root directory.

GitHub Pages/Jekyll will build the site when you commit changes.

## 4. Google Search Console — only once for the whole site

Create a URL-prefix property for the public JokeyBlogey URL.

If Google gives you HTML-tag verification:

1. Copy only the value inside `content="..."`.
2. Paste that value into `_config.yml` here:

   `google_site_verification: "PASTE_VALUE_HERE"`

3. Commit.
4. Wait for the site build to finish.
5. Press Verify in Search Console.

You do NOT need to verify each joke separately.

## 5. Submit the sitemap once

Submit:

`https://Harel-k.github.io/jokeyblogey/sitemap.xml`

in Search Console → Sitemaps.

Because the sitemap is generated from the `_jokes` collection, new joke URLs are added automatically.

## 6. Adding future jokes

Read `NEW_JOKE_TEMPLATE.md`.

For every new joke, you only create ONE new Markdown file inside `_jokes`.

No new HTML page.
No new sitemap editing.
No new Search Console property.
No repeated site setup.

You may optionally inspect/request indexing for an important new joke URL in Search Console,
but Google still decides whether and when to index it.
