"use client";
import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"
import type { ComponentProps } from "react"

export const SubmitButton = ({ children, ...props }: ComponentProps<typeof Button>) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} type="submit" aria-disabled={pending}>
      {pending ? <span className="animate">Submitting</span> : children}
    </Button>
  );
}

