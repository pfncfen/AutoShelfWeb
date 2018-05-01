<template>
    <div class="table">
        <div class="crumbs">
            <i class="el-icon-view"></i><span>Overview: Store Overview</span>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="select_cate" placeholder="State" class="handle-select mr10">
                    <el-option key="1" label="UT" value="Utah"></el-option>
                    <el-option key="2" label="CA" value="California"></el-option>
                    <el-button type="primary" icon="search" @click="search">Search</el-button>
                </el-select>
                <el-input v-model="select_word" placeholder="Search with keywords" class="handle-input mr10"></el-input>
            </div>
            <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column label="Operation" width="150" align="center">
                    <template slot-scope="scope">
                        <el-button size="small"
                                @click="handleEdit(scope.$index, scope.row)">Go to Store</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="Store ID" sortable width="150">
                </el-table-column>
                <el-table-column prop="name" label="Owner" width="200">
                </el-table-column>
                <el-table-column prop="address" label="Address">
                </el-table-column>
                <el-table-column prop="name" label="Phone Number" width="200">
                </el-table-column>
                <el-table-column label="Status"  width="100" align="center">
                    <template slot-scope="scope">
                        <i class="el-icon-warning"></i>
                    </template>
                </el-table-column>
                
            </el-table>
            <div class="pagination">
                <el-pagination
                        @current-change ="handleCurrentChange"
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //TODO: Set Autoshelf api here.
                url: './stores',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false
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

                if(process.env.NODE_ENV === 'development'){
                    this.url = '/ms/table/list';
                };
                this.$axios.post(this.url, {page:this.cur_page}).then((res) => {
                    this.tableData = res.data.list;
                })
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
                this.$message('Go to Store'+(index+1));
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