---
name: subagent-driven-development
description: Use when you have an implementation plan with independent tasks to execute within the current session using specialized subagents
---

# Subagent-Driven Development

**Announce at start:** "I'm using the subagent-driven-development skill."

## Core Principle

Fresh subagent per task + two-stage review (spec then quality) = high quality, fast iteration.

Each subagent gets precisely crafted instructions — **never your session's history**. This preserves your own context for coordination while keeping each agent focused.

## When to Use

Use when you have:
- A completed implementation plan with mostly independent tasks
- Intent to remain in the current session
- Need for rapid iteration without context switching

## Required Integration

- **using-git-worktrees** — REQUIRED before executing any tasks
- **finishing-a-development-branch** — REQUIRED after all tasks complete
- **requesting-code-review** — After each task

## The Process Per Task

For each task in the plan:

### 1. Dispatch Implementer Subagent

Provide the subagent with:
- The specific task from the plan (exact steps)
- Relevant file paths and context
- Constraints: "Don't modify files outside the task scope"
- Expected output: "Return a summary of what you implemented"

If subagent has clarifying questions — answer them before it proceeds.

### 2. Spec Compliance Review

Dispatch a reviewer subagent with:
- The task requirements from the plan
- The BASE_SHA and HEAD_SHA
- Question: "Does the implementation match every requirement in the spec?"

**If reviewer finds spec issues:** Implementer fixes them. Re-review.  
**If spec compliance passes:** Proceed to Step 3.

### 3. Code Quality Review

Dispatch a second reviewer subagent with:
- The same SHA range
- Question: "Assess code quality: naming, structure, duplication, test quality"

**If reviewer finds quality issues:** Implementer fixes them. Re-review.  
**If quality passes:** Mark task complete.

### 4. Mark Task Complete

Update TodoWrite: task is completed.  
Move to next task.

## Critical Safeguards

**NEVER:**
- Skip spec compliance review
- Skip code quality review
- Proceed with unfixed **Critical** or **Important** issues
- Ignore subagent clarifying questions
- Accept partial spec compliance ("good enough")

**ALWAYS:**
- Fresh subagent context per task
- Two-stage review (spec then quality)
- Fix before moving on

## Model Selection

Use the least powerful model that can handle each role:
- **Mechanical tasks** (simple fixes, renames): cheaper/faster model
- **Integration work** (connecting components): standard model
- **Architectural decisions**: most capable model

## Post-All-Tasks

After all tasks complete:

1. Announce: "I'm using the finishing-a-development-branch skill."
2. Follow the finishing-a-development-branch workflow
