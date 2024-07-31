type NestedObjectType = {
  name: {
    first: string;
    last: string;
  };
};

export const NestedObject = ({
  name: { first: firstName, last: lastName },
}: NestedObjectType) => {
  return (
    <div>
      {firstName}
      {lastName}
    </div>
  );
};
