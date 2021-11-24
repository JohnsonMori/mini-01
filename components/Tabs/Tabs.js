// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        tabs: [
            {
                id: 0,
                name: "首页",
                isActive: true
            },
            {
                id: 1,
                name: "原创",
                isActive: false
            },
            {
                id: 2,
                name: "分类",
                isActive: false
            },
            {
                id: 3,
                name: "关于",
                isActive: false
            }
        ]
    },

    /**
     * 1 页面.js 文件中 存放事件回调函数的时候 存放在data同层级下！！！
     * 2 组件.js 文件中 存放事件回调函数的时候 必须要存放在 methods中！！！
     */
    methods: {
        handleItemTap(e) {
            /**
             * 1 绑定点击事件 需要在methods中绑定
             * 2 获取被点击的索引
             * 3 获取原数组
             * 4 对数组循环
             *  1 给每一个循环项 选中属性 改为 false
             *  2 给 当前的索引的 项 添加激活选中效果就可以了！！！
             */
            // 2 获取索引
            const { index } = e.currentTarget.dataset;
            // 3 获取data中的数组
            // let { tabs } = this.data;
            let tabs = JSON.parse(JSON.stringify(this.data.tabs))
            // 4 循环数组
            // [].foreach 遍历数组 遍历数组的时候 修改了 v，也会导致源数组被修改
            tabs.forEach((v, i) => {
                v.isActive = i === index;
            });
            this.setData({
                tabs
            });
        }
    }
})
