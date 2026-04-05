# NPM Publish Checklist

This is the last-mile checklist for publishing `@elizaos/plugin-bantah`.

## Pre-publish checks

1. Confirm final repository URL
2. Confirm `package.json` version
3. Confirm `README.md` install instructions
4. Confirm `images/logo.jpg` and `images/banner.jpg` exist
5. Confirm `npm whoami`
6. Run:

```bash
npm install
npm run build
```

## Publish command

```bash
npm publish --access public
```

## Post-publish verification

1. Open npm package page
2. Verify README renders correctly
3. Verify package includes:
   - `dist`
   - `README.md`
   - `images`
4. Install-test in a clean Eliza project:

```bash
npm install @elizaos/plugin-bantah
```
