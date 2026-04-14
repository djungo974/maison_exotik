---
name: systematic-debugging
description: Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes
---

# Systematic Debugging Process

**Announce at start:** "I'm using the systematic-debugging skill."

## Core Principle

**NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST**

If Phase 1 is incomplete, no fix can be proposed. Symptom-focused repairs mask underlying issues and create new problems.

## When to Use

Apply to **any** technical issue:
- Test failures
- Production bugs
- Unexpected behavior
- Performance problems
- Build failures
- Integration issues

**Especially critical when:**
- Time pressure makes quick fixes tempting
- Fixes seem obvious
- Multiple fix attempts have already failed
- Understanding is incomplete

## The Four Phases

### Phase 1: Root Cause Investigation

1. **Read error messages carefully** — exact text matters
2. **Reproduce consistently** — if you can't reproduce it, you don't understand it
3. **Review recent changes** — what changed since it last worked?
4. **Add diagnostic instrumentation** — in multi-component systems, instrument at boundaries to find where the failure originates
5. **Trace data flow** — follow the data from input to failure

**Do NOT skip to Phase 2 until you can state the root cause.**

### Phase 2: Pattern Analysis

1. Locate working examples of similar code
2. Compare broken code against working reference implementations **completely**
3. Catalog all differences
4. Map dependencies

### Phase 3: Hypothesis and Testing

Apply the scientific method:
1. Form a **specific** hypothesis
2. Test with **minimal** change (one variable)
3. Verify result
4. If unsuccessful, iterate — do NOT add multiple fixes simultaneously

### Phase 4: Implementation

1. Create a **failing test case** that reproduces the bug
2. Apply a **single** fix targeting the root cause
3. Verify the fix resolves the issue
4. **If three or more fixes have failed:** STOP — question the architecture

## Red Flags — Return to Phase 1

- Assuming without verification
- Proposing a solution before completing investigation
- Attempting fix after fix without understanding why
- "I think it might be..." without evidence
- Making multiple changes simultaneously
- Skipping the reproduction step

## Quick Reference

| Situation | Action |
|-----------|--------|
| Error message unclear | Search docs, read carefully, instrument |
| Can't reproduce | Add logging, check environment differences |
| Fix didn't work | Return to Phase 1, hypothesis was wrong |
| Third fix failing | Question the architecture |
| Works on my machine | Environment issue — instrument both environments |

## Real-World Impact

Systematic debugging: **95% first-time fixes**, ~15-30 min.  
Random attempts: **40% first-time fixes**, ~2-3 hours.
