(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'exports', 'echarts' ], factory);
	} else if (typeof exports === 'object'
			&& typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}
		(
				this,
				function(exports, echarts) {
					var log = function(msg) {
						if (typeof console !== 'undefined') {
							console && console.error && console.error(msg);
						}
					};
					if (!echarts) {
						log('ECharts is not Loaded');
						return;
					}
					if (!echarts.registerMap) {
						log('ECharts Map is not loaded');
						return;
					}
					echarts
							.registerMap(
									'dachengxian',
									{
										"type" : "FeatureCollection",
										"features" : [
												
												{
													"type" : "Feature",
													"properties" : {
														"name" : "大城县"
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [ [ [
																[
																		116.675860625,
																		38.8687233710938 ],
																[
																		116.69189578125,
																		38.8479457832032 ],
																[ 116.717345,
																		38.853843 ],
																[
																		116.735733671875,
																		38.849887921875 ],
																[
																		116.744405546875,
																		38.8288430000001 ],
																[
																		116.7341028125,
																		38.803843 ],
																[
																		116.74646609375,
																		38.773843 ],
																[
																		116.73990359375,
																		38.7579213691407 ],
																[
																		116.753804960938,
																		38.7503029609375 ],
																[ 116.757345,
																		38.7438430000001 ],
																[
																		116.762750273438,
																		38.6888808417969 ],
																[
																		116.761944609375,
																		38.6788430000001 ],
																[
																		116.762745390625,
																		38.6688430000001 ],
																[
																		116.7619153125,
																		38.6585195136719 ],
																[
																		116.77752078125,
																		38.6450771308594 ],
																[
																		116.74197390625,
																		38.6292153144531 ],
																[
																		116.72271609375,
																		38.6184706855469 ],
																[
																		116.68197390625,
																		38.6092153144532 ],
																[
																		116.67271609375,
																		38.5984706855469 ],
																[
																		116.661163359375,
																		38.5885195136719 ],
																[
																		116.6627746875,
																		38.5684963203125 ],
																[
																		116.640347929688,
																		38.5584889960938 ],
																[
																		116.667232695313,
																		38.5353224921876 ],
																[
																		116.643961210938,
																		38.5083107734375 ],
																[
																		116.622667265625,
																		38.5100221992188 ],
																[
																		116.6080871875,
																		38.4930995917969 ],
																[
																		116.59197390625,
																		38.4792153144531 ],
																[ 116.587345,
																		38.473843 ],
																[
																		116.561519804688,
																		38.4780178046875 ],
																[
																		116.55088015625,
																		38.5056093574219 ],
																[ 116.5132825,
																		38.4817409492188 ],
																[
																		116.457393828125,
																		38.4927846503907 ],
																[
																		116.443170195313,
																		38.5296681953126 ],
																[
																		116.423394804688,
																		38.543843 ],
																[
																		116.443170195313,
																		38.5580178046875 ],
																[
																		116.451519804688,
																		38.5764479804688 ],
																[
																		116.421519804688,
																		38.5880178046876 ],
																[
																		116.413170195313,
																		38.5996681953125 ],
																[
																		116.380074492188,
																		38.6124318671876 ],
																[ 116.357345,
																		38.653843 ],
																[
																		116.361373320313,
																		38.685805890625 ],
																[
																		116.423985625,
																		38.717202375 ],
																[ 116.427345,
																		38.7538430000001 ],
																[ 116.47172,
																		38.7611318183594 ],
																[
																		116.48978640625,
																		38.7377260566407 ],
																[ 116.502345,
																		38.7395815253906 ],
																[
																		116.527086210938,
																		38.7359255195313 ],
																[
																		116.553463164063,
																		38.7562831855469 ],
																[
																		116.551519804688,
																		38.7694130683594 ],
																[
																		116.607340117188,
																		38.7922585273438 ],
																[
																		116.62298953125,
																		38.8181996894532 ],
																[
																		116.63170046875,
																		38.8394863105469 ],
																[
																		116.643140898438,
																		38.858452375 ],
																[
																		116.640225859375,
																		38.8781996894532 ],
																[
																		116.675860625,
																		38.8687233710938 ] ] ] ]
													}
												}
												
												 ]
									});
				}));