export const userHref = [
  'https://leetcode-cn.com/u/xingorg1/',
  'https://leetcode-cn.com/u/ban-cheng-zhi/',
  'https://leetcode-cn.com/u/gu-yao-c/',
  'https://leetcode-cn.com/u/adah-r/',
  'https://leetcode-cn.com/u/inspiring-sinoussi1ht/',
  'https://leetcode-cn.com/u/pang-pang-2/',
  'https://leetcode-cn.com/u/zhao-jia-d/',
  'https://leetcode-cn.com/u/bei-xi-zi-du/',
  'https://leetcode-cn.com/u/zou-chang-qing/',
  'https://leetcode-cn.com/problems/binary-search/',
  'https://leetcode-cn.com/u/boring-karektx/',
  'https://leetcode-cn.com/u/ping-zhong-zi/',
  'https://leetcode-cn.com/u/will-6f/',
  'https://leetcode-cn.com/u/MyEnglandGirl/'
]
export const userCount = [
  'xingorg1',
  'ce-bu-zhun-2',
  'ban-cheng-zhi',
  'gu-yao-c',
  'adah-r',
  'inspiring-sinoussi1ht',
  'pang-pang-2',
  'zhao-jia-d',
  'bei-xi-zi-du',
  'zou-chang-qing',
  'boring-karektx',
  'ping-zhong-zi',
  'MyEnglandGirl',
  'will-6f'
]

export const tableColumns = [{
    dataIndex: "rank",
    className: "user-rank",
    key: 'rank',
    slots: {
      title: 'customTitle',
      customRender: "rank"
    },
  },
  {
    title: "队员",
    className: "user-avatar",
    dataIndex: "userAvatar",
    key: "userAvatar",
    slots: {
      customRender: 'userAvatar'
    },
  },
  // {
  //   title: "真实名称",
  //   dataIndex: "realName",
  // },
  {
    title: "LeetCode主页", // （userSlug跳转）
    dataIndex: "userSlug",
    key: "userSlug",
    slots: {
      customRender: 'userSlug'
    },
  },
  {
    title: "题目通过总数",
    dataIndex: "acTotal",
  },
  {
    title: "过去一年内总提交数",
    dataIndex: "totalSubmissions",
  },
  {
    title: "通过的提交数",
    dataIndex: "acSubmissions",
  },
];