import * as React from "react";
import { Html, Button } from "@react-email/components";

interface IProps {
  url: string
}

export function Email({ url }: IProps) {

  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}
