type ChildrenProps = {
  children: React.ReactNode;
};

export function Children(props: ChildrenProps) {
  return <div>{props.children}</div>;
}

type StringChildrenProps = {
  children: string;
};

export function StringChildren(props: StringChildrenProps) {
  return <div>{props.children}</div>;
}
