(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-6d45ef43'],
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
    '287f': function (e, t, a) {},
    '3c39': function (e, t, a) {
      'use strict';
      var n = a('6234'),
        i = a.n(n);
      i.a;
    },
    '45fc': function (e, t, a) {
      'use strict';
      var n = a('23e7'),
        i = a('b727').some,
        l = a('a640'),
        r = a('ae40'),
        o = l('some'),
        s = r('some');
      n(
        { target: 'Array', proto: !0, forced: !o || !s },
        {
          some: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    6234: function (e, t, a) {},
    8836: function (e, t, a) {
      'use strict';
      var n = a('287f'),
        i = a.n(n);
      i.a;
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
        l = a('986a'),
        r = {
          name: 'BaseTable',
          props: {
            tableData: Array,
            loading: Boolean,
            tableList: Array,
            operations: Array,
          },
          components: { TableOperation: l['a'] },
        },
        o = r,
        s = a('2877'),
        c = Object(s['a'])(o, n, i, !1, null, '97bcf8f8', null);
      t['a'] = c.exports;
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
        l = { name: 'TableOperation', props: { operations: Array } },
        r = l,
        o = (a('8836'), a('2877')),
        s = Object(o['a'])(r, n, i, !1, null, '70a6c00c', null);
      t['a'] = s.exports;
    },
    b923: function (e, t, a) {
      'use strict';
      a.d(t, 'c', function () {
        return i;
      }),
        a.d(t, 'a', function () {
          return l;
        }),
        a.d(t, 'd', function () {
          return r;
        }),
        a.d(t, 'b', function () {
          return o;
        });
      var n = a('8116'),
        i = function (e) {
          return Object(n['b'])('/api/envPage', e);
        },
        l = function (e) {
          return Object(n['d'])('/api/envPage', e);
        },
        r = function (e) {
          return Object(n['e'])('/api/envPage', e);
        },
        o = function (e) {
          return Object(n['a'])('/api/envPage/'.concat(e));
        };
    },
    fbcc: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('env-components');
        },
        i = [],
        l = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'div',
            { staticStyle: { height: '100%' } },
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
                  a('h3', [e._v('环境配置')]),
                  a('p', [
                    e._v(
                      '项目环境可以帮助您快速切换测试的 API 地址前缀、全局变量等信息',
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
                      e._v(' 新建环境 '),
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
                    title: e.isEdit ? '编辑环境' : '新建环境',
                    visible: e.dialogVisible,
                    width: '30%',
                  },
                  on: {
                    'update:visible': function (t) {
                      e.dialogVisible = t;
                    },
                  },
                },
                [
                  a(
                    'el-form',
                    { attrs: { model: e.formData, 'label-width': '80px' } },
                    [
                      e._l(e.formList, function (t) {
                        return a(
                          'el-form-item',
                          { key: t.label, attrs: { label: t.label } },
                          [
                            a('el-input', {
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
                      a(
                        'el-form-item',
                        [
                          a(
                            'el-button',
                            {
                              attrs: { type: 'primary' },
                              on: { click: e.handleSubmitEnv },
                            },
                            [e._v(' 提交 ')],
                          ),
                          a('el-button', [e._v('取消')]),
                        ],
                        1,
                      ),
                    ],
                    2,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        r = [],
        o = (a('45fc'), a('b0c0'), a('07ac'), a('498a'), a('96cf'), a('1da1')),
        s = a('b923'),
        c = a('cc8f'),
        u = a('962c'),
        b = {
          name: 'index',
          data: function () {
            var e = this;
            return {
              tableData: [],
              tableList: [
                { label: 'ID：', value: 'id', width: 100 },
                { label: '名称：', value: 'name' },
                { label: '备注：', value: 'remark', width: 240 },
                { label: '前置URL：', value: 'host' },
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
              formList: [
                { label: '环境名称', value: 'name' },
                { label: '环境备注', value: 'remark' },
                { label: 'Host', value: 'host' },
              ],
              formData: { name: '', remark: '', host: '' },
              dialogVisible: !1,
              loading: !1,
              isEdit: !1,
            };
          },
          components: { BaseTable: u['a'] },
          mounted: function () {
            this.initPage();
          },
          mixins: [c['a']],
          methods: {
            handleChangeDialogVisible: function (e) {
              this.dialogVisible = e;
            },
            handleSubmitEnv: function () {
              var e = this;
              return Object(o['a'])(
                regeneratorRuntime.mark(function t() {
                  var a, n;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((a = e.formData),
                            !Object.values(a).some(function (e) {
                              return 'string' === typeof e && '' === e.trim();
                            }))
                          ) {
                            t.next = 4;
                            break;
                          }
                          return (
                            e.messageWarning('信息填写不完整'),
                            t.abrupt('return')
                          );
                        case 4:
                          if (!e.isEdit) {
                            t.next = 10;
                            break;
                          }
                          return (t.next = 7), Object(s['d'])(a);
                        case 7:
                          (n = t.sent), (t.next = 13);
                          break;
                        case 10:
                          return (t.next = 12), Object(s['a'])(a);
                        case 12:
                          n = t.sent;
                        case 13:
                          n && (e.handleChangeDialogVisible(!1), e.initPage());
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            handleToCreate: function () {
              (this.isEdit = !1),
                (this.formData = { name: '', remark: '', host: '' }),
                this.handleChangeDialogVisible(!0);
            },
            handleToEdit: function (e) {
              var t = e.id,
                a = e.name,
                n = e.remark,
                i = e.host;
              this.handleChangeDialogVisible(!0),
                (this.isEdit = !0),
                (this.formData = { id: t, name: a, remark: n, host: i });
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
                  (e.tableData = t), (e.loading = !1);
                });
            },
          },
        },
        d = b,
        f = (a('3c39'), a('2877')),
        m = Object(f['a'])(d, l, r, !1, null, 'e7bc9346', null),
        h = m.exports,
        p = { name: 'Env', components: { EnvComponents: h } },
        v = p,
        g = Object(f['a'])(v, n, i, !1, null, 'f88cf7be', null);
      t['default'] = g.exports;
    },
  },
]);
//# sourceMappingURL=chunk-6d45ef43.2a4b3c32.js.map
