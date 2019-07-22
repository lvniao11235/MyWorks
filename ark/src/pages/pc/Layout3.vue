<template>
    <div class="a-admin-page a-page-layout3">
        <div class="a-row">
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-100">
            </div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-100">
            </div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-100">
            </div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-100">
            </div>
        </div>
        <div class="a-row">
            <div class="section a-col-lg-10 a-col-md-50 a-col-sm-100">
            </div>
            <div class="section a-col-lg-15 a-col-md-50 a-col-sm-100">
            </div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-100">
            </div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-100">
            </div>
            <div class="section a-col-lg-25 a-col-md-50 a-col-sm-100">
            </div>
        </div>
        <div class="a-row">
            <div class="section a-col-lg-75 a-col-md-50 a-col-sm-100" style="height:230px">
            </div>
            <div class="a-col-lg-25 a-col-md-50 a-col-sm-100">
                <div class="section a-col-lg-100" style="margin-bottom:10px;"></div>
                <div class="section a-col-lg-100" style="margin-bottom:10px;"></div>
                <div class="section a-col-lg-100" style="margin-bottom:10px;"></div>
                <div class="section a-col-lg-100"></div>
            </div>
        </div>
        <div class="a-row">
            <div class="section a-col-lg-5">1</div>
            <div class="section a-col-lg-5">2</div>
            <div class="section a-col-lg-5">3</div>
            <div class="section a-col-lg-5">4</div>
            <div class="section a-col-lg-5">5</div>
            <div class="section a-col-lg-5">6</div>
            <div class="section a-col-lg-5">7</div>
            <div class="section a-col-lg-5">8</div>
            <div class="section a-col-lg-5">9</div>
            <div class="section a-col-lg-5">10</div>
            <div class="section a-col-lg-5">11</div>
            <div class="section a-col-lg-5">12</div>
            <div class="section a-col-lg-5">13</div>
            <div class="section a-col-lg-5">14</div>
            <div class="section a-col-lg-5">15</div>
            <div class="section a-col-lg-5">16</div>
            <div class="section a-col-lg-5">17</div>
            <div class="section a-col-lg-5">18</div>
            <div class="section a-col-lg-5">19</div>
            <div class="section a-col-lg-5">20</div>
        </div>
        <div class="a-row">
            <div class="section a-col-lg-10">1</div>
            <div class="section a-col-lg-10">2</div>
            <div class="section a-col-lg-10">3</div>
            <div class="section a-col-lg-10">4</div>
            <div class="section a-col-lg-10">5</div>
            <div class="section a-col-lg-10">6</div>
            <div class="section a-col-lg-10">7</div>
            <div class="section a-col-lg-10">8</div>
            <div class="section a-col-lg-10">9</div>
            <div class="section a-col-lg-10">10</div>
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style>
.a-row{
    font-size:0px;
}

.a-row > *{
    font-size:14px;
    box-sizing:border-box;
    display:inline-block;
	float:left;
	position:relative;
    box-sizing:border-box;
}

.a-row > * > *{
    width:100%;
}

.section{
    height:50px;
    background-color:gray;
}

@media screen  and (min-width:1200px){
	.a-col-lg-5{
        width:calc(5% - 10px);
        margin:5px;
    }

	.a-col-lg-10{
        width:calc(10% - 10px);
        margin:5px;
    }
	
	.a-col-lg-15{
        width:calc(15% - 10px);
        margin:5px;
    }

    .a-col-lg-20{
        width:calc(20% - 10px);
        margin:5px;
    }
	
    .a-col-lg-25{
        width:calc(25% - 10px);
        margin:5px;
    }
	
    .a-col-lg-30{
        width:calc(30% - 10px);
        margin:5px;
    }
	.a-col-lg-75{
        width:calc(75% - 10px);
        margin:5px;
    }
    .a-col-lg-100{
        width:calc(100% - 10px);
        margin:5px;
    }
}

@media screen  and (min-width:960px) and (max-width:1200px){
	.a-col-md-50{
        width:calc(50% - 10px);
        margin:5px;
    }
	.a-col-md-100{
        width:calc(100% - 10px);
        margin:5px;
    }
}

@media screen  and (min-width:720px) and (max-width:960px){
	.a-col-sm-100{
        width:calc(100% - 10px);
        margin:5px;
    }
}

@media screen  and (max-width:720px){
	.a-col-xs-100{
        width:calc(100% - 10px);
        margin:5px;
    }
}
</style>