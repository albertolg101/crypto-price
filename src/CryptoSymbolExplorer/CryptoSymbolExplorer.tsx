import React from "react"
import { Autocomplete, FormControl, TextField } from "@mui/material"
import { useCryptoSymbol } from "#shared/cryptoSymbolContext"

export function CryptoSymbolExplorer(): React.JSX.Element {
  const { availableSymbols, setSymbol } = useCryptoSymbol()
  const [error, setError] = React.useState(false)

  return (
    <FormControl error={error}>
      <Autocomplete
        options={availableSymbols}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select a crypto symbol"
            variant="outlined"
          />
        )}
        onChange={(_, value) => {
          if (value !== null) {
            setSymbol(value)
            setError(false)
          }
        }}
      />
    </FormControl>
  )
}
