// 枚举类型
enum Direction {
  up=10,
  // up='10',
  down,
  left,
  right
}
console.log(Direction.up, Direction[0], Direction);
// Vue3 源码中的 patchFlags，用于标识节点更新的属性。
// packages/shared/src/patchFlags.ts
export const enum PatchFlags {
  TEXT = 1,                    // 动态文本节点
  CLASS = 1 << 1,              // 动态 class
  STYLE = 1 << 2,              // 动态 style
  PROPS = 1 << 3,              // 动态属性
  FULL_PROPS = 1 << 4,         // 具有动态 key 属性，当 key 改变时，需要进行完整的 diff 比较
  HYDRATE_EVENTS = 1 << 5,     // 具有监听事件的节点
  STABLE_FRAGMENT = 1 << 6,    // 子节点顺序不会被改变的 fragment
  KEYED_FRAGMENT = 1 << 7,     // 带有 key 属或部分子节点有 key 的 fragment
  UNKEYED_FRAGMENT = 1 << 8,   // 子节点没有 key 的 fragment
  NEED_PATCH = 1 << 9,         // 非 props 的比较，比如 ref 或指令
  DYNAMIC_SLOTS = 1 << 10,     // 动态插槽
  DEV_ROOT_FRAGMENT = 1 << 11, // 仅供开发时使用，表示将注释放在模板根级别的片段
  HOISTED = -1,                // 静态节点
  BAIL = -2                    // diff 算法要退出优化模式
}
// 加了const变异不一样
const enum Direction1 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log('Direction1', Direction1.Up);
// 枚举不能包含计算的
const enum Test {
  // A = "lin".length
}

