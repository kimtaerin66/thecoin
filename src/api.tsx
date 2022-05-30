const URL = `https://api.upbit.com/v1`;

// (`https://api.upbit.com/v1/market/all`);
export function fetchAll() {
  return fetch(`${URL}/market/all`).then((res) => res.json());
}

// (`https://api.upbit.com/v1/ticker?markets=${market}`)

export function fetchPrice(market: string) {
  return fetch(`${URL}/ticker?markets=${market}`).then((res) => res.json());
}
// (`https://api.upbit.com/v1/ticker?markets=KRW-XRP&count=14`)
export function fetchCandles(market: string) {
  const endDate = Date.now();
  return fetch(`${URL}/candles/weeks?market=${market}&count=14`).then((res) =>
    res.json()
  );
}
