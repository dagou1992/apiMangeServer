(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-61f7e578'],
  {
    '06f0': function (e, t, a) {},
    '0ae7': function (e, t, a) {
      'use strict';
      var n = a('59a4'),
        i = a.n(n);
      i.a;
    },
    '23ba': function (e, t, a) {
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
          return Object(n['b'])('/api/apiPage/group', e);
        },
        r = function (e) {
          return Object(n['d'])('/api/apiPage/group', e);
        },
        o = function (e) {
          return Object(n['e'])('/api/apiPage/group/', e);
        },
        l = function (e) {
          return Object(n['a'])('/api/apiPage/group/'.concat(e));
        };
    },
    '287f': function (e, t, a) {},
    '4ec3': function (e, t, a) {
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
      a('99af');
      var n = a('8116'),
        i = function (e) {
          return Object(n['b'])('/api/apiPage', e);
        },
        r = function (e) {
          return Object(n['d'])('/api/apiPage', e);
        },
        o = function (e) {
          return Object(n['e'])('/api/apiPage/', e);
        },
        l = function (e) {
          return Object(n['a'])(
            '/api/apiPage/'.concat(e.group, '/').concat(e.id),
          );
        };
    },
    '59a4': function (e, t, a) {},
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
    '5efe': function (e, t, a) {
      'use strict';
      a.r(t);
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'el-container',
            { staticClass: 'api' },
            [a('api-sider'), a('api-table')],
            1,
          );
        },
        i = [],
        r = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'el-aside',
            {
              staticClass: 'api_sider',
              staticStyle: { 'background-color': 'rgb(238, 241, 246)' },
              attrs: { width: '280px' },
            },
            [
              a(
                'el-card',
                {
                  staticClass: 'box-card',
                  attrs: { 'body-style': { padding: 0 } },
                },
                [
                  a('div', { attrs: { slot: 'header' }, slot: 'header' }, [
                    a(
                      'div',
                      { staticStyle: { margin: '-4px -5px' } },
                      [
                        a(
                          'el-button',
                          {
                            attrs: { type: 'success', size: 'small' },
                            on: { click: e.handleToAddGroup },
                          },
                          [
                            a('i', { staticClass: 'el-icon-plus' }),
                            e._v(' 新建分组 '),
                          ],
                        ),
                      ],
                      1,
                    ),
                  ]),
                  a(
                    'div',
                    { staticStyle: { margin: '8px' } },
                    [
                      a(
                        'el-input',
                        {
                          attrs: {
                            clearable: '',
                            placeholder: '搜索分组',
                            size: 'small',
                          },
                          on: { change: e.handleSearchGroup },
                          model: {
                            value: e.groupSearchValue,
                            callback: function (t) {
                              e.groupSearchValue = t;
                            },
                            expression: 'groupSearchValue',
                          },
                        },
                        [
                          a('i', {
                            staticClass: 'el-input__icon el-icon-search',
                            attrs: { slot: 'prefix' },
                            slot: 'prefix',
                          }),
                        ],
                      ),
                    ],
                    1,
                  ),
                  a(
                    'el-tag',
                    {
                      attrs: { type: 'info' },
                      on: {
                        click: function (t) {
                          return e.handleMenuClick(void 0);
                        },
                      },
                    },
                    [e._v('所有API')],
                  ),
                  0 === e.menuList.length
                    ? a(
                        'p',
                        {
                          staticStyle: {
                            'margin-top': '20px',
                            'text-align': 'center',
                            'font-size': '13px',
                            color: '#909399',
                          },
                        },
                        [
                          a('i', { staticClass: 'el-icon-files' }),
                          e._v(' 暂无数据 '),
                        ],
                      )
                    : e._e(),
                  a(
                    'el-menu',
                    {
                      directives: [
                        {
                          name: 'loading',
                          rawName: 'v-loading',
                          value: e.menuLoading,
                          expression: 'menuLoading',
                        },
                      ],
                      attrs: {
                        'default-active': e.activeGroup
                          ? e.activeGroup.toString()
                          : e.activeGroup,
                      },
                      on: { select: e.handleMenuClick },
                    },
                    e._l(e.menuList, function (t) {
                      var n = t.name,
                        i = t.id;
                      return a(
                        'el-menu-item',
                        { key: i, attrs: { index: i.toString() } },
                        [
                          a(
                            'el-row',
                            { attrs: { gutter: 20 } },
                            [
                              a('el-col', { attrs: { span: 20 } }, [
                                a('div', { staticClass: 'grid-content' }, [
                                  a(
                                    'span',
                                    { attrs: { slot: 'title' }, slot: 'title' },
                                    [e._v(e._s(n))],
                                  ),
                                ]),
                              ]),
                              a('el-col', { attrs: { span: 4 } }, [
                                a(
                                  'div',
                                  { staticClass: 'grid-content' },
                                  [
                                    a(
                                      'el-dropdown',
                                      {
                                        attrs: { trigger: 'click' },
                                        on: { command: e.handleGroupClick },
                                      },
                                      [
                                        a(
                                          'span',
                                          { staticClass: 'el-dropdown-link' },
                                          [
                                            a('i', {
                                              staticClass: 'el-icon-more',
                                            }),
                                          ],
                                        ),
                                        a(
                                          'el-dropdown-menu',
                                          {
                                            attrs: { slot: 'dropdown' },
                                            slot: 'dropdown',
                                          },
                                          [
                                            a(
                                              'el-dropdown-item',
                                              {
                                                attrs: {
                                                  command: {
                                                    type: 'edit',
                                                    value: { name: n, id: i },
                                                  },
                                                },
                                              },
                                              [e._v('编辑')],
                                            ),
                                            a(
                                              'el-dropdown-item',
                                              {
                                                attrs: {
                                                  command: {
                                                    type: 'delete',
                                                    value: i,
                                                  },
                                                },
                                              },
                                              [e._v('删除')],
                                            ),
                                          ],
                                          1,
                                        ),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      );
                    }),
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        o = [],
        l = (a('b0c0'), a('498a'), a('5530')),
        c = a('2f62'),
        s = a('23ba'),
        u = a('cc8f'),
        d = {
          name: 'Sider',
          data: function () {
            return { menuList: [], menuLoading: !1, groupSearchValue: '' };
          },
          computed: Object(l['a'])({}, Object(c['b'])(['activeGroup'])),
          mixins: [u['a']],
          methods: {
            handleSearchGroup: function (e) {
              this.initPage('' === e.trim() ? void 0 : e);
            },
            handleMenuClick: function (e) {
              this.$store.dispatch('group/changeActiveGroup', e);
            },
            handleGroupClick: function (e) {
              var t = e.type,
                a = e.value;
              'edit' === t
                ? this.handleToEditGroup(a)
                : this.handleToDeleteGroup(a);
            },
            handleToAddGroup: function () {
              var e = this;
              this.$store.dispatch('globalDialog/toggleDialogVisible', {
                title: '新建分组',
                type: 'input',
                visible: !0,
                onSubmit: function (t) {
                  return e.submitCreateGroup(t);
                },
              });
            },
            handleToEditGroup: function (e) {
              var t = this;
              this.$store.dispatch('globalDialog/toggleDialogVisible', {
                title: '编辑分组',
                type: 'input',
                visible: !0,
                value: e.name,
                onSubmit: function (a) {
                  return t.submitUpdateGroup(e.id, a);
                },
              });
            },
            handleToDeleteGroup: function (e) {
              var t = this;
              this.$store.dispatch('globalDialog/toggleDialogVisible', {
                message: '<span style="color: red;">确定要删除吗？</span>',
                visible: !0,
                onSubmit: function () {
                  return t.submitDeleteGroup(e);
                },
              });
            },
            submitCreateGroup: function (e) {
              var t = this;
              Object(s['a'])({ name: e }).then(function () {
                t.messageSuccess('添加成功'), t.initPage();
              });
            },
            submitUpdateGroup: function (e, t) {
              var a = this;
              Object(s['d'])({ id: e, name: t }).then(function () {
                a.messageSuccess('修改成功'), a.initPage();
              });
            },
            submitDeleteGroup: function (e) {
              var t = this;
              Object(s['b'])(e).then(function () {
                t.messageSuccess('删除成功'), t.initPage();
              });
            },
            initPage: function (e) {
              var t = this;
              this.closeGlobalDialog(),
                (this.menuLoading = !0),
                Object(s['c'])({ name: e }).then(function (e) {
                  (t.menuLoading = !1), (t.menuList = e);
                });
            },
          },
          mounted: function () {
            this.initPage();
          },
        },
        p = d,
        g = (a('7048'), a('2877')),
        f = Object(g['a'])(p, r, o, !1, null, '227103ac', null),
        h = f.exports,
        b = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'el-container',
            { staticClass: 'api-table' },
            [
              a(
                'el-header',
                { staticStyle: { 'font-size': '12px' } },
                [
                  a(
                    'el-row',
                    { attrs: { gutter: 20 } },
                    [
                      a('el-col', { attrs: { span: 20 } }, [
                        a(
                          'div',
                          { staticClass: 'grid-content' },
                          [
                            a(
                              'el-button',
                              {
                                attrs: { type: 'success', size: 'small' },
                                on: { click: e.handleToAdd },
                              },
                              [
                                a('i', { staticClass: 'el-icon-plus' }),
                                e._v(' 新建 API '),
                              ],
                            ),
                          ],
                          1,
                        ),
                      ]),
                      a(
                        'el-col',
                        { attrs: { span: 4 } },
                        [
                          a(
                            'el-input',
                            {
                              attrs: { placeholder: '搜索API', clearable: '' },
                              model: {
                                value: e.searchValue,
                                callback: function (t) {
                                  e.searchValue = t;
                                },
                                expression: 'searchValue',
                              },
                            },
                            [
                              a('el-button', {
                                attrs: {
                                  slot: 'append',
                                  icon: 'el-icon-search',
                                },
                                on: { click: e.handleToSearch },
                                slot: 'append',
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a('el-main', [
                a(
                  'div',
                  { staticClass: 'table-container' },
                  [
                    a(
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
                        staticStyle: { 'min-height': '100%' },
                        attrs: {
                          data: e.tableData,
                          'header-cell-style': {
                            background: '#f8f8f8',
                            color: '#333',
                            borderLeft: '1px solid #ddd',
                          },
                          'row-style': {
                            cursor: 'pointer',
                            letterSpacing: '1px',
                          },
                        },
                        on: { 'cell-click': e.cellClick },
                      },
                      [
                        e._l(e.column, function (t) {
                          return a('el-table-column', {
                            key: t.value,
                            attrs: {
                              prop: t.value,
                              label: t.label,
                              sortable: t.sortable,
                              width: t.width,
                            },
                            scopedSlots: e._u(
                              [
                                {
                                  key: 'default',
                                  fn: function (n) {
                                    return [
                                      'type' === t.value
                                        ? a(
                                            'div',
                                            [
                                              a(
                                                'el-tag',
                                                {
                                                  attrs: {
                                                    'disable-transitions': '',
                                                    type:
                                                      t.type[n.row.type] || '',
                                                  },
                                                },
                                                [e._v(e._s(n.row.type))],
                                              ),
                                            ],
                                            1,
                                          )
                                        : a('div', [
                                            e._v(
                                              ' ' + e._s(n.row[t.value]) + ' ',
                                            ),
                                          ]),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !0,
                            ),
                          });
                        }),
                        a('table-operation', {
                          attrs: { operations: e.operations },
                        }),
                      ],
                      2,
                    ),
                  ],
                  1,
                ),
                a(
                  'div',
                  { staticClass: 'table-footer' },
                  [
                    a(
                      'el-row',
                      { attrs: { gutter: 20 } },
                      [
                        a(
                          'el-col',
                          {
                            staticStyle: { 'text-align': 'right' },
                            attrs: { offset: 16, span: 8 },
                          },
                          [
                            a('el-pagination', {
                              attrs: {
                                background: '',
                                layout: 'total, sizes, prev, pager, next',
                                total: e.total,
                                'page-sizes': [10, 20, 30, 40],
                                'page-size': e.pageSize,
                                'current-page': e.pageIndex,
                              },
                              on: {
                                'current-change': e.handlePageChange,
                                'size-change': e.handleSizeChange,
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ]),
            ],
            1,
          );
        },
        m = [],
        v = (a('d81d'), a('96cf'), a('1da1')),
        w = a('4ec3'),
        y = a('5acd'),
        S = a('986a'),
        x = {
          name: 'Table',
          components: { TableOperation: S['a'] },
          data: function () {
            var e = this;
            return {
              tableData: [],
              column: [
                { label: 'ID', value: 'id', width: 100 },
                { label: 'API Name', value: 'name' },
                {
                  label: '请求方式',
                  value: 'type',
                  width: 100,
                  type: {
                    GET: '',
                    POST: 'success',
                    PUT: 'warning',
                    DELETE: 'danger',
                  },
                },
                { label: 'URL', value: 'path' },
                { label: '更新时间', value: 'updatedTime', sortable: !0 },
              ],
              operations: [
                {
                  label: '编辑',
                  onClick: function (t) {
                    var a = t.id;
                    return e.$router.push({
                      name: 'ApiEditPage',
                      query: { id: a },
                    });
                  },
                },
                {
                  label: '新标签打开',
                  onClick: function (e) {
                    var t = e.id;
                    return window.open('#/api/detail?id='.concat(t));
                  },
                },
                {
                  label: '删除',
                  onClick: function (t) {
                    var a = t.id,
                      n = t.group;
                    return e.$store.dispatch(
                      'globalDialog/toggleDialogVisible',
                      {
                        message:
                          '<span style="color: red;">确定要删除吗？</span>',
                        visible: !0,
                        onSubmit: function () {
                          return e.handleToDeleteData({ id: a, group: n });
                        },
                      },
                    );
                  },
                },
              ],
              loading: !1,
              searchValue: '',
              pageIndex: 1,
              pageSize: 20,
              total: 0,
            };
          },
          computed: Object(l['a'])({}, Object(c['b'])(['activeGroup'])),
          watch: {
            activeGroup: function () {
              this.initPage();
            },
            pageIndex: function () {
              this.initPage();
            },
            pageSize: function () {
              this.initPage();
            },
          },
          mounted: function () {
            this.initPage();
          },
          mixins: [u['a']],
          methods: {
            cellClick: function (e, t, a) {
              var n = e.id;
              0 === a.getElementsByTagName('span').length &&
                this.$router.push({ name: 'ApiDetailPage', query: { id: n } });
            },
            handleToAdd: function () {
              this.$router.push({ name: 'ApiEditPage' });
            },
            handleToDeleteData: function (e) {
              var t = this;
              Object(w['b'])(e).then(function () {
                t.messageSuccess('删除成功'),
                  t.closeGlobalDialog(),
                  t.initPage();
              });
            },
            handleToSearch: function () {
              this.initPage();
            },
            handlePageChange: function (e) {
              this.pageIndex = e;
            },
            handleSizeChange: function (e) {
              this.pageSize = e;
            },
            initPage: function () {
              var e = this;
              return Object(v['a'])(
                regeneratorRuntime.mark(function t() {
                  var a, n, i, r, o, c;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.loading = !0),
                            (a = e.activeGroup),
                            (n = e.searchValue),
                            (i = e.pageIndex),
                            (r = e.pageSize),
                            (o = { group: a, pageIndex: i, pageSize: r }),
                            '' !== n.trim() && (o.value = n),
                            (t.next = 6),
                            Object(w['c'])(o)
                          );
                        case 6:
                          (c = t.sent),
                            c &&
                              ((e.tableData = c.data
                                .map(function (e) {
                                  return Object(l['a'])(
                                    Object(l['a'])({}, e),
                                    {},
                                    {
                                      createdTime: Object(y['timestampToTime'])(
                                        e.createdTime,
                                      ),
                                      updatedTime: Object(y['timestampToTime'])(
                                        e.updatedTime,
                                      ),
                                    },
                                  );
                                })
                                .sort(function (e, t) {
                                  return e.createdTime - t.createdTime;
                                })),
                              (e.total = c.total),
                              (e.loading = !1));
                        case 8:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
          },
        },
        T = x,
        k = (a('0ae7'), Object(g['a'])(T, b, m, !1, null, '18f96582', null)),
        j = k.exports,
        C = { name: 'Api', components: { 'api-sider': h, 'api-table': j } },
        P = C,
        _ = (a('935f'), Object(g['a'])(P, n, i, !1, null, '10ceab92', null));
      t['default'] = _.exports;
    },
    '6f89': function (e, t, a) {},
    7048: function (e, t, a) {
      'use strict';
      var n = a('6f89'),
        i = a.n(n);
      i.a;
    },
    8836: function (e, t, a) {
      'use strict';
      var n = a('287f'),
        i = a.n(n);
      i.a;
    },
    '935f': function (e, t, a) {
      'use strict';
      var n = a('06f0'),
        i = a.n(n);
      i.a;
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
        p = a('b622'),
        g = a('2d00'),
        f = p('isConcatSpreadable'),
        h = 9007199254740991,
        b = 'Maximum allowed index exceeded',
        m =
          g >= 51 ||
          !i(function () {
            var e = [];
            return (e[f] = !1), e.concat()[0] !== e;
          }),
        v = d('concat'),
        w = function (e) {
          if (!o(e)) return !1;
          var t = e[f];
          return void 0 !== t ? !!t : r(e);
        },
        y = !m || !v;
      n(
        { target: 'Array', proto: !0, forced: y },
        {
          concat: function (e) {
            var t,
              a,
              n,
              i,
              r,
              o = l(this),
              d = u(o, 0),
              p = 0;
            for (t = -1, n = arguments.length; t < n; t++)
              if (((r = -1 === t ? o : arguments[t]), w(r))) {
                if (((i = c(r.length)), p + i > h)) throw TypeError(b);
                for (a = 0; a < i; a++, p++) a in r && s(d, p, r[a]);
              } else {
                if (p >= h) throw TypeError(b);
                s(d, p++, r);
              }
            return (d.length = p), d;
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
  },
]);
//# sourceMappingURL=chunk-61f7e578.bbbe1458.js.map
