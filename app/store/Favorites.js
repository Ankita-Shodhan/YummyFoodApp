Ext.define('FirstApp.store.Favorites',{
    extend:'Ext.data.Store',
    config:{
        model:'FirstApp.model.Place',
        autoLoad:true,
        proxy:{
            type:'localstorage',
            id:'favorites'
        }

    }
})