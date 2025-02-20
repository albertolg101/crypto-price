import type React from "react"
import { Stack } from "@mui/material"

export function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <Stack
      direction="column"
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack direction="column" gap={2} width={400}>
        {children}
      </Stack>
    </Stack>
  )
}
