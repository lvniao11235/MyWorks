<template>
    <div class="a-page-text">
        <PageContainer :clazz="'a-card-fullpage'">
            <CardHeader slot="header" :title="'文本编辑器'" :hasBack="true"></CardHeader>
            <div class="a-richtext-container" slot="content">
                <quillEditor v-model="content"
                    ref="myQuillEditor" 
                    :options="editorOption">
                </quillEditor>
            </div>
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../widgets/cards/PageContainer';
import CardHeader from '../widgets/cards/CardHeader';
import { quillEditor } from "vue-quill-editor";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    components:{
        PageContainer, CardHeader, quillEditor
    },
    data:function(){
        return {
            content:"",
            editorOption:{}
        }
    },
    methods:{
    }
}
</script>

<style>
.a-page-text .a-card-fullpage{
    background-color:#fff;
}

.a-richtext-container,
.a-richtext-container > div{
    width:100%;
    height:60%;
    position:relative;
}

.a-richtext-container{
    box-sizing:border-box;
    padding:5px;
}

.a-page-text .quill-editor{
    width:100%;
    height:100%;
    position:relative;
}

.quill-editor .ql-toolbar{
    background-color:#fff;
}

</style>