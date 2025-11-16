import { Children, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    modal: ReactNode
}>;


export default function PostsLayout({children, modal}: Props) {
  return (
    <div>
        {children}
        {modal}
    </div>
  );
}

