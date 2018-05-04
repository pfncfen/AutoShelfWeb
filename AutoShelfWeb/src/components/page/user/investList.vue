<template>
    <div class="table">
        <div class="crumbs">
            <span>用户管理>投资人列表</span>
        </div>
        <div class="container">

            <el-row :gutter="20">
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-input v-model="searchName" placeholder="姓名"></el-input>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-input v-model="searchMobile" placeholder="手机号"></el-input>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-select v-model="searchSrc" placeholder="用户来源">
                            <el-option
                                v-for="item in srcOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-select v-model="searchStatus" placeholder="状态">
                            <el-option
                                v-for="item in statusOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-button>搜索</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="用户ID"
                    sortable
                    width="150"
                >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="mobile"
                    label="登陆手机号">
                </el-table-column>
                <el-table-column
                    prop="regTime"
                    label="注册时间"
                    width="150"
                    :formatter="dateFormatter">
                </el-table-column>
                <el-table-column
                    prop="valideTime"
                    label="实名认证时间"
                    width="150"
                    :formatter="dateFormatter">
                </el-table-column>
                <el-table-column
                    prop="regDevice"
                    label="注册设备"
                    width="150"
                >

                </el-table-column>
                <el-table-column
                    prop="source"
                    label="来源"
                    width="150"
                    :filters="[{text:'邀友', value: 'friend'}, {text: '钱粒账单', value: 'ql'}, {text: '自主注册', value: 'own'}]"
                    :filter-method="srcFilterHandler"
                >
                    <template slot-scope="scope">
                        {{scope.row.source === 'friend' ? '邀友' : scope.row.source === 'ql' ? '钱粒账单' : '自主注册'}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="accStatus"
                    label="开户状态"
                    width="150"
                >
                    <template slot-scope="scope">
                        {{scope.row.accStatus === 'opened' ? '已开户' : scope.row.accStatus === 'unopened' ? '未开户' :
                        '未激活'}}

                    </template>
                </el-table-column>
                <el-table-column
                    prop="userStatus"
                    label="账号状态"
                    width="150"
                >
                    <template slot-scope="scope">
                        {{ '正常' }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="150"
                >
                    <template slot-scope="scope">
                        <el-button @click="jumpUserDetail(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import request from '../../../util/request'

    export default {
        data() {
            return {
                tableData: [],
                searchName: '',
                searchMobile: '',
                searchSrc: '',
                searchStatus: '',
                srcOptions: [{
                    value: 'friend',
                    label: '邀友'
                }, {
                    value: 'ql',
                    label: '钱粒账单'
                }, {
                    value: 'own',
                    label: '自主注册'
                }],
                statusOptions: [{
                    value: 'opened',
                    label: '已开户'
                }, {
                    value: 'unopened',
                    label: '未开户'
                }, {
                    value: 'unvalidate',
                    label: '未激活'
                }],


            }
        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                return this.tableData;
            }
        },
        methods: {
            jumpUserDetail(index, row) {
                this.$router.push('/userDetail?id=' + row.id)
            },
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            getData() {
                request('getInvestList', {page: this.cur_page}, (res) => {
                    console.log(res)
                    this.tableData = res.data.result;
                })
            },
            search() {
                this.is_search = true;
            },
            formatter(row, column) {
                return row.address;
            },
            dateFormatter(row, column) {
                return new Date(row[column.property]).toLocaleDateString();
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            srcFilterHandler(value, row) {
                return row.source === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第' + (index + 1) + '行');
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 150px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
</style>
