# git-bump-cli

[![npm](https://img.shields.io/npm/v/@gableroux/git-bump)](https://www.npmjs.com/package/@gableroux/git-bump)
[![Travis](https://img.shields.io/travis/com/gableroux/git-bump-cli)](https://travis-ci.com/GabLeRoux/git-bump-cli)
[![npm](https://img.shields.io/npm/l/@gableroux/git-bump)](LICENSE.md)

bump git tags following semver and nothing more

## Installation

```bash
npm i -g @gableroux/git-bump
```

## Usage

```bash
git bump
```

```
        _ _     _
   __ _(_) |_  | |__  _   _ _ __ ___  _ __
  / _` | | __| | '_ \| | | | '_ ` _ \| '_ \
 | (_| | | |_  | |_) | |_| | | | | | | |_) |
  \__, |_|\__| |_.__/ \__,_|_| |_| |_| .__/
  |___/                              |_|
? Select what you desire (Use arrow keys)
  major
  premajor
  minor
  preminor
❯ patch
  prepatch
  prerelease
```

```
Successfully fetched tags
Latest tag: v1.0.0
next tag: v1.0.1
Successfully added tag v1.0.1
```

## Usage (TODO)

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

## How to publish

```bash
npm i -g np
np
```

Nope, I'm not eating own dog food here. This project is only intended to interact with `git` command line.

## License

[MIT](LICENSE.md) © [Gabriel Le Breton](https://gableroux.com)
