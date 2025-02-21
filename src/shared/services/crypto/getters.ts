const baseURL = "https://api.api-ninjas.com/v1"
const API_NINJAS_KEY = import.meta.env.VITE_API_NINJAS_KEY as string

export async function getCryptoSymbols(): Promise<string[]> {
  const url = new URL(`${baseURL}/cryptosymbols`)
  const res = await fetch(url, {
    headers: {
      "x-api-key": API_NINJAS_KEY,
    },
  })
  const data: unknown = await res.json()

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "symbols" in data &&
      Array.isArray(data.symbols) &&
      data.symbols.every((item) => typeof item === "string")
    )
  ) {
    throw new Error(
      `Invalid response from crypto symbols API. Received: ${JSON.stringify(data)}`,
    )
  }

  return data.symbols
}

interface CryptoPrice {
  symbol: string
  price: string
  timestamp: number
}

export async function getCryptoPrice(
  symbol?: string,
): Promise<CryptoPrice | null> {
  if (symbol === undefined) {
    return null
  }
  const url = new URL(`${baseURL}/cryptoprice`)
  url.searchParams.set("symbol", symbol)
  const res = await fetch(url, {
    headers: {
      "x-api-key": API_NINJAS_KEY,
    },
  })

  const data: unknown = await res.json()

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "symbol" in data &&
      typeof data.symbol === "string" &&
      "price" in data &&
      typeof data.price === "string" &&
      "timestamp" in data &&
      typeof data.timestamp === "number"
    )
  ) {
    throw new Error(
      `Invalid response from crypto price API. Received: ${JSON.stringify(data)}`,
    )
  }

  return data as CryptoPrice
}
