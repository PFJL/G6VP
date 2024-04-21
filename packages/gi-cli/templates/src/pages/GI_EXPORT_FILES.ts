/** G6VP 站点自动生成的配置 **/
export const GI_PROJECT_CONFIG = {
  nodes: [],
  edges: [],
  layout: {
    id: 'Dagre',
    props: {
      type: 'dagre',
      rankdir: 'TB',
      align: null,
      nodesep: 40,
      ranksep: 80,
    },
  },
  components: [
    {
      id: 'ZoomIn',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '放大',
          isShowIcon: true,
          icon: 'icon-zoomin',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'ZoomOut',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '缩小',
          isShowIcon: true,
          icon: 'icon-zoomout',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'FitView',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '自适应',
          isShowIcon: true,
          icon: 'icon-fit-view',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'FitCenter',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '视图居中',
          isShowIcon: true,
          icon: 'icon-fit-center',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'LassoSelect',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '自由圈选',
          isShowIcon: true,
          icon: 'icon-lasso',
          isShowTooltip: true,
          tooltip: '按住Shift，点击画布即可自由圈选',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'PropertiesPanel',
      props: {
        serviceId: 'GI/PropertiesPanel',
        title: '属性面板',
        placement: 'RT',
        width: '356px',
        height: 'calc(100% - 0px)',
        offset: [10, 10],
        animate: false,
        defaultiStatistic: false,
      },
    },
    {
      id: 'ActivateRelations',
      props: {
        enableNodeHover: true,
        enableEdgeHover: true,
        enable: true,
        trigger: 'click',
        upstreamDegree: 1,
        downstreamDegree: 1,
      },
    },
    {
      id: 'CanvasSetting',
      props: {
        styleCanvas: {
          backgroundColor: '#fff',
          backgroundImage: 'https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*k9t4QamMuQ4AAAAAAAAAAAAAARQnAQ',
          background: '#fff',
        },
        dragCanvas: {
          disabled: false,
          direction: 'both',
          enableOptimize: true,
        },
        zoomCanvas: {
          disabled: false,
          enableOptimize: true,
        },
        clearStatus: true,
        doubleClick: true,
      },
    },
    {
      id: 'NodeLegend',
      props: {
        sortKey: 'type',
        textColor: '#ddd',
        placement: 'LB',
        offset: [100, 20],
      },
    },
    {
      id: 'Placeholder',
      name: '画布占位符',
      props: {
        img: 'https://gw.alipayobjects.com/zos/bmw-prod/db278704-6158-432e-99d2-cc5db457585d.svg',
        text: '当前画布为空，请先试试「数据/图数据源/导入/示例数据」',
        width: 380,
      },
    },
    {
      id: 'FilterPanel',
      name: '筛选面板',
      props: {
        filterKeys: ['edge-amount', 'node-icon'],
        isFilterIsolatedNodes: true,
        highlightMode: true,
        filterLogic: 'and',
        histogramOptions: {
          isCustom: false,
        },
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '筛选面板',
          isShowIcon: true,
          icon: 'icon-filter',
          isShowTooltip: true,
          tooltip: '通过属性筛选画布信息，可自定义',
          tooltipColor: '#128075',
          tooltipPlacement: 'top',
          hasDivider: false,
          height: '46px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
        histogramColor: '#128075',
      },
    },
    {
      id: 'LargeGraph',
      name: '3D大图',
      props: {
        visible: false,
        minSize: '50%',
        maxSize: '100%',
        placement: 'RB',
        offset: [0, 0],
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '3D大图',
          isShowIcon: true,
          icon: 'icon-3d',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
        backgroundColor: '#fff',
        highlightColor: 'red',
      },
    },
    {
      id: 'MapMode',
      name: '地图模式',
      props: {
        visible: false,
        type: 'amap',
        theme: 'light',
        minSize: '50%',
        maxSize: '100%',
        placement: 'RB',
        offset: [0, 0],
        longitudeKey: 'longitude',
        latitudeKey: 'latitude',
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '地图模式',
          isShowIcon: true,
          icon: 'icon-global',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'SnapshotGallery',
      name: '快照画廊',
      props: {
        background: '#fff',
        direction: 'horizontal',
        placement: 'LT',
        offset: [20, 20],
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '快照画廊',
          isShowIcon: true,
          icon: 'icon-camera',
          isShowTooltip: true,
          tooltip: '快照画廊(快捷键ctrl+x)',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'ContextMenu',
      name: '右键菜单',
      props: {
        GI_CONTAINER: ['NeighborsQuery', 'ToggleClusterWithMenu', 'PinNodeWithMenu'],
        nodeMenuComponents: ['NeighborsQuery', 'ToggleClusterWithMenu', 'PinNodeWithMenu'],
        bindTypes: ['node'],
        edgeMenuComponents: [],
        canvasMenuComponents: [],
        comboMenuComponents: [],
      },
    },
    {
      id: 'ToggleClusterWithMenu',
      name: '展开/收起',
      props: {
        isReLayout: false,
        degree: 1,
      },
    },
    {
      id: 'NeighborsQuery',
      name: '邻居查询',
      props: {
        serviceId: 'GI/NeighborsQuery',
        degree: '1',
        isFocus: true,
      },
    },
    {
      id: 'Copyright',
      name: '版权',
      props: {
        imageUrl: 'https://gw.alipayobjects.com/zos/bmw-prod/c2d4b2f5-2a34-4ae5-86c4-df97f7136105.svg',
        width: 200,
        height: 30,
        placement: 'RB',
        offset: [10, 10],
      },
    },
    {
      id: 'Loading',
      name: '加载动画',
      props: {},
    },
    {
      id: 'PinNodeWithMenu',
      name: '固定节点(MENU)',
      props: {
        color: '#fff',
        fill: '#262626',
      },
    },
    {
      id: 'ForceSimulation',
      name: '力导布局控制器',
      props: {
        autoPin: true,
        dragNodeMass: 10000000,
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '力导布局控制器',
          isShowIcon: true,
          icon: 'icon-layout-force',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'Initializer',
      name: '初始化器',
      props: {
        serviceId: 'GI/GI_SERVICE_INTIAL_GRAPH',
        schemaServiceId: 'GI/GI_SERVICE_SCHEMA',
        GI_INITIALIZER: true,
        aggregate: false,
      },
    },
    {
      id: 'LayoutSwitch',
      name: '布局切换',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '布局切换',
          isShowIcon: true,
          icon: 'icon-layout',
          isShowTooltip: false,
          tooltip: '一键切换画布布局',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '46px',
          isVertical: true,
        },
      },
    },
    {
      id: 'GrailLayout',
      name: '圣杯布局',
      props: {
        GI_CONTAINER_LEFT: [],
        leftDisplay: false,
        leftVisible: true,
        leftWidth: '400px',
        GI_CONTAINER_RIGHT: ['FilterPanel', 'SankeyAnalysis'],
        rightDisplay: true,
        rightVisible: true,
        rightWidth: '350px',
        GI_CONTAINER_BOTTOM: ['ChartAnalysis'],
        bottomDisplay: true,
        bottomVisible: true,
        bottomHeight: '300px',
        GI_CONTAINER_TOP: [],
        topDisplay: false,
        topVisible: false,
        topHeight: '200px',
      },
    },
    {
      id: 'TableMode',
      name: '表格模式',
      props: {
        enableCopy: true,
        isSelectedActive: true,
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '表格模式',
          isShowIcon: true,
          icon: 'icon-table',
          isShowTooltip: true,
          tooltip: '将画布中的节点和边以表格形式展示',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'InfoDetection',
      name: '信息检测',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '信息检测',
          isShowIcon: true,
          icon: 'icon-infomation',
          isShowTooltip: true,
          tooltip: '检测画布中孤立点、环等',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'SankeyAnalysis',
      name: '桑基图分析',
      props: {
        weightField: 'amount',
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '桑基图分析',
          isShowIcon: true,
          icon: 'icon-sankey',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'ChartAnalysis',
      name: '图表分析',
      props: {
        title: '未命名图表',
        chartType: 'columnChart',
        height: 150,
        dataType: 'edges',
        xField_edges: 'time',
        yField_edges: 'amount',
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '图表分析',
          isShowIcon: true,
          icon: 'icon-barchart',
          isShowTooltip: true,
          tooltip: '图中数据通过统计图表展示分析',
          tooltipColor: '#128075',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
  ],
};

/** G6VP 站点选择服务引擎的上下文配置信息 **/
export const SERVER_ENGINE_CONTEXT = {};

/** 导出的主题 **/
export const THEME_VALUE = 'light';
