# RACE 10 - Post App Starter

Starter-template til `RACE 10 - Web App: Forms & CRUD`.

## Kom i gang

1. Kør `npm install`
2. Opret en `.env` fil i roden af projektet
3. Tilføj:

```dotenv
VITE_SUPABASE_URL=https://dit-project-id.supabase.co/rest/v1/posts
VITE_SUPABASE_APIKEY=din_sb_publishable_key
```

4. Kør `npm run dev`

## Formål

I skal selv implementere:

- GET i `HomePage`
- POST i `CreatePage`
- GET + PATCH i `UpdatePage`
- GET + DELETE i `PostDetailPage`
- controlled form-adfærd i `PostForm`
- derefter loading, fejlbeskeder og tom-state som ekstra lag

Kig efter `TODO` i filerne i `src/`.
