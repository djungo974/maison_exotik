---
name: finishing-a-development-branch
description: Use when development tasks are complete, before merging or creating PRs - verifies tests pass then presents structured integration options
---

# Finishing a Development Branch

**Announce at start:** "I'm using the finishing-a-development-branch skill."

## Overview

Complete development work by verifying tests pass, then presenting structured integration options. Never skip test verification.

## The Process

### Step 1: Verify Tests Pass

Run the project's full test suite:

```bash
# Examples — use project-appropriate command
npm test
cargo test
pytest
go test ./...
```

**If tests fail:** STOP. Report failures. Do NOT proceed until tests pass.

**If tests pass:** Continue to Step 2.

### Step 2: Determine Base Branch

```bash
git merge-base HEAD main
# or ask your human partner which branch to target
```

### Step 3: Present Options

Present **exactly** these four options without additional explanation:

```
Tests passing. How would you like to proceed?

1. Merge back to <base-branch> locally
2. Push and create a Pull Request
3. Keep the branch as-is
4. Discard this work
```

### Step 4: Execute Choice

**Option 1 — Merge locally:**
```bash
git checkout <base-branch>
git merge <feature-branch>
# Re-run tests to verify post-merge
```

**Option 2 — Push and create PR:**
```bash
git push -u origin <feature-branch>
# Create PR via GitHub
```

**Option 3 — Keep branch:**
```bash
# Nothing to do — preserve current state
```

**Option 4 — Discard:**
```bash
# REQUIRE typed confirmation: user must type "discard"
git checkout <base-branch>
git branch -D <feature-branch>
```

### Step 5: Cleanup Worktree

Remove worktree for **Options 1, 2, and 4 only**:

```bash
git worktree remove <worktree-path>
```

**Preserve worktree for Option 3** — branch is still active.

## Critical Rules

- **NEVER** skip test verification before offering options
- **NEVER** merge with failing tests
- **ALWAYS** require typed "discard" confirmation for Option 4
- **NEVER** cleanup worktree for Option 3
- **ALWAYS** present exactly 4 options
- **Re-run tests** after merge (Option 1) to verify post-merge state

## Integration

Called by:
- **subagent-driven-development** — after all tasks complete
- **executing-plans** — after all tasks complete

Pairs with:
- **using-git-worktrees** — for worktree cleanup
