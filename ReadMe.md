# git-bump-cli

bump git tags following semver and nothing more

## Installation

```bash
npm i -g @gableroux/git-bump-cli
```

## Usage

```bash
git bump
```

This will bump **the right most value** of your latest git tag.  
Ex: v1.0.0 -> v1.0.1

```bash
git bump patch
```

This will bump **the patch value** of your latest git tag.  
Ex: v1.0.0 -> v1.0.1

```bash
git bump minor
```

This will bump **the minor value** of your latest git tag.  
Ex: v1.0.0 -> v1.1.0

```bash
git bump major
```

This will bump **the major value** of your latest git tag.  
Ex: v1.0.0 -> v2.0.0

## Todo

- [ ] fetch all tags before running the command
- [ ] Support release client versions such as `v1.0.0rc1`

## License

[MIT](LICENSE.md) © [Gabriel Le Breton](https://gableroux.com)

