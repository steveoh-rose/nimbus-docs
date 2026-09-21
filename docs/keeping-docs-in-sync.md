# Keeping the docs in sync

This site is generated from three private repos. Their source is vendored into
`src/nimbus/` by `npm run sync` (see [README](../README.md)), and the site is
deployed by Vercel on every push to `main`.

`.github/workflows/sync-nimbus.yml` automates the vendoring: it checks out the
three repos, builds tokens + icons, runs `npm run sync`, verifies `npm run build`,
and commits any change to `main`. Vercel redeploys from that push.

It runs on a weekday schedule, on manual dispatch, and on a
`repository_dispatch` event of type `nimbus-updated`.

## One-time setup in this repo

1. Create a fine-grained personal access token with **Contents: Read** on
   `ConsoleConnect/nimbus-ui`, `ConsoleConnect/cc-design-tokens` and
   `ConsoleConnect/nimbus-assets`.
2. Add it here as the Actions secret `NIMBUS_READ_TOKEN`.

## Optional: sync immediately when a source repo changes

Nothing in the source repos has been modified. If you want syncs to happen right
after a release instead of waiting for the schedule, add this to a workflow in
each source repo (for example on `release: published`). The token needs
**Contents: Read and write** on this docs repo, stored as `NIMBUS_DOCS_DISPATCH_TOKEN`.

```yaml
- name: Notify docs
  run: |
    curl -sSf -X POST \
      -H "Accept: application/vnd.github+json" \
      -H "Authorization: Bearer ${{ secrets.NIMBUS_DOCS_DISPATCH_TOKEN }}" \
      https://api.github.com/repos/<owner>/nimbus-docs/dispatches \
      -d '{"event_type":"nimbus-updated"}'
```
