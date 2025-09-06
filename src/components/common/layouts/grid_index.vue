<template>
    <div class="container">
        <div id="box" class="one">
            <div>{{ Props.id }}</div>
            <div>{{ Props.message }}</div>
            <input type="number" v-model="putin" placeholder="输入你喜欢的Id">
            <button @click="changeId">更新ID</button>
        </div>
        <!-- <div id="box">2</div> -->
        <div id="box" class="three">3</div>
        <div id="box">4</div>
        <div id="box" class='five'>5</div>
        <!-- <div id="box">6</div> -->
        <!-- <div id="box">7</div> -->
        <div id="box">8</div>
        <!-- <div id="box">9</div> -->
        <!-- <div id="box">10</div> -->
        <!-- <div id="box">11</div> -->
        <div id="box">12</div>
    </div>
</template>

<script setup>
//运行时 api需要导入
import {ref,inject} from 'vue'
//编译时宏 api不需要直接导入
const Props = defineProps({
    message: {
        required: 1,
        // difineProps内部使用toRaw()API,实现解包，拿到.value
        type: String
    },
    id: {
        required: 1,
        type: Number
    }
})

const emit = defineEmits(['id-change'])
let putin = ref('')
function changeId() {
    const newId = parseInt(putin.value)
    emit('id-change',newId)
}

let data = inject('data')
let change = inject('changeData')
change('孙改值')
console.log(data)

</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.container {
    width: 100vw;
    height: 95vh;
    background-color: aquamarine;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 5px;
}

#box {
    background: tomato;
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:5px;
    font-size: 40px;
    color: beige
}

.one {
    grid-column: span 2;
}

.three {
    grid-row: span 3;
}

.five {
    grid-area: span 2/span 2;
}

button {
    width:50px;
    height:20px;
    font-size: 12px;
    background-color: antiquewhite;
}
</style>