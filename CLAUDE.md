# Maison Exotik — Claude Instructions

## Superpowers Skills

This project uses skills from [obra/superpowers](https://github.com/obra/superpowers).
All skills are installed in `.claude/skills/`.

### Mandatory: Always Check Skills Before Acting

Before responding to any request, check the skill trigger table and invoke the relevant skill:

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

### Core Rules

1. **Invoke skills first** — even a 1% chance of relevance means you use the skill
2. **Announce skill use** — always say "I'm using the [skill-name] skill"
3. **No production code without a failing test first** (TDD)
4. **No completion claims without fresh verification evidence**
5. **No fixes without root cause investigation first**

### Worktree Directory

Use `.worktrees/` for isolated development workspaces.
