<template>
  <!-- <a-button type="primary">打卡</a-button> -->
  <a-table
    :columns="tableColumns"
    :data-source="data"
    bordered
    :loading="tableLoading"
    :pagination="{
      pageSize: 20,
    }"
    :locale="{
      emptyText: '咋回事儿？没有数据呢！还是问问小石头吧 🙈'
    }"
  >
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span>
        <FireTwoTone twoToneColor="#F40" />
        排名
      </span>
    </template>
    <template #userAvatar="{ text, record }">
      <span>
        <a-avatar size="large" :src="text" v-if="text" />
        <a-avatar size="large" style="background-color: #87d068" v-else>
          <template #icon><UserOutlined /></template>
        </a-avatar>
      </span>
      <span style="margin-left: 10px">
        <a-tag color="red" v-if="record.rank === 1">
          {{ record.realName }}</a-tag
        >
        <a-tag color="orange" v-else-if="record.rank === 2">{{
          record.realName
        }}</a-tag>
        <a-tag color="green" v-else-if="record.rank === 3">{{
          record.realName
        }}</a-tag>
        <a-tag color="default" v-else>{{ record.realName }}</a-tag>
      </span>
    </template>
    <template #userSlug="{ text }">
      <span>
        <a-typography-link
          :href="`https://leetcode-cn.com/u/${text}/`"
          target="_blank"
        >
          {{ text }}
        </a-typography-link>
      </span>
    </template>
    <template #title>🌪 算法小分队刷题排行榜</template>
    <template #footer>
      <span style="float: left; color: #999;">
        <a href="https://github.com/xingorg1/leetcodeRank" target="_blank" style="margin-right: 10px">【 打卡地址 】</a>
        (打不开左边Github地址的可以先看
        <a href="https://gitee.com/xingorg1/algorithmic-clock-out" target="_blank">旧打卡地址</a>)
      </span>
      各位只管加油~ 我们相约顶峰。💪💪💪
    </template>
  </a-table>
</template>
<script setup>
import { userCount, tableColumns } from "./configs/usercount";
import { message, notification } from "ant-design-vue";
import { FireTwoTone, UserOutlined } from "@ant-design/icons-vue";
import axios from "axios";
import { reactive, ref, onMounted} from "vue";

onMounted(() => {
  // 所以关闭群邀请，请加我好友并备注「算法」拉你进群。。
  if(localStorage.getItem('qdyj-notice')) return
  notification.open({
    message: '算法小分队进阶打卡交流群',
    duration: null,
    description: '力求做专注算法的高质量成长社群，想加群的同学可以在公众号「前端印记」后台回复关键字「算法」。如未下定决心学算法请不要盲目加群。',
    onClose: () => {
      localStorage.setItem('qdyj-notice', true)
    },
  });
})
const data = reactive([]);
const tableLoading = ref(true);
let promiseArr = userCount.map((userSlug) => {
  return axios.post("/leetcode/graphql", {
    operationName: "userPublicProfile",
    query:
      "query userPublicProfile($userSlug: String!) {\n  userProfilePublicProfile(userSlug: $userSlug) {\n    username\n    profile {\n      userSlug\n      realName\n      userAvatar\n      __typename\n    }\n    submissionProgress {\n      totalSubmissions\n      acSubmissions\n      acTotal\n      __typename\n    }\n    __typename\n  }\n}\n",
    variables: {
      userSlug,
    },
    userSlug,
  });
});
// console.log(promiseArr);
// console.log(Promise);
Promise.all(promiseArr)
  .then((res) => {
    console.log(res);
    message.success("面对疾风吧！😏😏😏");
    if (res && res.length > 0) {
      res.forEach((item, i) => {
        try {
          let newData = item.data.data.userProfilePublicProfile;
          // if(!newData) return 
          const { realName, userAvatar, userSlug } = newData.profile;
          const { acTotal, totalSubmissions, acSubmissions } =
            newData.submissionProgress;
          // console.log(newData);
          data.push({
            key: i + 1 + "",
            rank: 1,
            realName,
            userAvatar,
            userSlug,
            acTotal,
            totalSubmissions,
            acSubmissions,
          });
        }
        catch(err) {
          console.log(err)
          message.error("😯阿欧! 有人账号404了🙈~ 快去告诉石头姐！");
        }
      });
      data.sort((a, b) => -a.acTotal + b.acTotal);
      data.map((item, i) => (item.rank = i + 1));
    }
  })
  .catch((err) => {
    console.log(err);
    message.error("😯阿欧! leetcode不肯给数据🙈~ 快去告诉石头姐！");
  })
  .finally(() => {
    tableLoading.value = false;
  });

/* 
// 请求一个人的数据
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
    if(!newData) return 
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
*/
</script>
<style lang="less">
.ant-table-wrapper {
  max-width: 900px;
  margin: 0 auto;
  .ant-table .ant-table-title {
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    background: #cf1423;
    color: #fff;
  }
}
.ant-table .ant-table-footer {
  color: #f40;
  text-align: right;
}
th.column-money,
td.column-money {
  text-align: right !important;
}
.user-rank {
  text-align: center;
}
tbody .user-rank {
  text-align: center;
  font-size: 16px;
  font-weight: 900;
}
</style>
