var UITree = function () {
    return {
        //main function to initiate the module
        init: function ()
		{
            var DataSourceTree = function (options)
			{
                this._data = options.data;
                this._delay = options.delay;
            };
            DataSourceTree.prototype =
			{
                data: function (options, callback)
				{
					if(options.id == null)
					{
						//alert('首次加载！');
					}
					//alert(options.id);
					var self = this;
					setTimeout(function ()
					{
						var data = $.extend(true, [], self._data);
						callback({ data: data });
					}, this._delay)
                }
            };
            var WBS_DataSource = new DataSourceTree({
                data: [
                    {
						id:'wbs_1',
						name: 'Projects<div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', 
						type: 'folder', 
						additionalParameters: { id: '1' } 
					},
                    { 
						id:'wbs_2',
						name: 'Reports<div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', 
						type: 'folder', 
						additionalParameters: { id: '2' }
					},
                    {
						id:'wbs_3',
						name: '<i class="fa fa-user yellow"></i>系统部署<div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', 
						type: 'item', 
						additionalParameters: { id: '3' } 
					},
                    {
						id:'wbs_4',
						name: '<i class="fa fa-calendar sky"></i>系统试运行<div class="tree-actions"><i class="fa fa-plus green"></i><i class="fa fa-trash-o danger"></i><i class="fa fa-rotate-right blizzard"></i></div>', 
						type: 'item', 
						additionalParameters: { id: '4' } 
					},
                    {
						id:'wbs_5',
						name: '系统验收'
						+ '<div class="tree-actions">'
							+ '<i class="glyphicon glyphicon-indent-left sky" title="拆分任务"></i>&nbsp;'
							+ '<i class="glyphicon glyphicon-user green" title="分配任务"></i>&nbsp;'
							+ '<i class="fa fa-trash-o danger" title="删除任务"></i>&nbsp;'
							+ '<i class="fa fa-rotate-right blizzard" title="刷新节点"></i>&nbsp;'
						+ '</div>', 
						type: 'item', 
						additionalParameters: { id: '5' }
					}
                ],
                delay: 400
            });





            $('#ProjectTree').tree({
                selectable: true,
                multiSelect: false,
                dataSource: WBS_DataSource,
                loadingHTML: '<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>'
            });
        }

    };

}();