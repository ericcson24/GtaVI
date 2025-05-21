import { PageProps } from "$fresh/server.ts";

import Header from "../islands/Header.tsx";
import { Weather } from "../utils/types.ts";

export default function Layout(props: PageProps<Weather | null>) {
 
  const Component = props.Component;

  return (
    <>
      {/* Header fijo */}
      <div class="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Contenido principal */}
      <div class="min-h-screen bg-[#f6f6f6] text-black pt-20">
        <main>
          <Component />
        </main>

        <footer class="bg-white border-t border-gray-200 mt-10">
          <div class="peronajes-lista">
            <h1 class="text-sm text-gray-500">
              Hecho por Eric Kowalski
            </h1>
            
          </div>
        </footer>
      </div>
    </>
  );
}
