# Troubleshooting — Stage 7: Connect to GitHub

## Common Errors

### `fatal: remote origin already exists`

**Cause:** You already added a remote named `origin`, probably in an earlier attempt.

**Fix:** Either remove and re-add — `git remote remove origin` then `git remote add origin <url>` — or update in place: `git remote set-url origin <url>`.

### The GitHub repo has a README I did not ask for

**Cause:** You checked "Add a README file" when creating the repo on GitHub.

**Fix:** Easiest — delete the repo on GitHub (Settings → Danger zone → Delete) and recreate it with all checkboxes off. Or learn `git pull --rebase` in Stage 8 and work through the conflict.

### I do not remember my GitHub username

**Fix:** Go to github.com while logged in. Your username appears in the top-right menu and in your profile URL.

### I do not know which URL to use, HTTPS or SSH

**Fix:** Use HTTPS for this tutorial — it is the default and works without extra setup. SSH is nicer once you do it, but it requires generating and uploading an SSH key first. That is outside the scope of this tutorial.

## FAQ

### Can I have more than one remote?

Yes. You might have `origin` (GitHub) and `backup` (a second host) at the same time. `git push origin main` and `git push backup main` would send the same commits to both.

### Does `origin` have to be named `origin`?

No. It is just a conventional name for "the main remote." You could call it `github`, `upstream`, or anything else. Sticking with `origin` makes your commands match what most tutorials and teams expect.

### Is the remote URL sensitive?

No. A repo URL is public-ish. What is sensitive is your personal access token (if you use HTTPS) or your SSH private key. Never share those.

### Why doesn't `git remote add` upload anything?

Because it only stores a bookmark. Adding a remote is a local operation — Git never contacts the URL until you explicitly run `git fetch`, `git pull`, or `git push`.
