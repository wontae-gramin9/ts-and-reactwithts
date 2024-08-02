// 'left-center'
// 'left-top'
// 'left-bottom'
// 'center'
// 'center-top'
// 'center-bottom'
// 'right-center'
// 'right-top'
// 'right-bottom'

// 을 일일히 UNION하지 않고 3x3이니까
type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "left" | "center" | "right";
type ToastPosition = {
  // 그런데 center-center는 좀... .
  // → Exclude로 제외하기
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastPosition) => {
  return <div>Toast Notification Position - {position} </div>;
};
