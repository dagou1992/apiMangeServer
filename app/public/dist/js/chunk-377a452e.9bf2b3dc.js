(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-377a452e'],
  {
    '07ac': function (e, t, a) {
      var n = a('23e7'),
        i = a('6f53').values;
      n(
        { target: 'Object', stat: !0 },
        {
          values: function (e) {
            return i(e);
          },
        },
      );
    },
    '267e': function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return n;
      }),
        a.d(t, 'a', function () {
          return i;
        }),
        a.d(t, 'c', function () {
          return r;
        });
      var n = {
          GET: '',
          POST: 'success',
          PUT: 'warning',
          DELETE: 'danger',
          PATCH: '',
          HEAD: '',
          OPTIONS: '',
        },
        i = [
          'Accept',
          'Accept-Charset',
          'Accept-Encoding',
          'Accept-Language',
          'Accept-Ranges',
          'Authorization',
          'Cache-Control',
          'Connection',
          'Cookie',
          'Content-Length',
          'Content-Type',
          'Date',
          'Expect',
          'From',
          'Host',
          'If-Match',
          'If-Modified-Since',
          'If-None-Match',
          'If-Range',
          'If-Unmodified-Since',
          'Max-Forwards',
          'Pragma',
          'Proxy-Authorization',
          'Range',
          'Referer',
          'TE',
          'Upgrade',
          'User-Agent',
          'Via',
          'Warning',
        ],
        r = [
          'String',
          'Number',
          'Array',
          'Object',
          'Boolean',
          'File',
          'Json',
          'Int',
          'Float',
          'Double',
          'Date',
          'Long',
          'Short',
          'Byte',
          'Null',
        ];
    },
    '287f': function (e, t, a) {},
    '45fc': function (e, t, a) {
      'use strict';
      var n = a('23e7'),
        i = a('b727').some,
        r = a('a640'),
        o = a('ae40'),
        l = r('some'),
        c = o('some');
      n(
        { target: 'Array', proto: !0, forced: !l || !c },
        {
          some: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    '5acd': function (e, t, a) {
      a('a15b');
      var n = function () {
          return Date.parse(new Date()) / 1e3;
        },
        i = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Date.parse(new Date()),
            t = new Date(1e3 * e),
            a = t.getFullYear(),
            n = t.getMonth() + 1;
          n = n < 10 ? '0' + n : n;
          var i = t.getDate();
          i = i < 10 ? '0' + i : i;
          var r = t.getHours();
          r = r < 10 ? '0' + r : r;
          var o = t.getMinutes(),
            l = t.getSeconds();
          return (
            (o = o < 10 ? '0' + o : o),
            (l = l < 10 ? '0' + l : l),
            [a, n, i].join('.') + ' ' + [r, o, l].join(':')
          );
        };
      e.exports = { nowTimestamp: n, timestampToTime: i };
    },
    '67eb': function (e, t, a) {},
    8836: function (e, t, a) {
      'use strict';
      var n = a('287f'),
        i = a.n(n);
      i.a;
    },
    '8b30': function (e, t, a) {
      'use strict';
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'vxe-table',
            {
              ref: 'xTree',
              attrs: {
                border: '',
                resizable: '',
                data: e.dataSource,
                'edit-config': e.isEdit
                  ? { trigger: 'click', mode: 'row' }
                  : {},
                'tree-config': { children: 'children', expandAll: !0 },
                'row-id': 'id',
              },
            },
            [
              e.isEdit
                ? a('vxe-table-column', {
                    attrs: { width: '55' },
                    scopedSlots: e._u(
                      [
                        {
                          key: 'header',
                          fn: function () {
                            return [
                              a('el-button', {
                                staticStyle: { padding: '7px' },
                                attrs: { icon: 'el-icon-plus', circle: '' },
                                on: { click: e.handleAddParam },
                              }),
                            ];
                          },
                          proxy: !0,
                        },
                      ],
                      null,
                      !1,
                      2563006516,
                    ),
                  })
                : e._e(),
              e._l(e.tableList, function (t) {
                return a('vxe-table-column', {
                  key: t.key,
                  attrs: {
                    field: t.key,
                    title: t.label,
                    width: t.width,
                    'tree-node': 'name' === t.key && e.hasChildren,
                    'edit-render':
                      ('select' === t.type && 'header' !== e.activeTabName) ||
                      ('header' === e.activeTabName && 'name' === t.key) ||
                      ('header' === e.activeTabName && 'isRequired' === t.key)
                        ? { name: '$select', options: t.options }
                        : { name: 'input' },
                  },
                });
              }),
              e.isEdit
                ? a('vxe-table-column', {
                    attrs: { title: '操作', width: '180' },
                    scopedSlots: e._u(
                      [
                        {
                          key: 'default',
                          fn: function (t) {
                            var n = t.row,
                              i = t.$rowIndex;
                            return [
                              a(
                                'span',
                                {
                                  on: {
                                    click: function (t) {
                                      return e.handleDeleteParam(n);
                                    },
                                  },
                                },
                                [e._v(' 删除 ')],
                              ),
                              e.hasChildren && !n.isRoot
                                ? a('el-divider', {
                                    attrs: { direction: 'vertical' },
                                  })
                                : e._e(),
                              e.hasChildren
                                ? a(
                                    'span',
                                    {
                                      on: {
                                        click: function (t) {
                                          return e.handleAddChildren(n, i);
                                        },
                                      },
                                    },
                                    [e._v(' 添加子字段 ')],
                                  )
                                : e._e(),
                            ];
                          },
                        },
                      ],
                      null,
                      !1,
                      3278054765,
                    ),
                  })
                : e._e(),
            ],
            2,
          );
        },
        i = [],
        r = (a('99af'), a('d81d'), a('a434'), a('c1f9'), a('5530')),
        o = a('267e'),
        l = {
          name: 'CommonTable',
          props: {
            activeTabName: String,
            isEdit: { type: Boolean, default: !0 },
            dataSource: Array,
            tableList: {
              type: Array,
              default: function () {
                return [
                  {
                    key: 'name',
                    label: '参数名',
                    width: 250,
                    options: o['a'].map(function (e) {
                      return { label: e, value: e };
                    }),
                  },
                  {
                    key: 'value',
                    label: '类型',
                    width: 250,
                    type: 'select',
                    options: o['c'].map(function (e) {
                      return { label: e, value: e };
                    }),
                  },
                  {
                    key: 'isRequired',
                    label: '是否必填',
                    width: 100,
                    type: 'select',
                    options: [
                      { label: '是', value: !0 },
                      { label: '否', value: !1 },
                    ],
                  },
                  { key: 'remark', label: '说明' },
                ];
              },
            },
            hasChildren: { type: Boolean, default: !1 },
          },
          data: function () {
            return { treeConfig: { children: 'children', expandAll: !0 } };
          },
          computed: {
            baseData: function () {
              return Object.fromEntries(
                this.tableList.map(function (e) {
                  var t = '';
                  return 'isRequired' === e.key && (t = !0), [e.key, t];
                }),
              );
            },
          },
          methods: {
            getRowNode: function (e) {
              return this.$utils.findTree(
                this.dataSource,
                function (t) {
                  return t.id === e.id;
                },
                this.treeConfig,
              );
            },
            handleAddParam: function () {
              this.dataSource.push(JSON.parse(JSON.stringify(this.baseData)));
            },
            handleDeleteParam: function (e) {
              var t = this.getRowNode(e),
                a = t.index,
                n = t.parent,
                i = n ? n.children : this.dataSource;
              i.splice(a, 1);
              var r = this.$refs.xTree;
              r.syncData();
            },
            handleAddChildren: function (e) {
              var t = this.getRowNode(e),
                a = t.index,
                n = t.parent,
                i = t.item,
                o = n ? n.children[a] : this.dataSource[a],
                l = '';
              o.children
                ? ((l = ''.concat(i.id, '_').concat(o.children.length)),
                  o.children.push(
                    Object(r['a'])(
                      Object(r['a'])(
                        {},
                        JSON.parse(JSON.stringify(this.baseData)),
                      ),
                      {},
                      { id: l },
                    ),
                  ))
                : ((l = ''.concat(i.id, '_0')),
                  (o.children = [
                    Object(r['a'])(
                      Object(r['a'])(
                        {},
                        JSON.parse(JSON.stringify(this.baseData)),
                      ),
                      {},
                      { id: l },
                    ),
                  ])),
                !n && this.dataSource.splice(a, 1, o);
              var c = this.$refs.xTree;
              c.setTreeExpand(e, !0);
            },
          },
        },
        c = l,
        s = (a('ed4f'), a('2877')),
        u = Object(s['a'])(c, n, i, !1, null, '33b27fcc', null);
      t['a'] = u.exports;
    },
    '962c': function (e, t, a) {
      'use strict';
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'el-table',
            {
              directives: [
                {
                  name: 'loading',
                  rawName: 'v-loading',
                  value: e.loading,
                  expression: 'loading',
                },
              ],
              staticStyle: { width: '100%', border: '1px solid #ddd' },
              attrs: {
                data: e.tableData,
                'header-cell-style': {
                  background: '#f8f8f8',
                  color: '#333',
                  borderLeft: '1px solid #ddd',
                },
              },
            },
            [
              e._l(e.tableList, function (e) {
                return a('el-table-column', {
                  key: e.label,
                  attrs: { prop: e.value, label: e.label, width: e.width },
                });
              }),
              a('table-operation', { attrs: { operations: e.operations } }),
            ],
            2,
          );
        },
        i = [],
        r = a('986a'),
        o = {
          name: 'BaseTable',
          props: {
            tableData: Array,
            loading: Boolean,
            tableList: Array,
            operations: Array,
          },
          components: { TableOperation: r['a'] },
        },
        l = o,
        c = a('2877'),
        s = Object(c['a'])(l, n, i, !1, null, '97bcf8f8', null);
      t['a'] = s.exports;
    },
    '986a': function (e, t, a) {
      'use strict';
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('el-table-column', {
            attrs: { label: '操作', width: '250' },
            scopedSlots: e._u([
              {
                key: 'default',
                fn: function (t) {
                  return [
                    e._l(e.operations, function (n, i) {
                      return [
                        a(
                          'span',
                          {
                            key: n.label,
                            on: {
                              click: function (e) {
                                return n.onClick(t.row);
                              },
                            },
                          },
                          [e._v(e._s(n.label))],
                        ),
                        i !== e.operations.length - 1
                          ? a('el-divider', {
                              key: n.label,
                              attrs: { direction: 'vertical' },
                            })
                          : e._e(),
                      ];
                    }),
                  ];
                },
              },
            ]),
          });
        },
        i = [],
        r = { name: 'TableOperation', props: { operations: Array } },
        o = r,
        l = (a('8836'), a('2877')),
        c = Object(l['a'])(o, n, i, !1, null, '70a6c00c', null);
      t['a'] = c.exports;
    },
    '99af': function (e, t, a) {
      'use strict';
      var n = a('23e7'),
        i = a('d039'),
        r = a('e8b5'),
        o = a('861d'),
        l = a('7b0b'),
        c = a('50c4'),
        s = a('8418'),
        u = a('65f0'),
        d = a('1dde'),
        f = a('b622'),
        b = a('2d00'),
        h = f('isConcatSpreadable'),
        p = 9007199254740991,
        m = 'Maximum allowed index exceeded',
        g =
          b >= 51 ||
          !i(function () {
            var e = [];
            return (e[h] = !1), e.concat()[0] !== e;
          }),
        v = d('concat'),
        y = function (e) {
          if (!o(e)) return !1;
          var t = e[h];
          return void 0 !== t ? !!t : r(e);
        },
        D = !g || !v;
      n(
        { target: 'Array', proto: !0, forced: D },
        {
          concat: function (e) {
            var t,
              a,
              n,
              i,
              r,
              o = l(this),
              d = u(o, 0),
              f = 0;
            for (t = -1, n = arguments.length; t < n; t++)
              if (((r = -1 === t ? o : arguments[t]), y(r))) {
                if (((i = c(r.length)), f + i > p)) throw TypeError(m);
                for (a = 0; a < i; a++, f++) a in r && s(d, f, r[a]);
              } else {
                if (f >= p) throw TypeError(m);
                s(d, f++, r);
              }
            return (d.length = f), d;
          },
        },
      );
    },
    a15b: function (e, t, a) {
      'use strict';
      var n = a('23e7'),
        i = a('44ad'),
        r = a('fc6a'),
        o = a('a640'),
        l = [].join,
        c = i != Object,
        s = o('join', ',');
      n(
        { target: 'Array', proto: !0, forced: c || !s },
        {
          join: function (e) {
            return l.call(r(this), void 0 === e ? ',' : e);
          },
        },
      );
    },
    a33a: function (e, t, a) {},
    a434: function (e, t, a) {
      'use strict';
      var n = a('23e7'),
        i = a('23cb'),
        r = a('a691'),
        o = a('50c4'),
        l = a('7b0b'),
        c = a('65f0'),
        s = a('8418'),
        u = a('1dde'),
        d = a('ae40'),
        f = u('splice'),
        b = d('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
        h = Math.max,
        p = Math.min,
        m = 9007199254740991,
        g = 'Maximum allowed length exceeded';
      n(
        { target: 'Array', proto: !0, forced: !f || !b },
        {
          splice: function (e, t) {
            var a,
              n,
              u,
              d,
              f,
              b,
              v = l(this),
              y = o(v.length),
              D = i(e, y),
              k = arguments.length;
            if (
              (0 === k
                ? (a = n = 0)
                : 1 === k
                ? ((a = 0), (n = y - D))
                : ((a = k - 2), (n = p(h(r(t), 0), y - D))),
              y + a - n > m)
            )
              throw TypeError(g);
            for (u = c(v, n), d = 0; d < n; d++)
              (f = D + d), f in v && s(u, d, v[f]);
            if (((u.length = n), a < n)) {
              for (d = D; d < y - n; d++)
                (f = d + n), (b = d + a), f in v ? (v[b] = v[f]) : delete v[b];
              for (d = y; d > y - n + a; d--) delete v[d - 1];
            } else if (a > n)
              for (d = y - n; d > D; d--)
                (f = d + n - 1),
                  (b = d + a - 1),
                  f in v ? (v[b] = v[f]) : delete v[b];
            for (d = 0; d < a; d++) v[d + D] = arguments[d + 2];
            return (v.length = y - n + a), u;
          },
        },
      );
    },
    cc80: function (e, t, a) {
      'use strict';
      var n = a('67eb'),
        i = a.n(n);
      i.a;
    },
    d1fd: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('data-structure-components');
        },
        i = [],
        r = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'div',
            { staticClass: 'data-structure', staticStyle: { height: '100%' } },
            [
              a(
                'el-card',
                {
                  staticStyle: {
                    'padding-bottom': '15px',
                    'margin-bottom': '20px',
                  },
                },
                [
                  a('h3', [e._v('数据结构')]),
                  a('p', [
                    e._v(
                      ' 您可以将 API 文档中相同的部分保存为数据结构，API 文档通过引用数据结构可以减少编写文档的工作量 ',
                    ),
                  ]),
                  a(
                    'el-button',
                    {
                      attrs: { type: 'success', size: 'small' },
                      on: { click: e.handleToCreate },
                    },
                    [
                      a('i', { staticClass: 'el-icon-plus' }),
                      e._v(' 数据结构 '),
                    ],
                  ),
                ],
                1,
              ),
              a('base-table', {
                attrs: {
                  loading: e.loading,
                  'table-list': e.tableList,
                  operations: e.operations,
                  'table-data': e.tableData,
                },
              }),
              a(
                'el-dialog',
                {
                  attrs: {
                    visible: e.dialogVisible,
                    'close-on-click-modal': !1,
                    'modal-append-to-body': !1,
                    width: '80%',
                  },
                  on: {
                    'update:visible': function (t) {
                      e.dialogVisible = t;
                    },
                  },
                },
                [
                  a(
                    'template',
                    { slot: 'title' },
                    [
                      a('span', [
                        e._v(e._s(e.isEdit ? '编辑数据结构' : '新建数据结构')),
                      ]),
                      a(
                        'el-button',
                        {
                          staticStyle: { 'margin-left': '15px' },
                          attrs: { type: 'primary' },
                          on: { click: e.handleSubmitData },
                        },
                        [e._v('提交')],
                      ),
                    ],
                    1,
                  ),
                  a(
                    'el-form',
                    { attrs: { model: e.formData, 'label-width': '55px' } },
                    e._l(e.formList, function (t) {
                      return a(
                        'el-form-item',
                        { key: t.label, attrs: { label: t.label } },
                        [
                          a('el-input', {
                            staticStyle: { width: '20%' },
                            model: {
                              value: e.formData[t.value],
                              callback: function (a) {
                                e.$set(e.formData, t.value, a);
                              },
                              expression: 'formData[item.value]',
                            },
                          }),
                        ],
                        1,
                      );
                    }),
                    1,
                  ),
                  a('common-table', {
                    staticStyle: { 'margin-bottom': '10px' },
                    attrs: {
                      'data-source': e.dialogTableData,
                      'has-children': !0,
                    },
                  }),
                ],
                2,
              ),
            ],
            1,
          );
        },
        o = [],
        l = (a('d81d'), a('45fc'), a('b0c0'), a('07ac'), a('498a'), a('5530')),
        c = (a('96cf'), a('1da1')),
        s = a('e78f'),
        u = a('5acd'),
        d = a('cc8f'),
        f = a('962c'),
        b = a('8b30'),
        h = {
          name: 'index',
          data: function () {
            var e = this;
            return {
              tableData: [{ name: '11' }],
              dialogTableData: [],
              formData: { name: '', remark: '' },
              formList: [
                { label: '名称：', value: 'name' },
                { label: '描述：', value: 'remark' },
              ],
              tableList: [
                { label: '数据结构', value: 'name' },
                { label: '描述', value: 'remark' },
                { label: '编辑时间', value: 'updatedTime', width: 200 },
              ],
              operations: [
                {
                  label: '编辑',
                  onClick: function (t) {
                    return e.handleToEdit(t);
                  },
                },
                {
                  label: '删除',
                  onClick: function (t) {
                    var a = t.id;
                    return e.$store.dispatch(
                      'globalDialog/toggleDialogVisible',
                      {
                        message:
                          '<span style="color: red;">确定要删除吗？</span>',
                        visible: !0,
                        onSubmit: function () {
                          return e.handleToDeleteData(a);
                        },
                      },
                    );
                  },
                },
              ],
              dialogVisible: !1,
              loading: !1,
              isEdit: !1,
            };
          },
          components: { BaseTable: f['a'], CommonTable: b['a'] },
          mounted: function () {
            this.initPage();
          },
          mixins: [d['a']],
          methods: {
            handleChangeDialogVisible: function (e) {
              this.dialogVisible = e;
            },
            handleToCreate: function () {
              (this.isEdit = !1),
                this.handleChangeDialogVisible(!0),
                (this.formData = { name: '', remark: '' }),
                (this.dialogTableData = []);
            },
            handleSubmitData: function () {
              var e = this;
              return Object(c['a'])(
                regeneratorRuntime.mark(function t() {
                  var a, n, i, r, o;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((a = e.isEdit),
                            (n = e.formData),
                            (i = e.dialogTableData),
                            !Object.values(n).some(function (e) {
                              return 'string' === typeof e && '' === e.trim();
                            }) && 0 !== i.length)
                          ) {
                            t.next = 4;
                            break;
                          }
                          return (
                            e.messageWarning('信息填写不完全'),
                            t.abrupt('return')
                          );
                        case 4:
                          if (
                            ((r = { name: n.name, remark: n.remark, data: i }),
                            !a)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (r.id = n.id), (t.next = 9), Object(s['d'])(r);
                        case 9:
                          (o = t.sent), (t.next = 15);
                          break;
                        case 12:
                          return (t.next = 14), Object(s['a'])(r);
                        case 14:
                          o = t.sent;
                        case 15:
                          o && (e.handleChangeDialogVisible(!1), e.initPage());
                        case 16:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            handleToEdit: function (e) {
              var t = e.id,
                a = e.name,
                n = e.remark,
                i = e.data;
              this.handleChangeDialogVisible(!0),
                (this.formData = { id: t, name: a, remark: n }),
                (this.dialogTableData = i),
                (this.isEdit = !0);
            },
            handleToDeleteData: function (e) {
              var t = this;
              Object(s['b'])(e).then(function () {
                t.messageSuccess('删除成功'),
                  t.closeGlobalDialog(),
                  t.initPage();
              });
            },
            initPage: function () {
              var e = this;
              (this.loading = !0),
                Object(s['c'])().then(function (t) {
                  (e.tableData = t.map(function (e) {
                    return Object(l['a'])(
                      Object(l['a'])({}, e),
                      {},
                      {
                        updatedTime: Object(u['timestampToTime'])(
                          e.updatedTime,
                        ),
                      },
                    );
                  })),
                    (e.loading = !1);
                });
            },
          },
        },
        p = h,
        m = (a('cc80'), a('2877')),
        g = Object(m['a'])(p, r, o, !1, null, '25552d4e', null),
        v = g.exports,
        y = {
          name: 'DataStructure',
          components: { DataStructureComponents: v },
        },
        D = y,
        k = Object(m['a'])(D, n, i, !1, null, 'b7cd11ee', null);
      t['default'] = k.exports;
    },
    e78f: function (e, t, a) {
      'use strict';
      a.d(t, 'c', function () {
        return i;
      }),
        a.d(t, 'a', function () {
          return r;
        }),
        a.d(t, 'd', function () {
          return o;
        }),
        a.d(t, 'b', function () {
          return l;
        });
      var n = a('8116'),
        i = function (e) {
          return Object(n['c'])('/api/dataStructurePage', e);
        },
        r = function (e) {
          return Object(n['e'])('/api/dataStructurePage', e);
        },
        o = function (e) {
          return Object(n['f'])('/api/dataStructurePage', e);
        },
        l = function (e) {
          return Object(n['a'])('/api/dataStructurePage/'.concat(e));
        };
    },
    ed4f: function (e, t, a) {
      'use strict';
      var n = a('a33a'),
        i = a.n(n);
      i.a;
    },
  },
]);
//# sourceMappingURL=chunk-377a452e.9bf2b3dc.js.map
