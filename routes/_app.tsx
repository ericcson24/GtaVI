import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GTAVI</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/png" href="./Rockstar_Games_Logo.png" ></link>
      </head>
      
    
      <body>
        <Component />
      </body>
    </html>
  );
}

