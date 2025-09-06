<template>
    <div id='back'>
        <div id="container">
            <div class='card' id="a"></div>
            <div class='card' id="b"></div>
            <div class='card' id="c"></div>
            <div class='card' id="d"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#back {
    background-color: white;
}

#container {
    width: 400px;
    height: 300px;
    display: grid;
    place-items: center;
    border: 2px solid violet;
    position: relative;
    box-shadow: 0px 0px 30px -10px rgba(50, 23, 23, 0.3);
}

.card {
    width: 140px;
    height: 230px;
    background-color: aquamarine;
    position: absolute;
    cursor: pointer;
    transition: all 0.3s ease-in-out
}

#container:hover #a {
    transform: translateX(20px) rotate(10deg)
}

#container:hover #b {
    transform: translateX(-10px)
}

#container:hover #c {
    transform: translateX(-50px) rotate(-20deg)
}

#container:hover #d {
    transform: translateX(-100px) rotate(-30deg)
}

#a {
    background-color: yellow;
}

#a:hover {
    transform: translateX(40px) translateY(15px) !important;
}

#b {
    background-color: green;
}

#b:hover {
    transform: translateY(10px) !important;
}

#c {
    background-color: red;
}

#c:hover {
    transform: translateY(-20px) !important;
}

#d {
    background-color: antiquewhite;
}

#d:hover {
    transform: translateX(-30px) translateY(5px) !important;
}
</style>