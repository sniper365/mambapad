import React, { createContext, ReactNode, useCallback, useState } from 'react'
import { kebabCase } from 'lodash'
// import { Toast, toastTypes} from "uikit";
// import { ToastContextApi } from './types'

// @ts-ignore
export const ToastsContext = createContext(undefined)

export const ToastsProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(
    ({ title, description, type }) => {
      setToasts((prevToasts) => {
        const id = kebabCase(title)

        // Remove any existing toasts with the same id
        const currentToasts = prevToasts.filter((prevToast) => prevToast.id !== id)

        return [
          {
            id,
            title,
            description,
            type,
          },
          ...currentToasts,
        ]
      })
    },
    [setToasts],
  )

  const toastError = (title, description) => {
    return toast({ title, description, type: 'danger' })
  }
  const toastInfo = (title, description) => {
    return toast({ title, description, type: 'info' })
  }
  const toastSuccess = (title, description) => {
    return toast({ title, description, type: 'success' })
  }
  const toastWarning = (title, description) => {
    return toast({ title, description, type: 'warning' })
  }
  const clear = () => setToasts([])
  const remove = (id) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }

  return (
    <ToastsContext.Provider value={{ toasts, clear, remove, toastError, toastInfo, toastSuccess, toastWarning }}>
      {children}
    </ToastsContext.Provider>
  )
}
