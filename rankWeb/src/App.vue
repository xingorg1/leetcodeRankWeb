<template>
  <a-button type="primary">打卡</a-button>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #name="{ text }">
      <a>{{ text }}12</a>
    </template>
    <template #title>排行榜</template>
    <template #footer>看我不卷死你们</template>
  </a-table>
</template>
<script setup>
import { userCount } from "./configs/usercount";
import axios from "axios";
import { reactive } from "@vue/reactivity";
const text = "排行榜";
const columns = [
  {
    title: "排名",
    dataIndex: "rank",
    slots: { customRender: "rank" },
  },
  {
    title: "头像",
    className: "user-avatar",
    dataIndex: "userAvatar",
  },
  {
    title: "真实名称",
    dataIndex: "realName",
  },
  {
    title: "力扣地址", // （userSlug跳转）
    dataIndex: "userSlug",
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

const data = reactive([]);

axios
  .post("/leetcode/graphql", {
    operationName: "userPublicProfile",
    query:
      "query userPublicProfile($userSlug: String!) {\n  userProfilePublicProfile(userSlug: $userSlug) {\n    username\n    profile {\n      userSlug\n      realName\n      userAvatar\n      __typename\n    }\n    submissionProgress {\n      totalSubmissions\n      acSubmissions\n      acTotal\n      __typename\n    }\n    __typename\n  }\n}\n",
    variables: {
      userSlug: userCount[0],
    },
    userSlug: userCount[0],
  })
  .then((res) => {
    let newData = res.data.data.userProfilePublicProfile;
    const { realName, userAvatar, userSlug } = newData.profile;
    const { acTotal, totalSubmissions, acSubmissions } =
      newData.submissionProgress;
    console.log(newData);
    data.push({
      key: "1",
      rank: 1,
      realName,
      userAvatar,
      userSlug,
      acTotal,
      totalSubmissions,
      acSubmissions,
    });
  })
  .catch((err) => {
    console.log(err);
  });
</script>
<style lang="less" scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
