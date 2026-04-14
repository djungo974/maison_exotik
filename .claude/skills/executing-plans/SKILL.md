---
name: executing-plans
description: Use when you have a written implementation plan to execute in a separate session with review checkpoints
---

# Executing Plans

**Announce at start:** "I'm using the executing-plans skill to implement this plan."

## Overview

Execute a written implementation plan task-by-task with review checkpoints. Use subagents for better quality when possible.

## Required Integration

This skill requires these companion skills:
- **using-git-worktrees** — REQUIRED before executing any tasks
- **finishing-a-development-branch** — REQUIRED after all tasks complete

## The Process

### Step 1: Load and Review Plan

1. Read the plan file completely
2. Critically evaluate for concerns:
   - Missing dependencies
   - Unclear instructions
   - Architectural conflicts
   - Missing context
3. **If concerns exist:** Raise them with your human partner before starting
4. **If no concerns:** Create a TodoWrite task list from the plan

### Step 2: Execute Tasks

For each task:

1. Mark task as **in_progress**
2. Follow steps **exactly** as written
3. Run each verification command specified
4. Do NOT skip any verification step
5. Mark task as **completed** only after verification passes

### Step 3: Complete Development

After all tasks are verified:

1. Announce: "I'm using the finishing-a-development-branch skill."
2. Follow the finishing-a-development-branch workflow

## When to Stop and Ask

Stop **immediately** when encountering:
- Missing dependencies not in the plan
- Test failures that don't resolve after one careful attempt
- Unclear instructions — ask, don't guess
- Repeated verification failures (2+ times)
- Anything that requires architectural decisions

**"Ask for clarification rather than guessing."**

## When to Revisit Earlier Steps

Return to Step 1 when:
- Human partner updates the plan during execution
- A fundamental approach change is needed
- A blocker reveals the plan has incorrect assumptions

## Critical Rules

- **NEVER** start implementation on main/master without explicit user consent
- **NEVER** skip verification steps
- **NEVER** proceed past a blocker by guessing
- **ALWAYS** use git worktrees for isolation
- **ALWAYS** follow the exact steps in the plan
