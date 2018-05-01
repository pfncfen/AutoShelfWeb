<template>
    <div class="table">
        <div class="crumbs">
            <i class="el-icon-view"></i><span>Overview: Shelf Overview</span>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="select_cate" placeholder="Store" class="handle-select mr10">
                    <el-option key="1" label="Store 1" value="Store 1"></el-option>
                    <el-option key="2" label="Store 2" value="Store 2"></el-option>
                    <el-option key="3" label="Store 3" value="Store 4"></el-option>
                    <el-option key="4" label="Store 4" value="Store 5"></el-option>
                    <el-option key="5" label="Store 5" value="Store 6"></el-option>
                </el-select>
                <el-select v-model="select_cate" placeholder="Shelf" class="handle-select mr10">
                    <el-option key="1" label="UT" value="Utah"></el-option>
                    <el-option key="2" label="CA" value="California"></el-option>
                </el-select>
            </div>

            <div class="handle-box">
                <el-input v-model="select_word" placeholder="Search with product keywords" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">Search</el-button>
            </div>

            <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">

                <el-table-column prop="date" label="Shelf ID" sortable width="150">
                </el-table-column>
                <el-table-column prop="name" label="Shelf Location" width="400" >
                </el-table-column>
                <el-table-column prop="address" label="Address" :formatter="formatter">
                </el-table-column>
                <el-table-column label="Operation" width="200" align="center">
                    <template slot-scope="scope">
                        <el-button size="small"
                                @click="handleEdit(scope.$index, scope.row)">View Details</el-button>
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
                //TODO: Add AutoShelf api here.
                url: './static/vuetable.json',
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
                //This is only for development.
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