// type PersonListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

// type을 선언하지 않는다면, 객체 prop을 일일히 특정한다
const ListOfNestedObject = ({
  names,
}: {
  names: {
    first: string;
    last: string;
  }[];
}) => {
  return (
    <div>
      {names.map(({ first, last }) => (
        <div key={first}>
          <span> {first}</span>
          <span> {last}</span>
        </div>
      ))}
    </div>
  );
};

export default ListOfNestedObject;
