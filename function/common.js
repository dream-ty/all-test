// 数字转换千分位
export function toThousands(num, pointLength) {
  num = Number(num)
  if (!num) return 0
  const _value = num.toString()
  const tempArr = _value.split('.')
  const startValue = tempArr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  const endValue = pointLength ? (num.toFixed(pointLength)).split('.')[1] : tempArr[1]
  const noDecimalPointValue = tempArr.length > 1 ? startValue + '.' + endValue : startValue

  return pointLength ? startValue + '.' + endValue : noDecimalPointValue
}

// 千分位转换回数字
export function delcommafy(num) {
  num = (num + '').trim()
  if (num === '') {
    return 0
  }
  num = num && num.replace(/,/gi, '')
  return Number(num) || 0
}
