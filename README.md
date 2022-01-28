##Google Clone
A responsive google clone made using react.js, next.js, tailwind and google custom search JSON API

Live Project : https://google-lime-six.vercel.app/

Screenshots
Google.com              |  Google Clone
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/44324506/151517014-84e55825-0af3-4d74-b6df-e2eb1af3e3a9.png) |  ![image](https://user-images.githubusercontent.com/44324506/151517309-f52603f0-2c8f-4fc2-99f3-7871424adec6.png)


```
Environment variables needed:
API_KEY = xxxxxxxxxxxxx_xxxxxx
CONTEXT_KEY = xxxxxxxxxxx
DUMMY_SEARCH = false
for testing purposes since we only get 100 searches a day, we can enable DUMMY_SEARCH to true and it will serve us a dummy response without contacting API.
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
