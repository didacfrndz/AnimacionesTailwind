import "./App.css";

function App() {
  return (
    <div className=" dark:bg-dark App flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="p-4 text-3xl font-bold text-gray-800 tracking-tight">
        Sesión de animaciones con Tailwind
      </h1>
      <button className="hover:bg-red-600 transition-all duration-300 p-4 bg-blue-600 text-white rounded-lg mt-4">
        Hola soy un boton que cambia de color
      </button>
      <button className="hover:scale-150 p-4 bg-yellow-400 rounded-lg hover:-rotate-45">
        Soy boton de Scala
      </button>
      <button className="hover:-translate-y-4 transition-all duration-300 p-4 bg-purple-400 rounded-lg ">
        Soy un boton que se translada
      </button>
      <div>
        <h2>Animaciones</h2>
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
        <div class="animate-pulse bg-gray-200 h-4 w-48 rounded"></div>

        <div class="animate-pulse">
          <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div class="animate-bounce">⚽</div>
      </div>
      
    </div>
  );
}

export default App;
