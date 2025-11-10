import { PropsWithChildren } from "react";

type Props = PropsWithChildren;


export default function RootLayout({children}: Props) {
  return (
    <div className="mt-24">
        {children}
    </div>
  );
}
