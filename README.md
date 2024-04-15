Este es un proyecto de replica de Dev.to, una página que permite hacer post como una red social.

El objetico de este clon es implementar diversos conocimientos tales como, maquetado y funcionalidad en front-end, con una integración y consumos de apis, así como repaso de Back-end

Front
------------------------------♥♥♥
Las tecnologías utilizadas fueron: React + Next, Utilizando sus diferentes hoocks y herramientas tales como react-hook-form, useEffect, useState, react-root , Link, Imagen, etc. Se consumió el Api generada en clases de back, a través de método Fetch, así como localStorage.

Para el despliege se uso vercel, con la siguiente liga:

https://vercel.com/jesirei333s-projects/desaf-o-react

Maquetado: Para un mejor maquetado se uso clsx y tailwicdcss

Back
------------------------------♥♥♥

Se uso para despliegue la app heroku, con la siguiente liga:

https://devcloneback-c7810b7f34c4.herokuapp.com/

Además de la implementación de mongoose, para la BD y postman para la creación de los diferentes ENDPoints, los EndPoints estan guardados en la carpeta de backEnd/repaso, sin embargo estan en su propio repositorio en la siguiente liga:

https://github.com/JesiRei333/backDev

Istalación front-End
------------------------------♥♥♥
Comandos js + react + next
------------------------------♥♥♥
npm create next-app@latest
o
npx create-next-app@latest

https://nextjs.org/docs/getting-started/installation

What is your project named? my-appWould you like to use TypeScript? No / YesWould you like to use ESLint? No / YesWould you like to use Tailwind CSS? No / YesWould you like to use `src/` directory? No / YesWould you like to use App Router? (recommended) No / YesWould you like to customize the default import alias (@/_)? No / YesWhat import alias would you like configured? @/_
------------------------------♥♥♥

Para clx
npm install clx
https://www.npmjs.com/package/clsx
------------------------------♥♥♥

Para router
npm install react-router-dom
https://reactrouter.com/en/main/start/tutorial
------------------------------♥♥♥
React form
npm install react-hook-form
https://reactrouter.com/en/main/hooks/use-navigate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
