# Phase Context: 07-perfil-do-usuario

## Intent
Provide users with a sense of ownership and identity within the platform, enabling them to manage their content and personal brand (name/avatar).

## Architecture
- **Profiles Table:** Extension of the Auth system using a dedicated public profiles table.
- **Upsert Logic:** Handling profile creation gracefully for both new and legacy users.
- **Storage Integration:** Direct browser-to-storage uploads for avatars to optimize performance.
- **Ownership Check:** Frontend and Backend (RLS) enforcement to ensure only owners can delete their photos.

## Key Decisions
- Implement "Explore" as a discovery hub with category pre-sets.
- Use a single form for both name and avatar updates for a unified UI experience.
