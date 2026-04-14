---
name: brainstorming
description: Use when starting a new feature or project, before any implementation - explore requirements, propose approaches, get design approval before touching code
---

# Brainstorming

**Announce at start:** "I'm using the brainstorming skill."

## Core Principle

**DO NOT invoke any implementation skill, write any code, scaffold any project, or take any implementation action until you have presented a design and the user has approved it.**

This applies universally — even for seemingly simple projects.

*"Simple projects are where unexamined assumptions cause the most wasted work."*

## The Process

### 1. Explore Project Context

Read existing project files, documentation, CLAUDE.md, and any relevant code to understand:
- Current architecture
- Tech stack
- Existing patterns

### 2. Offer Visual Companion (if applicable)

If upcoming questions involve mockups, diagrams, or layouts, offer a visual companion as a separate message. Decide per-question whether visual or text serves better.

### 3. Ask Clarifying Questions

Ask **one question at a time** to understand:
- Purpose and goals
- Constraints
- Success criteria
- User preferences

### 4. Propose 2-3 Approaches

For each approach include:
- Brief description
- Key trade-offs
- When to choose this

### 5. Present Design

Scale design sections to complexity. Include approval checkpoints between major sections.

Write spec to: `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`

### 6. Self-Review Written Spec

Before asking for user review, check:
- No placeholders or contradictions
- No ambiguous requirements
- Every feature has a clear success criterion

### 7. Get User Approval

Present the written spec and get explicit approval before proceeding.

### 8. Hand Off to Implementation Planning

**Terminal state:** Invoke the `writing-plans` skill ONLY.

No other implementation skills should be called after brainstorming completes.

## Design Principles

- **Single purpose:** Each unit has one clear purpose
- **Clear interfaces:** Well-defined boundaries
- **Independently testable:** Components can be tested in isolation
- **Improve, don't diverge:** Follow existing code patterns
- **Solve the current problem:** Address only what directly serves the goal

## Scope Assessment

Flag early if the project describes:
- Multiple independent subsystems
- Separate deployment units
- Different tech stacks

These should be decomposed into sub-projects with separate brainstorm-spec-plan-implement cycles.

## Red Flags — Rationalization

Stop if you're thinking:
- "This is just a simple question"
- "I need more context first" (ask for it, don't skip brainstorming)
- "I'll just do this one thing first"

These are signs you're about to skip the design phase.
