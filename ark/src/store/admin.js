export default{
    state:{
        longName:'Ark',
        shortName:'A',
        minWidth:760,
        functions:[
            {id:2, text:"选择皮肤", icon:"fa fa-paint-brush", component:"skin"},
            {id:1, text:"用户信息", icon:"fa fa-user-o"},
        ],
        currentLeftMenuId:1,
        leftMenu:[
            { id:1, icon:"fa fa-home", text:"主页", url:"/pc/main"}, 
            { id:4, icon:"fa fa-th", text:"布局", url:"/pc/layout"}, 
            {
                id:2, icon:"fa fa-gears", text:"组件", items:[
                    {id:21, icon:"fa fa-bars", text:"表单", url:"/pc/form"},
                    {id:22, icon:"fa fa-table", text:"表格", url:"/pc/table"},
                    {id:23, icon:"fa fa-window-maximize", text:"对话框", url:"/pc/dialog"}
                ]
            }, {
                id:3, icon:"fa fa-edit", text:"编辑器", items:[
                    {id:31, icon:"fa fa-file-text-o", text:"富文本", url:"/pc/richtext"},
                    {id:32, icon:"fa fa-file-code-o", text:"Markdown", url:"/pc/markdown"}
                ]
            }, {
                id:5, icon:"fa fa-bar-chart", text:"图表", url:"/pc/chart"
            },
        ],
        firstPage:{ id:1, icon:"fa fa-home", text:"主页", url:"/pc/main"},
        currentTab:{}
    },
    mutations:{
        changeCurrentLeftMenuId(currentState, id){
            currentState.currentLeftMenuId = id;
        },
        changeCurrentTab(currentState, tab){
            currentState.currentTab = tab;
        },
    }
}