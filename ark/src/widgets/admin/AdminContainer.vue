<template>
    <div class="a-admin-container">
        <div class="a-admin-head">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
        <div class="a-admin-leftside"></div>
        <div class="a-admin-content-container"></div>
        <div class="a-admin-foot"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.a-admin-container{
    position:relative;
    height:100%;
    width:100%;
    background-color:#fff;
    font-size:0px;
}

.a-admin-head,
.a-admin-leftside,
.a-admin-content-container,
.a-admin-foot{
    box-sizing:border-box;
    position:relative;
    display:inline-block;
    font-size:14px;
    padding:5px;
    
}

.a-admin-head{
    height:50px;
    width:100%;
    border-bottom:1px solid #c7c7c7;
    display:inline-box;
    display:-moz-box;
    display:-webkit-box;
    box-orient:horizontal;
    -moz-box-orient:horizontal;
    -webkit-box-orient:horizontal;
    -webkit-box-pack:justify;
    -moz-box-pack:justify;
    box-pack:justify;
}

.a-admin-head div{
    width:calc(25% - 10px);
    box-sizing:border-box;
    height:40px;
    border:1px solid red;
}



.a-admin-leftside{
    width:200px;
    height:calc(100% - 100px);
    border-right:1px solid #c7c7c7;
}

.a-admin-content-container{
    height:calc(100% - 100px);
    width:calc(100% - 200px);
}

.a-admin-foot{
    height:50px;
    width:100%;
    border-top:1px solid #c7c7c7;
}
</style>

