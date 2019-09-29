'use strict';

// mark and sweep 标记、清除
// 1. 从全局找到、标记所有的根
// 2. 标记(删除)根的引用
// 3. 遍历标记的对象、（删除）标记引用
// 4. 删除未标记的引用

// 引擎的优化：
// - 分代收集：先完成工作的先释放，长期存活的减少检查次数
// - 增量收集：分批，不同标记
// - 闲时收集：CPU闲时收集

