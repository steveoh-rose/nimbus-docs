# Contributing

A design system is never complete and it depends on community contributions for it to grow.
Read this page to learn how you can contribute.

## Table of contents

- 🙋‍♀️ [Participation](#participation)
- 💻 [Contribution](#contribution)
- 🧱 [Code changes](#code-changes)
- 🚀 [Releasing a new version](#-releasing-a-new-version)

## Participation

We want open lines of communication between the design system and the teams consuming it. Join the [#nimbus](https://consoleconnect.slack.com/archives/CMAV1497S) in Slack so you can:

- Ask a question to the design system team (💡 you can use `@team-nimbus` in the channel to reach us).
- Get notified of updates and releases
- Provide feedback, suggestions or ideas

## Contribution

The Nimbus design system is the result of community contributions. Depending on the type of contributions, there are slight changes in process that will help us maintain the quality of the design system.

### 🐞Fixes

Bugs, erroneous Figma library, or mistakes in documentations are things that we want fixed quickly.

- If you have access and capacity to fix we encourage you to go ahead and fix them. Just make sure you also notify `@team-nimbus` at any point.
- If you don't have access or capacity to fix, get in touch and we'll take it from there.

### 🛠️ Small contributions

Small contributions refer to changes in the design system that don't introduce breaking changes and the changes can be confined to minimise impact across the design system. These are things such as:

- adding or modifiying icons to the existing icon library
- changing documentations (e.g Readme, docs for usage of a lib or cli usage)
- all changes regarding tests (adding new or changing existing ones)

The key things to keep in mind when contribution minor enhancements are:

1. Involve `@team-nimbus` as early as possible
2. Make sure one of the design system team in included in the review process, before the contribution is finalised.

### 🏗️ Large contributions

Large contributions refer to changes that will have an impact across code, design and guidelines, and therefore will require coordination across different teams or functions.
Examples of what we consider large contributions include, but not limited to:

- New components or patterns
- Adding a new feature to an existing component (e.g new Props, new variants, change in behaviour)
- Architectural changes
- Other potentially breaking changes

Before you begin making large contributions please reach out to `@team-nimbus` in our [#nimbus](https://consoleconnect.slack.com/archives/CMAV1497S) channel.
Our priority is to empower teams to deliver value faster, so to avoid being a bottleneck we'd love to be involved so we can guide you through the process.

## Contributing new components

There is considerable work required to normalise and agree on a component.
Components in Nimbus - in particular the **Core** components - are intended for wide consumption, and because of it we want to ensure Nimbus components are high-quality and reliable.

To be considered for inclusion in the design system, we make use of the **selection** and **development** criteria.

### Selection criteria

These are the criteria we’ll use when assessing whether or not a component belongs in the library. Not all criteria need to be met.

| **Criteria**       | **Description**                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| **Unique**         | It does not replicate the form and function of an existing component unless otherwise specified.               |
| **Shared need**    | There is evidence the component is functionally used by many teams or products or features.                    |
| **Building block** | The component is a building block (e.g. button) that can’t be broken down any further or it loses its meaning. |
| **Worthwhile**     | The design team agrees it should exist in “core” and there is a need to maintain the component long term.      |

### Development criteria

Once a component has met the design criteria and is being developed, these are criteria we’ll use to assess if it’s ready to be published.

| **Criteria**     | **Description**                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Reusable**     | The way the component has been developed is versatile enough that it can be used in a range of different contexts or services. |
| **Consistent**   | It adheres to the design language and follows the coding standards for Nimbus components.                                      |
| **Aligned**      | The component as it exists in code and design tools align as much as possible on the visual style and component's API.         |
| **Maintainable** | The component has been developed in a way that is easy to understand and makes change easy.                                    |
| **Documented**   | Design and developer documentation has been created to meet modern standards where relevant.                                   |

<br />

## Code changes

If your contributions require making changes to the codebase, please have a look at the guidelines below.

### ⚙️ Setup the project

See [running locally](./?path=/docs/getting-started-welcome--docs#local-installation-developing-nimbus)

### 📖 Storybook

See [using storybook](./?path=/docs/getting-started-using-storybook--docs#using-storybook)

### 💻 Pull request & issues

Pull requests need the 👍 of two or more collaborators to be merged.

#### Commit convention

Before you create a Pull Request, please check whether your commits or your PR title complies with the commit conventions used in this repository.

When you create a merge commit (defaults to the PR title). We kindly ask you to follow the convention `category(scope or module): message` in your commit message while using one of the following categories:

> ⚠️ Because we use `semantic-release`, certain keywords in the commit message will trigger a relase.

- `feat`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above categories
- Additionally: breaking changes must contain a footer that contains `BREAKING CHANGE:` in order to increment major version.

#### Pull requests

- When we give our PR titles we like to use the same conventions as the semantic release, this is because the default for a merge commit is the title. For example e.g. `fix/jk-563-accordion-hook` would become: **fix: JK-563 Make Accordion Hook**.
- Fill out the PR template available to the best of your ability.
- When you submit a PR and add the PR to the [#exp-cc-engineering](<[#](https://consoleconnect.slack.com/archives/C02J32LAKRD)>) channel in Slack with some details about what your PR is about.

### 🚀 Releasing a new version

Releases are handled by the Jenkins pipeline "WP - nimbus-ui" whenever a PR gets merged in main. The CI pipeline will automatically build and publish a new version of this package, based on merged commit messages.

Examples:

- the commit message `"feat: added more colors"` will trigger a minor release
- the commit message `"fix: corrected padding"` will trigger a patch release
- the commit message footer must contain `"BREAKING CHANGE:` with a description of the change, which will trigger a major release
- the commit message `"added some stuff"` will not trigger any release, because it does not comply to commit conventions set by semantic-release. Sometimes, no release is created by design, depending on the commit type. For example "chore: refactor component" will not generate a release but `fix: corrected padding` will.

In rare cases, we need to trigger a manual release. To trigger a manual release you can:

```bash
npm run build
npm version patch|minor|major
npm publish
git push
git push --tags
```
