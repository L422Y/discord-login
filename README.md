# Nuxt 3 with Discord OAuth

This is a simple example of how to use Discord OAuth with Nuxt 3.

It uses Pinia, and implements a simple auth store and server side sessions so that the user can refresh the page and
still be logged in.

## Configuration

You will need to create a Discord application and set the redirect URI to `http://localhost:3030/callback`

You will also need to create a `.env` file with the following variables:

```bash
NUXT_PUBLIC_DISCORD_APPLICATION_ID=...
NUXT_PUBLIC_DISCORD_PUBLIC_KEY=...
NUXT_PUBLIC_DISCORD_CLIENT_ID=...
NUXT_PUBLIC_DISCORD_LOGIN_URL=https://discord.com/api/oauth2/authorize?...
NUXT_PUBLIC_DISCORD_CALLBACK_URI=http://localhost...
NUXT_DISCORD_CLIENT_SECRET=...
```

You can find the values for the first 5 variables in the [Discord Developer Portal](https://discord.com/developers/applications).

The `NUXT_DISCORD_CLIENT_SECRET` is the client secret for your Discord application.

You will need to set the `NUXT_PUBLIC_DISCORD_LOGIN_URL` and `NUXT_PUBLIC_DISCORD_CALLBACK_URI` variables to the correct
values for your application, for `production` and `development` respectively.


## Setup

Make sure to install the dependencies, I use bun for this project, but you can use npm, pnpm, or yarn.

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3030`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
