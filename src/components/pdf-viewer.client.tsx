'use client'

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import type { PDFDocumentProxy } from "pdfjs-dist"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PdfViewerClient({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const absoluteUrl =
    typeof window !== "undefined" ? `${window.location.origin}${pdfUrl}` : pdfUrl

  return (
    <div className="w-full h-full overflow-auto flex flex-col items-center p-4">
      <Document
        file={absoluteUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-gray-500">Loading PDF...</div>}
      >
        <Page
          pageNumber={pageNumber}
          width={600}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>

      {numPages && numPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((p) => p - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            ← Prev
          </button>
          <span>
            {pageNumber} / {numPages}
          </span>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((p) => p + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}
