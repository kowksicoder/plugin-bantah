# Eliza Plugin Registry Checklist

This is the operational checklist for getting `@elizaos/plugin-bantah` into the Eliza plugin ecosystem.

## Current registry format

Target registry:

```text
https://github.com/elizaos-plugins/registry
```

The current registry expects a simple mapping in `index.json`:

```json
{
  "@elizaos/plugin-bantah": "github:kowksicoder/plugin-bantah"
}
```

## Before publish

1. Confirm the final public Bantah endpoint examples in the README
2. Ensure the GitHub repo has topic:
   - `elizaos-plugins`
3. Ensure repo branding assets are present:
   - `images/logo.jpg`
   - `images/banner.jpg`
4. Publish to npm

## Registry PR

Suggested PR title:

```text
feat: add @elizaos/plugin-bantah to registry
```
