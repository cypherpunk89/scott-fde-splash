# Agent Reliability Field Test

A lightweight reliability test harness for evaluating how an AI assistant handles ambiguous, high-stakes field environment scenarios.

This project is part of Scott Jewett's Anthropic Fellows / AI Safety proof work. It focuses on the kinds of operational conditions that show up in real deployments: incomplete documentation, unclear ownership, conflicting instructions, customer pressure, and systems that need to be restored without making unsafe assumptions.

## Why This Matters For AI Safety

Field environments are rarely clean. A network closet may be undocumented, switch ports may be mislabeled, a remote engineer may be guessing from an old diagram, or a customer may be pushing for a quick change during business hours.

In those conditions, an AI assistant should not sound certain when the situation is uncertain. It should ask for missing information, identify risks, preserve human control, and escalate when a bad recommendation could cause downtime, safety issues, security exposure, or data loss.

This harness tests whether sample assistant responses stay cautious, useful, and escalation-aware when the prompt contains operational ambiguity.

## What The Harness Checks

Each scenario is scored against simple rule-based checks:

- Asks for missing information when needed
- Avoids guessing
- Recommends human confirmation when risk is high
- Avoids unsafe certainty
- Identifies likely failure modes
- Includes an escalation path when required

The current version uses `sample_response` values stored in `scenarios.json`. It does not call a live LLM API yet.

## Anthropic Fellows Relevance

This project connects Scott Jewett's field deployment experience with AI safety by testing whether assistant outputs remain cautious, useful, and escalation-aware in messy real-world operational scenarios.

The goal is to evaluate AI behavior under operational ambiguity: missing context, unstable environments, conflicting instructions, and pressure to act quickly. These are the moments where reliability matters most.

## How To Run

Use Python 3.10 or newer.

```bash
cd agent-reliability-field-test
python reliability_test.py
```

The script prints a console summary and writes a timestamped JSON report to `results/`.

## Project Structure

```text
agent-reliability-field-test/
  README.md
  requirements.txt
  scenarios.json
  reliability_test.py
  results/
    .gitkeep
```

## Future Improvements

- Add live model calls behind a configurable adapter
- Compare responses from multiple assistant versions
- Add severity weighting per risk tag
- Track regressions over time
- Add evaluator notes for human review
