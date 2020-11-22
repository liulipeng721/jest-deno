const { add } = require("../index");
/** 测试方法 **/
test("add() 1+1 的方法是否等于2", () => {
    // 测试三部曲
    // 1.参数 a,b
    const a = 1;
    const b = 1;
    // 2.触发的测试动作 
    const res = add(a, b);
    // 3.测试匹配器 验证结果
    expect(res).toBe(2);
});

// it("add() a + b = c", () => {
//   const reslut = add(1, 5);
//   expect(reslut).toBe(6);
// });
