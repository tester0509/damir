let max_y;
let max_x;
const img_w =40;
const img_h =52;
let scene_w = 80;
let scene_id = 1;


function createScene(){
    document.querySelector('main').classList.add('game-scene');
    document.querySelector('main').classList.remove('start-class');
    document.querySelector('#start-btn').remove();
    //Math.floor(document.querySelector('main').clientWidth/20);

    for (let i = 0; i < Math.floor(document.querySelector('main').clientHeight/20)+1; i++) {
        for (let j = 0; j < scene_w; j++) {
            let kub = document.createElement('div');
            kub.classList.add('kub');
            kub.setAttribute('x',j);
            kub.setAttribute('y',i);
            document.querySelector('main').append(kub);
        }
    }

    max_y=Math.floor(document.querySelector('main').clientHeight/20);
    max_x=60;
    generator();
    let damir = document.createElement('img');
    damir.src = 'img/players/damir.png';
    damir.classList.add('player');
    set_player(1,max_y-10,damir);

    let dar = document.createElement('img');
    dar.src = 'img/players/daria.png';
    dar.classList.add('dar');
    set_player(50,max_y-17,dar);

    gravity(damir);
    document.querySelector('main').append(damir);
    document.querySelector('main').append(dar);
    //document.querySelector('main').style.width = 20*60+'px;';
    //document.querySelector('main').style.height = 'auto';
    document.querySelector('main').setAttribute('style','width:'+20*scene_w+'px; height:auto;')
    document.querySelector('body').setAttribute('style','position: fixed;');
    render(18,14,'glass');
    render(19,14,'glass');
    render(18,15,'glass');
    render(19,15,'glass');
    render(4,max_y-8,'brick');
    //render(4,23,'brick');
    //render(4,22,'brick');
    render(49,max_y-8,'tnt_side');

    render(50,max_y-8,'stonebricksmooth');
    render(51,max_y-8,'stonebricksmooth');
    render(52,max_y-8,'stonebricksmooth');
    render(53,max_y-8,'stonebricksmooth');
    render(54,max_y-8,'stonebricksmooth');
    render(50,max_y-9,'stonebricksmooth');
    render(51,max_y-9,'stonebricksmooth');
    render(52,max_y-9,'stonebricksmooth');
    render(53,max_y-9,'stonebricksmooth');
    render(54,max_y-9,'stonebricksmooth');
    render(50,max_y-10,'stonebricksmooth');
    render(51,max_y-10,'stonebricksmooth');
    render(52,max_y-10,'stonebricksmooth');
    render(53,max_y-10,'stonebricksmooth');
    render(54,max_y-10,'stonebricksmooth');

    render(50,max_y-11,'stonebricksmooth');
    render(51,max_y-11,'stonebricksmooth');
    render(52,max_y-11,'stonebricksmooth');
    render(53,max_y-11,'stonebricksmooth');
    render(54,max_y-11,'stonebricksmooth');

    render(50,max_y-12,'stonebricksmooth');
    render(51,max_y-12,'stonebricksmooth');
    render(52,max_y-12,'stonebricksmooth');
    render(53,max_y-12,'stonebricksmooth');
    render(54,max_y-12,'stonebricksmooth');

    render(50,max_y-13,'stonebricksmooth');
    render(51,max_y-13,'stonebricksmooth');
    render(52,max_y-13,'stonebricksmooth');
    render(53,max_y-13,'stonebricksmooth');
    render(54,max_y-13,'stonebricksmooth');

    render(50,max_y-14,'stonebricksmooth');
    render(51,max_y-14,'stonebricksmooth');
    render(52,max_y-14,'stonebricksmooth');
    render(53,max_y-14,'stonebricksmooth');
    render(54,max_y-14,'stonebricksmooth');

    render(50,max_y-15,'stonebricksmooth');
    render(51,max_y-15,'stonebricksmooth');
    render(52,max_y-15,'stonebricksmooth');
    render(53,max_y-15,'stonebricksmooth');
    render(54,max_y-15,'stonebricksmooth');

    render(50,max_y-16,'stonebricksmooth');
    render(51,max_y-16,'stonebricksmooth');
    render(52,max_y-16,'stonebricksmooth');
    render(53,max_y-16,'stonebricksmooth');
    render(54,max_y-16,'stonebricksmooth');

    render(49,max_y-16,'wood_spruce');
    render(55,max_y-16,'wood_spruce');

    render(52,max_y-17,'bed_feet_side');
    render(53,max_y-17,'bed_head_side');
    render(55,max_y-17,'redstoneLight_lit');


    //render(20,max_y-8,'rose');
    render(27,max_y-8,'flower');
    render(30,max_y-8,'mushroom_red');
    render(37,max_y-8,'crops_7');
    render(10,max_y-8,'rose');
    //render(16,max_y-8,'rose');
    render(22,max_y-8,'flower');

    render(40,max_y-15,'stonebricksmooth');
    render(44,max_y-16,'stonebricksmooth');
}

function render(x,y,name){
    let element = document.querySelectorAll('[x="'+x+'"')[y];
    element.setAttribute('style','background-image: url(img/textures/'+name+'.png);');
}

function generator(){
    generate_line(max_y,'dirt');
    generate_line(max_y-1,'dirt');
    generate_line(max_y-2,'dirt');
    generate_line(max_y-3,'dirt');
    generate_line(max_y-4,'dirt');
    generate_line(max_y-5,'dirt');
    generate_line(max_y-6,'dirt');
    generate_line(max_y-7,'grass_side');
}

function generate_line(y,name){
    for (let i = 0; i < scene_w; i++) {
        render(i,y,name);
    }
}

function set_player(x,y,player){
    console.log(x);
    player.setAttribute('style','transform: translate('+20*x+'px,'+(20*(y+1)-img_h)+'px);');
    player.setAttribute('x',x);
    player.setAttribute('y',y);
}

function img_coord(c,type){
    return (20*(c+1)-img_h);
}

function check_block(x,y){
    return document.querySelectorAll('[x="'+x+'"')[y].hasAttribute('style');
}

function gravity(player){
    if(!((check_block(Number(player.getAttribute('x')),Number(player.getAttribute('y'))+1))||(check_block(Number(player.getAttribute('x'))+1,Number(player.getAttribute('y'))+1)))){
        set_player(Number(player.getAttribute('x')),Number(player.getAttribute('y'))+1,player);
        setTimeout(gravity, 500,player);
        //gravity(player);
    }
}

function move_scene(player) {
    let max_x_id = Math.floor(window.innerWidth/20)*scene_id;

    if(player.getAttribute('x')>=max_x_id){
        document.querySelector('main').setAttribute('style',document.querySelector('main').getAttribute('style')+' transform: translateX(-'+max_x_id*20+'px);');
        scene_id++;
    }
}

document.getElementById('start-btn').addEventListener("click", createScene);

document.getElementById('right').onclick = function (){
    let player = document.getElementsByClassName('player')[0];
    if(!check_block(Number(player.getAttribute('x'))+2,Number(player.getAttribute('y')))){
        move_scene(player);
        set_player(Number(player.getAttribute('x'))+1,Number(player.getAttribute('y')),player);
        gravity(player);
    }
    
};

document.getElementById('left').onclick = function (){
    let player = document.getElementsByClassName('player')[0];
    if(!check_block(Number(player.getAttribute('x'))-1,Number(player.getAttribute('y')))){
        set_player(Number(player.getAttribute('x'))-1,Number(player.getAttribute('y')),player);
        gravity(player);
    }
};

document.getElementById('top').onclick = function (){
    let player = document.getElementsByClassName('player')[0];
    set_player(Number(player.getAttribute('x')),Number(player.getAttribute('y'))-3,player);
    gravity(player);
};