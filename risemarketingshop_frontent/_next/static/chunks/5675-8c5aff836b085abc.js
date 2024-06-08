(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5675],
  {
    61100: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let i = r(38754),
        n = r(61757)._(r(67294)),
        o = i._(r(73935)),
        l = i._(r(14764)),
        s = r(8484),
        a = r(92666),
        u = r(14845);
      r(59982);
      let d = r(14167),
        c = i._(r(84148)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, r, i, n, o) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && n(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let i = !1,
                    n = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => i,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      (i = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (n = !0), t.stopPropagation();
                    },
                  });
                }
                (null == i ? void 0 : i.current) && i.current(e);
              }
            }));
      }
      function p(e) {
        let [t, r] = n.version.split(".", 2),
          i = parseInt(t, 10),
          o = parseInt(r, 10);
        return i > 18 || (18 === i && o >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let m = (0, n.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: i,
          sizes: o,
          height: l,
          width: s,
          decoding: a,
          className: u,
          style: d,
          fetchPriority: c,
          placeholder: f,
          loading: m,
          unoptimized: h,
          fill: v,
          onLoadRef: b,
          onLoadingCompleteRef: w,
          setBlurComplete: y,
          setShowAltText: S,
          onLoad: _,
          onError: C,
          ...E
        } = e;
        return n.default.createElement("img", {
          ...E,
          ...p(c),
          loading: m,
          width: s,
          height: l,
          decoding: a,
          "data-nimg": v ? "fill" : "1",
          className: u,
          style: d,
          sizes: o,
          srcSet: i,
          src: r,
          ref: (0, n.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (C && (e.src = e.src), e.complete && g(e, f, b, w, y, h));
            },
            [r, f, b, w, y, C, h, t]
          ),
          onLoad: (e) => {
            g(e.currentTarget, f, b, w, y, h);
          },
          onError: (e) => {
            S(!0), "empty" !== f && y(!0), C && C(e);
          },
        });
      });
      function h(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          i = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...p(r.fetchPriority),
          };
        return t && o.default.preload
          ? (o.default.preload(r.src, i), null)
          : n.default.createElement(
              l.default,
              null,
              n.default.createElement("link", {
                key: "__nimg-" + r.src + r.srcSet + r.sizes,
                rel: "preload",
                href: r.srcSet ? void 0 : r.src,
                ...i,
              })
            );
      }
      let v = (0, n.forwardRef)((e, t) => {
        let r = (0, n.useContext)(d.RouterContext),
          i = (0, n.useContext)(u.ImageConfigContext),
          o = (0, n.useMemo)(() => {
            let e = f || i || a.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [i]),
          { onLoad: l, onLoadingComplete: g } = e,
          p = (0, n.useRef)(l);
        (0, n.useEffect)(() => {
          p.current = l;
        }, [l]);
        let v = (0, n.useRef)(g);
        (0, n.useEffect)(() => {
          v.current = g;
        }, [g]);
        let [b, w] = (0, n.useState)(!1),
          [y, S] = (0, n.useState)(!1),
          { props: _, meta: C } = (0, s.getImgProps)(e, {
            defaultLoader: c.default,
            imgConf: o,
            blurComplete: b,
            showAltText: y,
          });
        return n.default.createElement(
          n.default.Fragment,
          null,
          n.default.createElement(m, {
            ..._,
            unoptimized: C.unoptimized,
            placeholder: C.placeholder,
            fill: C.fill,
            onLoadRef: p,
            onLoadingCompleteRef: v,
            setBlurComplete: w,
            setShowAltText: S,
            ref: t,
          }),
          C.priority
            ? n.default.createElement(h, { isAppRouter: !r, imgAttributes: _ })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8484: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        r(59982);
      let i = r(32528),
        n = r(92666);
      function o(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var r;
        let s,
          a,
          u,
          {
            src: d,
            sizes: c,
            unoptimized: f = !1,
            priority: g = !1,
            loading: p,
            className: m,
            quality: h,
            width: v,
            height: b,
            fill: w = !1,
            style: y,
            onLoad: S,
            onLoadingComplete: _,
            placeholder: C = "empty",
            blurDataURL: E,
            fetchPriority: z,
            layout: P,
            objectFit: j,
            objectPosition: x,
            lazyBoundary: O,
            lazyRoot: I,
            ...R
          } = e,
          { imgConf: M, showAltText: k, blurComplete: N, defaultLoader: A } = t,
          D = M || n.imageConfigDefault;
        if ("allSizes" in D) s = D;
        else {
          let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
            t = D.deviceSizes.sort((e, t) => e - t);
          s = { ...D, allSizes: e, deviceSizes: t };
        }
        let B = R.loader || A;
        delete R.loader, delete R.srcSet;
        let G = "__next_img_default" in B;
        if (G) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = B;
          B = (t) => {
            let { config: r, ...i } = t;
            return e(i);
          };
        }
        if (P) {
          "fill" === P && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (y = { ...y, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[P];
          t && !c && (c = t);
        }
        let L = "",
          F = l(v),
          W = l(b);
        if ("object" == typeof (r = d) && (o(r) || void 0 !== r.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((a = e.blurWidth),
            (u = e.blurHeight),
            (E = E || e.blurDataURL),
            (L = e.src),
            !w)
          ) {
            if (F || W) {
              if (F && !W) {
                let t = F / e.width;
                W = Math.round(e.height * t);
              } else if (!F && W) {
                let t = W / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (W = e.height);
          }
        }
        let U = !g && ("lazy" === p || void 0 === p);
        (!(d = "string" == typeof d ? d : L) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((f = !0), (U = !1)),
          s.unoptimized && (f = !0),
          G && d.endsWith(".svg") && !s.dangerouslyAllowSVG && (f = !0),
          g && (z = "high");
        let T = l(h),
          V = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: x,
                }
              : {},
            k ? {} : { color: "transparent" },
            y
          ),
          q =
            N || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, i.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: W,
                  blurWidth: a,
                  blurHeight: u,
                  blurDataURL: E || "",
                  objectFit: V.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          J = q
            ? {
                backgroundSize: V.objectFit || "cover",
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          Y = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: i,
              width: n,
              quality: o,
              sizes: l,
              loader: s,
            } = e;
            if (i) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: a, kind: u } = (function (e, t, r) {
                let { deviceSizes: i, allSizes: n } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let i; (i = e.exec(r)); i) t.push(parseInt(i[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: n.filter((t) => t >= i[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: i, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => n.find((t) => t >= e) || n[n.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, n, l),
              d = a.length - 1;
            return {
              sizes: l || "w" !== u ? l : "100vw",
              srcSet: a
                .map(
                  (e, i) =>
                    s({ config: t, src: r, quality: o, width: e }) +
                    " " +
                    ("w" === u ? e : i + 1) +
                    u
                )
                .join(", "),
              src: s({ config: t, src: r, quality: o, width: a[d] }),
            };
          })({
            config: s,
            src: d,
            unoptimized: f,
            width: F,
            quality: T,
            sizes: c,
            loader: B,
          });
        return {
          props: {
            ...R,
            loading: U ? "lazy" : p,
            fetchPriority: z,
            width: F,
            height: W,
            decoding: "async",
            className: m,
            style: { ...V, ...J },
            sizes: Y.sizes,
            srcSet: Y.srcSet,
            src: Y.src,
          },
          meta: { unoptimized: f, priority: g, placeholder: C, fill: w },
        };
      }
    },
    32528: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: i,
            blurHeight: n,
            blurDataURL: o,
            objectFit: l,
          } = e,
          s = i ? 40 * i : t,
          a = n ? 40 * n : r,
          u = s && a ? "viewBox='0 0 " + s + " " + a + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === l
            ? "xMidYMid"
            : "cover" === l
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    80256: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          unstable_getImgProps: function () {
            return a;
          },
          default: function () {
            return u;
          },
        });
      let i = r(38754),
        n = r(8484),
        o = r(59982),
        l = r(61100),
        s = i._(r(84148)),
        a = (e) => {
          (0, o.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, n.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        u = l.Image;
    },
    84148: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: i, quality: n } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          i +
          "&q=" +
          (n || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        (r.__next_img_default = !0);
      let i = r;
    },
    25675: function (e, t, r) {
      e.exports = r(80256);
    },
  },
]);
