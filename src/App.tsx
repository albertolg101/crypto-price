import type React from "react"
import { ThemeProvider } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "./RootLayout"
import { CryptoPrice } from "./CryptoPrice"
import { CryptoSymbolExplorer } from "./CryptoSymbolExplorer"
import { CryptoSymbolProvider } from "#shared/cryptoSymbolContext"
import { theme } from "#shared/design/theme"

const queryClient = new QueryClient()

export default function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CryptoSymbolProvider>
          <RootLayout>
            <CryptoPrice />
            <CryptoSymbolExplorer />
          </RootLayout>
        </CryptoSymbolProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
