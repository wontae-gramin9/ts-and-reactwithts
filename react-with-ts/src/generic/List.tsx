// List의 원소가 string이 올지, number가 올지 모르니
// Generic으로 변수화
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// ListProps<T>로 Generic을 해주면 좋은데,
// T가 어떤 값이 될 수 있느냐를 또 묻는다
// → 타입 상속

// Restriction을 주는 법
// T extends string | number
// T extends { id: string }
export default function List<T extends {}>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h2>List of</h2>
      {items.map((item, idx) => (
        <div key={idx} onClick={() => onClick(item)}>
          {item.toString()}
        </div>
      ))}
    </div>
  );
}
