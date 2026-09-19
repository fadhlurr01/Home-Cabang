import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function ToastContainer() {
  const { toasts } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast">
          {toast.type === 'success' && <CheckCircle2 size={18} color="#16a34a" />}
          {toast.type === 'error' && <AlertCircle size={18} color="#dc2626" />}
          {toast.type === 'info' && <Info size={18} color="var(--branch-teal-700)" />}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

