import { useState } from "preact/hooks";

export default function Header() {
  const [buscarActivo, setBuscarActivo] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header class="barra-superior">
      {/* Logo */}
      <a href="/" class="logo-btn">
        <svg
          class="logo-icon"
          fill="currentColor"
          viewBox="0 0 46 35"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M46.2661 0.800781H34.7236V34.4008H46.2661V0.800781Z" />
          <path d="M33.9162 0.800781L17.3358 34.4008L0.776855 0.800781H12.3139L17.3332 11.5445L22.3766 0.800781H33.9162Z" />
        </svg>
        <span class="sr-only">Volver arriba</span>
      </a>

      {/* Acciones */}
      <div class="acciones-header">
        {/* Favoritos */}
        <a href="/favoritos" title="Favoritos" class="icono-accion">
          <img src="/favoritos.png" alt="Favoritos" />
        </a>

        {/* Buscar o input */}
        {!buscarActivo ? (
          <button
            class="icono-accion"
            onClick={() => setBuscarActivo(true)}
            title="Buscar"
          >
            <img src="/buscar.png" alt="Buscar" />
          </button>
        ) : (
          <input
            class="barra-busqueda"
            type="text"
            placeholder="Buscar ciudad..."
            value={busqueda}
            autoFocus
            onInput={(e) =>
              setBusqueda((e.target as HTMLInputElement).value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" && busqueda.trim()) {
                location.href = `/ciudad/${encodeURIComponent(busqueda.toLowerCase())}`;
              } else if (e.key === "Escape") {
                setBuscarActivo(false);
              }
            }}
          />
        )}

        {/* Menú ciudades */}
        <button
          class="icono-accion"
          onClick={() => setMenuAbierto((prev) => !prev)}
          title="Menú de ciudades"
        >
          <img src="/menu.png" alt="Menú" />
        </button>
      </div>

      {/* Menú desplegable */}
      {menuAbierto && (
        <div class="menu-ciudades">
          <ul>
            <li><a href="/ciudad/miami">🌴 Miami</a></li>
            <li><a href="/ciudad/leonida">🌆 Leonida</a></li>
            <li><a href="/ciudad/vice">🌃 Vice City</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
