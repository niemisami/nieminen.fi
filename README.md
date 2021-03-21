# Nieminen.fi website

## Development

Used Node 14 to compile `tailwindcss`

### Configuring `tailwindcss`

If changes made to `tailwind.config.js` rebuild the `./dist/tailwind.css` file:

`npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind.css`

More information from the official [Tailwind documentation](https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin)