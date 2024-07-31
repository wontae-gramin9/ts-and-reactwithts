type ClickEventProps = {
  // arg(event)고, return값도 없을 때
  // handleClick: () => void;

  // event가 필요하고, return값이 없을 때
  // mouse event를 받는 html의 tag를 제너릭으로
  // handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

  // event필요한데, event말고도 다른 하나의 arg가 필요할 때
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function ClickEvent({ handleClick }: ClickEventProps) {
  return <button onClick={(e) => handleClick(e, 1)}>Button</button>;
}
