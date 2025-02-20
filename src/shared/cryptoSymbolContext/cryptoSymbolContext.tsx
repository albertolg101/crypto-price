import React from "react"
import { getCryptoSymbols } from "#shared/services/crypto"

interface CryptoContextType {
  symbol: string | undefined
  availableSymbols: string[]
  setSymbol: (symbol: string) => void
}

const CryptoContext = React.createContext<CryptoContextType | undefined>(
  undefined,
)

export function CryptoSymbolProvider({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  const [symbol, _setSymbol] = React.useState<string | undefined>(undefined)
  const [availableSymbols, setAvailableSymbols] = React.useState<string[]>([])

  React.useEffect(() => {
    getCryptoSymbols()
      .then((symbols) => {
        setAvailableSymbols(symbols)
      })
      .catch((error: unknown) => {
        console.error(error)
      })
  })

  function handleSetSymbol(symbol: string) {
    if (availableSymbols.includes(symbol)) {
      _setSymbol(symbol)
    }
  }

  return (
    <CryptoContext.Provider
      value={{ symbol, availableSymbols, setSymbol: handleSetSymbol }}
    >
      {children}
    </CryptoContext.Provider>
  )
}

export function useCryptoSymbol(): CryptoContextType {
  const context = React.useContext(CryptoContext)
  if (context === undefined) {
    throw new Error(
      "useCryptoSymbol must be used within a CryptoSymbolProvider",
    )
  }
  return context
}
