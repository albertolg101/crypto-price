import type React from "react"
import { useCryptoSymbol } from "#shared/cryptoSymbolContext"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getCryptoPrice } from "#shared/services/crypto"
import { Box, Typography } from "@mui/material"

export function CryptoPrice(): React.JSX.Element {
  const { symbol } = useCryptoSymbol()

  const { data } = useSuspenseQuery({
    queryKey: ["cryptoPrice", symbol],
    queryFn: () => getCryptoPrice(symbol),
  })

  return (
    <Box>
      <Typography variant="h1">
        {symbol === undefined
          ? "Select a symbol"
          : data === null
            ? "Price not found"
            : `Price: $${data.price}`}
      </Typography>
    </Box>
  )
}
