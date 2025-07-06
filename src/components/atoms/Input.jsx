import React from 'react';

const Input = React.forwardRef(({ 
  type = 'text', 
  placeholder, 
  className = '', 
  label,
  error,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 rounded-lg border-2 border-soft-pink 
          focus:border-romantic-pink focus:outline-none focus:ring-2 focus:ring-romantic-pink/20
          transition-all duration-300 bg-white/80 backdrop-blur-sm
          ${error ? 'border-red-400 focus:border-red-400' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;