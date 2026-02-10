'use client'

import { Toaster } from 'react-hot-toast'

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#0a1929',
          color: '#fff',
          padding: '16px',
          borderRadius: '0',
          border: '1px solid #c9b87a',
        },
        success: {
          iconTheme: {
            primary: '#c9b87a',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fff',
          },
        },
      }}
    />
  )
}
