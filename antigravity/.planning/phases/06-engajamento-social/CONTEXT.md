# Phase Context: 06-engajamento-social

## Intent
The goal of this phase was to transform a static gallery into a dynamic social marketplace by enabling interpersonal interactions and feedback loops through notifications.

## Architecture
- **Interactions Hook:** Centralized client-side logic for likes and comments to avoid redundant code across components.
- **Database Triggers:** Using PL/pgSQL functions to handle notification logic directly at the database layer for maximum reliability and lower latency.
- **RLS Integration:** Every interaction is governed by Supabase RLS to ensure users can only modify their own data or interact with public content.

## Key Decisions
- Use optimistic UI for likes to ensure a "snappy" mobile feel.
- Implement notifications as a passive system triggered by data changes rather than active API calls.
