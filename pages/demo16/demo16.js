// pages/demo16/demo16.js
Page({
    data: {
        list: [
            {
                id: 0,
                name: "π",
                value: "apple"
            },
            {
                id: 1,
                name: "π",
                value: "grape"
            },
            {
                id: 2,
                name: "π",
                value: "banana"
            }
        ],
        checkedList: []
    },
    // ε€ιζ‘ηιδΈ­δΊδ»Ά
    handleItemChange(e) {
        // 1 θ·εθ’«ιδΈ­ηε€ιζ‘ηεΌ
        const checkedList = e.detail.value;
        // 2 θΏθ‘θ΅εΌ
        this.setData({
            checkedList
        })
    }
})