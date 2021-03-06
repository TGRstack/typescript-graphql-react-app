module.exports = {
  p: {
    default: 'nps build start.build',
    description: 'Build the code and run the build.',
  },
  c: {
    default: 'nps commit',
    description: 'Start a commit!',
  },
  cn: {
    default: 'nps commit.zen.noverify',
    description: 'Skip all pre-commit ops.',
  },
  cr: {
    default: 'nps commit.zen.retry',
    description: 'Retry last commit.',
  },
  l: {
    default: 'nps lint',
    description: 'Run linter.',
  },
  lf: {
    default: 'nps lint.fix',
    description: 'Fix lint errors.',
  },
  t: {
    default: 'nps test',
    description: 'Run tests.',
  },
  tu: {
    default: 'nps test.update',
    description: 'Update test snapshots.',
  },
  tw: {
    default: 'nps test.watch',
    description: 'Run test watcher.',
  },
  type: {
    default: 'nps lint.type',
    description: 'All TypeScript Errors.',
  },
  npmf: {
    default: 'nps npm.audit.fix',
    description: 'Run npm audit fix but then removes package-lock.json',
  },
  // FIXME: w/ a prompt. We don't want to run this accidentally!
  //   https://stackoverflow.com/q/50770212/604950
  // r: {
  //   default: 'nps build release publish',
  //   description: 'Build the code, bump the version, and update git/npm.',
  // },
}