---
name: pausa-ai-illustrator
description: Produce Pausa AI Corpo Guiado raster visual assets for one complete movement batch. Use when the user asks to generate, review, or prepare exercise step images, yoga posture images, mobility illustrations, breathing technique visuals, common-mistake frames, correction frames, or PNG asset batches for Pausa AI from supplied movement prompts and exact final filenames.
---

# Pausa AI Illustrator

Use this skill only for Pausa AI visual asset production. The skill is not for catalog extraction, database metadata, video creation, seed edits, or marking assets as ready.

## Required Reference

Before generating or reviewing a movement batch, read `references/prompt-master.md`. It contains the full production contract for:

- one movement per batch;
- exact step count;
- exact final filenames;
- visual style;
- anatomy and safety rules;
- reuse/deduplication rules;
- common mistake and correction frames;
- final delivery format.

## Workflow

1. Confirm the input contains one movement only.
2. Count the supplied prompts/steps. Do not add or remove steps.
3. Verify every step has a final PNG filename and a pose description.
4. If the user requires a fixed count, the documented final filenames must match that count before the batch can be considered complete. Do not invent a missing filename or step to satisfy the count.
5. If any step is marked `REUTILIZAR_ASSET_EXISTENTE`, `REUSED`, `visualAssetMode: REUSED`, or equivalent, reuse the indicated asset instead of generating a duplicate.
6. When the movement belongs to an existing visual collection, inspect or use nearby approved assets from that collection as style references before generating. For `surya-namaskar`, the existing files under `public/instructional-images/yoga/surya-namaskar/` are the mandatory style lock.
7. Generate or prepare only the supplied steps, using the exact visual prompt and exact filename for each one.
8. Keep the same character, outfit, mat, environment, lighting, camera angle, and rendering style across every step in the same movement.
9. Deliver one separate PNG per step. Never deliver a contact sheet, collage, grid, infographic, or multi-step final image.
10. Save each final PNG to the documented collection directory. For `ref_003` / `surya-namaskar`, save to `public/instructional-images/yoga/surya-namaskar/`; create the directory if it does not exist.
11. Run the quality checklist from the reference before final delivery.

## Boundaries

- Do not invent movements, steps, filenames, anatomy, references, or missing prompts.
- Do not update Prisma data, seed files, catalog metadata, `assetStatus`, or `videoStatus` as part of illustration work unless the user explicitly asks for a separate app-integration task.
- Do not create videos or mark videos as `READY`.
- Do not imply a generated image is production-ready in the app until there is a real file at the intended path and the user has accepted the visual quality.
- Do not leave final project assets only in the image-generation cache. Copy the selected output into the documented project directory with the exact supplied filename.
- If the image-generation tool is unavailable, produce the prepared per-step generation prompts and state that actual raster generation is blocked by tool availability.

## Clarification

Ask only when the batch cannot be produced safely: missing final filename, missing pose description, contradictory prompts, ambiguous body side, conflict between generate and reuse, reference without a movement, or risk of duplicating an asset explicitly marked as reused.
