"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../AuthContext";

export default function Sidebar() {
  const { user, logout, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  if (loading || !user) return null;

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-[#73c73f] text-[#260101] w-64 p-4 flex flex-col border-r border-gray-300 
        transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          ♻️ Residuos
        </h2>

        <nav className="space-y-2 flex-1">
          {user.role === "basurero" && (
            <>
              <Link href="/empleado/mapa" className="block hover:bg-[#91e66a] p-2 rounded">
                🗺️ Mapa
              </Link>
              <Link href="/empleado/emergencias" className="block hover:bg-[#91e66a] p-2 rounded">
                🚨 Emergencias
              </Link>
              <Link href="/horarios" className="block hover:bg-[#91e66a] p-2 rounded">
                ⏰ Horarios
              </Link>
            </>
          )}

          {user.role === "admin" && (
            <>
              <Link href="/admin/reclamos" className="block hover:bg-[#91e66a] p-2 rounded">
                📢 Reclamos
              </Link>
              <Link href="/admin/tachos" className="block hover:bg-[#91e66a] p-2 rounded">
                🗑️ Administración de Tachos
              </Link>
              <Link href="/admin/crear-tacho" className="block hover:bg-[#91e66a] p-2 rounded">
                ➕ Crear Tachos
              </Link>
              <Link href="/horarios" className="block hover:bg-[#91e66a] p-2 rounded">
                ⏰ Gestionar Horarios
              </Link>
            </>
          )}
        </nav>

        <button
          onClick={logout}
          className="mt-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🚪 Cerrar sesión
        </button>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Tu contenido principal va acá */}
      </main>
    </div>
  );
}