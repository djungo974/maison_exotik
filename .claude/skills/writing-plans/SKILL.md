---
name: writing-plans
description: Use when you have a spec or requirements for a multi-step task, before touching code
---

# Writing Plans

**Announce at start:** "I'm using the writing-plans skill to create the implementation plan."

## Core Purpose

Generate a comprehensive implementation plan for an engineer with minimal codebase context but strong development skills. Break features into 2-5 minute tasks following TDD.

## Plan Location

Save to: `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md`

## Mandatory Header

Every plan must begin with:

```markdown
# Plan: <feature-name>

**Goal:** <one-sentence description>
**Architecture:** <relevant system components>
**Tech stack:** <languages, frameworks, key libraries>
**Created:** YYYY-MM-DD
```

## Task Structure

Each task follows this exact pattern:

```markdown
## Task N: <Task Name>

**Files:** `path/to/file.ts`, `path/to/test.ts`

### Steps

1. Write failing test:
   ```typescript
   // actual test code here — no placeholders
   ```

2. Run test — verify it fails:
   ```bash
   npm test path/to/test.ts
   # Expected: FAIL — <reason>
   ```

3. Implement:
   ```typescript
   // actual implementation code here
   ```

4. Run test — verify it passes:
   ```bash
   npm test path/to/test.ts
   # Expected: PASS
   ```

5. Commit:
   ```bash
   git add path/to/file.ts path/to/test.ts
   git commit -m "Task N: <description>"
   ```
```

## Critical Rules — No Placeholders

**NEVER use:**
- "TBD"
- "TODO"
- "Add appropriate error handling"
- "Similar to Task N"
- "Write tests for the above"
- `// implementation here`

**ALWAYS include:**
- Actual code in every code block
- Exact file paths
- Specific commands with expected outputs
- Complete type signatures

## Self-Review Checklist

Before handing off the plan:

1. **Spec coverage** — Can each requirement map to a specific task?
2. **Placeholder scan** — Search for vague instructions; replace with real code
3. **Type consistency** — Method names and signatures match across all tasks

## Execution Handoff

After writing the plan, offer two options:

**Option A — Subagent-driven:** One fresh agent per task with review checkpoints (use superpowers:subagent-driven-development)

**Option B — Inline:** You execute each task sequentially with checkpoints

## Design Principles

- DRY: Don't repeat yourself
- YAGNI: You aren't gonna need it — don't over-engineer
- TDD: Every task starts with a failing test
- Small commits: One task = one commit
