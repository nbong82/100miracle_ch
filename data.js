/**
 * 중국어회화 100일의 기적 학습 데이터베이스
 * 100강까지 확장 시 아래 lessons 배열에 Day 객체를 추가하기만 하면 됩니다.
 */
const courseData = {
  courseTitle: "중국어회화 100일의 기적",
  youtubeVideoId: "uHyupL7Tw0c", // 1강~10강 연속재생 기준
  lessons: [
    {
      day: 1,
      title: "认识你很高兴 (만나서 반갑습니다)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "认识你很高兴。你是中国人吗？",
          pinyin: "Rènshi nǐ hěn gāoxìng. Nǐ shì Zhōngguórén ma?",
          kr: "만나서 반갑습니다. 당신은 중국인입니까?",
          note: "认识(rènshi): 알다, 인식하다 / 高兴(gāoxìng): 기쁘다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我不是中国人。我是韩国人。",
          pinyin: "Wǒ bú shì Zhōngguórén. Wǒ shì Hánguórén.",
          kr: "저는 중국인이 아닙니다. 저는 한국인입니다.",
          note: "不是(bú shì): ~이 아니다 / 韩国人(Hánguórén): 한국인"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你是学生吗？",
          pinyin: "Nǐ shì xuésheng ma?",
          kr: "당신은 학생입니까?",
          note: "学生(xuésheng): 학생 / 吗(ma): 의문 어기조사"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我是学生。",
          pinyin: "Wǒ shì xuésheng.",
          kr: "저는 학생입니다.",
          note: "我是~: 저는 ~입니다"
        }
      ]
    },
    {
      day: 2,
      title: "你叫什么名字？ (이름이 뭐예요?)",
      youtubeTime: "05:28",
      seconds: 328,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你叫什么名字？",
          pinyin: "Nǐ jiào shénme míngzi?",
          kr: "이름이 무엇입니까?",
          note: "叫(jiào): ~라고 부르다 / 什么(shénme): 무엇 / 名字(míngzi): 이름"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我叫秀炫。",
          pinyin: "Wǒ jiào Xiùxuàn.",
          kr: "저는 수현이라고 합니다.",
          note: "我叫 + 이름: 내 이름은 ~입니다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "您贵姓？",
          pinyin: "Nín guì xìng?",
          kr: "성이 어떻게 되십니까?",
          note: "您(nín): 당신(존칭) / 贵姓(guìxìng): 존함, 성씨"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我姓金。",
          pinyin: "Wǒ xìng Jīn.",
          kr: "제 성은 김씨입니다.",
          note: "姓(xìng): 성이 ~이다"
        }
      ]
    },
    {
      day: 3,
      title: "我们吃什么？ (우리 뭐 먹을까?)",
      youtubeTime: "10:52",
      seconds: 652,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "我们吃什么？我很饿。",
          pinyin: "Wǒmen chī shénme? Wǒ hěn è.",
          kr: "우리 뭐 먹을까요? 저 배가 많이 고파요.",
          note: "吃(chī): 먹다 / 饿(è): 배고프다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我们吃面包，怎么样？",
          pinyin: "Wǒmen chī miànbāo, zěnmeyàng?",
          kr: "우리 빵 먹는 거 어때요?",
          note: "面包(miànbāo): 빵 / 怎么样(zěnmeyàng): 어때?"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "好的。我喜欢面包。",
          pinyin: "Hǎode. Wǒ xǐhuan miànbāo.",
          kr: "좋아요. 저 빵 좋아해요.",
          note: "喜欢(xǐhuan): 좋아하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我也是。",
          pinyin: "Wǒ yě shì.",
          kr: "저도 그래요.",
          note: "也(yě): 도 / 我也是: 나도 마찬가지야"
        }
      ]
    },
    {
      day: 4,
      title: "你看什么？ (너 뭐 보니?)",
      youtubeTime: "16:15",
      seconds: 975,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你看什么？",
          pinyin: "Nǐ kàn shénme?",
          kr: "너 뭐 보고 있어?",
          note: "看(kàn): 보다, 읽다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我看汉语书。我学汉语。",
          pinyin: "Wǒ kàn Hànyǔ shū. Wǒ xué Hànyǔ.",
          kr: "중국어 책 봐. 나 중국어 공부해.",
          note: "汉语(Hànyǔ): 중국어 / 书(shū): 책 / 学(xué): 배우다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "汉语难吗？",
          pinyin: "Hànyǔ nán ma?",
          kr: "중국어 어렵니?",
          note: "难(nán): 어렵다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "汉语不难。",
          pinyin: "Hànyǔ bù nán.",
          kr: "중국어 안 어려워.",
          note: "不(bù): 부정 부사"
        }
      ]
    },
    {
      day: 5,
      title: "你来不来我家？ (너 우리 집에 올래 안 올래?)",
      youtubeTime: "21:40",
      seconds: 1300,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你来不来我家？",
          pinyin: "Nǐ láibulái wǒ jiā?*  ",
          kr: "너 우리 집에 올래 안 올래?",
          note: "来不来(láibulái): 올래 말래 (정반의문문) / 家(jiā): 집"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "今天很忙。不去。",
          pinyin: "Jīntiān hěn máng. Bú qù.",
          kr: "오늘 너무 바빠. 안 가.",
          note: "今天(jīntiān): 오늘 / 忙(máng): 바쁘다 / 去(qù): 가다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "很可惜。",
          pinyin: "Hěn kěxī.",
          kr: "아쉽다.",
          note: "可惜(kěxī): 아깝다, 아쉽다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "不好意思。",
          pinyin: "Bùhǎoyìsi.",
          kr: "미안해.",
          note: "不好意思: 미안합니다, 쑥스럽습니다"
        }
      ]
    },
    {
      day: 6,
      title: "你做什么工作？ (무슨 일 하세요?)",
      youtubeTime: "27:00",
      seconds: 1620,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你做什么工作？",
          pinyin: "Nǐ zuò shénme gōngzuò?",
          kr: "당신은 무슨 일을 하시나요?",
          note: "做(zuò): 하다 / 工作(gōngzuò): 일, 직업"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我是补习班老师。",
          pinyin: "Wǒ shì bǔxíbān lǎoshī.",
          kr: "저는 학원 강사입니다.",
          note: "补习班(bǔxíbān): 학원 / 老师(lǎoshī): 선생님"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你教什么？",
          pinyin: "Nǐ jiāo shénme?",
          kr: "무엇을 가르치시나요?",
          note: "教(jiāo): 가르치다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我教汉语。",
          pinyin: "Wǒ jiāo Hànyǔ.",
          kr: "저는 중국어를 가르칩니다.",
          note: "教汉语: 중국어를 가르치다"
        }
      ]
    },
    {
      day: 7,
      title: "爸爸在哪儿？ (아빠 어디 계셔?)",
      youtubeTime: "32:30",
      seconds: 1950,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "爸爸在哪儿？",
          pinyin: "Bàba zài nǎr?",
          kr: "아빠 어디 계시니?",
          note: "在(zài): ~에 있다 / 哪儿(nǎr): 어디"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "爸爸在洗手间。",
          pinyin: "Bàba zài xǐshǒujiān.",
          kr: "아빠 화장실에 계셔요.",
          note: "洗手间(xǐshǒujiān): 화장실"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "我的手机在哪儿？",
          pinyin: "Wǒ de shǒujī zài nǎr?",
          kr: "내 휴대전화 어디 있지?",
          note: "手机(shǒujī): 휴대폰 / 的(de): ~의"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我不知道。",
          pinyin: "Wǒ bù zhīdào.",
          kr: "저도 모르겠어요.",
          note: "知道(zhīdào): 알다 / 不知道: 모른다"
        }
      ]
    },
    {
      day: 8,
      title: "你喝咖啡吗？ (너 커피 마실래?)",
      youtubeTime: "38:00",
      seconds: 2280,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你喝咖啡吗？",
          pinyin: "Nǐ hē kāfēi ma?",
          kr: "너 커피 마실래?",
          note: "喝(hē): 마시다 / 咖啡(kāfēi): 커피"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "不，谢谢。",
          pinyin: "Bù, xièxie.",
          kr: "아니, 됐어 고마워.",
          note: "谢谢(xièxie): 감사합니다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "为什么不喝呢？",
          pinyin: "Wèishénme bù hē ne?",
          kr: "왜 안 마시는데?",
          note: "为什么(wèishénme): 왜 / 呢(ne): 어기조사"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我不喜欢咖啡。",
          pinyin: "Wǒ bù xǐhuan kāfēi.",
          kr: "나 커피 안 좋아해.",
          note: "不喜欢: 좋아하지 않다"
        }
      ]
    },
    {
      day: 9,
      title: "她是谁？ (그녀는 누구야?)",
      youtubeTime: "43:30",
      seconds: 2610,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "她是谁？",
          pinyin: "Tā shì shéi?",
          kr: "저 사람 누구야?",
          note: "她(tā): 그녀 / 谁(shéi/shuí): 누구"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "她是我的妹妹。",
          pinyin: "Tā shì wǒ de mèimei.",
          kr: "내 여동생이야.",
          note: "妹妹(mèimei): 여동생"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "她很漂亮。她有没有男朋友？",
          pinyin: "Tā hěn piàoliang. Tā yǒuméiyǒu nánpéngyou?",
          kr: "정말 예쁘다. 남자친구 있어, 없어?",
          note: "漂亮(piàoliang): 예쁘다 / 有没有: 있냐 없냐 / 男朋友: 남자친구"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "她有男朋友。",
          pinyin: "Tā yǒu nánpéngyou.",
          kr: "남자친구 있어.",
          note: "有(yǒu): 있다"
        }
      ]
    },
    {
      day: 10,
      title: "这是谁啊？好久不见。 (이게 누구야? 오랜만이다.)",
      youtubeTime: "49:00",
      seconds: 2940,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这是谁啊？好久不见。",
          pinyin: "Zhè shì shéi a? Hǎojiǔbújiàn.",
          kr: "이게 누구야? 진짜 오랜만이다.",
          note: "这是谁啊: 이게 누구야 / 好久不见: 오랜만이다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好久不见。你过得怎么样？",
          pinyin: "Hǎojiǔbújiàn. Nǐ guò de zěnmeyàng?",
          kr: "오랜만이야. 그동안 어떻게 지냈어?",
          note: "过得怎么样: 어떻게 지내니?"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "过得很好，你呢？",
          pinyin: "Guò de hěn hǎo, nǐ ne?",
          kr: "잘 지냈지, 너는?",
          note: "很好: 매우 좋다 / 你呢: 너는?"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我也很好。谢谢你。",
          pinyin: "Wǒ yě hěn hǎo. Xièxie nǐ.",
          kr: "나도 아주 잘 지내. 물어봐 줘서 고마워.",
          note: "我也很好: 나도 잘 지내"
        }
      ]
    },
    {
      day: 11,
      title: "你几岁了？ (몇 살이에요?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你今年多大？",
          pinyin: "Nǐ jīnnián duō dà?",
          kr: "너 올해 몇 살이니?",
          note: "今年(jīnnián): 올해 / 多大(duō dà): 나이가 어떻게 되는가"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我今年二十五岁。",
          pinyin: "Wǒ jīnnián èrshíwǔ suì.",
          kr: "나 올해 스물다섯 살이야.",
          note: "岁(suì): 세, 살"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你属什么？",
          pinyin: "Nǐ shǔ shénme?",
          kr: "무슨 띠야?",
          note: "属(shǔ): ~띠에 속하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我属狗。你呢？",
          pinyin: "Wǒ shǔ gǒu. Nǐ ne?",
          kr: "나 개띠야. 너는?",
          note: "狗(gǒu): 개 / 你呢(nǐ ne): 너는?"
        }
      ]
    },
    {
      day: 12,
      title: "今天是几月几号？ (오늘 며칠이에요?)",
      youtubeTime: "06:40",
      seconds: 400,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "今天是几月几号？",
          pinyin: "Jīntiān shì jǐ yuè jǐ hào?",
          kr: "오늘 며칠이에요?",
          note: "几(jǐ): 몇 / 月(yuè): 월 / 号(hào): 일, 날짜"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "今天是三月八号。",
          pinyin: "Jīntiān shì sān yuè bā hào.",
          kr: "오늘은 3월 8일이에요.",
          note: "날짜 표현: 숫자 + 月 + 숫자 + 号"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "今天星期几？",
          pinyin: "Jīntiān xīngqījǐ?",
          kr: "오늘 무슨 요일이에요?",
          note: "星期(xīngqī): 요일"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "今天星期五。",
          pinyin: "Jīntiān xīngqīwǔ.",
          kr: "오늘 금요일이에요.",
          note: "星期五(xīngqīwǔ): 금요일 (월: 星期一 ~ 토: 星期六, 일: 星期天/日)"
        }
      ]
    },
    {
      day: 13,
      title: "现在几点？ (지금 몇 시예요?)",
      youtubeTime: "13:20",
      seconds: 800,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "请问，现在几点？",
          pinyin: "Qǐngwèn, xiànzài jǐ diǎn?",
          kr: "말씀 좀 묻겠습니다, 지금 몇 시예요?",
          note: "请问(qǐngwèn): 말씀 좀 여쭙겠습니다 / 点(diǎn): 시"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "现在差五分两点。",
          pinyin: "Xiànzài chà wǔ fēn liǎng diǎn.",
          kr: "지금 2시 5분 전이에요.",
          note: "差(chà): 모자라다, 부족하다 / 分(fēn): 분"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "电影几点开始？",
          pinyin: "Diànyǐng jǐ diǎn kāishǐ?",
          kr: "영화는 몇 시에 시작하나요?",
          note: "电影(diànyǐng): 영화 / 开始(kāishǐ): 시작하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "两点一刻开始。",
          pinyin: "Liǎng diǎn yí kè kāishǐ.",
          kr: "2시 15분에 시작해요.",
          note: "一刻(yí kè): 15분 (1각)"
        }
      ]
    },
    {
      day: 14,
      title: "这个多少钱？ (이거 얼마예요?)",
      youtubeTime: "20:00",
      seconds: 1200,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "老板，这个多少钱？",
          pinyin: "Lǎobǎn, zhèige duōshao qián?",
          kr: "사장님, 이거 얼마예요?",
          note: "老板(lǎobǎn): 사장님 / 多少钱(duōshao qián): 얼마"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "一百块。",
          pinyin: "Yìbǎi kuài.",
          kr: "100위안입니다.",
          note: "块(kuài): 위안(화폐 단위, 구어)"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "太贵了！便宜一点儿吧。",
          pinyin: "Tài guì le! Piányi yìdiǎnr ba.",
          kr: "너무 비싸요! 좀 깎아주세요.",
          note: "太~了: 너무 ~하다 / 贵(guì): 비싸다 / 便宜(piányi): 싸다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "八十块，怎么样？",
          pinyin: "Bāshí kuài, zěnmeyàng?",
          kr: "80위안, 어떠세요?",
          note: "怎么样(zěnmeyàng): 어때요?"
        }
      ]
    },
    {
      day: 15,
      title: "你家有几口人？ (가족이 몇 명이에요?)",
      youtubeTime: "26:50",
      seconds: 1610,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你家有几口人？",
          pinyin: "Nǐ jiā yǒu jǐ kǒu rén?",
          kr: "가족이 몇 명이에요?",
          note: "口(kǒu): 식구를 세는 양사"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我家有四口人。",
          pinyin: "Wǒ jiā yǒu sì kǒu rén.",
          kr: "우리 집은 네 식구예요.",
          note: "四口人: 4명의 가족"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "都有谁？",
          pinyin: "Dōu yǒu shéi?",
          kr: "누구누구 있는데요?",
          note: "都有(dōu yǒu): 모두 ~가 있다 / 谁(shéi): 누구"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "爸爸、妈妈、一个哥哥和我。",
          pinyin: "Bàba, māma, yí gè gēge hé wǒ.",
          kr: "아버지, 어머니, 형 하나와 저예요.",
          note: "哥哥(gēge): 형, 오빠 / 和(hé): 와/과"
        }
      ]
    },
    {
      day: 16,
      title: "你去哪儿？ (어디 가세요?)",
      youtubeTime: "33:40",
      seconds: 2020,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你去哪儿？",
          pinyin: "Nǐ qù nǎr?",
          kr: "어디 가니?",
          note: "去(qù): 가다 / 哪儿(nǎr): 어디"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我去超市买东西。",
          pinyin: "Wǒ qù chāoshì mǎi dōngxi.",
          kr: "마트에 물건 사러 가.",
          note: "超市(chāoshì): 슈퍼마켓 / 买(mǎi): 사다 / 东西(dōngxi): 물건"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你怎么去？",
          pinyin: "Nǐ zěnme qù?",
          kr: "어떻게 가니?",
          note: "怎么(zěnme): 어떻게 (교통수단/방법 질문)"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我坐地铁去。",
          pinyin: "Wǒ zuò dìtiě qù.",
          kr: "지하철 타고 가.",
          note: "坐(zuò): 타다 / 地铁(dìtiě): 지하철"
        }
      ]
    },
    {
      day: 17,
      title: "你在做什么？ (너 지금 뭐 하고 있어?)",
      youtubeTime: "40:20",
      seconds: 2420,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "喂，你在做什么呢？",
          pinyin: "Wèi, nǐ zài zuò shénme ne?",
          kr: "여보세요, 너 지금 뭐 하고 있어?",
          note: "喂(wèi): 여보세요 / 在~呢: ~하고 있는 중이다 (진행)"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我在听音乐呢。",
          pinyin: "Wǒ zài tīng yīnyuè ne.",
          kr: "나 음악 듣고 있어.",
          note: "听(tīng): 듣다 / 音乐(yīnyuè): 음악"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "晚上有空儿吗？",
          pinyin: "Wǎnshang yǒu kòngr ma?",
          kr: "저녁에 시간 있니?",
          note: "晚上(wǎnshang): 저녁 / 有空儿(yǒu kòngr): 짬이 나다, 시간이 있다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "有，有什么事吗？",
          pinyin: "Yǒu, yǒu shénme shì ma?",
          kr: "있어, 무슨 일인데?",
          note: "事(shì): 일, 용건"
        }
      ]
    },
    {
      day: 18,
      title: "今天天气怎么样？ (오늘 날씨 어때요?)",
      youtubeTime: "47:10",
      seconds: 2830,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "今天天气怎么样？",
          pinyin: "Jīntiān tiānqì zěnmeyàng?",
          kr: "오늘 날씨 어때요?",
          note: "天气(tiānqì): 날씨"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "今天天气很好，不冷也不热。",
          pinyin: "Jīntiān tiānqì hěn hǎo, bù lěng yě bú rè.",
          kr: "오늘 날씨 아주 좋아요, 춥지도 덥지도 않아요.",
          note: "冷(lěng): 춥다 / 热(rè): 덥다 / 不~也不...: ~하지도 않고 ...하지도 않다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "明天会下雨吗？",
          pinyin: "Míngtiān huì xiàyǔ ma?",
          kr: "내일 비가 올까요?",
          note: "会(huì): ~할 것이다(가능성) / 下雨(xiàyǔ): 비가 내리다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "听说不会下雨，是个晴天。",
          pinyin: "Tīngshuō bú huì xiàyǔ, shì gè qíngtiān.",
          kr: "듣자 하니 비 안 오고 맑은 날이래요.",
          note: "听说(tīngshuō): 듣자 하니 / 晴天(qíngtiān): 맑은 날"
        }
      ]
    },
    {
      day: 19,
      title: "你会说汉语吗？ (중국어 할 줄 아세요?)",
      youtubeTime: "54:00",
      seconds: 3240,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你会说汉语吗？",
          pinyin: "Nǐ huì shuō Hànyǔ ma?",
          kr: "중국어 할 줄 아세요?",
          note: "会(huì): 배워서 할 줄 알다 / 说(shuō): 말하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我会说一点儿。",
          pinyin: "Wǒ huì shuō yìdiǎnr.",
          kr: "조금 할 줄 압니다.",
          note: "一点儿(yìdiǎnr): 조금, 약간"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你说得很流利！",
          pinyin: "Nǐ shuō de hěn liúlì!",
          kr: "말씀을 아주 유창하게 하시네요!",
          note: "得(de): 상태보어 구조조사 / 流利(liúlì): 유창하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "哪里哪里，还差得远呢。",
          pinyin: "Nǎli nǎli, hái chà de yuǎn ne.",
          kr: "천만에요, 아직 한참 멀었습니다.",
          note: "哪里哪里: 겸손의 표현(천만에요) / 差得远: 차이가 멀다, 부족하다"
        }
      ]
    },
    {
      day: 20,
      title: "你身体怎么样？ (건강은 좀 어떠세요?)",
      youtubeTime: "1:01:00",
      seconds: 3660,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你的感冒好点儿了吗？",
          pinyin: "Nǐ de gǎnmào hǎo diǎnr le ma?",
          kr: "감기는 좀 나았니?",
          note: "感冒(gǎnmào): 감기 / 好(hǎo): 낫다 / ~点儿: 좀"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好多了，谢谢你的关心。",
          pinyin: "Hǎo duō le, xièxie nǐ de guānxīn.",
          kr: "많이 좋아졌어, 신경 써줘서 고마워.",
          note: "好多了: 훨씬 나아졌다 / 关心(guānxīn): 관심, 배려"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "多喝水，多休息。",
          pinyin: "Duō hē shuǐ, duō xiūxi.",
          kr: "물 많이 마시고, 푹 쉬어.",
          note: "多(duō): 많이 / 喝水(hē shuǐ): 물을 마시다 / 休息(xiūxi): 쉬다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，我会的。",
          pinyin: "Hǎode, wǒ huì de.",
          kr: "응, 그럴게.",
          note: "我会的: 그렇게 할게요"
        }
      ]
    },
    {
      day: 21,
      title: "你喜欢什么颜色的衣服？ (어떤 색깔 옷 좋아해?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你喜欢什么颜色的衣服？",
          pinyin: "Nǐ xǐhuan shénme yánsè de yīfu?",
          kr: "너는 어떤 색깔의 옷을 좋아하니?",
          note: "颜色(yánsè): 색깔 / 衣服(yīfu): 옷"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我喜欢黑色的和白色的。",
          pinyin: "Wǒ xǐhuan hēisè de hé báisè de.",
          kr: "나는 검은색이랑 흰색을 좋아해.",
          note: "黑色(hēisè): 검은색 / 白色(báisè): 흰색"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这件红色的怎么样？",
          pinyin: "Zhè jiàn hóngsè de zěnmeyàng?",
          kr: "이 빨간색 옷은 어때?",
          note: "件(jiàn): 옷을 세는 양사 / 红色(hóngsè): 빨간색"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "很漂亮，也很适合你。",
          pinyin: "Hěn piàoliang, yě hěn shìhé nǐ.",
          kr: "아주 예쁘다, 너한테도 잘 어울려.",
          note: "漂亮(piàoliang): 예쁘다 / 适合(shìhé): 어울리다"
        }
      ]
    },
    {
      day: 22,
      title: "你有时间吗？ (시간 좀 있어?)",
      youtubeTime: "06:15",
      seconds: 375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你现在有时间吗？",
          pinyin: "Nǐ xiànzài yǒu shíjiān ma?",
          kr: "너 지금 시간 좀 있어?",
          note: "时间(shíjiān): 시간"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "有一点儿，有什么事吗？",
          pinyin: "Yǒu yìdiǎnr, yǒu shénme shì ma?",
          kr: "조금 있는데, 무슨 일 있어?",
          note: "有一点儿: 조금 있다 / 事(shì): 일, 용건"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "我想请你喝咖啡。",
          pinyin: "Wǒ xiǎng qǐng nǐ hē kāfēi.",
          kr: "너한테 커피 한잔 사주고 싶어서.",
          note: "请(qǐng): 대접하다, 사다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "太好了，我们走吧。",
          pinyin: "Tài hǎo le, wǒmen zǒu ba.",
          kr: "너무 좋다, 우리 가자.",
          note: "走(zǒu): 가다, 걷다"
        }
      ]
    },
    {
      day: 23,
      title: "你住在哪里？ (어디에 살아?)",
      youtubeTime: "12:30",
      seconds: 750,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你住在哪里？",
          pinyin: "Nǐ zhù zài nǎlǐ?",
          kr: "너 어디에 살아?",
          note: "住(zhù): 살다, 거주하다 / 哪里(nǎlǐ): 어디"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我住在学校附近。",
          pinyin: "Wǒ zhù zài xuéxiào fùjìn.",
          kr: "나 학교 근처에 살아.",
          note: "学校(xuéxiào): 학교 / 附近(fùjìn): 부근, 근처"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "离公司远吗？",
          pinyin: "Lí gōngsī yuǎn ma?",
          kr: "회사에서 멀어?",
          note: "离(lí): ~로부터(거리 격조사) / 远(yuǎn): 멀다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "不太远，坐公交十分钟。",
          pinyin: "Bú tài yuǎn, zuò gōngjiāo shí fēnzhōng.",
          kr: "별로 안 멀어, 버스 타고 10분 걸려.",
          note: "坐公交: 버스를 타다 / 分钟(fēnzhōng): 분"
        }
      ]
    },
    {
      day: 24,
      title: "洗手间在哪儿？ (화장실이 어디예요?)",
      youtubeTime: "18:45",
      seconds: 1125,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "请问，洗手间在哪儿？",
          pinyin: "Qǐngwèn, xǐshǒujiān zài nǎr?",
          kr: "말씀 좀 여쭙겠습니다, 화장실이 어디인가요?",
          note: "请问(qǐngwèn): 말씀 좀 묻겠습니다 / 洗手间: 화장실"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "在前边，往右拐。",
          pinyin: "Zài qiánbian, wǎng yòu guǎi.",
          kr: "앞쪽에 있어요, 우회전하세요.",
          note: "前边(qiánbian): 앞쪽 / 往(wǎng): ~쪽으로 / 拐(guǎi): 돌다, 꺾다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "是在电梯旁边吗？",
          pinyin: "Shì zài diàntī pángbiān ma?",
          kr: "엘리베이터 옆에 있나요?",
          note: "电梯(diàntī): 엘리베이터 / 旁边(pángbiān): 옆"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "对，就在电梯旁边。",
          pinyin: "Duì, jiù zài diàntī pángbiān.",
          kr: "네, 바로 엘리베이터 옆에 있습니다.",
          note: "就(jiù): 바로"
        }
      ]
    },
    {
      day: 25,
      title: "你属什么？ (너 무슨 띠야?)",
      youtubeTime: "25:00",
      seconds: 1500,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你是哪一年出生的？",
          pinyin: "Nǐ shì nǎ yì nián chūshēng de?",
          kr: "너 몇 년도에 태어났어?",
          note: "出生(chūshēng): 태어나다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我是一九九六年出生的。",
          pinyin: "Wǒ shì yī jiǔ jiǔ liù nián chūshēng de.",
          kr: "나 1996년에 태어났어.",
          note: "연도 읽기: 숫자를 한 자리씩 낱개로 발음"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "那你属鼠吧？",
          pinyin: "Nà nǐ shǔ shǔ ba?",
          kr: "그럼 너 쥐띠겠네?",
          note: "属(shǔ): ~띠에 속하다 / 鼠(shǔ): 쥐"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "没错，我属鼠。",
          pinyin: "Méi cuò, wǒ shǔ shǔ.",
          kr: "맞아, 나 쥐띠야.",
          note: "没错(méi cuò): 틀림없다, 맞다"
        }
      ]
    },
    {
      day: 26,
      title: "请给我一杯热水 (따뜻한 물 한 잔만 주세요)",
      youtubeTime: "31:15",
      seconds: 1875,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "服务员，请给我一杯热水。",
          pinyin: "Fúwùyuán, qǐng gěi wǒ yì bēi rèshuǐ.",
          kr: "여기요, 따뜻한 물 한 잔만 주세요.",
          note: "服务员(fúwùyuán): 종업원 / 热水(rèshuǐ): 온수, 따뜻한 물"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，请稍等。",
          pinyin: "Hǎode, qǐng shāo děng.",
          kr: "네, 잠시만 기다려 주세요.",
          note: "稍等(shāo děng): 잠시 기다리다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "顺便再拿几张纸巾吧。",
          pinyin: "Shùnbiàn zài ná jǐ zhāng zhǐjīn ba.",
          kr: "하는 김에 휴지 몇 장만 더 갖다주세요.",
          note: "顺便(shùnbiàn): ~하는 김에 / 纸巾(zhǐjīn): 휴지, 냅킨"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "没问题，马上给您拿来。",
          pinyin: "Méi wèntí, mǎshàng gěi nín nálái.",
          kr: "문제없습니다, 바로 가져다 드릴게요.",
          note: "马上(mǎshàng): 곧, 바로 / 拿来(nálái): 가져오다"
        }
      ]
    },
    {
      day: 27,
      title: "明天会下雨吗？ (내일 비가 올까?)",
      youtubeTime: "37:30",
      seconds: 2250,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "看天气预报了吗？明天会下雨吗？",
          pinyin: "Kàn tiānqì yùbào le ma? Míngtiān huì xiàyǔ ma?",
          kr: "일기예보 봤어? 내일 비 올까?",
          note: "天气预报: 일기예보 / 下雨(xiàyǔ): 비가 내리다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "听说下午会有大雨。",
          pinyin: "Tīngshuō xiàwǔ huì yǒu dàyǔ.",
          kr: "듣자 하니 오후에 큰비가 올 거래.",
          note: "听说(tīngshuō): 듣자 하니 / 大雨(dàyǔ): 폭우, 큰비"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "出门得带伞了。",
          pinyin: "Chūmén děi dài sǎn le.",
          kr: "나갈 때 우산 챙겨야겠네.",
          note: "出门(chūmén): 외출하다 / 得(děi): ~해야 한다 / 伞(sǎn): 우산"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "是啊，别忘了带折叠伞。",
          pinyin: "Shì a, bié wàng le dài zhédiésǎn.",
          kr: "맞아, 접이식 우산 챙기는 거 잊지 마.",
          note: "别(bié): ~하지 마라 / 忘(wàng): 잊다 / 折叠伞: 3단/접이식 우산"
        }
      ]
    },
    {
      day: 28,
      title: "你觉得怎么样？ (너는 어떻게 생각해?)",
      youtubeTime: "43:45",
      seconds: 2625,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你觉得这个方案怎么样？",
          pinyin: "Nǐ juéde zhèige fāng'àn zěnmeyàng?",
          kr: "너 이 기획안(방안) 어떻게 생각해?",
          note: "觉得(juéde): ~라고 생각하다, 느끼다 / 方案(fāng'àn): 방안"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "想法很好，但是有点儿难实现。",
          pinyin: "Xiǎngfǎ hěn hǎo, dànshì yǒudiǎnr nán shíxiàn.",
          kr: "아이디어는 좋은데, 실현하기가 조금 어렵네.",
          note: "但是(dànshì): 그러나 / 实现(shíxiàn): 실현하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "那我再修改一下。",
          pinyin: "Nà wǒ zài xiūgǎi yíxià.",
          kr: "그럼 내가 조금 더 수정해 볼게.",
          note: "再(zài): 다시 / 修改(xiūgǎi): 수정하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，有什么需要帮忙的随时找我。",
          pinyin: "Hǎode, yǒu shénme xūyào bāngmáng de suíshí zhǎo wǒ.",
          kr: "그래, 도움 필요한 거 있으면 언제든 나 찾아.",
          note: "随时(suíshí): 언제든지 / 找(zhǎo): 찾다"
        }
      ]
    },
    {
      day: 29,
      title: "可以便宜一点儿吗？ (좀 더 깎아주실 수 있나요?)",
      youtubeTime: "50:00",
      seconds: 3000,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "老板，这个能不能便宜一点儿？",
          pinyin: "Lǎobǎn, zhèige néng bu néng piányi yìdiǎnr?",
          kr: "사장님, 이거 좀 더 싸게 해주실 수 있나요?",
          note: "能不能: ~할 수 있냐 없냐 / 便宜(piányi): 싸다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "这已经是最低价了，不赚钱的。",
          pinyin: "Zhè yǐjīng shì zuì dī jià le, bù zhuànqián de.",
          kr: "이거 이미 최저가예요, 남는 것도 없어요.",
          note: "最低价(zuì dī jià): 최저가 / 赚钱(zhuànqián): 돈을 벌다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "买两个的话，给打个折吧。",
          pinyin: "Mǎi liǎng gè dehuà, gěi dǎ gè zhé ba.",
          kr: "두 개 사면 할인 좀 해주세요.",
          note: "打折(dǎzhé): 할인하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "行吧，给你打九折。",
          pinyin: "Xíng ba, gěi nǐ dǎ jiǔ zhé.",
          kr: "좋아요, 10% 깎아(90% 가격으로) 드릴게요.",
          note: "九折(jiǔ zhé): 10% 할인 (정가의 90% 판매)"
        }
      ]
    },
    {
      day: 30,
      title: "你打算怎么过生日？ (생일 어떻게 보낼 계획이야?)",
      youtubeTime: "56:15",
      seconds: 3375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "下周是你生日吧？打算怎么过？",
          pinyin: "Xià zhōu shì nǐ shēngrì ba? Dǎsuàn zěnme guò?",
          kr: "다음 주가 네 생일이지? 어떻게 보낼 계획이야?",
          note: "过生日(guò shēngrì): 생일을 보내다 / 打算(dǎsuàn): 계획하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "想和几个好朋友一起吃顿饭。",
          pinyin: "Xiǎng hé jǐ gè hǎo péngyou yìqǐ chī dùn fàn.",
          kr: "친한 친구 몇 명이랑 같이 밥 한 끼 먹으려고.",
          note: "顿(dùn): 끼니를 세는 양사"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "餐厅订好了吗？",
          pinyin: "Cāntīng dìng hǎo le ma?",
          kr: "식당은 예약해 뒀어?",
          note: "订(dìng): 예약하다 / 订好: 예약 완료하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "订了一家很有名的火锅店。",
          pinyin: "Dìng le yì jiā hěn yǒumíng de huǒguōdiàn.",
          kr: "아주 유명한 훠궈 집으로 하나 예약했어.",
          note: "有名(yǒumíng): 유명하다 / 火锅店: 훠궈 전문점"
        }
      ]
    },
    {
      day: 31,
      title: "你喜欢什么运动？ (어떤 운동 좋아해?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你平时喜欢什么运动？",
          pinyin: "Nǐ píngshí xǐhuan shénme yùndòng?",
          kr: "너 평소에 어떤 운동 좋아하니?",
          note: "平时(píngshí): 평소 / 运动(yùndòng): 운동"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我最喜欢跑步和游泳。",
          pinyin: "Wǒ zuì xǐhuan pǎobù hé yóuyǒng.",
          kr: "난 달리기랑 수영을 제일 좋아해.",
          note: "最(zuì): 가장 / 跑步(pǎobù): 달리기 / 游泳(yóuyǒng): 수영"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "怪不得你的身材这么好。",
          pinyin: "Guàibude nǐ de shēncái zhème hǎo.",
          kr: "어쩐지 몸매가 그렇게 좋더라.",
          note: "怪不得(guàibude): 어쩐지 / 身材(shēncái): 몸매"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "哪里哪里，为了健康嘛。",
          pinyin: "Nǎli nǎli, wèile jiànkāng ma.",
          kr: "아니야, 건강을 위해서지.",
          note: "为了(wèile): ~을 위해 / 健康(jiànkāng): 건강"
        }
      ]
    },
    {
      day: 32,
      title: "这家饭馆菜怎么样？ (이 식당 요리 어때?)",
      youtubeTime: "06:15",
      seconds: 375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这家饭馆的菜怎么样？",
          pinyin: "Zhè jiā fànguǎn de cài zěnmeyàng?",
          kr: "이 식당 음식 어때?",
          note: "饭馆(fànguǎn): 식당 / 菜(cài): 요리, 음식"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "味道真不错，而且很便宜。",
          pinyin: "Wèidao zhēn búcuò, érqiě hěn piányi.",
          kr: "맛이 진짜 괜찮아, 게다가 아주 저렴해.",
          note: "味道(wèidao): 맛 / 而且(érqiě): 게다가"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "有什么特色菜吗？",
          pinyin: "Yǒu shénme tèsècài ma?",
          kr: "대표 메뉴(특색 요리) 있어?",
          note: "特色菜(tèsècài): 특색 요리, 대표 메뉴"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "糖醋肉和炸酱面是这里的招牌菜。",
          pinyin: "Tángcùròu hé zhájiàngmiàn shì zhèlǐ de zhāopáicài.",
          kr: "탕수육과 짜장면이 여기 시그니처 요리야.",
          note: "糖醋肉: 탕수육 / 招牌菜: 간판 요리"
        }
      ]
    },
    {
      day: 33,
      title: "你能帮我一个忙吗？ (나 좀 도와줄 수 있어?)",
      youtubeTime: "12:30",
      seconds: 750,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你能帮我一个忙吗？",
          pinyin: "Nǐ néng bāng wǒ yí gè máng ma?",
          kr: "나 부탁 하나만 들어줄 수 있어?",
          note: "帮忙(bāngmáng): 돕다 / 帮~一个忙: ~의 부탁을 들어주다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "当然可以，什么事？",
          pinyin: "Dāngrán kěyǐ, shénme shì?",
          kr: "당연히 되지, 무슨 일인데?",
          note: "当然(dāngrán): 당연히 / 可以(kěyǐ): 가능하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这个行李太重了，我拿不动。",
          pinyin: "Zhèige xíngli tài zhòng le, wǒ nábudòng.",
          kr: "이 짐이 너무 무거워서 들 수가 없어.",
          note: "行李(xíngli): 짐 / 拿不动: 무거워서 들지 못하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我来帮你拿吧。",
          pinyin: "Wǒ lái bāng nǐ ná ba.",
          kr: "내가 들어줄게.",
          note: "我来~: 내가 ~할게"
        }
      ]
    },
    {
      day: 34,
      title: "你打算去哪儿旅游？ (여행 어디로 갈 계획이야?)",
      youtubeTime: "18:45",
      seconds: 1125,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这次放假你打算去哪儿？",
          pinyin: "Zhè cì fàngjià nǐ dǎsuàn qù nǎr?",
          kr: "이번 휴가 때 어디 갈 계획이야?",
          note: "放假(fàngjià): 방학/휴가를 하다 / 打算(dǎsuàn): 계획하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我打算去北京旅游。",
          pinyin: "Wǒ dǎsuàn qù Běijīng lǚyóu.",
          kr: "북경으로 여행 갈 계획이야.",
          note: "北京(Běijīng): 베이징 / 旅游(lǚyóu): 여행하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "票买好了吗？",
          pinyin: "Piào mǎi hǎo le ma?",
          kr: "표는 다 샀어?",
          note: "买好: 다 사다 (결과보어 好)"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "已经买好了，下周出发。",
          pinyin: "Yǐjīng mǎi hǎo le, xià zhōu chūfā.",
          kr: "이미 다 샀어, 다음 주에 출발해.",
          note: "已经(yǐjīng): 이미 / 出发(chūfā): 출발하다"
        }
      ]
    },
    {
      day: 35,
      title: "你穿这件衣服真合适 (너 이 옷 입으니 정말 잘 어울린다)",
      youtubeTime: "25:00",
      seconds: 1500,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你看，这件衣服怎么样？",
          pinyin: "Nǐ kàn, zhè jiàn yīfu zěnmeyàng?",
          kr: "봐봐, 이 옷 어때?",
          note: "件(jiàn): 옷을 세는 양사 / 衣服(yīfu): 옷"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "颜色很漂亮，很适合你。",
          pinyin: "Yánsè hěn piàoliang, hěn shìhé nǐ.",
          kr: "색깔이 너무 예쁘다, 너한테 아주 잘 어울려.",
          note: "颜色(yánsè): 색깔 / 适合(shìhé): 어울리다, 맞다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "不过有点儿贵。",
          pinyin: "Búguò yǒudiǎnr guì.",
          kr: "근데 좀 비싸네.",
          note: "不过(búguò): 그러나, 다만 / 有点儿: 조금(부정적 뉘앙스)"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "喜欢就买吧，千金难买心头好。",
          pinyin: "Xǐhuan jiù mǎi ba, qiānjīn nán mǎi xīntóuhǎo.",
          kr: "마음에 들면 사, 마음에 쏙 드는 건 돈 주고도 못 사잖아.",
          note: "千金难买心头好: 마음에 드는 것은 값을 따질 수 없다"
        }
      ]
    },
    {
      day: 36,
      title: "我头疼得厉害 (나 머리가 너무 아파)",
      youtubeTime: "31:20",
      seconds: 1880,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你怎么了？脸色不太好。",
          pinyin: "Nǐ zěnme le? Liǎnsè bú tài hǎo.",
          kr: "너 왜 그래? 안색이 별로 안 좋아 보여.",
          note: "怎么了: 무슨 일이야? / 脸色(liǎnsè): 안색"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我头疼得厉害，可能发烧了。",
          pinyin: "Wǒ tóuténg de lìhai, kěnéng fāshāo le.",
          kr: "머리가 너무 심하게 아파, 열도 나는 것 같아.",
          note: "头疼(tóuténg): 두통 / 厉害(lìhai): 심하다 / 发烧(fāshāo): 열이 나다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "吃药了吗？去医院看看吧。",
          pinyin: "Chī yào le ma? Qù yīyuàn kànkan ba.",
          kr: "약 먹었어? 병원 가서 진찰받아 봐.",
          note: "吃药(chī yào): 약을 복용하다 / 医院(yīyuàn): 병원"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "吃过药了，休息一下就好。",
          pinyin: "Chī guo yào le, xiūxi yíxià jiù hǎo.",
          kr: "약 먹었어, 좀 쉬면 괜찮아질 거야.",
          note: "休息一下: 좀 쉬다"
        }
      ]
    },
    {
      day: 37,
      title: "请给我看一下菜单 (메뉴판 좀 보여주세요)",
      youtubeTime: "37:40",
      seconds: 2260,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "服务员，请给我们看一下菜单。",
          pinyin: "Fúwùyuán, qǐng gěi wǒmen kàn yíxià càidān.",
          kr: "여기요, 메뉴판 좀 보여주세요.",
          note: "服务员(fúwùyuán): 직원 / 菜单(càidān): 메뉴판"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，请问两位喝点儿什么？",
          pinyin: "Hǎode, qǐngwèn liǎng wèi hē diǎnr shénme?",
          kr: "네, 두 분 마실 것은 무엇으로 드릴까요?",
          note: "两位(liǎng wèi): 두 분"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "先来两杯冰水吧。",
          pinyin: "Xiān lái liǎng bēi bīngshuǐ ba.",
          kr: "우선 시원한 물 두 잔 주세요.",
          note: "先(xiān): 먼저, 우선 / 冰水(bīngshuǐ): 찬물"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，请稍等。",
          pinyin: "Hǎode, qǐng shāo děng.",
          kr: "네, 잠시만 기다려 주세요.",
          note: "稍等(shāo děng): 잠시 기다리다"
        }
      ]
    },
    {
      day: 38,
      title: "你每天几点起床？ (너 매일 몇 시에 일어나?)",
      youtubeTime: "44:00",
      seconds: 2640,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你每天早上几点起床？",
          pinyin: "Nǐ měitiān zǎoshang jǐ diǎn qǐchuáng?",
          kr: "너 매일 아침 몇 시에 일어나?",
          note: "每天(měitiān): 매일 / 起床(qǐchuáng): 기상하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我一般六点半起床。",
          pinyin: "Wǒ yìbān liù diǎn bàn qǐchuáng.",
          kr: "나 보통 6시 반에 일어나.",
          note: "一般(yìbān): 보통, 대개 / 半(bàn): 30분, 반"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "起得真早！几点上班呢？",
          pinyin: "Qǐ de zhēn zǎo! Jǐ diǎn shàngbān ne?",
          kr: "정말 일찍 일어난다! 출근은 몇 시인데?",
          note: "早(zǎo): 이르다 / 上班(shàngbān): 출근하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "九点上班，所以我先去跑步。",
          pinyin: "Jiǔ diǎn shàngbān, suǒyǐ wǒ xiān qù pǎobù.",
          kr: "9시 출근이라 먼저 조깅하러 가.",
          note: "所以(suǒyǐ): 그래서"
        }
      ]
    },
    {
      day: 39,
      title: "祝你生日快乐！ (생일 축하해!)",
      youtubeTime: "50:15",
      seconds: 3015,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "祝你生日快乐！这是送给你的礼物。",
          pinyin: "Zhù nǐ shēngrì kuàilè! Zhè shì sòng gěi nǐ de lǐwù.",
          kr: "생일 축하해! 이건 널 위해 준비한 선물이야.",
          note: "祝(zhù): 축하하다 / 礼物(lǐwù): 선물"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "谢谢你！你太客气了。",
          pinyin: "Xièxie nǐ! Nǐ tài kèqi le.",
          kr: "고마워! 뭘 이런 걸 다 챙겼어.",
          note: "客气(kèqi): 예의를 차리다, 공손하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "快打开看看，喜欢不喜欢？",
          pinyin: "Kuài dǎkāi kànkan, xǐhuan bù xǐhuan?",
          kr: "어서 열어봐, 마음에 드는지 안 드는지?",
          note: "打开(dǎkāi): 열다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "哇，是我一直想要的，太喜欢了！",
          pinyin: "Wā, shì wǒ yìzhí xiǎng yào de, tài xǐhuan le!",
          kr: "와, 내가 줄곧 갖고 싶었던 거네, 너무 좋아!",
          note: "一直(yìzhí): 줄곧, 내내"
        }
      ]
    },
    {
      day: 40,
      title: "周末你有什么安排？ (주말에 무슨 계획 있어?)",
      youtubeTime: "56:30",
      seconds: 3390,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这个周末你有什么安排？",
          pinyin: "Zhèige zhōumò nǐ yǒu shénme ānpái?",
          kr: "이번 주말에 무슨 계획 있어?",
          note: "周末(zhōumò): 주말 / 安排(ānpái): 일정, 계획"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我打算在家好好睡个觉。",
          pinyin: "Wǒ dǎsuàn zài jiā hǎohāo shuì gè jiào.",
          kr: "집에서 푹 잘 생각이야.",
          note: "睡觉(shuìjiào): 자다 / 好好: 푹, 잘"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "要不要一起去打网球？",
          pinyin: "Yàobúyào yìqǐ qù dǎ wǎngqiú?",
          kr: "같이 테니스 치러 갈래?",
          note: "打网球(dǎ wǎngqiú): 테니스를 치다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好啊，运动一下也不错。",
          pinyin: "Hǎo a, yùndòng yíxià yě búcuò.",
          kr: "좋지, 운동 좀 하는 것도 괜찮겠다.",
          note: "也不错: ~도 괜찮다"
        }
      ]
    },
    {
      day: 41,
      title: "你喜欢喝茶还是喝咖啡？ (차 마실래, 커피 마실래?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你喜欢喝茶还是喝咖啡？",
          pinyin: "Nǐ xǐhuan hē chá háishi hē kāfēi?",
          kr: "차 좋아하세요, 아니면 커피 좋아하세요?",
          note: "还是(háishi): 아니면, 혹은 (선택의문문)"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我都喜欢，不过今天想喝绿茶。",
          pinyin: "Wǒ dōu xǐhuan, búguò jīntiān xiǎng hē lǜchá.",
          kr: "둘 다 좋아하는데, 오늘은 녹차 마시고 싶어요.",
          note: "都(dōu): 모두 / 绿茶(lǜchá): 녹차"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "要加糖吗？",
          pinyin: "Yào jiā táng ma?",
          kr: "설탕 넣어 드릴까요?",
          note: "加(jiā): 더하다, 넣다 / 糖(táng): 설탕"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "不加，谢谢，我喜欢原味的。",
          pinyin: "Bù jiā, xièxie, wǒ xǐhuan yuánwèi de.",
          kr: "안 넣을게요, 감사해요. 오리지널 맛을 좋아해요.",
          note: "原味(yuánwèi): 본래의 맛, 오리지널"
        }
      ]
    },
    {
      day: 42,
      title: "能帮我拍张照吗？ (사진 한 장 찍어주시겠어요?)",
      youtubeTime: "06:10",
      seconds: 370,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "不好意思，能帮我们拍张照吗？",
          pinyin: "Bùhǎoyìsi, néng bāng wǒmen pāi zhāng zhào ma?",
          kr: "죄송하지만, 저희 사진 한 장만 찍어주실 수 있나요?",
          note: "拍照(pāizhào): 사진을 찍다 / 张(zhāng): 종이·사진의 양사"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "没问题，准备好了吗？一、二、三！",
          pinyin: "Méi wèntí, zhǔnbèi hǎo le ma? Yī, èr, sān!",
          kr: "그럼요 문제없죠, 준비되셨나요? 하나, 둘, 셋!",
          note: "没问题(méi wèntí): 문제없다 / 准备(zhǔnbèi): 준비하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "拍得真好，太感谢你了！",
          pinyin: "Pāi de zhēn hǎo, tài gǎnxiè nǐ le!",
          kr: "정말 잘 찍어주셨네요, 너무 감사드려요!",
          note: "感谢(gǎnxiè): 감사하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "不用谢，举手之劳。",
          pinyin: "Bú yòng xiè, jǔshǒuzhīláo.",
          kr: "별말씀을요, 손쉬운 일인걸요.",
          note: "举手之劳(jǔshǒuzhīláo): 손쉬운 수고, 가벼운 일"
        }
      ]
    },
    {
      day: 43,
      title: "请问地铁站在哪儿？ (지하철역이 어디에 있나요?)",
      youtubeTime: "12:20",
      seconds: 740,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "请问，最近的地铁站在哪儿？",
          pinyin: "Qǐngwèn, zuì jìn de dìtiězhàn zài nǎr?",
          kr: "말씀 좀 묻겠습니다, 가장 가까운 지하철역이 어디죠?",
          note: "最近(zuì jìn): 가장 가까운 / 地铁站(dìtiězhàn): 지하철역"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "一直往前走，在十字路口往右拐。",
          pinyin: "Yìzhí wǎng qián zǒu, zài shízìlùkǒu wǎng yòu guǎi.",
          kr: "앞으로 곧장 가시다가, 사거리에서 우회전하세요.",
          note: "一直(yìzhí): 곧장 / 十字路口: 십거리(사거리) / 拐(guǎi): 돌다, 꺾다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "离这儿远不远？",
          pinyin: "Lí zhèr yuǎn bu yuǎn?",
          kr: "여기서 먼가요, 안 먼가요?",
          note: "离(lí): ~로부터(거리/시간 격조사) / 远(yuǎn): 멀다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "不远，走路大概五分钟就到。",
          pinyin: "Bù yuǎn, zǒulù dàgài wǔ fēnzhōng jiù dào.",
          kr: "안 멀어요, 걸어서 대략 5분이면 도착해요.",
          note: "走路(zǒulù): 걷다 / 大概(dàgài): 대략 / 就(jiù): 바로, 곧"
        }
      ]
    },
    {
      day: 44,
      title: "你吃饱了吗？ (배부르게 먹었어?)",
      youtubeTime: "18:30",
      seconds: 1110,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这些菜够不够？你吃饱了吗？",
          pinyin: "Zhèixiē cài gòu bu gòu? Nǐ chī bǎo le ma?",
          kr: "이 요리들 충분해? 배부르게 먹었어?",
          note: "够(gòu): 충분하다 / 饱(bǎo): 배부르다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "吃得很饱，肚子都圆了。",
          pinyin: "Chī de hěn bǎo, dùzi dōu yuán le.",
          kr: "아주 배부르게 먹었어, 배가 뽈록해졌네.",
          note: "肚子(dùzi): 배 / 圆(yuán): 둥글다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "那就好。服务员，买单！",
          pinyin: "Nà jiù hǎo. Fúwùyuán, mǎidān!",
          kr: "그럼 다행이다. 여기요, 계산할게요!",
          note: "那就好: 그렇다면 다행이다 / 买单(mǎidān): 계산하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "今天我来请客吧。",
          pinyin: "Jīntiān wǒ lái qǐngkè ba.",
          kr: "오늘은 내가 한턱낼게.",
          note: "请客(qǐngkè): 한턱내다, 대접하다"
        }
      ]
    },
    {
      day: 45,
      title: "这件衣服可以试穿吗？ (이 옷 입어봐도 되나요?)",
      youtubeTime: "24:45",
      seconds: 1485,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "服务员，这件衣服可以试穿吗？",
          pinyin: "Fúwùyuán, zhè jiàn yīfu kěyǐ shìchuān ma?",
          kr: "저기요, 이 옷 입어봐도 되나요?",
          note: "试穿(shìchuān): 입어보다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "当然可以，试衣间在左边。",
          pinyin: "Dāngrán kěyǐ, shìyījiān zài zuǒbian.",
          kr: "당연히 되죠, 피팅룸은 왼쪽에 있습니다.",
          note: "试衣间(shìyījiān): 탈의실 / 左边(zuǒbian): 왼쪽"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "有没有大一点儿的尺码？",
          pinyin: "Yǒu méiyǒu dà yìdiǎnr de chǐmǎ?",
          kr: "좀 더 큰 사이즈가 있나요?",
          note: "尺码(chǐmǎ): 치수, 사이즈"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "稍等，我去库房给您拿一件。",
          pinyin: "Shāo děng, wǒ qù kùfáng gěi nín ná yí jiàn.",
          kr: "잠시만요, 창고에서 하나 가져다 드릴게요.",
          note: "库房(kùfáng): 창고 / 拿(ná): 쥐다, 가져오다"
        }
      ]
    },
    {
      day: 46,
      title: "你有什么兴趣爱好？ (취미가 뭐야?)",
      youtubeTime: "31:00",
      seconds: 1860,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你业余时间有什么兴趣爱好？",
          pinyin: "Nǐ yèyú shíjiān yǒu shénme xìngqù àihào?",
          kr: "너 여가 시간에 어떤 취미가 있어?",
          note: "业余时间: 여가 시간 / 兴趣爱好: 취미"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我喜欢听音乐和看电影。",
          pinyin: "Wǒ xǐhuan tīng yīnyuè hé kàn diànyǐng.",
          kr: "난 음악 듣는 거랑 영화 보는 거 좋아해.",
          note: "听音乐: 음악 듣기 / 看电影: 영화 보기"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "最近有什么好看的电影推荐吗？",
          pinyin: "Zuìjìn yǒu shénme hǎokàn de diànyǐng tuījiàn ma?",
          kr: "최근에 재미있는 영화 추천해 줄 만한 거 있어?",
          note: "好看(hǎokàn): 재미있다, 보기 좋다 / 推荐(tuījiàn): 추천하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "有一部新的科幻片很不错。",
          pinyin: "Yǒu yí bù xīn de kēhuànpiàn hěn búcuò.",
          kr: "새로 나온 SF 영화 한 편 괜찮더라.",
          note: "部(bù): 영화 양사 / 科幻片(kēhuànpiàn): 공상과학 영화"
        }
      ]
    },
    {
      day: 47,
      title: "你打算什么时候结婚？ (언제 결혼할 계획이야?)",
      youtubeTime: "37:15",
      seconds: 2235,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你们交往多久了？打算什么时候结婚？",
          pinyin: "Nǐmen jiāowǎng duō jiǔ le? Dǎsuàn shénme shíhou jiéhūn?",
          kr: "너희 사귄 지 얼마나 됐어? 언제 결혼할 생각이야?",
          note: "交往(jiāowǎng): 사귀다 / 多久(duō jiǔ): 얼마나 오래 / 结婚(jiéhūn): 결혼하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我们交往三年了，计划明年秋天结婚。",
          pinyin: "Wǒmen jiāowǎng sān nián le, jìhuà míngnián qiūtiān jiéhūn.",
          kr: "우리 사귄 지 3년 됐는데, 내년 가을에 결혼할 계획이야.",
          note: "计划(jìhuà): 계획하다 / 秋天(qiūtiān): 가을"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "恭喜恭喜！到时候一定要请我啊。",
          pinyin: "Gōngxǐ gōngxǐ! Dào shíhou yídìng yào qǐng wǒ a.",
          kr: "축하해! 그때 꼭 나 초대해 줘.",
          note: "恭喜(gōngxǐ): 축하하다 / 到时候: 그때가 되면 / 一定(yídìng): 반드시"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "那是必须的！",
          pinyin: "Nà shì bìxū de!",
          kr: "그건 당연하지(필수지)!",
          note: "必须(bìxū): 반드시 ~해야 한다"
        }
      ]
    },
    {
      day: 48,
      title: "你能小点儿声吗？ (목소리 좀 낮춰줄래?)",
      youtubeTime: "43:30",
      seconds: 2610,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "不好意思，你能小点儿声吗？",
          pinyin: "Bùhǎoyìsi, nǐ néng xiǎo diǎnr shēng ma?",
          kr: "죄송한데, 소리 좀 낮춰 주시겠어요?",
          note: "小点儿声: 목소리를 좀 낮추다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "真对不起，影响到你了吗？",
          pinyin: "Zhēn duìbuqǐ, yǐngxiǎng dào nǐ le ma?",
          kr: "정말 죄송합니다, 방해가 되었나요?",
          note: "影响(yǐngxiǎng): 영향을 미치다, 방해되다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "我在准备明天的考试呢。",
          pinyin: "Wǒ zài zhǔnbèi míngtiān de kǎoshì ne.",
          kr: "제가 내일 시험을 준비하고 있어서요.",
          note: "准备(zhǔnbèi): 준비하다 / 考试(kǎoshì): 시험"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我明白了，我这就出去打电话。",
          pinyin: "Wǒ míngbai le, wǒ zhè jiù chūqu dǎ diànhuà.",
          kr: "알겠습니다, 제가 바로 나가서 통화할게요.",
          note: "这就~: 지금 바로 ~하다 / 打电话: 전화하다"
        }
      ]
    },
    {
      day: 49,
      title: "我想退货 (환불하고 싶어요)",
      youtubeTime: "49:45",
      seconds: 2985,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你好，我昨天买的这件衣服想退货。",
          pinyin: "Nǐ hǎo, wǒ zuótiān mǎi de zhè jiàn yīfu xiǎng tuìhuò.",
          kr: "안녕하세요, 어제 산 이 옷 환불하고 싶어요.",
          note: "退货(tuìhuò): 물건을 반품/환불하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "请问有什么质量问题吗？",
          pinyin: "Qǐngwèn yǒu shénme zhìliàng wèntí ma?",
          kr: "혹시 어떤 품질 상의 문제가 있나요?",
          note: "质量(zhìliàng): 품질 / 问题(wèntí): 문제"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "质量没问题，就是尺寸不太合适。",
          pinyin: "Zhìliàng méi wèntí, jiùshì chǐcùn bú tài héshì.",
          kr: "품질 문제는 아니고, 치수가 잘 안 맞아서요.",
          note: "就是(jiùshì): 다만, 단지 / 尺寸(chǐcùn): 사이즈 / 合适(héshì): 맞다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，请出示一下您的小票。",
          pinyin: "Hǎode, qǐng chūshì yíxià nín de xiǎopiào.",
          kr: "알겠습니다, 영수증 좀 보여주세요.",
          note: "出示(chūshì): 내보이다, 제시하다 / 小票(xiǎopiào): 영수증"
        }
      ]
    },
    {
      day: 50,
      title: "时间过得真快！ (시간 진짜 빠르다!)",
      youtubeTime: "56:00",
      seconds: 3360,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "时间过得真快，不知不觉都学到五十天了！",
          pinyin: "Shíjiān guò de zhēn kuài, bùzhībùjué dōu xué dào wǔshí tiān le!",
          kr: "시간 참 빠르다, 어느새 벌써 50일 차까지 배웠어!",
          note: "不知不觉(bùzhībùjué): 모르는 사이에, 어느덧"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "是啊，感觉汉语水平提高了不少。",
          pinyin: "Shì a, gǎnjué Hànyǔ shuǐpíng tígāo le bù shǎo.",
          kr: "맞아, 중국어 실력이 꽤 많이 는 것 같아.",
          note: "水平(shuǐpíng): 수준 / 提高(tígāo): 향상되다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "坚持就是胜利，剩下的五十天也加油吧！",
          pinyin: "Jiānchí jiùshì shènglì, shèngxià de wǔshí tiān yě jiāyóu ba!",
          kr: "버티는 게 이기는 거라잖아, 남은 50일도 파이팅 하자!",
          note: "坚持(jiānchí): 꾸준히 하다 / 胜利(shènglì): 승리 / 剩下(shèngxià): 남다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "没问题，一起加油！",
          pinyin: "Méi wèntí, yìqǐ jiāyóu!",
          kr: "문제없지, 같이 힘내자!",
          note: "加油(jiāyóu): 파이팅, 힘내다"
        }
      ]
    },
    {
      day: 51,
      title: "你租的房子怎么样？ (네가 얻은 집 어때?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你新租的房子怎么样？",
          pinyin: "Nǐ xīn zū de fángzi zěnmeyàng?",
          kr: "새로 구한 집은 어때?",
          note: "租(zū): 세내다, 임차하다 / 房子(fángzi): 집, 방"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "环境挺好的，离公司也近。",
          pinyin: "Huánjìng tǐng hǎo de, lí gōngsī yě jìn.",
          kr: "주변 환경도 아주 괜찮고, 회사랑도 가까워.",
          note: "环境(huánjìng): 환경 / 挺~的: 꽤 ~하다 / 近(jìn): 가깝다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "房租贵不贵？",
          pinyin: "Fángzū guì bu guì?",
          kr: "집세는 비싸, 안 비싸?",
          note: "房租(fángzū): 방세, 월세 / 贵(guì): 비싸다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "性价比挺高的，我很满意。",
          pinyin: "Xìngjiàbǐ tǐng gāo de, wǒ hěn mǎnyì.",
          kr: "가성비가 꽤 높아서 난 아주 만족스러워.",
          note: "性价比(xìngjiàbǐ): 가성비 / 满意(mǎnyì): 만족하다"
        }
      ]
    },
    {
      day: 52,
      title: "请帮我换一下零钱 (잔돈으로 좀 바꿔주세요)",
      youtubeTime: "06:15",
      seconds: 375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你好，请帮我换一下零钱。",
          pinyin: "Nǐ hǎo, qǐng bāng wǒ huàn yíxià língqián.",
          kr: "안녕하세요, 잔돈으로 좀 바꿔주세요.",
          note: "换(huàn): 바꾸다 / 零钱(língqián): 잔돈"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "您想怎么换？",
          pinyin: "Nín xiǎng zěnme huàn?",
          kr: "어떻게 바꿔드릴까요?",
          note: "想(xiǎng): ~하고 싶다 / 怎么(zěnme): 어떻게"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "请换成两张五十块的。",
          pinyin: "Qǐng huàn chéng liǎng zhāng wǔshí kuài de.",
          kr: "50위안짜리 두 장으로 바꿔주세요.",
          note: "换成: ~으로 바꾸다 / 张(zhāng): 지폐를 세는 양사"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，给您，请数一下。",
          pinyin: "Hǎode, gěi nín, qǐng shǔ yíxià.",
          kr: "네, 여기 있습니다, 세어보세요.",
          note: "数(shǔ): 세다"
        }
      ]
    },
    {
      day: 53,
      title: "今天我请客，别跟我争 (오늘 내가 낼게, 사양 마)",
      youtubeTime: "12:30",
      seconds: 750,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "今天我请客，谁都别跟我争！",
          pinyin: "Jīntiān wǒ qǐngkè, shéi dōu bié gēn wǒ zhēng!",
          kr: "오늘은 내가 한턱낼게, 아무도 나랑 계산 다투지 마!",
          note: "别(bié): ~하지 마라 / 争(zhēng): 다투다, 실랑이하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "上次就是你请的，这次我来吧。",
          pinyin: "Shàng cì jiù shì nǐ qǐng de, zhè cì wǒ lái ba.",
          kr: "저번에도 네가 샀잖아, 이번엔 내가 낼게.",
          note: "上次(shàng cì): 지난번 / 这次(zhè cì): 이번"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "我升职了，理应由我来请。",
          pinyin: "Wǒ shēngzhí le, lǐyīng yóu wǒ lái qǐng.",
          kr: "나 승진했잖아, 마땅히 내가 사야지.",
          note: "升职(shēngzhí): 승진하다 / 理应(lǐyīng): 당연히 ~해야 한다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "那我就不客气了，恭喜你啊！",
          pinyin: "Nà wǒ jiù bú kèqi le, gōngxǐ nǐ a!",
          kr: "그럼 사양 안 할게, 승진 축하해!",
          note: "不客气: 사양하지 않다"
        }
      ]
    },
    {
      day: 54,
      title: "路上堵车堵得厉害 (길이 엄청 막혀)",
      youtubeTime: "18:45",
      seconds: 1125,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你到哪儿了？大家都在等你呢。",
          pinyin: "Nǐ dào nǎr le? Dàjiā dōu zài děng nǐ ne.",
          kr: "너 어디쯤 왔어? 다들 너 기다리고 있어.",
          note: "大家(dàjiā): 모두 / 等(děng): 기다리다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "真抱歉，路上堵车堵得厉害。",
          pinyin: "Zhēn bàoqiàn, lùshang dǔchē dǔ de lìhai.",
          kr: "정말 미안해, 도로가 너무 심하게 막혀.",
          note: "抱歉(bàoqiàn): 미안하다 / 堵车(dǔchē): 차가 막히다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "大概还要多长时间？",
          pinyin: "Dàgài hái yào duō cháng shíjiān?",
          kr: "대략 얼마나 더 걸릴 것 같아?",
          note: "多长时间: 얼마 동안의 시간"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "大概还得二十分钟左右。",
          pinyin: "Dàgài hái děi èrshí fēnzhōng zuǒyòu.",
          kr: "대략 20분 정도는 더 걸려야 해.",
          note: "得(děi): ~해야 한다 / 左右(zuǒyòu): 정도, 쯤"
        }
      ]
    },
    {
      day: 55,
      title: "你平时有什么减压方法？ (평소 스트레스 어떻게 풀어?)",
      youtubeTime: "25:00",
      seconds: 1500,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "最近工作压力太大了。",
          pinyin: "Zuìjìn gōngzuò yālì tài dà le.",
          kr: "요즘 업무 스트레스가 너무 커.",
          note: "压力(yālì): 스트레스, 압박"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "你平时有什么减压的好方法吗？",
          pinyin: "Nǐ píngshí yǒu shénme jiǎnyā de hǎo fāngfǎ ma?",
          kr: "넌 평소에 스트레스 푸는 좋은 방법 있어?",
          note: "减压(jiǎnyā): 스트레스를 해소하다 / 方法(fāngfǎ): 방법"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "我一般通过跑步来出出汗。",
          pinyin: "Wǒ yìbān tōngguò pǎobù lái chūchū hàn.",
          kr: "난 보통 조깅하면서 땀을 좀 흘려.",
          note: "通过(tōngguò): ~를 통해서 / 出汗(chūhàn): 땀을 흘리다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "运动确实是最好的减压方式。",
          pinyin: "Yùndòng quèshí shì zuì hǎo de jiǎnyā fāngshì.",
          kr: "운동이 확실히 제일 좋은 스트레스 해소 방식이지.",
          note: "确实(quèshí): 확실히 / 方式(fāngshì): 방식"
        }
      ]
    },
    {
      day: 56,
      title: "我把手机弄丢了 (나 휴대폰 잃어버렸어)",
      youtubeTime: "31:15",
      seconds: 1875,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "糟糕，我把手机弄丢了！",
          pinyin: "Zāogāo, wǒ bǎ shǒujī nòng diū le!",
          kr: "큰일 났다, 나 휴대폰 잃어버렸어!",
          note: "糟糕(zāogāo): 망했다, 큰일이다 / 把~弄丢: ~을 분실하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "别着急，你想想最后在哪儿用过？",
          pinyin: "Bié zháojí, nǐ xiǎngxiang zuìhòu zài nǎr yòng guo?",
          kr: "너무 서두르지 말고, 마지막에 어디서 썼는지 생각해 봐.",
          note: "着急(zháojí): 조급해하다 / 最后(zuìhòu): 마지막"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "好像落在刚才的出租车上了。",
          pinyin: "Hǎoxiàng là zài gāngcái de chūzūchē shang le.",
          kr: "방금 탔던 택시에 두고 내린 것 같아.",
          note: "落(là): 깜빡하고 두고 오다 / 刚才(gāngcái): 방금"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "快用我的手机给你打个电话试试。",
          pinyin: "Kuài yòng wǒ de shǒujī gěi nǐ dǎ gè diànhuà shìshi.",
          kr: "어서 내 휴대폰으로 네 번호에 전화 걸어보자.",
          note: "试试(shìshi): 시도해보다"
        }
      ]
    },
    {
      day: 57,
      title: "你经常网购吗？ (너 인터넷 쇼핑 자주 해?)",
      youtubeTime: "37:30",
      seconds: 2250,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你的快递到了，你经常网购吗？",
          pinyin: "Nǐ de kuàidì dào le, nǐ jīngcháng wǎnggòu ma?",
          kr: "너 택배 도착했어, 인터넷 쇼핑 자주 하니?",
          note: "快递(kuàidì): 택배 / 网购(wǎnggòu): 온라인 쇼핑"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "差不多所有的生活用品都是网上买的。",
          pinyin: "Chàbuduō suǒyǒu de shēnghuó yòngpǐn dōu shì wǎngshang mǎi de.",
          kr: "거의 모든 생활용품을 다 인터넷으로 사.",
          note: "差不多(chàbuduō): 거의 / 生活用品: 생활용품"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "送货速度真快啊！",
          pinyin: "Sònghuò sùdù zhēn kuài a!",
          kr: "배송 속도 진짜 빠르다!",
          note: "送货(sònghuò): 물건을 배송하다 / 速度(sùdù): 속도"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "是啊，而且退换货也很方便。",
          pinyin: "Shì a, érqiě tuìhuànhuò yě hěn fāngbiàn.",
          kr: "맞아, 게다가 교환이나 반품도 엄청 편해.",
          note: "退换货(tuìhuànhuò): 반품 및 교환 / 方便(fāngbiàn): 편리하다"
        }
      ]
    },
    {
      day: 58,
      title: "这周末有特价活动 (이번 주말에 특가 행사 있어)",
      youtubeTime: "43:45",
      seconds: 2625,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "听说百货大楼这周末有特价活动。",
          pinyin: "Tīngshuō bǎihuò dàlóu zhè zhōumò yǒu tèjià huódòng.",
          kr: "듣자 하니 백화점에서 이번 주말에 특가 세일 행사한대.",
          note: "百货大楼: 백화점 / 特价(tèjià): 특가 / 活动(huódòng): 이벤트, 행사"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "真的吗？折扣大不大？",
          pinyin: "Zhēn de ma? Zhékòu dà bu dà?",
          kr: "정말? 할인 폭 커?",
          note: "折扣(zhékòu): 할인율"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "全场五折起，还挺划算的。",
          pinyin: "Quán chǎng wǔ zhé qǐ, hái tǐng huásuàn de.",
          kr: "전 품목 50% 할인부터 시작이라 꽤 남는 장사야.",
          note: "五折(wǔ zhé): 50% 할인 (반값) / 划算(huásuàn): 수지맞다, 이득이다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "那我们周末一起去逛逛吧。",
          pinyin: "Nà wǒmen zhōumò yìqǐ qù guàngguang ba.",
          kr: "그럼 우리 주말에 같이 구경 가자.",
          note: "逛逛(guàngguang): 둘러보다, 아이쇼핑하다"
        }
      ]
    },
    {
      day: 59,
      title: "请给我开一张发票 (영수증/세금계산서 좀 끊어주세요)",
      youtubeTime: "50:00",
      seconds: 3000,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你好，请给我开一张发票。",
          pinyin: "Nǐ hǎo, qǐng gěi wǒ kāi yì zhāng fāpiào.",
          kr: "안녕하세요, 영수증(영수증/발표) 한 장 끊어주세요.",
          note: "开发票(kāi fāpiào): 영수증/증빙서류를 발급하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "请问开个人还是公司？",
          pinyin: "Qǐngwèn kāi gèrén háishi gōngsī?",
          kr: "개인으로 해드릴까요, 회사로 해드릴까요?",
          note: "个人(gèrén): 개인 / 公司(gōngsī): 회사"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "开公司抬头的，这是税号。",
          pinyin: "Kāi gōngsī táitóu de, zhè shì shuìhào.",
          kr: "회사 명의로 해주세요, 여기 사업자등록번호(세무번호)입니다.",
          note: "抬头(táitóu): 영수증 명의 / 税号(shuìhào): 세금 번호"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，电子发票会发到您的邮箱。",
          pinyin: "Hǎode, diànzǐ fāpiào huì fā dào nín de yóuxiāng.",
          kr: "네, 전자 영수증은 고객님 이메일로 발송될 겁니다.",
          note: "电子发票: 전자 영수증 / 邮箱(yóuxiāng): 이메일함"
        }
      ]
    },
    {
      day: 60,
      title: "你打算在这儿待多久？ (여기 얼마나 머물 예정이야?)",
      youtubeTime: "56:15",
      seconds: 3375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你这次出差打算在这儿待多久？",
          pinyin: "Nǐ zhè cì chūchāi dǎsuàn zài zhèr dāi duō jiǔ?",
          kr: "너 이번 출장으로 여기에 얼마나 머물 생각이야?",
          note: "出差(chūchāi): 출장 가다 / 待(dāi): 머물다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "大概待两周左右吧。",
          pinyin: "Dàgài dāi liǎng zhōu zuǒyòu ba.",
          kr: "대략 2주 정도 머물 것 같아.",
          note: "周(zhōu): 주, 주일"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "有时间的话，我带你四处转转。",
          pinyin: "Yǒu shíjiān dehuà, wǒ dài nǐ sìchù zhuànzhuan.",
          kr: "시간 되면 내가 여기저기 구경시켜 줄게.",
          note: "带(dài): 데려가다 / 四处(sìchù): 사방, 여기저기 / 转转: 둘러보다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "太好了，那就提前谢谢你啦！",
          pinyin: "Tài hǎo le, nà jiù tíqián xièxie nǐ la!",
          kr: "너무 좋다, 그럼 미리 고마워할게!",
          note: "提前(tíqián): 미리, 앞당겨"
        }
      ]
    },
    {
      day: 61,
      title: "你平时开车还是坐公交？ (평소 운전해, 버스 타?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你平时上班开车还是坐公交？",
          pinyin: "Nǐ píngshí shàngbān kāichē háishi zuò gōngjiāo?",
          kr: "너 평소 출근할 때 운전해, 아니면 버스 타?",
          note: "开车(kāichē): 운전하다 / 公交(gōngjiāo): 대중교통, 버스"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "早高峰太堵了，我一般坐地铁。",
          pinyin: "Zǎogāofēng tài dǔ le, wǒ yìbān zuò dìtiě.",
          kr: "아침 출근길이 너무 막혀서 난 보통 지하철 타.",
          note: "早高峰(zǎogāofēng): 아침 출근 혼잡 시간대 / 堵(dǔ): 막히다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "坐地铁要换乘吗？",
          pinyin: "Zuò dìtiě yào huànchéng ma?",
          kr: "지하철 탈 때 환승해야 해?",
          note: "换乘(huànchéng): 환승하다, 갈아타다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "不用，一条线直接就到了。",
          pinyin: "Bú yòng, yì tiáo xiàn zhíjiē jiù dào le.",
          kr: "아니, 한 번에 바로 도착해.",
          note: "条(tiáo): 노선 세는 양사 / 直接(zhíjiē): 곧바로, 직접"
        }
      ]
    },
    {
      day: 62,
      title: "我们AA制吧 (우리 더치페이하자)",
      youtubeTime: "06:15",
      seconds: 375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "今天这顿饭吃得真开心，我们AA制吧。",
          pinyin: "Jīntiān zhè dùn fàn chī de zhēn kāixīn, wǒmen AA zhì ba.",
          kr: "오늘 밥 진짜 맛있게 잘 먹었어, 우리 더치페이하자.",
          note: "顿(dùn): 끼니 세는 양사 / AA制: 각자 계산(더치페이)"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "那怎么行，说好今天我请客的。",
          pinyin: "Nà zěnme xíng, shuō hǎo jīntiān wǒ qǐngkè de.",
          kr: "그게 어떻게 돼, 오늘 내가 사기로 했잖아.",
          note: "那怎么行: 그럼 안 되지 / 说好: 약속하다, 정하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "那这样吧，饭钱你出，咖啡我来买。",
          pinyin: "Nà zhèyàng ba, fànqián nǐ chū, kāfēi wǒ lái mǎi.",
          kr: "그럼 이렇게 하자, 밥값은 네가 내고 커피는 내가 살게.",
          note: "饭钱(fànqián): 밥값 / 出(chū): 내다, 지불하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "行，那就这么定了。",
          pinyin: "Xíng, nà jiù zhème dìng le.",
          kr: "좋아, 그럼 그렇게 정하자.",
          note: "定(dìng): 정하다, 결정하다"
        }
      ]
    },
    {
      day: 63,
      title: "能帮我收个快递吗？ (택배 하나만 대신 받아줄래?)",
      youtubeTime: "12:30",
      seconds: 750,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你现在在宿舍吗？能帮我收个快递吗？",
          pinyin: "Nǐ xiànzài zài sùshè ma? Néng bāng wǒ shōu gè kuàidì ma?",
          kr: "너 지금 기숙사에 있어? 택배 하나만 대신 받아줄 수 있어?",
          note: "宿舍(sùshè): 기숙사 / 收(shōu): 받다, 수령하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我在呢，放在哪儿？",
          pinyin: "Wǒ zài ne, fàng zài nǎr?",
          kr: "나 있어, 어디에 둘까?",
          note: "放(fàng): 놓다, 두다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "就放我桌子上就行，谢谢啦！",
          pinyin: "Jiù fàng wǒ zhuōzi shang jiù xíng, xièxie la!",
          kr: "그냥 내 책상 위에 두면 돼, 고마워!",
          note: "桌子(zhuōzi): 책상 / 就行: ~면 된다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "客气啥，顺手的事儿。",
          pinyin: "Kèqi shá, shùnshǒu de shìr.",
          kr: "뭘 사양해, 지나가는 길에 하는 일인데.",
          note: "客气啥: 예의 차릴 게 뭐 있어 / 顺手: 손쉬운 김에 하는"
        }
      ]
    },
    {
      day: 64,
      title: "你最近在追什么剧？ (요즘 무슨 드라마 봐?)",
      youtubeTime: "18:45",
      seconds: 1125,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你最近在追什么电视剧吗？",
          pinyin: "Nǐ zuìjìn zài zhuī shénme diànshìjù ma?",
          kr: "너 요즘 챙겨보는 드라마 있어?",
          note: "追剧(zhuī jù): 드라마를 정주행하다, 챙겨보다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "在看一部古装剧，剧情特别精彩。",
          pinyin: "Zài kàn yí bù gǔzhuāngjù, jùqíng tèbié jīngcǎi.",
          kr: "사극 하나 보고 있는데, 스토리 전개가 진짜 흥미진진해.",
          note: "古装剧(gǔzhuāngjù): 사극 드라마 / 精彩(jīngcǎi): 멋지다, 훌륭하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "男女主角是谁演的？",
          pinyin: "Nán nǚ zhǔjué shì shéi yǎn de?",
          kr: "남녀 주인공은 누가 연기했어?",
          note: "主角(zhǔjué): 주인공 / 演(yǎn): 연기하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "都是演技派，越看越上头。",
          pinyin: "Dōu shì yǎnjìpài, yuè kàn yuè shàngtóu.",
          kr: "다 연기파 배우들이라, 볼수록 푹 빠져들어.",
          note: "演技派(yǎnjìpài): 연기파 / 越~越...: ~할수록 더 ...하다 / 上头: 중독되다"
        }
      ]
    },
    {
      day: 65,
      title: "你的行李超重了 (짐 무게가 초과되었습니다)",
      youtubeTime: "25:00",
      seconds: 1500,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "先生，您的托运行李超重了两公斤。",
          pinyin: "Xiānsheng, nín de tuōyùn xíngli chāozhòng le liǎng gōngjīn.",
          kr: "손님, 위탁 수하물 무게가 2kg 초과되었습니다.",
          note: "托运(tuōyùn): 탁송하다, 부치다 / 超重(chāozhòng): 초과 중량"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "那需要交超重费吗？",
          pinyin: "Nà xūyào jiāo chāozhòngfèi ma?",
          kr: "그럼 초과 요금을 내야 하나요?",
          note: "交(jiāo): 내다, 납부하다 / 超重费: 초과 수하물 요금"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "您可以拿出来一些随身携带。",
          pinyin: "Nín kěyǐ ná chūlái yìxiē suíshēn xiédài.",
          kr: "일부를 꺼내서 직접 기내로 휴대하셔도 됩니다.",
          note: "随身携带(suíshēn xiédài): 몸에 휴대하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，我把这件厚外套拿出来。",
          pinyin: "Hǎode, wǒ bǎ zhè jiàn hòu wàitào ná chūlái.",
          kr: "알겠습니다, 이 두꺼운 외투를 꺼낼게요.",
          note: "厚(hòu): 두껍다 / 外套(wàitào): 외투, 겉옷"
        }
      ]
    },
    {
      day: 66,
      title: "我想要靠窗的座位 (창가 쪽 좌석으로 부탁해요)",
      youtubeTime: "31:15",
      seconds: 1875,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "请问您想要靠窗还是靠过道的座位？",
          pinyin: "Qǐngwèn nín xiǎng yào kàochuāng háishi kào guòdào de zuòwèi?",
          kr: "창가 쪽 좌석을 원하세요, 아니면 통로 쪽 좌석을 원하세요?",
          note: "靠窗(kàochuāng): 창가에 붙은 / 过道(guòdào): 통로 / 座位(zuòwèi): 좌석"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "如果有的话，我想要靠窗的。",
          pinyin: "Rúguǒ yǒu dehuà, wǒ xiǎng yào kàochuāng de.",
          kr: "자리가 있다면 창가 쪽으로 부탁드립니다.",
          note: "如果~的话: 만약 ~라면"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "好的，给您安排了15A，这是登机牌。",
          pinyin: "Hǎode, gěi nín ānpái le shíwǔ A, zhè shì dēngjīpái.",
          kr: "네, 15A로 배정해 드렸습니다. 여기 탑승권입니다.",
          note: "登机牌(dēngjīpái): 탑승권"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "请问在几号登机口登机？",
          pinyin: "Qǐngwèn zài jǐ hào dēngjīkǒu dēngjī?",
          kr: "몇 번 탑승구에서 탑승하나요?",
          note: "登机口(dēngjīkǒu): 탑승구(게이트)"
        }
      ]
    },
    {
      day: 67,
      title: "能帮我拍个Vlog吗？ (브이로그 영상 좀 찍어줄래?)",
      youtubeTime: "37:30",
      seconds: 2250,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这里的风景太美了，能帮我拍段视频吗？",
          pinyin: "Zhèlǐ de fēngjǐng tài měi le, néng bāng wǒ pāi duàn shìpín ma?",
          kr: "여기 풍경 너무 예쁘다, 나 영상 하나만 찍어줄 수 있어?",
          note: "风景(fēngjǐng): 풍경 / 视频(shìpín): 동영상 / 段(duàn): 구간·토막 세는 양사"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好啊，横屏拍还是竖屏拍？",
          pinyin: "Hǎo a, héngpíng pāi háishi shùpíng pāi?",
          kr: "좋지, 가로 화면으로 찍을까 세로 화면으로 찍을까?",
          note: "横屏(héngpíng): 가로 화면 / 竖屏(shùpíng): 세로 화면"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "竖屏吧，我想发到社交平台上。",
          pinyin: "Shùpíng ba, wǒ xiǎng fā dào shèjiāo píngtái shang.",
          kr: "세로로 찍어줘, SNS에 올리고 싶거든.",
          note: "社交平台: 소셜 미디어(SNS) / 发(fā): 올리다, 발행하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "没问题，你走过去，我跟着你拍。",
          pinyin: "Méi wèntí, nǐ zǒu guòqu, wǒ gēn zhe nǐ pāi.",
          kr: "알겠어, 저쪽으로 걸어가 봐, 내가 따라가면서 찍을게.",
          note: "跟着(gēnzhe): 뒤따라가며"
        }
      ]
    },
    {
      day: 68,
      title: "你平时几点睡觉？ (너 평소 몇 시에 자?)",
      youtubeTime: "43:45",
      seconds: 2625,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你黑眼圈怎么这么重？昨晚没睡好吗？",
          pinyin: "Nǐ hēiyǎnquān zěnme zhème zhòng? Zuówǎn méi shuì hǎo ma?",
          kr: "너 다크서클이 왜 이렇게 짙어? 어젯밤에 잘 못 잤어?",
          note: "黑眼圈(hēiyǎnquān): 다크서클 / 昨晚(zuówǎn): 어젯밤"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "熬夜刷手机，不知不觉就两点了。",
          pinyin: "Áoyè shuā shǒujī, bùzhībùjué jiù liǎng diǎn le.",
          kr: "밤새 폰 보다가 어느새 새벽 2시가 됐더라고.",
          note: "熬夜(áoyè): 밤을 새우다 / 刷手机: 스마트폰을 스크롤하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "长期熬夜对身体太不好了。",
          pinyin: "Chángqī áoyè duì shēntǐ tài bù hǎo le.",
          kr: "장기적으로 밤새우면 몸에 진짜 안 좋아.",
          note: "长期(chángqī): 장기적 / 对~不好: ~에 안 좋다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我也知道，今晚一定早点儿睡。",
          pinyin: "Wǒ yě zhīdào, jīnwǎn yídìng zǎo diǎnr shuì.",
          kr: "나도 알아, 오늘 밤은 꼭 일찍 잘 거야.",
          note: "早点儿: 조금 일찍"
        }
      ]
    },
    {
      day: 69,
      title: "你能帮我看看这封邮件吗？ (이 메일 좀 봐줄 수 있어?)",
      youtubeTime: "50:00",
      seconds: 3000,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "我写了一封中文邮件，能帮我看看吗？",
          pinyin: "Wǒ xiě le yì fēng Zhōngwén yóujiàn, néng bāng wǒ kànkan ma?",
          kr: "중국어 메일을 한 통 썼는데, 좀 봐줄 수 있어?",
          note: "封(fēng): 편지·메일 세는 양사 / 邮件(yóujiàn): 이메일"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "拿来我看看，发给客户的吗？",
          pinyin: "Nálái wǒ kànkan, fā gěi kèhù de ma?",
          kr: "가져와 봐 내가 볼게, 고객사한테 보내는 거야?",
          note: "客户(kèhù): 고객, 바이어"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "对，我怕语法表达不够地道。",
          pinyin: "Duì, wǒ pà yǔfǎ biǎodá bú gòu dìdao.",
          kr: "응, 문법 표현이 현지식으로 자연스럽지 못할까 봐 걱정돼서.",
          note: "表达(biǎodá): 표현 / 地道(dìdao): 정통의, 자연스러운"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "写得挺清楚的，改两处用词就更完美了。",
          pinyin: "Xiě de tǐng qīngchu de, gǎi liǎng chù yòngcí jiù gèng wánměi le.",
          kr: "충분히 명확하게 잘 썼어, 어휘 두 군데만 고치면 훨씬 완벽하겠다.",
          note: "清楚(qīngchu): 분명하다 / 改(gǎi): 고치다 / 完美(wánměi): 완벽하다"
        }
      ]
    },
    {
      day: 70,
      title: "祝你一路顺风！ (가는 길 내내 평안하길!)",
      youtubeTime: "56:15",
      seconds: 3375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "时间过得真快，你明天就要回国了。",
          pinyin: "Shíjiān guò de zhēn kuài, nǐ míngtiān jiù yào huíguó le.",
          kr: "시간 진짜 빠르다, 너 내일이면 귀국이네.",
          note: "就要~了: 곧 ~하려고 하다 / 回国(huíguó): 귀국하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "这段时间多亏了你的照顾。",
          pinyin: "Zhè duàn shíjiān duōkuī le nǐ de zhàogu.",
          kr: "그동안 너의 보살핌 덕을 많이 봤어.",
          note: "多亏(duōkuī): 덕택에 / 照顾(zhàogu): 돌봄, 배려"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "到了之后别忘了发个信息报平安。",
          pinyin: "Dào le zhīhòu bié wàng le fā gè xìnxī bào píng'ān.",
          kr: "도착한 뒤에 잘 도착했다고 문자 남기는 거 잊지 마.",
          note: "报平安(bào píng'ān): 무사함을 알리다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "放心吧，祝你一切顺利，常联系！",
          pinyin: "Fàngxīn ba, zhù nǐ yíqiè shùnlì, cháng liánxì!",
          kr: "걱정 마, 모든 일이 다 잘 풀리길 바라고 자주 연락하자!",
          note: "放心(fàngxīn): 안심하다 / 顺风 / 顺利(shùnlì): 순조롭다 / 常联系: 자주 연락하자"
        }
      ]
    },
    {
      day: 71,
      title: "你平时怎么理财？ (평소 재테크 어떻게 해?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你平时有什么理财的习惯吗？",
          pinyin: "Nǐ píngshí yǒu shénme lǐcái de xíguàn ma?",
          kr: "너 평소에 재테크하는 습관 같은 거 있어?",
          note: "理财(lǐcái): 재테크하다, 재정을 관리하다 / 习惯(xíguàn): 습관"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我一般每个月定投一部分指数基金。",
          pinyin: "Wǒ yìbān měi gè yuè dìngtóu yíbùfen zhǐshù jījīn.",
          kr: "난 보통 매달 일정 부분을 인덱스 펀드에 적립식 투자해.",
          note: "定投(dìngtóu): 정기 적립식 투자 / 指数基金(zhǐshù jījīn): 인덱스 펀드"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "收益怎么样？风险大不大？",
          pinyin: "Shōuyì zěnmeyàng? Fēngxiǎn dà bu dà?",
          kr: "수익은 어때? 위험성이 크지는 않아?",
          note: "收益(shōuyì): 수익 / 风险(fēngxiǎn): 위험, 리스크"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "长期来看挺稳健的，比存银行强。",
          pinyin: "Chángqī lái kàn tǐng wěnjiàn de, bǐ cún yínháng qiáng.",
          kr: "장기적으로 보면 꽤 안정적이라 은행에 저금하는 것보다 나아.",
          note: "稳健(wěnjiàn): 안정적이다 / 存银行: 은행에 예금하다 / 强(qiáng): 낫다"
        }
      ]
    },
    {
      day: 72,
      title: "今天开会讨论了什么？ (오늘 회의에서 뭐 논의했어?)",
      youtubeTime: "06:15",
      seconds: 375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "上午的部门会议主要讨论了什么？",
          pinyin: "Shàngwǔ de bùmén huìyì zhǔyào tǎolùn le shénme?",
          kr: "오전 부서 회의에서 주로 뭘 논의했어?",
          note: "部门(bùmén): 부서 / 会议(huìyì): 회의 / 讨论(tǎolùn): 토론하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "主要是总结上个月的业绩和下阶段计划。",
          pinyin: "Zhǔyào shì zǒngjié shàng gè yuè de yèjì hé xià jiēduàn jìhuà.",
          kr: "주로 지난달 실적 결산이랑 다음 단계 계획이었어.",
          note: "总结(zǒngjié): 결산하다, 총괄하다 / 业绩(yèjì): 실적 / 阶段(jiēduàn): 단계"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "领导对我们的方案满意吗？",
          pinyin: "Lǐngdǎo duì wǒmen de fāng'àn mǎnyì ma?",
          kr: "팀장님(상사)께서 우리 기획안에 만족해하셔?",
          note: "领导(lǐngdǎo): 상사, 리더 / 方案(fāng'àn): 방안, 기획안"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "大体上很认可，只提出了一些细节修改。",
          pinyin: "Dàtǐ shang hěn rènkě, zhǐ tíchū le yìxiē xìjié xiūgǎi.",
          kr: "대체로 인정해 주셨고, 몇 가지 세부 수정 사항만 제시하셨어.",
          note: "大体(dàtǐ): 대체로 / 认可(rènkě): 인정하다 / 细节(xìjié): 세부 사항"
        }
      ]
    },
    {
      day: 73,
      title: "我想办一张健身年卡 (헬스장 연간 회원권 끊으려 해)",
      youtubeTime: "12:30",
      seconds: 750,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你好，我想咨询一下办健身卡的事宜。",
          pinyin: "Nǐ hǎo, wǒ xiǎng zīxún yíxià bàn jiànshēnkǎ de shìyí.",
          kr: "안녕하세요, 헬스 회원권 등록 관련해서 문의 좀 드리려고요.",
          note: "咨询(zīxún): 상담하다, 문의하다 / 健身卡: 헬스 회원권"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我们现在年卡有优惠，还送五节私教课。",
          pinyin: "Wǒmen xiànzài niánkǎ yǒu yōuhuì, hái sòng wǔ jié sījiàokè.",
          kr: "지금 연간권 할인 행사 중이고, PT 5회도 무료로 드려요.",
          note: "优惠(yōuhuì): 할인 / 私教课(sījiàokè): PT(개인 트레이닝 수업)"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "设施都可以免费使用吗？",
          pinyin: "Shèshī dōu kěyǐ miǎnfèi shǐyòng ma?",
          kr: "시설은 모두 무료로 이용 가능한가요?",
          note: "设施(shèshī): 시설 / 免费(miǎnfèi): 무료 / 使用(shǐyòng): 사용하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "器械区、淋浴间和游泳池都是全包的。",
          pinyin: "Qìxièqū, línyùjiān hé yóuyǒngchí dōu shì quán bāo de.",
          kr: "기구 존, 샤워실, 수영장 모두 다 포함되어 있습니다.",
          note: "器械(qìxiè): 기구 / 淋浴间: 샤워실 / 全包: 전부 포함"
        }
      ]
    },
    {
      day: 74,
      title: "我的电脑死机了 (내 컴퓨터 멈췄어/다운됐어)",
      youtubeTime: "18:45",
      seconds: 1125,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "哎呀，我的电脑突然死机了！",
          pinyin: "Āiyà, wǒ de diànnǎo tūrán sǐjī le!",
          kr: "아이쿠, 내 컴퓨터가 갑자기 멈췄어!",
          note: "突然(tūrán): 갑자기 / 死机(sǐjī): 다운되다, 먹통이 되다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "文件保存了吗？先别急着拔电源。",
          pinyin: "Wénjiàn bǎocún le ma? Xiān bié jí zhe bá diànyuán.",
          kr: "파일 저장은 했어? 우선 성급하게 전원 뽑지 마.",
          note: "保存(bǎocún): 저장하다 / 拔(bá): 뽑다 / 电源(diànyuán): 전원"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "刚好写到最后一部分，还没来得及存呢。",
          pinyin: "Gānghǎo xiě dào zuìhòu yí bùfen, hái méi láidejí cún ne.",
          kr: "딱 마지막 부분 쓰던 참인데 아직 미처 저장을 못 했어.",
          note: "来得及(láidejí): 미처 ~할 틈이 있다 / 来不及 / 还没来得及"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "先等两分钟看看，软件通常有自动备份。",
          pinyin: "Xiān děng liǎng fēnzhōng kànkan, ruǎnjiàn tōngcháng yǒu zìdòng bèifèn.",
          kr: "우선 2분 정도 기다려보자, 프로그램에 보통 자동 백업이 있어.",
          note: "软件(ruǎnjiàn): 소프트웨어 / 备份(bèifèn): 백업"
        }
      ]
    },
    {
      day: 75,
      title: "你平时自己做饭吗？ (너 평소에 직접 요리해 먹어?)",
      youtubeTime: "25:00",
      seconds: 1500,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你下班后一般自己做饭还是点外卖？",
          pinyin: "Nǐ xiàbān hòu yìbān zìjǐ zuòfàn háishi diǎn wàimài?",
          kr: "너 퇴근하고 보통 직접 요리해, 아니면 배달음식 시켜?",
          note: "做饭(zuòfàn): 밥을 짓다, 요리하다 / 点外卖: 배달을 시키다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "工作日点外卖比较多，周末自己做。",
          pinyin: "Gōngzuòrì diǎn wàimài bǐjiào duō, zhōumò zìjǐ zuò.",
          kr: "평일엔 배달을 주로 시켜 먹고, 주말엔 직접 해 먹어.",
          note: "工作日(gōngzuòrì): 평일, 근무일 / 比较(bǐjiào): 비교적"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "做饭其实也是一种很好的放松方式。",
          pinyin: "Zuòfàn qíshí yě shì yì zhǒng hěn hǎo de fàngsōng fāngshì.",
          kr: "요리하는 것도 사실 아주 좋은 힐링(휴식) 방식이지.",
          note: "其实(qíshí): 사실 / 放松(fàngsōng): 긴장을 풀다, 릴랙스하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "确实，看着食材变成美食很有成就感。",
          pinyin: "Quèshí, kàn zhe shícái biàn chéng měishí hěn yǒu chéngjiùgǎn.",
          kr: "맞아, 식재료가 맛있는 음식으로 바뀌는 걸 보면 되게 뿌듯해.",
          note: "食材(shícái): 식재료 / 成就感(chéngjiùgǎn): 성취감"
        }
      ]
    },
    {
      day: 76,
      title: "你能帮我带一份咖啡吗？ (커피 한 잔만 사다 줄래?)",
      youtubeTime: "31:15",
      seconds: 1875,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你去楼下咖啡厅吗？能帮我带一杯吗？",
          pinyin: "Nǐ qù lóuxià kāfēitīng ma? Néng bāng wǒ dài yì bēi ma?",
          kr: "너 1층(아래층) 카페 가니? 나 한 잔만 사다 줄 수 있어?",
          note: "楼下(lóuxià): 아래층 / 带(dài): 사서 챙겨오다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "没问题，你想喝什么口味的？",
          pinyin: "Méi wèntí, nǐ xiǎng hē shénme kǒuwèi de?",
          kr: "문제없지, 어떤 맛(종류)으로 마실래?",
          note: "口味(kǒuwèi): 맛, 취향"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "一杯冰美式，不要加糖，谢谢！",
          pinyin: "Yì bēi bīng měishì, bú yào jiā táng, xièxie!",
          kr: "아이스 아메리카노 한 잔, 시럽(설탕) 빼고 부탁해. 고마워!",
          note: "冰美式(bīng měishì): 아이스 아메리카노"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "收到，马上给你带上来。",
          pinyin: "Shōudào, mǎshàng gěi nǐ dài shànglái.",
          kr: "접수 완료, 바로 사 들고 올라올게.",
          note: "收到(shōudào): 확인했다 / 马上(mǎshàng): 곧, 바로"
        }
      ]
    },
    {
      day: 77,
      title: "这个周末你打算回老家吗？ (이번 주말 고향 갈 거야?)",
      youtubeTime: "37:30",
      seconds: 2250,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这周末有三天小长假，你打算回老家吗？",
          pinyin: "Zhè zhōumò yǒu sān tiān xiǎochángjià, nǐ dǎsuàn huí lǎojiā ma?",
          kr: "이번 주말 사흘 연휴인데, 고향 갈 계획이야?",
          note: "小长假: 징검다리 연휴 / 老家(lǎojiā): 고향"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "车票太难抢了，我打算就在本地休息。",
          pinyin: "Chēpiào tài nán qiǎng le, wǒ dǎsuàn jiù zài běndì xiūxi.",
          kr: "기차표 예매가 너무 치열해서 그냥 여기(현지)서 쉴 생각이야.",
          note: "抢(qiǎng): 빼앗다, 광클/선착순 예매하다 / 本地: 현지, 이곳"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "在周边自驾游也是个不错的选择。",
          pinyin: "Zài zhōubiān zìjiàyóu yě shì gè búcuò de xuǎnzé.",
          kr: "근교로 드라이브 여행 다녀오는 것도 괜찮은 선택이지.",
          note: "周边(zhōubiān): 주변, 근교 / 自驾游(zìjiàyóu): 드라이브/렌터카 여행"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "对，我正打算去附近的森林公园露营呢。",
          pinyin: "Duì, wǒ zhèng dǎsuàn qù fùjìn de sēnlín gōngyuán lùyíng ne.",
          kr: "맞아, 마침 근처 삼림공원으로 캠핑 갈까 생각 중이었어.",
          note: "附近(fùjìn): 부근, 근처 / 露营(lùyíng): 캠핑하다"
        }
      ]
    },
    {
      day: 78,
      title: "你能帮我把这个快递寄了吗？ (이 택배 좀 발송해 줄래?)",
      youtubeTime: "43:45",
      seconds: 2625,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "师傅，我想寄一个加急件到上海。",
          pinyin: "Shīfu, wǒ xiǎng jì yí gè jiājíjiàn dào Shànghǎi.",
          kr: "기사님, 상하이로 특송(급행) 택배 하나 보내고 싶은데요.",
          note: "师傅(shīfu): 기사님 / 寄(jì): 부치다 / 加急件: 급행 우편/택배"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，里面有易碎品或者贵重物品吗？",
          pinyin: "Hǎode, lǐmiàn yǒu yìsuìpǐn huòzhě guìzhòng wùpǐn ma?",
          kr: "네, 내용물 중에 깨지기 쉬운 물건이나 귀중품이 있나요?",
          note: "易碎品(yìsuìpǐn): 파손주의품 / 贵重物品: 귀중품"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "都是一些文件和合同，没有易碎品。",
          pinyin: "Dōu shì yìxiē wénjiàn hé hétong, méiyǒu yìsuìpǐn.",
          kr: "전부 서류랑 계약서들이라 깨지는 물건은 없어요.",
          note: "合同(hétong): 계약서"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "顺丰特快明天上午就能送达。",
          pinyin: "Shùnfēng tèkuài míngtiān shàngwǔ jiù néng sòngdá.",
          kr: "순펑 익스프레스 특송이라 내일 오전이면 배송 완료됩니다.",
          note: "送达(sòngdá): 도착하다, 배달 완료되다"
        }
      ]
    },
    {
      day: 79,
      title: "你最近睡眠质量怎么样？ (요즘 잠은 잘 자?)",
      youtubeTime: "50:00",
      seconds: 3000,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你看起来很疲惫，最近睡眠怎么样？",
          pinyin: "Nǐ kàn qǐlái hěn píbèi, zuìjìn shuìmián zěnmeyàng?",
          kr: "너 엄청 피곤해 보여, 요즘 잠은 좀 어때?",
          note: "疲惫(píbèi): 피곤하다, 지치다 / 睡眠(shuìmián): 수면"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "老是失眠，躺在床上很久都睡不着。",
          pinyin: "Lǎoshì shīmián, tǎng zài chuáng shang hěn jiǔ dōu shuìbuzháo.",
          kr: "자꾸 불면증이 있어서, 침대에 오래 누워 있어도 잠이 안 와.",
          note: "老是(lǎoshì): 늘, 자꾸 / 失眠(shīmián): 불면증 / 睡不着: 잠들지 못하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "睡前喝杯温牛奶或者泡个热水澡吧。",
          pinyin: "Shuìqián hē bēi wēn niúnǎi huòzhě pào gè rèshuǐzǎo ba.",
          kr: "자기 전에 따뜻한 우유 한 잔 마시거나 반신욕을 해봐.",
          note: "温(wēn): 미지근하다, 따뜻하다 / 泡澡(pào zǎo): 목욕/입욕하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，今晚我试一下，希望能睡个好觉。",
          pinyin: "Hǎode, jīnwǎn wǒ shì yíxià, xīwàng néng shuì gè hǎo jiào.",
          kr: "알겠어, 오늘 밤 해볼게. 푹 좀 잘 수 있으면 좋겠다.",
          note: "睡个好觉: 푹 자다"
        }
      ]
    },
    {
      day: 80,
      title: "祝贺项目圆满成功！ (프로젝트 성공을 축하합니다!)",
      youtubeTime: "56:15",
      seconds: 3375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "大家辛苦了！祝贺我们的项目圆满成功！",
          pinyin: "Dàjiā xīnkǔ le! Zhùhè wǒmen de xiàngmù yuánmǎn chénggōng!",
          kr: "모두 고생 많으셨습니다! 프로젝트의 완벽한 성공을 축하합니다!",
          note: "祝贺(zhùhè): 축하하다 / 项目(xiàngmù): 프로젝트 / 圆满(yuánmǎn): 원만하다, 완벽하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "这几个月没白加班，太有成就感了！",
          pinyin: "Zhè jǐ gè yuè méi bái jiābān, tài yǒu chéngjiùgǎn le!",
          kr: "지난 몇 달간 헛되이 야근한 게 아니었네요, 정말 뿌듯합니다!",
          note: "白(bái): 헛되이 / 加班(jiābān): 야근하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "今晚公司组织庆功宴，大家放开吃喝！",
          pinyin: "Jīnwǎn gōngsī zǔzhī qìnggōngyàn, dàjiā fàngkāi chī hē!",
          kr: "오늘 밤 회사에서 쫑파티(축하연)를 열어주니 다들 마음껏 드세요!",
          note: "组织(zǔzhī): 주관하다 / 庆功宴(qìnggōngyàn): 성공 축하 회식 / 放开: 마음껏"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "太棒了，终于可以好好放松一下了。",
          pinyin: "Tài bàng le, zhōngyú kěyǐ hǎohāo fàngsōng yíxià le.",
          kr: "최고예요, 드디어 푹 쉴 수 있겠네요.",
          note: "终于(zhōngyú): 마침내, 드디어"
        }
      ]
    },
    {
      day: 81,
      title: "你平时有什么阅读习惯？ (평소 독서 습관이 있어?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你平时喜欢看纸质书还是电子书？",
          pinyin: "Nǐ píngshí xǐhuan kàn zhǐzhìshū háishi diànzǐshū?",
          kr: "너 평소에 종이책 좋아해, 아니면 전자책 좋아해?",
          note: "纸质书(zhǐzhìshū): 종이책 / 电子书(diànzǐshū): 전자책"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "出门看电子书方便，在家还是喜欢翻纸质书。",
          pinyin: "Chūmén kàn diànzǐshū fāngbiàn, zài jiā háishi xǐhuan fān zhǐzhìshū.",
          kr: "외출할 땐 전자책이 편하고, 집에선 그래도 종이책 넘기는 게 좋아.",
          note: "出门(chūmén): 외출하다 / 翻(fān): 넘기다, 뒤적이다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "纸质书确实更有读书的感觉。",
          pinyin: "Zhǐzhìshū quèshí gèng yǒu dúshū de gǎnjué.",
          kr: "종이책이 확실히 책 읽는 느낌이 더 나지.",
          note: "读书(dúshū): 독서하다 / 感觉(gǎnjué): 느낌"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "是啊，书香和纸张的触感让人很安心。",
          pinyin: "Shì a, shūxiāng hé zhǐzhāng de chùgǎn ràng rén hěn ānxīn.",
          kr: "맞아, 책 냄새랑 종이의 촉감이 사람을 편안하게 해.",
          note: "书香(shūxiāng): 책 향기 / 触感(chùgǎn): 촉감 / 安心(ānxīn): 안심하다"
        }
      ]
    },
    {
      day: 82,
      title: "这台机器怎么操作？ (이 기계 어떻게 조작해?)",
      youtubeTime: "06:15",
      seconds: 375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "请问这台自助打印机怎么操作？",
          pinyin: "Qǐngwèn zhè tái zìzhù dǎyìnjī zěnme cāozuò?",
          kr: "말씀 좀 묻겠습니다, 이 무인 복합기 어떻게 조작하나요?",
          note: "自助(zìzhù): 셀프, 무인 / 打印机(dǎyìnjī): 프린터 / 操作(cāozuò): 조작하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "先扫描屏幕上的二维码，上传文件就行。",
          pinyin: "Xiān sǎomiáo píngmù shang de èrwéimǎ, shàngchuán wénjiàn jiù xíng.",
          kr: "먼저 화면의 QR코드를 스캔하시고 파일 업로드하시면 돼요.",
          note: "扫描(sǎomiáo): 스캔하다 / 二维码(èrwéimǎ): QR코드 / 上传(shàngchuán): 업로드하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "支持手机移动支付吗？",
          pinyin: "Zhīchí shǒujī yídòng zhīfù ma?",
          kr: "모바일 페이 결제도 지원하나요?",
          note: "支持(zhīchí): 지원하다 / 移动支付(yídòng zhīfù): 모바일 결제"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "支持的，微信和支付宝都可以。",
          pinyin: "Zhīchí de, Wēixìn hé Zhīfùbǎo dōu kěyǐ.",
          kr: "지원합니다, 위챗페이랑 알리페이 둘 다 가능해요.",
          note: "微信(Wēixìn): 위챗 / 支付宝(Zhīfùbǎo): 알리페이"
        }
      ]
    },
    {
      day: 83,
      title: "这家咖啡厅环境真不错 (이 카페 분위기 진짜 괜찮다)",
      youtubeTime: "12:30",
      seconds: 750,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这家咖啡厅环境真不错，很适合看书。",
          pinyin: "Zhè jiā kāfēitīng huánjìng zhēn búcuò, hěn shìhé kànshū.",
          kr: "이 카페 분위기 진짜 좋다, 책 읽기에 딱 알맞아.",
          note: "环境(huánjìng): 환경, 분위기 / 适合(shìhé): 적합하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "音乐放得很轻柔，光线也很舒服。",
          pinyin: "Yīnyuè fàng de hěn qīngróu, guāngxiàn yě hěn shūfu.",
          kr: "음악도 은은하게 나오고 조명도 아주 편안해.",
          note: "放(fàng): 틀다 / 轻柔(qīngróu): 부드럽다, 은은하다 / 光线(guāngxiàn): 채광, 빛"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "点一杯招牌拿铁慢慢品尝吧。",
          pinyin: "Diǎn yì bēi zhāopái nátiě mànmàn pǐncháng ba.",
          kr: "대표 시그니처 라떼 한 잔 시켜서 천천히 음미하자.",
          note: "招牌(zhāopái): 대표, 간판 / 拿铁(nátiě): 라떼 / 品尝(pǐncháng): 맛보다, 음미하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "再配一块提拉米苏蛋糕就完美了。",
          pinyin: "Zài pèi yí kuài tílāmǐsū dàngāo jiù wánměi le.",
          kr: "거기에 티라미수 케이크 한 조각 곁들이면 완벽하겠네.",
          note: "配(pèi): 곁들이다 / 提拉米苏(tílāmǐsū): 티라미수 / 蛋糕(dàngāo): 케이크"
        }
      ]
    },
    {
      day: 84,
      title: "你能帮我收一下衣服吗？ (빨래 좀 걷어줄래?)",
      youtubeTime: "18:45",
      seconds: 1125,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "外面好像要下雨了，能帮我收一下衣服吗？",
          pinyin: "Wàimiàn hǎoxiàng yào xiàyǔ le, néng bāng wǒ shōu yíxià yīfu ma?",
          kr: "밖에 비 올 것 같은데, 빨래(옷) 좀 걷어줄 수 있어?",
          note: "外面(wàimiàn): 밖 / 收衣服: 빨래를 걷다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，阳台上的都收进来了吗？",
          pinyin: "Hǎode, yángtái shang de dōu shōu jìnlái le ma?",
          kr: "알겠어, 베란다에 있는 거 다 들여놓을까?",
          note: "阳台(yángtái): 베란다, 발코니 / 收进来: 거둬들이다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "对，顺便把窗户也关上吧。",
          pinyin: "Duì, shùnbiàn bǎ chuānghu yě guānshang ba.",
          kr: "응, 하는 김에 창문도 같이 닫아줘.",
          note: "顺便(shùnbiàn): ~하는 김에 / 窗户(chuānghu): 창문 / 关上(guānshang): 닫다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "放心吧，都已经弄好了。",
          pinyin: "Fàngxīn ba, dōu yǐjīng nòng hǎo le.",
          kr: "걱정 마, 이미 다 정리해 뒀어.",
          note: "弄好(nòng hǎo): 다 해놓다"
        }
      ]
    },
    {
      day: 85,
      title: "你习惯这里的气候吗？ (여기 기후엔 적응했어?)",
      youtubeTime: "25:00",
      seconds: 1500,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你来北方生活，习惯这里的气候吗？",
          pinyin: "Nǐ lái běifāng shēnghuó, xíguàn zhèlǐ de qìhòu ma?",
          kr: "북방에 와서 사는데, 여기 기후는 좀 적응했어?",
          note: "北方(běifāng): 북방 / 气候(qìhòu): 기후"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "冬天屋里有暖气挺舒服的，就是太干燥了。",
          pinyin: "Dōngtiān wūli yǒu nuǎnqì tǐng shūfu de, jiùshì tài gānzào le.",
          kr: "겨울에 실내 난방이 돼서 편하긴 한데, 너무 건조해.",
          note: "暖气(nuǎnqì): 난방, 라디에이터 / 干燥(gānzào): 건조하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "房间里放个加湿器会好很多。",
          pinyin: "Fángjiān li fàng gè jiāshīqì huì hǎo hěn duō.",
          kr: "방에 가습기 하나 놔두면 훨씬 나아질 거야.",
          note: "加湿器(jiāshīqì): 가습기"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "对，我还得经常多喝水才行。",
          pinyin: "Duì, wǒ hái děi jīngcháng duō hē shuǐ cái xíng.",
          kr: "맞아, 물도 수시로 자주 마셔야겠어.",
          note: "才行: ~해야 비로소 된다"
        }
      ]
    },
    {
      day: 86,
      title: "今天工作效率真高！ (오늘 일 처리 능률 진짜 높다!)",
      youtubeTime: "31:15",
      seconds: 1875,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你今天怎么这么快就完成工作了？",
          pinyin: "Nǐ jīntiān zěnme zhème kuài jiù wánchéng gōngzuò le?",
          kr: "너 오늘 웬일로 이렇게 빨리 일을 다 끝냈어?",
          note: "完成(wánchéng): 완성하다, 끝마치다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "今天状态好，工作效率特别高。",
          pinyin: "Jīntiān zhuàngtài hǎo, gōngzuò xiàolǜ tèbié gāo.",
          kr: "오늘 컨디션이 좋아서 업무 능률이 아주 높았어.",
          note: "状态(zhuàngtài): 컨디션, 상태 / 效率(xiàolǜ): 효율, 능률"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "那今晚可以准时下班了吧？",
          pinyin: "Nà jīnwǎn kěyǐ zhǔnshí xiàbān le ba?",
          kr: "그럼 오늘 칼퇴(정시 퇴근)할 수 있겠네?",
          note: "准时(zhǔnshí): 정시에, 제시간에 / 下班(xiàbān): 퇴근하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "必须的，下班后一起去吃火锅！",
          pinyin: "Bìxū de, xiàbān hòu yìqǐ qù chī huǒguō!",
          kr: "당연하지, 퇴근하고 같이 훠궈 먹으러 가자!",
          note: "火锅(huǒguō): 훠궈(샤부샤부)"
        }
      ]
    },
    {
      day: 87,
      title: "你的中文发音真标准 (중국어 발음이 정말 정확해)",
      youtubeTime: "37:30",
      seconds: 2250,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你的中文发音越来越标准了，怎么练的？",
          pinyin: "Nǐ de Zhōngwén fāyīn yuèláiyuè biāozhǔn le, zěnme liàn de?",
          kr: "너 중국어 발음이 갈수록 정확해지네, 어떻게 연습했어?",
          note: "发音(fāyīn): 발음 / 标准(biāozhǔn): 표준적이다, 정확하다 / 练(liàn): 연습하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我每天跟着录音大声跟读半小时。",
          pinyin: "Wǒ měitiān gēnzhe lùyīn dàshēng gēndú bàn xiǎoshí.",
          kr: "나 매일 녹음 들으면서 30분씩 소리 내어 섀도잉(따라 읽기)하거든.",
          note: "录音(lùyīn): 녹음 / 跟读(gēndú): 따라 읽다 / 半小时: 30분"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "声调掌握得真好，听起来很自然。",
          pinyin: "Shēngdiào zhǎngwò de zhēn hǎo, tīng qǐlái hěn zìrán.",
          kr: "성조를 정말 잘 잡았어, 듣기에 아주 자연스러워.",
          note: "声调(shēngdiào): 성조 / 掌握(zhǎngwò): 장악하다, 마스터하다 / 自然(zìrán): 자연스럽다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "持之以恒确实有用，谢谢你的夸奖！",
          pinyin: "Chízhīyǐhéng quèshí yǒu yòng, xièxie nǐ de kuājiǎng!",
          kr: "꾸준히 한 게 확실히 효과가 있네, 칭찬 고마워!",
          note: "持之以恒(chízhīyǐhéng): 끈기 있게 지속하다 / 夸奖(kuājiǎng): 칭찬"
        }
      ]
    },
    {
      day: 88,
      title: "这个周末一起去爬山吧 (이번 주말 같이 등산 가자)",
      youtubeTime: "43:45",
      seconds: 2625,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这周末天气晴朗，一起去爬山怎么样？",
          pinyin: "Zhè zhōumò tiānqì qínglǎng, yìqǐ qù páshān zěnmeyàng?",
          kr: "이번 주말 날씨 맑다는데 같이 등산 가는 거 어때?",
          note: "晴朗(qínglǎng): 쾌청하다 / 爬山(páshān): 등산하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好提议！去哪座山？路好走吗？",
          pinyin: "Hǎo tíyì! Qù nǎ zuò shān? Lù hǎozǒu ma?",
          kr: "좋은 생각이야! 어느 산으로 갈 건데? 등산로는 걷기 편해?",
          note: "提议(tíyì): 제안 / 座(zuò): 산을 세는 양사 / 好走: 걷기 편하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "去香山吧，台阶修得很好，不难爬。",
          pinyin: "Qù Xiāngshān ba, táijiē xiū de hěn hǎo, bù nán pá.",
          kr: "향산(샹산) 가자, 계단이 잘 닦여 있어서 오르기 안 힘들어.",
          note: "台阶(táijiē): 계단 / 修(xiū): 짓다, 닦다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "那我准备一些水和水果带上。",
          pinyin: "Nà wǒ zhǔnbèi yìxiē shuǐ hé shuǐguǒ dài shang.",
          kr: "그럼 내가 물이랑 과일 좀 챙겨갈 준비를 할게.",
          note: "水果(shuǐguǒ): 과일"
        }
      ]
    },
    {
      day: 89,
      title: "我的钥匙找不到了 (내 열쇠를 못 찾겠어)",
      youtubeTime: "50:00",
      seconds: 3000,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "急死我了，我的家门钥匙找不到了！",
          pinyin: "Jísǐ wǒ le, wǒ de jiāmén yàoshi zhǎobudào le!",
          kr: "답답해 미치겠네, 집 열쇠를 못 찾겠어!",
          note: "急死(jísǐ): 답답해 죽겠다 / 钥匙(yàoshi): 열쇠 / 找不到: 찾지 못하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "包里各个口袋都仔细翻过了吗？",
          pinyin: "Bāo li gègè kǒudai dōu zǐxì fān guo le ma?",
          kr: "가방 속 주머니마다 꼼꼼하게 다 뒤져봤어?",
          note: "口袋(kǒudai): 주머니 / 仔细(zǐxì): 꼼꼼히, 면밀히"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "翻了好几遍，都没有看见。",
          pinyin: "Fān le hǎo jǐ biàn, dōu méiyǒu kànjiàn.",
          kr: "몇 번이나 뒤져봤는데 통 안 보여.",
          note: "遍(biàn): 번(동작의 횟수)"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "别慌，再想想刚才进门脱外套的时候放在哪儿了。",
          pinyin: "Bié huāng, zài xiǎngxiang gāngcái jìnmén tuō wàitào de shíhou fàng zài nǎr le.",
          kr: "당황하지 말고, 아까 문 들어와서 외투 벗을 때 어디 뒀는지 다시 떠올려봐.",
          note: "慌(huāng): 허둥대다, 당황하다 / 脱(tuō): 벗다"
        }
      ]
    },
    {
      day: 90,
      title: "不知不觉就到九十天了！ (어느덧 벌써 90일이네!)",
      youtubeTime: "56:15",
      seconds: 3375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "天呐，不知不觉我们都学到第九十天了！",
          pinyin: "Tiān na, bùzhībùjué wǒmen dōu xué dào dì jiǔshí tiān le!",
          kr: "세상에, 우리 모르는 사이에 벌써 90일 차까지 배웠어!",
          note: "天呐(tiān na): 맙소사, 어머나 / 不知不觉: 어느덧"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "回想刚开始的时候，连拼音都读不准呢。",
          pinyin: "Huíxiǎng gāng kāishǐ de shíhou, lián pīnyīn dōu dú bu zhǔn ne.",
          kr: "처음 시작할 때 생각하면 병음조차 제대로 못 읽었었는데 말이야.",
          note: "回想(huíxiǎng): 회상하다 / 连~都...: ~조차도 ...하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "现在日常交流基本没问题了，很有成就感吧？",
          pinyin: "Xiànzài rìcháng jiāoliú jīběn méi wèntí le, hěn yǒu chéngjiùgǎn ba?",
          kr: "이제 일상 대화는 기본적으로 문제없잖아, 엄청 뿌듯하지?",
          note: "日常(rìcháng): 일상 / 交流(jiāoliú): 교류, 대화 / 基本(jīběn): 기본적으로"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "只剩最后十天了，一鼓作气冲到终点！",
          pinyin: "Zhǐ shèng zuìhòu shí tiān le, yìgǔzuòqì chōng dào zhōngdiǎn!",
          kr: "이제 딱 마지막 10일 남았어, 기세를 몰아 결승점까지 완주하자!",
          note: "只剩: 오직 ~만 남다 / 一鼓作气(yìgǔzuòqì): 단숨에 기세를 몰아 / 终点: 종점, 결승점"
        }
      ]
    },
    {
      day: 91,
      title: "你平时有什么解压的好方法？ (평소 스트레스 푸는 좋은 방법 있어?)",
      youtubeTime: "00:00",
      seconds: 0,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "最近压力很大，你平时怎么解压？",
          pinyin: "Zuìjìn yālì hěn dà, nǐ píngshí zěnme jiěyā?",
          kr: "요즘 스트레스가 너무 큰데, 넌 평소에 어떻게 풀어?",
          note: "解压(jiěyā): 스트레스를 해소하다 / 压力(yālì): 압박, 스트레스"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "我去跑步或者去KTV大声唱歌。",
          pinyin: "Wǒ qù pǎobù huòzhě qù KTV dàshēng chànggē.",
          kr: "난 조깅을 하거나 노래방 가서 크게 소리 내어 노래를 불러.",
          note: "跑步(pǎobù): 달리기 / KTV: 노래방 / 大声(dàshēng): 큰 소리로"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "大汗淋漓之后确实很舒服。",
          pinyin: "Dàhànlínlí zhīhòu quèshí hěn shūfu.",
          kr: "땀을 흠뻑 흘리고 나면 확실히 개운하더라.",
          note: "大汗淋漓(dàhànlínlí): 땀을 뻘뻘 흘리는 모양 / 舒服(shūfu): 편안하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "今晚一起去跑几公里放松一下吧。",
          pinyin: "Jīnwǎn yìqǐ qù pǎo jǐ gōnglǐ fàngsōng yíxià ba.",
          kr: "오늘 밤 같이 몇 킬로미터 뛰면서 기분 전환하자.",
          note: "公里(gōnglǐ): 킬로미터 / 放松(fàngsōng): 릴랙스하다, 긴장을 풀다"
        }
      ]
    },
    {
      day: 92,
      title: "请帮我办一下退房手续 (체크아웃 수속 좀 부탁합니다)",
      youtubeTime: "06:15",
      seconds: 375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你好，我是802房的，办一下退房。",
          pinyin: "Nǐ hǎo, wǒ shì bā líng èr fáng de, bàn yíxià tuìfáng.",
          kr: "안녕하세요, 802호 투숙객인데 체크아웃 하려고요.",
          note: "退房(tuìfáng): 체크아웃하다 / 手续(shǒuxù): 수속, 절차"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "好的，请出示房卡，有使用房间内的收费用品吗？",
          pinyin: "Hǎode, qǐng chūshì fángkǎ, yǒu shǐyòng fángjiān nèi de shòufèi yòngpǐn ma?",
          kr: "네, 객실 카드키를 제시해 주시고, 룸 내 유료 물품을 사용하신 적이 있나요?",
          note: "房卡(fángkǎ): 룸 카드키 / 收费(shòufèi): 유료의, 요금을 받다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "没有，只喝了免费的矿泉水。",
          pinyin: "Méiyǒu, zhǐ hē le miǎnfèi de kuàngquánshuǐ.",
          kr: "없어요, 무료 생수만 마셨습니다.",
          note: "免费(miǎnfèi): 무료 / 矿泉水(kuàngquánshuǐ): 생수"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "押金已原路退回，欢迎下次光临！",
          pinyin: "Yājīn yǐ yuánlù tuìhuí, huānyíng xià cì guānglín!",
          kr: "보증금은 원래 결제 수단으로 반환되었습니다. 다음에 또 찾아주세요!",
          note: "押金(yājīn): 보증금 / 原路退回: 원 결제 방식으로 환불되다"
        }
      ]
    },
    {
      day: 93,
      title: "你平时的饮食习惯健康吗？ (평소 식습관은 건강해?)",
      youtubeTime: "12:30",
      seconds: 750,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你最近饮食是不是太油腻了？",
          pinyin: "Nǐ zuìjìn yǐnshí shìbushì tài yóunì le?",
          kr: "너 요즘 식사가 너무 기름진 거 아니야?",
          note: "饮食(yǐnshí): 음식, 식사 / 油腻(yóunì): 기름지다, 느끼하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "经常吃外卖，蔬菜摄入确实不够。",
          pinyin: "Jīngcháng chī wàimài, shūcài shèrù quèshí bú gòu.",
          kr: "배달음식을 자주 먹다 보니 채소 섭취가 확실히 부족하네.",
          note: "蔬菜(shūcài): 채소, 야채 / 摄入(shèrù): 섭취하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "多吃新鲜蔬果，饮食尽量清淡点儿。",
          pinyin: "Duō chī xīnxiān shūguǒ, yǐnshí jǐnliàng qīngdàn diǎnr.",
          kr: "신선한 채소랑 과일을 많이 먹고 식사는 되도록 담백하게 해.",
          note: "新鲜(xīnxiān): 신선하다 / 尽量(jǐnliàng): 되도록 / 清淡(qīngdàn): 담백하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "说得对，健康是最大的财富。",
          pinyin: "Shuō de duì, jiànkāng shì zuì dà de cáifù.",
          kr: "맞는 말이야, 건강이 가장 큰 자산(재산)이지.",
          note: "财富(cáifù): 재부, 자산"
        }
      ]
    },
    {
      day: 94,
      title: "这台新手机性能怎么样？ (이 새 휴대폰 성능 어때?)",
      youtubeTime: "18:45",
      seconds: 1125,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "你刚换的新手机用起来怎么样？",
          pinyin: "Nǐ gāng huàn de xīn shǒujī yòng qǐlái zěnmeyàng?",
          kr: "너 방금 바꾼 새 휴대폰 써보니 어때?",
          note: "换(huàn): 바꾸다 / 用起来: 써보기에"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "运行非常流畅，拍照功能也特别强大。",
          pinyin: "Yùnxíng fēicháng liùchàng, pāizhào gōngnéng yě tèbié qiángdà.",
          kr: "구동 속도가 정말 부드럽고, 카메라 기능도 엄청 뛰어나.",
          note: "流畅(liùchàng): 매끄럽다, 버벅임이 없다 / 功能(gōngnéng): 기능"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "电池续航能力强不强？",
          pinyin: "Diànchí xùháng nénglì qiáng bu qiáng?",
          kr: "배터리 유지력(지속시간)은 좋아?",
          note: "电池(diànchí): 배터리 / 续航(xùháng): 연속 사용 시간, 배터리 타임"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "充一次电可以用一整天，性价比极高。",
          pinyin: "Chōng yí cì diàn kěyǐ yòng yì zhěng tiān, xìngjiàbǐ jí gāo.",
          kr: "한 번 충전하면 하루 종일 쓸 수 있어서 가성비가 최고야.",
          note: "充电(chōngdiàn): 충전하다 / 一整天: 하루 종일 / 极(jí): 지극히"
        }
      ]
    },
    {
      day: 95,
      title: "你平时有什么投资理财心得？ (평소 재테크 노하우가 있어?)",
      youtubeTime: "25:00",
      seconds: 1500,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "在理财方面，你有什么好的心得吗？",
          pinyin: "Zài lǐcái fāngmiàn, nǐ yǒu shénme hǎo de xīndé ma?",
          kr: "재테크 방면에서 너만의 좋은 노하우(노하우)가 있어?",
          note: "方面(fāngmiàn): 방면 / 心得(xīndé): 경험에서 얻은 노하우, 소감"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "不要把鸡蛋放在同一个篮子里，注意分散风险。",
          pinyin: "Bú yào bǎ jīdàn fàng zài tóng yí gè lánzi li, zhùyì fēnsàn fēngxiǎn.",
          kr: "달걀을 한 바구니에 담지 말고 위험을 분산하는 데 주의해야 해.",
          note: "篮子(lánzi): 바구니 / 分散(fēnsàn): 분산하다 / 风险(fēngxiǎn): 리스크"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "资产配置确实很重要。",
          pinyin: "Zīchǎn pèizhì quèshí hěn zhòngyào.",
          kr: "자산 배분이 확실히 정말 중요하지.",
          note: "资产(zīchǎn): 자산 / 配置(pèizhì): 배분, 배치"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "稳扎稳打才能细水长流。",
          pinyin: "Wěnzhāwěndǎ cái néng xìshuǐchángliú.",
          kr: "착실하고 안정적으로 나가야 오래오래 꾸준할 수 있어.",
          note: "稳扎稳打: 착실하게 기반을 다지다 / 细水长流: 적은 양이라도 오래 지속하다"
        }
      ]
    },
    {
      day: 96,
      title: "这家餐厅的服务真贴心 (이 식당 서비스 정말 세심하다)",
      youtubeTime: "31:15",
      seconds: 1875,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "这家餐厅不仅菜好吃，服务也真到位。",
          pinyin: "Zhè jiā cāntīng bùjǐn cài hǎochī, fúwù yě zhēn dàowèi.",
          kr: "이 식당은 음식만 맛있는 게 아니라 서비스도 진짜 제대로네.",
          note: "不仅~也...: ~뿐만 아니라 ...도 / 到位(dàowèi): 제대로 갖추어지다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "服务员主动送了围裙和发绳，太贴心了。",
          pinyin: "Fúwùyuán zhǔdòng sòng le wéiqún hé fàshéng, tài tiēxīn le.",
          kr: "직원이 알아서 앞치마랑 머리끈을 챙겨주다니 너무 세심해.",
          note: "主动(zhǔdòng): 자발적으로 / 围裙(wéiqún): 앞치마 / 贴心(tiēxīn): 자상하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "注重细节的店铺生意肯定差不了。",
          pinyin: "Zhùzhòng xìjié de diànpù shēngyi kěndìng chàbuliǎo.",
          kr: "세심한 디테일에 신경 쓰는 매장은 장사가 안될 리가 없지.",
          note: "注重(zhùzhòng): 중시하다 / 细节(xìjié): 디테일 / 差不了: 나쁠 리 없다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "下次带朋友聚餐还来这里。",
          pinyin: "Xià cì dài péngyou jùcān hái lái zhèlǐ.",
          kr: "다음번에 친구들이랑 모임 할 때 또 여기로 와야겠어.",
          note: "聚餐(jùcān): 함께 식사하다, 모임을 갖다"
        }
      ]
    },
    {
      day: 97,
      title: "你能帮我把这个文档翻译一下吗？ (이 문서 번역 좀 도와줄래?)",
      youtubeTime: "37:30",
      seconds: 2250,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "能帮我把这份中文资料校对一下吗？",
          pinyin: "Néng bāng wǒ bǎ zhè fèn Zhōngwén zīliào jiàoduì yíxià ma?",
          kr: "이 중국어 자료 교정(검토)하는 것 좀 도와줄 수 있어?",
          note: "份(fèn): 서류 세는 양사 / 资料(zīliào): 자료 / 校对(jiàoduì): 교정하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "拿给我看看，具体哪部分需要确认？",
          pinyin: "Ná gěi wǒ kànkan, jùtǐ nǎ bùfen xūyào quèrèn?",
          kr: "이리 줘봐 내가 볼게, 구체적으로 어느 부분을 확인해야 해?",
          note: "具体(jùtǐ): 구체적이다 / 确认(quèrèn): 확인하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "主要是商务礼貌用语和专业词汇。",
          pinyin: "Zhǔyào shì shāngwù lǐmào yòngyǔ hé zhuānyè cíhuì.",
          kr: "주로 비즈니스 격식 표현이랑 전문 어휘들이야.",
          note: "商务(shāngwù): 비즈니스 / 礼貌(lǐmào): 예의 / 专业词汇: 전문 용어"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "整体翻译得很专业，稍作润色即可。",
          pinyin: "Zhěngtǐ fānyì de hěn zhuānyè, shāo zuò rùnsè jíkě.",
          kr: "전체적으로 아주 전문성 있게 번역됐어, 살짝 다듬기만 하면 돼.",
          note: "整体(zhěngtǐ): 전체적 / 润色(rùnsè): 윤문하다, 다듬다 / 即可: ~하면 된다"
        }
      ]
    },
    {
      day: 98,
      title: "你准备好迎接新的挑战了吗？ (새로운 도전을 맞이할 준비 됐어?)",
      youtubeTime: "43:45",
      seconds: 2625,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "听说你调到了新的项目组，准备好了吗？",
          pinyin: "Tīngshuō nǐ diào dào le xīn de xiàngmùzǔ, zhǔnbèi hǎo le ma?",
          kr: "너 새 프로젝트 팀으로 발령받았다며, 준비는 다 됐어?",
          note: "调(diào): 이동하다, 전근하다 / 项目组: 프로젝트 팀"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "既兴奋又有压力，但我已经全力以赴了。",
          pinyin: "Jì xīngfèn yòu yǒu yālì, dàn wǒ yǐjīng quánlìyǐfù le.",
          kr: "설레기도 하고 부담도 되지만, 전력을 다할 각오를 다졌어.",
          note: "既~又...: ~하기도 하고 ...하기도 하다 / 全力以赴(quánlìyǐfù): 전력을 다하다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "以你的实力，绝对没问题的！",
          pinyin: "Yǐ nǐ de shílì, juéduì méi wèntí de!",
          kr: "너 정도 실력이면 무조건 잘 해낼 수 있어!",
          note: "实力(shílì): 실력 / 绝对(juéduì): 절대적으로"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "谢谢你的鼓励，我会加倍努力的！",
          pinyin: "Xièxie nǐ de gǔlì, wǒ huì jiābèi nǔlì de!",
          kr: "응원해 줘서 고마워, 두 배로 더 노력할게!",
          note: "鼓励(gǔlì): 격려, 응원 / 加倍(jiābèi): 배로, 한층 더"
        }
      ]
    },
    {
      day: 99,
      title: "有志者事竟成 (뜻이 있는 자는 반드시 성공한다)",
      youtubeTime: "50:00",
      seconds: 3000,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "明天就是最后的结业仪式了，真感慨啊。",
          pinyin: "Míngtiān jiù shì zuìhòu de jiéyè yíshì le, zhēn gǎnkǎi a.",
          kr: "내일이면 드디어 마지막 수료식이네, 참 감회가 새롭다.",
          note: "结业(jiéyè): 수료하다 / 仪式(yíshì): 의식, 식 / 感慨(gǎnkǎi): 감개무량하다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "一百天的坚持，我们终于做到了！",
          pinyin: "Yìbǎi tiān de jiānchí, wǒmen zhōngyú zuòdào le!",
          kr: "100일 동안의 끈기 있는 도전, 우리가 마침내 해냈어!",
          note: "坚持(jiānchí): 끈기, 꾸준함 / 做到了: 해냈다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "俗话说得好，有志者事竟成。",
          pinyin: "Súhuà shuō de hǎo, yǒuzhìzhě shì jìng chéng.",
          kr: "속담에도 있듯이, 뜻이 있는 곳에 길이 있는 법이야.",
          note: "俗话(súhuà): 속담 / 有志者事竟成: 뜻이 있는 자는 마침내 성공한다"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "这段经历不仅提升了语言，更磨炼了意志。",
          pinyin: "Zhè duàn jīnglì bùjǐn tíshēng le yǔyán, gèng móliàn le yìzhì.",
          kr: "이 경험은 어학 실력뿐 아니라 의지력까지 단련시켜 줬어.",
          note: "提升(tíshēng): 향상시키다 / 磨炼(móliàn): 단련하다 / 意志(yìzhì): 의지"
        }
      ]
    },
    {
      day: 100,
      title: "百日奇迹，圆满完成！ (100일의 기적, 완벽 완주!)",
      youtubeTime: "56:15",
      seconds: 3375,
      dialogues: [
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "祝贺我们完成了一百天的奇迹挑战！",
          pinyin: "Zhùhè wǒmen wánchéng le yìbǎi tiān de qíjì tiǎozhàn!",
          kr: "우리 100일의 기적 챌린지를 완주한 것을 진심으로 축하해!",
          note: "祝贺(zhùhè): 축하하다 / 奇迹(qíjì): 기적 / 挑战(tiǎozhàn): 챌린지, 도전"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "感谢一路上的彼此陪伴和相互打气。",
          pinyin: "Gǎnxiè yílù shang de bǐcǐ péibàn hé xiānghù dǎqì.",
          kr: "그동안 함께해 주고 서로 북돋아 줘서 고마웠어.",
          note: "彼此(bǐcǐ): 서로 / 陪伴(péibàn): 함께하다 / 打气(dǎqì): 용기를 북돋우다"
        },
        {
          role: "A",
          roleLabel: "A (여성)",
          cn: "结课不是终点，而是新的起点。",
          pinyin: "Jiékè bú shì zhōngdiǎn, érshì xīn de qǐdiǎn.",
          kr: "종강은 끝이 아니라 새로운 시작점이야.",
          note: "终点(zhōngdiǎn): 종점 / 起点(qǐdiǎn): 출발점, 시작점"
        },
        {
          role: "B",
          roleLabel: "B (남성)",
          cn: "说得对，继续奔跑，未来一定会更精彩！",
          pinyin: "Shuō de duì, jìxù bēnpǎo, wèilái yídìng huì gèng jīngcǎi!",
          kr: "맞아, 계속 달려 나가자, 앞으로의 미래는 분명 더 멋질 거야!",
          note: "奔跑(bēnpǎo): 질주하다 / 精彩(jīngcǎi): 눈부시다, 훌륭하다"
        }
      ]
    }
  ]
};