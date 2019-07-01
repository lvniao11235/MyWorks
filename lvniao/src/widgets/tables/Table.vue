<template>
    <div class="lv-table-widget">
        <table border="1" cellspacing="0"  cellpadding="0">
            <thead>
                <tr>
                    <th rowspan="2"><input type="checkbox"/></th>
                    <template v-for="title in titles">
                        
                        <th :rowspan="!title.titles ? 2:1" 
                            :colspan="title.titles ? title.titles.length:1" 
                            :key="title.text"
                            :style="{width:!title.titles ? columnsWidth:'auto'}"
                            >
                            {{title.text}}
                        </th>
                    </template>
                </tr>
                <tr>
                    <template v-for="title in titles">
                        <template v-for="subtitle in title.titles">
                            <th :key="subtitle.text" :style="{width:columnsWidth}">{{subtitle.text}}</th>
                        </template>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in data" :key="d.name">
                    <td><input type="checkbox"/></td>
                    <template v-for="e in d">
                        <td :key="e">{{e}}</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default{
    data:function(){
        return {
            titles:[
                {text:"姓名"},
                {text:"个人信息", titles:[
                    {text:"年龄"},
                    {text:"性别"},
                ]},
                {text:"联系方式", titles:[
                    {text:"邮箱"},
                    {text:"电话"},
                    {text:"邮编"},
                ]},
                {text:"状态"},
                {text:"籍贯", titles:[
                    {text:"省"},
                    {text:"市"},
                    {text:"区/县"},
                ]},
            ],
            data:[
                ["张三", 21, "男", "zhangsan@163.com", "87651234", "738299", "在职", "陕西", "西安", "雁塔区"],
                ["李四", 22, "nv", "lisi@162.com", "32457281", "728433", "离职", "陕西", "渭南", "临渭区"],
            ],
            columns:0,
            columnsWidth:""
        }
    },
    mounted(){
        this.columns = 0;
        for(var i; i<this.titles.length; i++){
            if(this.titles[i].titles){
                this.columns += this.titles[i].titles.length;
            } else {
                this.columns += 1;
            }
        }
        this.columnsWidth = "calc(100%/" + this.columns + ")";
    }
}
</script>

<style>
.lv-table-widget{
    position:relative;
    width:calc(100% - 2px);
    height:calc(100% - 2px);
}

.lv-table-widget table{
    position:relative;
    width:100%;
    height:100%;
    border-color:#ccc; 
    border-collapse: collapse;
}

.lv-table-widget table,
.lv-table-widget table thead tr th{ 
    border:1px solid #e6e6e6; 
    background-color:#f2f2f2;
    height:38px;
    line-height:38px;
    vertical-align:middle;
    color:#666;
}
.lv-table-widget table tbody tr td{
    background-color:#fff;
    text-align:center;
    height:20px;
    line-height:20px;
}

</style>