<template>
    <div class="a-admin-page a-page-layout1">
        <div class="aa-row-container">
            <div class="ablock aa-span-100"></div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-5">1</div>
            <div class="ablock aa-span-5">2</div>
            <div class="ablock aa-span-5">3</div>
            <div class="ablock aa-span-5">4</div>
            <div class="ablock aa-span-5">5</div>
            <div class="ablock aa-span-5">6</div>
            <div class="ablock aa-span-5">7</div>
            <div class="ablock aa-span-5">8</div>
            <div class="ablock aa-span-5">9</div>
            <div class="ablock aa-span-5">10</div>
            <div class="ablock aa-span-5">11</div>
            <div class="ablock aa-span-5">12</div>
            <div class="ablock aa-span-5">13</div>
            <div class="ablock aa-span-5">14</div>
            <div class="ablock aa-span-5">15</div>
            <div class="ablock aa-span-5">16</div>
            <div class="ablock aa-span-5">17</div>
            <div class="ablock aa-span-5">18</div>
            <div class="ablock aa-span-5">19</div>
            <div class="ablock aa-span-5">20</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-10">1</div>
            <div class="ablock aa-span-10">2</div>
            <div class="ablock aa-span-10">3</div>
            <div class="ablock aa-span-10">4</div>
            <div class="ablock aa-span-10">5</div>
            <div class="ablock aa-span-10">6</div>
            <div class="ablock aa-span-10">7</div>
            <div class="ablock aa-span-10">8</div>
            <div class="ablock aa-span-10">9</div>
            <div class="ablock aa-span-10">10</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-20">1</div>
            <div class="ablock aa-span-20">2</div>
            <div class="ablock aa-span-20">3</div>
            <div class="ablock aa-span-20">4</div>
            <div class="ablock aa-span-20">5</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-30">1</div>
            <div class="ablock aa-span-30">2</div>
            <div class="ablock aa-span-30">3</div>
            <div class="ablock aa-span-10">4</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-40">1</div>
            <div class="ablock aa-span-40">2</div>
            <div class="ablock aa-span-20">3</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-50">1</div>
            <div class="ablock aa-span-50">2</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-60">1</div>
            <div class="ablock aa-span-40">2</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-70">1</div>
            <div class="ablock aa-span-30">2</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-80">1</div>
            <div class="ablock aa-span-20">2</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-90">1</div>
            <div class="ablock aa-span-10">2</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-100">1</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-10">1</div>
            <div class="ablock aa-span-20">2</div>
            <div class="ablock aa-span-30">3</div>
            <div class="ablock aa-span-40">4</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-10">1</div>
            <div class="ablock aa-span-10">1</div>
            <div class="ablock aa-span-10">1</div>
            <div class="ablock aa-span-30">3</div>
            <div class="ablock aa-span-40">4</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-5">1</div>
            <div class="ablock aa-span-5">2</div>
            <div class="ablock aa-span-5">3</div>
            <div class="ablock aa-span-5">4</div>
            <div class="ablock aa-span-5">5</div>
            <div class="ablock aa-span-5">6</div>
            <div class="ablock aa-span-15">3</div>
            <div class="ablock aa-span-15">3</div>
            <div class="ablock aa-span-20">4</div>
            <div class="ablock aa-span-20">4</div>
        </div>
        <div class="aa-row-container">
            <div class="ablock aa-span-10">1</div>
            <div class="ablock aa-span-20">2</div>
            <div class="ablock aa-span-30">3</div>
            <div class="ablock aa-span-20">2</div>
            <div class="ablock aa-span-20">2</div>
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style>
.a-page-layout1{
}
.ablock{
    height:50px;
    background-color:gray;
}
.aa-row-container,
.aa-row-no-pad-container{
    box-sizing:border-box;
    box-orient:horizontal;
    -moz-box-orient:horizontal;
    -webkit-box-orient:horizontal;
    -webkit-box-pack:justify;
    -moz-box-pack:justify;
    box-pack:justify;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    -ms-flex-pack:justify;
    -ms-flex-align:justify;
}

.aa-row-container{
    padding:2.5px;
}

.aa-row-no-pad-container{
    padding:0px;
}

.aa-row-container > *{
    box-sizing:border-box;
}

@media screen  and (min-width:1200px){
    .aa-span-5{
        width:calc(5% - 5px);
        margin:auto 2.5px;
    }

    .aa-span-10{
        width:calc(10% - 5px);
        margin:0 2.5px;
    }

    .aa-span-15{
        width:calc(15% - 5px);
        margin:0 2.5px;
    }

    .aa-span-20{
        width:calc(20% - 5px);
        margin:0 2.5px;
    }

    .aa-span-25{
        width:calc(25% - 5px);
        margin:0 2.5px;
    }

    .aa-span-30{
        width:calc(30% - 5px);
        margin:0 2.5px;
    }

    .aa-span-35{
        width:calc(35% - 5px);
        margin:0 2.5px;
    }

    .aa-span-40{
        width:calc(40% - 5px);
        margin:0 2.5px;
    }

    .aa-span-45{
        width:calc(45% - 5px);
        margin:0 2.5px;
    }

    .aa-span-50{
        width:calc(50% - 5px);
        margin:0 2.5px;
    }

    .aa-span-55{
        width:calc(55% - 5px);
        margin:0 2.5px;
    }

    .aa-span-60{
        width:calc(60% - 5px);
        margin:0 2.5px;
    }

    .aa-span-65{
        width:calc(65% - 5px);
        margin:0 2.5px;
    }

    .aa-span-70{
        width:calc(70% - 5px);
        margin:0 2.5px;
    }

    .aa-span-75{
        width:calc(75% - 5px);
        margin:0 2.5px;
    }

    .aa-span-80{
        width:calc(80% - 5px);
        margin:0 2.5px;
    }

    .aa-span-85{
        width:calc(85% - 5px);
        margin:0 2.5px;
    }

    .aa-span-90{
        width:calc(90% - 5px);
        margin:0 2.5px;
    }

    .aa-span-95{
        width:calc(95% - 5px);
        margin:0 2.5px;
    }

    .aa-span-100{
        width:calc(100% - 5px);
        margin:0 2.5px;
    }
}

</style>