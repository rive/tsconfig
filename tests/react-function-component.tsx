import React, { ReactElement } from "react";

export interface FoobarProps {
  foobar: string;
}

export default function Foobar({ foobar }: FoobarProps): ReactElement {
  return <div>{foobar}</div>;
}
