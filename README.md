# eslint-config-teleology

## Installation 

```
npx install-peerdeps --dev eslint-config-teleology
```

## Configuration

Create an `.eslintrc.js` file in the root of your node project. In it write the following:

```javascript
module.exports = {
  extends: ['teleology'],
};
```

## React Support

```javascript
module.exports = {
  extends: ['teleology/react'],
};
```

## Scripts

You can now add these two scripts to your package.json to run lint locally.
```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

### Changelog

**1.0.8**
- Added Solid-JS support (extends React)