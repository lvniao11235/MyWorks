<template>
    <div class="a-admin-page a-page-main">
        <div class="a-row">
            <div class="a-col-lg-25 a-col-md-50 a-col-sm-100">
                <div class="a-main-summary">
                    <div class="a-main-summary-icon fa fa-envelope"
                        style="background-color:#00a65a"></div>
                    <div class="a-main-summary-text">
                        <div>未读邮件</div>
                        <div>88</div>
                    </div>
                </div>
            </div>
            <div class="a-col-lg-25 a-col-md-50 a-col-sm-100">
                <div class="a-main-summary">
                    <div class="a-main-summary-icon fa fa-bell"
                        style="background-color:#3c8dbc"></div>
                    <div class="a-main-summary-text">
                        <div>未处理通知</div>
                        <div>10</div>
                    </div>
                </div>
            </div>
            <div class="a-col-lg-25 a-col-md-50 a-col-sm-100">
                <div class="a-main-summary">
                    <div class="a-main-summary-icon fa fa-tasks"
                        style="background-color:#dd4b39"></div>
                    <div class="a-main-summary-text">
                        <div>未完成任务</div>
                        <div>8</div>
                    </div>
                </div>
            </div>
            <div class="a-col-lg-25 a-col-md-50 a-col-sm-100">
                <div class="a-main-summary">
                    <div class="a-main-summary-icon fa fa-users"
                        style="background-color:#f39c12"></div>
                    <div class="a-main-summary-text">
                        <div>新增员工</div>
                        <div>20</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="a-row">
            <div class="a-col-lg-100 a-col-md-100" >
                <div class="a-window" style="height:150px;">
                </div>
            </div>
        </div>
        <div class="a-row">
            <div class="a-col-lg-75 a-col-md-100" >
                <div class="a-window" style="height:390px;">
                </div>
            </div>
            <div class="a-col-lg-25 a-summary-list a-col-md-100">
                <div class="a-main-summary">
                    <div class="a-main-summary-icon fa fa-envelope"
                        style="background-color:#00a65a"></div>
                    <div class="a-main-summary-text">
                        <div>未读邮件</div>
                        <div>88</div>
                    </div>
                </div>
                <div class="a-main-summary">
                    <div class="a-main-summary-icon fa fa-bell"
                        style="background-color:#3c8dbc"></div>
                    <div class="a-main-summary-text">
                        <div>未处理通知</div>
                        <div>10</div>
                    </div>
                </div>
                <div class="a-main-summary">
                    <div class="a-main-summary-icon fa fa-tasks"
                        style="background-color:#dd4b39"></div>
                    <div class="a-main-summary-text">
                        <div>未完成任务</div>
                        <div>8</div>
                    </div>
                </div>
                <div class="a-main-summary">
                    <div class="a-main-summary-icon fa fa-users"
                        style="background-color:#f39c12"></div>
                    <div class="a-main-summary-text">
                        <div>新增员工</div>
                        <div>20</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style>
.a-page-main{
    position:relative;
}

.a-main-summary{
    height:90px;
    width:100%;
    background-color:#fff;
    line-height:90px;
    vertical-align:middle;
    position:relative;
}

.a-main-summary>div{
    display:inline-block;
}

.a-main-summary-icon{
    width:90px;
    height:90px;
    line-height:90px;
    vertical-align:middle;
    text-align:center;
    font-size:45px;
    color:#fff;
    float:left;
}

.a-summary-list .a-main-summary{
    margin-bottom:10px;
}

.a-summary-list .a-main-summary:last-child{
    margin-bottom:0px;
}

.a-main-summary-text{
    height:50px;
    line-height:20px;
    width:calc(100% - 95px);
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    display:table;
}

.a-main-summary-text div:first-child{
    height:20px;
    font-size:14px;
    line-height:20px;
    vertical-align:middle;
    color:#999;
}
.a-main-summary-text div:last-child{
    height:30px;
    font-size:30px;
    line-height:30px;
    vertical-align:middle;
    font-weight:bold;
}

.a-window{
    position:relative;
    background-color:#fff;
}

.a-span-2-5 .a-main-summary{
    margin-bottom:10px;
}

.a-span-2-5 .a-main-summary:last-child{
    margin-bottom:0px;
}

</style>