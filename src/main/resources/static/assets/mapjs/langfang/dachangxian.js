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
									'dachangxian',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"properties" : {
														"name" : "大厂回族自治县"
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [ [ [
																[
																		117.002271757813,
																		39.8922219062501 ],
																[ 117.022345,
																		39.8877223945313 ],
																[
																		117.033590117188,
																		39.8902431464844 ],
																[
																		117.06408328125,
																		39.8691909003907 ],
																[
																		117.05142703125,
																		39.8497585273438 ],
																[ 117.047345,
																		39.823843 ],
																[
																		117.02142703125,
																		39.8279274726563 ],
																[
																		116.986246367188,
																		39.8508388496094 ],
																[ 116.967345,
																		39.8466017890625 ],
																[
																		116.925694609375,
																		39.8559377265625 ],
																[ 116.917345,
																		39.843843 ],
																[
																		116.892486601563,
																		39.8380825019532 ],
																[
																		116.858590117188,
																		39.8430922675782 ],
																[
																		116.812320585938,
																		39.8773952460938 ],
																[ 116.807345,
																		39.883843 ],
																[
																		116.81142703125,
																		39.8897585273438 ],
																[
																		116.860416289063,
																		39.8993251777344 ],
																[
																		116.88142703125,
																		39.9297585273438 ],
																[
																		116.893858671875,
																		39.9383388496094 ],
																[
																		116.878609648438,
																		39.9746425605469 ],
																[
																		116.902960234375,
																		39.9801015449219 ],
																[
																		116.955225859375,
																		39.9666884589844 ],
																[
																		116.950186796875,
																		39.9442116523438 ],
																[
																		116.96142703125,
																		39.9279274726563 ],
																[
																		116.98326296875,
																		39.9197585273438 ],
																[
																		117.002271757813,
																		39.8922219062501 ] ] ] ]
													}
												}
												]
									});
				}));