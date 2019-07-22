<template>
    <div class="a-admin-page a-page-layout1">
        <div class="a-row">
            <div class="section a-col-lg-25 a-col-md-33 a-col-sm-50 a-col-xs-100">1-1</div>
            <div class="section a-col-lg-25 a-col-md-33 a-col-sm-50 a-col-xs-hidden">1-2</div>
            <div class="section a-col-lg-25 a-col-md-33 a-col-sm-hidden a-col-xs-hidden">1-3</div>
            <div class="section a-col-lg-25 a-col-md-hidden a-col-sm-hidden a-col-xs-hidden">1-4</div>
        </div>
        <div class="a-row">
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-60 a-col-xs-100">2-1</div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-60 a-col-xs-100">2-2</div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-60 a-col-xs-100">2-3</div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-60 a-col-xs-100">2-4</div>
        </div>
        <div class="a-row">
            <div class="section a-col-lg-25 a-col-md-25 a-col-sm-25 a-col-xs-25"
                style="height:80px;">3-1</div>
            <div class="section a-col-lg-25 a-col-md-25 a-col-sm-25 a-col-xs-25"
                style="height:60px; margin-top:15px;">3-2</div>
            <div class="section a-col-lg-25 a-col-md-25 a-col-sm-25 a-col-xs-25"
                style="height:50px; margin-top:20px;">3-3</div>
            <div class="section a-col-lg-25 a-col-md-25 a-col-sm-25 a-col-xs-25"
                style="height:40px; margin-top:25px;">3-4</div>
        </div>
        <div class="a-row a-col-nopad">
            <div class="section a-col-nopad-lg-25 a-col-nopad-md-25 a-col-nopad-sm-25 a-col-nopad-xs-25"
                style="height:80px;">4-1</div>
            <div class="section a-col-nopad-lg-25 a-col-nopad-md-25 a-col-nopad-sm-25 a-col-nopad-xs-25"
                style="height:60px; margin-top:15px !important;">4-2</div>
            <div class="section a-col-nopad-lg-25 a-col-nopad-md-25 a-col-nopad-sm-25 a-col-nopad-xs-25"
                style="height:50px; margin-top:20px !important;">4-3</div>
            <div class="section a-col-nopad-lg-25 a-col-nopad-md-25 a-col-nopad-sm-25 a-col-nopad-xs-25"
                style="height:40px; margin-top:25px !important;">4-4</div>
        </div>
        <div class="a-row">
            <div class="a-col-lg-25 a-col-md-25 a-col-sm-25 a-col-xs-25">
                <div class="test" style="height:80px;"></div>
            </div>
            <div class="a-col-lg-25 a-col-md-25 a-col-sm-25 a-col-xs-25">
                <div class="test" style="height:60px;margin-top:10px;"></div>
            </div>
            <div class="a-col-lg-25 a-col-md-25 a-col-sm-25 a-col-xs-25">
                <div class="test" style="height:40px;margin-top:20px;"></div>
            </div>
            <div class="a-col-lg-25 a-col-md-25 a-col-sm-25 a-col-xs-25">
                <div class="test" style="height:20px;margin-top:30px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style>
.test{
    width:100%;
    border:1px solid green;
    box-sizing:border-box;
}
</style>