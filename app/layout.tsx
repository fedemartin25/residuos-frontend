import { AuthProvider } from "./AuthContext";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "CityPass+ – Residuos",
  description: "Plataforma de gestión de residuos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-[#03A64A]">
        <AuthProvider>
          {/* Header fijo arriba */}
          <header className="bg-[#260101] text-white p-4 flex justify-between items-center shadow">
            <h1 className="text-lg font-bold">CityPass+ – Residuos</h1>
          </header>

          {/* Contenedor principal: Sidebar + contenido */}
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}