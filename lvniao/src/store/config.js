export default{
    state:{
        currentSkin:"lv-skin-green",
        longName:'Lvniao',
        shortName:'LV',
        minWidth:760,
        skins:[
            'lv-skin-blue', 'lv-skin-green', 'lv-skin-red', 
            'lv-skin-yellow', 'lv-skin-white', 'lv-skin-purple'
        ],
        currentLeftMenuId:0,
        leftMenu:[
            { id:1, icon:"fa fa-home", text:"主页", url:"/home"}, 
            { id:4, icon:"fa fa-th", text:"布局", url:"/layout"}, 
            {
                id:2, icon:"fa fa-gears", text:"组件", items:[
                    {id:21, icon:"fa fa-bars", text:"表单", url:"/form"},
                    {id:22, icon:"fa fa-table", text:"表格", url:"/table"},
                    {id:23, icon:"fa fa-window-maximize", text:"对话框", url:"/dialog"}
                ]
            }, {
                id:3, icon:"fa fa-edit", text:"编辑器", items:[
                    {id:31, icon:"fa fa-file-text-o", text:"富文本", url:"/richtext"},
                    {id:32, icon:"fa fa-file-code-o", text:"Markdown", url:"/markdown"}
                ]
            }, {
                id:5, icon:"fa fa-bar-chart", text:"图表", url:"/chart"
            },
        ],
        currentTab:{}
    },
    mutations:{
        changeCurrentSkin(currentState, skin){
            currentState.currentSkin = skin;
        },
        changeCurrentLeftMenuId(currentState, id){
            currentState.currentLeftMenuId = id;
        },
        changeCurrentTab(currentState, tab){
            currentState.currentTab = tab;
        }
    }
}