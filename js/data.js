/* ========================================
   阅剧云 — 数据文件
   来源：起点中文网、番茄小说、晋江文学城、
         抖音短剧、腾讯视频、红果短剧等
   ======================================== */

// ---------- 分类数据 ----------
const categories = [
    { name: '玄幻修仙', icon: '🐉', count: 3200, color: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
    { name: '都市现实', icon: '🏙️', count: 2800, color: 'linear-gradient(135deg,#3b82f6,#60a5fa)' },
    { name: '科幻未来', icon: '🚀', count: 1500, color: 'linear-gradient(135deg,#06b6d4,#67e8f9)' },
    { name: '悬疑推理', icon: '🔍', count: 1800, color: 'linear-gradient(135deg,#475569,#94a3b8)' },
    { name: '甜宠言情', icon: '💕', count: 3500, color: 'linear-gradient(135deg,#ec4899,#f472b6)' },
    { name: '历史权谋', icon: '⚔️', count: 1200, color: 'linear-gradient(135deg,#b45309,#f59e0b)' },
    { name: '灵异恐怖', icon: '👻', count: 900, color: 'linear-gradient(135deg,#1e293b,#475569)' },
    { name: '游戏异界', icon: '🎮', count: 1100, color: 'linear-gradient(135deg,#10b981,#34d399)' },
    { name: '赘婿战神', icon: '👑', count: 800, color: 'linear-gradient(135deg,#dc2626,#f87171)' },
    { name: '年代穿越', icon: '⏳', count: 1000, color: 'linear-gradient(135deg,#ea580c,#fb923c)' },
    { name: '古装权谋', icon: '🏯', count: 950, color: 'linear-gradient(135deg,#7c3aed,#a78bfa)' },
    { name: '职场逆袭', icon: '💼', count: 700, color: 'linear-gradient(135deg,#0ea5e9,#7dd3fc)' },
];

// ---------- 小说数据 ----------
const novels = [
    {
        title: '捞尸人', author: '纯洁滴小龙', platform: '起点中文网',
        rating: 9.5, views: '月票17.7万', tags: ['灵异', '权谋', '民俗'], badge: 'hot',
        desc: '灵异题材扛鼎之作，融合民俗与权谋，开创"尸体经济学"流派。起点月票榜11连冠，影视动漫版权全面售出，抖音二创播放量破亿。',
        cover: 'linear-gradient(135deg,#1e293b,#475569)', coverText: '捞',
        year: 2025, category: '灵异恐怖'
    },
    {
        title: '宿命之环', author: '爱潜水的乌贼', platform: '起点中文网',
        rating: 9.7, views: '月票236万', tags: ['克苏鲁', '奇幻', '续作'], badge: 'top',
        desc: '《诡秘之主》正统续作，奥黛丽·霍尔继承"愚者"衣钵破解宿命之环。2024起点年度月票榜第一，塔罗会成员命运交织引发老书虫狂欢。',
        cover: 'linear-gradient(135deg,#312e81,#6366f1)', coverText: '宿',
        year: 2024, category: '玄幻修仙'
    },
    {
        title: '十日终焉', author: '杀虫队队员', platform: '番茄小说',
        rating: 9.3, views: '在读400万+', tags: ['规则怪谈', '无限流', '悬疑'], badge: 'hot',
        desc: '规则怪谈+无限流现象级作品，番茄小说三榜第一。读者投票决定剧情走向，抖音话题播放量超2亿，年度题材突破之作。',
        cover: 'linear-gradient(135deg,#7f1d1d,#dc2626)', coverText: '十',
        year: 2024, category: '悬疑推理'
    },
    {
        title: '夜无疆', author: '辰东', platform: '起点中文网',
        rating: 9.2, views: '首订10万+', tags: ['玄幻', '末日', '热血'], badge: 'hot',
        desc: '辰东最新玄幻巨作，起点畅销榜TOP4。B站二创播放量破亿，影视版权被企鹅影业高价收购，覆盖玄幻末日全题材。',
        cover: 'linear-gradient(135deg,#0c4a6e,#0ea5e9)', coverText: '夜',
        year: 2025, category: '玄幻修仙'
    },
    {
        title: '我不是戏神', author: '三九音域', platform: '番茄小说',
        rating: 9.6, views: '在读413万', tags: ['都市高武', '搞笑', '热血'], badge: 'top',
        desc: '番茄小说巅峰榜TOP1，评分9.9。都市高武+搞笑元素完美融合，413万读者同时在读，同名短剧播放量破5亿。',
        cover: 'linear-gradient(135deg,#be123c,#fb7185)', coverText: '戏',
        year: 2024, category: '都市现实'
    },
    {
        title: '太平令', author: '阎ZK', platform: '起点中文网',
        rating: 8.9, views: '实体书百万', tags: ['历史', '权谋', '穿越'], badge: 'new',
        desc: '历史权谋神作，豆瓣8.9分，实体书销量破百万。打破"穿越逆袭"套路，被称为"《琅琊榜》后又一权谋标杆"。',
        cover: 'linear-gradient(135deg,#78350f,#d97706)', coverText: '太',
        year: 2025, category: '历史权谋'
    },
    {
        title: '赤心巡天', author: '情何以甚', platform: '起点中文网',
        rating: 9.4, views: '月票138万', tags: ['仙侠', '群像', '热血'], badge: 'top',
        desc: '仙侠文中极具代表性的作品，2024起点月票榜第二。连载五年深得读者喜爱，仙侠群像描写堪称一绝。',
        cover: 'linear-gradient(135deg,#065f46,#10b981)', coverText: '赤',
        year: 2024, category: '玄幻修仙'
    },
    {
        title: '我在精神病院学斩神', author: '三九音域', platform: '番茄小说',
        rating: 9.5, views: '在读300万+', tags: ['都市高武', '悬疑', '热血'], badge: 'hot',
        desc: '年度黑马神作，被称为"都市高武天花板"。融合悬疑与热血元素，B站相关视频播放量破6000万次，同名短剧同步开发中。',
        cover: 'linear-gradient(135deg,#4c1d95,#a78bfa)', coverText: '神',
        year: 2023, category: '都市现实'
    },
    {
        title: '道诡异仙', author: '狐尾的笔', platform: '起点中文网',
        rating: 9.6, views: '均订10万+', tags: ['仙侠', '克苏鲁', '东方'], badge: 'top',
        desc: '现象级东方克苏鲁仙侠作品，起点首部连载期间打破10万均订。B站相关视频播放量破6000万次，被誉为近年来最具想象力的仙侠小说。',
        cover: 'linear-gradient(135deg,#3b0764,#9333ea)', coverText: '道',
        year: 2023, category: '玄幻修仙'
    },
    {
        title: '灾变卡皇', author: '盲候', platform: '起点中文网',
        rating: 9.1, views: '均订8万+', tags: ['游戏异界', '卡牌', '克苏鲁'], badge: 'new',
        desc: '游戏异界天花板，融合卡牌+蒸汽朋克+克苏鲁元素。均订超8万，同名游戏/动漫同步开发，带动同类题材质量升级。',
        cover: 'linear-gradient(135deg,#0f766e,#5eead4)', coverText: '灾',
        year: 2025, category: '游戏异界'
    },
    {
        title: '谁让他修仙的！', author: '最白的乌鸦', platform: '起点中文网',
        rating: 9.0, views: '月票134万', tags: ['仙侠', '搞笑', '反套路'], badge: 'hot',
        desc: '风趣幽默的笔法与反套路的人设与情节博新出位，2024起点月票榜第三。每月稳定月票榜前十，仙侠喜剧的标杆之作。',
        cover: 'linear-gradient(135deg,#b91c1c,#fca5a5)', coverText: '谁',
        year: 2024, category: '玄幻修仙'
    },
    {
        title: '逼我重生是吧', author: '幼儿园一把手', platform: '起点中文网',
        rating: 8.8, views: '月票110万', tags: ['都市', '重生', '商战'], badge: 'new',
        desc: '最近几年写得最好的都市文之一，2024起点月票榜第四。都市重生+商战元素，主角利用未来记忆在商场叱咤风云。',
        cover: 'linear-gradient(135deg,#1e3a5f,#3b82f6)', coverText: '逼',
        year: 2024, category: '都市现实'
    },
    {
        title: '高武纪元', author: '烽仙', platform: '起点中文网',
        rating: 9.0, views: '月票109万', tags: ['高武', '科幻', '热血'], badge: 'hot',
        desc: '2024起点月武纪元题材黑马，月票榜多次登顶。高武世界设定严谨，战斗描写酣畅淋漓，科幻与武道的完美融合。',
        cover: 'linear-gradient(135deg,#831843,#ec4899)', coverText: '高',
        year: 2024, category: '科幻未来'
    },
    {
        title: '玄鉴仙族', author: '季越人', platform: '起点中文网',
        rating: 9.2, views: '月票104万', tags: ['仙侠', '家族', '群像'], badge: 'new',
        desc: '2023最具代表性仙侠作品之一，采用"家族修仙"新颖方式，以新破圈。作者凭此书证道大神，00后学生作者典范。',
        cover: 'linear-gradient(135deg,#164e63,#06b6d4)', coverText: '玄',
        year: 2023, category: '玄幻修仙'
    },
    {
        title: '轮回乐园', author: '那一只蚊子', platform: '起点中文网',
        rating: 9.3, views: '1400万字', tags: ['无限流', '热血', '暗黑'], badge: 'top',
        desc: '连载七年半的千万字巨著，2024年重新更新后月票榜稳居前五。无限流经典之作，每个世界都充满惊喜与挑战。',
        cover: 'linear-gradient(135deg,#1c1917,#44403c)', coverText: '轮',
        year: 2024, category: '玄幻修仙'
    },
    {
        title: '我在废土世界扫垃圾', author: '有花在野', platform: '晋江文学城',
        rating: 8.7, views: '口碑爆棚', tags: ['废土', '女强', '末世'], badge: 'new',
        desc: '中国网络文学双年榜(2024-2025)入选作品，晋江文学城年度佳作。废土世界中的女性力量，在末世中扫出一片天地。',
        cover: 'linear-gradient(135deg,#365314,#a3e635)', coverText: '废',
        year: 2025, category: '科幻未来'
    },
    {
        title: '癫，都癫，癫点好啊', author: '小盐子', platform: '番茄小说',
        rating: 8.9, views: '口碑佳作', tags: ['搞笑', '脑洞', '轻松'], badge: 'new',
        desc: '中国网络文学双年榜入选作品，番茄小说年度黑马。脑洞大开的故事设定，越癫越上头的阅读体验，让人欲罢不能。',
        cover: 'linear-gradient(135deg,#7c2d12,#fb923c)', coverText: '癫',
        year: 2025, category: '都市现实'
    },
    {
        title: '我的诡异人生', author: '白刃斩春风', platform: '起点中文网',
        rating: 8.8, views: '高人气', tags: ['诡异', '东方', '悬疑'], badge: 'hot',
        desc: '中国网络文学双年榜入选作品，东方诡异题材新锐之作。将中国传统志怪与现代叙事完美结合，营造出独特的恐怖氛围。',
        cover: 'linear-gradient(135deg,#2e1065,#7c3aed)', coverText: '诡',
        year: 2025, category: '灵异恐怖'
    },
    {
        title: '文豪1978', author: '坐望敬亭', platform: '起点中文网',
        rating: 8.6, views: '年代文精品', tags: ['年代', '文豪', '穿越'], badge: 'new',
        desc: '中国网络文学双年榜入选作品，年代文标杆之作。重回1978年，用文字改变时代，既有年代质感又有文学追求。',
        cover: 'linear-gradient(135deg,#450a0a,#dc2626)', coverText: '文',
        year: 2025, category: '年代穿越'
    },
    {
        title: '明日如昼', author: '随侯珠', platform: '晋江文学城',
        rating: 9.0, views: '全网TOP10', tags: ['甜宠', '都市', '治愈'], badge: 'top',
        desc: '2025年度全网最具影响力网络小说TOP10，晋江文学城年度佳作。甜宠治愈系天花板，读完让人心里暖暖的。',
        cover: 'linear-gradient(135deg,#db2777,#f9a8d4)', coverText: '明',
        year: 2025, category: '甜宠言情'
    },
    {
        title: '无敌六皇子', author: '未知', platform: '起点中文网',
        rating: 8.7, views: '首订3.2万', tags: ['玄幻', '权谋', '爽文'], badge: 'hot',
        desc: '起点新晋作者榜TOP1，用微积分推演兵法智斗权臣。"九王夺嫡""边境战争"剧情环环相扣，被赞"权谋版《庆余年》"。',
        cover: 'linear-gradient(135deg,#581c87,#c084fc)', coverText: '无',
        year: 2025, category: '玄幻修仙'
    },
    {
        title: '冒姓琅琊', author: '东周公子南', platform: '番茄小说',
        rating: 8.9, views: '全网TOP10', tags: ['历史', '权谋', '穿越'], badge: 'new',
        desc: '2025年度全网最具影响力网络小说TOP10，番茄小说历史类扛鼎之作。穿越到琅琊王氏，在乱世中书写传奇。',
        cover: 'linear-gradient(135deg,#854d0e,#eab308)', coverText: '冒',
        year: 2025, category: '历史权谋'
    },
    {
        title: '泼刀行', author: '张老西', platform: '起点中文网',
        rating: 8.7, views: '武侠新锐', tags: ['武侠', '江湖', '热血'], badge: 'new',
        desc: '中国网络文学双年榜入选作品，新武侠代表作。泼辣的刀法描写与鲜活的江湖人物，让传统武侠焕发新生。',
        cover: 'linear-gradient(135deg,#172554,#3b82f6)', coverText: '泼',
        year: 2025, category: '玄幻修仙'
    },
    {
        title: '这游戏也太真实了', author: '晨星LL', platform: '起点中文网',
        rating: 9.0, views: '高人气', tags: ['游戏', '轻松', '搞笑'], badge: 'hot',
        desc: '中国网络文学双年榜入选作品，游戏异界题材标杆。主角把游戏世界玩成了"第二人生"，笑点密集又不失深度。',
        cover: 'linear-gradient(135deg,#115e59,#2dd4bf)', coverText: '游',
        year: 2024, category: '游戏异界'
    },
];

// ---------- 短剧数据 ----------
const dramas = [
    {
        title: '十八岁太奶奶驾到，重整家族荣耀', actor: '李柯以 等', platform: '抖音/红果',
        rating: 9.5, views: '播放量100亿+', tags: ['家庭', '逆袭', '爽剧'], badge: 'top',
        desc: '2025年度现象级短剧，系列全网播放量破100亿！太奶奶穿越回现代重整家族，笑点泪点齐飞，李柯以凭此剧成为年度播放量冠军。',
        cover: 'linear-gradient(135deg,#7c3aed,#c4b5fd)', coverText: '太',
        year: 2025, category: '都市现实'
    },
    {
        title: '盛夏芬德拉', actor: '郭宇欣 刘萧旭', platform: '红果/抖音',
        rating: 9.3, views: '播放量50亿+', tags: ['甜宠', '青春', '治愈'], badge: 'top',
        desc: '2025年度红果短剧热度TOP3，仅凭单部作品斩获50亿播放量。郭宇欣与刘萧旭的甜蜜演绎，承包了整个夏天的浪漫记忆。',
        cover: 'linear-gradient(135deg,#db2777,#fda4af)', coverText: '盛',
        year: 2025, category: '甜宠言情'
    },
    {
        title: '好一个乖乖女', actor: '柯淳 余茵', platform: '红果/抖音',
        rating: 9.2, views: '播放量50亿+', tags: ['甜宠', '逆袭', '女强'], badge: 'top',
        desc: '2025年度短剧标杆，全网播放量破50亿。乖乖女表面温顺实则内心强大，柯淳余茵CP化学反应满分，抖音话题热度爆表。',
        cover: 'linear-gradient(135deg,#be123c,#fb7185)', coverText: '乖',
        year: 2025, category: '甜宠言情'
    },
    {
        title: '家里家外', actor: '听花岛制作', platform: '红果/抖音',
        rating: 9.4, views: '播放量30亿+', tags: ['家庭', '温情', '烟火'], badge: 'hot',
        desc: '2025年度温情短剧代表，系列播放量破30亿。听花岛出品，聚焦家庭日常中的温暖与感动，"家人在，爱就一直在"。',
        cover: 'linear-gradient(135deg,#ea580c,#fb923c)', coverText: '家',
        year: 2025, category: '都市现实'
    },
    {
        title: '念念有词', actor: '何聪睿 刘念', platform: '红果/抖音',
        rating: 9.1, views: '播放量50亿+', tags: ['甜宠', '都市', '浪漫'], badge: 'hot',
        desc: '2025年度单部播放量破50亿的"单打王"短剧。何聪睿与刘念组成的"百念好何CP"人气爆棚，甜到心里。',
        cover: 'linear-gradient(135deg,#0e7490,#22d3ee)', coverText: '念',
        year: 2025, category: '甜宠言情'
    },
    {
        title: '我在八零年代当后妈', actor: '滕泽文 丞磊', platform: '抖音/小程序',
        rating: 8.8, views: '播放量10亿+', tags: ['年代', '穿越', '爽文'], badge: 'hot',
        desc: '2024年度现象级年代短剧，单日充值破2000万，全网话题播放超10亿。穿越到80年代当后妈，女主爽文设定引发全民热议。',
        cover: 'linear-gradient(135deg,#854d0e,#facc15)', coverText: '八',
        year: 2024, category: '年代穿越'
    },
    {
        title: '夫人她专治不服', actor: '李柯以 等', platform: '红果/抖音',
        rating: 9.0, views: '播放量50亿+', tags: ['女强', '权谋', '爽剧'], badge: 'hot',
        desc: '系列播放量破50亿，听花岛制作。女主强势归来专治各种不服，每集都是高能名场面，被称为"2025最强女主剧"。',
        cover: 'linear-gradient(135deg,#991b1b,#f87171)', coverText: '夫',
        year: 2025, category: '都市现实'
    },
    {
        title: '请君入我怀', actor: '何聪睿 刘念', platform: '红果/抖音',
        rating: 8.9, views: '播放量30亿+', tags: ['甜宠', '古装', '浪漫'], badge: 'new',
        desc: '2025年度红果短剧热力榜上榜作品，播放量破30亿。"最好的关系，是成为彼此最坚实的战友"，古装甜宠天花板。',
        cover: 'linear-gradient(135deg,#4c1d95,#a78bfa)', coverText: '请',
        year: 2025, category: '古装权谋'
    },
    {
        title: '小小球神不好惹', actor: '麦芽制作', platform: '抖音',
        rating: 8.7, views: '热力值9074万', tags: ['体育', '逆袭', '热血'], badge: 'new',
        desc: '2025年度热力值百强剧榜首，热力值近9074万，是年度唯一一部超9000万的微短剧。小球神逆袭之路燃爆全场。',
        cover: 'linear-gradient(135deg,#166534,#4ade80)', coverText: '球',
        year: 2025, category: '都市现实'
    },
    {
        title: '风华鉴', actor: '影帝级演员', platform: '腾讯视频',
        rating: 9.0, views: '评分90.3', tags: ['古装', '权谋', '反转'], badge: 'top',
        desc: '2024-2025高分短剧TOP10，权威评分90.3。影帝级演员主演，"每集一个反转"的权谋线，剧情伏笔拆解播放量超500万。',
        cover: 'linear-gradient(135deg,#1e3a5f,#60a5fa)', coverText: '风',
        year: 2024, category: '古装权谋'
    },
    {
        title: '沉香如梦夜不寒', actor: '高颜值主演', platform: '抖音精选',
        rating: 9.2, views: '评分91.8', tags: ['古装', '爱情', '虐恋'], badge: 'top',
        desc: '2024-2025高分短剧TOP1，权威评分91.8。大制作服化道（单集成本超10万），仙凡相隔的虐心剧情让人欲罢不能。',
        cover: 'linear-gradient(135deg,#4a044e,#e879f9)', coverText: '沉',
        year: 2024, category: '古装权谋'
    },
    {
        title: '觉醒当天，我当上全国状元', actor: '河马制作', platform: '抖音',
        rating: 8.6, views: '播放量16.25亿', tags: ['校园', '逆袭', '爽剧'], badge: 'hot',
        desc: '2025年度抖音端原生百强剧榜首，累计播放量达16.25亿。觉醒后一路开挂当上全国状元，爽感拉满的校园逆袭剧。',
        cover: 'linear-gradient(135deg,#0c4a6e,#38bdf8)', coverText: '觉',
        year: 2025, category: '都市现实'
    },
    {
        title: '偷换人生之真假千金', actor: '剧好看制作', platform: '抖音',
        rating: 8.5, views: '播放量14.44亿', tags: ['甜宠', '都市', '家庭'], badge: 'new',
        desc: '2025Q1抖音平台微短剧播放量TOP2，播放增量9.7亿。真假千金的身份错位引发一系列啼笑皆非的故事。',
        cover: 'linear-gradient(135deg,#9d174d,#f472b6)', coverText: '偷',
        year: 2025, category: '甜宠言情'
    },
    {
        title: '秦总夫人在找你离婚', actor: '剧点制作', platform: '抖音',
        rating: 8.4, views: '播放量13.98亿', tags: ['甜宠', '都市', '霸总'], badge: 'new',
        desc: '2025Q1抖音微短剧播放量TOP3，霸总夫人要离婚？不可能的！高糖预警的都市甜宠短剧，让人欲罢不能。',
        cover: 'linear-gradient(135deg,#7f1d1d,#fca5a5)', coverText: '秦',
        year: 2025, category: '甜宠言情'
    },
    {
        title: '逃出大英博物馆', actor: '煎饼果仔 夏天妹妹', platform: '抖音/B站',
        rating: 9.4, views: '播放量5亿+', tags: ['文化', '短剧', '破圈'], badge: 'top',
        desc: '2023年度现象级短剧，全网播放破5亿。文化输出题材的短剧破圈代表作，中国记者与玉壶化身的故事感动全网。',
        cover: 'linear-gradient(135deg,#365314,#a3e635)', coverText: '逃',
        year: 2023, category: '都市现实'
    },
    {
        title: '荒年全村啃树皮，我有系统满仓肉', actor: '听花岛制作', platform: '红果/抖音',
        rating: 8.7, views: '播放量30亿+', tags: ['年代', '系统', '爽剧'], badge: 'hot',
        desc: '系列播放量破30亿，荒年之中别人啃树皮，主角有系统满仓肉。年代+系统爽文短剧，每集都是高能反转。',
        cover: 'linear-gradient(135deg,#3f2b14,#d97706)', coverText: '荒',
        year: 2025, category: '年代穿越'
    },
    {
        title: '真千金她是学霸', actor: '多位主演', platform: '红果/抖音',
        rating: 8.6, views: '播放量30亿+', tags: ['校园', '逆袭', '学霸'], badge: 'new',
        desc: '2025年度红果短剧上榜作品，播放量破30亿。真千金不是花瓶是学霸，用实力打脸所有看不起她的人。',
        cover: 'linear-gradient(135deg,#1e3a8a,#818cf8)', coverText: '真',
        year: 2025, category: '都市现实'
    },
    {
        title: '天下第一纨绔', actor: '多位主演', platform: '红果/抖音',
        rating: 8.5, views: '播放量30亿+', tags: ['古装', '喜剧', '逆袭'], badge: 'new',
        desc: '2025年度红果短剧上榜作品，播放量破30亿。"表面是纨绔，内心有乾坤"，反差萌男主让人又爱又恨。',
        cover: 'linear-gradient(135deg,#581c87,#d8b4fe)', coverText: '天',
        year: 2025, category: '古装权谋'
    },
    {
        title: '非她不可', actor: '高颜值主演', platform: '抖音精选',
        rating: 8.8, views: '评分88.7', tags: ['现代', '甜宠', '双强'], badge: 'new',
        desc: '2024-2025高分短剧TOP3，权威评分88.7。女总裁×男医生的"势均力敌"爱情，办公室表白名场面播放量破300万。',
        cover: 'linear-gradient(135deg,#0f766e,#5eead4)', coverText: '非',
        year: 2024, category: '甜宠言情'
    },
    {
        title: '招惹', actor: '李沐宸 赵弈钦', platform: '腾讯视频',
        rating: 8.9, views: '单集2亿+', tags: ['民国', '虐恋', '电影级'], badge: 'hot',
        desc: '腾讯视频微短剧标杆，单集播放超2亿。民国虐恋题材，电影级制作水平，军阀少爷与歌女的爱恨纠葛让人泪目。',
        cover: 'linear-gradient(135deg,#4c0519,#fb7185)', coverText: '招',
        year: 2024, category: '古装权谋'
    },
    {
        title: '声色犬马', actor: '多位主演', platform: '抖音精选',
        rating: 8.6, views: '评分82.9', tags: ['现代', '爽剧', '女强'], badge: 'hot',
        desc: '2024爽剧天花板，权威评分82.9。被家暴的家庭主妇逆袭成商业女帝，手撕渣男片段播放量破400万。',
        cover: 'linear-gradient(135deg,#450a0a,#dc2626)', coverText: '声',
        year: 2024, category: '都市现实'
    },
    {
        title: '千金谋', actor: '听花岛制作', platform: '红果/抖音',
        rating: 8.5, views: '播放量20亿+', tags: ['古装', '权谋', '女强'], badge: 'new',
        desc: '听花岛出品，2025年度红果短剧上榜作品。千金小姐的权谋之路，以智谋开路，财富就是底气。',
        cover: 'linear-gradient(135deg,#78350f,#fbbf24)', coverText: '千',
        year: 2025, category: '古装权谋'
    },
    {
        title: '归来的她', actor: '多位主演', platform: '抖音精选',
        rating: 8.5, views: '评分85.5', tags: ['悬疑', '家庭', '真相'], badge: 'new',
        desc: '失踪10年的女儿"归来"，却引发"真假女儿"悬疑线。边看边找线索的沉浸式悬疑体验，让人欲罢不能。',
        cover: 'linear-gradient(135deg,#1c1917,#78716c)', coverText: '归',
        year: 2024, category: '悬疑推理'
    },
    {
        title: '大话大话西游', actor: '经典IP改编', platform: '抖音',
        rating: 8.7, views: '评分87.1', tags: ['奇幻', '喜剧', 'IP改编'], badge: 'new',
        desc: '经典《大话西游》IP创新改编，保留"爱你一万年"内核，新增"时空穿越救紫霞"剧情。至尊宝变程序员笑翻百万用户。',
        cover: 'linear-gradient(135deg,#312e81,#a5b4fc)', coverText: '大',
        year: 2024, category: '游戏异界'
    },
    {
        title: '龙年大吉之衣锦还乡', actor: '张浩 等', platform: '快手',
        rating: 8.3, views: '播放量8亿+', tags: ['乡村', '喜剧', '接地气'], badge: 'new',
        desc: '快手年度热门短剧，单月播放破8亿。农村题材+喜剧元素，接地气剧情吸引下沉市场，返乡青年的励志故事。',
        cover: 'linear-gradient(135deg,#166534,#86efac)', coverText: '龙',
        year: 2024, category: '都市现实'
    },
    {
        title: '无双', actor: '王轩 等', platform: '快手',
        rating: 8.5, views: '播放量30亿+', tags: ['男频', '逆袭', '战神'], badge: 'hot',
        desc: '快手经典付费短剧，总播放超30亿。男频逆袭+战神归来，典型付费短剧模型，爽感十足。',
        cover: 'linear-gradient(135deg,#000000,#374151)', coverText: '无',
        year: 2024, category: '都市现实'
    },
    {
        title: '黑莲花上位手册', actor: '赵晴 等', platform: '多平台',
        rating: 8.4, views: '24h破1200万', tags: ['权谋', '复仇', '宫斗'], badge: 'hot',
        desc: '2024年度争议性短剧，24小时充值破1200万。权谋复仇题材因过于"爽"被下架，却成为现象级话题作品。',
        cover: 'linear-gradient(135deg,#3b0764,#c084fc)', coverText: '黑',
        year: 2024, category: '古装权谋'
    },
    {
        title: '夫妻的春节', actor: '多位主演', platform: '抖音',
        rating: 8.3, views: '播放量5.8亿', tags: ['家庭', '情感', '温馨'], badge: 'new',
        desc: '2025Q1抖音微短剧播放量TOP2，春节档温情之作。夫妻之间的日常琐碎中藏着最真挚的情感。',
        cover: 'linear-gradient(135deg,#be123c,#fb7185)', coverText: '夫',
        year: 2025, category: '都市现实'
    },
    {
        title: '医武双绝', actor: '多位主演', platform: '抖音',
        rating: 8.2, views: '播放量5.2亿', tags: ['都市', '逆袭', '医术'], badge: 'new',
        desc: '2025Q1抖音微短剧播放量TOP3，医武双全的主角在都市中逆袭，中西医结合的设定新颖有趣。',
        cover: 'linear-gradient(135deg,#064e3b,#34d399)', coverText: '医',
        year: 2025, category: '都市现实'
    },
];
