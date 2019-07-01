<template>
    <div class="lv-richtext lv-page">
        <quillEditor v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption">
        </quillEditor>
        <button @click="getContent" style="margin-top:5px;">getcontent</button>
    </div>
</template>

<script>

import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    components: {
        quillEditor
    },
    data:function(){
        return {
            content:"",
            editorOption:{}
        }
    },
    methods:{
        getContent(){
        },
        resizeHandle(){
            var editor = document.querySelector(".lv-richtext .quill-editor");
            editor.style.marginBottom = editor.children[0].clientHeight + 2 + "px";
        }
    },
    mounted(){
        var editor = document.querySelector(".lv-richtext .quill-editor");
        editor.children[0].clientHeight
        this.widgetEventBus.$on("resize", this.resizeHandle);
        this.$nextTick(function(){
            this.resizeHandle();
        })
        
    },
    inject:['widgetEventBus'],
}
</script>

<style>
    .lv-richtext .quill-editor{
        width:100%;
        height:300px;
    }
</style>