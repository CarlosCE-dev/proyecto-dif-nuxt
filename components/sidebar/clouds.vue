<template>
    <div>
        <svg viewBox='0 0 105 105' class="cloud-two">
        <path d='M 25,60 
                a 20,20 1 0,0 0,40 
                h 50 
                a 20,20 1 0,0 0,-40 
                a 10,10 1 0,0 -15,-10 
                a 15,15 1 0,0 -35,10  
                z' />
        </svg>

        <svg viewBox='0 0 105 105' class="cloud-one">
        <path d='M 25,60 
                a 20,20 1 0,0 0,40 
                h 50 
                a 20,20 1 0,0 0,-40 
                a 10,10 1 0,0 -15,-10 
                a 15,15 1 0,0 -35,10  
                z' />
        </svg>

        <svg viewBox='0 0 105 105' class="cloud-three">
        <path d='M 25,60 
                a 20,20 1 0,0 0,40 
                h 50 
                a 20,20 1 0,0 0,-40 
                a 10,10 1 0,0 -15,-10 
                a 15,15 1 0,0 -35,10  
                z' />
        </svg>

        <svg viewBox='0 0 105 105' class="cloud-four">
        <path d='M 25,60 
                a 20,20 1 0,0 0,40 
                h 50 
                a 20,20 1 0,0 0,-40 
                a 10,10 1 0,0 -15,-10 
                a 15,15 1 0,0 -35,10  
                z' />
        </svg>

        <svg viewBox='0 0 105 105' class="cloud-five">
        <path d='M 25,60 
                a 20,20 1 0,0 0,40 
                h 50 
                a 20,20 1 0,0 0,-40 
                a 10,10 1 0,0 -15,-10 
                a 15,15 1 0,0 -35,10  
                z' />
        </svg>

    </div>
</template>
<style scoped>
.cloud-two{
    z-index: -1;
    position: absolute;
    left: 10%;
    bottom: 8%;
    height:120px;
    width: 180px;
}
.cloud-one{
    z-index: -1;
    position: absolute;
    right: 5%;
    bottom: 5%;
    height:80px;
    width: 140px;
}

.cloud-three{
    z-index: -1;
    position: absolute;
    left: -17%;
    bottom: 12%;
    height:80px;
    width: 140px;
}
.cloud-four{
    z-index: -1;
    position: absolute;
    right: -17%;
    top: 12%;
    height:80px;
    width: 140px;
}
.cloud-five{
    z-index: -1;
    position: absolute;
    left: -3%;
    top: -4%;
    height:140px;
    width: 190px;
}
path {
    opacity: 0.7;
    fill: white;
    stroke-linejoin: round;
}
</style>