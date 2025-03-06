import React from 'react';
import { Edit, Trash2, Copy } from 'lucide-react';
import { Macro } from '../types';

interface MacroListProps {
  macros: Macro[];
  onEdit: (macro: Macro) => void;
  onDelete: (id: string) => void;
  onCopy: (content: string) => void;
}

export const MacroList: React.FC<MacroListProps> = ({ macros, onEdit, onDelete, onCopy }) => {
  return (
    <div className="space-y-4 overflow-y-auto">
      {macros.map((macro) => (
        <div
          key={macro.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all hover:shadow-lg"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-lg dark:text-white">{macro.title}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => onCopy(macro.content)}
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Copy macro content"
              >
                <Copy size={18} />
              </button>
              <button
                onClick={() => onEdit(macro)}
                className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                aria-label="Edit macro"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => onDelete(macro.id)}
                className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                aria-label="Delete macro"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};