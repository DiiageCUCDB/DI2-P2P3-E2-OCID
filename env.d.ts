/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the OCID API, without a trailing slash (e.g. http://localhost:5000). */
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
