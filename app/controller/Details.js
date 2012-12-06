Ext.define('FirstApp.controller.Details', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            placesNavView:'placesContainer',
            favoritesNavView:'favoritesContainer'
        },
        control: {
            'placesContainer places list':{
                itemtap:function(list,index,target,record){

                    var details = Ext.create('FirstApp.view.Details');
                    details.setData(record.data);
                    this.getPlacesNavView().push(details);

                    this.application.fireEvent('detailsShown',{
                        data:record.data,
                        button:details.getItems().items[0]
                    });
                }
            },
            'favoritesContainer favorites list':{
                itemtap:function(list,index,target,record){

                    var details = Ext.create('FirstApp.view.Details');
                    details.setData(record.data);
                    this.getFavoritesNavView().push(details);

                    this.application.fireEvent('detailsShown',{
                        data:record.data,
                        button:details.getItems().items[0]
                    });
                }
            }

        }
    }
    ,init:function(application){
        this.application = application;
    }
});