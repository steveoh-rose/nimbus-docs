# Wiring nimbus-ui → this docs site

This file is **instructions for you to apply by hand** in the `ConsoleConnect/nimbus-ui`
repo. Nothing in this session touched that repo — no clone, no branch, no PR.
This docs repo's own [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)
already listens for the event described below (`repository_dispatch` with
type `nimbus-ui-updated`); the piece described here is the *sender* that
needs to live in `nimbus-ui` itself.

## 1. Create a token nimbus-ui can use to notify this repo

1. In GitHub, go to **Settings → Developer settings → Personal access tokens
   → Fine-grained tokens → Generate new token**.
2. Resource owner: `ConsoleConnect`. Repository access: **only select
   repositories** → pick this docs repo (once it exists on GitHub).
3. Permissions → Repository permissions → **Contents: Read and write**
   (this is what the `repository_dispatch` API requires — there's no more
   narrowly-scoped permission for it).
4. Generate the token and copy it — you won't see it again.

## 2. Add it as a secret on `nimbus-ui`

In `ConsoleConnect/nimbus-ui` → **Settings → Secrets and variables → Actions
→ New repository secret**:

- Name: `NIMBUS_DOCS_DISPATCH_TOKEN`
- Value: the token from step 1

## 3. Add a small workflow to `nimbus-ui`

Add this file as `.github/workflows/notify-docs.yml` in the `nimbus-ui`
repo. Replace `ConsoleConnect/REPLACE_WITH_DOCS_REPO_NAME` with this docs
site's actual `owner/repo` once it's created.

```yaml
name: Notify docs site

on:
  release:
    types: [published]
  # If you'd rather rebuild docs on every merge to main instead of only on
  # tagged releases, use this instead of `release`:
  # push:
  #   branches: [main]

jobs:
  dispatch:
    runs-on: ubuntu-latest
    steps:
      - name: Send repository_dispatch to docs repo
        run: |
          curl -sSf -X POST \
            -H "Accept: application/vnd.github+json" \
            -H "Authorization: Bearer ${{ secrets.NIMBUS_DOCS_DISPATCH_TOKEN }}" \
            -H "X-GitHub-Api-Version: 2022-11-28" \
            https://api.github.com/repos/ConsoleConnect/REPLACE_WITH_DOCS_REPO_NAME/dispatches \
            -d '{"event_type":"nimbus-ui-updated"}'
```

## 4. Confirm it end-to-end

1. Cut a release in `nimbus-ui` (or push to `main`, if you used the push
   trigger).
2. Check the **Actions** tab on `nimbus-ui` — `Notify docs site` should run
   and succeed.
3. Check the **Actions** tab on the docs repo — `Deploy docs to GitHub
   Pages` should have started automatically, triggered by the
   `repository_dispatch` event.

## Why this wasn't done automatically

`nimbus-ui` is a separate private repo. Modifying it — even to add a small
notify-only workflow — is the kind of cross-repo change that gets proposed
and confirmed explicitly rather than applied silently as a side effect of
building this docs site.
