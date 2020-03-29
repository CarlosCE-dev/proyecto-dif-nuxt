<template>
    <div>
        <div class="bg-alumno">
            <span class="cuadrado azul">
                <img class="wave_one" src="~/assets/images/wave.svg" />
                <img class="wave_two" src="~/assets/images/wave_two.svg" />
                <span class="circle"></span>
                <img class="children" src="~/assets/images/children_4rtb.svg" />
            </span>
        </div>
    </div>
</template>

<style scoped>
.children{
    z-index: 4;
    right: 0px;
    bottom: -5px;
    position: absolute;
    width: 300px;
}
.wave_one{
    width: 100%;
    z-index: 1;
    right: 0px;
    bottom: -5%;
    position: absolute;
}
.wave_two{
    width: 100%;
    opacity: 0.6;
    z-index: 1;
    right: 0px;
    bottom:  0px;
    position: absolute;
}
.bg-alumno{
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 200px;
}
.cuadrado{
    overflow: hidden;
    border-radius: 15px;
    top: 0px;
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
}
.circle{
    z-index: 1;
    border-radius: 50%;
    display: block;
    background-color: white;
    height: 136px;
    width: 136px;
    opacity: 0.6;
    position: absolute;
    left: 12px;
    bottom: -40px;
}
@media screen and (min-width:1024px){
    .wave_one{
        bottom: -40%;
    }
    .wave_two{
        bottom: -30%;
    }
}

@media screen and (max-width: 430px){
    .children{
        width: 250px;
    }
}
</style>