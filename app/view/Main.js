Ext.define("FirstApp.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype:'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype:'home'
            },
            {
                xtype:'placesContainer'
            },
            {
                xtype:'favoritesContainer'
            }
             ]
    }
});
