import { useState, useEffect } from 'react';
import { PlusCircle, Moon, Sun } from 'lucide-react';
import { MacroList } from './components/MacroList';
import { MacroForm } from './components/MacroForm';
import { Macro } from './types';

function App() {
  const [macros, setMacros] = useState<Macro[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMacro, setCurrentMacro] = useState<Macro | null>(null);

  useEffect(() => {
    const savedMacros = localStorage.getItem('macros');
    if (savedMacros) {
      setMacros(JSON.parse(savedMacros));
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('macros', JSON.stringify(macros));
  }, [macros]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const addMacro = (macro: Macro) => {
    setMacros([...macros, { ...macro, id: Date.now().toString() }]);
    setIsEditing(false);
    setCurrentMacro(null);
  };

  const updateMacro = (updatedMacro: Macro) => {
    setMacros(macros.map(macro =>
      macro.id === updatedMacro.id ? updatedMacro : macro
    ));
    setIsEditing(false);
    setCurrentMacro(null);
  };

  const deleteMacro = (id: string) => {
    setMacros(macros.filter(macro => macro.id !== id));
  };

  const editMacro = (macro: Macro) => {
    setCurrentMacro(macro);
    setIsEditing(true);
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        const notification = document.getElementById('notification');
        if (notification) {
          notification.classList.remove('opacity-0');
          notification.classList.add('opacity-100');
          setTimeout(() => {
            notification.classList.remove('opacity-100');
            notification.classList.add('opacity-0');
          }, 2000);
        }
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className={`min-h-screen min-w-72 transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-6 max-w-md">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">MacroBox</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="text-white" size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {isEditing ? (
          <MacroForm
            onSubmit={currentMacro?.id ? updateMacro : addMacro}
            initialData={currentMacro}
            onCancel={() => {
              setIsEditing(false);
              setCurrentMacro(null);
            }}
          />
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors mb-6"
            >
              <PlusCircle size={18} />
              <span>Create New Macro</span>
            </button>

            {macros.length > 0 ? (
              <MacroList
                macros={macros}
                onEdit={editMacro}
                onDelete={deleteMacro}
                onCopy={copyToClipboard}
              />
            ) : (
              <div className="text-center py-10 dark:text-gray-300">
                <p>No macros yet. Create your first one!</p>
              </div>
            )}
          </>
        )}
        <div
          id="notification"
          className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg opacity-0 transition-opacity duration-300"
        >
          Copied to clipboard!
        </div>
      </div>
    </div>
  );
}

export default App;