# Welcome to Glitch Kibbitz's website!

By luck or choice, you've landed on the repo containing the [Glitch Kibbitz website](https://glitchkibbitz.com/).

This website was built with [Lektor](https://www.getlektor.com/).

## Development

1. [Download Lektor](https://www.getlektor.com/downloads/) on your local machine.
1. ⚠️ To enable live reloading, you should additionally follow [these instructions](https://github.com/lektor/lektor/issues/453#issuecomment-1465246327) to install a newer version of Lektor. ⚠️
1. Clone this repo.
1. `cd` into the `lektor` directory and run `lektor server -f scss`.

Once Lektor is running, you can use their handy built-in CMS to edit pages. Just click the 📝 icon in the top right corner of each page or navigate to /admin/.

## Deployment

1. [RTFM](https://www.getlektor.com/docs/deployment/)
1. Commit and push all changes
1. `lektor build -f scss && lektor deploy`
