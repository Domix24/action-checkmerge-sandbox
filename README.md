# Action Checkmerge

Auto-merge with all required checks completed

[![GitHub Super-Linter](https://github.com/Domix24/action-checkmerge/actions/workflows/linter.yml/badge.svg)](https://github.com/Domix24/action-checkmerge/actions/workflows/linter.yml)
[![CI](https://github.com/Domix24/action-checkmerge/actions/workflows/ci.yml/badge.svg)](https://github.com/Domix24/action-checkmerge/actions/workflows/ci.yml)
[![Check dist/](https://github.com/Domix24/action-checkmerge/actions/workflows/check-dist.yml/badge.svg)](https://github.com/Domix24/action-checkmerge/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/Domix24/action-checkmerge/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Domix24/action-checkmerge/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Test Local Action
    id: test-action
    uses: actions/typescript-action@v1 # Commit with the `v1` tag
    with:
      milliseconds: 1000

  - name: Print Output
    id: output
    run: echo "${{ steps.test-action.outputs.time }}"
```
