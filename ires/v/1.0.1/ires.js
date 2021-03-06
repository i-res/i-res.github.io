﻿if (!window['ires']) {
	window['ires'] = {};
}
if (!window['ires']['loader']) {
	window['ires']['loader'] = {};
	ires.version = '1.0.1';
	ires.date = '20140514';
	ires.loader.SSV1 = 'http://i-res.github.io/ires';
	(function () {
		var d = encodeURIComponent,
			g = window,
			h = document;
		function l(a, b) {
			return a.load = b
		}
		var m = "push",
			q = "charAt",
			r = "indexOf",
			u = "name",
			v = "getTime",
			w = "length",
			x = "prototype",
			y = "setTimeout",
			z = "loader",
			A = "substring",
			B = "join",
			C = "toLowerCase";
		function D(a) {
			return a in E ? E[a] : E[a] = -1 != navigator.userAgent[C]()[r](a)
		}
		var E = {};
		function H(a) {
			a = Error(a);
			a.toString = function () {
				return this.message
			};
			return a
		}
		function I(a, b) {
			for (var c = a.split(/\./), e = g, f = 0; f < c[w] - 1; f++) e[c[f]] || (e[c[f]] = {}), e = e[c[f]];
			e[c[c[w] - 1]] = b
		}
		function J(a, b, c) {
			a[b] = c
		}
		if (!K) var K = I;
		if (!L) var L = J;
		ires[z].v = {};
		K("ires.loader.callbacks", ires[z].v);
		var M = {},
			N = {};
		ires[z].eval = {};
		K("ires.loader.eval", ires[z].eval);
		l(ires, function (a, b, c, d) {
		if (c != "[object Object]"){
		d = c;
		}
			function e(a) {
				var b = a.split(".");
				if (2 < b[w]) throw H("Lib \u270E: '" + a + "' not found \u2639!");
				"undefined" != typeof b[1] && (f = b[0], c.packages = c.packages || [], c.packages[m](b[1]))
			}
			var f = a;
			c = c || {};
			if (a instanceof Array || a && "object" == typeof a && "function" == typeof a[B] && "function" == typeof a.reverse)
				for (var k = 0; k < a[w]; k++) e(a[k]);
			else e(a); if (a = M[":" + f]) {
				c && !c.language && c.locale && (c.language = c.locale);
				c && "string" == typeof c.callback && (k = c.callback, k.match(/^[[\]A-Za-z0-9._]+$/) && (k = g.eval(k), c.callback =
					k));
				if ((k = c && null != c.callback) && !a.s(b)) throw H("Lib \u270E: '" + f + "' must be loaded before DOM onLoad!");
				k ? a.m(b, c) ? g[y](c.callback, 0) : a.load(b, c, d) : a.m(b, c) || a.load(b, c, d)
			} else throw H("Lib \u270E: '" + f + "' not found \u2639!");
		});
		K("ires.load", ires.load);
		ires.T = function (a, b, c, d) {
		b ? (0 == O[w] && (P(g, "load", Q), !D("msie") && !D("safari") && !D("konqueror") && D("mozilla") || g.opera ? g.addEventListener("DOMContentLoaded", Q, !1) : D("msie") ? h.write("<script defer onreadystatechange='ires.loader.domReady()' src=//:>\x3c/script>") : (D("safari") || D("konqueror")) && g[y](S, 10)), O[m](a)) : P(g, "load", a)
		};
		K("ires.setOnLoadCallback", ires.T);
		function P(a, b, c) {
			if (a.addEventListener) a.addEventListener(b, c, !1);
			else if (a.attachEvent) a.attachEvent("on" + b, c);
			else {
				var e = a["on" + b];
				a["on" + b] = null != e ? aa([c, e]) : c
			}
		}
		function aa(a) {
			return function () {
				for (var b = 0; b < a[w]; b++) a[b]()
			}
		}
		var O = [];
		ires[z].P = function () {
			var a = g.event.srcElement;
			"complete" == a.readyState && (a.onreadystatechange = null, a.parentNode.removeChild(a), Q())
		};
		K("ires.loader.domReady", ires[z].P);
		var ba = {
			loaded: !0,
			complete: !0
		};
		function S() {
			ba[h.readyState] ? Q() : 0 < O[w] && g[y](S, 10)
		}
		
		ires[z].d = function (a, b, c) {
			if (c) {
				var e;
				"script" == a ? (e = h.createElement("script"), e.type = "text/javascript", e.src = b) : "";
				(a = h.getElementsByTagName("head")[0]) || (a = h.body.parentNode.appendChild(h.createElement("head")));
				a.appendChild(e)
			} else "script" == a ? h.write('<script src="' + b + '" type="text/javascript">\x3c/script>') : ""
		};
		K("ires.loader.writeLoadTag", ires[z].d);
		ires[z].S = function (a) {
			for (var b in a) "string" == typeof b && b && ":" == b[q](0) && !M[b] && (M[b] = new T(b[A](1), a[b]))
		};
		K("ires.loader.mrz", ires[z].S);
		ires[z].loaded = function (a) {
			M[":" + a.module].l(a)
		};
		K("ires.loader.loaded", ires[z].loaded);
		function U(a) {}
		function W(a) {
			this.r = 0
		}
		function V(a, b, c) {
			this.name = a;
			this.u = this.h = !1;
			ires[z].v[this[u]] = G(this.l, this)
		}
		function T(a, b, c, d) {
			this.b = a;
			this.i = b;
			this.h = !1
		}
		l(T[x], function (a, b, c, d) {
			this.h = !0;
			ires[z].d("script", this.g(a, b, c, d), !1)
		});
		T[x].m = function () {
			return this.h
		};
		T[x].l = function () {};
		T[x].g = function (a, b, c, d) {
			if (b.minify != true && b.minify != false) {
			b = {minify:true};
			}
			if (this.b == "yui") {
				if (!this.i.versions[":" + a]) {
					if (this.i.veriver) {
						var c = this.i.veriver[":" + a];
						c && (a = c)
					}
					if (!this.i.versions[":" + a]) throw H("Lib \u270E: '" + this.b + "' with version \u27A8 '" + a + "' not found \u2639!");
				}
				if(c=="SSV2") {
				var str=this.i.datarsc[":SSV2"][b&&b.minify?"minify":"unminify"];
				var mapObj={"%ires.version%":a,"%ires.lib%":this.b};
				res=str.replace(/%ires.version%|%ires.lib%/gi,function(a){return mapObj[a]});
				return res
				}
				if(c=="SSV3") {
				var str=this.i.datarsc[":SSV3"][b&&b.minify?"minify":"unminify"];
				var mapObj={"%ires.version%":a,"%ires.lib%":this.b};
				res=str.replace(/%ires.version%|%ires.lib%/gi,function(a){return mapObj[a]});
				return res
				} else {
				return ires[z].SSV1 + "/libs/" + this.b + "/" + a + "/" + this.i.versions[":" + a][b && b.minify ? "minify" : "unminify"]
				}
			}
			if (this.b == "dojo") {
				if (!this.i.versions[":" + a]) {
					if (this.i.veriver) {
						var c = this.i.veriver[":" + a];
						c && (a = c)
					}
					if (!this.i.versions[":" + a]) throw H("Lib \u270E: '" + this.b + "' with version \u27A8 '" + a + "' not found \u2639!");
				}
				if(c=="SSV2") {
				var str=this.i.datarsc[":SSV2"][b&&b.minify?"minify":"unminify"];
				var mapObj={"%ires.version%":a,"%ires.lib%":this.b};
				res=str.replace(/%ires.version%|%ires.lib%/gi,function(a){return mapObj[a]});
				return res
				}
				if(c=="SSV3") {
				var str=this.i.datarsc[":SSV3"][b&&b.minify?"minify":"unminify"];
				var mapObj={"%ires.version%":a,"%ires.lib%":this.b};
				res=str.replace(/%ires.version%|%ires.lib%/gi,function(a){return mapObj[a]});
				return res
				} else {
				return ires[z].SSV1 + "/libs/" + this.b + "/" + a + "/" + this.i.versions[":" + a][b && b.minify ? "minify" : "unminify"]
				}
			}
			if (this.b == "scriptaculous") {
				if (!this.i.versions[":" + a]) {
					if (this.i.veriver) {
						var c = this.i.veriver[":" + a];
						c && (a = c)
					}
					if (!this.i.versions[":" + a]) throw H("Lib \u270E: '" + this.b + "' with version \u27A8 '" + a + "' not found \u2639!");
				}
				if(c=="SSV2") {
				var str=this.i.datarsc[":SSV2"][b&&b.minify?"minify":"unminify"];
				var mapObj={"%ires.version%":a,"%ires.lib%":this.b};
				res=str.replace(/%ires.version%|%ires.lib%/gi,function(a){return mapObj[a]});
				return res
				}
				if(c=="SSV3") {
				var str=this.i.datarsc[":SSV3"][b&&b.minify?"minify":"unminify"];
				var mapObj={"%ires.version%":a,"%ires.lib%":this.b};
				res=str.replace(/%ires.version%|%ires.lib%/gi,function(a){return mapObj[a]});
				return res
				} else {
				return ires[z].SSV1 + "/libs/" + this.b + "/" + a + "/" + this.i.versions[":" + a][b && b.minify ? "minify" : "unminify"]
				}
			} else {
				if (!this.i.versions[":" + a]) {
					if (this.i.veriver) {
						var c = this.i.veriver[":" + a];
						c && (a = c)
					}
					if (!this.i.versions[":" + a]) throw H("Lib \u270E: '" + this.b + "' with version \u27A8 '" + a + "' not found \u2639!");
				}
				if(c=="SSV2") {
				var str=this.i.datarsc[":SSV2"][b&&b.minify?"minify":"unminify"];
				var mapObj={"%ires.version%":a,"%ires.lib%":this.b};
				res=str.replace(/%ires.version%|%ires.lib%/gi,function(a){return mapObj[a]});
				return res
				}
				if(c=="SSV3") {
				var str=this.i.datarsc[":SSV3"][b&&b.minify?"minify":"unminify"];
				var mapObj={"%ires.version%":a,"%ires.lib%":this.b};
				res=str.replace(/%ires.version%|%ires.lib%/gi,function(a){return mapObj[a]});
				return res
				} else {
				return ires[z].SSV1 + "/libs/" + this.b + "/" + this.i.datarsc[":imane"][b && b.minify ? "minify" : "unminify"] + a + this.i.datarsc[":finex"][b && b.minify ? "minify" : "unminify"]
				}
			}
		};
	})();
	ires.loader.mrz({
		":angularjs": {
			"versions": {
				":1.0.1": {},
				":1.0.2": {},
				":1.0.3": {},
				":1.0.4": {},
				":1.0.5": {},
				":1.0.6": {},
				":1.0.7": {},
				":1.0.8": {},
				":1.2.0": {},
				":1.2.1": {},
				":1.2.10": {},
				":1.2.11": {},
				":1.2.12": {},
				":1.2.13": {},
				":1.2.14": {},
				":1.2.15": {},
				":1.2.16": {},
				":1.2.2": {},
				":1.2.3": {},
				":1.2.4": {},
				":1.2.5": {},
				":1.2.6": {},
				":1.2.7": {},
				":1.2.8": {},
				":1.2.9": {}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/angular.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/angular.min.js"
				},
				":SSV3": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/angular.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/angular.min.js"
				},
				":nameuc": {
					"unminify": "angularjs.js",
					"minify": "angularjs.min.js"
				},
				":imane": {
					"unminify": "angular-",
					"minify": "angular-"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".min.js"
				}
			},
			"veriver": {
				":1.0": "1.0.8",
				":1.2": "1.2.16"
			}
		},
		":dojo": {
			"versions": {
				":0.4.4": {
					"unminify": "dojo/dojo.js",
					"minify": "dojo/dojo.js"
				},
				":1.0.3": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.1.2": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.2.4": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.3.3": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.4.5": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.5.3": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.6.2": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.7.5": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.8.6": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				},
				":1.9.3": {
					"unminify": "dojo/dojo.js.uncompressed.js",
					"minify": "dojo/dojo.js"
				}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/dojo/dojo.js.uncompressed.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/dojo/dojo.js"
				},
				":SSV3": {
					"unminify": "http://download.dojotoolkit.org/release-%ires.version%/dojo.js.uncompressed.js",
					"minify": "http://download.dojotoolkit.org/release-%ires.version%/dojo.js"
				},
				":nameuc": {
					"unminify": "dojo.js.uncompressed.js",
					"minify": "dojo.js"
				},
				":imane": {
					"unminify": "dojo.js.uncompressed.js",
					"minify": "dojo.js"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".js"
				}
			},
			"veriver": {
				":1.7": "1.7.2",
				":1": "1.6.1",
				":1.6": "1.6.1",
				":1.5": "1.5.1",
				":1.4": "1.4.3",
				":1.3": "1.3.2",
				":1.2": "1.2.3",
				":1.1": "1.1.1"
			}
		},
		":jquery": {
			"versions": {
				":1.0": {},
				":1.0.1": {},
				":1.0.2": {},
				":1.0.3": {},
				":1.0.4": {},
				":1.1": {},
				":1.1.1": {},
				":1.1.2": {},
				":1.1.3": {},
				":1.1.3.1": {},
				":1.1.4": {},
				":1.2": {},
				":1.2.1": {},
				":1.2.2": {},
				":1.2.3": {},
				":1.2.4": {},
				":1.2.5": {},
				":1.2.6": {},
				":1.3": {},
				":1.3.1": {},
				":1.3.2": {},
				":1.4": {},
				":1.4.1": {},
				":1.4.2": {},
				":1.4.3": {},
				":1.4.4": {},
				":1.5": {},
				":1.5.1": {},
				":1.5.2": {},
				":1.6": {},
				":1.6.1": {},
				":1.6.2": {},
				":1.6.3": {},
				":1.6.4": {},
				":1.7": {},
				":1.7.1": {},
				":1.7.2": {},
				":1.8.0": {},
				":1.8.1": {},
				":1.8.2": {},
				":1.8.3": {},
				":1.9.0": {},
				":1.9.1": {},
				":2.0.1": {},
				":2.0.2": {},
				":2.0.3": {},
				":2.1.0": {}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/jquery.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/jquery.min.js"
				},
				":SSV3": {
					"unminify": "http://code.jquery.com/%ires.lib%-%ires.version%.js",
					"minify": "http://code.jquery.com/%ires.lib%-%ires.version%.min.js"
				},
				":nameuc": {
					"unminify": "jquery.js",
					"minify": "jquery.min.js"
				},
				":imane": {
					"unminify": "jquery-",
					"minify": "jquery-"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".min.js"
				}
			},
			"veriver": {
				":1.7": "1.7.2",
				":1.6": "1.6.4",
				":1": "1.7.2",
				":1.5": "1.5.2",
				":1.4": "1.4.4",
				":1.3": "1.3.2",
				":1.2": "1.2.6"
			}
		},
		":jquerymobile": {
			"versions": {
				":1.0": {},
				":1.0.1": {},
				":1.1.0": {},
				":1.1.1": {},
				":1.1.2": {},
				":1.2.0": {},
				":1.2.1": {},
				":1.3.0": {},
				":1.3.1": {},
				":1.3.2": {},
				":1.4.0": {},
				":1.4.1": {},
				":1.4.2": {}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/jquerymobile/%ires.version%/jquery.mobile.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/jquerymobile/%ires.version%/jquery.mobile.min.js"
				},
				":SSV3": {
					"unminify": "http://code.jquery.com/mobile/%ires.version%/jquery.mobile-%ires.version%.js",
					"minify": "http://code.jquery.com/mobile/%ires.version%/jquery.mobile-%ires.version%.min.js"
				},
				":nameuc": {
					"unminify": "jquery.mobile.js",
					"minify": "jquery.mobile.min.js"
				},
				":imane": {
					"unminify": "jquery.mobile-",
					"minify": "jquery.mobile-"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".min.js"
				}
			},
			"veriver": {
				":1.0": "1.0.0",
				":1.1": "1.1.2",
				":1.2": "1.2.1",
				":1.3": "1.3.2",
				":1.4": "1.4.2",
				":1": "1.4.2"
			}
		},
		":jqueryui": {
			"versions": {
				":1.0": {},
				":1.10.0": {},
				":1.10.1": {},
				":1.10.2": {},
				":1.10.3": {},
				":1.10.4": {},
				":1.5": {},
				":1.5.1": {},
				":1.5.2": {},
				":1.5.3": {},
				":1.6": {},
				":1.7": {},
				":1.7.1": {},
				":1.7.2": {},
				":1.8": {},
				":1.8.1": {},
				":1.8.10": {},
				":1.8.11": {},
				":1.8.12": {},
				":1.8.13": {},
				":1.8.14": {},
				":1.8.15": {},
				":1.8.16": {},
				":1.8.17": {},
				":1.8.18": {},
				":1.8.19": {},
				":1.8.2": {},
				":1.8.20": {},
				":1.8.21": {},
				":1.8.22": {},
				":1.8.23": {},
				":1.8.24": {},
				":1.8.4": {},
				":1.8.5": {},
				":1.8.6": {},
				":1.8.7": {},
				":1.8.8": {},
				":1.8.9": {},
				":1.9.0": {},
				":1.9.1": {},
				":1.9.2": {}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/jquery-ui.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/jquery-ui.min.js"
				},
				":SSV3": {
					"unminify": "http://code.jquery.com/ui/%ires.version%/jquery-ui.js",
					"minify": "http://code.jquery.com/ui/%ires.version%/jquery-ui.min.js"
				},
				":nameuc": {
					"unminify": "jqueryui.js",
					"minify": "jqueryui.min.js"
				},
				":imane": {
					"unminify": "jquery-ui-",
					"minify": "jquery-ui-"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".min.js"
				}
			},
			"veriver": {
				":1.8": "1.8.17",
				":1.7": "1.7.3",
				":1.6": "1.6.0",
				":1": "1.8.17",
				":1.5": "1.5.3",
				":1.8.3": "1.8.4"
			}
		},
		":mootools": {
			"versions": {
				":1.1.1": {},
				":1.1.2": {},
				":1.2.1": {},
				":1.2.2": {},
				":1.2.3": {},
				":1.2.4": {},
				":1.2.5": {},
				":1.3.0": {},
				":1.3.1": {},
				":1.3.2": {},
				":1.4.0": {},
				":1.4.1": {},
				":1.4.2": {},
				":1.4.3": {},
				":1.4.4": {},
				":1.4.5": {}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/mootools.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/mootools-yui-compressed.js"
				},
				":SSV3": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/mootools.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/mootools-yui-compressed.js"
				},
				":nameuc": {
					"unminify": "mootools.js",
					"minify": "mootools-yuic.js"
				},
				":imane": {
					"unminify": "mootools-",
					"minify": "mootools-"
				},
				":finex": {
					"unminify": ".js",
					"minify": "-yuic.js"
				}
			},
			"veriver": {
				":1": "1.1.2",
				":1.11": "1.1.1",
				":1.4": "1.4.2",
				":1.3": "1.3.2",
				":1.2": "1.2.5",
				":1.1": "1.1.2"
			}
		},
		":prototype": {
			"versions": {
				":1.6.0.2": {},
				":1.6.0.3": {},
				":1.6.1.0": {},
				":1.7.0.0": {},
				":1.7.1.0": {},
				":1.7.2.0": {}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/prototype.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/prototype.js"
				},
				":SSV3": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/prototype.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/prototype.js"
				},
				":nameuc": {
					"unminify": "prototype.js",
					"minify": "prototype.min.js"
				},
				":imane": {
					"unminify": "prototype-",
					"minify": "prototype-"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".min.js"
				}
			},
			"veriver": {
				":1.7": "1.7.0.0",
				":1.6.1": "1.6.1.0",
				":1": "1.7.0.0",
				":1.6": "1.6.1.0",
				":1.7.0": "1.7.0.0",
				":1.6.0": "1.6.0.3"
			}
		},
		":scriptaculous": {
			"versions": {
				":1.8.1": {
					"unminify": "scriptaculous.js",
					"minify": "scriptaculous.js"
				},
				":1.8.2": {
					"unminify": "scriptaculous.js",
					"minify": "scriptaculous.js"
				},
				":1.8.3": {
					"unminify": "scriptaculous.js",
					"minify": "scriptaculous.js"
				},
				":1.9.0": {
					"unminify": "scriptaculous.js",
					"minify": "scriptaculous.js"
				}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/scriptaculous.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/scriptaculous.js"
				},
				":SSV3": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/scriptaculous.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/scriptaculous.js"
				},
				":nameuc": {
					"unminify": "scriptaculous.js",
					"minify": "scriptaculous.js"
				},
				":imane": {
					"unminify": "scriptaculous-",
					"minify": "scriptaculous-"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".js"
				}
			},
			"veriver": {
				":1.8": "1.8.3",
				":1": "1.9.0",
				":1.9": "1.9.0"
			}
		},
		":swfobject": {
			"versions": {
				":2.1": {},
				":2.2": {}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/swfobject.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/swfobject.js"
				},
				":SSV3": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/swfobject.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/swfobject.js"
				},
				":nameuc": {
					"unminify": "swfobject.js",
					"minify": "swfobject.js"
				},
				":imane": {
					"unminify": "swfobject-",
					"minify": "swfobject-"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".js"
				}
			},
			"veriver": {
				":2": "2.2"
			}
		},
		":yui": {
			"versions": {
				":2.6.0": {
					"unminify": "build/yuiloader/yuiloader.js",
					"minify": "build/yuiloader/yuiloader-min.js"
				},
				":2.7.0": {
					"unminify": "build/yuiloader/yuiloader.js",
					"minify": "build/yuiloader/yuiloader-min.js"
				},
				":2.8.0r4": {
					"unminify": "build/yuiloader/yuiloader.js",
					"minify": "build/yuiloader/yuiloader-min.js"
				},
				":2.8.1": {
					"unminify": "build/yuiloader/yuiloader.js",
					"minify": "build/yuiloader/yuiloader-min.js"
				},
				":2.8.2r1": {
					"unminify": "build/yuiloader/yuiloader.js",
					"minify": "build/yuiloader/yuiloader-min.js"
				},
				":2.9.0": {
					"unminify": "build/yuiloader/yuiloader.js",
					"minify": "build/yuiloader/yuiloader-min.js"
				},
				":3.3.0": {
					"unminify": "build/yui/yui.js",
					"minify": "build/yui/yui-min.js"
				}
			},
			"datarsc": {
				":SSV2": {
					"unminify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/build/yuiloader/yuiloader.js",
					"minify": "https://ajax.googleapis.com/ajax/libs/%ires.lib%/%ires.version%/build/yuiloader/yuiloader-min.js"
				},
				":SSV3": {
					"unminify": "http://yui.yahooapis.com/%ires.version%/build/yuiloader/yuiloader.js",
					"minify": "http://yui.yahooapis.com/%ires.version%/build/yuiloader/yuiloader-min.js"
				},
				":nameuc": {
					"unminify": "yui.js",
					"minify": "yui-min.js"
				},
				":imane": {
					"unminify": "yui.js",
					"minify": "yui-min.js"
				},
				":finex": {
					"unminify": ".js",
					"minify": ".js"
				}
			},
			"veriver": {
				":3": "3.3.0",
				":2": "2.9.0",
				":2.7": "2.7.0",
				":2.8.2": "2.8.2r1",
				":2.6": "2.6.0",
				":2.9": "2.9.0",
				":2.8": "2.8.2r1",
				":2.8.0": "2.8.0r4",
				":3.3": "3.3.0"
			}
		}
	});
}