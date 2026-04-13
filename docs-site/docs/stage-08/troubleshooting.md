# Troubleshooting — Stage 8: Push to GitHub

## Common Errors

### `fatal: Authentication failed`

**Cause:** You typed your GitHub account password instead of a personal access token.

**Fix:** Create a PAT as described in the walkthrough and use it as the password. On macOS, you can store it in Keychain so you only enter it once.

### `error: failed to push some refs ... Updates were rejected because the remote contains work that you do not have locally`

**Cause:** The GitHub repo is not empty. Usually because you checked "Add README" when creating the repo.

**Fix:** Easiest path — delete the GitHub repo and recreate it empty. Or pull first: `git pull origin main --allow-unrelated-histories`, resolve the merge, then push.

### `fatal: The current branch main has no upstream branch`

**Cause:** You ran `git push` without `-u origin main` the first time, and tracking was never set up.

**Fix:** Run `git push -u origin main` once. After that, `git push` alone will work.

### `Repository not found`

**Cause:** Typo in the remote URL, or the repo is private and you are not authenticated as the owner.

**Fix:** Run `git remote -v` to see the URL. Compare it character by character with the URL on your GitHub page. Use `git remote set-url origin <correct-url>` to fix.

## FAQ

### Is pushing the same as committing?

No. Committing saves a version locally. Pushing uploads those local commits to a remote. You can commit many times and push all of them at once.

### Can I push other branches?

Yes. Every branch can be pushed independently: `git push -u origin dark-theme`, for example. Each branch gets its own upstream the first time you push with `-u`.

### Does pushing send my entire project every time?

No. Git only sends the commits the remote does not have yet. After the first push, subsequent pushes are tiny — just the new commits.

### Can I see the webpage live on the internet?

Yes — but GitHub does not serve HTML files as a website automatically. You would need to enable **GitHub Pages** in the repo settings. That is outside this tutorial, but it is a nice follow-up: Settings → Pages → Source: main branch.
