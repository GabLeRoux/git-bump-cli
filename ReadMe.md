# git-bump-cli

[![npm](https://img.shields.io/npm/v/@gableroux/git-bump)](https://www.npmjs.com/package/@gableroux/git-bump)
[![Travis](https://img.shields.io/travis/com/gableroux/git-bump-cli)](https://travis-ci.com/GabLeRoux/git-bump-cli)
[![npm](https://img.shields.io/npm/l/@gableroux/git-bump)](LICENSE.md)

Bump latest git tag following [semver](https://semver.org/) and nothing more.

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
❯ patch
  minor
  major
  prepatch
  preminor
  premajor
  prerelease
```

```
Successfully fetched tags
Latest tag: v1.0.0
next tag: v1.0.1
Successfully added tag v1.0.1
```

## What this is not

This command line does not aim to replace nice tools such as [`sindresorhus/np`](https://github.com/sindresorhus/np) (which I totally recommend if you're using node). `@gableroux/git-bump` won't update `package.json` for you, nor publish to `npm` or whatever package manager you're using. It is only aimed to bump latest git tag locally. :+1:

## How to publish

```bash
npm i -g np
np
```

Nope, I'm not eating own dog food here. This project is only intended to interact with `git` command line.

## License

[MIT](LICENSE.md) © [Gabriel Le Breton](https://gableroux.com)
