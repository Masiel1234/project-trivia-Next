'use client';

import { useState, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface AbandonQuizButtonProps {
  message?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  title?: string;
}

// Hook para bloquear scroll del body al mostrar el panel
const useLockBodyScroll = (enabled: boolean) => {
  useEffect(() => {
    if (enabled) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [enabled]);
};

interface AlertPanelProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertPanel: React.FC<AlertPanelProps> = ({
  isOpen,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  return (
    <>
      {/* Fondo oscuro */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onCancel}
      />

      {/* Panel inferior */}
      <div
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="p-6">
          <p className="text-base font-medium text-gray-900 mb-4 text-center">{message}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/home" aria-label={confirmText}>
              <button
                onClick={onConfirm}
                className="w-full sm:w-auto px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500"
              >
                {confirmText}
              </button>
            </Link>
            <button
              onClick={onCancel}
              className="w-full sm:w-auto px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ButtonLeave: React.FC<AbandonQuizButtonProps> = ({
  message,
  confirmButtonText,
  cancelButtonText,
  title,
}) => {
  const t = useTranslations('buttonLeave');
  const [showPanel, setShowPanel] = useState(false);
  const openPanel = useCallback(() => setShowPanel(true), []);
  const closePanel = useCallback(() => setShowPanel(false), []);

  useLockBodyScroll(showPanel);

  return (
    <>
      {/* Botón visible solo si el panel no está abierto */}
      {!showPanel && (
        <button
          onClick={openPanel}
          aria-label={title || t('title')}
          className="fixed bottom-20 left-4 w-40 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out z-50"
        >
          {title || t('title')}
        </button>
      )}

      <AlertPanel
        isOpen={showPanel}
        title={title || t('title')}
        message={message || t('message')}
        confirmText={confirmButtonText || t('confirmButtonText')}
        cancelText={cancelButtonText || t('cancelButtonText')}
        onConfirm={closePanel}
        onCancel={closePanel}
      />
    </>
  );
};

export default ButtonLeave;
