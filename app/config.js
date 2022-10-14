window.setAppConfig = function () {
  return {
    /**
     * 金格云阅读后端服务接口地址
     * @type {String}
     */
    url: "http://192.168.34.130:8080/pdfviewer-demo/pdf",

    /**
     * 文档ID
     * 后端盖章、删除、验证时需要通过 documentId 匹配文档
     * @type {String}
     */
    // documentId: "2.pdf",
    documentId: "【政企LN-039-201909】集团代付业务使用协议.pdf",
    // documentId: "5.pdf", //通过云阅读预览上海高院提供的现场PDF文档-讯飞语音转字PDF文件case，eg：e0b2c3e1-4cae-4ede-9fd8-43634be45fb6(1).pdf
    // documentId: "3333333333333333333333.pdf", // 通过云阅读预览上海高院提供的现场问题PDF文档-单页多人签名case，eg：3333333333333333333333.pdf
    // documentId: "民事判决书.pdf", // 通过云阅读预览上海高院提供的现场PDF文档-法院防伪印章case文档：民事判决书.pdf
    // documentId: "章与位置偏移.pdf", // 通过云阅读预览上海高院提供的现场PDF文档-含iWebPDF加盖的高清章：章与位置偏移.pdf
    // documentId: "金格科技〔2006〕6号.pdf", // 通过云阅读预览，常规PDF测试文档case1：原KG制作的演示测试文档
    // documentId: "qfz_seal_gbsm2_fromkey_yyd.pdf", // 通过云阅读预览，常规PDF测试文档case2：含章的测试文档
    // documentId: "test_550_横向原文档_逆时针旋转90度.pdf", // 通过云阅读预览，常规PDF测试文档case4：含旋转角度的测试文档
    // documentId: "8-交互-图层书签附件文件大纲.pdf", // 通过云阅读预览，常规PDF测试文档case5：含附件的测试文档
    // documentId: "270-180.pdf", // 通过云阅读预览，常规PDF测试文档case6：含横竖向的测试文档
    // documentId: "20140925_iWebPDF横向书签无法定位（深圳宝安区政府）.pdf", // 通过云阅读预览，常规PDF测试文档case7：含书签的测试文档
    // documentId: "025_建施-23_人防标识总平面图_A0(1).pdf", // 通过云阅读预览，常规PDF测试文档case9：某客户应用的图纸类测试文档
    // documentId: "500M.pdf", // 通过云阅读预览，随机抽取“备注”常规PDF测试文档case10：某客户招投标应用的大文档>200M
    // documentId: "5-5-字体-Subtype=MMtype1(多主字体).pdf", // 随机抽取“备注”常规PDF测试文档case11：含多个内嵌文字的文档

    /**
     * 预览水印参数配置
     */
    previewWatermark: {
      // 水印内容
      text: "金格科技",
      // // 水印字体  黑体/楷体/宋体/微软雅黑
      font: "宋体",
      // // 水印字号
      size: 32,
      // 水印颜色 rgb格式
      color: "rgb(0,255,0)",
      // 旋转角度 0-360
      rotate: 45,
      // 不透明度 0-100
      opacity: 100,
      // 是否平铺  true / false
      isTiled: true,
      // 水印密度  0-100
      density: 100,
      // 垂直位置  top / middle / bottom
      vertical: "top",
      // 水平位置  left / center / right
      horizontal: "left",
    },
  };
};
