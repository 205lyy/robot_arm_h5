/* ============================================
 * 六轴机械臂科普H5 - 安徽智造模块
 * 功能：数据卡片、标签切换
 * 数据来源：安徽省人民政府官方文件、安徽日报、人民网等
 * ============================================ */

/**
 * 安徽智造配置数据
 * 数据来源：《安徽省智能机器人产业发展行动方案（2025—2027年）》
 * https://www.shouxian.gov.cn/group1/M00/29/D6/rB406mktDRiAKkveAATHqMPRG2E833.pdf
 */
var anhui_config = {
    cards: [
        {
            value: '500+',
            label: '机器人企业数量',
            source: '安徽省人民政府《安徽省智能机器人产业发展行动方案（2025—2027年）》'
        },
        {
            value: '600亿',
            label: '年产值规模',
            source: '安徽省人民政府《安徽省智能机器人产业发展行动方案（2025—2027年）》'
        },
        {
            value: '全国第五',
            label: '产业竞争力排名',
            source: '安徽日报《从"能运动"到"会思考"——机器人产业加速迈入"下半场"》'
        },
        {
            value: '4.1万台',
            label: '工业机器人产量',
            source: '人民网《皖产智能机器人"劲头"何来》'
        },
        {
            value: '26家',
            label: '国家级专精特新企业',
            source: '企业家日报《皖军崛起！安徽机器人产业剑指千亿集群》'
        },
        {
            value: '6家',
            label: '上市企业',
            source: '企业家日报《皖军崛起！安徽机器人产业剑指千亿集群》'
        },
        {
            value: '89%',
            label: '核心零部件国产化率',
            source: '安徽日报《从"能运动"到"会思考"——机器人产业加速迈入"下半场"》'
        },
        {
            value: '100+',
            label: '关键技术突破',
            source: '安徽省人民政府《安徽省智能机器人产业发展行动方案（2025—2027年）》'
        },
        {
            value: '1000亿',
            label: '2027年目标产值',
            source: '安徽省人民政府《安徽省智能机器人产业发展行动方案（2025—2027年）》'
        }
    ],
    
    tabs: [
        {
            tabIndex: 0,
            title: '重点城市',
            image: 'img/anhui/anhui-city.svg',
            content: '<div class="knowledge-section"><h4>双核引领格局</h4><p>安徽省机器人产业形成<strong>"双核引领、多点支撑"</strong>的空间布局，合肥和芜湖两大核心城市分工明确、协同发展：</p><div class="knowledge-card"><div class="card-title">合肥——创新策源地</div><div class="card-text">定位为全链条布局的创新核心，已集聚近160家产业链上下游企业，在智能物流机器人、整机装备及核心零部件环节具备较强基础。依托中国科学技术大学、合肥工业大学等高校科研实力，打造"产学研用"一体化创新生态。</div></div><div class="knowledge-card"><div class="card-title">芜湖——产业集聚区</div><div class="card-text">全国首个国家级机器人产业集聚区，已集聚产业链上下游企业350多家，2025年机器人产业规模突破400亿元，综合实力升至全国第六。在工业机器人本体、系统集成及应用场景方面集聚度较高，被誉为"机器人之都"。</div></div></div><div class="knowledge-section"><h4>重点城市对比</h4><div class="knowledge-table"><div class="table-row"><div class="table-cell header">城市</div><div class="table-cell header">企业数量</div><div class="table-cell header">产业特色</div><div class="table-cell header">年产值</div></div><div class="table-row"><div class="table-cell">合肥</div><div class="table-cell">160+</div><div class="table-cell">智能物流、核心零部件</div><div class="table-cell">200亿+</div></div><div class="table-row"><div class="table-cell">芜湖</div><div class="table-cell">350+</div><div class="table-cell">工业机器人本体</div><div class="table-cell">400亿+</div></div><div class="table-row"><div class="table-cell">马鞍山</div><div class="table-cell">30+</div><div class="table-cell">特种机器人</div><div class="table-cell">30亿+</div></div><div class="table-row"><div class="table-cell">蚌埠</div><div class="table-cell">20+</div><div class="table-cell">传感器、控制器</div><div class="table-cell">20亿+</div></div></div></div><div class="knowledge-section"><h4>什么是"双核引领"？</h4><p><strong>"双核引领"</strong>是安徽产业发展的重要战略，指由两个核心城市（合肥、芜湖）共同引领产业发展，形成"创新+制造"的双轮驱动格局。合肥侧重研发创新和核心技术突破，芜湖侧重产业化和规模化生产，二者互补协同，带动全省产业升级。</p></div><div class="knowledge-section"><h4>多点支撑城市</h4><p>除了双核城市，安徽其他城市也在机器人产业中发挥重要作用：</p><ul><li><strong>马鞍山：</strong>在特种机器人及相关智能装备方向形成布局，产品应用于矿山、消防等特殊场景</li><li><strong>蚌埠：</strong>聚焦传感器、控制器等核心零部件，打造"机器人大脑"产业集群</li><li><strong>阜阳：</strong>发展服务机器人和医疗机器人，推动机器人在民生领域的应用</li></ul></p></div>',
            source: '安徽日报《从"能运动"到"会思考"——机器人产业加速迈入"下半场"》、国元证券《科产融合塑新局，万亿产业向高端》'
        },
        {
            tabIndex: 1,
            title: '龙头企业',
            image: 'img/anhui/anhui-enterprise.svg',
            content: '<div class="knowledge-section"><h4>"链主"企业——埃夫特</h4><p>埃夫特作为安徽省首家上市机器人企业（2020年登陆科创板），是国内机器人行业的领军企业：</p><ul><li><strong>产能飞跃：</strong>产量从年产不足1000台提升至约2万台</li><li><strong>应用广泛：</strong>覆盖喷涂、搬运、打磨等十几类场景</li><li><strong>技术突破：</strong>四轴并联机器人突破每秒10米速度极限</li><li><strong>国产化率：</strong>从45%跃升至89%，摆脱进口依赖</li></ul></div><div class="knowledge-section"><h4>明星企业矩阵</h4><div class="knowledge-card"><div class="card-title">极智嘉（Geek+）</div><div class="card-text">全球领先的仓储机器人企业，稳居细分行业前三。其AMR（自主移动机器人）解决方案已在全球50多个国家和地区的电商、零售、物流等行业得到广泛应用。</div></div><div class="knowledge-card"><div class="card-title">优艾智合</div><div class="card-text">以6.1%的全球市场份额登顶工业移动操作机器人领域，产品应用于半导体、光伏、3C电子等高端制造场景，实现"移动+操作"一体化作业。</div></div><div class="card-title">酷哇科技</div><div class="card-text">专注于环卫机器人研发，产品已在全国30余城"上岗"，实现道路清扫、垃圾收集等全流程自动化。</div></div></div><div class="knowledge-section"><h4>专精特新企业</h4><p>安徽省培育了<strong>26家国家级专精特新"小巨人"企业</strong>，它们在细分领域深耕细作：</p><ul><li><strong>清能德创：</strong>伺服电机领域专家，产品广泛应用于工业机器人</li><li><strong>巨一科技：</strong>控制器研发领军者，为机器人提供"大脑"支持</li><li><strong>合肥欣奕华：</strong>显示面板制造装备专家，机器人应用于高端显示产业</li></ul></div><div class="knowledge-section"><h4>什么是"链主"企业？</h4><p><strong>"链主"企业</strong>指在产业链中占据核心地位、能够带动上下游企业协同发展的龙头企业。埃夫特作为机器人"链主"，不仅自身发展壮大，还通过技术输出、供应链整合等方式，带动了一批配套企业共同成长，形成了完整的产业生态。</p></div>',
            source: '企业家日报《皖军崛起！安徽机器人产业剑指千亿集群》、安徽日报《从"能运动"到"会思考"——机器人产业加速迈入"下半场"》'
        },
        {
            tabIndex: 2,
            title: '产业链',
            image: 'img/anhui/anhui-industry.svg',
            content: '<div class="knowledge-section"><h4>产业链全景</h4><p>安徽省已形成完整的机器人产业链，覆盖<strong>"大脑—小脑—核心部组件—本体"</strong>的全链条研发制造体系：</p></div><div class="knowledge-section"><h4>上游：核心零部件</h4><p>机器人的"心脏"和"关节"，技术门槛最高、附加值最大：</p><div class="knowledge-card"><div class="card-title">伺服电机</div><div class="card-text">机器人的"肌肉"，提供精确的动力输出。清能德创等企业实现了伺服电机的国产化替代，打破了外资品牌的长期垄断。</div></div><div class="knowledge-card"><div class="card-title">减速器</div><div class="card-text">机器人的"关节"，将电机的高速旋转转换为低速高扭矩输出。谐波减速器和RV减速器是六轴机械臂的核心部件。</div></div><div class="card-title">控制器</div><div class="card-text">机器人的"小脑"，负责运动控制和路径规划。巨一科技等企业在控制器领域具备较强竞争力。</div></div></div><div class="knowledge-section"><h4>中游：机器人本体</h4><p>机器人的"身体"，包括各种类型的机器人整机：</p><ul><li><strong>工业机器人：</strong>六轴机械臂、SCARA机器人、Delta并联机器人</li><li><strong>服务机器人：</strong>清洁机器人、配送机器人、医疗机器人</li><li><strong>特种机器人：</strong>消防机器人、矿山机器人、水下机器人</li></ul></div><div class="knowledge-section"><h4>下游：系统集成与应用</h4><p>机器人的"舞台"，将机器人应用于具体场景：</p><ul><li><strong>焊接应用：</strong>汽车制造、钢结构加工中的自动焊接</li><li><strong>涂装应用：</strong>汽车、家电等行业的自动化喷涂</li><li><strong>装配应用：</strong>3C电子、精密机械的零部件组装</li><li><strong>物流应用：</strong>仓储分拣、货物搬运的自动化</li></ul></div><div class="knowledge-section"><h4>国产化率提升</h4><div class="knowledge-table"><div class="table-row"><div class="table-cell header">年份</div><div class="table-cell header">国产化率</div><div class="table-cell header">变化</div></div><div class="table-row"><div class="table-cell">2020</div><div class="table-cell">33%</div><div class="table-cell">-</div></div><div class="table-row"><div class="table-cell">2022</div><div class="table-cell">55%</div><div class="table-cell">↑22%</div></div><div class="table-row"><div class="table-cell">2024</div><div class="table-cell">76%</div><div class="table-cell">↑21%</div></div><div class="table-row"><div class="table-cell">2025</div><div class="table-cell">89%</div><div class="table-cell">↑13%</div></div></div></div><div class="knowledge-section"><h4>为什么核心零部件国产化很重要？</h4><p>核心零部件曾长期依赖进口，占机器人成本的70%以上，严重制约了产业发展。国产化率的提升意味着：</p><ul><li><strong>成本降低：</strong>国产零部件价格比进口低30%-50%</li><li><strong>供应稳定：</strong>不受国际形势影响，保障产业链安全</li><li><strong>技术可控：</strong>掌握核心技术，实现自主可控</li></ul></p></div>',
            source: '企业家日报《皖军崛起！安徽机器人产业剑指千亿集群》、安徽省人民政府《安徽省智能机器人产业发展行动方案（2025—2027年）》'
        },
        {
            tabIndex: 3,
            title: '发展规划',
            image: 'img/anhui/anhui-plan.svg',
            content: '<div class="knowledge-section"><h4>"十百千"发展格局</h4><p>安徽省《智能机器人产业发展行动方案（2025—2027年）》提出宏伟目标：</p><div class="knowledge-table"><div class="table-row"><div class="table-cell header">目标</div><div class="table-cell header">具体内容</div></div><div class="table-row"><div class="table-cell"><strong>"十"</strong></div><div class="table-cell">培育10户以上细分领域国内龙头企业</div></div><div class="table-row"><div class="table-cell"><strong>"百"</strong></div><div class="table-cell">突破100项以上关键技术及标志性产品</div></div><div class="table-row"><div class="table-cell"><strong>"千"</strong></div><div class="table-cell">全产业链营业收入达到1000亿元</div></div></div></div><div class="knowledge-section"><h4>重点突破领域</h4><p>方案明确了五大重点突破领域：</p><div class="knowledge-card"><div class="card-title">工业机器人</div><div class="card-text">攻克高精度、高负载、高速工业机器人关键技术，提升整机性能和可靠性，扩大市场份额。</div></div><div class="knowledge-card"><div class="card-title">服务机器人</div><div class="card-text">发展清洁、配送、陪护等服务机器人，拓展在医疗、养老、教育等领域的应用。</div></div><div class="card-title">特种机器人</div><div class="card-text">研发消防、矿山、巡检等特种机器人，满足特殊场景的智能化需求。</div></div><div class="card-title">核心零部件</div><div class="card-text">突破伺服电机、减速器、控制器等核心零部件技术瓶颈，实现全面国产化。</div></div><div class="card-title">人工智能赋能</div><div class="card-text">推动AI与机器人深度融合，实现自主感知、自主决策、自主学习能力。</div></div></div><div class="knowledge-section"><h4>政策支持措施</h4><p>安徽省出台多项政策支持机器人产业发展：</p><ul><li><strong>合肥：</strong>设立100亿元未来产业基金，三年投入20亿元建设平台，年供1亿元专项补贴</li><li><strong>芜湖：</strong>打造"机器人谷"，提供研发、生产、检测等全链条服务</li><li><strong>全省：</strong>建立机器人产业联盟，促进产学研用协同创新</li></ul></div><div class="knowledge-section"><h4>2030年远景目标</h4><p>到2030年，安徽将建成智能机器人国家级先进制造业集群，打造全球有重要影响力的智能机器人产业高地。届时：</p><ul><li><strong>产业规模：</strong>全产业链产值突破2000亿元</li><li><strong>创新能力：</strong>建成一批国家级创新平台</li><li><strong>品牌影响力：</strong>培育多个国际知名品牌</li></ul></div><div class="knowledge-section"><h4>为什么发展机器人产业？</h4><p>机器人产业是<strong>"制造业皇冠上的明珠"</strong>，具有重要战略意义：</p><ul><li><strong>推动产业升级：</strong>机器人是智能制造的核心装备，能够提升生产效率和产品质量</li><li><strong>保障民生：</strong>服务机器人能够改善人们的生活质量，特别是在医疗、养老领域</li><li><strong>增强竞争力：</strong>机器人产业代表着一个国家的制造业水平和科技创新能力</li></ul></p></div>',
            source: '安徽省人民政府《安徽省智能机器人产业发展行动方案（2025—2027年）》、企业家日报《皖军崛起！安徽机器人产业剑指千亿集群》'
        }
    ]
};

/**
 * 初始化安徽智造页
 * @param {number} tabIndex - 默认显示的标签索引
 * @description 进入安徽智造页时调用
 */
function anhui_init(tabIndex) {
    var defaultTab = tabIndex || 0;
    anhui_switchTab(defaultTab);
}

/**
 * 切换安徽智造标签
 * @param {number} tabIndex - 目标标签索引(0-3)
 * @description 切换到指定的标签，更新显示内容
 */
function anhui_switchTab(tabIndex) {
    if (tabIndex < 0 || tabIndex >= anhui_config.tabs.length) {
        return;
    }
    
    var tabs = document.querySelectorAll('.anhui-tab-btn');
    tabs.forEach(function(tab, index) {
        if (index === tabIndex) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    var content = anhui_config.tabs[tabIndex];
    
    var contentContainer = document.getElementById('anhui-content');
    if (contentContainer && content) {
        contentContainer.innerHTML = 
            '<div class="anhui-item">' +
            '<div class="anhui-subtitle">' + content.title + '</div>' +
            '<img src="' + content.image + '" alt="' + content.title + '" class="anhui-img">' +
            '<div class="anhui-body">' + content.content + '</div>' +
            '<p class="anhui-source">数据来源：' + content.source + '</p>' +
            '</div>';
    }
}