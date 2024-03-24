# Bug repro for minification breaking some JS.

See `index.html`. TLDR, the minification is breaking something. It's on the JS file.

Since minification is disabled entirely for debug builds, you'll need to run

```bash
trunk serve --open --release
```

or similar to reproduce the bug.
