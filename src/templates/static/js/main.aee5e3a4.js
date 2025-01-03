(self.webpackChunkauto_ppt_web = self.webpackChunkauto_ppt_web || []).push([
	[179],
	{
		4381: function (e, t, n) {
			"use strict";
			var r = n(9148),
				s = n(9313),
				a = n(2034),
				o = n(4600),
				i = n(3611),
				c = n.n(i),
				l = {
					isEmpty: function (e) {
						return "" === e || void 0 === e || null === e;
					},
					isJson: function (e) {
						if ("string" == typeof e)
							try {
								var t = JSON.parse(e);
								return !("object" != typeof t || !t);
							} catch (n) {
								return !1;
							}
					},
					getUrlCode: function (e) {
						return (
							decodeURIComponent(
								(new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(
									location.href
								) || [, ""])[1].replace(/\+/g, "%20")
							) || null
						);
					},
				},
				u = "history",
				d = {
					history: [],
					setCache: function (e) {
						localStorage.setItem(u, e);
					},
					getCache: function () {
						var e = localStorage.getItem(u),
							t = [];
						return l.isJson(e) && (t = JSON.parse(e)), t;
					},
					removeCache: function () {
						localStorage.removeItem(u);
					},
					clearCache: function () {
						localStorage.clear();
					},
					addCache: function (e) {
						var t = localStorage.getItem(u),
							n = [];
						l.isJson(t) && (n = JSON.parse(t)),
							c().isArray(n) ? c().concat(n, e) : n.push(e);
						var r = JSON.stringify(n);
						this.setCache(r);
					},
				},
				p = n(5948);
			var h = function () {
					var e = (0, o.s0)();
					return (0, p.jsxs)("div", {
						className: "home",
						children: [
							(0, p.jsx)("div", {
								className: "home-title",
								children: "A I\u667a\u80fd\u62a5\u544a\u5199\u4f5c\u52a9\u624b",
							}),
							(0, p.jsx)("div", {
								className: "home-subtitle",
								children:
									"\u57fa\u4e8eLLM\u5927\u6a21\u578b\u5f00\u53d1\u7684\u4e00\u6b3e\u7528\u4e8e\u7f16\u5199\u62a5\u544a\u6587\u6863\u7684Ai\u667a\u80fd\u5199\u4f5c\u5de5\u5177\uff0c\u8ba9\u60a8\u5feb\u901f\u521b\u5efa\u9ad8\u8d28\u91cf\u62a5\u544a\u6f14\u793aPPT\uff0c\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u548c\u8d28\u91cf\uff01",
							}),
							(0, p.jsx)("div", {
								className: "home-btn",
								onClick: function () {
									d.clearCache(), e("/auto-ppt");
								},
								children: "\u7acb\u5373\u4f53\u9a8c",
							}),
						],
					});
				},
				m = n(484),
				f = n(8340),
				x = n(1900),
				v = n(7050),
				Z = n(6514),
				y = n(4611),
				g = n(9677),
				j = n(3755),
				b = n(737),
				k = n(3680),
				w = n(5733),
				C = n(2778),
				S = n(5025),
				I = n(1815),
				T = n.n(I);
			var N = function (e) {
					var t = c().throttle(function () {
						c().isFunction(e.onClick) && e.onClick();
					});
					return (0, p.jsx)(
						T(),
						(0, g.Z)((0, g.Z)({}, e), {}, { onClick: t, children: e.title })
					);
				},
				F = n(4215),
				P = n.n(F),
				q = "tidoc-token",
				E = {
					setToken: function (e) {
						localStorage.setItem(q, e);
					},
					getToken: function () {
						return localStorage.getItem(q);
					},
					removeToken: function () {
						localStorage.removeItem(q);
					},
				},
				R = "http://0.0.0.0:5000",
				A = {
					requestSSE: function (e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return (
							(e = R + e),
							t.method || (t.method = "get"),
							new Promise(function (n, r) {
								fetch(
									e,
									(0, g.Z)(
										(0, g.Z)({}, t),
										{},
										{
											headers: (0, g.Z)(
												(0, g.Z)({}, t.headers),
												{},
												{ Accept: "text/event-stream" }
											),
										}
									)
								)
									.then(
										(function () {
											var e = (0, j.Z)(
												(0, y.Z)().mark(function e(r) {
													var s, a, o, i, l, u, d;
													return (0, y.Z)().wrap(function (e) {
														for (;;)
															switch ((e.prev = e.next)) {
																case 0:
																	if (200 === r.status) {
																		e.next = 2;
																		break;
																	}
																	throw new Error(
																		"Server responded with ".concat(
																			r.status
																		)
																	);
																case 2:
																	if (r.ok) {
																		e.next = 4;
																		break;
																	}
																	throw new Error(
																		"Network response was not ok: "
																			.concat(r.status, " - ")
																			.concat(r.statusText)
																	);
																case 4:
																	if (r.body) {
																		e.next = 6;
																		break;
																	}
																	throw new Error(
																		"No body included in POST response object"
																	);
																case 6:
																	(s = r.body.getReader()),
																		(a = !1),
																		(o = "");
																case 9:
																	if (a) {
																		e.next = 21;
																		break;
																	}
																	return (e.next = 12), s.read();
																case 12:
																	if (
																		((i = e.sent),
																		(l = i.value),
																		(u = i.done),
																		r.ok)
																	) {
																		e.next = 17;
																		break;
																	}
																	throw new Error(
																		"Network response was not ok: "
																			.concat(r.status, " - ")
																			.concat(r.statusText)
																	);
																case 17:
																	(a = u),
																		l &&
																			((d =
																				new TextDecoder().decode(
																					l
																				)),
																			c().includes(d, "stop")
																				? c().isFunction(
																						null ===
																							t ||
																							void 0 ===
																								t
																							? void 0
																							: t.stopCallback
																				  ) &&
																				  (null === t ||
																						void 0 ===
																							t ||
																						t.stopCallback(
																							o
																						))
																				: ((o += d),
																				  c().isFunction(
																						null ===
																							t ||
																							void 0 ===
																								t
																							? void 0
																							: t.cb
																				  ) &&
																						(null ===
																							t ||
																							void 0 ===
																								t ||
																							t.cb(
																								o
																							)))),
																		(e.next = 9);
																	break;
																case 21:
																	n();
																case 22:
																case "end":
																	return e.stop();
															}
													}, e);
												})
											);
											return function (t) {
												return e.apply(this, arguments);
											};
										})()
									)
									.catch(function (e) {
										Z.ZP.error(
											"\u670d\u52a1\u5668\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\uff01"
										),
											r(e);
									});
							})
						);
					},
					request: function (e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return (
							(e = R + e),
							t.method || (t.method = "get"),
							new Promise(function (n, r) {
								fetch(e, t)
									.then(function (e) {
										return e.json();
									})
									.then(function (e) {
										if (2e4 === (null === e || void 0 === e ? void 0 : e.code))
											n((0, g.Z)({}, e));
										else {
											var t,
												s,
												a = {
													401: "\u670d\u52a1\u8ba4\u8bc1\u5931\u6548\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
													429: "\u670d\u52a1\u8377\u8f7d\u8fbe\u5230\u4e0a\u9650\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
													524: "\u670d\u52a1\u54cd\u5e94\u8d85\u65f6\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
												}[
													null === e ||
													void 0 === e ||
													null === (t = e.data) ||
													void 0 === t ||
													null === (s = t.error) ||
													void 0 === s
														? void 0
														: s.code
												];
											Z.ZP.error(
												a ||
													"\u670d\u52a1\u5668\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\uff01"
											),
												r(e);
										}
									})
									.catch(function (e) {
										Z.ZP.error(
											"\u670d\u52a1\u5668\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\uff01"
										),
											r(e);
									});
							})
						);
					},
					get: (function () {
						var e = (0, j.Z)(
							(0, y.Z)().mark(function e(t) {
								var n,
									r = arguments;
								return (0, y.Z)().wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														(n =
															r.length > 1 && void 0 !== r[1]
																? r[1]
																: {}).method || (n.method = "get"),
														(t =
															t +
															"?" +
															P().stringify(n.data, { indices: !0 }) +
															"&" +
															new Date().getTime()),
														n.headers ||
															(n.headers = {
																"Content-Type": "application/json",
															}),
														E.getToken() &&
															(n.headers || (n.headers = {}),
															(n.headers.Authorization =
																E.getToken())),
														e.abrupt("return", this.request(t, n))
													);
												case 6:
												case "end":
													return e.stop();
											}
									},
									e,
									this
								);
							})
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
					post: (function () {
						var e = (0, j.Z)(
							(0, y.Z)().mark(function e(t) {
								var n,
									r,
									s = arguments;
								return (0, y.Z)().wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													if (
														((r = s.length > 2 ? s[2] : void 0),
														(n =
															s.length > 1 && void 0 !== s[1]
																? s[1]
																: { method: "post" }).method ||
															(n.method = "post"),
														n.data instanceof FormData
															? (n.body = n.data)
															: (c().isEmpty(n.headers) &&
																	(n.headers = {}),
															  (n.headers["Content-Type"] =
																	"application/json"),
															  (n.body = JSON.stringify(n.data)),
															  (n.cb = c().get(n, "data.cb"))),
														E.getToken() &&
															(n.headers || (n.headers = {}),
															(n.headers.Authorization =
																E.getToken())),
														!r || "sse" !== r)
													) {
														e.next = 9;
														break;
													}
													return e.abrupt(
														"return",
														this.requestSSE(t, n)
													);
												case 9:
													return e.abrupt("return", this.request(t, n));
												case 10:
												case "end":
													return e.stop();
											}
									},
									e,
									this
								);
							})
						);
						return function (t) {
							return e.apply(this, arguments);
						};
					})(),
				},
				_ = A;
			var O = n(4975),
				z = n.n(O);
			n.p;
			n.p;
			n.p;
			n.p;
			n.p;
			n.p, w.Z.TextArea;
			var V = n(8152),
				D = w.Z.TextArea,
				J = "reload" === performance.getEntriesByType("navigation")[0].type,
				L = new Date().getTime().toString(),
				U = J ? (0, V.Z)() : L;
			window.UUID = U;
			var B = [
				{
					title: "\u6dfb\u52a0\u63cf\u8ff0",
					description: "\u8f93\u5165\u9700\u6c42\u4fe1\u606f",
				},
				{
					title: "\u751f\u6210\u6807\u9898",
					description: "\u751f\u6210\u521b\u610f\u6807\u9898",
				},
				{
					title: "\u751f\u6210\u5927\u7eb2",
					description: "\u5feb\u901f\u751f\u6210\u6587\u7ae0\u5927\u7eb2",
				},
				{
					title: "\u5185\u5bb9\u751f\u6210",
					description: "\u57fa\u4e8e\u5927\u7eb2\u751f\u6210\u5185\u5bb9",
				},
				{
					title: "PPT\u4e0b\u8f7d",
					description: "\u517c\u5bb9\u66f4\u591a\u7684MD\u683c\u5f0f",
				},
			];
			var W = function () {
				var e = b.Z.useForm(),
					t = (0, k.Z)(e, 1)[0],
					n = b.Z.useForm(),
					s = (0, k.Z)(n, 1)[0],
					a = b.Z.useForm(),
					o = (0, k.Z)(a, 1)[0],
					i = b.Z.useForm(),
					l = (0, k.Z)(i, 1)[0],
					u = (0, r.useState)(!1),
					h = (0, k.Z)(u, 2),
					I = h[0],
					T = h[1],
					F = (0, r.useState)(0),
					P = (0, k.Z)(F, 2),
					q = P[0],
					E = P[1],
					R = (0, r.useState)(""),
					A = (0, k.Z)(R, 2),
					O = A[0],
					V = A[1],
					J = (0, r.useState)(""),
					L = (0, k.Z)(J, 2),
					W = L[0],
					H = L[1],
					M = (0, r.useState)(""),
					G = (0, k.Z)(M, 2),
					$ = G[0],
					K = G[1],
					Q = b.Z.useWatch("paper", l),
					X = (function () {
						var e = (0, j.Z)(
							(0, y.Z)().mark(function e() {
								var n, r;
								return (0, y.Z)().wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														T(!0),
														(e.prev = 1),
														(e.next = 4),
														t.validateFields()
													);
												case 4:
													return (
														(n = e.sent),
														(r = function (e) {
															T(!1), E(q + 1), V(e);
														}),
														(e.next = 8),
														(s = (0, g.Z)(
															(0, g.Z)({}, n),
															{},
															{ cb: r }
														)),
														_.post(
															"/generate_title",
															{ data: s },
															"sse"
														)
													);
												case 8:
													T(!1), (e.next = 14);
													break;
												case 11:
													(e.prev = 11), (e.t0 = e.catch(1)), T(!1);
												case 14:
												case "end":
													return e.stop();
											}
										var s;
									},
									e,
									null,
									[[1, 11]]
								);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})(),
					Y = (function () {
						var e = (0, j.Z)(
							(0, y.Z)().mark(function e() {
								var t, n;
								return (0, y.Z)().wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														T(!0),
														(e.prev = 1),
														(e.next = 4),
														s.validateFields()
													);
												case 4:
													return (
														(t = e.sent),
														(n = function (e) {
															T(!1),
																E(q + 1),
																H(e),
																o.setFieldsValue({ outline: e });
														}),
														(e.next = 8),
														(r = (0, g.Z)(
															(0, g.Z)({}, t),
															{},
															{ cb: n }
														)),
														_.post(
															"/generate_outline",
															{ data: r },
															"sse"
														)
													);
												case 8:
													T(!1), (e.next = 14);
													break;
												case 11:
													(e.prev = 11), (e.t0 = e.catch(1)), T(!1);
												case 14:
												case "end":
													return e.stop();
											}
										var r;
									},
									e,
									null,
									[[1, 11]]
								);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})(),
					ee = function (e) {
						if (e) {
							var t = document.getElementById(e);
							t.scrollTop = t.scrollHeight;
						}
					},
					te = (function () {
						var e = (0, j.Z)(
							(0, y.Z)().mark(function e() {
								var t, n;
								return (0, y.Z)().wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														T(!0),
														(e.prev = 1),
														(e.next = 4),
														o.validateFields()
													);
												case 4:
													return (
														(t = e.sent),
														(n = function (e) {
															T(!1),
																E(q + 1),
																K(e),
																l.setFieldsValue({ paper: e }),
																ee("contentDom");
														}),
														(e.next = 8),
														(r = (0, g.Z)(
															(0, g.Z)({}, t),
															{},
															{ cb: n }
														)),
														_.post("/generate_body", { data: r }, "sse")
													);
												case 8:
													T(!1), (e.next = 14);
													break;
												case 11:
													(e.prev = 11), (e.t0 = e.catch(1)), T(!1);
												case 14:
												case "end":
													return e.stop();
											}
										var r;
									},
									e,
									null,
									[[1, 11]]
								);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})(),
					ne = c().throttle(function () {
						re();
					}),
					re = (function () {
						var e = (0, j.Z)(
							(0, y.Z)().mark(function e() {
								var t, n, r, s;
								return (0, y.Z)().wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													T(!0),
													(t = ""),
													(n =
														null === $ || void 0 === $
															? void 0
															: $.substr(-200)),
													(r = function (e) {
														T(!1),
															(t = $ + e),
															l.setFieldsValue({ paper: t });
													}),
													(s = function (e) {
														d.addCache([
															{
																role: "user",
																content:
																	"\u6211\u9700\u8981\u4f60\u6839\u636e\u5927\u7eb2"
																		.concat(W, "\u7eed\u5199")
																		.concat(
																			n,
																			"\u4e0d\u91cd\u590d\u7684\u62a5\u544a\u5185\u5bb9"
																		),
															},
															{ role: "assistant", content: e },
														]);
													}),
													(e.next = 7),
													(a = {
														outline: W,
														last_str: n,
														cb: r,
														stopCallback: s,
													}),
													_.post(
														"/generate_paper_continue",
														{ data: a },
														"sse"
													)
												);
											case 7:
												T(!1);
											case 8:
											case "end":
												return e.stop();
										}
									var a;
								}, e);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})(),
					se = (function () {
						var e = (0, j.Z)(
							(0, y.Z)().mark(function e() {
								var t, n, r, s;
								return (0, y.Z)().wrap(function (e) {
									for (;;)
									switch ((e.prev = e.next)) {
											case 0:
												return (
													E(4),
													(e.next = 3),
													fetch("http://0.0.0.0:5000/generate_ppt", {
														method: "POST",
														headers: {
															"Content-Type": "application/json",
														},
														body: JSON.stringify({ paper: $ }),
													})
												);
											case 3:
												if (!(t = e.sent).ok) {
													e.next = 15;
													break;
												}
												return (e.next = 7), t.blob();
											case 7:
												(n = e.sent),
													(r = URL.createObjectURL(n)),
													((s = document.createElement("a")).href = r),
													(s.download = "generated_ppt.pptx"),
													s.click(),
													(e.next = 16);
												break;
											case 15:
											case 16:
											case "end":
												return e.stop();
										}
								}, e);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})();
				return (0, p.jsx)("div", {
					className: "auto-ppt",
					children: (0, p.jsx)(m.Z, {
						tip: "\u601d\u8003\u4e2d\uff0c\u8bf7\u7a0d\u7b49\u7247\u523b...",
						spinning: I,
						children: (0, p.jsxs)("div", {
							className: "auto-ppt-box",
							children: [
								(0, p.jsx)(v.Z, { current: q, items: B }),
								(0, p.jsx)("div", {
									className: "form step-1",
									style: { display: 0 === q ? "block" : "none" },
									children: (0, p.jsxs)(b.Z, {
										form: t,
										layout: "vertical",
										children: [
											(0, p.jsx)(b.Z.Item, {
												name: "uuid",
												initialValue: U,
												style: { display: "none" },
												children: (0, p.jsx)(w.Z, { type: "hidden" }),
											}),
											(0, p.jsx)(b.Z.Item, {
												label: "\u62a5\u544a\u7c7b\u578b",
												name: "title",
												rules: [
													{
														required: !0,
														message:
															"\u8bf7\u8f93\u5165\u62a5\u544a\u7c7b\u578b!",
													},
												],
												children: (0, p.jsx)(D, {
													style: {
														height: 80,
														resize: "none",
														borderRadius: 4,
													},
													maxLength: 30,
													showCount: !0,
													placeholder:
														"\u8f93\u5165\u60a8\u8981\u7f16\u5199\u7684PPT\u7c7b\u578b\uff0c\u5982\u5de5\u4f5c\u6c47\u62a5\u3001\u5e02\u573a\u8c03\u7814\u3001\u9879\u76ee\u65b9\u6848\u7b49",
												}),
											}),
											(0, p.jsx)(b.Z.Item, {
												label: "\u60a8\u5e0c\u671bAI\u4ee5\u4ec0\u4e48\u89d2\u8272\u8fdb\u884c\u7f16\u5199",
												name: "role",
												rules: [
													{
														required: !0,
														message:
															"\u8bf7\u8f93\u5165\u6f14\u8bb2\u8005\u89d2\u8272!",
													},
												],
												children: (0, p.jsx)(w.Z, {
													maxLength: 30,
													showCount: !0,
													placeholder:
														"\u8f93\u5165\u6f14\u8bb2\u8005\u89d2\u8272\uff0c\u4f8b\u5982\u8001\u5e08\uff0c\u7a0b\u5e8f\u5458\uff0c\u4ea7\u54c1\u7ecf\u7406...\u7b49\u804c\u4e1a",
												}),
											}),
											(0, p.jsx)(b.Z.Item, {
												label: "\u4e3b\u9898",
												name: "form",
												rules: [
													{
														required: !0,
														message:
															"\u8bf7\u8f93\u5165\u8f93\u5165\u4e3b\u9898\u4fe1\u606f!",
													},
												],
												children: (0, p.jsx)(D, {
													style: {
														height: 120,
														resize: "none",
														borderRadius: 4,
													},
													showCount: !0,
													placeholder:
														"\u8f93\u5165\u4e3b\u9898\u4fe1\u606f,\u4f8b\u5982\uff1a \u5173\u4e8exx\u4ea7\u54c1\u7684\u5e02\u573a\u8c03\u7814",
												}),
											}),
											(0, p.jsx)(b.Z.Item, {
												layout: "inline",
												label: "\u6807\u9898\u6570\u91cf",
												name: "topic_num",
												initialValue: 3,
												rules: [
													{
														required: !0,
														message:
															"\u8bf7\u8f93\u5165\u6807\u9898\u6570\u91cf!",
													},
												],
												children: (0, p.jsx)(x.Z, {
													style: { width: "100%" },
												}),
											}),
											(0, p.jsx)(b.Z.Item, {
												children: (0, p.jsx)(N, {
													title: "\u4e0b\u4e00\u6b65",
													type: "primary",
													block: !0,
													onClick: X,
												}),
											}),
										],
									}),
								}),
								(0, p.jsx)("div", {
									className: "form step-2",
									style: { display: 1 === q ? "block" : "none" },
									children: (0, p.jsxs)(b.Z, {
										form: s,
										layout: "vertical",
										children: [
											(0, p.jsx)(b.Z.Item, {
												name: "uuid",
												initialValue: U,
												style: { display: "none" },
												children: (0, p.jsx)(w.Z, { type: "hidden" }),
											}),
											(0, p.jsx)(b.Z.Item, {
												label: "\u9009\u62e9\u6807\u9898",
												name: "title",
												rules: [
													{
														required: !0,
														message: "\u8bf7\u9009\u62e9\u6807\u9898!",
													},
												],
												children: (0, p.jsx)(f.ZP.Group, {
													children: c().map(
														c().isEmpty(O)
															? []
															: (c().split(O, "\n") || []).filter(
																	function (e, t) {
																		return !c().isEmpty(e);
																	}
															  ),
														function (e, t) {
															return (0, p.jsx)(
																f.ZP,
																{ value: e, children: e },
																t
															);
														}
													),
												}),
											}),
											(0, p.jsx)(b.Z.Item, {
												label: "\u6dfb\u52a0\u5927\u7eb2\u751f\u6210\u8981\u6c42",
												name: "requirement",
												rules: [
													{
														required: !0,
														message:
															"\u8bf7\u6dfb\u52a0\u5927\u7eb2\u751f\u6210\u8981\u6c42!",
													},
												],
												initialValue: "\u7ed3\u6784\u6e05\u6670",
												children: (0, p.jsx)(D, {
													rows: 8,
													style: {
														height: 200,
														resize: "none",
														borderRadius: 4,
													},
													showCount: !0,
													placeholder:
														"\u60a8\u53ef\u4ee5\u7ee7\u7eed\u8f93\u5165\u5bf9\u4e8e\u6587\u7ae0\u5927\u7eb2\u7684\u8981\u6c42.\u7ed3\u6784\u6e05\u6670\u7b49\u7b49",
												}),
											}),
											(0, p.jsx)(b.Z.Item, {
												children: (0, p.jsx)(N, {
													title: "\u4e0b\u4e00\u6b65",
													type: "primary",
													block: !0,
													onClick: Y,
												}),
											}),
										],
									}),
								}),
								(0, p.jsx)("div", {
									className: "form step-3",
									style: { display: 2 === q ? "block" : "none" },
									children: (0, p.jsxs)(b.Z, {
										form: o,
										layout: "vertical",
										children: [
											(0, p.jsx)(b.Z.Item, {
												name: "uuid",
												initialValue: U,
												style: { display: "none" },
												children: (0, p.jsx)(w.Z, { type: "hidden" }),
											}),
											(0, p.jsx)(b.Z.Item, {
												name: "outline",
												initialValue: W,
												label: "\u5927\u7eb2",
												rules: [
													{
														required: !0,
														message: "\u8bf7\u6dfb\u52a0\u5927\u7eb2!",
													},
												],
												children: (0, p.jsx)(D, {
													autoSize: { minRows: 3, maxRows: 30 },
													showCount: !0,
													style: {
														minHeight: 120,
														paddingBottom: 20,
														resize: "none",
														borderRadius: 4,
													},
													placeholder:
														"\u8f93\u5165\u5927\u7eb2\u4fe1\u606f",
												}),
											}),
											(0, p.jsx)(b.Z.Item, {
												name: "requirement",
												label: "\u6dfb\u52a0\u5168\u6587\u751f\u6210\u8981\u6c42",
												rules: [
													{
														required: !1,
														message:
															"\u8bf7\u6dfb\u52a0\u6587\u7ae0\u5168\u6587\u7684\u751f\u6210\u8981\u6c42!",
													},
												],
												initialValue: "\u5185\u5bb9\u4e30\u5bcc",
												children: (0, p.jsx)(D, {
													showCount: !0,
													maxLength: 500,
													style: {
														height: 120,
														resize: "none",
														borderRadius: 4,
													},
													placeholder:
														"\u60a8\u53ef\u4ee5\u7ee7\u7eed\u8f93\u5165\u5bf9\u4e8e\u6587\u7ae0\u5168\u6587\u7684\u751f\u6210\u8981\u6c42\uff0c\u5982\u7ed3\u6784\u6e05\u6670\uff0c\u5185\u5bb9\u8be6\u7ec6\uff0c\u6bcf\u4e2a\u5c0f\u70b9\u81f3\u5c11\u7f16\u5199300\u5b57",
												}),
											}),
											(0, p.jsx)(b.Z.Item, {
												children: (0, p.jsx)(N, {
													title: "\u4e0b\u4e00\u6b65",
													type: "primary",
													block: !0,
													onClick: te,
												}),
											}),
										],
									}),
								}),
								(0, p.jsx)("div", {
									className: "form step-4",
									style: { display: 3 === q ? "block" : "none" },
									children: (0, p.jsxs)(b.Z, {
										form: l,
										layout: "vertical",
										children: [
											(0, p.jsx)(b.Z.Item, {
												label: "\u6587\u7ae0",
												name: "paper",
												children: (0, p.jsx)(D, {
													id: "contentDom",
													autoSize: { minRows: 8, maxRows: 40 },
													style: {
														scrollBehavior: "smooth",
														scrollbarWidth: "none",
														overflowStyle: "none",
													},
													showCount: !0,
												}),
											}),
											(0, p.jsxs)("div", {
												className: "step4 option",
												onClick: function () {
													Q &&
														(z()(Q, { format: "text/plain" }),
														Z.ZP.success("\u5df2\u590d\u5236"));
												},
												children: [
													(0, p.jsx)(C.Z, {}),
													(0, p.jsx)("span", {
														children: "\u590d\u5236",
													}),
												],
											}),
											(0, p.jsxs)("div", {
												className: "step4 option",
												onClick: ne,
												children: [
													(0, p.jsx)(S.Z, {}),
													(0, p.jsx)("span", {
														children: "\u8ba9AI\u7ee7\u7eed",
													}),
												],
											}),
											(0, p.jsx)(b.Z.Item, {
												children: (0, p.jsx)(N, {
													title: "\u4e0b\u4e00\u6b65",
													type: "primary",
													block: !0,
													onClick: se,
													style: { marginTop: 20 },
												}),
											}),
										],
									}),
								}),
								(0, p.jsx)("div", {
									className: "form step-5",
									style: { display: 4 === q ? "block" : "none" },
									children: (0, p.jsx)("p", {
										style: {
											fontWeight: "bold",
											fontSize: "88px",
											textAlign: "center",
										},
										children: "\u611f\u8c22\u4f60\u7684\u4f7f\u7528!",
									}),
								}),
							],
						}),
					}),
				});
			};
			var H = function () {
					return (0, p.jsx)("div", {
						className: "App",
						children: (0, p.jsx)(a.UT, {
							children: (0, p.jsxs)(o.Z5, {
								children: [
									(0, p.jsx)(o.AW, { path: "/", element: (0, p.jsx)(h, {}) }),
									(0, p.jsx)(o.AW, {
										path: "/auto-ppt",
										element: (0, p.jsx)(W, {}),
									}),
								],
							}),
						}),
					});
				},
				M = function (e) {
					e &&
						e instanceof Function &&
						n
							.e(216)
							.then(n.bind(n, 3253))
							.then(function (t) {
								var n = t.getCLS,
									r = t.getFID,
									s = t.getFCP,
									a = t.getLCP,
									o = t.getTTFB;
								n(e), r(e), s(e), a(e), o(e);
							});
				};
			s.createRoot(document.getElementById("root")).render((0, p.jsx)(H, {})), M();
		},
		4654: function () {},
	},
	function (e) {
		e.O(0, [348, 24, 202, 216], function () {
			return (t = 4381), e((e.s = t));
			var t;
		});
		e.O();
	},
]);
