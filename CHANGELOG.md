# @regardio/react

## 0.7.4

### Patch Changes

- fix: generic error in ssr

## 0.7.3

### Patch Changes

- fix: remove lock file

## 0.7.2

### Patch Changes

- Updated dependencies []:
  - @regardio/tailwind@0.3.1

## 0.7.1

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.7.1

## 0.7.0

### Minor Changes

- refactor: typings, inconsistencies, imports

## 0.6.2

### Patch Changes

- Updated dependencies []:
  - @regardio/tailwind@0.3.0

## 0.6.1

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.7.0

## 0.6.0

### Minor Changes

- fix(react): resolve test failures and BaseUI integration issues

  Fixed 28 test failures and eliminated BaseUI warnings across the package.

  ### Field/Input Integration

  - Removed incorrect Field.Control wrapper from Input components
  - BaseUI Input already integrates with Field internally, wrapping caused void element errors
  - Updated field.stories.tsx and form.stories.tsx (all Input usages)
  - Fixed Checkbox and textarea usage (removed Field.Control wrapper)
  - Updated Field HorizontalLayout story to use Field.Root for proper context

  ### Component Tests

  - Toggle: Added data-testid attributes to avoid button ambiguity in Storybook
  - Toggle: Fixed data-pressed attribute expectations (empty string vs true)
  - IconButton: Added data-testid attributes for unique identification
  - Fieldset: Added data-testid to prevent duplicate text matches
  - Field.Error: Added match={true} prop to force error visibility

  ### Button Component

  - Added nativeButton={false} prop when using render prop with non-button elements
  - Fixed Button test and AsLink story to follow BaseUI pattern
  - Eliminated BaseUI warnings about non-native button rendering

  ### Test Results

  - All 280 tests passing (36 test files)
  - Zero test failures
  - No BaseUI warnings
  - 87.5% code coverage maintained

  Files changed:
  - src/field/field.stories.tsx
  - src/field/field.test.tsx
  - src/form/form.stories.tsx
  - src/toggle/toggle.test.tsx
  - src/icon-button/icon-button.test.tsx
  - src/fieldset/fieldset.test.tsx
  - src/button/button.test.tsx
  - src/button/button.stories.tsx

## 0.5.7

### Patch Changes

- lint and deps

## 0.5.6

### Patch Changes

- Updated dependencies []:
  - @regardio/tailwind@0.2.0

## 0.5.5

### Patch Changes

- consistent QA tools across our packages

## 0.5.4

### Patch Changes

- consistent QA tools across our packages

## 0.5.3

### Patch Changes

- Updated dependencies []:
  - @regardio/tailwind@0.1.3

## 0.5.2

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.6.0

## 0.5.1

### Patch Changes

- add missing dependency, remove lock file

## 0.5.0

### Minor Changes

- grid and list components, overhaul docs, tests

## 0.4.10

### Patch Changes

- Updated dependencies []:
  - @regardio/tailwind@0.1.2

## 0.4.9

### Patch Changes

- Updated dependencies
  - @regardio/tailwind@0.1.1

## 0.4.8

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.5.0

## 0.4.7

### Patch Changes

- changelog tweaks

## 0.4.6

### Patch Changes

- package tweaks
- Updated dependencies []:
  - @regardio/js@0.4.2

## 0.4.5

### Patch Changes

- chore: deps

## 0.4.4

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.4.1

## 0.4.3

### Patch Changes

- fix: remove locale utility (use @regardio/js directly)

## 0.4.2

### Patch Changes

- chore: deps

## 0.4.1

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.4.0

## 0.4.0

### Minor Changes

- fix: switch to tsup build

## 0.3.3

### Patch Changes

- list item story with unordered list

## 0.3.2

### Patch Changes

- lint markdown

## 0.3.1

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.3.0

## 0.3.0

### Minor Changes

- initial documentation

## 0.2.0

### Minor Changes

- storybook addons

## 0.1.3

### Patch Changes

- Release update

## 0.1.2

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.2.4

## 0.1.1

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.2.3

## 0.1.0

### Minor Changes

- ready for publishing

## 0.0.3

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.2.2

## 0.0.2

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.2.1

## 0.0.1

### Patch Changes

- Updated dependencies []:
  - @regardio/js@0.2.0
