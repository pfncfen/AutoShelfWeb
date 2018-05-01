<template>
    <div>
        <div class="ms-doc">
            <article>
                <h1>AutoShelf</h1>
                <h2>Introduction</h2>
                <p> AutoShelf is to solve a real world problem for retail stores that don’t have a comprehensive inventory system. Normally a complicated store inventory management system with high cost license is a concern for low budget stores. As a result, a large number of those types of stores still use traditional methods for inventory management, which is to manually record everything on a notebook or spreadsheet, and try to memorize most of the things in mind. For stock control, they tend to rely on statistical analysis tools to analyze data obtained after a time of period. The traditional way of inventory management becomes an issue for them to grow their business, especially when there is a need to expand their stores, sell more products, and win more market share.  </p>
                <h2>Team BlockChain</h2>
                <p>Team Members:</p>
                <template>
                    <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="name" label="Name" width="150">
                    </el-table-column>
                    <el-table-column prop="email" label="Email" width="180">
                    </el-table-column>
                    <el-table-column prop="role" label="Role">
                    </el-table-column>
                    </el-table>
                </template>
                <h2>Project Information</h2>
                <p>Backend: Java SpringBoot</p>
                <p>Frontend: Vue+ElementUI</p>
                <p>Database: MySQL</p>

            </article>
        </div>

    </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            name: 'Dongrong Li',
            email: 'sample@illinois.edu',
            role: 'Team Lead, iOS app developer, DB schema design'
          }, {
            name: 'Jinggong Zheng',
            email: 'sample@illinois.edu',
            role: 'Backend developer, iOS app developer, DB schema design'
          }, {
            name: 'Bin Dong',
            email: 'sample@illinois.edu',
            role: 'Web developer, DB schema design'
          }, {
            name: 'Nuradin Ahmed',
            email: 'sample@illinois.edu',
            role: ''
          }]
        }
      }
    }
  </script>

<style scoped>
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
</style>