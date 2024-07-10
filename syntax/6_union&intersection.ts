// UNION(\)
interface Bape {
  name: "bape";
  color: string;
  bape(): void;
}

interface Musinsa {
  name: "musinsa";
  color: string;
  putOn(): void;
}

function getGift(gift: Bape | Musinsa) {
  console.log(gift.color);
  if (gift.name === "bape") {
    gift.bape();
  } else {
    gift.putOn();
  }
}

// INTERSECTION(&)
interface Huawei {
  name: string;
  huawei(): void;
}

interface Xiaomi {
  name: string;
  color: string;
  xiaomi(): void;
}

const chinese: Huawei & Xiaomi = {
  name: "when",
  color: "blue",
  huawei() {},
  xiaomi() {},
};
