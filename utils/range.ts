export default function (start: number, end?: number, step = 1) {
  const output = []

  if (!end) {
    end = start
    start = 0
  }

  for (let i = start; i <= end; i += step)
    output.push(i)

  return output
};
