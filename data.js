// Reach Higher 2A - Word Data
// Units 1-6, approximately 15-20 words each

const UNITS = [
  {
    id: 1,
    title: "Unit 1: Living Things",
    theme: "Animals & Plants",
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    icon: "🌿",
    words: [
      { word: "adapt", phonetic: "/əˈdæpt/", pos: "v.", cn: "适应", sentence: "Animals adapt to their environment." },
      { word: "survive", phonetic: "/sərˈvaɪv/", pos: "v.", cn: "生存，存活", sentence: "Only the strongest animals survive." },
      { word: "habitat", phonetic: "/ˈhæbɪtæt/", pos: "n.", cn: "栖息地", sentence: "The forest is the habitat of many animals." },
      { word: "migrate", phonetic: "/ˈmaɪɡreɪt/", pos: "v.", cn: "迁徙，移居", sentence: "Birds migrate to warm places in winter." },
      { word: "predator", phonetic: "/ˈpredətər/", pos: "n.", cn: "捕食者，天敌", sentence: "The lion is a predator." },
      { word: "prey", phonetic: "/preɪ/", pos: "n.", cn: "猎物", sentence: "Rabbits are prey for foxes." },
      { word: "camouflage", phonetic: "/ˈkæməflɑːʒ/", pos: "n.", cn: "伪装，掩护色", sentence: "Camouflage helps animals hide from predators." },
      { word: "endangered", phonetic: "/ɪnˈdeɪndʒərd/", pos: "adj.", cn: "濒危的", sentence: "The giant panda is an endangered species." },
      { word: "species", phonetic: "/ˈspiːʃiːz/", pos: "n.", cn: "物种，种类", sentence: "There are many species of birds." },
      { word: "ecosystem", phonetic: "/ˈiːkoʊsɪstəm/", pos: "n.", cn: "生态系统", sentence: "Forests form a complex ecosystem." },
      { word: "reproduce", phonetic: "/ˌriːprəˈdjuːs/", pos: "v.", cn: "繁殖，生育", sentence: "Rabbits reproduce very quickly." },
      { word: "hibernate", phonetic: "/ˈhaɪbərneɪt/", pos: "v.", cn: "冬眠", sentence: "Bears hibernate in winter." },
      { word: "creature", phonetic: "/ˈkriːtʃər/", pos: "n.", cn: "生物，动物", sentence: "Every creature has a role in the ecosystem." },
      { word: "offspring", phonetic: "/ˈɒfsprɪŋ/", pos: "n.", cn: "后代，幼崽", sentence: "Lions protect their offspring." },
      { word: "nutrition", phonetic: "/njuːˈtrɪʃən/", pos: "n.", cn: "营养，营养学", sentence: "Good nutrition keeps animals healthy." }
    ],
    passages: [
      {
        title: "Amazing Animal Adaptations",
        text: "Animals have developed amazing ways to survive in their habitats. Some animals use camouflage to hide from predators. Others migrate to warmer places when winter comes. Every species has special features that help it survive. Scientists study these adaptations to learn more about the ecosystem."
      }
    ],
    writingFrame: {
      title: "Describe an Animal",
      topic: "Choose an animal and write about how it survives in its habitat.",
      frame: [
        { text: "The animal I will describe is a ", placeholder: "animal name" },
        { text: ". It lives in ", placeholder: "habitat name" },
        { text: ". This animal has an amazing adaptation: ", placeholder: "adaptation description" },
        { text: ". This adaptation helps it ", placeholder: "what it helps do (hide/find food/escape predators)" },
        { text: ". In conclusion, this animal is perfectly designed to survive in its habitat." }
      ],
      wordBank: ["habitat", "adapt", "survive", "predator", "camouflage", "migrate", "species", "creature", "endangered"]
    }
  },
  {
    id: 2,
    title: "Unit 2: Changes",
    theme: "Science & Technology",
    color: "#2196F3",
    bgColor: "#E3F2FD",
    icon: "⚡",
    words: [
      { word: "transform", phonetic: "/trænsˈfɔːrm/", pos: "v.", cn: "改变，转变", sentence: "Technology can transform our lives." },
      { word: "process", phonetic: "/ˈprɒses/", pos: "n.", cn: "过程，步骤", sentence: "Growing a plant is a slow process." },
      { word: "chemical", phonetic: "/ˈkemɪkəl/", pos: "adj.", cn: "化学的", sentence: "A chemical reaction produces heat." },
      { word: "reaction", phonetic: "/riˈækʃən/", pos: "n.", cn: "反应，回应", sentence: "The chemical reaction changed the color." },
      { word: "dissolve", phonetic: "/dɪˈzɒlv/", pos: "v.", cn: "溶解，融化", sentence: "Sugar dissolves in water." },
      { word: "evaporate", phonetic: "/ɪˈvæpəreɪt/", pos: "v.", cn: "蒸发，消失", sentence: "Water evaporates when heated." },
      { word: "physical", phonetic: "/ˈfɪzɪkəl/", pos: "adj.", cn: "物理的，身体的", sentence: "Ice melting is a physical change." },
      { word: "mixture", phonetic: "/ˈmɪkstʃər/", pos: "n.", cn: "混合物", sentence: "Salt water is a mixture." },
      { word: "experiment", phonetic: "/ɪkˈsperɪmənt/", pos: "n.", cn: "实验，试验", sentence: "We did an experiment with vinegar." },
      { word: "molecule", phonetic: "/ˈmɒlɪkjuːl/", pos: "n.", cn: "分子", sentence: "Water is made of molecules." },
      { word: "solid", phonetic: "/ˈsɒlɪd/", pos: "n./adj.", cn: "固体；固体的", sentence: "Ice is a solid form of water." },
      { word: "liquid", phonetic: "/ˈlɪkwɪd/", pos: "n./adj.", cn: "液体；液态的", sentence: "Water is a liquid at room temperature." },
      { word: "vapor", phonetic: "/ˈveɪpər/", pos: "n.", cn: "蒸气，水汽", sentence: "Steam is water vapor." },
      { word: "observe", phonetic: "/əbˈzɜːrv/", pos: "v.", cn: "观察，注意", sentence: "We observed the changes carefully." },
      { word: "hypothesis", phonetic: "/haɪˈpɒθɪsɪs/", pos: "n.", cn: "假设，假说", sentence: "The scientist made a hypothesis." }
    ],
    passages: [
      {
        title: "States of Matter",
        text: "Matter can exist in three states: solid, liquid, and gas. Water is a great example of this. When water freezes, it becomes solid ice. When heated, liquid water evaporates into vapor. These physical changes happen every day around us. Scientists observe and record these changes in experiments."
      }
    ],
    writingFrame: {
      title: "Explain a Change",
      topic: "Describe a physical or chemical change you have observed.",
      frame: [
        { text: "I observed a change when ", placeholder: "describe what happened (e.g., I heated ice)" },
        { text: ". First, the material was a ", placeholder: "solid, liquid, or gas" },
        { text: ". Then, it changed into a ", placeholder: "solid, liquid, or gas" },
        { text: ". This is called a ", placeholder: "physical or chemical" },
        { text: " change because ", placeholder: "explain why (reversible or produced new substance)" },
        { text: ". Scientists call this process ", placeholder: "scientific term (e.g., evaporation, melting)" },
        { text: "." }
      ],
      wordBank: ["solid", "liquid", "vapor", "physical", "chemical", "dissolve", "evaporate", "observe", "experiment", "process", "mixture"]
    }
  },
  {
    id: 3,
    title: "Unit 3: Energy",
    theme: "Environment & Energy",
    color: "#FF9800",
    bgColor: "#FFF3E0",
    icon: "☀️",
    words: [
      { word: "renewable", phonetic: "/rɪˈnjuːəbəl/", pos: "adj.", cn: "可再生的", sentence: "Solar power is a renewable energy source." },
      { word: "fossil fuel", phonetic: "/ˈfɒsəl fjuːəl/", pos: "n.", cn: "化石燃料", sentence: "Coal is a type of fossil fuel." },
      { word: "electricity", phonetic: "/ɪˌlekˈtrɪsɪti/", pos: "n.", cn: "电，电力", sentence: "We use electricity to power our homes." },
      { word: "generator", phonetic: "/ˈdʒenəreɪtər/", pos: "n.", cn: "发电机", sentence: "A wind generator produces clean energy." },
      { word: "efficient", phonetic: "/ɪˈfɪʃənt/", pos: "adj.", cn: "高效的", sentence: "LED lights are more efficient than old bulbs." },
      { word: "conserve", phonetic: "/kənˈsɜːrv/", pos: "v.", cn: "节约，保护", sentence: "We should conserve water and energy." },
      { word: "pollution", phonetic: "/pəˈluːʃən/", pos: "n.", cn: "污染", sentence: "Pollution harms the environment." },
      { word: "solar", phonetic: "/ˈsoʊlər/", pos: "adj.", cn: "太阳的，太阳能的", sentence: "Solar panels collect energy from the sun." },
      { word: "turbine", phonetic: "/ˈtɜːrbaɪn/", pos: "n.", cn: "涡轮机，风车", sentence: "A wind turbine generates electricity." },
      { word: "resource", phonetic: "/ˈriːsɔːrs/", pos: "n.", cn: "资源", sentence: "Oil is a natural resource." },
      { word: "carbon", phonetic: "/ˈkɑːrbən/", pos: "n.", cn: "碳", sentence: "Cars release carbon dioxide." },
      { word: "greenhouse", phonetic: "/ˈɡriːnhaʊs/", pos: "n.", cn: "温室", sentence: "Greenhouse gases trap heat on Earth." },
      { word: "sustainable", phonetic: "/səˈsteɪnəbəl/", pos: "adj.", cn: "可持续的", sentence: "We need sustainable energy solutions." },
      { word: "nuclear", phonetic: "/ˈnjuːkliər/", pos: "adj.", cn: "核的，核能的", sentence: "Nuclear power plants produce electricity." },
      { word: "atmosphere", phonetic: "/ˈætməsfɪər/", pos: "n.", cn: "大气层，氛围", sentence: "The atmosphere protects Earth from the sun." }
    ],
    passages: [
      {
        title: "Renewable Energy Sources",
        text: "The world needs clean, renewable energy. Solar panels collect energy from the sun. Wind turbines use wind to generate electricity. These sources do not cause pollution like fossil fuels. Using renewable energy helps conserve our natural resources and protects the atmosphere for future generations."
      }
    ],
    writingFrame: {
      title: "Energy Sources",
      topic: "Write about an energy source and why it is important.",
      frame: [
        { text: "The energy source I will write about is ", placeholder: "solar/wind/nuclear/etc." },
        { text: ". This energy is ", placeholder: "renewable or non-renewable" },
        { text: " because ", placeholder: "explain why (it can/cannot be replaced)" },
        { text: ". It is used to generate ", placeholder: "electricity/heat/etc." },
        { text: ". One advantage is that it ", placeholder: "environmental benefit" },
        { text: ". However, one challenge is that ", placeholder: "difficulty or limitation" },
        { text: ". In my opinion, this energy source is ", placeholder: "your opinion" },
        { text: " for our future." }
      ],
      wordBank: ["renewable", "solar", "wind", "fossil fuel", "electricity", "efficient", "conserve", "pollution", "resource", "sustainable", "atmosphere", "carbon"]
    }
  },
  {
    id: 4,
    title: "Unit 4: Communities",
    theme: "Society & Culture",
    color: "#9C27B0",
    bgColor: "#F3E5F5",
    icon: "🏘️",
    words: [
      { word: "community", phonetic: "/kəˈmjuːnɪti/", pos: "n.", cn: "社区，群体", sentence: "Our community works together to stay clean." },
      { word: "citizen", phonetic: "/ˈsɪtɪzən/", pos: "n.", cn: "市民，公民", sentence: "Every citizen has rights and responsibilities." },
      { word: "government", phonetic: "/ˈɡʌvərnmənt/", pos: "n.", cn: "政府，管理机构", sentence: "The government builds schools and roads." },
      { word: "tradition", phonetic: "/trəˈdɪʃən/", pos: "n.", cn: "传统，习俗", sentence: "Celebrating New Year is an old tradition." },
      { word: "culture", phonetic: "/ˈkʌltʃər/", pos: "n.", cn: "文化", sentence: "Different countries have different cultures." },
      { word: "diversity", phonetic: "/daɪˈvɜːrsɪti/", pos: "n.", cn: "多样性，多元化", sentence: "Our school celebrates diversity." },
      { word: "cooperate", phonetic: "/koʊˈɒpəreɪt/", pos: "v.", cn: "合作，协作", sentence: "We cooperate to finish the project." },
      { word: "volunteer", phonetic: "/ˌvɒlənˈtɪər/", pos: "v./n.", cn: "志愿服务；志愿者", sentence: "She volunteers at the local library." },
      { word: "charity", phonetic: "/ˈtʃærɪti/", pos: "n.", cn: "慈善，仁慈", sentence: "We donated money to charity." },
      { word: "responsibility", phonetic: "/rɪˌspɒnsɪˈbɪlɪti/", pos: "n.", cn: "责任，职责", sentence: "It is our responsibility to protect nature." },
      { word: "generation", phonetic: "/ˌdʒenəˈreɪʃən/", pos: "n.", cn: "一代人，代", sentence: "Each generation learns from the last." },
      { word: "immigrate", phonetic: "/ˈɪmɪɡreɪt/", pos: "v.", cn: "移民（入境）", sentence: "Many families immigrate to find better lives." },
      { word: "population", phonetic: "/ˌpɒpjuˈleɪʃən/", pos: "n.", cn: "人口，总人数", sentence: "The city's population is growing fast." },
      { word: "urban", phonetic: "/ˈɜːrbən/", pos: "adj.", cn: "城市的，都市的", sentence: "Urban areas have more schools and hospitals." },
      { word: "rural", phonetic: "/ˈrʊərəl/", pos: "adj.", cn: "农村的，乡村的", sentence: "Rural communities are often quieter." }
    ],
    passages: [
      {
        title: "Our Community",
        text: "A community is a group of people who live and work together. In a community, citizens have both rights and responsibilities. People cooperate to make the community a better place. Many people volunteer their time to help others. Our communities celebrate cultural diversity and honor the traditions of different generations."
      }
    ],
    writingFrame: {
      title: "My Community",
      topic: "Describe your community and how people work together.",
      frame: [
        { text: "I live in a ", placeholder: "type of community (urban/rural/etc.)" },
        { text: " community. The people here are ", placeholder: "describe the people (friendly/diverse/etc.)" },
        { text: ". In our community, we have ", placeholder: "places and services (schools, parks, etc.)" },
        { text: ". People here cooperate by ", placeholder: "examples of cooperation" },
        { text: ". Many people volunteer to ", placeholder: "volunteer activities" },
        { text: ". Our community celebrates our ", placeholder: "traditions/culture/diversity" },
        { text: ". I am proud of our community because ", placeholder: "reason for pride" },
        { text: "." }
      ],
      wordBank: ["community", "citizen", "tradition", "culture", "diversity", "cooperate", "volunteer", "responsibility", "generation", "urban", "rural"]
    }
  },
  {
    id: 5,
    title: "Unit 5: Time",
    theme: "History & Time",
    color: "#795548",
    bgColor: "#EFEBE9",
    icon: "⏳",
    words: [
      { word: "ancient", phonetic: "/ˈeɪnʃənt/", pos: "adj.", cn: "古代的，古老的", sentence: "Ancient people built great pyramids." },
      { word: "civilization", phonetic: "/ˌsɪvɪlaɪˈzeɪʃən/", pos: "n.", cn: "文明", sentence: "Ancient Egypt was a great civilization." },
      { word: "artifact", phonetic: "/ˈɑːrtɪfækt/", pos: "n.", cn: "文物，人工制品", sentence: "The museum has many ancient artifacts." },
      { word: "archaeologist", phonetic: "/ˌɑːrkiˈɒlədʒɪst/", pos: "n.", cn: "考古学家", sentence: "Archaeologists dig up old objects." },
      { word: "timeline", phonetic: "/ˈtaɪmlaɪn/", pos: "n.", cn: "时间轴，年表", sentence: "The teacher drew a timeline on the board." },
      { word: "century", phonetic: "/ˈsentʃəri/", pos: "n.", cn: "世纪，百年", sentence: "This building is two centuries old." },
      { word: "era", phonetic: "/ˈɪərə/", pos: "n.", cn: "时代，纪元", sentence: "We live in the digital era." },
      { word: "preserve", phonetic: "/prɪˈzɜːrv/", pos: "v.", cn: "保护，保存", sentence: "Museums preserve old artifacts." },
      { word: "document", phonetic: "/ˈdɒkjumənt/", pos: "v./n.", cn: "记录；文件", sentence: "Scientists document their findings carefully." },
      { word: "evidence", phonetic: "/ˈevɪdəns/", pos: "n.", cn: "证据，迹象", sentence: "There is evidence of ancient life here." },
      { word: "dynasty", phonetic: "/ˈdaɪnəsti/", pos: "n.", cn: "王朝，朝代", sentence: "The Tang Dynasty was a powerful era." },
      { word: "invention", phonetic: "/ɪnˈvenʃən/", pos: "n.", cn: "发明，创造", sentence: "The wheel was an important invention." },
      { word: "explore", phonetic: "/ɪkˈsplɔːr/", pos: "v.", cn: "探索，探险", sentence: "Explorers sailed to discover new lands." },
      { word: "historian", phonetic: "/hɪˈstɔːriən/", pos: "n.", cn: "历史学家", sentence: "The historian wrote a book about ancient Rome." },
      { word: "legacy", phonetic: "/ˈleɡəsi/", pos: "n.", cn: "遗产，遗留物", sentence: "Ancient Greece left a great legacy." }
    ],
    passages: [
      {
        title: "Discovering the Past",
        text: "Archaeologists study ancient civilizations to understand the past. They dig up artifacts and document their findings carefully. Each artifact tells us something about how people lived in ancient times. Museums preserve these objects so that everyone can see them. The legacy of ancient civilizations teaches us important lessons about our world today."
      }
    ],
    writingFrame: {
      title: "Ancient Civilization",
      topic: "Write about an ancient civilization or time period.",
      frame: [
        { text: "The ancient civilization I will write about is ", placeholder: "name of civilization" },
        { text: ". This civilization existed about ", placeholder: "how long ago (e.g., 2000 years ago)" },
        { text: " during the ", placeholder: "era/dynasty name" },
        { text: " era. They were famous for ", placeholder: "famous achievements (pyramids, inventions, etc.)" },
        { text: ". Archaeologists found ", placeholder: "artifacts discovered" },
        { text: " which tells us that they were skilled at ", placeholder: "skills/crafts" },
        { text: ". The legacy of this civilization includes ", placeholder: "lasting contributions" },
        { text: ". Today, we preserve their history by ", placeholder: "how we remember them (museums, documents)" },
        { text: "." }
      ],
      wordBank: ["ancient", "civilization", "artifact", "archaeologist", "timeline", "century", "era", "preserve", "document", "evidence", "dynasty", "invention", "legacy"]
    }
  },
  {
    id: 6,
    title: "Unit 6: Teamwork",
    theme: "Skills & Teamwork",
    color: "#F44336",
    bgColor: "#FFEBEE",
    icon: "🤝",
    words: [
      { word: "collaborate", phonetic: "/kəˈlæbəreɪt/", pos: "v.", cn: "合作，协作", sentence: "Students collaborate on group projects." },
      { word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", pos: "v.", cn: "交流，沟通", sentence: "It is important to communicate clearly." },
      { word: "leadership", phonetic: "/ˈliːdərʃɪp/", pos: "n.", cn: "领导力，领导层", sentence: "She showed great leadership skills." },
      { word: "strategy", phonetic: "/ˈstrætɪdʒi/", pos: "n.", cn: "策略，方法", sentence: "The team planned a strategy for the game." },
      { word: "contribute", phonetic: "/kənˈtrɪbjuːt/", pos: "v.", cn: "贡献，投入", sentence: "Everyone can contribute to the team." },
      { word: "challenge", phonetic: "/ˈtʃælɪndʒ/", pos: "n./v.", cn: "挑战；挑战", sentence: "Solving hard problems is a challenge." },
      { word: "achieve", phonetic: "/əˈtʃiːv/", pos: "v.", cn: "实现，达成", sentence: "Hard work helps us achieve our goals." },
      { word: "motivation", phonetic: "/ˌmoʊtɪˈveɪʃən/", pos: "n.", cn: "动力，激励", sentence: "Winning the game gave us motivation." },
      { word: "effective", phonetic: "/ɪˈfektɪv/", pos: "adj.", cn: "有效的，高效的", sentence: "Teamwork is more effective than working alone." },
      { word: "responsibility", phonetic: "/rɪˌspɒnsɪˈbɪlɪti/", pos: "n.", cn: "责任", sentence: "Each member has a responsibility to the team." },
      { word: "resolve", phonetic: "/rɪˈzɒlv/", pos: "v.", cn: "解决，决心", sentence: "We must resolve conflicts calmly." },
      { word: "persevere", phonetic: "/ˌpɜːrsɪˈvɪər/", pos: "v.", cn: "坚持不懈", sentence: "We must persevere even when it is hard." },
      { word: "outcome", phonetic: "/ˈaʊtkʌm/", pos: "n.", cn: "结果，成果", sentence: "A good plan leads to a good outcome." },
      { word: "flexible", phonetic: "/ˈfleksɪbəl/", pos: "adj.", cn: "灵活的，可变通的", sentence: "Good team members are flexible." },
      { word: "encourage", phonetic: "/ɪnˈkɜːrɪdʒ/", pos: "v.", cn: "鼓励，激励", sentence: "We encourage each other to do our best." }
    ],
    passages: [
      {
        title: "The Power of Teamwork",
        text: "When people collaborate and communicate well, they can achieve amazing things. Good teamwork requires strong leadership and a clear strategy. Every team member must contribute their best efforts. When challenges arise, we must persevere and resolve problems together. Encouraging each other leads to the best outcomes for the whole team."
      }
    ],
    writingFrame: {
      title: "Teamwork Experience",
      topic: "Describe a time when you worked in a team.",
      frame: [
        { text: "I want to share a time when I worked in a team. Our goal was to ", placeholder: "describe the goal/task" },
        { text: ". My team members and I needed to ", placeholder: "what the team needed to do" },
        { text: ". At first, we had a challenge: ", placeholder: "describe the challenge" },
        { text: ". To solve this, we communicated by ", placeholder: "how the team communicated" },
        { text: ". Everyone contributed by ", placeholder: "how team members contributed" },
        { text: ". Our leader helped us by ", placeholder: "leadership contribution" },
        { text: ". In the end, we achieved the goal because ", placeholder: "why the team succeeded" },
        { text: ". From this experience, I learned that teamwork is ", placeholder: "lesson learned" },
        { text: "." }
      ],
      wordBank: ["collaborate", "communicate", "leadership", "strategy", "contribute", "challenge", "achieve", "motivation", "effective", "responsibility", "resolve", "persevere", "outcome", "flexible", "encourage"]
    }
  }
];

// ===== SPEAKING PRACTICE TOPICS =====
const SPEAKING_TOPICS = {
  1: {
    title: "Animal Survival",
    intro: "Let's talk about animals and how they survive in nature!",
    questions: [
      { q: "What is your favorite animal? Why do you like it?", hint: "You can say: My favorite animal is... because...", keywords: ["favorite", "animal", "like", "because"] },
      { q: "Why do some animals migrate? Can you give an example?", hint: "Think about seasons and food sources", keywords: ["migrate", "winter", "warm", "food", "weather", "season"] },
      { q: "What does 'camouflage' mean? Give an example.", hint: "Think about animals that hide by blending in", keywords: ["hide", "blend", "color", "environment", "predator"] },
      { q: "Why is it important to protect endangered species?", hint: "Think about biodiversity and the ecosystem", keywords: ["protect", "endangered", "species", "important", "biodiversity", "ecosystem"] }
    ]
  },
  2: {
    title: "Changes in Matter",
    intro: "Let's discuss changes in matter - a fascinating topic!",
    questions: [
      { q: "Can you give an example of a physical change?", hint: "Think about changes that can be reversed", keywords: ["ice", "melt", "water", "freeze", "solid", "liquid", "change"] },
      { q: "What happens when water evaporates?", hint: "Think about heat and the water cycle", keywords: ["heat", "vapor", "gas", "water", "evaporate", "temperature"] },
      { q: "What is the difference between solid, liquid, and gas?", hint: "Think about the shape and movement of particles", keywords: ["shape", "particle", "movement"] },
      { q: "Why do scientists conduct experiments?", hint: "Think about the scientific method", keywords: ["test", "hypothesis", "experiment", "observe", "learn", "science"] }
    ]
  },
  3: {
    title: "Energy & Environment",
    intro: "Let's discuss energy sources and the environment!",
    questions: [
      { q: "What are renewable energy sources? Name some.", hint: "Think about energy that won't run out", keywords: ["renewable", "solar", "wind", "energy", "sun", "power"] },
      { q: "Why is it important to conserve energy?", hint: "Think about pollution and resources", keywords: ["conserve", "save", "pollution", "environment", "resource", "future"] },
      { q: "What are the disadvantages of fossil fuels?", hint: "Think about pollution and climate", keywords: ["pollution", "carbon", "climate", "change", "gas", "smoke"] },
      { q: "How do wind turbines generate electricity?", hint: "Think about wind power", keywords: ["wind", "turbine", "spin", "generator", "electricity", "power"] }
    ]
  },
  4: {
    title: "Community & Society",
    intro: "Let's talk about communities and working together!",
    questions: [
      { q: "What makes a good community?", hint: "Think about cooperation and helping", keywords: ["help", "together", "cooperate", "friend", "safe", "respect"] },
      { q: "Why do people volunteer?", hint: "Think about helping others", keywords: ["help", "volunteer", "time", "community", "care", "give"] },
      { q: "How do communities celebrate their traditions?", hint: "Think about festivals and customs", keywords: ["tradition", "culture", "festival", "food", "celebrate", "custom"] },
      { q: "What are the differences between urban and rural communities?", hint: "Think about cities vs countryside", keywords: ["urban", "city", "rural", "countryside", "building", "nature"] }
    ]
  },
  5: {
    title: "History & Time",
    intro: "Let's explore ancient civilizations!",
    questions: [
      { q: "What is an archaeologist? What do they do?", hint: "Think about people who study the past", keywords: ["archaeologist", "dig", "artifact", "past", "ancient", "discover"] },
      { q: "Why is it important to preserve historical artifacts?", hint: "Think about learning from the past", keywords: ["preserve", "history", "artifact", "learn", "museum", "past"] },
      { q: "What can artifacts tell us about ancient civilizations?", hint: "Think about daily life", keywords: ["artifact", "daily", "life", "tool", "technology", "ancient", "tell"] },
      { q: "What legacy have ancient civilizations left for us?", hint: "Think about inventions and ideas", keywords: ["legacy", "invention", "art", "idea", "ancient", "today", "modern"] }
    ]
  },
  6: {
    title: "Teamwork Skills",
    intro: "Let's discuss teamwork - an important skill!",
    questions: [
      { q: "Why is teamwork important? Give an example.", hint: "Think about what we achieve together", keywords: ["together", "team", "achieve", "cooperate", "work", "help"] },
      { q: "What makes a good team leader?", hint: "Think about communication and guidance", keywords: ["leader", "communicate", "guide", "support", "inspire", "organize"] },
      { q: "How do you handle disagreements in a team?", hint: "Think about communication and compromise", keywords: ["disagree", "solve", "talk", "listen", "compromise", "calm", "respect"] },
      { q: "What does it mean to persevere?", hint: "Think about not giving up", keywords: ["persevere", "never", "give", "up", "keep", "trying", "hard", "success"] }
    ]
  }
};

// ===== GRAMMAR PRACTICE =====
const GRAMMAR_PRACTICE = {
  1: {
    title: "Subject-Verb Agreement",
    rules: "In English, the subject and verb must agree in number: singular subjects need singular verbs, plural subjects need plural verbs.",
    examples: [
      "The bird sings. (singular: bird → sings)",
      "The birds sing. (plural: birds → sing)",
      "Each animal adapts. (each = singular)",
      "All animals adapt. (all = plural)"
    ],
    exercises: [
      { type: "fill", sentence: "The polar bear ___ in cold places. (live/lives)", answer: "lives" },
      { type: "fill", sentence: "Many species ___ endangered today. (is/are)", answer: "are" },
      { type: "fill", sentence: "Each habitat ___ a unique ecosystem. (form/forms)", answer: "forms" },
      { type: "fill", sentence: "Animals that migrate ___ long distances. (travel/travels)", answer: "travel" },
      { type: "fill", sentence: "The baby animal ___ for its mother. (call/calls)", answer: "calls" }
    ]
  },
  2: {
    title: "Present Tense vs. Past Tense",
    rules: "Use present tense for facts and habits. Use past tense for completed actions.",
    examples: [
      "Water evaporates. (fact) vs. Water evaporated yesterday. (past)",
      "Scientists observe changes. (habit) vs. The scientist observed the experiment. (past)",
      "The mixture dissolves. (fact) vs. The sugar dissolved. (past)"
    ],
    exercises: [
      { type: "fill", sentence: "Ice ___ into water when heated. (melt/melted)", answer: "melt" },
      { type: "fill", sentence: "Yesterday, the water ___ quickly. (evaporate/evaporated)", answer: "evaporated" },
      { type: "fill", sentence: "The scientist ___ the experiment carefully. (observe/observed)", answer: "observed" },
      { type: "fill", sentence: "Salt always ___ in water. (dissolve/dissolved)", answer: "dissolve" },
      { type: "fill", sentence: "Last week, they ___ a new hypothesis. (form/formed)", answer: "formed" }
    ]
  },
  3: {
    title: "Comparative & Superlative Adjectives",
    rules: "Comparatives compare two things (-er/more). Superlatives show the highest degree (-est/most).",
    examples: [
      "Solar energy is cleaner than fossil fuels. (comparative)",
      "Wind power is one of the most efficient energy sources. (superlative)",
      "Renewable energy is more sustainable than non-renewable energy."
    ],
    exercises: [
      { type: "fill", sentence: "Solar power is ___ than coal. (clean/cleaner)", answer: "cleaner" },
      { type: "fill", sentence: "Wind energy is one of the ___ sources. (efficient/most efficient)", answer: "most efficient" },
      { type: "fill", sentence: "This solution is ___ than that one. (good/better)", answer: "better" },
      { type: "fill", sentence: "Nuclear power is ___ dangerous. (more/most)", answer: "more" },
      { type: "fill", sentence: "The sun is the ___ source of energy. (powerful/most powerful)", answer: "most powerful" }
    ]
  },
  4: {
    title: "Prepositions of Place",
    rules: "Use in (inside), on (on surface), at (specific point) to show location.",
    examples: [
      "People live in communities.",
      "The school is on Main Street.",
      "Volunteers help at the community center.",
      "Different cultures live together in harmony."
    ],
    exercises: [
      { type: "fill", sentence: "Citizens have rights ___ their community. (in/at)", answer: "in" },
      { type: "fill", sentence: "The library is ___ the corner of the street. (in/at)", answer: "at" },
      { type: "fill", sentence: "Traditions are passed down ___ generations. (through/across)", answer: "through" },
      { type: "fill", sentence: "The festival is ___ April 15th. (on/at)", answer: "on" },
      { type: "fill", sentence: "People cooperate ___ each other. (with/for)", answer: "with" }
    ]
  },
  5: {
    title: "Passive Voice",
    rules: "Use passive voice when the action is more important than who does it: Object + be + past participle.",
    examples: [
      "The pyramids were built by ancient Egyptians.",
      "Artifacts are preserved in museums.",
      "History is documented by historians.",
      "Ancient cities were discovered by archaeologists."
    ],
    exercises: [
      { type: "fill", sentence: "The ancient city ___ by archaeologists in 1922. (discover/discovered/was discovered)", answer: "was discovered" },
      { type: "fill", sentence: "Artifacts ___ in museums for everyone to see. (preserve/are preserved)", answer: "are preserved" },
      { type: "fill", sentence: "The temple ___ hundreds of years ago. (build/was built)", answer: "was built" },
      { type: "fill", sentence: "History ___ through stories and documents. (learn/is learned)", answer: "is learned" },
      { type: "fill", sentence: "The fossil ___ by scientists last month. (find/was found)", answer: "was found" }
    ]
  },
  6: {
    title: "Modal Verbs (can, must, should)",
    rules: "Modal verbs express ability, obligation, or recommendation.",
    examples: [
      "We should cooperate to achieve our goals. (recommendation)",
      "Team members must communicate clearly. (obligation)",
      "Everyone can contribute to the team. (ability)",
      "We should encourage each other."
    ],
    exercises: [
      { type: "fill", sentence: "You ___ work together to finish the project. (must/can)", answer: "must" },
      { type: "fill", sentence: "Anyone ___ be a good leader. (must/can)", answer: "can" },
      { type: "fill", sentence: "We ___ persevere when facing challenges. (should/must)", answer: "should" },
      { type: "fill", sentence: "Team members ___ resolve conflicts calmly. (must/can)", answer: "must" },
      { type: "fill", sentence: "You ___ achieve great things with hard work. (can/must)", answer: "can" }
    ]
  }
};

// ===== PHONICS PRACTICE =====
const PHONICS_PRACTICE = {
  1: {
    title: "Long Vowel Patterns",
    patterns: ["a_e (make)", "i_e (like)", "o_e (home)", "u_e (use)"],
    words: [
      { word: "make", sound: "/meɪk/", tip: "a_e pattern" },
      { word: "habitat", sound: "/ˈhæbɪtæt/", tip: "short a" },
      { word: "survive", sound: "/sərˈvaɪv/", tip: "long i (i_e)" },
      { word: "migrate", sound: "/ˈmaɪɡreɪt/", tip: "long a and e" },
      { word: "predator", sound: "/ˈpredətər/", tip: "short e" },
      { word: "camouflage", sound: "/ˈkæməflɑːʒ/", tip: "short a, long o" }
    ],
    exercises: [
      { type: "match", instruction: "Match the word to its sound pattern:", items: [
        { word: "make", answer: "a_e (long a)" },
        { word: "habitat", answer: "short a" },
        { word: "migrate", answer: "long a, long e" }
      ]},
      { type: "listen", instruction: "Listen and identify the vowel sound:" }
    ]
  },
  2: {
    title: "Consonant Blends",
    patterns: ["st-", "sp-", "gr-", "pr-", "-nd", "-st"],
    words: [
      { word: "strong", sound: "/strɒŋ/", tip: "str- blend" },
      { word: "experiment", sound: "/ɪkˈsperɪmənt/", tip: "sp- blend" },
      { word: "process", sound: "/ˈprɒses/", tip: "pr- blend" },
      { word: "observe", sound: "/əbˈzɜːrv/", tip: "-bserve" },
      { word: "dissolve", sound: "/dɪˈzɒlv/", tip: "ss- blend" },
      { word: "evaporate", sound: "/ɪˈvæpəreɪt/", tip: "v- sound" }
    ],
    exercises: [
      { type: "blend", instruction: "Identify the consonant blend:", items: [
        { word: "strong", answer: "str-" },
        { word: "experiment", answer: "sp-" },
        { word: "process", answer: "pr-" }
      ]}
    ]
  },
  3: {
    title: "Silent Letters",
    patterns: ["kn-", "wr-", "-mb", "-ght"],
    words: [
      { word: "pollution", sound: "/pəˈluːʃən/", tip: "tion ending" },
      { word: "sustainable", sound: "/səˈsteɪnəbəl/", tip: "-ain pattern" },
      { word: "efficient", sound: "/ɪˈfɪʃənt/", tip: "-cient" },
      { word: "atmosphere", sound: "/ˈætməsfɪər/", tip: "-sphere" },
      { word: "resource", sound: "/ˈriːsɔːrs/", tip: "ou pattern" },
      { word: "conserve", sound: "/kənˈsɜːrv/", tip: "-serve" }
    ],
    exercises: [
      { type: "silent", instruction: "Which letter is silent?", items: [
        { word: "knight", answer: "k" },
        { word: "write", answer: "w" },
        { word: "crumb", answer: "b" }
      ]}
    ]
  },
  4: {
    title: " vowel digraphs",
    patterns: ["oo", "ee", "ea", "ou", "ow"],
    words: [
      { word: "community", sound: "/kəˈmjuːnɪti/", tip: "u_e pattern" },
      { word: "cooperate", sound: "/koʊˈɒpəreɪt/", tip: "o_e pattern" },
      { word: "generation", sound: "/ˌdʒenəˈreɪʃən/", tip: "-tion" },
      { word: "urban", sound: "/ˈɜːrbən/", tip: "ur sound" },
      { word: "volunteer", sound: "/ˌvɒlənˈtɪər/", tip: "-eer" },
      { word: "responsibility", sound: "/rɪˌspɒnsɪˈbɪlɪti/", tip: "-ibility" }
    ],
    exercises: [
      { type: "digraph", instruction: "Identify the vowel pattern:", items: [
        { word: "food", answer: "oo" },
        { word: "team", answer: "ea" },
        { word: "house", answer: "ou" }
      ]}
    ]
  },
  5: {
    title: "R-Controlled Vowels",
    patterns: ["ar", "er", "ir", "or", "ur"],
    words: [
      { word: "ancient", sound: "/ˈeɪnʃənt/", tip: "-cient" },
      { word: "preserve", sound: "/prɪˈzɜːrv/", tip: "pre- + serve" },
      { word: "era", sound: "/ˈɪərə/", tip: "-ra ending" },
      { word: "century", sound: "/ˈsentʃəri/", tip: "-ury" },
      { word: "historian", sound: "/hɪˈstɔːriən/", tip: "-orian" },
      { word: "dynasty", sound: "/ˈdaɪnəsti/", tip: "-asty" }
    ],
    exercises: [
      { type: "r-controlled", instruction: "Identify the r-controlled vowel:", items: [
        { word: "park", answer: "ar" },
        { word: "bird", answer: "ir" },
        { word: "turn", answer: "ur" }
      ]}
    ]
  },
  6: {
    title: "Suffixes & Endings",
    patterns: ["-tion", "-sion", "-ment", "-ness", "-ful", "-ly"],
    words: [
      { word: "leadership", sound: "/ˈliːdərʃɪp/", tip: "-ship" },
      { word: "communicate", sound: "/kəˈmjuːnɪkeɪt/", tip: "-ate" },
      { word: "motivation", sound: "/ˌmoʊtɪˈveɪʃən/", tip: "-tion" },
      { word: "effective", sound: "/ɪˈfektɪv/", tip: "-tive" },
      { word: "flexible", sound: "/ˈfleksɪbəl/", tip: "-ible" },
      { word: "persevere", sound: "/ˌpɜːrsɪˈvɪər/", tip: "-ere" }
    ],
    exercises: [
      { type: "suffix", instruction: "Identify the suffix:", items: [
        { word: "movement", answer: "-ment" },
        { word: "happiness", answer: "-ness" },
        { word: "carefully", answer: "-ly" }
      ]}
    ]
  }
};

// ===== EXTRA READING =====
const EXTRA_READING = {
  1: {
    title: "The Migration of Monarch Butterflies",
    level: "Grade 4-5",
    wordCount: 120,
    text: "Every autumn, millions of monarch butterflies make an incredible journey. These beautiful orange and black insects travel up to 3,000 miles from Canada to Mexico. This is one of the longest migrations in the insect world.\n\nMonarch butterflies cannot survive cold winters. When temperatures drop, they must fly south. The journey is dangerous. Birds, storms, and humans can harm them. But monarchs have a special advantage - they are poisonous to most predators. Bright colors warn other animals to stay away.\n\nThe butterflies use the sun to navigate. They also remember smells and landmarks. Scientists are still learning how they find their way. After three generations, the butterflies return to the same trees in Mexico. This amazing instinct helps them survive year after year.\n\nWe can help monarch butterflies by planting milkweed. This plant is the only food monarch caterpillars can eat. By protecting their habitat, we ensure these wonderful creatures continue their journey for generations to come.",
    questions: [
      { q: "How far do monarch butterflies travel during migration?", type: "literal" },
      { q: "Why can't monarch butterflies survive cold winters?", type: "literal" },
      { q: "How do monarch butterflies protect themselves from predators?", type: "inferential" },
      { q: "What can we do to help monarch butterflies?", type: "evaluative" }
    ]
  },
  2: {
    title: "The Amazing Water Cycle",
    level: "Grade 4-5",
    wordCount: 110,
    text: "Water is constantly moving around our planet in an endless cycle. This process, called the water cycle, has no beginning or end.\n\nIt starts when the sun heats water in oceans, lakes, and rivers. Warmth makes the water change into an invisible gas called water vapor. This process is called evaporation. The vapor rises into the air and forms clouds.\n\nAs clouds move over mountains or cool air, the vapor condenses back into tiny water droplets. When millions of these droplets come together, they form rain, snow, or hail. This is called precipitation.\n\nThe water then flows back to oceans and lakes through rivers and groundwater. Some water soaks into the soil and becomes groundwater. Plants also release water vapor through their leaves in a process called transpiration.\n\nThe water cycle repeats forever. It provides fresh water for all living things on Earth. Without this amazing process, life as we know it would not exist.",
    questions: [
      { q: "What is the water cycle?", type: "literal" },
      { q: "What is evaporation?", type: "literal" },
      { q: "Why is the water cycle important for life on Earth?", type: "inferential" },
      { q: "What role do plants play in the water cycle?", type: "literal" }
    ]
  },
  3: {
    title: "Solar Power: Energy from the Sun",
    level: "Grade 4-5",
    wordCount: 115,
    text: "The sun sends enormous amounts of energy to Earth every day. Scientists have learned to capture this energy using solar panels. Solar power is becoming one of the most important energy sources of the future.\n\nSolar panels contain special materials that change sunlight into electricity. When sunlight hits these panels, electrons move and create an electric current. This process is clean and produces no pollution. Unlike fossil fuels, solar energy will never run out as long as the sun shines.\n\nMany countries are now building large solar farms. These fields of solar panels can power entire cities. Solar energy is also becoming popular for homes. Roof-top solar panels can provide electricity for a single family.\n\nHowever, solar power has some challenges. Solar panels are expensive to make. They only work when the sun is shining. Cloudy days and nighttime reduce their effectiveness. Scientists are working to improve battery storage so solar energy can be used at any time.\n\nDespite these challenges, solar power is growing fast. It helps reduce carbon emissions and fights climate change. The sun provides enough energy to power the world many times over. Solar power is truly the energy of tomorrow.",
    questions: [
      { q: "How do solar panels create electricity?", type: "literal" },
      { q: "What are the advantages of solar power?", type: "literal" },
      { q: "What challenges does solar power face?", type: "literal" },
      { q: "Why is solar power important for fighting climate change?", type: "inferential" }
    ]
  },
  4: {
    title: "The Spirit of Volunteering",
    level: "Grade 4-5",
    wordCount: 105,
    text: "In cities and towns around the world, volunteers work tirelessly to help their communities. These generous people donate their time and skills without expecting payment.\n\nThere are many ways to volunteer. Some people work in food banks, serving meals to those in need. Others read to patients in hospitals or visit elderly neighbors. Many volunteers teach children or help clean up parks and beaches.\n\nVolunteering benefits everyone. The people who receive help get the support they need. But volunteers also gain valuable experiences. They learn new skills, meet interesting people, and feel a sense of purpose. Studies show that volunteers are often happier and healthier than non-volunteers.\n\nYoung people can volunteer too. Students often organize charity events at school. Some join youth groups that help the community. Even small acts of kindness count, like picking up litter or helping a classmate.\n\nCommunities grow stronger when people work together. Volunteering creates bonds between neighbors. It teaches us that every person can make a difference. The spirit of volunteering shows the best of human nature - caring, sharing, and building a better world together.",
    questions: [
      { q: "What is volunteering?", type: "literal" },
      { q: "What are some examples of volunteer work?", type: "literal" },
      { q: "How does volunteering benefit the volunteers themselves?", type: "inferential" },
      { q: "Why is volunteering important for communities?", type: "evaluative" }
    ]
  },
  5: {
    title: "Unlocking Secrets from the Past",
    level: "Grade 4-5",
    wordCount: 120,
    text: "Have you ever wondered what life was like thousands of years ago? Archaeologists are like detectives who study the past by examining objects left behind by ancient peoples.\n\nArchaeologists dig carefully in places where ancient people once lived. They use small brushes and tools to uncover artifacts without damaging them. Every object tells a story - pottery shows how people stored food, tools reveal their technology, and jewelry hints at their beliefs.\n\nSometimes archaeologists make exciting discoveries. In 1974, farmers in China found pieces of terracotta while digging a well. This led to one of the greatest archaeological finds - the Terracotta Army. Thousands of clay soldiers were buried to protect the tomb of Emperor Qin Shi Huang over 2,000 years ago.\n\nArchaeology helps us understand how civilizations developed. By studying ancient cultures, we learn about agriculture, government, art, and science. These lessons from the past can help us solve problems today.\n\nMuseums preserve and display artifacts so everyone can learn from them. Ancient civilizations may be gone, but their legacy lives on through the objects they left behind. Each artifact is a window into our shared human history.",
    questions: [
      { q: "What do archaeologists do?", type: "literal" },
      { q: "What is the Terracotta Army?", type: "literal" },
      { q: "How do objects help us understand ancient civilizations?", type: "inferential" },
      { q: "Why is it important to preserve artifacts?", type: "evaluative" }
    ]
  },
  6: {
    title: "The Power of Teamwork",
    level: "Grade 4-5",
    wordCount: 110,
    text: "Have you ever tried to move a heavy table by yourself? It is hard work! But with a friend to help, the job becomes much easier. This shows the power of teamwork.\n\nWorking in a team means combining different skills and ideas. Some people are good at planning, while others excel at doing. Some keep everyone motivated, while others focus on details. Together, the team can accomplish more than any individual could alone.\n\nGood teams have clear communication. Everyone shares their ideas and listens to others. When problems arise, team members work together to find solutions. A strong team encourages each member to do their best.\n\nThere is a famous saying: 'Many hands make light work.' This means when many people contribute, even difficult tasks become manageable. A single drop of water cannot move a stone, but many drops can carve a canyon over time.\n\nBeing a good team member takes practice. You must be reliable, respectful, and willing to compromise. Sometimes you must lead, and sometimes you must follow. Learning to work well with others is one of the most important skills you can develop. Teamwork not only helps us achieve goals but also brings joy and friendship along the way.",
    questions: [
      { q: "What does teamwork mean?", type: "literal" },
      { q: "What are the qualities of a good team?", type: "literal" },
      { q: "What does the saying 'Many hands make light work' mean?", type: "inferential" },
      { q: "Why is teamwork an important skill to develop?", type: "evaluative" }
    ]
  }
};
