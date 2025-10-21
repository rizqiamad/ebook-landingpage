'use client'

import { useEffect, useState } from "react"

interface IProps {
  show: boolean
  onClose: () => void
  pdfUrl: string
}

export default function PdfModal({ show, onClose, pdfUrl }: IProps) {
  const [Viewer, setViewer] = useState<React.ComponentType<{ pdfUrl: string }> | null>(null)

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
      import("./pdf-viewer.client").then((mod) => {
        // modul v10 sudah default-export fungsi biasa
        setViewer(() => mod.default)
      })
    } else {
      document.body.style.overflow = "auto"
    }
  }, [show])

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-1/2 h-[80vh] relative">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-3 right-3 text-gray-800 hover:text-red-500 text-xl z-10"
        >
          ✕
        </button>

        {Viewer ? (
          <Viewer pdfUrl={pdfUrl} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Loading PDF...
          </div>
        )}
      </div>
    </div>
  )
}
