<template>
    <div class="table">
        <div class="crumbs">
            <i class="el-icon-view"></i><span>Overview: Shelf Overview</span>
        </div>
        <div class="container">
            <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="账户信息" name="first">
                    <account />
                </el-tab-pane>
                <el-tab-pane label="出借记录" name="second">
                    <upload />
                </el-tab-pane>
                <el-tab-pane label="债转记录" name="third">债转记录</el-tab-pane>
                <el-tab-pane label="还款计划" name="fourth">还款计划</el-tab-pane>
                <el-tab-pane label="资金明细" name="fifth">资金明细</el-tab-pane>
                <el-tab-pane label="优惠记录" name="sixth">优惠记录</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import account from './invest/test.vue'
    import upload from './invest/upload.vue'

    Vue.component('account', account)
    Vue.component('upload', upload)
    export default {
        component: {
            account,
            upload
        },
        data() {
            return {
                activeName: 'first'
            }
        },
        created(){
            this.getData();
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
            handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            },
            getData(){

            },
            search(){
                this.is_search = true;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
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
