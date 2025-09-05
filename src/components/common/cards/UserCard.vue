<template>
    <div id="userCard">
        <div id="userPhoto"></div>
        <div id="userInformation"></div>
        <div id="userJob"></div>
        <div id="userContact">
            <div v-if='user_list.length > 0'>
                <ul id="userlist">
                    <li v-for='user in user_list' :key="user.account">
                        {{ user.username }} - {{ user.email }}
                    </li>
                </ul>
            </div>
            <div v-else>
                <em>暂无联系人</em>
            </div>
        </div>
        <div id="cardButton"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import userAPI from '../../../api/user'


let user_list = ref([])
onMounted(
    () => {
        userAPI.getAllUsers().then(
            json => {
                console.log("json文件的data：", json.data)
                json.data.forEach(item => {
                    if (item.username && item.username.trim() !== '' && item.email !== '') {
                        user_list.value.push(item)
                    }
                })
                console.log('user_list是否装填数据：', user_list.value.length)
            }
        ).catch(error => {
            console.log("在userCard里报错：", user_list)
        })
    }
)



</script>

<style lang="scss" scoped>
#userCard {
    width: 400px;
    max-height: 1000px;
    display: flex;
    flex-direction: column;
    border: 2px solid cyan;
    // align-items: center;
    justify-self: center;
}

#userPhoto {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    background-color: blueviolet;
    margin-left:0px;
    transition: all 0.5s ease-in-out;
}

#userPhoto:hover {
    transform: translateX(30px) rotate(90deg) scale(85%) skew(10deg)
}

#userInformation {
    width: 400px;
    height: 300px;
    border: 1px solid black;
}

#userJob {
    width: 400px;
    height: 100px;
    border: 1px solid black;
}

#userContact {
    width: 400px;
    max-height: 200px;
    border: 1px solid black;
}

#userlist {
    display: flex;
    list-style-type: none;
    font-size: 13px;
    flex-direction: column;
    align-items: flex-start;
}

#cardButton {
    width: 400px;
    height: 100px;
    border: 1px solid black;
}
</style>