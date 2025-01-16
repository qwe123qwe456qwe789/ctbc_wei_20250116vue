console.log("測試")

const app =Vue.createApp({
    data() { 
        return{
            firstText: "嗨這是 VUE 的資料",
            textColor: "red",
            fontSize: 30,
            canBuy: false
        }
    }
});

app.mount("#app");