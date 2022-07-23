import { useAppStore } from '@/store';

function toolPermission(el, value) {
  const { permission } = useAppStore();
  if (typeof value === 'string') {
    if (value && !permission[value]) {
      el.parentNode && el.parentNode.removeChild(el); // 关键代码, 没有权限则删除元素
    }
  } else if (Array.isArray(value)) {
    // value 数组
    const [p, ...flags] = value;
    // 后续条件
    const flag = flags.every((i) => i);
    if ((p && !permission[p]) || !flag) {
      el.parentNode && el.parentNode.removeChild(el); // 关键代码, 没有权限 或者传入条件有false 则删除元素
    }
  }
}

export default {
  mounted(el, binding) {
    toolPermission(el, binding.value);
  },
  updated(el, binding) {
    toolPermission(el, binding.value);
  }
};
