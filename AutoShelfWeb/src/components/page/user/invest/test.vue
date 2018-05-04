<template>
    <div class="table">
        <div class="container">
            <pre>

            基本信息

            用户ID

            用户姓名

            注册手机号

            9288394

            陈文碧

            13512345678

            注册时间

            2017-12-01 11:21:11

            注册设备

            IOS

            注册来源

            自主注册

            实名认证

            330267839929929872

            电子账户

            621283774899299827
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        created(){
        },
        computed: {
            data(){
                return this.tableData.filter((d) => {
                    let is_del = false;
                    for (let i = 0; i < this.del_list.length; i++) {
                        if(d.name === this.del_list[i].name){
                            is_del = true;
                            break;
                        }
                    }
                    if(!is_del){
                        if(d.address.indexOf(this.select_cate) > -1 &&
                            (d.name.indexOf(this.select_word) > -1 ||
                            d.address.indexOf(this.select_word) > -1)
                        ){
                            return d;
                        }
                    }
                })
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 150px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>
