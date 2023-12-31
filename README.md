# Nuxt 3 with Discord OAuth

![GitHub deployments](https://img.shields.io/github/deployments/L422Y/discord-login/production?label=vercel)

This is a simple example of how to use Discord OAuth with Nuxt 3.

It uses Pinia, and implements a simple auth store and server side sessions so that the user can refresh the page and
still be logged in.

Check out the [live demo](https://discord-login-weld.vercel.app/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/L422Y/discord-login)
[![Deploy with Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/L422Y/discord-login)

## Configuration

You will need to create a Discord application and add the following redirect URIs, the first is for the page based
callback, and the second for the server based callback:

```bash
http://localhost:3030/callback  
http://localhost:3030/api/v1/auth/discord/callback
```

You will need to generate the URLs for both of these, and add them to the `.env` file.
`NUXT_PUBLIC_DISCORD_LOGIN_URL` is the URL for the page based callback, and `NUXT_PUBLIC_DISCORD_LOGIN_URL_SERVER` is
the URL for the server based callback.

You will also need to create a `.env` file with the following variables:

```bash
NUXT_PUBLIC_DISCORD_APPLICATION_ID=...
NUXT_PUBLIC_DISCORD_PUBLIC_KEY=...
NUXT_PUBLIC_DISCORD_CLIENT_ID=...
NUXT_PUBLIC_DISCORD_LOGIN_URL_SERVER=...
NUXT_PUBLIC_DISCORD_LOGIN_URL=https://discord.com/api/oauth2/authorize?...
NUXT_PUBLIC_DISCORD_CALLBACK_URI=http://localhost...
NUXT_DISCORD_CLIENT_SECRET=...
```

`NUXT_PUBLIC_DISCORD_LOGIN_URL_SERVER` is the login URL used if you want to use server endpoint instead of client
endpoint.

You can find the values for the first 5 variables in
the [Discord Developer Portal](https://discord.com/developers/applications).

The `NUXT_DISCORD_CLIENT_SECRET` is the client secret for your Discord application.

You will need to set the`NUXT_PUBLIC_DISCORD_LOGIN_URL_SERVER`,`NUXT_PUBLIC_DISCORD_LOGIN_URL`
and `NUXT_PUBLIC_DISCORD_CALLBACK_URI` variables to the correct
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
