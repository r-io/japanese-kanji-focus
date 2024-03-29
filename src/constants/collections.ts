// {
//   title: 'Katakana',
//   initial: 'カ',
//   color: colors.green,
//   characters: [
//     'ア', 'イ', 'ウ', 'エ', 'オ',
//     'カ', 'キ', 'ク', 'ケ', 'コ',
//     'サ', 'シ', 'ス', 'セ', 'ソ',
//     'タ', 'チ', 'ツ', 'テ', 'ト',
//     'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
//     'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
//     'マ', 'ミ', 'ム', 'メ', 'モ',
//     'ヤ', 'ユ', 'ヨ',
//     'ラ', 'リ', 'ル', 'レ', 'ロ',
//     'ワ', 'ヲ'
//   ]
// },
// {
//   title: 'Hiragana',
//   initial: 'ひ',
//   color: colors.blue,
//   characters: [
//     'あ', 'い', 'う', 'え', 'お',
//     'か', 'き', 'く', 'け', 'こ',
//     'さ', 'し', 'す', 'せ', 'そ',
//     'た', 'ち', 'つ', 'て', 'と',
//     'な', 'に', 'ぬ', 'ね', 'の',
//     'は', 'ひ', 'ふ', 'へ', 'ほ',
//     'ま', 'み', 'む', 'め', 'も',
//     'や', 'ゆ', 'よ',
//     'ら', 'り', 'る', 'れ', 'ろ',
//     'わ', 'を'
//   ]
// },



import { Collection } from '@typings/model/collection';
import { Set } from '@typings/model/sets';
import circleColors from './circleColors';

const part1: Set[] = [
    {
        title: 'Exercise 1',
        initial: 'E1',
        color: circleColors.blue1,
        characters: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    },
    {
        title: 'Exercise 2',
        initial: 'E2',
        color: circleColors.blue2,
        characters: ['百', '千', '万', '円', '口', '目']
    },
    {
        title: 'Exercise 3',
        initial: 'E3',
        color: circleColors.blue3,
        characters: ['日', '月', '火', '水', '木', '金', '土', '曜']
    },
    {
        title: 'Exercise 4',
        initial: 'E4',
        color: circleColors.blue4,
        characters: ['本', '人', '今', '寺', '時', '半', '刀', '分']
    },
    {
        title: 'Exercise 5',
        initial: 'E5',
        color: circleColors.blue5,
        characters: ['上', '下', '中', '外', '右', '工', '左', '前', '後']
    },
    {
        title: 'Exercise 6',
        initial: 'E6',
        color: circleColors.blue6,
        characters: ['午', '門', '間', '東', '西', '南', '北']
    },
    {
        title: 'Exercise 7',
        initial: 'E7',
        color: circleColors.blue7,
        characters: ['田', '力', '男', '女', '子', '学', '生', '先', '何']
    },
    {
        title: 'Exercise 8',
        initial: 'E8',
        color: circleColors.blue8,
        characters: ['父', '母', '年', '去', '毎', '王', '国']
    },
    {
        title: 'Exercise 9',
        initial: 'E9',
        color: circleColors.blue9,
        characters: ['見', '行', '米', '来', '良', '食', '飲', '会']
    },
    {
        title: 'Exercise 10',
        initial: 'E10',
        color: circleColors.blue10,
        characters: ['耳', '聞', '言', '話', '立', '待', '周', '週']
    },
    {
        title: 'Exercise 11',
        initial: 'E11',
        color: circleColors.blue11,
        characters: ['大', '小', '高', '安', '新', '古', '元', '気']
    },
    {
        title: 'Exercise 12',
        initial: 'E12',
        color: circleColors.blue12,
        characters: ['多', '少', '広', '早', '長', '明', '好', '友']
    },
    {
        title: 'Exercise 13',
        initial: 'E13',
        color: circleColors.blue13,
        characters: ['入', '出', '市', '町', '村', '雨', '電', '車']
    },
    {
        title: 'Exercise 14',
        initial: 'E14',
        color: circleColors.blue14,
        characters: ['馬', '駅', '社', '校', '店', '銀', '病', '院']
    },
    {
        title: 'Exercise 15',
        initial: 'E15',
        color: circleColors.blue15,
        characters: ['休', '走', '起', '貝', '買', '売', '読', '書']
    },
    {
        title: 'Exercise 16',
        initial: 'E16',
        color: circleColors.blue16,
        characters: ['帰', '勉', '弓', '虫', '強', '持', '名', '語']
    },
    {
        title: 'Exercise 17',
        initial: 'E17',
        color: circleColors.blue17,
        characters: ['春', '夏', '秋', '冬', '朝', '昼', '夕', '方']
    },
    {
        title: 'Exercise 18',
        initial: 'E18',
        color: circleColors.blue18,
        characters: ['晩', '夜', '心', '手', '足', '体', '首', '道']
    },
    {
        title: 'Exercise 19',
        initial: 'E19',
        color: circleColors.blue19,
        characters: ['山', '川', '林', '森', '空', '海', '化', '花']
    },
    {
        title: 'Exercise 20',
        initial: 'E20',
        color: circleColors.blue20,
        characters: ['天', '赤', '青', '白', '黒', '色', '魚', '犬']
    }
];

const part2: Set[] = [
    {
        title: 'Exercise 21',
        initial: 'E21',
        color: circleColors.green1,
        characters: ['料', '理', '反', '飯', '牛', '豚', '鳥', '肉']
    },
    {
        title: 'Exercise 22',
        initial: 'E22',
        color: circleColors.green2,
        characters: ['茶', '予', '野', '菜', '切', '作', '未', '味']
    },
    {
        title: 'Exercise 23',
        initial: 'E23',
        color: circleColors.green3,
        characters: ['音', '楽', '歌', '自', '転', '乗', '写', '真']
    },
    {
        title: 'Exercise 24',
        initial: 'E24',
        color: circleColors.green4,
        characters: ['台', '央', '映', '画', '羊', '洋', '服', '着']
    },
    {
        title: 'Exercise 25',
        initial: 'E25',
        color: circleColors.green5,
        characters: ['家', '矢', '族', '親', '兄', '姉', '弟', '妹']
    },
    {
        title: 'Exercise 26',
        initial: 'E26',
        color: circleColors.green6,
        characters: ['私', '夫', '妻', '主', '住', '糸', '氏', '紙']
    },
    {
        title: 'Exercise 27',
        initial: 'E27',
        color: circleColors.green7,
        characters: ['教', '室', '羽', '習', '漢', '字', '式', '試', '験']
    },
    {
        title: 'Exercise 28',
        initial: 'E28',
        color: circleColors.green8,
        characters: ['宿', '題', '文', '英', '質', '問', '説']
    },
    {
        title: 'Exercise 29',
        initial: 'E29',
        color: circleColors.green9,
        characters: ['遠', '近', '者', '暑', '寒', '重', '軽', '低']
    },
    {
        title: 'Exercise 30',
        initial: 'E30',
        color: circleColors.green10,
        characters: ['弱', '悪', '暗', '太', '豆', '短', '光', '風']
    },
    {
        title: 'Exercise 31',
        initial: 'E31',
        color: circleColors.green11,
        characters: ['運', '動', '止', '歩', '使', '送', '洗', '急']
    },
    {
        title: 'Exercise 32',
        initial: 'E32',
        color: circleColors.green12,
        characters: ['開', '閉', '押', '引', '思', '知', '考', '死']
    },
    {
        title: 'Exercise 33',
        initial: 'E33',
        color: circleColors.green13,
        characters: ['医', '始', '終', '石', '研', '究', '留', '有']
    },
    {
        title: 'Exercise 34',
        initial: 'E34',
        color: circleColors.green14,
        characters: ['産', '業', '薬', '働', '員', '士', '仕', '事']
    },
    {
        title: 'Exercise 35',
        initial: 'E35',
        color: circleColors.green15,
        characters: ['図', '官', '館', '昔', '借', '代', '貸', '地']
    },
    {
        title: 'Exercise 36',
        initial: 'E36',
        color: circleColors.green16,
        characters: ['世', '界', '度', '回', '用', '民', '注', '意']
    },
    {
        title: 'Exercise 37',
        initial: 'E37',
        color: circleColors.green17,
        characters: ['頭', '顔', '声', '特', '別', '竹', '合', '答']
    },
    {
        title: 'Exercise 38',
        initial: 'E38',
        color: circleColors.green18,
        characters: ['正', '同', '計', '京', '集', '不', '便', '以']
    },
    {
        title: 'Exercise 39',
        initial: 'E39',
        color: circleColors.green19,
        characters: ['場', '戸', '所', '屋', '堂', '都', '県', '区']
    },
    {
        title: 'Exercise 40',
        initial: 'E40',
        color: circleColors.green20,
        characters: ['池', '発', '建', '物', '品', '旅', '通', '進']
    }
];

const part3: Set[] = [
    {
        title: 'Exercise 41',
        initial: 'E41',
        color: circleColors.yellow1,
        characters: ['丸', '熱', '冷', '甘', '汚', '果', '卵', '皿']
    },
    {
        title: 'Exercise 42',
        initial: 'E42',
        color: circleColors.yellow2,
        characters: ['酒', '塩', '付', '片', '焼', '消', '固', '個']
    },
    {
        title: 'Exercise 43',
        initial: 'E43',
        color: circleColors.yellow3,
        characters: ['笑', '泣', '怒', '幸', '悲', '苦', '痛', '恥']
    },
    {
        title: 'Exercise 44',
        initial: 'E44',
        color: circleColors.yellow4,
        characters: ['配', '困', '辛', '眠', '残', '念', '感', '情']
    },
    {
        title: 'Exercise 45',
        initial: 'E45',
        color: circleColors.yellow5,
        characters: ['覚', '忘', '決', '定', '比', '受', '授', '徒']
    },
    {
        title: 'Exercise 46',
        initial: 'E46',
        color: circleColors.yellow6,
        characters: ['練', '復', '表', '卒', '違', '役', '皆', '彼']
    },
    {
        title: 'Exercise 47',
        initial: 'E47',
        color: circleColors.yellow7,
        characters: ['全', '部', '必', '要', '荷', '由', '届', '利']
    },
    {
        title: 'Exercise 48',
        initial: 'E48',
        color: circleColors.yellow8,
        characters: ['払', '濯', '寝', '踊', '活', '末', '宅', '祭']
    },
    {
        title: 'Exercise 49',
        initial: 'E49',
        color: circleColors.yellow9,
        characters: ['平', '和', '戦', '争', '政', '治', '経', '済']
    },
    {
        title: 'Exercise 50',
        initial: 'E50',
        color: circleColors.yellow10,
        characters: ['法', '律', '際', '関', '係', '義', '議', '党']
    },
    {
        title: 'Exercise 51',
        initial: 'E51',
        color: circleColors.yellow11,
        characters: ['遊', '泳', '疲', '暖', '涼', '静', '公', '園']
    },
    {
        title: 'Exercise 52',
        initial: 'E52',
        color: circleColors.yellow12,
        characters: ['込', '連', '窓', '側', '葉', '景', '記', '形']
    },
    {
        title: 'Exercise 53',
        initial: 'E53',
        color: circleColors.yellow13,
        characters: ['吉', '結', '婚', '共', '供', '両', '若', '老']
    },
    {
        title: 'Exercise 54',
        initial: 'E54',
        color: circleColors.yellow14,
        characters: ['息', '娘', '奥', '将', '祖', '育', '性', '招']
    },
    {
        title: 'Exercise 55',
        initial: 'E55',
        color: circleColors.yellow15,
        characters: ['取', '最', '初', '番', '歳', '枚', '冊', '億']
    },
    {
        title: 'Exercise 56',
        initial: 'E56',
        color: circleColors.yellow16,
        characters: ['点', '階', '段', '号', '倍', '次', '々', '他']
    },
    {
        title: 'Exercise 57',
        initial: 'E57',
        color: circleColors.yellow17,
        characters: ['勝', '負', '賛', '成', '絶', '対', '続', '辞']
    },
    {
        title: 'Exercise 58',
        initial: 'E58',
        color: circleColors.yellow18,
        characters: ['投', '選', '約', '束', '守', '過', '夢', '的']
    },
    {
        title: 'Exercise 59',
        initial: 'E59',
        color: circleColors.yellow19,
        characters: ['飛', '機', '失', '鉄', '速', '遅', '駐', '泊']
    },
    {
        title: 'Exercise 60',
        initial: 'E60',
        color: circleColors.yellow20,
        characters: ['船', '座', '席', '島', '陸', '港', '橋', '交']
    },
    {
        title: 'Exercise 61',
        initial: 'E61',
        color: circleColors.yellow21,
        characters: ['申', '神', '様', '信', '調', '査', '相', '談']
    },
    {
        title: 'Exercise 62',
        initial: 'E62',
        color: circleColors.yellow22,
        characters: ['案', '内', '君', '達', '星', '雪', '降', '直']
    },
    {
        title: 'Exercise 63',
        initial: 'E63',
        color: circleColors.yellow23,
        characters: ['危', '険', '拾', '捨', '戻', '吸', '放', '変']
    },
    {
        title: 'Exercise 64',
        initial: 'E64',
        color: circleColors.yellow24,
        characters: ['歯', '髪', '絵', '横', '当', '伝', '細', '無']
    }
];

const part4: Set[] = [
    {
        title: 'Exercise 65',
        initial: 'E65',
        color: circleColors.purple1,
        characters: ['数', '原', '期', '現', '指', '加', '制', '向']
    },
    {
        title: 'Exercise 66',
        initial: 'E66',
        color: circleColors.purple2,
        characters: ['務', '面', '得', '打', '告', '支', '参', '報'],
    },
    {
        title: 'Exercise 67',
        initial: 'E67',
        color: circleColors.purple3,
        characters: ['角', '解', '求', '球', '流', '局', '資', '昨'],
    },
    {
        title: 'Exercise 68',
        initial: 'E68',
        color: circleColors.purple4,
        characters: ['権', '判', '在', '件', '任', '位', '置', '想'],
    },
    {
        title: 'Exercise 69',
        initial: 'E69',
        color: circleColors.purple5,
        characters: ['増', '示', '認', '助', '追', '商', '落', '確'],
    },
    {
        title: 'Exercise 70',
        initial: 'E70',
        color: circleColors.purple6,
        characters: ['費', '容', '演', '論', '能', '美', '命', '裏'],
    },
    {
        title: 'Exercise 71',
        initial: 'E71',
        color: circleColors.purple7,
        characters: ['福', '格', '害', '深', '常', '状', '職', '構'],
    },
    {
        title: 'Exercise 72',
        initial: 'E72',
        color: circleColors.purple8,
        characters: ['令', '路', '労', '例', '然', '客', '断', '疑'],
    },
    {
        title: 'Exercise 73',
        initial: 'E73',
        color: circleColors.purple9,
        characters: ['登', '規', '術', '備', '差', '種', '望', '具'],
    },
    {
        title: 'Exercise 74',
        initial: 'E74',
        color: circleColors.purple10,
        characters: ['観', '察', '割', '難', '優', '収', '限', '候'],
    },
    {
        title: 'Exercise 75',
        initial: 'E75',
        color: circleColors.purple11,
        characters: ['晴', '返', '満', '敗', '退', '積', '警', '訪'],
    },
    {
        title: 'Exercise 76',
        initial: 'E76',
        color: circleColors.purple12,
        characters: ['殺', '単', '非', '完', '等', '曲', '庭', '給'],
    },
    {
        title: 'Exercise 77',
        initial: 'E77',
        color: circleColors.purple13,
        characters: ['与', '財', '識', '鳴', '愛', '程', '類', '列'],
    },
    {
        title: 'Exercise 78',
        initial: 'E78',
        color: circleColors.purple14,
        characters: ['師', '易', '破', '呼', '責', '才', '努', '散'],
    },
    {
        title: 'Exercise 79',
        initial: 'E79',
        color: circleColors.purple15,
        characters: ['喜', '値', '因', '陽', '富', '処', '適', '婦'],
    },
    {
        title: 'Exercise 80',
        initial: 'E80',
        color: circleColors.purple16,
        characters: ['寄', '否', '余', '欠', '存', '礼', '除', '渡'],
    },
    {
        title: 'Exercise 81',
        initial: 'E81',
        color: circleColors.purple17,
        characters: ['願', '許', '罪', '精', '折', '亡', '箱', '掛'],
    },
    {
        title: 'Exercise 82',
        initial: 'E82',
        color: circleColors.purple18,
        characters: ['掛', '突', '背', '居', '雑', '犯', '似', '迷'],
    },
    {
        title: 'Exercise 83',
        initial: 'E83',
        color: circleColors.purple19,
        characters: ['捕', '勤', '迎', '刻', '舞', '欲', '探', '頼'],
    },
    {
        title: 'Exercise 84',
        initial: 'E84',
        color: circleColors.purple20,
        characters: ['途', '抜', '暮', '慣', '貧', '浮', '倒', '更'],
    },
    {
        title: 'Exercise 85',
        initial: 'E85',
        color: circleColors.purple21,
        characters: ['誤', '幾', '抱', '恐', '越', '互', '逃', '緒'],
    },
    {
        title: 'Exercise 86',
        initial: 'E86',
        color: circleColors.purple22,
        characters: ['腹', '頂', '到', '盗', '御', '吹', '杯', '煙'],
    },
    {
        title: 'Exercise 87',
        initial: 'E87',
        color: circleColors.purple23,
        characters: ['怖', '忙', '靴', '偶', '偉', '猫', '帯', '玉'],
    },
    {
        title: 'Exercise 88',
        initial: 'E88',
        color: circleColors.purple24,
        characters: ['谷', '材', '毛', '雲', '黄', '油', '血', '温'],
    }
];

const collections: Collection[] = [
    {
        index: 1,
        title: 'Part 1',
        sets: part1
    },
    {
        index: 2,
        title: 'Part 2',
        sets: part2
    },
    {
        index: 3,
        title: 'Part 3',
        sets: part3
    },
    {
        index: 4,
        title: 'Part 4',
        sets: part4
    }
];

export default collections;