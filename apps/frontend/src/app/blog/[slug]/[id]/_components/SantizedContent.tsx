"use client";
import DOMPurify from "dompurify";

type Props = {
    content: string,
    className?: string
}

export default function SantizedContent(props: { className?: string; content: string; isHtml?: boolean }) {
  if (props.isHtml) {
    const cleanHtml = DOMPurify.sanitize(props.content)
    return (
      <div
        className={props.className}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    )
  }
  return <div className={props.className}>{props.content}</div>
}
