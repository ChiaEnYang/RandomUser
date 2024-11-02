const { createApp } = Vue

createApp({
    data() {
        return {
            api: 'https://randomuser.me/api/?results=6',
            myData: {},
            users: [],
            imgType: 'large',
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            fetch(this.api)
                .then(function (response) {
                    // 接收資料 接著 以json格式傳到下一個then
                    return response.json();
                })
                // 接收資料 將資料存放到data
                .then((json) => {
                    console.log(json);
                    this.myData = json;
                    this.users = this.myData.results;
                })
        },
        switchImg() {
            if (this.imgType === 'thumbnail') {
                this.imgType = 'medium';
            } else if (this.imgType === 'medium') {
                this.imgType = 'large';
            } else if (this.imgType === 'large') {
                this.imgType = 'thumbnail';
            }
        }
    }
}).mount('#app')