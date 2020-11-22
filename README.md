

# jest前端单元测试

### 运行环境nodejs

### 下载jest库  ------ npm install jest -D

### 创建jests文件夹

#### 		使用xxx.jest.js文件 或者 xxx.spec.js文件	

#### 		 test库会自动识别该文件

## .test.js、.spec.js文件

###### 使用test()方法  或者it()方法

1.引入需要测试的文件或方法

```js
const { add } = require("../index");
```

2.编写测试逻辑

```js
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
```



## 运行test

### 	在package.json script对象中编写运行指令

```
"scripts": {
    "test": "jest"
  },
  
  
  npm test  执行测试指令
```

