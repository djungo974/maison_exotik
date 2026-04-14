---
name: using-superpowers
description: Meta-skill that governs when and how to invoke all other superpowers skills - apply before every task to determine which skills are relevant
---

# Using Superpowers

## Core Principle

**Invoke relevant or applicable skills BEFORE any response or action.**

Skills are not optional suggestions — they are mandatory workflows. If a skill applies to your task, you do not have a choice: you must use it.

**Questions are tasks. Check for skills.**

## Priority Order

1. **User instructions** — highest priority always
2. **Superpowers skills** — apply when relevant
3. **Default system behavior** — fallback only

## Decision Flowchart

```
User sends message
       ↓
Could any skill apply? (even 1% chance)
       ↓ YES
Invoke the skill with announcement
       ↓
Follow the skill exactly
```

If multiple skills apply:
- **Process skills** (brainstorming, debugging) take priority over implementation skills
- **Rigid skills** (TDD, verification) require strict adherence
- **Flexible skills** permit contextual adaptation

## Skill Trigger Reference

| Situation | Skill |
|-----------|-------|
| Starting a new feature/project | `brainstorming` |
| Have a spec/requirements ready | `writing-plans` |
| Have a plan to execute | `executing-plans` or `subagent-driven-development` |
| Implementing any feature or bugfix | `test-driven-development` |
| Encountering any bug or failure | `systematic-debugging` |
| About to claim work is complete | `verification-before-completion` |
| Starting feature work in isolation | `using-git-worktrees` |
| Development tasks complete | `finishing-a-development-branch` |
| Completing a task or major feature | `requesting-code-review` |
| Receiving code review feedback | `receiving-code-review` |
| 2+ independent tasks to parallelize | `dispatching-parallel-agents` |

## Red Flag Thoughts (Rationalization)

Stop if you're thinking:
- *"This is just a simple question"* — simple questions can be tasks
- *"I need more context first"* — get context, but still invoke the skill
- *"I'll just do this one thing first"* — skills go first
- *"That skill doesn't quite apply here"* — if 1% chance it applies, use it
- *"This is different because..."* — it's not

## Announcing Skills

Always announce when using a skill:
```
"I'm using the [skill-name] skill."
```

Then follow the skill exactly.
