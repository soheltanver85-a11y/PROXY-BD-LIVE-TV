import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proxy Server",
  description: "Custom proxy for BD Live TV streams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
