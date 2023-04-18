let songindex=0;
let audioelement= new Audio('songs/1.mp3')
let masterplay=document.getElementById('masterplayicon')
let myprogressbar=document.getElementById('myProgressBar')
let gif=document.getElementById('gifimage')
let mastersongname=document.getElementById('mastersongname')

let songitems= Array.from(document.getElementsByClassName('songitem'))

let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba- Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan- Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena- Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam- Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana-Salam- e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songitems.forEach((element,i)=>{

    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('songname')[0].innerText= songs[i].songName

})


masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
       
        masterplay.classList.remove('fa-circle-play');
        
        masterplay.classList.add('fa-circle-pause');
        
        gif.style.opacity = 1;
    }else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity= 0;
    }
})

audioelement.addEventListener('timeupdate',()=>{

   let progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
  
  
    myprogressbar.value=progress
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value * audioelement.duration/100
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemsplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songitemsplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeallplays()
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioelement.src=`songs/${songindex+1}.mp3`
        mastersongname.innerText=songs[songindex].songName
        audioelement.currentTime=0;
        audioelement.play()
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')

    })
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }else{
        songindex-=1;
    }

    audioelement.src=`songs/${songindex+1}.mp3`
    mastersongname.innerText=songs[songindex].songName
    audioelement.currentTime=0;
    audioelement.play()
    
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-pause-circle')
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0
    }else{
        songindex+=1;
    }

    audioelement.src=`songs/${songindex+1}.mp3`
    mastersongname.innerText=songs[songindex].songName
    audioelement.currentTime=0;
    audioelement.play()
   
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-pause-circle')
})


Array.from(document.getElementsByClassName('songitemsplay')).forEach((element)=>{
    console.log(element)

    element.addEventListener('click',(e)=>{
        songindex=parseInt(e.target.id)
        if(audioelement.paused || audioelement.currentTime<=0){
            audioelement.src=`songs/${songindex+1}.mp3`
            audioelement.play();
           console.log(e)
            e.target.classList.remove('fa-circle-play');
            
            e.target.classList.add('fa-circle-pause');
            
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')

        }else{
            audioelement.src=`songs/${songindex+1}.mp3`
            audioelement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            gif.style.opacity= 0;
            masterplay.classList.remove('fa-circle-pause')
            masterplay.classList.add('fa-circle-play')

        }

    })

})

